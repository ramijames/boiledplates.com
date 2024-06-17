// boiledplates.js
import { defineStore } from 'pinia';

export const useStepsStore = defineStore({
  id: 'steps',
  state: () => ({
    currentStep: 1
  }),
  actions: {
    updateCurrentStep(step) {
      this.currentStep = step;
    }
  }
});