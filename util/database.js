const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user:'root',
    database: 'node-complete',
    password: 'Sh@n2021'
});

module.exports = pool.promise();