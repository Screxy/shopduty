<template>
  <nav class="navigation">
    <button class="navigation__button" @click="toogleMenu" v-if="!desktop">
      <svg
        class="navigationbar__burger"
        width="20"
        height="27"
        viewBox="0 0 20 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="5"
          width="20"
          height="4"
          rx="2"
          fill="#EF5537"
          class="navigation__burger-line1"
        />
        <rect
          y="14"
          width="20"
          height="4"
          rx="2"
          fill="#EF5537"
          class="navigation__burger-line2"
        />
        <rect
          y="23"
          width="20"
          height="4"
          rx="2"
          fill="#EF5537"
          class="navigation__burger-line3"
        />
      </svg>
    </button>
    <ul
      class="navigation__list"
      v-show="burgerVisible || desktop"
      @click="toogleMenu"
    >
      <li class="navigation__item">
        <router-link to="/" class="navigation__link">Главная</router-link>
      </li>
      <li class="navigation__item">
        <router-link to="/About" class="navigation__link"
          >О проекте</router-link
        >
      </li>
      <li class="navigation__item">
        <router-link to="/UsersPage" class="navigation__link"
          >Клиенты</router-link
        >
      </li>
      <li class="navigation__item">
        <router-link to="/ProductsPage" class="navigation__link"
          >Товары</router-link
        >
      </li>
      <li class="navigation__item">
        <router-link to="/TransactionsPage" class="navigation__link"
          >Операции</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: window.innerWidth,
      burgerVisible: false,
      desktop: false,
    };
  },
  methods: {
    handleResize() {
      this.screenWidth > 1200
        ? ((this.desktop = true), (this.burgerVisible = true))
        : ((this.desktop = false), (this.burgerVisible = false));
      this.screenWidth = window.innerWidth;
    },
    toogleMenu() {
      this.burgerVisible = !this.burgerVisible;
    },
    isDesktop() {
      this.screenWidth > 1200
        ? ((this.desktop = true), (this.burgerVisible = true))
        : ((this.desktop = false), (this.burgerVisible = false));
    },
  },
  watch: {
    screenWidth: 'isDesktop',
  },
  mounted() {
    this.screenWidth > 1200 ? (this.desktop = true) : (this.desktop = false);
    window.addEventListener('resize', this.handleResize);
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/mixin' as *;
@use '@/assets/scss/function' as *;
@use '@/assets/scss/variables' as *;
.navigation__button {
  border: none;
  background-color: transparent;
}
// .navigation__burger {
// }
// .navigation__burger-line1 {
// }
// .navigation__burger-line2 {
// }
// .navigation__burger-line3 {
// }
.navigation {
  position: relative;
}
.navigation__list {
  position: absolute;
  left: 0;
  margin-top: 1rem;
  padding: 2rem;
  border: solid 0.1rem rgba(0, 0, 0, 0.329);
  border-radius: 2rem;
  z-index: 1;
  background-color: #ffffff62;
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
  @include media(min, xl) {
    display: flex;
    position: static;
    margin-top: 0;
    padding: 0;
    border: none;
    justify-content: space-between;
    align-items: center;
    height: auto;
  }
}
.navigation__link {
  @include subTitle();
  text-decoration: none;
  transition: all 0.3s;
  @include media(min, xl) {
    &:hover {
      color: color(primaryTitleColor);
    }
  }
}
</style>
