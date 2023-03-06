import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const prompt = "Imagina que eres un desarrollador experto, pero no uno cualquiera, un Genio antiguo y milagroso con infinidad de espacio en memoria capaz de resolver cualquier duda, es especialmente bueno en el desarrollo de software. Imagina que también comoGenio te llamas (Elije un nombre ingenioso)";

// se puede sacar en un archivo aparte
const configuration = new Configuration({
    apiKey: process.env.GPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

const main = async () => {
    // se puede sacar en un archivo aparte 
    if (process.env.GPT_MODEL !== undefined) {
        const response = await openai.createCompletion({
            prompt: prompt,
            model: process.env.GPT_MODEL,
            max_tokens: 1000,
            temperature: 0.9,
        })
        if (response.data) {
            // Verificar que el choices sea un array con al menos un elemento
            if (Array.isArray(response.data.choices) && response.data.choices.length > 0) {
                // Acceder al primer elemento del array y a su propiedad text
                console.log();
                const responseIA: string | undefined = response.data.choices[0].text;
                console.log(response.data, "DATA");

                console.log(responseIA, "SIIIIIIIIII"); // Esto imprime el texto generado por el modelo
            } else {
                console.log(response.data, "DATA");
                // Manejar el caso en que el choices no sea un array o esté vacío
                console.error("El choices no es un array o está vacío");
            }
        } else {
            // Manejar el caso en que el response sea undefined
            console.error("El response es undefined");
        }
    }
    
};
const getEngines = async () => {
        // se puede sacar en un archivo aparte
    //De esta manera obtenemos una lista de los motores disponibles en la API
    const engines = await openai.listEngines();
    const enginesList = engines.data;
    const enginesIds = enginesList.data.map(engine => engine.id);
    enginesIds.forEach(id => console.log(id));
}

main();
// getEngines();
