<template>
  <main id="boiled">
    <Hero id="Hero" :class="currentStep=== 1 ? 'home' : ''" />
    <section class="header" >
      <h2 v-if="currentStep === 1">Which platform do you want to support?</h2>
      <h2 v-if="currentStep === 2">Which {{ selectedPlatform }} features will you need?</h2>
      <h2 v-if="currentStep === 3">Suggested Boilerplates for {{ selectedPlatform }}</h2>
    </section>
    <section class="white-wrapper">
      <section id="BoiledContent" :class="currentStep=== 1 ? 'home' : ''">
        <PlatformSelection v-if="currentStep === 1" v-model="selectedPlatform" />
        <FeatureSelection v-else-if="currentStep === 2" v-model="selectedFeatures" />
        <SuggestionOutput v-else-if="currentStep === 3" :platform="selectedPlatform" :features="selectedFeatures" />
      </section>
      <Steps :currentStep="currentStep" />
    </section>
  </main>
</template>

<script>
import { computed } from 'vue';
import { useStepsStore } from '/store/boiledplates.js';

import PlatformSelection from '/components/PlatformSelection.vue';
import FeatureSelection from '/components/FeatureSelection.vue';
import SuggestionOutput from '/components/SuggestionOutput.vue';

export default {
  setup() {
    const stepsStore = useStepsStore();

    // Pull the currently selected platform frmo the store
    const selectedPlatform = computed(() => stepsStore.stepsState.platform.selected);

    return { 
      currentStep: computed(() => stepsStore.currentStep),
      selectedPlatform
    };
  },
  components: {
    PlatformSelection,
    FeatureSelection,
    SuggestionOutput
  }
}
</script>

<style lang="scss" scoped>

@import './assets/variables.scss';

.white-wrapper {
  background: white;
  border-radius: $br-xl $br-xl 0 0;
  width: 100%;
  max-width: 800px;
  box-shadow: 0px 6px 4px 0px rgba(0,0,0,0.36), 0px 20px 40px 10px rgba(22, 6, 77, 0.3), ;
}

#boiled {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100dvh;

  #BoiledContent {
    width: 100%;
    height: 65dvh;
    transition: all .14s ease-in-out;

    &.home {
      height: 35dvh;
    }
  }

  #steps {
    height: 25dvh;
  }
}

.hero {
  height: 0;
  overflow: hidden;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
  transition: all .14s ease-in-out;
  // transform: scale(.8);

  &.home {
    height: 50dvh;
    opacity: 1;
    transform: scale(1);
    padding: $spacing-md;
  }
}


</style>