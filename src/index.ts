import express from 'express';
import { generateText } from './gpt-3';
const app = express();
app.get('/generate-text', async (req, res) => {
    const prompt = req.query.prompt as string | undefined;

    if (prompt === undefined) {
        return res.status(400).send('Prompt is required');
    }

    const text = generateText(prompt);
    return res.send(text);
});
const PORT = 3000; // El puerto que quieres usar
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});