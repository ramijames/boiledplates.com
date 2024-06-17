<template>
  <section id="Platforms">
    <button 
      v-for="platform in platforms" 
      :key="platform.name" 
      @click="updatePlatformStep(platform.name)"
    >
      <img :src="platform.icon" alt="platform.name" />
      <p>{{ platform.name }}</p>
    </button>
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
        { name: 'Web', icon: '/images/web.svg' },
        { name: 'iOS', icon: '/images/ios.svg' },
        { name: 'Android', icon: '/images/android.svg' },
        { name: 'Desktop', icon: '/images/desktop.svg' }
      ]
    };
  }
  // methods: {
  //   selectPlatform(platform) {
  //     // push the selected platform to the store
  //     useStepsStore.updatePlatformStep(platform);

  //     // this.$emit('update:modelValue', platform);
  //   }
  // }
}

</script>

<style lang="scss" scoped>

@import './assets/variables.scss';

#Platforms {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: white;
  padding: $spacing-md;
  border-radius: $br-xl $br-xl 0 0;
  width: 100%;
  gap: $spacing-md;
  max-width: 800px;
  margin: 0 auto;
  height: 100%;
}


</style>