import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";
import { SECRET_PROMPT_CASCA_BOT } from './prompts/bot_cascabot';

dotenv.config();

const prompt = "Hola ¿quién eres?";
const secretPromtp = SECRET_PROMPT_CASCA_BOT;

// se puede sacar en un archivo aparte
const configuration = new Configuration({
    apiKey: process.env.GPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

const main = async () => {
    if (process.env.GPT_MODEL !== undefined) {
        const response = await openai.createCompletion({
            prompt: secretPromtp+prompt,
            model: process.env.GPT_MODEL,
            max_tokens: 200,
            temperature: 0.9,
        })
        // console.log(secretPromtp + prompt,"miprompt");
        
        if (response.data) {
                // Verificar que el choices sea un array con al menos un elemento
            let isArray: any = Array.isArray(response.data.choices) && response.data.choices.length > 0;
            const responseIA: string | undefined = response.data.choices[0].text;
            if (isArray) {
                // Acceder al primer elemento del array y a su propiedad text
                console.log(response.data, "DATA");
                console.log(responseIA, "Respuesta del modelo"); 
                return
            } else {
                console.log(response.data, "DATA");
                // Manejar el caso en que el choices no sea un array o esté vacío
                console.error("El choices no es un array o está vacío");
                return
            }
            
        } 
    }
};
const getEngines = async () => {
        // se puede sacar en un archivo aparte
    //De esta manera obtenemos una lista de los motores disponibles en la API
    const engines = await openai.listEngines();
    const enginesList = engines.data;
    console.log(engines.data);
    
    const enginesIds = enginesList.data.map(engine => engine.id);
    enginesIds.forEach(id => console.log(id));
}

// main();
getEngines();
