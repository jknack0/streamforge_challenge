require('dotenv').config()

let PORT = process.env.PORT
let CLIENT_ID = process.env.CLIENT_ID
let CLIENT_SECRET = process.env.CLIENT_SECRET
let TOKEN_URL = process.env.TOKEN_URL

module.exports = {
  PORT,
  CLIENT_ID,
  CLIENT_SECRET,
  TOKEN_URL
}