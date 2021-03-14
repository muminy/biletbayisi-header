<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="size"
    viewBox="0 0 24 24"
    :width="size"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      fill="#fff"
      d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
    />
  </svg>
</template>

<script>
export default {
  name: 'FlightIcon',
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
