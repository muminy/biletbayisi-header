<template>
  <div class="fly-count-container">
    <div class="fly-line">
      <div class="counter d-flex container-fluid">
        <div class="text-center">
          <h1 class="people-count">
            {{ Math.floor(peopleCount).toLocaleString() }}
          </h1>
          <p class="text-uppercase small">2020 MUTLU ZİYARETÇİ SAYISI</p>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomSearch',
  data() {
    return {
      peopleCount: 0,
      totalCount: 93000323,
      interval: null,
    };
  },
  mounted() {
    this.interval = setInterval(this.id, 20);
  },
  methods: {
    id() {
      if (this.peopleCount < this.totalCount)
        this.peopleCount += this.totalCount / 120;
      else clearInterval(this.interval);
    },
  },
};
</script>

<style lang="less" scoped>
.bottom-s-area {
  background: url(https://biletbayisi.com/images/happy-people.jpg?076532f9616678ae3fd6337d7cfb9503)
    50% no-repeat;
  background-size: cover;
  height: 236px;
  position: relative;
}
.line {
  position: absolute;
  bottom: 0;
  background: url(https://biletbayisi.com/images/flyline3.png) 50% no-repeat;
  width: 100%;
  height: 207px;
}

.people-count {
  animation: font 4s;
  font-size: 60px;
  font-weight: 700;
}
@keyframes font {
  from {
    font-size: 10px;
  }
  to {
    font-size: 60px;
  }
}
.fly-count-container {
  background-size: cover;
  background-image: url(https://biletbayisi.com/images/happy-people.jpg?076532f9616678ae3fd6337d7cfb9503);
  background-position: 50%;
}
.fly-line {
  position: relative;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: 50%;
  height: 15.7rem;
}
.counter {
  justify-content: center;
  font-weight: 700;
  color: #fff;
}
#target {
  height: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}
.counter div {
  height: auto;
}
.line {
  position: absolute;
  bottom: 0;
  background: url(https://biletbayisi.com/images/flyline3.png) 50% no-repeat;
  width: 100%;
  height: 207px;
}
</style>
