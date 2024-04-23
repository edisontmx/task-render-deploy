import express from 'express';
import cors from 'cors';
import pg from 'pg';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, FrontendURL, PORT } from './config.js';

const app = express();
const pool = new pg.Pool({
    database: DB_NAME,
    user: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT,
    host: DB_HOST
})

app.use(cors({
    origin: FrontendURL,
}));

app.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT NOW()');
    console.log(result)
    res.send({
        pong: result.rows[0].now
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

