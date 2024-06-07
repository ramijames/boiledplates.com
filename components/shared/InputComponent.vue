<template>
  <input
    v-model="inputValue"
    :class="variant"
    :type="type"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', Number($event.target.value))"
    min="1"
  />
</template>

<script>
import { ref, watch, computed } from "vue";

export default {
  props: {
    modelValue: {
      type: [Number, String],
      default: null,
    },
    type: {
      type: String,
      default: "default",
    },
    placeholder: String,
    variant: {
      type: String,
      default: "default",
    },
  },
  setup(props, { emit }) {
    const inputValue = ref(props.modelValue);

    watch(
      () => props.modelValue,
      (newVal) => {
        inputValue.value = newVal;
      }
    );

    return {
      inputValue,
    };
  },
};
</script>

<style scoped>


.default {
  padding: 1rem 1.5rem;
  border-radius: 0.2rem;
  border: 1px solid rgba(255,255,255, 0.1);
  color: white;
  background: transparent;
  font-size: 16px;
  font-family: sans-serif;
  outline: none;
  transition: all 0.12s ease-in-out;
  width: 100%;
}

</style>
