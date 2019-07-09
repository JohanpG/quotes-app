export default {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet)
  },
  getQuotes: (state, quotes) => {
    state.allQuotes = quotes
  },
  getDailyQuote: (state, quote) => {
    state.dailyQuote = quote
  },
  appendQuote: (state, { quote }) => {
    state.allQuotes.push(quote)
  }
}
