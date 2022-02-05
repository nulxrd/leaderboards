const service = require('./service')

module.exports = {
    check: async (req, res, next) => {
        const token = await service.checkToken(req.headers.authorization)
        if (!token) {
            return res.status(401).json({
                code: 401,
                message: 'Unauthorized'
            })
        }

        next()
    }
}