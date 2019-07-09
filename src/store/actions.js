export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  },
  addQuote: ({ commit }, payload) => {
    var url = 'http://localhost:3000/quote'
    var data = payload
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
  },
  refreshQuotes: ({ commit }) => {
    fetch('http://localhost:3000/quotes', {
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
    fetch('http://localhost:3000/dailyQuote', {
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
