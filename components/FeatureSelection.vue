<template>
  
  <section id="FeatureSelection" class="content">
    <section class="feature-set">
      <div v-for="f in currentPlatform" :key="f.id">
        <input type="checkbox" :id="f.id" :value="f.id" v-model="selectedFeatures" />
        <label :for="f.id">{{ f.name }}</label>
      </div>
    </section>
  </section>
</template>

<script>

import { ref, computed, watch, onMounted, reactive } from 'vue';
import { useStepsStore } from '/store/boiledplates.js';

export default {
  data() {
    return {

    };
  },
  setup() {
    const stepsStore = useStepsStore();
    const selectedPlatform = stepsStore.stepsState.platform.selected;
    const selectedFeatures = ref([]);

    const platforms = reactive({
      Web: [
              { id: 0, name: 'Web Feature 0' },
              { id: 1, name: 'Web Feature 1' },
              { id: 2, name: 'Web Feature 2' },
              { id: 3, name: 'Web Feature 3' },
              { id: 4, name: 'Web Feature 4' }
            ],
      iOS: [
            { id: 5, name: 'iOS Feature 5' },
            { id: 6, name: 'iOS Feature 6' },
            { id: 7, name: 'iOS Feature 7' },
            { id: 8, name: 'iOS Feature 8' },
            { id: 9, name: 'iOS Feature 9' },
            { id: 20, name: 'iOS Feature 20' },
            { id: 21, name: 'iOS Feature 21' },
            { id: 22, name: 'iOS Feature 22' },
            { id: 23, name: 'iOS Feature 23' },
            { id: 24, name: 'iOS Feature 24' },
            { id: 25, name: 'iOS Feature 25' },
            { id: 26, name: 'iOS Feature 26' },
            { id: 27, name: 'iOS Feature 27' },
            { id: 28, name: 'iOS Feature 28' },
            { id: 29, name: 'iOS Feature 29' }
          ],
      Android: [
            { id: 10, name: 'Android Feature 10' },
            { id: 11, name: 'Android Feature 11' },
            { id: 12, name: 'Android Feature 12' },
            { id: 13, name: 'Android Feature 13' },
            { id: 14, name: 'Android Feature 14' }
          ],
      Server: [
            { id: 15, name: 'Server Feature 15' },
            { id: 16, name: 'Server Feature 16' },
            { id: 17, name: 'Server Feature 17' },
            { id: 18, name: 'Server Feature 18' },
            { id: 19, name: 'Server Feature 19' }
          ],
    });

    onMounted(() => {
      selectedFeatures.value = platforms[selectedPlatform].map(f => f.id);
    });

    return { 
      selectedFeatures,
      currentPlatform: computed(() => platforms[selectedPlatform])
    };
  }
}

</script>


<style lang="scss" scoped>

@import './assets/variables.scss';

#FeatureSelection {
  background-color: white;
  border-radius: $br-xl $br-xl 0 0;
  padding: $spacing-lg $spacing-md;
  width: 100%;
  height: 100%;
  min-height: 180px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  overflow-y: auto;

  .feature-set {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: $spacing-sm;
    width: 100%;
    max-width: 400px;

    div {
      display: flex;
      align-items: center;
      gap: $spacing-sm;

      input {
        width: 30px;
        height: 30px;
      }

      label {
        font-size: $font-size-lg;
      }
    }
  }
}


</style>