<template>
  <section class="hero content">
      <h1 class="hero-title">Find the right boilerplate for your project</h1>
      <h4>Tired of looking for exactly the right combination of tools, and then spending weeks trying to get everything set up? <span class="highlight">We got you, boo.</span></h4>
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
  padding: $spacing-xl 0 $spacing-md;
  margin-top: $spacing-md;
  margin-bottom: $spacing-md;
  text-align: center;

  h1 {
    -webkit-text-fill-color: transparent;
    text-shadow: -1px -1px 0 hsla(0,0%,100%,.2), 1px 1px 0 rgba($black,.1);
    background: linear-gradient(to bottom, $blue-dark 0%, $blue 70%);
    background-clip: text;
    color: unset;
    letter-spacing: -.025em;
  }

  h4 {
    max-width: 800px;

    .highlight {
      color: $blue;
    }
  }
}

</style>