<template>
<div>
<div class="spinner-border text-secondary" role="status" v-if="loading">
  <span class="sr-only">Loading...</span>
</div>
<b-card-group deck>
 <b-card>
 <b-card-title>
  {{ $t('quote') }}
 </b-card-title>
 </b-card>
 </b-card-group>
 <br>
  <QuoteLeft v-if="quoteByID"
    :quote="quoteByID"
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
      quoteSelected: {},
      loading: true
    }
  },
  computed: {
    ...mapState([
      'quoteByID'
    ])
  },
  methods: {
    ...mapActions([
      'refreshQuoteById'
    ])
  },
  created: function () {
    this.refreshQuoteById(this.$route.params.id)
    .then(() => {
      this.loading=false
    })
  }
}
</script>
