<template>
  <main id="boiled">
    <Hero id="Hero" :class="currentStep=== 1 ? 'home' : ''" />
    <section class="header" v-if="currentStep === 1">
      <h2>Which platform do you want to support?</h2>
    </section>
    <section class="header" v-if="currentStep === 2">
      <h2>Which {{ platform }} features will you need?</h2>
    </section>
    <section class="header" v-if="currentStep === 3">
      <h2>Suggested Boilerplates for {{ platform }}</h2>
    </section>
    <section id="BoiledContent">
      <PlatformSelection v-if="currentStep === 1" v-model="selectedPlatform" />
      <FeatureSelection v-else-if="currentStep === 2" v-model="selectedFeatures" />
      <SuggestionOutput v-else-if="currentStep === 3" :platform="selectedPlatform" :features="selectedFeatures" />
    </section>
    <Steps :currentStep="currentStep" />
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

    return { 
      currentStep: computed(() => stepsStore.currentStep)
    };
  },
  components: {
    PlatformSelection,
    FeatureSelection,
    SuggestionOutput
  },
  data() {
    return {
      selectedPlatform: null,
      selectedFeatures: [],
    };
  }
}
</script>

<style lang="scss" scoped>

@import './assets/variables.scss';

#boiled {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;

  #Hero {
    flex-shrink: 1;
  }

  #BoiledContent {
    flex-grow: 4;
    width: 100%;
  }

  #steps {
    flex-shrink: 1;
  }
}

.hero {
  height: 0;
  padding: 0; 
  overflow: hidden;
  opacity: 0;
  transition: all 0.44s ease-in-out;
  transform: scale(.8);
  flex-shrink: 2;

  &.home {
    height: inherit;
    opacity: 1;
    transform: scale(1);
  }
}


</style>