const mysql = require("mysql")
const {createconnection} = require("./config")
exports.db=mysql.createConnection(createconnection)

