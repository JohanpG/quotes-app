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
  <QuoteLeft v-if="quoteSelected"
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
  // Server-side only
 // This will be called by the server renderer automatically
 serverPrefetch () {
   // return the Promise from the action
   // so that the component waits before rendering
   this.refreshQuotes()
   return this.fetchItem ()
 },
  methods: {
    ...mapActions([
      'refreshDailyQuote',
      'refreshQuotes'
    ]),
    fetchItem () {
      console.log("IDDDD--------")
      console.log(this.$route.params.id)
      console.log(this.allQuotes)
      const quoteSelected =  this.allQuotes.find(obj => obj._id == this.$route.params.id);
      console.log(quoteSelected)
      this.quoteSelected = quoteSelected
      // return the Promise from the action
      return this.quoteSelected
    }
  },
  created: function () {
    this.refreshQuotes()
    this.fetchItem ()

  },
  mounted() {
    // If we didn't already do it on the server
    // we fetch the item (will first show the loading text)
    if (!this.allQuotes) {
      this.refreshQuotes()
      this.fetchItem ()
    }
  }
}
</script>
