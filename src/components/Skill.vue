<template>
  <li class="md:w-6/12 lg:w-4/12 p-6 mb-8">
    <i
      :class="`${icon} bg-primary text-white p-4 text-xl rounded-full`"
      aria-hidden="true"
    ></i>
    <h2 class="text-2xl my-2 font-bold">{{ title }}</h2>
    <p>
      {{ skills }}
    </p>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String,
    skills: String
  }
};
</script>

<style></style>
