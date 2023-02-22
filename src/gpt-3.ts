import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
import { AxiosResponse } from 'axios';

async function generateText(prompt: string): Promise<string> {
  try {
    const response: AxiosResponse = await axios({
      method: 'post',
      url: 'https://api.openai.com/v1/engines/davinci-codex/completions',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GPT3_API_KEY}`
      },
      data: {
        prompt: prompt,
        max_tokens: 150,
        n: 1, //el número de respuestas solicitada
        stop: ['\n', '.'] //las palabras de detención para detener la respuesta.
      }
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
    return '';
  }
}
export { generateText };