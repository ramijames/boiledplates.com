<template>
  <section id="steps-wrapper">
    <section id="steps">
      <template v-for="(step, index) in steps">
        <button class="single-step" :class="{ active: currentStep === index + 1 }" @click="updateCurrentStep(index + 1)">
          <div class="state"><img :src="`/steps/` + step.stepState + `.svg`" alt=""></div>
          <div class="text">{{ step.text }}</div>
        </button>
        <svg v-if="index < steps.length - 1" width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L10 10L2 18" stroke="black" stroke-opacity="0.15" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </template>
    </section>
  </section>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue';
import { useStepsStore } from '/store/boiledplates.js';

export default {
  setup() {
    const stepsStore = useStepsStore();

    const steps = computed(() => {
      const stepsState = stepsStore.stepsState;
      let steps = [
        { 
          text: 'Platforms',
          stepState: stepsState.platform.completed ? 'complete' : (stepsStore.currentStep === 1 ? 'current' : 'forward'),
        },
        { 
          text: 'Features',
          stepState: stepsState.features.completed ? 'complete' : (stepsStore.currentStep === 2 ? 'current' : 'forward'),
        },
        { 
          text: 'Suggestions',
          stepState: stepsState.features.completed ? 'complete' : (stepsStore.currentStep === 2 ? 'current' : 'forward'),
        }
      ];
      return steps;
    });

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

#steps-wrapper {
  display: flex;
  justify-content: center;
  background: white;
  width: 100%;
  max-width: 800px;
}

#steps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $spacing-md;
  background: white;
  gap: $spacing-sm;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;

  .single-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;

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