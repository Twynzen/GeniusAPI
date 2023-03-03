import express from 'express';
import { generateText } from './gpt-3';
const app = express();
const boom = require('@hapi/boom');

app.get('/generate-text', async (req, res) => {
    const prompt = req.query.prompt as string | undefined;

    // Validamos el parámetro prompt antes de pasarlo a la función generateText
    if (prompt === undefined || prompt === '') {
        return res.status(400).send('Prompt is required and cannot be empty');
    }

    // Añadimos un try-catch para manejar los posibles errores de la API
    try {
        const text = await generateText(prompt);
        return res.send(text);
    } catch (error) {
        // Podemos usar la librería boom para crear respuestas con código y mensaje de error adecuados
        // https://www.npmjs.com/package/@hapi/boom
        const { output } = boom.boomify(error);
        return res.status(output.statusCode).json(output.payload);
    }
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});