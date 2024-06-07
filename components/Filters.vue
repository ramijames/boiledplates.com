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
        <InputComponent type="text" variant="default" placeholder="Search boilerplates" />
     </section>
  </main>
</template>

<script>
import InputComponent from '/components/shared/InputComponent.vue';

export default {
  components: {
    InputComponent
  }
}
</script>

<style scoped lang="scss">

#filters {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:  0;
  text-align: center;
  width: 100%;

  .search {
    width: 80%;
  }
}

</style>