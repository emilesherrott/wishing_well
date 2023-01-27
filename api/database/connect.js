const { Pool } = require("pg")

const client = new Pool({
    connectionString: process.env.DBCONNECTIONSTRING
 })

module.exports = client;