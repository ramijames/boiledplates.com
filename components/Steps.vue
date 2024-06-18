<template>
  <section class="wrapper">
    <transition name="collapse" v-if="currentStep !== 1">
      <section id="StateButtons">
        <button class="reset" @click="reset">Reset</button>
        <button class="next" @click="next" v-if="currentStep !== 3">Next</button>
      </section>
    </transition>
    <section id="Steps">
      <template v-for="(step, index) in steps">
        <!-- <button class="single-step" :class="{ active: currentStep === index + 1 }" @click="updateCurrentStep(index + 1)"> -->
        <button class="single-step" :class="{ active: currentStep === index + 1, [step.stepState]: true  }">
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
          stepState: stepsState.features.completed ? 'complete' : (stepsStore.currentStep === 3 ? 'current' : 'forward'),
        }
      ];
      return steps;
    });

    const updateCurrentStep = (step) => {
      stepsStore.updateCurrentStep(step);
      console.log(stepsStore.currentStep);
    };

    const reset = () => {
      stepsStore.resetAllSteps();
    };

    const next = () => {
      stepsStore.updateFeaturesStep([1,2,3]);
    };

    return { 
      steps,
      currentStep: computed(() => stepsStore.currentStep),
      updateCurrentStep,
      reset,
      next
    };
  }
}
</script>

<style lang="scss" scoped>

@import './assets/variables.scss';

.collapse-enter-active, .collapse-leave-active {
  transition: height 0.14s;
  overflow: hidden;
  background: white;
}
.collapse-enter-to, .collapse-leave-to {
  height: 0;
  overflow: hidden;
  background: white;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  padding: 0 $spacing-md;
  align-items: center;
}

#StateButtons {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  gap: $spacing-sm;
  height: 7.5vh;

  button {
    border: none;
    background: rgba($blue, 0.1);
    cursor: pointer;
    font-size: $font-size-sm;
    font-family: $font-family-secondary, 'sans-serif';
    font-weight: 600;
    color: $blue;
    transition: all 0.3s;
    width: 50%;
    height: 70%;
    border-radius: $br-md;
    border: 2px solid rgba($blue, 0.1);

    &:hover {
      background: $blue;
      color: white;
    }

    &.disabled {
      pointer-events: none;
      background: rgba($white, 0.1);
      border: 2px solid rgba($black, 0.1);
      color: rgba($black, 0.4);
    }
  
  }
}

#Steps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: $spacing-sm;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  height: 12.5vh;

  .single-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    border: none;
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

    &.complete .text {
      color: $green;
    }

    &.current .text {
      color: $blue;
    }
  }
}



</style>