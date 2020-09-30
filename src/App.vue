<template>
  <div class="">
    <nav class="w-full h-16 p-4 w-full max-w-6xl m-auto" style="z-index:1">
      <img src="/images/tp.png" class="h-full" />
    </nav>

    <div>
      <header class="relative flex w-full max-w-6xl m-auto">
        <div
          class="w-full md:w-6/12 p-4 md:pl-12 my-48 text-center md:text-left flex flex-col justify-center"
          style="z-index:1;"
        >
          <div class="text-primary">
            <h1 class="text-4xl md:text-6xl leading-10">
              Tryston Perry
            </h1>
            <p class="text-xl md:text-4xl md:mt-4 mb-6">
              Web Developer
            </p>
            <a
              href="mailto:me@tryston.net"
              target="_blank"
              class="inline-block bg-white text-primary px-6 py-4 md:px-8 md:py-4 rounded duration-100 transform hover:scale-105 hover:text-white hover:bg-primary hover:shadow-lg hover:font-bold"
              style="border:2px solid #CA6DFF"
              >Email Me</a
            >
          </div>
        </div>
        <div class="absolute md:relative left-0 md:w-6/12">
          <Bubbles class style="z-index:0;top:3rem" />
        </div>
      </header>
    </div>

    <div class="w-full bg-primary text-white px-4 py-16 pb-64">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <img
          src="/images/me.jpg"
          alt="Headshot of Tryston Perry"
          class="w-24 md:w-48 rounded-full"
        />
        <div class="p-4 md:px-12">
          <h2 class="font-bold">Hey 👋, I'm Tryston!</h2>
          <p class="mt-3">
            I've been a web developer for 3 years working on everything from
            landing page designs to building full-stack web apps. I'm
            laser-focused on delivering quality results in fast-paced
            environments.
          </p>
          <div class="text-center md:text-left">
            <a
              href="http://resume.trystonperry.com"
              target="_blank"
              class="inline-block text-white px-3 py-2 md:px-4 md:py-2 mt-3 rounded text-sm duration-100 transform hover:scale-105 hover:text-primary hover:bg-white hover:shadow-lg hover:font-bold"
              style="border:2px solid #fff"
              >Resume.pdf</a
            >
          </div>
        </div>
      </div>
    </div>

    <Card title="Skills" style="margin-top:-12rem">
      <ul class="md:flex flex-wrap justify-center mt-6 text-center">
        <Skill
          title="Front-End"
          icon="fas fa-desktop"
          skills="HTML, CSS, SCSS, JavaScript, React, Vue, Bootstrap 4, TailwindCSS"
        />
        <Skill
          title="Back-End"
          icon="fas fa-code"
          skills="Node.js, Express.js, Socket.io, MongoDB, MySQL"
        />
        <Skill
          title="DevOps"
          icon="fas fa-server"
          skills="AWS, Digital Ocean, PM2, CI/CD, Git, Bash & SSH"
        />
        <Skill
          title="Design"
          icon="fas fa-pen"
          skills="Adobe Photoshop, Adobe Illustrator, Figma"
        />
        <Skill
          title="Other"
          icon="fas fa-cog"
          skills="Agile Development, Unit Testing, Pair Programming, WebRTC"
        />
      </ul>
    </Card>

    <Card title="Work Experience">
      <div class="mb-8">
        <h3 class="text-4xl leading-10">Nanome Inc.</h3>
        <div>
          <div class="text-xl">Front-End Developer</div>
          <div>2019 - 2020</div>
          <div class="inline-block">
            <a
              href="https://nanome.ai"
              target="_blank"
              class="block mb-3 text-blue-600 underline"
              >Website</a
            >
          </div>
          <p>
            Starting as an internship, this transitioned into a part-time role
            as a Front-End developer. This consisted of designing new landing
            pages, marketing material and web app components. I built an
            entireley new sales pipeline for enterprise customers to purchase
            their software. I also improved their web page load times by an
            average of 32% by compressing and resizing images and videos to
            their appropriate sizes.
          </p>
        </div>
      </div>

      <div class="w-full h-full">
        <h3 class="text-4xl leading-10">2020 Fashion</h3>
        <div>
          <div class="text-xl">Front-End Developer</div>
          <div>2020</div>
          <div class="inline-block">
            <a
              href="https://2020.fashion"
              target="_blank"
              class="block mb-3 text-blue-600 underline"
              >Website</a
            >
          </div>
          <p>
            A contract to build a landing page for the 2020 Fashion clothing
            brand to collect emails and announce their product launch.
          </p>
        </div>
      </div>
    </Card>

    <div class="w-full max-w-6xl mx-auto text-center px-2 pb-12">
      <div class="my-6">
        <h2 class="text-3xl font-bold">My Projects</h2>
        <p>Here are some of my recent projects</p>
      </div>

      <div class="md:flex bg-white rounded-lg shadow-2xl mb-4">
        <div class="md:w-6/12 flex-shrink-0">
          <img
            src="/images/doice.jpg"
            class="w-full h-full object-cover rounded-lg"
            alt=""
          />
        </div>
        <div class="flex flex-col p-4 text-left">
          <h3 class="text-2xl">Doice</h3>
          <p class="flex-grow mb-4">
            An open source and self-deployable video chat app built using
            JavaScript. Share screens, do video chat, or watch YouTube in sync.
            Doice works entirely from the web browser using WebRTC.
          </p>
          <div>
            <a
              href="https://doice.io"
              target="_blank"
              class="inline-block bg-white text-doice px-3 py-2 md:px-4 md:py-2 text-sm rounded duration-100 transform hover:scale-105 hover:text-white hover:bg-doice hover:shadow-lg hover:font-bold"
              style="border:2px solid #46B5D1"
            >
              Website
            </a>
          </div>
        </div>
      </div>
      <div class="md:flex bg-white rounded-lg shadow-2xl">
        <div class="md:w-6/12 flex-shrink-0">
          <img
            src="/images/playspace.jpg"
            class="w-full h-full object-cover rounded-lg"
            alt=""
          />
        </div>
        <div class="flex flex-col p-4 text-left">
          <h3 class="text-2xl">PlaySpace</h3>
          <p class="flex-grow mb-4">
            A video streaming social network in the web browser. Inspired by
            Twitch, but instead of channels for a single user you have
            communities where multiple users can stream in a single room to an
            audience. The website is no longer up because the project was
            abandoned and the idea transitioned into Doice.
          </p>
          <div>
            <a
              href="https://github.com/TrystonPerry/Playspace-Frontend"
              target="_blank"
              class="inline-block bg-white text-playspace px-3 py-2 md:px-4 md:py-2 text-sm rounded duration-100 transform hover:scale-105 hover:text-white hover:bg-playspace hover:shadow-lg hover:font-bold"
              style="border:2px solid #009DEE"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div class="text-center">
        <h3 class="font-bold mt-6 mb-2">Other Projects</h3>
        <ul>
          <li class="hover:underline m-2">
            <a href="https://github.com/TrystonPerry/Boarditt-Frontend">
              <b class="pr-2">Boarditt</b>
              <span class="border-l-2 border-gray-100 pl-2"
                >A todo app in the cloud.</span
              >
            </a>
          </li>
          <li class="hover:underline m-2">
            <a href="https://moonmath.xyz">
              <b class="pr-2">Moonmath.xyz</b>
              <span class="border-l-2 border-gray-100 pl-2"
                >Cryptocurrency Marketcap Calculator.</span
              >
            </a>
          </li>
          <li class="hover:underline m-2">
            <a href="https://youtu.be/Rsst11LyNuY">
              <b class="pr-2">Faunalens</b>
              <span class="border-l-2 border-gray-100 pl-2"
                >San Diego Zoohackathon Project.</span
              >
            </a>
          </li>
          <li class="hover:underline m-2">
            <a href="https://www.trystonperry.com/ceaser-cipher/">
              <b class="pr-2">Ceaser Cipher Converter</b>
            </a>
          </li>
          <li class="hover:underline m-2">
            <a href="https://github.com/TrystonPerry/youtube-sync">
              <b class="pr-2">Youtube-Sync</b>
              <span class="border-l-2 border-gray-100 pl-2"
                >Watch YouTube videos in sync.</span
              >
            </a>
          </li>
          <li class="hover:underline m-2">
            <a href="https://trystonperry.com/bubble.js/">
              <b class="pr-2">Bubble.js</b>
              <span class="border-l-2 border-gray-100 pl-2"
                >Open-source floating bubbles library.</span
              >
            </a>
          </li>
          <li class="hover:underline m-2">
            <a href="https://github.com/TrystonPerry/Youtube-Channel-API">
              <b class="pr-2">Youtube-Channel-API</b>
              <span class="border-l-2 border-gray-100 pl-2"
                >API to access a YouTube channels' latest videos.</span
              >
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-primary text-white py-12 mt-12">
      <div class="w-full max-w-6xl mx-auto">
        <div
          class="bg-gray-800 flex flex-col sm:flex-row py-8 px-12 mx-4 rounded-full items-center"
          style="margin-top:-6rem"
        >
          <h4 class="font-bold text-3xl mb-3 sm:mb-0 flex-grow">Contact Me</h4>
          <a
            href="mailto:me@tryston.net"
            target="_blank"
            class="inline-block bg-white text-primary px-6 py-4 md:px-8 md:py-4 rounded-full duration-100 transform hover:scale-105 hover:text-white hover:bg-primary hover:shadow-lg hover:font-bold"
            >Email Me</a
          >
        </div>
      </div>
      <footer class="flex flex-col items-center w-full pt-12 text-white">
        <i class="text-xl mb-8">
          "Work to create, play to learn"
        </i>
        <div class="flex mb-8">
          <a
            href="https://twitter.com/trystonperry"
            target="_blank"
            class="flex items-center justify-center bg-white text-white  h-12 w-12 rounded-full duration-100 transform hover:scale-105 hover:text-white hover:bg-white hover:shadow-lg hover:font-bold mr-2"
          >
            <i class="fab fa-twitter text-primary"></i>
          </a>
          <a
            href="https://github.com/trystonperry"
            target="_blank"
            class="flex items-center justify-center bg-white text-white  h-12 w-12 rounded-full duration-100 transform hover:scale-105 hover:text-white hover:bg-white hover:shadow-lg hover:font-bold mr-2"
          >
            <i class="fab fa-github text-primary"></i>
          </a>
          <a
            href="mailto:me@tryston.net"
            target="_blank"
            class="flex items-center justify-center bg-white text-white  h-12 w-12 rounded-full duration-100 transform hover:scale-105 hover:text-white hover:bg-white hover:shadow-lg hover:font-bold"
          >
            <i class="fas fa-envelope text-primary"></i>
          </a>
        </div>

        <p>© 2020 Tryston Perry, all rights reserved</p>
      </footer>
    </div>
  </div>
</template>

<script>
import Bubbles from "./components/Bubbles";
import Card from "./components/Card";
import Skill from "./components/Skill";

export default {
  name: "App",

  components: {
    Bubbles,
    Card,
    Skill,
  },
};
</script>

<style>
.email-me {
  color: rgb(202, 109, 255);
  background: #fff;
  box-shadow: 0px 0px 10px 5px rgb(202, 109, 255);
}
</style>
