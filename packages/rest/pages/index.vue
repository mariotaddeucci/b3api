<template>
  <div class="container has-text-centered">
    <div class="columns is-vcentered">
      <div class="column">
        <h1 class="title is-2">Dados da B3 de forma simples!</h1>
        <h2 class="subtitle is-4">
          Dados dos ativos da B3 com 15 minutos de atraso de forma simples e
          gratuita.
        </h2>
        <br />
        <p class="has-text-centered">
          <NuxtLink class="button is-medium is-info is-outlined" to="/pkg/rest"
            >Rest API</NuxtLink
          >
          <NuxtLink
            class="button is-medium is-info is-outlined"
            to="/pkg/python"
            >Python</NuxtLink
          >
          <NuxtLink class="button is-medium is-info is-outlined" to="/pkg/node"
            >Node</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  filter: grayscale(100%);
}
a.button {
  margin:0.3rem;
}
</style>
