<template>
  <header>
    <b-navbar
      toggleable="lg"
      type="light"
      class="px-0 headerborder"
      variant="light"
    >
      <div class="container-fluid py-0 header-fluid">
        <b-container>
          <button
            @click="handleMenu"
            class="d-lg-none menu-btn px-0 d-md-none"
            type="button"
          >
            <span v-if="!isActiveMenu" class="material-icons menuIcon">
              view_headline
            </span>
            <span v-if="isActiveMenu" class="material-icons menuIcon">
              close
            </span>
          </button>
          <b-navbar-brand class="mr-3" href="#">
            <b-img
              src="https://biletbayisi.com/static/site/images/logo.svg"
              alt=""
            />
          </b-navbar-brand>

          <div class="d-none d-sm-none d-lg-flex d-md-flex align-items-center">
            <div class="separate"></div>
            <div class="logo-info">Uçak Bileti - En Ucuz Uçak Biletleri</div>
          </div>

          <div class="ml-auto flex-column d-none d-lg-flex d-md-flex">
            <div class="number-info">7/24 Uçak Bileti Hattı</div>
            <a class="service-number" href="#">
              0850 302 99 35
            </a>
          </div>
          <div class="phone-icon d-lg-none d-md-none">
            <phone-icon :size="24" />
          </div>
        </b-container>
      </div>
    </b-navbar>
    <navbar-menu />
  </header>
</template>

<script>
import PhoneIcon from '../icons/PhoneIcon.vue';
import NavbarMenu from './NavbarMenu.vue';

export default {
  components: {NavbarMenu, PhoneIcon},
  name: 'Header',
  data: function() {
    return {
      isActiveMenu: false,
    };
  },
  methods: {
    handleMenu: function() {
      this.isActiveMenu = !this.isActiveMenu;
    },
  },
};
</script>

<style lang="less">
.header-fluid {
  background-color: #f8f9fa;
  .menu-btn {
    background-color: transparent;
    border-width: 0px;
    padding-top: 5px;
    border-radius: 1px;
    &:focus {
      outline: 5px auto -webkit-focus-ring-color;
    }
  }

  .service-number {
    color: #696969;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.03rem;
    text-decoration: none;
  }
}
.separate {
  height: 40px;
  border-right: 1px solid #dddddd;
  margin-right: 10px;
}
.headerborder {
  border-bottom: 1.3px solid #dddddd;
  min-height: 58px;
}
.logo-info {
  font-size: 0.825rem;
  font-weight: 400;
  margin: 0;
}

.number-info {
  font-weight: 400;
  font-size: 0.75rem;
  padding-top: 3px;
}

.navbar {
  padding: 0px !important;
}
.navbar-toggler {
  margin-bottom: -3px !important;
}
.phone-icon {
  display: flex;
  flex-direction: row;
  width: 30px;
  height: 30px;
  border: 1px solid #0169d0;
  color: #0169d0;
  font-size: 18px;
  border-radius: 50%;
  padding: 2px 0 0 2px;
  align-items: center;
  justify-content: center;
}

@media (max-width: 767px) {
  header {
    box-shadow: 0 1px 20px 0 hsla(0, 0%, 39.2%, 0.75) !important;
    position: fixed;
    margin-top: -5px;
    height: 53px;
    overflow: hidden;
    right: 0;
    left: 0;
    z-index: 1030;
    border-bottom: 1.3px solid #dddddd;
    background-color: #fff;
  }
}

.menuIcon {
  color: #000;
}
</style>
