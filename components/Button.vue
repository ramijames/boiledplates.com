<template>
  <nuxt-link class="button" :class="type, size" :to="link">
    {{ text }}
  </nuxt-link>
</template>

<script>

export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'medium'
    },
    text: {
      type: String,
      default: 'Button'
    },
    link: {
      type: String,
      default: ''
    }
  }
}

</script>

<style scoped lang="scss">

@import './assets/variables';

.button {
  position:relative;
  padding:$spacing-sm $spacing-md;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  outline:none;
  border-radius: $br-sm;
  transition: all .06s ease-in-out;
  cursor:pointer;
  background: $red;
  color:$black;
  text-decoration: none;
  font-family: $font-family-main, sans-serif;
  font-weight: 600;
  font-size: $font-size-md;
  white-space:nowrap;
  z-index: 1;
  transition: all 0.12s ease-in-out;
  overflow: hidden;

  @media screen and (max-width: 1200px){
    font-size: $font-size-md;
  }
  
  &.small {
    font-size: $font-size-xs;
    padding: $spacing-xs $spacing-sm;
    border-radius: $br-xl;
  }

  &:hover {
    background-color: lighten($blue, 10%);
    transform: scale(1.03);
  }

  &:active {
    background-color: darken($blue, 10%);
    transform: scale(1);
  }
}

</style>