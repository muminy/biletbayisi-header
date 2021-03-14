<template>
  <b-container class="d-none d-md-block d-lg-block">
    <div class="d-flex aling-items-center menu-list">
      <b-nav>
        <b-nav-item>Uçak Bileti</b-nav-item>
        <b-nav-item>Yurtiçi</b-nav-item>
        <b-nav-item>Yurtdışı</b-nav-item>
        <b-nav-item>Check-In</b-nav-item>
        <b-nav-item>Blog</b-nav-item>
        <b-nav-item>İletişim</b-nav-item>
      </b-nav>
      <b-nav class="ml-auto">
        <b-nav-item @click="$bvModal.show('loginModal')">Giriş Yap</b-nav-item>
        <b-nav-item @click="$bvModal.show('SingUpModal')">Üye Ol</b-nav-item>
      </b-nav>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'NavbarMenu',
};
</script>

<style lang="less">
ul.nav {
  padding: 0;
  margin: 0;
}

.menu-list {
  position: relative;
  padding-top: 5px;
}

.nav-link {
  padding: 9px 12px !important;
  color: #585d5f;
  display: inline-block;
  font-size: 0.875rem;
  border-bottom: 3px solid transparent;
  padding: 0.563rem 0.75rem 0.562rem;
  &:hover {
    border-bottom-color: #999;
    color: #585d5f;
  }
}
</style>
