<template>
  <div>
    <label
      @focusout="isFocus = false"
      @click="focus"
      class="d-flex align-items-center input-group mb-3"
    >
      <div
        :class="isFocus ? 'allow' : ''"
        class="form-info d-flex align-items-center"
      >
        <slot />
        <span v-if="!isFocus" class="input-label">{{ label }}</span>
      </div>
      <input
        v-debounce:300ms="keyup"
        v-model="value"
        :id="customId"
        autocomplete="off"
        :placeholder="isFocus ? 'Şehir yada havalimanı giriniz.' : placeholder"
      />
    </label>
    <ul v-if="airlines.data.length > 0" class="list-airline">
      <li
        v-bind:key="index"
        v-on:click="handleSelect(index)"
        v-for="(item, index) in airlines.data"
      >
        <label class="d-flex align-items-center" :for="nextId">
          <div class="code">{{ item.city_code }}</div>
          <div class="fulname">
            {{ item.city_name }}, {{ item.name }} ({{ item.city_code }})
          </div>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../../store';
import axios from 'axios';
export default {
  name: 'CustomInput',
  data: () => {
    return {
      value: '',
      isFocus: false,
      airlines: {data: []},
      selectedValue: {},
    };
  },
  methods: {
    keyup: async function() {
      const allAirLines = await axios.get(
        `https://biletbayisi.com/api/flight-ticket/autocomplete?term=${this.value}`,
      );
      const allData = allAirLines.data;
      this.airlines = allData;
    },
    handleSelect: function(selectedValue) {
      const currentData = this.airlines.data[selectedValue];
      this.value =
        currentData.city_name +
        ', ' +
        currentData.name +
        ' (' +
        currentData.city_code +
        ')';
      if (this.label === 'Nereden') {
        store.commit('setForm', {...store.state.form, from: currentData});
      } else {
        store.commit('setForm', {...store.state.form, to: currentData});
      }
      this.selectedValue = currentData;
      this.airlines = {data: []};
      document.getElementById(this.nextId).focus();
    },
    focus: function() {
      this.isFocus = true;
      this.value = '';
    },
  },
  mounted() {
    this.$nextTick(() => {
      const nextElement = document.getElementById(this.customId);
      if (nextElement) {
        nextElement.addEventListener('focus', () => {
          this.isFocus = true;
        });
      }
    });
  },
  props: {
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    nextId: {
      type: String,
    },
    customId: {
      type: String,
      default: '',
    },
    setForm: {
      type: Function,
    },
  },
};
</script>

<style lang="less">
.form-info {
  background: #a1a1a1 no-repeat left 0.5rem center;
  max-width: 121px;
  height: 46px;
  transition: width 0.3s;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding-left: 7px;
  font-size: 0.875rem;
  align-items: center;
  border: 1px solid #a2a2a2;
  .input-label {
    color: #ffffff;
    font-weight: 600;
    padding-left: 4px;
  }
}

.list-airline {
  position: absolute;
  left: 0;
  top: 46px;
  width: calc(100% - 30px);
  margin: 0px 15px;
  margin-top: auto;
  background-color: #fff;
  border-radius: 3px;
  z-index: 1030;
  box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.089),
    0 14px 14px 0 rgba(0, 0, 0, 0.048);
  border: 1px solid #c5c5c5;
  list-style-type: none;
  padding: 0px;

  .code {
    min-width: 45px;
    font-weight: 700;
    font-size: 0.875rem;
    color: #3a3a32;
  }

  li {
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;

    &:hover {
      background-color: #efefef;
      color: #000;
      border: 0;
    }

    label {
      cursor: pointer;
    }
  }

  .fulname {
    font-size: 0.875rem;
    color: #3a3a32;
  }
}

.input-group {
  width: 100%;
  flex-wrap: nowrap !important;
  border-radius: 5px;
  min-height: 46px;
  max-height: 46px;
  input {
    width: 100%;
    color: #757575;
    padding-left: 15px;
    padding-right: 15px;
    background: #f0f0f0;
    border: 1px solid #a2a2a2;
    height: 46px;
    caret-color: transparent;
    &:focus {
      outline: none;
    }
  }

  .allow {
    width: 32px;

    background-color: #7cb900;
  }
}
</style>
