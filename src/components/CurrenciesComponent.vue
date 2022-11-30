<template>
  <div>
    <div class="mt-16">
      <p class="text-2xl sm:text-4xl text-center">Você Selecionou a moeda:</p>
      <p class="mt-2 text-3xl text-center sm:text-6xl underline">
        {{ name.toUpperCase() }}
      </p>
      <div class="mt-8">
        <span class="text-3xl sm:text-4xl">Cotação atual: </span>
        <span class="text-3xl sm:text-6xl underline">{{ formatter.format(price)}}</span>
      </div>
    </div>
  </div>
</template>
<script>

import {formatter} from '../assets/scripts/scripts';

export default {
  name: "DacxiComponent",
  props: {
    name: String,
    price: Number,
  },
  setup () {
    let teste = 'criptomoeda'
    return {
        formatter,
        teste
    }
  }
};
</script>
