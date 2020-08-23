const db = require('mysql2')

const Database = db.createPool({
    host:'127.0.0.1',
    user:'root',
    database:'user',
    password:'root',
    port:8889
})

module.exports = Database.promise();