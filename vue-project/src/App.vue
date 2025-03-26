<template>
  <div class="app">
    <Sidebar /> 
    <router-view />
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue"
</script>

<style lang="scss">
:root {
  --primary: #f74444;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1f1f1f;
  --dark-hover: #334155;
  --dark-alt: #353535;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: var(--dark-alt);
  color: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>