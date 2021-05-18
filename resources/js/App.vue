<template>
  <div id="app" class="bg-light h-screen">
    <Navigation />
    <router-view />
    <vue-progress-bar></vue-progress-bar>
    <div>
    	<sidebar/>
    </div>
  </div>
</template>

<script>

 import Navigation from "./components/Navigation.vue";
 import sidebar from "./components/sidebar.vue";
export default {
  components: {
    Navigation,
    sidebar
  }
};
</script>

<style>
.h-screen {
  height: 100vh;
}
</style>
