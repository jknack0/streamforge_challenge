const express = require('express')
const app = express()
const streamerRouter = require('./controllers/streamer')

app.use(express.json())

app.user('/api/streamer', streamerRouter)

module.exports = app