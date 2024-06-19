<template>
  <section id="Platforms">
    <section class="button-set">
      <button 
        v-for="platform in platforms" 
        :key="platform.name" 
        @click="updatePlatformStep(platform.name)"
      >
        <img :src="platform.icon" alt="platform.name" />
        <p>{{ platform.name }}</p>
      </button>
    </section>
  </section>
</template>

<script>

import { computed } from 'vue';
import { useStepsStore } from '/store/boiledplates.js';

export default {
  setup() {
    const stepsStore = useStepsStore();

    const updatePlatformStep = (selectedPlatform) => {
      // Set the selected platform to the store
      stepsStore.updatePlatformStep(selectedPlatform);

      // Set the current step 2
      stepsStore.updateCurrentStep(2);

      // console.log(stepsStore.stepsState.platform.completed);
      // console.log(stepsStore.stepsState.platform);
    };

    return { 
      currentStep: computed(() => stepsStore.currentStep),
      updatePlatformStep
    };
  },
  data() {
    return {
      platforms: [
        { name: 'Web', icon: '/platform/web.svg' },
        { name: 'iOS', icon: '/platform/ios.svg' },
        { name: 'Android', icon: '/platform/android.svg' },
        { name: 'Server', icon: '/platform/server.svg' }
      ]
    };
  }
}

</script>

<style lang="scss" scoped>

@import './assets/variables.scss';

#Platforms {
  padding: $spacing-md $spacing-md 0 $spacing-md;
  width: 100%;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;

  .button-set {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    max-width: 400px;
    margin: 0 auto;
    gap: $spacing-xs;
    height: 100%;

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: none;
      padding: $spacing-xs;
      cursor: pointer;
      background: white;
      border-radius: $br-md;
      background: rgba($blue, 0.1);
      color: $blue;
      font-size: $font-size-sm;
      font-family: $font-family-secondary, 'sans-serif';
      font-weight: 600;
      border: 2px solid rgba($blue, 0.1);

      &:hover,
      &:focus,
      &:active {
        background: $blue;
        color: white;

        img {
          filter: invert(1);
        }
      }

      img {
        width: 50px;
        height: 50px;
      }

      p {
        margin: 0;
        font-size: $font-size-sm;
      }
    }
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    padding: $spacing-xs;
    cursor: pointer;
    background: white;
    border-radius: $br-md;

    &:hover,
    &:focus,
    &:active {
      background: rgba($blue, 0.1);
    }

    img {
      width: 50px;
      height: 50px;
    }

    p {
      margin: 0;
      font-size: $font-size-sm;
    }
  }
}


</style>