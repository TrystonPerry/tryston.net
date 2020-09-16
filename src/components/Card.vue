<template>
  <section class="w-full max-w-6xl mx-auto mb-12">
    <div class="bg-white rounded shadow-2xl p-2 m-2 md:mx-8">
      <div class="flex justify-center w-full">
        <h2 class="inline-block px-6 text-xl uppercase font-bold my-3">
          {{ title }}
          <div
            class="ml-6 w-full"
            style="border-bottom:4px solid rgb(179 70 241)"
          ></div>
        </h2>
      </div>

      <div class="p-4 pt-0 md:p-8 md:pt-0 lg:p-12 lg:pt-0">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style></style>
