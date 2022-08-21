<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>Quote</label>
        <textarea id="inputQuote" data-testid="textInputQuote" class="form-control" rows="3" v-model="quote"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>Color</label>
        <select id="colorSelect" data-testid="colorSelectQuote" class="form-control" rows="3" v-model="color">
          <option v-for="option in options" :value="option">{{ option }}</option>
        </select>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button id="buttonAddQuote" data-testid="buttonAddQuote" class="btn btn-primary" @click.prevent="createNew">Add Quote
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      quote: '',
      color: '',
      options: ["White", "Yellow", "Cyan", "Magenta", "Blue"]
    };
  },
  methods: {
    createNew() {
      this.$emit('quoteAdded', {quote: this.quote, color: this.color});
      this.quote = '';
    }
  }
}
</script>

<style>

</style>