const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const config = require('@core/config')
const authorization = require('@modules/authorization')
const statistics = require('@modules/statistics')

const app = express()
const serverConfig = config.get('server')

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(authorization.init())
app.use('/api/statistics', statistics.init())

app.listen(serverConfig.port, () => {
    console.log(`Server listen on: ${serverConfig.port}`)
})