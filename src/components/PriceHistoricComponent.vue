<template>
  <div>
    <div class="text-center text-4xl mt-16">
      <p>Informe uma data:</p>
      <p class="text-xs underline">
        (Ao selecionar a data, irá aparecer a cotação do bitcoin nesse dia.)
      </p>
    </div>
    <div class="columns-6 flex mt-6 justify-center">
      <div class="relative mt-1 rounded-md">
        <input
          type="date"
          name="price"
          id="price"
          v-model="dateInput"
          class="bg-yellow-100 h-10 block w-full rounded-lg pl-7 pr-12 sm:text-sm"
          placeholder="DD/MM/YYYY"
        />
      </div>
    </div>
    <div class="text-center mt-6">
      <button
        class="w-28 h-10 bg-yellow-100 rounded-xl"
        @click="requestHistoricPrice()"
      >
        VER PREÇO
      </button>
    </div>
    <div
      class="justify-center flex mt-16"
      v-if="priceStore.priceHistoric.length"
    >
      <table>
        <tr>
          <th class="w-40 bg-yellow-100">Data</th>
          <th class="w-40 bg-yellow-100">Preço</th>
        </tr>
        <tr v-for="bitcoin in priceStore.getPriceHistoric" :key="bitcoin">
          <td class="text-center bg-lime-100">{{ bitcoin.date.date }}</td>
          <td class="text-center bg-lime-100">
            {{ formatter.format(bitcoin.date.price) }}
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
//CHAMANDO AS BIBLIOTECAS
import moment from "moment";

//CHAMANDO A STORE
import { priceHistoricStore } from "../store/priceBitcoin";

import {formatter} from '../assets/scripts/scripts';

import CoinGeckoClient from '../http/service';

export default {
  name: "PriceHistoricComponent",

  setup() {

    const priceStore = priceHistoricStore();
    const dataHistoric = 0;
    const dateInput = "";
    const dateFormat = "";
    return {
      CoinGeckoClient,
      dataHistoric,
      dateInput,
      formatter,
      priceStore,
      dateFormat,
    };
  },
  methods: {
    async requestHistoricPrice() {
      if (this.dateInput) {
        try {
          this.dateFormat = moment(this.dateInput).format("DD-MM-YYYY");

          let response = await this.CoinGeckoClient.coins.fetchHistory(
            "bitcoin",
            { date: this.dateFormat }
          );

          this.priceStore.setPriceHistoric({
            date: this.dateFormat,
            price: response.data.market_data.current_price.brl,
          });
        } catch (e) {
          alert("Data inválida.");
        }
      } else {
        alert('Informe uma data, por favor.');
      }
    },
  },
};
</script>
