<template>
  <div class="home">
    <PriceBitcoinComponent />
  </div>
</template>

<script>
  // IMPORTANDO OS COMPONENTES
  import PriceBitcoinComponent from "../components/PriceBitcoinComponent.vue";

  export default {
    name: "Home",
    components: {
      PriceBitcoinComponent
    },
  };
</script>
