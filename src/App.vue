<template>
  <div class="">
    <nav class="w-full h-16 max-w-6xl p-4 m-auto" style="z-index: 1">
      <img src="/images/tp.png" class="h-full" />
    </nav>

    <div>
      <header class="relative flex w-full max-w-6xl m-auto">
        <div
          class="flex flex-col justify-center w-full p-4 my-48 text-center md:w-6/12 md:pl-12 md:text-left"
          style="z-index: 1"
        >
          <div class="text-primary">
            <h1 class="text-4xl leading-10 md:text-6xl">Tryston Perry</h1>

            <p class="mb-6 text-xl md:text-4xl md:mt-4">Senior Web Developer</p>

            <a
              href="mailto:trystonperry@proton.me"
              target="_blank"
              class="inline-block px-6 py-4 duration-100 transform bg-white rounded text-primary md:px-8 md:py-4 hover:scale-105 hover:text-white hover:bg-primary hover:shadow-lg hover:font-bold"
              style="border: 2px solid #ca6dff"
            >
              Email Me
            </a>
          </div>
        </div>

        <div class="absolute left-0 md:relative md:w-6/12">
          <Bubbles class style="z-index: 0; top: 3rem" />
        </div>
      </header>
    </div>

    <div class="w-full px-4 py-16 pb-64 text-white bg-primary">
      <div class="flex flex-col items-center max-w-6xl mx-auto md:flex-row">
        <img
          src="/images/me.jpg"
          alt="Headshot of Tryston Perry"
          class="w-24 rounded-full md:w-48"
        />

        <div class="p-4 md:px-12">
          <h2 class="font-bold">Hey 👋, I'm Tryston!</h2>

          <p class="mt-3">
            I've been a web developer for 5+ years working on everything from
            landing page designs to building full-stack web apps. I'm
            laser-focused on delivering quality results in fast-paced
            environments.
          </p>

          <div class="text-center md:text-left">
            <a
              href="/resume.pdf"
              target="_blank"
              class="inline-block px-3 py-2 mt-3 text-sm text-white duration-100 transform rounded md:px-4 md:py-2 hover:scale-105 hover:text-primary hover:bg-white hover:shadow-lg hover:font-bold"
              style="border: 2px solid #fff"
            >
              Resume.pdf
            </a>
          </div>
        </div>
      </div>
    </div>

    <Card title="Skills" style="margin-top: -12rem">
      <ul class="flex-wrap justify-center mt-6 text-center md:flex">
        <Skill
          title="Front-End"
          icon="fas fa-desktop"
          skills="HTML, CSS, SCSS, JavaScript, Svelte, React.js, TailwindCSS"
        />

        <Skill
          title="Back-End"
          icon="fas fa-code"
          skills="NodeJS, MongoDB, MySQL"
        />

        <Skill
          title="DevOps"
          icon="fas fa-server"
          skills="Kuternetes, Docker, Git, Bash & SSH"
        />

        <Skill
          title="Design"
          icon="fas fa-pen"
          skills="Adobe Photoshop, Figma"
        />

        <Skill
          title="Other"
          icon="fas fa-cog"
          skills="Agile Development, Unit Testing, Pair Programming"
        />
      </ul>

      <div>
        <h2 class="text-lg font-bold">Extra tech I've worked with...</h2>

        <p class="text-sm">
          I've worked with a lot of stuff...
          <span class="italic">
            a
            <span class="font-bold">LOT</span>
          </span>
          . I'd describe myself as a generalist that uses whatever tool solves
          the problem.
        </p>

        <div class="my-3">
          Shopify, WebGL (GPU data viz), WebRTC (real-time video/audio), Golang,
          QuestDB (timeseries db), Apache Kafka
        </div>
      </div>
    </Card>

    <Card title="Work Experience">
      <div class="mb-8">
        <Carousel
          :items-to-show="1"
          :wrap-around="true"
          :autoplay="3000"
          :transition="500"
          :mouseDrag="false"
        >
          <Slide v-for="(image, index) in carouselImages" :key="index">
            <img :src="image" :alt="`Slide ${index + 1}`" />
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>

        <h3 class="text-4xl leading-10">🐍 Viper Charts</h3>

        <div class="my-4">
          <div class="text-xl font-bold">Founder</div>

          <div>August 2021 - Present</div>

          <a
            href="https://github.com/vipercharts/viper-charts-js"
            target="_blank"
            class="text-blue-600 underline"
          >
            Website
          </a>

          <p class="my-4">
            Viper Charts is an open-source platform / framework for charting and
            comparing crypto-currency asset prices across exchanges and markets.
            It's built entirely from scratch as a solo project intent on
            unifying all data in crypto. The platform is currently in a closed
            beta state.
          </p>

          <div class="pl-3 text-sm">
            <p class="my-2">
              -Wrote functions to convert time and price values to pixel
              locations based on screen dimensions and visible range.
            </p>

            <p class="my-2">
              -Built a custom rendering engine to re-calculate pixel
              instructions whenever the plotted data state changes.
            </p>

            <p class="my-2">
              -Implemented a custom WebWorker message broker to offload CPU
              intensive operations like chart updates to alternative CPU cores.
              Thus, massively improving the responsivity of the UI and
              preventing the hanging of the main thread.
            </p>

            <p class="my-2">
              -Integrated mission critical data aggregation servers written in
              Golang and run in Docker containers for collecting live
              crypto-currency price action statistics.
            </p>

            <p class="my-2">
              -Implemented a custom data granularity algorithm and g-zip
              compression for historical market data and all client-server
              requests to reduce bandwidth usage from ~33MB to ~5.5MB on large
              requests. As it scales, it's projected to save us $100's of
              dollars.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="text-4xl leading-10">Leap</h3>

        <div>
          <div class="text-xl font-bold">Co-Founder & CTO</div>

          <div>February 2021 - June 2021</div>

          <p class="my-4">
            Leap (aka joinleap.co) was a live video podcast recording app
            focused on bringing together podcasters and their audience with
            real-time experiences.
          </p>

          <div class="pl-3 text-sm">
            <p class="my-2">
              -Managed and assigned tasks to our Junior Front-End dev to
              distribute the workload.
            </p>

            <p class="my-2">
              -Built realtime video/audio stream pipeline using WebRTC relay
              servers and ffmpeg recording over RTP.
            </p>

            <p class="my-2">
              -Designed and implemented our 1-Many and Many-Many MySQL Database
              architecture.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="text-4xl leading-10">The Bitcoin Wormhole App</h3>

        <div>
          <div class="text-xl font-bold">Contract</div>

          <div>August 2020 - June 2021</div>

          <a
            href="https://bit.ly/3OrfJWt"
            target="_blank"
            class="text-blue-600 underline"
          >
            Website
          </a>

          <p class="my-4">
            A flutter app focused on providing a fun and interactive way to
            learn about Bitcoin and its ecosystem.
          </p>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="text-4xl leading-10">Nanome Inc.</h3>

        <div>
          <div class="text-xl font-bold">Front-End Developer</div>

          <div>March 2019 - March 2020</div>

          <a
            href="https://nanome.ai"
            target="_blank"
            class="text-blue-600 underline"
          >
            Website
          </a>

          <div class="pl-3 mt-4 text-sm">
            <p class="my-2">
              -Went through design iterations with Senior executives using
              Figma.
            </p>

            <p class="my-2">
              -Implemented designs in SCSS using BEM, mobile-first and
              progressive enhancement principles.
            </p>

            <p class="my-2">
              -Wrote a custom image & gif compression build process into their
              production pipeline to reduce asset file sizes and convert to
              their appropriate resolutions.
            </p>
          </div>
        </div>
      </div>
    </Card>

    <Card title="Testimonials">
      <blockquote class="pb-2">
        "Tryston built an author website for me and I can't recommend him high
        enough! He was so reliable and a very effective communicator through the
        whole process. He was also extremely prompt to have tasks finished when
        he stated they would be done. He was also great creatively when we
        brainstormed about different options. My site is both beautiful and user
        friendly. I could not have found a better person for this project and
        couldn't be happier with the process and results!"
      </blockquote>

      <div>
        <span class="font-bold">Clare Johnson</span>
        (2022) - Author of The First Noel a Tale of Friendship
      </div>

      <a
        href="https://thefirstnoelbook.com"
        target="_blank"
        class="text-blue-500 underline"
      >
        Website
      </a>
    </Card>

    <div class="w-full max-w-6xl px-2 pb-12 mx-auto text-center">
      <div class="my-6">
        <h2 class="text-3xl font-bold">My Projects</h2>

        <p>Here are some of my recent projects</p>
      </div>

      <div class="mb-4 bg-white rounded-lg shadow-2xl md:flex">
        <div class="flex-shrink-0 md:w-6/12">
          <img
            src="/images/doice.jpg"
            class="object-cover w-full h-full rounded-lg"
            alt=""
          />
        </div>

        <div class="flex flex-col p-4 text-left">
          <h3 class="text-2xl">Doice</h3>

          <p class="flex-grow mb-4">
            An open-source self-deployable video chat application in the web
            browser. Share screens, do video chat, and watch YouTube in sync.
            Doice has been used for virtual meetups, tech talks, and groups of
            friends. Currently, you must run your own server, but we are
            building a paid option for less technical users.
          </p>

          <div>
            <a
              href="https://doice.io"
              target="_blank"
              class="inline-block px-3 py-2 text-sm duration-100 transform bg-white rounded text-doice md:px-4 md:py-2 hover:scale-105 hover:text-white hover:bg-doice hover:shadow-lg hover:font-bold"
              style="border: 2px solid #46b5d1"
            >
              Website
            </a>
          </div>
        </div>
      </div>

      <div class="text-center">
        <h3 class="mt-6 mb-2 font-bold">Other Projects</h3>

        <ul>
          <li class="m-2 hover:underline">
            <a href="https://github.com/TrystonPerry/Boarditt-Frontend">
              <b class="pr-2">Boarditt</b>

              <span class="pl-2 border-l-2 border-gray-100">
                A todo app in the cloud.
              </span>
            </a>
          </li>

          <li class="m-2 hover:underline">
            <a href="https://moonmath.xyz">
              <b class="pr-2">Moonmath.xyz</b>

              <span class="pl-2 border-l-2 border-gray-100">
                Cryptocurrency Marketcap Calculator.
              </span>
            </a>
          </li>

          <li class="m-2 hover:underline">
            <a href="https://youtu.be/Rsst11LyNuY">
              <b class="pr-2">Faunalens</b>

              <span class="pl-2 border-l-2 border-gray-100">
                San Diego Zoohackathon Project.
              </span>
            </a>
          </li>

          <li class="m-2 hover:underline">
            <a href="https://www.trystonperry.com/ceaser-cipher/">
              <b class="pr-2">Ceaser Cipher Converter</b>
            </a>
          </li>

          <li class="m-2 hover:underline">
            <a href="https://github.com/TrystonPerry/youtube-sync">
              <b class="pr-2">Youtube-Sync</b>

              <span class="pl-2 border-l-2 border-gray-100">
                Watch YouTube videos in sync.
              </span>
            </a>
          </li>

          <li class="m-2 hover:underline">
            <a href="https://trystonperry.com/bubble.js/">
              <b class="pr-2">Bubble.js</b>

              <span class="pl-2 border-l-2 border-gray-100">
                Open-source floating bubbles library.
              </span>
            </a>
          </li>

          <li class="m-2 hover:underline">
            <a href="https://github.com/TrystonPerry/Youtube-Channel-API">
              <b class="pr-2">Youtube-Channel-API</b>

              <span class="pl-2 border-l-2 border-gray-100">
                API to access a YouTube channels' latest videos.
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="py-12 mt-12 text-white bg-primary">
      <div class="w-full max-w-6xl mx-auto">
        <div
          class="flex flex-col items-center px-12 py-8 mx-4 bg-gray-800 rounded-full sm:flex-row"
          style="margin-top: -6rem"
        >
          <h4 class="flex-grow mb-3 text-3xl font-bold sm:mb-0">Contact Me</h4>

          <a
            href="mailto:trystonperry@proton.me"
            target="_blank"
            class="inline-block px-6 py-4 duration-100 transform bg-white rounded-full text-primary md:px-8 md:py-4 hover:scale-105 hover:text-white hover:bg-primary hover:shadow-lg hover:font-bold"
          >
            Email Me
          </a>
        </div>
      </div>

      <footer class="flex flex-col items-center w-full pt-12 text-white">
        <i class="mb-8 text-xl"> "Work to create, play to learn" </i>

        <img src="/images/tp-white.png" class="h-24 mb-8" />

        <div class="flex mb-8">
          <a
            href="https://twitter.com/trystonperry"
            target="_blank"
            class="flex items-center justify-center w-12 h-12 mr-2 text-white duration-100 transform bg-white rounded-full hover:scale-105 hover:text-white hover:bg-white hover:shadow-lg hover:font-bold"
          >
            <i class="fab fa-twitter text-primary"></i>
          </a>

          <a
            href="https://github.com/trystonperry"
            target="_blank"
            class="flex items-center justify-center w-12 h-12 mr-2 text-white duration-100 transform bg-white rounded-full hover:scale-105 hover:text-white hover:bg-white hover:shadow-lg hover:font-bold"
          >
            <i class="fab fa-github text-primary"></i>
          </a>

          <a
            href="https://medium.com/@trystonperry"
            target="_blank"
            class="flex items-center justify-center w-12 h-12 mr-2 text-white duration-100 transform bg-white rounded-full hover:scale-105 hover:text-white hover:bg-white hover:shadow-lg hover:font-bold"
          >
            <i class="fab fa-medium text-primary"></i>
          </a>

          <a
            href="https://dev.to/trystonperry"
            target="_blank"
            class="flex items-center justify-center w-12 h-12 mr-2 text-white duration-100 transform bg-white rounded-full hover:scale-105 hover:text-white hover:bg-white hover:shadow-lg hover:font-bold"
          >
            <i class="fab fa-dev text-primary"></i>
          </a>

          <a
            href="mailto:trystonperry@proton.me"
            target="_blank"
            class="flex items-center justify-center w-12 h-12 text-white duration-100 transform bg-white rounded-full hover:scale-105 hover:text-white hover:bg-white hover:shadow-lg hover:font-bold"
          >
            <i class="fas fa-envelope text-primary"></i>
          </a>
        </div>

        <p>© 2022 Tryston Perry, all rights reserved</p>
      </footer>
    </div>
  </div>
</template>

<script>
import Bubbles from "./components/Bubbles.vue";
import Card from "./components/Card.vue";
import Skill from "./components/Skill.vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "App",

  components: {
    Bubbles,
    Card,
    Skill,
    Carousel,
    Slide,
    Navigation,
  },

  data() {
    return {
      carouselImages: [
        "https://pbs.twimg.com/media/FQUQDTuVsAM7jjp?format=jpg&name=small",
        "https://pbs.twimg.com/media/FQy9DzxUUAAZ-SB?format=jpg&name=small",
        "https://pbs.twimg.com/media/FP6eN5BakAA0lVb?format=jpg&name=small",
        "https://pbs.twimg.com/media/FPwqK4lVUAYm5Bv?format=jpg&name=small",
        "https://pbs.twimg.com/media/FPmv03iVIAwRnJV?format=png&name=small",
      ],
    };
  },
};
</script>

<style>
.email-me {
  color: rgb(202, 109, 255);
  background: #fff;
  box-shadow: 0px 0px 10px 5px rgb(202, 109, 255);
}

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

.carousel__prev,
.carousel__next {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.carousel__prev {
  left: 10px;
}

.carousel__next {
  right: 10px;
}
</style>
