<template>
  <div id="app" class="bg-gray-900 text-gray-200">
    <nav class="w-full h-16 p-4 w-full max-w-6xl m-auto" style="z-index:1">
      <img src="/images/tp.png" class="h-full" />
    </nav>

    <header class="flex w-full max-w-6xl m-auto">
      <div
        class="w-full md:w-6/12 p-4 py-48 text-center md:text-left flex flex-col justify-center"
        style="z-index:1;backdrop-filter: blur(3px);"
      >
        <div>
          <h1 class="text-4xl md:text-6xl leading-10">Tryston Perry</h1>
          <p class="text-xl md:text-4xl md:mt-4 mb-6">Front-End Developer</p>
          <a
            href="mailto:tryston@trystonmperry.com"
            class="bg-gray-800 text-white px-6 py-3 md:px-8 md:py-4 rounded shadow-lg text-lg"
          >Email Me</a>
        </div>
      </div>
      <div class="absolute md:relative left-0 md:w-6/12">
        <Bubbles class style="z-index:0;top:3rem" />
      </div>
    </header>

    <section class="w-full mt-4 p-2 py-10 md:py-20 bg-gray-800 shadow-inner">
      <div
        class="text-white text-2xl md:text-4xl text-center max-w-xl m-auto"
      >From inception to implementation, quality is my focus.</div>
    </section>

    <section class="w-full max-w-6xl m-auto">
      <div class="p-4 py-24 md:px-12">
        <div
          class="relative flex flex-col flex-col-reverse md:flex-row w-full bg-gray-800 rounded m-2 mb-24"
        >
          <div
            class="flex flex-col items-center justify-center relative w-full md:w-4/12 flex-shrink-0 rounded text-center p-6"
          >
            <i class="fas fa-lightbulb text-4xl"></i>
            <h2 class="text-3xl mb-3">Concept</h2>
            <p
              class="text-left"
            >I have strong experience transforming an initial idea into design concepts using Figma and Photoshop.</p>
            <img src="/images/1.png" class="absolute w-24 h-24" style="top:-2rem; left:-2rem;" />
          </div>

          <div class="w-full md:w-8/12">
            <img
              src="https://miro.medium.com/max/3600/1*yYjIiABh6qEP_I0JOEZBLw.png"
              class="rounded-r w-full h-full object-cover"
            />
          </div>

          <img
            src="/images/line.png"
            class="absolute hidden md:block h-48"
            style="bottom:-9rem; left:18rem; z-index:100"
          />
        </div>

        <div class="relative flex w-full flex-col md:flex-row bg-gray-800 rounded m-2 mb-24">
          <div class="w-full">
            <img
              src="https://www.trystonperry.com/public/images/coding-blurred.jpg"
              class="rounded-r w-full h-full object-cover"
            />
          </div>

          <div
            class="flex flex-col items-center justify-center relative w-full md:w-4/12 flex-shrink-0 rounded text-center p-6"
          >
            <i class="fas fa-laptop-code text-4xl"></i>
            <h2 class="text-3xl mb-3">Implement</h2>
            <p
              class="text-left"
            >Next, I code the design and functionality decided upon. I'm always sure to optimize for SEO, accessibility and responsiveness.</p>
            <img src="/images/2.png" class="absolute w-24 h-24" style="top:-2rem; left:-2rem;" />
          </div>

          <img
            src="/images/line2.png"
            class="absolute hidden md:block h-48"
            style="bottom:-9rem; left:24rem; z-index:100"
          />
        </div>

        <div
          class="relative flex flex-col flex-col-reverse md:flex-row w-full bg-gray-800 rounded m-2 mb-12"
        >
          <div
            class="flex flex-col items-center justify-center relative w-full md:w-4/12 flex-shrink-0 rounded text-center p-6"
          >
            <i class="fas fa-vial text-4xl"></i>
            <h2 class="text-3xl mb-3">Test</h2>
            <p class="text-left">
              Testing is an integral part of building quality apps. I've had
              experience using Jest and test-driven development.
            </p>
            <img src="/images/3.png" class="absolute w-24 h-24" style="top:-2rem; left:-2rem;" />
          </div>

          <div class="md:w-8/12">
            <img
              src="https://miro.medium.com/max/1166/1*2sWIKduth_IOUKsRkH3X8Q.png"
              class="rounded-r w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="w-full max-w-6xl m-auto">
      <h2 class="text-6xl">Work Experience</h2>

      <div class="relative w-full h-full" style="max-height:24rem; overflow:none">
        <div class="p-6 bottom-0 w-full">
          <h3 class="text-4xl leading-10">Nanome Inc.</h3>
          <div class="text-xl">Front-End Developer</div>
          <div class="mb-3">2019 - 2020</div>
          <ul class="list-disc pl-6">
            <li>Built new landing page designs in Figma, went through iterations, and implemented them in a Vue.js front-end.</li>
            <li>Improved enterprise sales pipeline by designing new landing pages from scratch https://home.nanome.ai/commercial.</li>
            <li>Optimized content to improve web page load times by up to 32%.</li>
            <li>Collaborated with co-workers in code review and pull requests.</li>
            <li>Stayed SEO and accessibility conscious.</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Bubbles from "./components/Bubbles";

export default {
  name: "App",

  components: {
    Bubbles
  }
};
</script>

<style></style>
