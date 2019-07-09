<template>
  <div class="home-view-container">
    <b-jumbotron>
      <template slot="header">New Quote</template>
      <template slot="lead">Specify a new quote.</template>
      <hr class="my-4">

      <b-form @submit.prevent="handleSubmit">
        <b-card bg-variant="light">
          <b-form-group id="exampleInputGroup2" label="Author's Name:" label-for="exampleInput2">
            <b-form-input
              id="exampleInput2"
              type="text"
              v-model="formData.author"
              required
              placeholder="Enter Author's Name" />
          </b-form-group>
          <b-form-group id="exampleInputGroup2" label="To Name:" label-for="exampleInput2">
            <b-form-input
              id="exampleInput2"
              type="text"
              v-model="formData.to"
              required
              placeholder="Enter To Name" />
          </b-form-group>
          <b-form-group id="exampleInputGroup2" label="Quote:" label-for="exampleInput2">
            <b-form-input
              id="exampleInput2"
              type="text"
              v-model="formData.quote"
              required
              placeholder="Enter quote" />
          </b-form-group>
          <b-form-group id="exampleInputGroup2" label="Quote's Date:" label-for="exampleInput2">
            <b-form-input
              id="exampleInput2"
              type="date"
              v-model="formData.date"
              required
              placeholder="Select quote's date" />
          </b-form-group>
        </b-card>
        <br>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
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
      'addPet',
      'refreshQuotes'
    ]),
    handleSubmit() {
      const { author, to, quote, date } = this.formData
      const payload = {
        quote: {
          author,
          to,
          quote,
          date
        }
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
