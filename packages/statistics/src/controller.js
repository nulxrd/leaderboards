const service = require('./service')

module.exports = {
    get: async (req, res) => {
        if (req.query.statisticName) {
            switch (req.query.statisticName) {
                case 'kill': return res.json(await service.getTopKills())
                case 'death': return res.json(await service.getTopDeaths())
                case 'score': return res.json(await service.getTopScores())
                default: {
                    return res.status(400).json({
                        code: 400,
                        message: 'Undefined type for statisticName.'
                    })
                }
            }
        }

        return res.status(400).json({
            code: 400,
            message: 'statisticName is missing'
        })
    }
}