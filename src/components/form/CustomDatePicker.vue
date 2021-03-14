<template>
  <label
    @focusout="isFocus = false"
    @click="isFocus = true"
    :id="customId"
    class="d-flex align-items-center date-group"
  >
    <div
      :class="isFocus ? 'green' : ''"
      class="form-info d-flex align-items-center"
    >
      <slot />
      <span class="input-label">{{ label }}</span>
    </div>
    <input :id="id" :placeholder="placeholder" />
  </label>
</template>

<script>
export default {
  name: 'CustomDatePicker',
  data: () => {
    return {
      isFocus: false,
    };
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
    id: {
      type: String,
    },
    type: {
      type: String,
    },
    customId: {
      type: String,
    },
  },
};
</script>

<style lang="less">
.green {
  background-color: #7cb900 !important;
}
.ui-state-default,
.ui-widget-content .ui-state-default,
.ui-widget-header .ui-state-default,
.ui-button,
html .ui-button.ui-state-disabled:hover,
html .ui-button.ui-state-disabled:active {
  text-align: center;
}
.ui-state-highlight,
.ui-widget-content .ui-state-highlight,
.ui-widget-header .ui-state-highlight {
  background: #f6f6f6;
  border-color: #c5c5c5;
  font-weight: 700;
  color: #454545;
}
.form-info {
  background: #a1a1a1 no-repeat left 0.5rem center;
  width: 160px;
  height: 46px;
  transition: width 0.3s;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding-left: 6px;
  align-items: center;
  border: 1px solid #a2a2a2;
  flex-wrap: nowrap;
}
.date-group {
  width: 100%;
  cursor: pointer;

  input {
    width: 100%;
    cursor: inherit;
    caret-color: transparent;
    color: #757575;
    padding-left: 15px;
    padding-right: 15px;
    background: #f0f0f0;
    border: 1px solid #a2a2a2;
    height: 46px;

    &:focus {
      outline: none;
    }
  }
}
</style>
