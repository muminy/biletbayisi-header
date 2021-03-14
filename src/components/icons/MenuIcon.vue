<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="size"
    viewBox="0 0 24 24"
    :width="size"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z" />
  </svg>
</template>

<script>
export default {
  name: 'MenuIcon',
  props: {
    size: {
      type: Number,
      default: () => {
        return 18;
      },
    },
  },
};
</script>

<style></style>
