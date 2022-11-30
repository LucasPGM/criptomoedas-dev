<template>
  <div>
    <div class="columns-12 justify-center flex">
      <div class="mt-16">
        <label class="text-center text-2xl block sm:text-4xl font-medium text-gray-700"
          >Escolha a moeda:</label
        >
        <select
          @change="getCrypto()"
          autocomplete="country-name"
          class="mt-6 block w-64 rounded-md border border-gray-300 bg-white py-2 px-3"
          v-model="selectedCryptocurrencie"
        >
          <option value="dacxi">DACXI</option>
          <option value="1eth">ETH</option>
          <option value="cosmos">ATOM</option>
        </select>
      </div>
    </div>
    <div class="justify-center flex">
        <CurrenciesComponent :name="storeCrypto.getNameCrypto" :price="storeCrypto.getPriceCrypto" />
    </div>
  </div>  
</template>

<script>

import CurrenciesComponent from '../components/CurrenciesComponent.vue';

import {priceCryptosStore} from '../store/priceCryptos';

import CoinGeckoClient from '../http/service';

export default {
  name: "CryptosComponent",
  components: {
    CurrenciesComponent
  },
  setup() {
    const selectedCryptocurrencie = "";
    const crypto = {};
    const storeCrypto = priceCryptosStore();

    return {
      selectedCryptocurrencie,
      CoinGeckoClient,
      crypto,
      storeCrypto,
    };
  },
  methods: {
    async getCrypto() {
        try{
          const response = await this.CoinGeckoClient.coins.fetch(this.selectedCryptocurrencie, {});
          this.storeCrypto.setPriceCrypto(response.data.market_data.current_price.brl);
          this.storeCrypto.setNameCrypto(response.data.id);
        }catch(e) {
            console.log(e);
        }
      
    },
  },
};
</script>
