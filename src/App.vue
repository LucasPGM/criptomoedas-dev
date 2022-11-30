<template>
  <HeaderComponent />
  <router-view />
</template>
<script>
  import HeaderComponent from './components/HeaderComponent.vue';
  export default {
    name: 'app',
    components: {
      HeaderComponent
    }
  }
</script>