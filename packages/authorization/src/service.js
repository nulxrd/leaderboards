const database = require('@core/database')

module.exports = {
    saveToken: token => {
        const query = `
            INSERT INTO tokens (token, created_at)
            VALUES (?, 'NOW()');
        `;

        return database.execute(query, [token])
    },

    checkToken: async token => {
        const query = `
            SELECT * FROM tokens
            WHERE token = ?
            LIMIT 1
        `;

        const exists = await database.find(query, [token])
        if (exists.length > 0) {
            return true
        }

        return false
    }
}