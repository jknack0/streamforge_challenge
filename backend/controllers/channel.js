const channelRouter = require('express').Router()
const axios = require('axios').default
const config = require('../utils/config')
const getToken = require('../utils/getToken')

channelRouter.get('/:name', async (request, response) => {
  const authToken = await getToken()
  const name = request.params.name
  const channelUrl = `https://api.twitch.tv/helix/search/channels?query=${name}`

  const channelResponse = await axios.get(channelUrl, {
    headers: {
      'client-id': config.CLIENT_ID,
      'authorization': 'Bearer ' + authToken
    }
  })
  

  response.json(channelResponse.data)
})

module.exports = channelRouter