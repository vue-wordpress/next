<template>
  <div>
    Hello {{ msg }}!
    <vue-wordpress />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'world'
    };
  }
};
</script>

<style>
</style>
