export default {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet)
  },
  getQuotes: (state, quotes) => {
    state.allQuotes = quotes
  },
  getQuotesPagination: (state, response) => {
    state.allQuotes = response.data;
    state.paginationDetails.currentPage = response.page;
    state.paginationDetails.perPage = response.limit;
    state.paginationDetails.totalItems = response.totalPages;

  },
  getDailyQuote: (state, quote) => {
    state.dailyQuote = quote
  },
  getQuoteId: (state, quote) => {
    state.quoteByID = quote
  },
  appendQuote: (state, { quote }) => {
    state.allQuotes.push(quote)
  }
}
