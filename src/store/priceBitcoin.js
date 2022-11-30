import {defineStore} from 'pinia';

export const priceBitcoinStore = defineStore('price', {
    state: () => {
        return {
            price: 0,
            high24: 0,
            low24: 0
        }
    },
    actions: {
        setPriceBitcoin(data) {
            this.price = data;
        },
        setPriceHighBitcoin(data) {
            this.high24 = data;
        },
        setPriceLowBitcoin(data) {
            this.low24 = data;
        }
    },
    getters: {
        getPrice() {
            return this.price;
        },
        getPriceHigh() {
            return this.high24;
        },
        getPriceLow() {
            return this.low24;
        }
    }
})

export const priceHistoricStore = defineStore('historicPrice', {
    state: () => {
        return {
            priceHistoric: []
        }
    },
    actions: {
        setPriceHistoric(date,price) {
            this.priceHistoric.push({date, price})
        }
    },
    getters: {
        getPriceHistoric() {
            return this.priceHistoric;
        }
    }
})