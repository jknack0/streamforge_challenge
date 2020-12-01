const app = require('./app')
const http = require('https')
const config = require('./utils/config')

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.PORT}`)
})