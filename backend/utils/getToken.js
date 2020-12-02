const axios = require('axios').default
const config = require('../utils/config')

const getToken = async () => {
  const tokenUrl = `https://id.twitch.tv/oauth2/token?client_id=${config.CLIENT_ID}&client_secret=${config.CLIENT_SECRET}&grant_type=client_credentials`

  try {
    const response = await axios.post(tokenUrl)
    return response.data.access_token
  } catch (error) {
    return { error: 'Error: failed getting oauth2 token', message: error }
  }
}

module.exports = getToken