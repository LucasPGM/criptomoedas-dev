<template>
  <div>
    <div class="relative bg-grey">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          class="flex items-center justify-between border-b-2 border-gray-100 py-6"
        >
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <img
                class="h-8 w-auto sm:h-10"
                src="../assets/icons/criptomoeda.png"
                alt="Logo bitcoin"
              />
            </a>
          </div>
          <nav class="space-x-10 md:flex">
            <div class="relative">
              <router-link class="mr-4" to="/"> Bitcoin </router-link>

              <router-link to="/historic" class="mr-4"> Historico </router-link>

              <router-link to="/cryptos">Outras Moedas</router-link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
};
</script>
