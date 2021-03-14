<template>
  <div class="search-area">
    <b-container>
      <div class="search">
        <div class="search-content-texts ">
          <h2 class="header-2 d-lg-block d-md-none">
            Türkiye’nin en ucuz uçak bileti sitesi!
          </h2>
          <p class="d-none d-lg-block ">
            "2020 Yılında 2.2 Milyon Kişi Bizimle Uçtu"
          </p>
        </div>
        <search-form />
      </div>
    </b-container>
  </div>
</template>

<script>
import SearchForm from './SearchForm.vue';
export default {
  components: {SearchForm},
  name: 'SearchFlight',
};
</script>

<style lang="less">
.search-area {
  position: relative;
  padding-top: 3rem;
  padding-bottom: 1rem;
  min-height: 465px;
  background-image: url(https://biletbayisi.com/storage/pages/homepage.jpg);
  background-size: cover;
  background-position: 50%;
}
.search {
  padding-top: 10px;
}
.search-content-texts {
  color: #ffffff;

  .header-2 {
    font-size: 1.8rem;
    font-weight: 700;
  }

  p {
    color: #fff;
    font-size: 1.3rem;
    font-weight: 300;
    margin-top: 20px;
  }
}

@media (max-width: 991px) {
  .search-form {
    top: 10px;
  }
  .search-area {
    background-image: url(https://biletbayisi.com/images/header-bg-min.jpg?5ec15498a141b18ca1096525ca54eff7);
  }
}
@media (max-width: 767px) {
  .search-form {
    top: 98px;
  }
  .header-2 {
    display: inline-block;
    width: 100%;
    font-size: 16px !important;
    font-weight: 700;
    margin: 0 auto 0.5rem;
    text-align: center;
    color: #5d5d5d;
    padding-top: 38px;
  }
  .search-area {
    height: calc(100vh - 50px);
    min-height: 545px;
    padding-top: 10px;
    background-image: url(https://biletbayisi.com/images/header-bg-min.jpg?5ec15498a141b18ca1096525ca54eff7);
  }
}
</style>
