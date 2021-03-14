<template>
  <div>
    <Header />
    <div class="main">
      <search-flight />
      <bottom-search />
    </div>
    <login-modal />
    <sing-up-modal />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header/Header.vue';
import SearchFlight from '../components/search/SearchFlight.vue';
import BottomSearch from '../components/counter/BottomSearch.vue';
import LoginModal from '../components/modal/Login.vue';
import SingUpModal from '../components/modal/SingUp.vue';

export default {
  name: 'Home',
  components: {
    Header,
    SearchFlight,
    BottomSearch,
    LoginModal,
    SingUpModal,
  },
};
</script>

<style lang="less">
@import url('../../node_modules/bootstrap/dist/css/bootstrap.css');
@import url('../../node_modules/bootstrap-vue/dist/bootstrap-vue.css');
html,
body {
  color: #3a3a32;
}

.btn-success {
  background-color: #7cb900;
  border-width: 0px;

  &:hover {
    background-color: #629300;
  }
}

.modal-body,
.card-body {
  padding: 0px;
}

a {
  font-size: 0.875rem;
}

.border-success {
  border-width: 0px;
  border-top: 2px solid #7cb900;
}

.card-header {
  font-size: 20px;
  line-height: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.card-header > div {
  width: 100%;
}
.card-header > button {
  padding: 0.25rem 0.5rem;
  font-size: 0.765625rem;
  line-height: 1.5;
  border-radius: 0;
  border: 0px;
}
.close-btn {
  display: flex;
  width: unset;
  background-color: #fff;
}

.label-placeholder {
  font-size: 13px;
  margin-bottom: 0.2rem;
}

.remember-me {
  font-size: 14px;
}

.login-btn {
  box-shadow: 0 1px 3px 0 rgba(50, 50, 50, 0.171);
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.253);
  font-weight: 600;
  font-size: 1.3rem;
  width: 100%;
  padding: 0.5rem 1rem;
  line-height: 1.5;
}

.line-1 {
  content: ' ';
  background-image: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 80%, 0.7) 25%,
    hsla(0, 0%, 80%, 0.7) 75%,
    hsla(0, 0%, 100%, 0)
  );
  height: 1px;
  width: 100%;
}

.or {
  font-size: 13px;
}

.w-fb {
  max-width: 215px;
  color: #fff;
  background-color: #3b5998;
  position: relative;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.274);
  align-items: center;
  padding: 0px !important;

  div:nth-child(1) {
    padding: 2px 3px;
    border-right: 1px solid rgba(0, 0, 0, 0.274);
  }

  div:nth-child(2) {
    font-size: 1.09375rem;
    line-height: 1.5;
    padding: 0px 4px;
  }
}

@media (max-width: 767px) {
  .header-fluid.container-fluid {
    padding-right: 15px !important;
    padding-left: 15px !important;
  }
}
</style>
