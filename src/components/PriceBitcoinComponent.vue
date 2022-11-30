<template>
  <div>
    <div class="columns-8 mt-16 flex justify-center">
      <img
        width="100"
        height="100"
        src="../assets/icons/btc.png"
        alt="Logo Bitcoin"
      />
    </div>
    <p class="text-2xl text-center mt-6">Cotação atual do Bitcoin</p>
    <p class="text-5xl sm:text-7xl text-center mt-4">
      {{ formatter.format(storeBitcoin.getPrice) }}
    </p>

    <div class="justify-center flex mt-16">
      <table>
        <tr>
          <th class="w-40 bg-yellow-100">Data</th>
          <th class="w-40 bg-yellow-100">Maxima</th>
          <th class="w-40 bg-yellow-100">Minima</th>
        </tr>
        <tr>
          <td class="text-center bg-lime-100">{{moment(new Date()).format("DD/MM/YYYY")}}</td>
          <td class="text-center bg-lime-100">{{formatter.format(storeBitcoin.getPriceHigh)}}</td>
          <td class="text-center bg-lime-100">{{formatter.format(storeBitcoin.getPriceLow)}}</td>
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
//IMPORT DAS BIBLIOTECAS
import moment from "moment";

import { priceBitcoinStore } from "../store/priceBitcoin";

import {formatter} from '../assets/scripts/scripts';

import CoinGeckoClient from '../http/service';

export default {
  name: "PriceBitcoinComponent",
  setup() {
    const storeBitcoin = priceBitcoinStore();

    return {
      CoinGeckoClient,
      storeBitcoin,
      moment,
      priceBitcoinStore,
      formatter,
    };
  },
  methods: {
    async requestPriceBitcoin() {
       try{ 
          const data = await this.CoinGeckoClient.coins.fetch("bitcoin", {});
          this.storeBitcoin.setPriceBitcoin(data.data.market_data.current_price.brl);
          this.storeBitcoin.setPriceHighBitcoin(data.data.market_data.high_24h.brl);
          this.storeBitcoin.setPriceLowBitcoin(data.data.market_data.low_24h.brl);
      }catch(e) {
        console.log(e);
      }
      
    },
  },
  mounted() {
    setInterval(() => {
      this.requestPriceBitcoin();
    }, 1000);
  },
};
</script>
