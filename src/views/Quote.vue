<template>
<div>
<b-card-group deck>
 <b-card>
 <b-card-title>
  {{ $t('quote') }}
 </b-card-title>
 </b-card>
 </b-card-group>
 <br>
  <QuoteLeft
    :quote="quoteSelected"
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
    return {
      quoteSelected: {}
    }
  },
  computed: {
    ...mapGetters([
      'getAllQuotes'
    ]),
    ...mapState([
      'allQuotes'
    ])
  },
  methods: {
    ...mapActions([
      'refreshDailyQuote',
      'refreshQuotes'
    ])
  },
  created: function () {
    this.refreshQuotes()
    console.log("IDDDD--------")
    console.log(this.$route.params.id)
    console.log(this.allQuotes)
    const quoteSelected =  this.allQuotes.find(obj => obj._id == this.$route.params.id);
    console.log(quoteSelected)
    this.quoteSelected = quoteSelected
  },
  mounted() {
  }
}
</script>
