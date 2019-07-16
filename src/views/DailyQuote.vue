<template>
  <div>
  <div class="spinner-border text-secondary" role="status" v-if="loading">
    <span class="sr-only">Loading...</span>
  </div>
  <b-card-group deck>
   <b-card>
   <b-card-title>
   {{ $t('today') }} : <h1>{{dailyQuote.validDate}}</h1> {{ $t('quoteOfTheDay') }} :
   </b-card-title>
   </b-card>
   </b-card-group>
   <br>
    <QuoteLeft key="dailyQuote._id" v-if="!loading"
      :quote="dailyQuote"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import QuoteLeft from '@/components/QuoteLeft.vue'

export default {
  components: {
    QuoteLeft
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
  ...mapState([
    'dailyQuote'
  ])
  },
  methods: {
    ...mapActions([
      'refreshDailyQuote'
    ])
  },
  created: function () {
    this.refreshDailyQuote()
    .then(() => {
      this.loading=false
    })
  }
}
</script>
