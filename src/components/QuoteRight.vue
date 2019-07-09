<template>
  <div>
      <div class = 'quote-right'>
      <div class = 'quote-text'>
        <div class = 'quote-to' v-show= "quote.to" >
          <p>A   {{ quote.to }}</p>
        </div>
        <p>{{ quote.quote }}... </p>
        <div class = 'quote-author'>
          <p>- {{ quote.author }}</p>
          <p> {{ quote.date }}</p>
        </div>
      </div>
      <div class = 'quote-circle'>
        <div class = 'quote-circle-inner'>
          <i class="fa fa-quote-right"></i>
        </div>
      </div>
    <div class = 'quote-image'></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: Object
  }
}
</script>
