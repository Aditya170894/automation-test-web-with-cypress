<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div name="quotePanel" data-testid="quote_container" class="panel panel-default" v-bind:style="{ 'background-color': color }">
      <div class="panel-body quotes-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['color']
}
</script>

<style>
.quotes-body {
  font-family: 'Arizonia', cursive;
  font-size: 24px;
  color: black;
}

.quote {
  cursor: pointer;
}

.quote:hover {
  background-color: #ffe2e2;
}
</style>