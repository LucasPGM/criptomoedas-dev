<template>
    <div class="historic">
        <PriceHistoricComponent />
    </div>
</template>
<script>
   import PriceHistoricComponent from '../components/PriceHistoricComponent.vue'; 
   export default {
    name: 'Historic',
    components: {
        PriceHistoricComponent
    }
   }
</script>