<template>
  <div>
  <b-card-group deck>
   <b-card>
   <b-card-title>
   {{ $t('today') }} : <h1>{{dailyQuote.validDate}}</h1> {{ $t('quoteOfTheDay') }} :
   </b-card-title>
   </b-card>
   </b-card-group>
   <br>
    <QuoteLeft
      :quote="dailyQuote"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import QuoteLeft from '@/components/QuoteLeft.vue'

export default {
  components: {
    QuoteLeft
  },
  data() {
    return {}
  },
  computed: {
  ...mapState([
    'dailyQuote'
  ]),
  ...mapGetters([
    'getCurrentDate'
    ])
  },
  methods: {
    ...mapActions([
      'refreshDailyQuote',
      'refreshQuotes'
    ])
  },
  created: function () {
    this.refreshDailyQuote()
  }
}
</script>
