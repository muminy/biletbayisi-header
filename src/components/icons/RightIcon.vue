<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="size"
    viewBox="0 0 24 24"
    :width="size"
    class="d-inline d-lg-none d-md-none"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="#585d5f" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
</template>

<script>
export default {
  name: 'RightIcon',
  props: {
    size: {
      type: Number,
      default: () => {
        return 24;
      },
    },
  },
};
</script>

<style></style>
