// This is the pool.js file for the Week 10 assignment for Prime Digital Academy, created by Adam Boerhave, 
// 10/22/1010 - 10/25/2020

// Node Module that will connect to postgesql
const pg = require('pg');

// Setup PG to connect to the database
const Pool = pg.Pool;

const pool = new Pool({
    database: 'react_gallery', // database name (this will change)
    host: 'localhost', // where to find the database
    port: 5432,        // port for finding the database
    max: 10,           // max number of connections for the pool
    idleTimeoutMillis: 30000 // 30 seconds before timeout/cancel query
});

// Listener setup on the pool isn't required, 
// but can be super handy for troubleshooting.
pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
});

module.exports = pool;