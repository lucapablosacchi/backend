import express from 'express';
import cors from 'cors';
import usuariosRouter from './routes/usuarioRoutes.js';
import comidasRouter from './routes/comidaRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors());

app.use('/api/usuarios', usuariosRouter);
app.use('/api/comidas', comidasRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

