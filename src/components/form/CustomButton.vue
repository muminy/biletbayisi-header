<template>
  <button @click="handleSearch" class="custom-btn">
    <span>UÇUŞ ARA</span>
    <flight-icon v-if="!isActive" :size="24" />
    <b-spinner class="mr-0 ml-0" small v-if="isActive" />
  </button>
</template>

<script>
import store from '../../store';
import FlightIcon from '../icons/FlightIcon.vue';
export default {
  components: {FlightIcon},
  name: 'CustomButton',
  data: function() {
    return {isActive: false};
  },
  methods: {
    handleSearch: function(event) {
      event.preventDefault();

      const type = store.state.form.type;

      this.isActive = true;
      const fromDate = this.formatDate(store.state.selectedDate);
      const toDate = this.formatDate(store.state.toDate);
      let bodyUrl = 'https://biletbayisi.com/ucak-bileti/ucuslar?';
      bodyUrl += `origin=${store.state.form.from.code}`;
      bodyUrl += `&destination=${store.state.form.to.code}`;
      bodyUrl += `&departure_date=${fromDate}`;
      bodyUrl += type !== 'tek' ? `&return_date=${toDate}` : '';
      bodyUrl +=
        store.state.form.yetiskin > 0
          ? `&passengers%5BADT%5D=${store.state.form.yetiskin}`
          : '';
      bodyUrl +=
        store.state.form.cocuk > 0
          ? `&passengers%5BCHD%5D=${store.state.form.cocuk}`
          : '';
      bodyUrl +=
        store.state.form.bebek > 0
          ? `&passengers%5BINF%5D=${store.state.form.bebek}`
          : '';
      bodyUrl +=
        store.state.form.ogrenci > 0
          ? `passengers%5BSTU%5D=${store.state.form.ogrenci}`
          : '';

      console.log(bodyUrl);
    },
    formatDate: function(stringDate) {
      var date = new Date(stringDate),
        month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    },
  },
};
</script>

<style lang="less" scoped>
.custom-btn {
  width: 100%;
  border: 0;
  background-color: #8acc04;
  border: 0;
  outline: 0;
  display: flex;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.26);
  padding: 6px 12px;
  align-items: center;
  span {
    display: block;
    margin-left: auto;
    margin-right: auto;
    line-height: 40px;
    font-size: 18px;
    color: #fff;
    font-weight: 700;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.267);
  }
}
</style>
