<template>
  <div id="app">
    page1
    <button @click="goFn('')">Index</button>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    goFn(name) {
      this.$openRouter({
        name: name
      });
    }
  }
};
</script>
