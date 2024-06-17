<template>
  <Hero v-if="currentStep === 1" />
  <PlatformSelection v-if="currentStep === 1" v-model="selectedPlatform" />
  <FeatureSelection v-else-if="currentStep === 2" v-model="selectedFeatures" />
  <SuggestionOutput v-else-if="currentStep === 3" :platform="selectedPlatform" :features="selectedFeatures" />

  <Steps :currentStep="currentStep" />
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