<template>
  <button class="custom-btn">
    <span>UÇUŞ ARA</span>
    <flight-icon :size="24" />
  </button>
</template>

<script>
import FlightIcon from '../icons/FlightIcon.vue';
export default {
  components: {FlightIcon},
  name: 'CustomButton',
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
