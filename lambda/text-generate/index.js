import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

async function generateText(data) {
    const {
        gender,
        age,
        livesIn,
        occupation,
        hobby,
        allergy
    } = data

    const constructedPrompt = `I want you to come up with a prediction based on the 
            following information in the next 10 years based on air pollution in Thailand. 
            Focus specifically on negative health impacts, social and environmental impacts, 
            and the specific location and quality of life. 
            Gender: ${gender}. 
            Age: ${age}. 
            Lives in: ${livesIn}. 
            Occupation: ${occupation}. 
            Hobby: ${hobby}. 
            Allergy: ${allergy}
        `;

    console.log(constructedPrompt);

    const maxTokens = 600;
    const temperature = 1;
    const anthropicVersion = "bedrock-2023-05-31"
    const modelId = 'anthropic.claude-v2:1';

    // Modify the prompt to include "Human:" at the beginning and "Assistant:" at the end for Anthropic Claude.
    const formattedPrompt = `Human: ${constructedPrompt}\nAssistant:`;

    try {
        const bedrockruntime = new BedrockRuntimeClient({
            region: 'us-east-1',
            apiVersion: '2023-09-30',
            // credentials: {
            //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            // }
        });

        const requestBody = {
            prompt: formattedPrompt,
            max_tokens_to_sample: maxTokens,
            temperature,
            top_k: 250,
            top_p: 0.999,
            stop_sequences: ["\n\nHuman:"],
            anthropic_version: anthropicVersion
        };

        const params = {
            body: Buffer.from(JSON.stringify(requestBody)),
            modelId,
            contentType: 'application/json',
            accept: '*/*'
        };

        const command = new InvokeModelCommand(params);
        const data = await bedrockruntime.send(command);
        const decoded = Object.values(data.body).map(code => String.fromCharCode(code)).join('');
        console.log(decoded)
        return decoded;
    } catch (error) {
        console.log(error)
        return error.message
    }
}

export const handler = async (event, context) => {
    try {
        const data = JSON.parse(event.body)
        let generateTextResponse = await generateText(data);
        generateTextResponse = JSON.parse(generateTextResponse)
        const {
            completion
        } = generateTextResponse;
        if (!completion) {
            return {
                statusCode: 400,
                body: {
                    message: 'Generate text failed'
                },
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        }
        let splitText = completion.split('\n\n')
        return {
            statusCode: 200,
            body: {
                text: completion,
                split: splitText
            },
            headers: {
                'Content-Type': 'application/json',
            }
        }
    } catch (e) {
        console.log(e)
        return {
            statusCode: 500,
            body: {
                message: e.message
            },
            headers: {
                'Content-Type': 'application/json',
            }
        }
    }
}

