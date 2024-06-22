const mysql = require('mysql');

const conn  = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Xptmxm1212!@',
    database: 'my_db',
    dialectOptions: {
        options: {
          requestTimeout: 9000
        }
      }
});

conn.connect((err) => {
    if (err) console.log(err);
    else console.log('Connected to the database');
});

module.exports = conn;