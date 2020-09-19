<template>
  <el-card shadow="hover" class="card" body-style="padding: 0">
    <div class="card__header">
      <div class="card__header-title">
        <h4>{{apartmentItem.title}}</h4>
        <el-tooltip
            :content="favoriteTooltipContent"
            effect="dark"
            placement="top"
            :open-delay="600">
          <el-button
              @click.stop="setFavorite"
              class="card__header-favorite"
              :class="{'card__header-favorite--remove': apartment.favorites}"
              icon="el-icon-star-on"></el-button>
        </el-tooltip>
      </div>
    </div>

    <div class="card__body">
      <img :src="apartmentItem.preview" :alt="apartmentItem.title">
    </div>

    <div class="card__footer">
      <el-button type="primary" icon="el-icon-shopping-cart-2">
        {{apartmentItem.price}}
      </el-button>
    </div>
  </el-card>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import {Apartment} from '@/interfaces/apartment.interface';

@Component({
  components: {},
})

export default class ApartmentCard extends Vue {
  @Prop()
  apartment:  Apartment.IApartmentItem

  apartmentItem: Apartment.IApartmentItem = this.apartment;

  get favoriteTooltipContent() {
    return this.apartmentItem.favorites ? 'Убрать из избранного' : 'Добавить в избранное';
  }

  setFavorite() {
    this.apartment.favorites = !this.apartment.favorites;
  }
}
</script>


<style lang="scss">
  .card {
    &__header {
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
    }

    &__header-title {
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__header-favorite {
      i {
        color: blue;
      }

      &--remove {
        i {
          color: red;
        }
      }
    }

    &__body {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 0 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__footer {
      margin-top: 20px;
      padding: 0 20px;

      .el-button {
        width: 100%;
      }
    }
  }
</style>
