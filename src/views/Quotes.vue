<template>
<div  class = "b-container">
  <h1>{{ $t('quotes') }}</h1>
  <div class = "row" v-for='(g, groupIndex) in groupedItems' :key="groupIndex">
    <div class = "col-md-5" v-for='(item, index) in g' :key="index">
      <div v-if="index % 2">
        <QuoteLeft
          :quote="item"
        />
      </div>
      <div v-else>
        <QuoteRight
          :quote="item"
        />
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import QuoteLeft from '@/components/QuoteLeft.vue'
import QuoteRight from '@/components/QuoteRight.vue'

export default {
  components: {
    QuoteLeft,
    QuoteRight
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions([
      'addPet',
      'refreshQuotes'
    ]),
    chunk: function(arr, size) {
      var newArr = []
      for (var i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size))
      }
      this.groupedItems = newArr
      console.log(newArr)
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
  created: function () {
    this.refreshQuotes()
    // divide into n groups
    // this.chunk(this.allQuotes, Math.ceil(this.allQuotes.length / 3)) // 3 is the number of colums
    this.chunk(this.allQuotes, 2) // 3 is the number of colums
  }
}
</script>
