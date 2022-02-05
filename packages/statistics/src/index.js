const router = require('express').Router()
const controller = require('./controller')

module.exports = {
    init: () => {
        router.get('/', controller.get)

        return router
    }
}