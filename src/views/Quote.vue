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
  <social-sharing v-bind:url= "fullURL"
                   v-bind:title="$t('shareTittle')"
                   v-bind:description="$t('shareDescription')"
                   v-bind:quote="quoteByID.quote"
                   hashtags="quotes"
                   twitter-user="quotes-app"
                   inline-template>
 <div>
     <network network="facebook">
       <i class="fa fa-facebook"></i> Facebook
     </network>
     <network network="twitter">
       <i class="fa fa-twitter"></i> Twitter
     </network>
     <network network="whatsapp">
       <i class="fa fa-whatsapp"></i> Whatsapp
     </network>
 </div>
</social-sharing>
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
      loading: true,
      fullURL: document.URL
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
