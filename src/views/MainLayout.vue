<template>
  <div class="layout">
    <ApartmentList/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import ApartmentList from '@/components/ApartmentList.vue';

  @Component({
    components: {
      ApartmentList
    },
  })

export default class MainLayout extends Vue {

}
</script>


<style lang="scss">

</style>
