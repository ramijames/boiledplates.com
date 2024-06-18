<template>
  <section class="hero content">
    <h1 class="hero-title">Why wait six months when you can start building today?</h1>
    <h3>Boilerplates are pre-configured sets of functionality that give you an edge when building the next great thing. Don’t reinvent the wheel, use what is already out there.</h3>
  </section>
</template>

<style scoped lang="scss">

@import './assets/variables';

.hero {
  color: $white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: $spacing-md;
  width: 100vw;
  height: 50vh;

  h1 {
    color: $white;
    font-size: $font-size-xxl;
    line-height: 100%;
  }

  h3 {
    color: rgba($white, 0.5);
    font-size: $font-size-sm;
    font-family: $font-family-secondary, sans-serif;
    margin-top: $spacing-sm;

    .highlight {
      color: $white;
      font-weight: 700;
    }
  }
}

</style>