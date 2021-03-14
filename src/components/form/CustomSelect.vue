<template>
  <div>
    <label :for="label">
      <div class="header">
        {{ label }}
      </div>
      <select @change="handleSelect(value)" v-model="value" :id="label">
        <option
          v-bind:value="item"
          v-bind:key="index"
          v-for="(item, index) in options"
          >{{ item }}</option
        >
      </select>
    </label>
    <div class="age-info">{{ ageRange }}</div>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  data: () => {
    return {
      value: '0',
      minSelect: 0,
      options: [0, 1, 2, 3, 4, 5, 6, 7],
    };
  },
  mounted() {
    this.value = this.selectItem;
  },
  props: {
    label: {
      type: String,
    },
    selectItem: {
      type: Number,
      default: 0,
    },
    ageRange: {
      type: String,
    },
    min: {
      type: Number,
      default: 0,
    },
    handleSelect: {
      type: Function,
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  background: #a1a1a1;
  font-size: 12px;
  color: #fff;
  height: 21px;
  line-height: 21px;
  text-align: center;
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
}

label {
  width: 100%;
  background: #f0f0f0;
  border: 1px solid #a2a2a2;
  border-radius: 3px;
  select {
    width: 100%;
    width: 100%;
    border: 0;
    color: #757575;
    font-size: 0.95rem;
    font-weight: 400;
    -moz-text-align-last: center;
    text-align-last: center;
    cursor: pointer;
  }
}

.age-info {
  font-size: 12px;
  text-align: center;
}
</style>
