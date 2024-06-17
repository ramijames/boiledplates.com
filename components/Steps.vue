<template>
  <section id="steps-wrapper">
    <section id="steps">
      <template v-for="(step, index) in steps">
        <button class="single-step" :class="{ active: currentStep === index + 1 }" @click="updateCurrentStep(index + 1)">
          <div class="icon">{{ step.icon }}</div>
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

    // TODO: Instead of these placeholder icons, we need an icon that defines state
    // - current
    // - completed
    // - forward
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
  border-top: 2px solid rgba($black, 0.1);

  .single-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;

    // &::after {
    //   content: '';
    //   display: block;
    //   width: 12px;
    //   height: 18px;
    //   background: url('/steps/arrow.svg') no-repeat center;
    //   right: -0.65rem;
    //   top: 50%;
    //   position: absolute;
      
    // }

    // &:last-child::after {
    //   display: none;
    // }

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