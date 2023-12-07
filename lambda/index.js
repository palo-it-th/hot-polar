import { BedrockRuntimeClient, InvokeModelCommand, InvokeModelWithResponseStreamCommand } from "@aws-sdk/client-bedrock-runtime";
import { fromEnv } from "@aws-sdk/credential-providers";
// import { Auth } from 'aws-amplify';

export const handler = async (event = {}, context) => {
    console.log('Event: ', event);
    console.log(context)
    // console.log(event.body)
    const data = JSON.parse(event.body)
    const inputPrompt = data.prompt;
    console.log(inputPrompt)
    // const {
    //     prompt = "What are the earth's dimensions?",
    //     maxTokens = 300,
    //     temperature = 1,
    //     topK = 250,
    //     topP = 0.999,
    //     stopSequences = ["\n\nHuman:"],

    //     modelId = 'anthropic.claude-v2:1',
    //     contentType = 'application/json',
    //     accept = '*/*',
    //     stream = false
    // } = event.body;

    const maxTokens = 300;
    const temperature = 1;
    const anthropicVersion = "bedrock-2023-05-31"
    const modelId = 'anthropic.claude-v2:1';

    // Modify the prompt to include "Human:" at the beginning and "Assistant:" at the end for Anthropic Claude.
    const formattedPrompt = `Human: ${inputPrompt}\nAssistant:`;

    try {
        // const credentials = await Auth.currentCredentials();

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
        // return {
        //     statusCode: 200,
        //     decoded
        // };
        return {
            statusCode: 200,
            body: decoded,
            headers: {
                'Content-Type': 'application/json',
            }
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// export default invokeBedrockModel;
