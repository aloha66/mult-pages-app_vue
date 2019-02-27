<template>
  <div id="app">
    <button @click="goFn('page1')">page1</button>
    <router-view />--> 11
  </div>
</template>

<script>
export default {
  methods: {
    goFn(name) {
      // location.href = `${process.env.BASE_URL}` + name

      this.$openRouter({
        name: name,
        query: {
          text: "hello"
        }
      });
    }
  }
};
</script>
