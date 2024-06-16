<template>
  <section class="hero content">
      <img src="/bp-logo-dark.svg" alt="Boilerplate Logo" />
      <h2>Boiled Plates</h2>
      <h1 class="hero-title">Find the right boilerplate for you</h1>
      <!-- <h3><span class="highlight">What does a boilerplate include?</span></h3> -->
      <ul class="hero-features">
        <li>
          <img src="/hero/hero-front-end.svg" alt="Front-end">
          <p>Front-end</p>
        </li>
        <li>
          <img src="/hero/hero-auth.svg" alt="Auth">
          <p>Auth</p>
        </li>
        <li>
          <img src="/hero/hero-database.svg" alt="Database">
          <p>Database</p>
        </li>
        <li>
          <img src="/hero/hero-payment.svg" alt="Payment">
          <p>Payment</p>
        </li>
        <li>
          <img src="/hero/hero-email.svg" alt="Email">
          <p>Email</p>
        </li>
        <li>
          <img src="/hero/hero-seo.svg" alt="SEO">
          <p>SEO</p>
        </li>
        <li>
          <img src="/hero/hero-styles.svg" alt="Styles">
          <p>Styles</p>
        </li>
      </ul>
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
  padding: $spacing-md 0;
  margin-top: $spacing-md;
  margin-bottom: $spacing-md;
  text-align: center;

  img {
    height: 180px;
  }

  h1 {
    -webkit-text-fill-color: transparent;
    text-shadow: -1px -1px 0 hsla(0,0%,100%,.2), 1px 1px 0 rgba($black,.1);
    background: linear-gradient(to bottom, $white 0%, $blue-light 120%);
    background-clip: text;
    color: unset;
    letter-spacing: -.025em;
    max-width: 600px;
  }

  h2 {
    color: $white;
    text-transform: uppercase;
    font-size: $font-size-lg;
    font-family: $font-family-main, sans-serif;
    font-weight: 600;
    max-width: 800px;
    margin-top: $spacing-sm;
    -webkit-text-fill-color: transparent;
    text-shadow: -1px -1px 0 hsla(0,0%,100%,.2), 1px 1px 0 rgba($black,.1);
    background: linear-gradient(to bottom, $blue-dark 0%, $blue 70%);
    background-clip: text;
    color: unset;
    letter-spacing: -.025em;
  }

  h3 {
    color: $white;
    font-size: $font-size-lg;
    font-family: $font-family-main, sans-serif;
    font-weight: 400;
    max-width: 800px;
    margin-top: $spacing-sm;

    .highlight {
      color: $white;
      font-weight: 700;
    }
  }

  .hero-features {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: $spacing-md;
    margin-top: $spacing-md;

    li {
      color: $white;
      font-size: $font-size-md;
      font-family: $font-family-main, sans-serif;
      font-weight: 400;
      list-style: none;

      img {
        width: 60px;
        height: 60px;
        opacity: 0.8;
      }

      p {
        margin-top: $spacing-xs;
        color: $blue-light;
      }
    }
  }
}

</style>