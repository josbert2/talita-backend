import { createPool } from 'mysql2/promise';


export const pool = createPool({
    host: 'containers-us-west-197.railway.app',
    user: 'root',
    password: 'P1CE4j9UO0EGUMI2h0GK',
    database: 'railway',
    port: 6933
});

