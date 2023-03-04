// import express from 'express';
// import { generateText } from './gpt-3';
// const app = express();
// const boom = require('@hapi/boom');

// app.get('/generate-text', async (req, res) => {
//     const prompt = req.query.prompt as string | undefined;
//     if (prompt === undefined || prompt === '') {
//         return res.status(400).send('Prompt is required and cannot be empty');
//     }
//     try {
//         const text = await generateText(prompt);
//         console.log(text,"si buenas ese e el texto");
        
//         return res.send(text);
//     } catch (error) {
//         console.log(error);
        
//         const { output } = boom.boomify(error);
//         return res.status(output.statusCode).json(output.payload);
//     }
// });
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Servidor ejecutándose en el puerto ${PORT}`);
// });