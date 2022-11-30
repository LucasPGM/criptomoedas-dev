import {defineStore} from 'pinia'; 

export const priceCryptosStore = defineStore('priceCryptos', {
    state: () => {
        return {
            price: 0,
            name: ''
        }
    },
    actions: {
        setPriceCrypto(data) {
            this.price = data;
        },
        setNameCrypto(data){
            this.name = data;
        }
    },
    getters: {
        getPriceCrypto(){
            return this.price;
        },
        getNameCrypto() {
            return this.name;
        }
    }
})