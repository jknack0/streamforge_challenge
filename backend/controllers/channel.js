const channelRouter = require('express').Router()
const axios = require('axios').default
const config = require('../utils/config')
const getToken = require('../utils/getToken')

channelRouter.get('/:name', async (request, response) => {
  try {
    const authToken = await getToken()
    const name = request.params.name
    
    const followerUrl = `https://api.twitch.tv/helix/users/follows?to_id=${channel.id}`

    const followerResponse = await axios.get(followerUrl, {
      headers: {
        'client-id': config.CLIENT_ID,
        'authorization': 'Bearer ' + authToken
      }
    })

    const totalFollowers = followerResponse.data.total

    response.json({'displayName': channel.display_name, totalFollowers})
  } catch (error) {
    response.json(error)
  } 
})

module.exports = channelRouter