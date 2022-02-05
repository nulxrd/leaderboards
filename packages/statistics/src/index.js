const router = require('express').Router()
const controller = require('./controller')

module.exports = {
    init: () => {
        
        /**
         * @api {get} /api/statistics get users statistics
         * @apiName getStatistics
         * @apiVersion 0.1.0
         * 
         * @apiHeader (Authorization) {String} Authorization value
         * @apiQuery {String} statisticName
         * 
         * @apiSuccess (200) {String} Get leaderboards for specify statistic.
         * 
         * @apiError (400) {String} Undefined type for statisticName.
         * @apiError (400) {String} statisticName is missing.
         */
        router.get('/', controller.get)

        return router
    }
}