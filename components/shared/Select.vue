<template>
  <select v-model="selectedTypeScale" class="block appearance-none w-full bg-white dark:bg-slate-900 dark:text-white border dark:border-slate-100/10 hover:border-blue-500 px-4 py-2 pr-8 rounded focus:outline-none focus:shadow-outline shadow text-slate-700 shadow-sm shadow-black/5">
    <option disabled value="Select a type scale">Select a type scale</option>
    <option v-for="(scale, key) in typescales" :key="key" :value="key" :selected="scale.selected" >
      {{ scale.label }}
    </option>
  </select>
</template>