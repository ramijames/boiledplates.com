// boiledplates.js
import { defineStore } from 'pinia';

export const useStepsStore = defineStore({
  id: 'steps',
  state: () => ({
    currentStep: 1,
    stepsState: {
      platform: {
        selected: [],
        completed: false,
      },
      features: {
        selected: [],
        completed: false,
      },
      suggestions: {
        numberOfSuggestions: 0,
        completed: false,
      }
    }
  }),
  actions: {
    updateCurrentStep(step) {
      this.currentStep = step;
    },
    updatePlatformStep(selected) {
      this.stepsState.platform.selected = selected;
      this.stepsState.platform.completed = true;
    },
    updateFeaturesStep(selected) {
      this.stepsState.features.selected = selected;
      this.stepsState.features.completed = true;
      this.currentStep = 3; // suggestions step
    },
    updateSuggestionsStep(numberOfSuggestions) {
      this.stepsState.suggestions.numberOfSuggestions = numberOfSuggestions;
      this.stepsState.suggestions.completed = true;
    },
    resetAllSteps() {
      this.stepsState.platform.selected = [];
      this.stepsState.platform.completed = false;
      this.stepsState.features.selected = [];
      this.stepsState.features.completed = false;
      this.stepsState.suggestions.numberOfSuggestions = 0;
      this.stepsState.suggestions.completed = false;
      this.currentStep = 1; // platform step
    }
  }
});