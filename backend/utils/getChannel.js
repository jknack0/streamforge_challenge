const getChannel = async (name) => {
  const channelUrl = `https://api.twitch.tv/helix/search/channels?query=${name}`

  const channelResponse = await axios.get(channelUrl, {
    headers: {
      'client-id': config.CLIENT_ID,
      'authorization': 'Bearer ' + authToken
    }
  })


  return channelResponse.data.data[0]
}

module.exports = getChannel