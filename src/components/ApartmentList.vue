<template>
  <div class="apartment">
    <ul class="apartment__list">
      <li class="apartment__card" v-for="apartment in apartments" :key="apartment.id">
        <ApartmentCard :apartment="apartment"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Apartment} from '@/interfaces/apartment.interface';
import ApartmentCard from '@/components/ApartmentCard.vue';

@Component({
  components: {
    ApartmentCard,
  },
})

export default class ApartmentList extends Vue {

  async mounted() {
    await this.$store.dispatch('apartment/getApartment');
  }

  get apartments(): Apartment.IApartmentItem[] {
    return this.$store.state.apartment.apartment;
  }

}
</script>


<style lang="scss">
  .apartment {
    &__list {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      padding: 30px 0px;
      margin: 0 -30px;
    }

    &__card {
      min-height: 200px;
      margin: 0 15px 30px 15px;
      width: calc(25% - 30px);

      @media(max-width: 1100px) {
        width: calc(33.3% - 30px);
      }

      @media(max-width: 800px) {
        width: calc(50% - 30px);
      }

      @media(max-width: 545px) {
        width: 100%;
      }
    }
  }
</style>
