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
          <div>
            <h1 class="text-4xl md:text-6xl leading-10 text-white">
              Tryston Perry
            </h1>
            <p class="text-xl md:text-4xl md:mt-4 mb-6 text-white">
              Web Developer
            </p>
            <a
              href="mailto:tryston@trystonmperry.com"
              class="email-me inline-block px-6 py-3 md:px-8 md:py-4 rounded text-lg duration-100 transform hover:scale-105"
              >Email Me</a
            >
          </div>
        </div>
        <div class="absolute md:relative left-0 md:w-6/12">
          <Bubbles class style="z-index:0;top:3rem" />
        </div>
      </header>
    </div>

    <Card title="About Me">
      <div class="flex flex-col md:flex-row">
        <img
          src="/images/me.jpg"
          alt="Headshot of Tryston Perry"
          class="w-48 rounded"
        />
        <div class="px-12">
          <p class="mt-3">
            I'm Tryston, a web developer with a focus on design. I've been
            designing things since I was 13, and have always had a passion for
            it. Now it's my job.
          </p>
          <a
            href="resume.trystonperry.com"
            target="_blank"
            class="inline-block text-primary px-3 py-2 md:px-4 md:py-2 mt-3 rounded text-sm duration-100 transform hover:scale-105 hover:text-white hover:bg-primary hover:shadow-lg"
            style="border:2px solid #ca6dff"
            >View My Resume</a
          >
        </div>
      </div>
    </Card>

    <Card title="Work Experience">
      <div class="mb-8">
        <h3 class="text-4xl leading-10">Nanome Inc.</h3>
        <div>
          <div class="text-xl">Front-End Developer</div>
          <div>2019 - 2020</div>
          <a
            href="https://nanome.ai"
            target="_blank"
            class="block mb-3 text-blue-600 underline"
            >Website</a
          >
          <p>
            Starting as an internship, this transitioned into a part-time role
            as a Front-End developer. This consisted of designing new landing
            pages, marketing material and web app components. I built an
            entireley new sales pipeline for enterprise customers to purchase
            their software. I also improved their web page load times by an
            average of 32%.
          </p>
        </div>
      </div>

      <div class="w-full h-full">
        <h3 class="text-4xl leading-10">2020 Fashion</h3>
        <div>
          <div class="text-xl">Front-End Developer</div>
          <div>2020</div>
          <a
            href="https://2020.fashion"
            target="_blank"
            class="block mb-3 text-blue-300 underline"
            >Website</a
          >
          <ul class="list-disc pl-6">
            <li>Rapidly itterated on vanilla HTML/CSS landing page.</li>
            <li>Implemented Email capturer using Airtable back-end.</li>
          </ul>
        </div>
      </div>
    </Card>

    <Card title="Skills">
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

    <Card title="Projects">
      <Project></Project>
    </Card>

    <section class="w-full h-full max-w-6xl m-auto mt-10 px-4">
      <h2 class="text-4xl md:text-6xl mb-6">Projects</h2>

      <div class="md:flex flex-wrap">
        <div
          class="md:flex md:w-6/12 rounded p-3 shadow duration-100 transform hover:scale-105 hover:shadow-lg"
        >
          <a
            href="https://demo.doice.io"
            class="flex flex-col rounded bg-gray-800"
          >
            <img src="https://i.imgur.com/vl20Fm3.png" class="rounded-t" />
            <div class="p-4">
              <h3 class="text-2xl leading-7 font-bold">Doice</h3>
              <div class="text-lg mb-2">June 2020 - Present</div>
              <div>
                Doice is an open-source self-deployable platform for hanging
                with friends. Talk over voice chat, share your screen, watch
                YouTube together. It's built with customization in mind, so you
                can configure it to your use case.
              </div>
            </div>
          </a>
        </div>

        <div
          class="md:flex md:w-6/12 rounded p-3 shadow duration-100 transform hover:scale-105 hover:shadow-lg"
        >
          <a
            href="https://pstv.herokuapp.com"
            class="flex flex-col rounded bg-gray-800"
          >
            <img
              src="http://localhost:8080/images/implementation.jpg"
              class="rounded-t"
            />
            <div class="p-4">
              <h3 class="text-2xl leading-7 font-bold">PlaySpace</h3>
              <div class="text-lg mb-2">April 2019 - April 2020</div>
              <div>
                PlaySpace is a video streaming social network where users can
                stream games and hang out with viewers.
              </div>
            </div>
          </a>
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
    </section>

    <img
      src="/images/bg-1.svg"
      class="absolute top-0 left-0"
      style="z-index:-1"
    />
  </div>
</template>

<script>
import Bubbles from "./components/Bubbles";
import Card from "./components/Card";
import Project from "./components/Project";
import Skill from "./components/Skill";

export default {
  name: "App",

  components: {
    Bubbles,
    Card,
    Project,
    Skill
  }
};
</script>

<style>
.email-me {
  color: rgb(202, 109, 255);
  background: #fff;
  box-shadow: 0px 0px 10px 5px rgb(202, 109, 255);
}
</style>
