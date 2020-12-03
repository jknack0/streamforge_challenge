const channelRouter = require('express').Router()
const axios = require('axios').default
const config = require('../utils/config')
const { getToken, getChannel, getFollowers, saveChannel } = require('../utils/channel')

channelRouter.get('/:name', async (request, response) => {
  try {
    const authToken = await getToken()
    const name = request.params.name
    
    const channel = await getChannel(name, authToken)

    const totalFollowers = await getFollowers(channel.id, authToken)

    await saveChannel(channel, totalFollowers)

    response.json({'displayName': channel.display_name, totalFollowers})
  } catch (error) {
    response.json(error)
  } 
})

module.exports = channelRouter