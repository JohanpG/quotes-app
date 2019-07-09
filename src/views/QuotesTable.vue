<template>
  <div>
    <QuoteTable
      :quotes="allQuotes"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import QuoteTable from '@/components/QuoteTable.vue'

export default {
  components: {
    QuoteTable
  },
  data() {
    return {}
  },
  computed: {
    ...mapState([
      'allQuotes'
    ])
  }
}
</script>
