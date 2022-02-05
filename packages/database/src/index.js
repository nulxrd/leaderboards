const mysql = require('mysql2/promise')
const config = require('@core/config')


const connect = async () => {
    return mysql.createConnection(config.get('database'))
}

module.exports = {
        find: async (query, params = []) => connect().then(
            async connection => {
                const [rows, fields] = await connection.query(query, params)
                if (rows.length > 0) {
                    return rows
                }

                return []
            }
        ),
        execute: async (query, params = []) => connect().then(
            async connection => {
                const [rows, fields] = await connection.execute(query, params)
                return rows
            }
        )
        
    }