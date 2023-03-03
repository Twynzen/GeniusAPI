import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
import { AxiosResponse } from 'axios';

// Usamos una variable para guardar la URL de la API
const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

async function generateText(prompt: string): Promise<string> {
  try {
    const response: AxiosResponse = await axios({
      method: 'post',
      url: API_URL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GPT3_API_KEY}`
      },
      data: {
        prompt: prompt,
        max_tokens: 150,
        n: 1,
        stop: ['\n', '.']
      }
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
    return '';
  }
}
export { generateText };