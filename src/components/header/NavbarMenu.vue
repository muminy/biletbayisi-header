<template>
  <div class="custom-menu">
    <b-container>
      <div class="d-block d-lg-flex d-md-flex aling-items-center menu-list">
        <b-nav class="responsive-menu">
          <b-nav-text>
            <span data-icon-type="flight" class="icon"></span>
            <b-link>
              <span>Uçak Bileti</span>
              <right-icon />
            </b-link>
          </b-nav-text>
          <b-nav-text>
            <span data-icon-type="flight_takeoff" class="icon"></span>
            <b-link>
              <span>Yurtiçi</span>
              <right-icon />
            </b-link>
          </b-nav-text>
          <b-nav-text>
            <span data-icon-type="language" class="icon"></span>
            <b-link>
              <span>Yurtdışı</span>
              <right-icon />
            </b-link>
          </b-nav-text>
          <b-nav-text>
            <span data-icon-type="check" class="icon"></span>
            <b-link>
              <span>Check-In</span>
              <right-icon />
            </b-link>
          </b-nav-text>
          <b-nav-text>
            <span data-icon-type="help_outline" class="icon"></span>
            <b-link>
              <span>Blog</span>
              <right-icon />
            </b-link>
          </b-nav-text>
          <b-nav-text>
            <span data-icon-type="mail_outline" class="icon"></span>
            <b-link>
              <span>İletişim</span>
              <right-icon />
            </b-link>
          </b-nav-text>
        </b-nav>
        <b-nav class="ml-auto responsive-menu">
          <b-nav-text>
            <span data-icon-type="login" class="icon"></span>
            <b-link @click="$bvModal.show('loginModal')">
              <span>Giriş Yap</span>
              <right-icon />
            </b-link>
          </b-nav-text>
          <b-nav-text>
            <span data-icon-type="perm_identity" class="icon"></span>
            <b-link @click="$bvModal.show('SingUpModal')">
              <span>Üye Ol</span>
              <right-icon />
            </b-link>
          </b-nav-text>
        </b-nav>
      </div>
    </b-container>
  </div>
</template>

<script>
import $ from 'jquery';
import RightIcon from '../icons/RightIcon.vue';
export default {
  components: {RightIcon},
  name: 'NavbarMenu',
  mounted() {
    this.$nextTick(() => {
      $('.navbar-toggler').on('click', function() {
        console.log(1);
        $('.custom-menu').animate({width: 'toggle'}, 100);
      });
    });
  },
};
</script>

<style lang="less">
.icon {
  display: none;
}

.icon[data-icon-type='language']::before {
  font-family: 'Material Icons';
  content: '\e894';
  font-size: 24px;
}

.icon[data-icon-type='flight_takeoff']::before {
  font-family: 'Material Icons';
  content: '\e539';
  font-size: 24px;
}

.icon[data-icon-type='flight']::before {
  font-family: 'Material Icons';
  content: '\e905';
  font-size: 24px;
}

.icon[data-icon-type='check']::before {
  font-family: 'Material Icons';
  content: '\e5ca';
  font-size: 24px;
}

.icon[data-icon-type='help_outline']::before {
  font-family: 'Material Icons';
  content: '\e8fd';
  font-size: 24px;
}

.icon[data-icon-type='mail_outline']::before {
  font-family: 'Material Icons';
  content: '\e0e1';
  font-size: 24px;
}

.icon[data-icon-type='login']::before {
  font-family: 'Material Icons';
  content: '\ea77';
  font-size: 24px;
}

.icon[data-icon-type='perm_identity']::before {
  font-family: 'Material Icons';
  content: '\e8a6';
  font-size: 24px;
}
ul.nav {
  padding: 0;
  margin: 0;
}

.menu-list {
  position: relative;
  padding-top: 5px;
}

.custom-menu {
  a {
    padding: 9px 12px;
    color: #585d5f;
    display: inline-block;
    font-size: 0.875rem;
    border-bottom: 3px solid transparent;
    &:hover {
      border-bottom-color: #999;
      color: #585d5f;
      text-decoration: none;
    }
  }
  .navbar-text {
    padding: 0px;
  }
}

@media (max-width: 767px) {
  .custom-menu {
    position: fixed;
    left: 0;
    top: 48px;
    bottom: 0;
    width: 100%;
    background-color: #fff !important;
    height: 100vh;
    z-index: 10000;
    overflow-y: auto;
    display: none;
    padding-bottom: 56px;

    .navbar-text {
      padding: 0px;
      display: flex;
      align-items: center;
    }
    .icon {
      display: block !important;
    }
    a {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      margin-left: 8px;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }

  .responsive-menu {
    display: block !important;
  }

  .nav-link {
    border-bottom: 1px solid #ddd;
  }
  .nav-item {
    width: 100%;
  }
  .nav-link {
    display: flex !important;
    justify-content: space-between;
    width: 100% !important;
  }
  .icons {
    display: block;
  }
}
</style>
