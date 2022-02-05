const path = require('path')
const configPath = path.resolve(process.cwd(), 'config') 
const env = process.env.NODE_ENV || 'development'

const config = require(path.resolve(configPath, env))

module.exports = {
    get: key => {
        if(config.hasOwnProperty(key)) {
            return config[key]
        }

        return null
    },
    has: key => config.hasOwnProperty(key)
}