<template>
  <main id="filters">
    <!-- 
      Filter should include:
      - A search input
      - A select dropdown for sorting
      - Framework types
        - Vue
        - React
        - Angular
        - Nuxt
        - Next
        - Laravel
        - Express
        - Rails
        - Django
        - Flask
        - Spring
        - ASP.NET
        - Web3
      - A button to reset filters
      - 
     -->
     <section class="search">
        <input type="text" placeholder="Search boilerplates">
     </section>
  </main>
</template>

<script setup>

</script>

<style scoped lang="scss">

@import './assets/variables';

#filters {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: $spacing-md 0;
  text-align: center;
  width: 100%;

  .search {
    width: 80%;

    input {
      padding: $spacing-sm $spacing-md;
      border-radius: $br-sm;
      border: 1px solid rgba($white, 0.1);
      color: $white;
      background: transparent;
      font-size: $font-size-md;
      font-family: $font-family-main, sans-serif;
      outline: none;
      transition: all 0.12s ease-in-out;
      width: 100%;
    }
  }
}

</style>