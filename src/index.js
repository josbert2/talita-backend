import express from 'express';
import menus from './routes/menus.routes.js';
import indexRoutes from './routes/index.routes.js';

import { DB_PORT } from './config.js'


const app = express();

app.use(express.json())

app.use('/api', menus)
app.use( indexRoutes)

app.use((req, res) => {
    res.status(404).json({ message: 'Pagina no encontrada' })
})

app.listen(3000)
console.log('Servidor rodando na porta 3000')