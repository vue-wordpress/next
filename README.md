# VueWordpress

Your plugin description...

## Installation

### 1. Install
```
yarn add vue-wordpress
# or
npm i vue-wordpress --save
```

### 2. Plug-in
```js
import VueWordpress from 'vue-wordpress'

Vue.use(VueWordpress)

new Vue({
  // your vue config
  wordpressSettings: new VueWordpress(),
})
```

### 3. Use in your components

```vue
<template>
  <vue-wordpress />
</template>

<script>
  export default {
    async created() {
      console.log(this.$wordpress);
    },
  };
</script>
```

## License
MIT
