<script setup lang="ts">

</script>

<template>
  <header>
    <h1>Test</h1>
  </header>

  <main>
    <v-container>
      <v-select
          label="Select"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      ></v-select>
      <hr>
      <v-btn>Ciao</v-btn>
    </v-container>
  </main>
</template>

<style scoped>

</style>
