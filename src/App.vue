<template>
  <div id="app">
    <MainLayout/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainLayout from '@/views/MainLayout.vue';

@Component({
  components: {
    MainLayout,
  },
})
export default class App extends Vue {

}
</script>

<style lang="scss">

</style>
