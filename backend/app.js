const express = require('express')
const app = express()
const middleware = require('./utils/middleware')
const channelRouter = require('./controllers/channel')

app.use(express.json())

app.use('/api/streamer', channelRouter)

app.use(middleware.unknownEndpoint)

module.exports = app