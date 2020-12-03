const axios = require('axios').default
const config = require('./config')
const db = require('../db')

const saveChannel = async (channel, followers) => {
  const insert = `INSERT INTO channel (display_name, game_id, streamer_id, followers) values (?, ?, ?, ?)`
  const { display_name, game_id, id } = channel

  db.run(insert, [display_name, game_id, id, followers])
}

const getToken = async () => {
  const tokenUrl = `https://id.twitch.tv/oauth2/token?client_id=${config.CLIENT_ID}&client_secret=${config.CLIENT_SECRET}&grant_type=client_credentials`

  try {
    const response = await axios.post(tokenUrl)
    return response.data.access_token
  } catch (error) {
    return { error: 'Error: failed getting oauth2 token', message: error }
  }
}

const getChannel = async (name, authToken) => {
  const channelUrl = `https://api.twitch.tv/helix/search/channels?query=${name}`

  const channelResponse = await axios.get(channelUrl, {
    headers: {
      'client-id': config.CLIENT_ID,
      'authorization': 'Bearer ' + authToken
    }
  })


  return channelResponse.data.data[0]
}

const getFollowers = async (id, authToken) => {
  const followerUrl = `https://api.twitch.tv/helix/users/follows?to_id=${id}`

  const followerResponse = await axios.get(followerUrl, {
    headers: {
      'client-id': config.CLIENT_ID,
      'authorization': 'Bearer ' + authToken
    }
  })

  return followerResponse.data.total
}

module.exports = {
  getToken,
  getChannel,
  getFollowers,
  saveChannel
}