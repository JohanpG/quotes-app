export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  },
  addQuote: ({ commit }, payload) => {
    var url = process.env.VUE_APP_API_ENDPOINT + '/quotes'
    var data = payload
    console.log(data)
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response =>
        commit('appendQuote', response)
        // console.log('Success:', response)
      )
  },
  refreshQuotes: ({ commit }) => {
    fetch(process.env.VUE_APP_API_ENDPOINT + '/quotes', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        console.log(jsonData)
        commit('getQuotes', jsonData)
      })
  },
  refreshDailyQuote: ({ commit }) => {
    fetch(process.env.VUE_APP_API_ENDPOINT + '/dailyQuote', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        console.log(jsonData)
        commit('getDailyQuote', jsonData)
      })
  }

}
