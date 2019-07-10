<template>
  <div class="home-view-container">
    <b-jumbotron>
      <template slot="header">{{ $t('newQuote') }}</template>
      <template slot="lead">{{ $t('newQuoteSubtitle') }} </template>
      <hr class="my-4">

      <b-form @submit.prevent="handleSubmit">
        <b-card bg-variant="light">
          <b-form-group id="exampleInputGroup1">
            <b-form-group-label>{{ $t('authorName') }}</b-form-group-label>
            <b-form-input
              id="exampleInput2"
              type="text"
              v-model="formData.author"
              required
              placeholder="Enter Author's Name" />
          </b-form-group>
          <b-form-group id="exampleInputGroup2">
            <b-form-group-label>{{ $t('to') }}</b-form-group-label>
            <b-form-input
              id="exampleInput2"
              type="text"
              v-model="formData.to"
              required
              placeholder="Enter To Name" />
          </b-form-group>
          <b-form-group id="exampleInputGroup3">
            <b-form-group-label>{{ $t('quote') }}</b-form-group-label>
            <b-form-input
              id="exampleInput2"
              type="text"
              v-model="formData.quote"
              required
              placeholder="Enter quote" />
          </b-form-group>
          <b-form-group id="exampleInputGroup4">
            <b-form-group-label>{{ $t('quoteDate') }}</b-form-group-label>
            <b-form-input
              id="exampleInput2"
              type="date"
              v-model="formData.date"
              required
              placeholder="Select quote's date" />
          </b-form-group>
        </b-card>
        <br>
        <b-button type="submit" variant="primary">{{ $t('submit') }}</b-button>
        <b-button type="reset" variant="danger">{{ $t('reset') }}</b-button>
      </b-form>
    </b-jumbotron>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'admin',
  data() {
    return {
      formData: {
        author: '',
        to: '',
        quote: '',
        date: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'getAllQuotes'
    ])
  },
  methods: {
    ...mapActions([
      'addQuote',
      'refreshQuotes'
    ]),
    handleSubmit() {
      const { author, to, quote, date } = this.formData
      const payload = {
        author,
        to,
        quote,
        date
      }
      this.addQuote(payload)

      // reset form after submit
      this.formData = {
        author: '',
        to: '',
        quote: '',
        date: ''
      }
    }
  },
  created: function () {
    this.refreshQuotes()
  }
}
</script>
