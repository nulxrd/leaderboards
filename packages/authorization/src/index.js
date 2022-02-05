const router = require('express').Router()
const controller = require('./controller')
const middleware = require('./middleware')

module.exports = {
    init: () => {
        router.use(middleware.check)
        return router
    }
}