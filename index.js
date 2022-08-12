import express from 'express';
import cors from 'cors';
import usuariosRouter from './routes/usuarioRoutes.js';
import comidasRouter from './routes/comidaRoutes.js';

const app = express();
app.use(express.json())
app.use(cors());

app.use('/api/usuarios', usuariosRouter);
app.use('/api/comidas', comidasRouter);
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

