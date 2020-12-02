<template>
  <div class="search-streamer-container">
    <div class="search-streamer">
      <form class="search-form__form" v-on:submit.prevent="getChannelData">
        <input type="text" class="search-form__input" v-model="searchTerm" placeholder="Enter your twitch name...">
        <input type="submit" class="search-form__submit">
      </form>
      <div class="results" v-if="this.displayName">
        <div class="results__items">Display Name: {{ displayName }}</div>
        <div class="results__items">Followers: {{ totalFollowers }}</div>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'

export default {
  name: 'SearchStreamer',
  data() {
    return {
      searchTerm: '',
      displayName: '',
      totalFollowers: ''
    }
  },
  methods: {
    getChannelData: function() {
      const url = `http://localhost:3001/api/channel/${this.searchTerm}`
      axios.get(url)
        .then(response => {
          this.displayName = response.data.displayName
          this.totalFollowers = response.data.totalFollowers
        })
    }
  }
}
</script>

<style scoped>
  .search-streamer-container {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #12141d;
  }

  .search-streamer {
    min-width: 40vw;
  }

  .search-form__form {
    display: flex;
  }

  .search-form__input {
    font-weight: 600;
    background-color: hsla(0,0%,100%,.1);
    border-radius: 6px;
    color: #fff;
    height: 60px;
    padding-right: 24px;
    padding-left: 24px;
    margin-right: 10px;
    font-size: 16px;
    border: 1px black;
    width: 100%;
  }

  input:focus { 
    outline: none;
  }

  .search-form__submit {
    background: #3ccf91;
    height: 60px;
    padding-right: 36px;
    padding-left: 36px;
    border: 1px solid transparent;
    border-radius: 6px;
        box-shadow: inset 0 0 20px 20px transparent;
    transition: box-shadow .2s ease;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
  }

  .search-form__submit:hover {
    opacity: .9;
  }

  .results {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: hsla(0,0%,100%,.1);
    border-radius: 6px;
    height: 60px;
    margin-top: 20px;
    color: #fff;
    font-weight: 600;
  }

  .results__items {
    margin: 0 24px;
  }
</style>