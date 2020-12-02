const express = require('express')
const app = express()
const middleware = require('./utils/middleware')
const channelRouter = require('./controllers/channel')
const apicache = require('apicache')
const cache = apicache.middleware
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(cache('5 minutes'))

app.use('/api/channel', channelRouter)

app.use(middleware.unknownEndpoint)

module.exports = app