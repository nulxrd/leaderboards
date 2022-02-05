const database = require('@core/database')

module.exports = {
    getTopKills: async () => {
        const query = `
            SELECT username, kills
            FROM statistics s
            LEFT JOIN users u ON u.id = s.uid
            ORDER BY kills DESC
            LIMIT 15
        `

        return database.find(query)
    },

    getTopDeaths: async () => {
        const query = `
            SELECT username, deaths
            FROM statistics s
            LEFT JOIN users u ON u.id = s.uid
            ORDER BY deaths DESC
            LIMIT 15
        `

        return database.find(query)
    },

    getTopScores: async () => {
        const query = `
            SELECT username, ((s.kills*1.5) - (s.deaths*2)) as score
            FROM statistics s
            LEFT JOIN users u ON u.id = s.uid
            ORDER BY score DESC
            LIMIT 15
        `

        return database.find(query)
    }
}