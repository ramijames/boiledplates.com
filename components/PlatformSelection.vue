<template>
  <section id="Platforms">
    <button v-for="platform in platforms" :key="platform" @click="selectPlatform(platform)">
      <img :src="platform.icon" alt="platform.name" />
      <p>{{ platform.name }}</p>
    </button>
  </section>
</template>

<script>

export default {
  data() {
    return {
      platforms: [
        { name: 'Web', icon: '/images/web.svg' },
        { name: 'iOS', icon: '/images/ios.svg' },
        { name: 'Android', icon: '/images/android.svg' },
        { name: 'Desktop', icon: '/images/desktop.svg' }
      ]
    };
  },
  methods: {
    selectPlatform(platform) {
      this.$emit('update:modelValue', platform);
    }
  }
}

</script>

<style lang="scss" scoped>

@import './assets/variables.scss';

#Platforms {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: white;
  padding: $spacing-md;
  border-radius: $br-xl $br-xl 0 0;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 100%;
}


</style>