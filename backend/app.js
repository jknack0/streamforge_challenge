const express = require('express')
const app = express()
const middleware = require('./utils/middleware')
const channelRouter = require('./controllers/channel')
const apicache = require('apicache')
const cache = apicache.middleware

app.use(express.json())
app.use(cache('5 minutes'))

app.use('/api/streamer', channelRouter)

app.use(middleware.unknownEndpoint)

module.exports = app