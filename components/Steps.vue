<template>
  <section id="steps">
    <button v-for="(step, index) in steps" class="single-step" :class="{ active: currentStep === index + 1 }" @click="updateCurrentStep(index + 1)">
      <div class="icon">{{ step.icon }}</div>
      <div class="text">{{ step.text }}</div>
    </button>
  </section>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue';
import { useStepsStore } from '/store/boiledplates.js';

export default {
  setup() {
    const stepsStore = useStepsStore();
    const steps = [
      { icon: '🚀', text: 'Choose a platform' },
      { icon: '🔧', text: 'Select features' },
      { icon: '🎁', text: 'Get suggestions' }
    ];

    const updateCurrentStep = (step) => {
      stepsStore.updateCurrentStep(step);
      console.log(stepsStore.currentStep);
    };

    return { 
      steps,
      currentStep: computed(() => stepsStore.currentStep),
      updateCurrentStep
    };
  }
}
</script>

<style lang="scss" scoped>

@import './assets/variables.scss';

#steps {
  display: flex;
  justify-content: space-evenly;
  padding: $spacing-md;
  background: white;
  gap: $spacing-sm;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;

  .single-step {
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      font-size: 2rem;
    }

    .text {
      margin-top: $spacing-xs;
      font-size: $font-size-sm;
      text-align: center;
      font-family: $font-family-secondary, 'sans-serif';
    }
  }
}



</style>