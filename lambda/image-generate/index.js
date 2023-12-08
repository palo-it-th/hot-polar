import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

async function generateImage(text) {
    try {
        const modelId = "amazon.titan-image-generator-v1";
        const body = {
            taskType: "TEXT_IMAGE",
            textToImageParams: {
                text,
                negativeText: "violence"
            },
            imageGenerationConfig: {
                numberOfImages: 1,
                quality: "standard",
                height: 384,
                width: 576,
                cfgScale: 8.0,
                seed: 0
            }
        }

        const bedrockruntime = new BedrockRuntimeClient({
            region: 'us-east-1',
            apiVersion: '2023-09-30',
        });

        const params = {
            body: Buffer.from(JSON.stringify(body)),
            modelId,
            contentType: 'application/json',
            accept: '*/*'
        };

        const command = new InvokeModelCommand(params)
        console.log('Generating image...')
        const data = await bedrockruntime.send(command);
        console.log('Generated image.')
        const decoded = Object.values(data.body).map(code => String.fromCharCode(code)).join('');
        // console.log(decoded)
        const parsed = JSON.parse(decoded);
        // console.log(parsed.images.length)
        // const base64 = parsed.images[0];
        return parsed.images[0];

        // const image = Buffer.from(base64, "base64")
        // writeFileSync("image.png", image)
    } catch (error) {
        console.log(error)
    }
}

export const handler = async (event, context) => {
    try {
        const data = JSON.parse(event.body)
        const {
            text
        } = data;
        const image = await generateImage(text);
        console.log(image);
        return {
            statusCode: 200,
            body: {
                image,
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
