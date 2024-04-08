<script>
  import axios from "axios";
  import { v4 as uuidv4 } from "uuid";

  import Skills from "./lib/Skills.svelte";
  import Projects from "./lib/Projects.svelte";
  import IconGithub from "./assets/images/IconGithub.svelte";
  import IconLinkedin from "./assets/images/IconLinkedin.svelte";

  import patternCircle from "./assets/images/pattern-circle.svg";
  import patternRigns from "./assets/images/pattern-rings.svg";
  import expressJS from "./assets/images/express-js-icon.svg";
  import imageProfile from "./assets/images/image-profile.jpg";

  import todoApp from "./assets/images/todo-app.png";
  import githubSearchApp from "./assets/images/github-user-search-app.png";
  import commectSectionApp from "./assets/images/interactive-comment-section.png";
  import learningLadingPage from "./assets/images/learning-landing-page.png";
  import restCountriesAPI from "./assets/images/rest-countries-api.png";
  import schoolWebsite from "./assets/images/website-sekolah.png";

  const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
  const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
  const TABLE_NAME = "contact-request";
  const API_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}`;

  let name = "";
  let email = "";
  let message = "";

  async function createRecord() {
    try {
      const response = await axios.post(
        API_URL,
        {
          fields: {
            ID: uuidv4(),
            Email: email,
            Name: name,
            Message: message,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
        },
      );

      console.log("Record created successfully:", response.data);
    } catch (error) {
      console.error("Error creating record:", error);
    }
  }

  function handleSubmit() {
    createRecord();

    name = "";
    email = "";
    message = "";
  }

  function handleAnchorClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace("#", "");
    const anchor = document.getElementById(anchorId);
    window.scrollTo({
      top: anchor.offsetTop,
      behavior: "smooth",
    });
  }
</script>

<main
  class="bg-primary-black font-space-grotesk relative text-white overflow-hidden"
>
  <img class="absolute top-52 -left-48" src={patternRigns} alt="rings" />
  <img
    class="absolute top-[3000px] lg:top-[2048px] -right-96"
    src={patternRigns}
    alt="rings"
  />
  <img class="absolute bottom-56 -left-32" src={patternRigns} alt="rings" />

  <div class="mx-auto max-w-7xl w-11/12 lg:relative pb-32">
    <div class="pb-32">
      <div
        class="pt-4 pb-8 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <p class="text-3xl font-bold z-10">kh-ray</p>
        <div class="flex gap-6 z-10 sm:mr-8">
          <IconGithub />
          <IconLinkedin />
        </div>
      </div>

      <img
        class="w-2/3 mx-auto sm:hidden relative z-10"
        src={imageProfile}
        alt="Profile pic"
      />

      <div class="sm:flex">
        <div class="flex flex-col gap-12 text-center sm:text-left sm:gap-24">
          <h1
            class="md:text-8xl sm:text-7xl text-5xl sm:text-left text-center font-bold mt-16 z-10 tracking-tight"
          >
            Nice to meet you! <br /> I'm
            <span
              class="border-b-4 sm:border-b-8 border-b-primary-green border-solid"
              >Khanza Arrayyan</span
            >.
          </h1>
          <p
            class="md:text-2xl leading-7 md:leading-9 text-xl z-10 sm:w-11/12 lg:w-2/3"
          >
            Based in the Indonesia, I’m a front-end developer passionate about
            building accessible web apps that users love.
          </p>
          <div>
            <a
              href="#contact-me"
              on:click={handleAnchorClick}
              class="text-xl font-bold uppercase hover:text-primary-green text-left"
            >
              <span
                class="border-b-4 border-solid md:text-xl sm:text-lg text-base border-b-primary-green pb-4 tracking-[0.25em]"
                >Contact me</span
              >
            </a>
          </div>
        </div>
        <div class="flex-none w-3/12"></div>
        <img
          class="sm:absolute hidden sm:block top-0 right-0"
          src={imageProfile}
          alt="Profile pic"
        />
        <img
          class="absolute lg:right-80 -right-12 top-96"
          src={patternCircle}
          alt="cirlce"
        />
      </div>
    </div>

    <hr class="border-b border-solid border-white" />

    <div class="pt-32 grid lg:grid-cols-3 gap-y-32 sm:grid-cols-2 grid-cols-1">
      <Skills
        src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
        alt="HTML Logo"
        skill="HTML"
      />
      <Skills
        src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
        alt="CSS Logo"
        skill="CSS"
      />
      <Skills
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
        alt="JS Logo"
        skill="Javascript"
      />
      <Skills
        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
        alt="TS Logo"
        skill="Typescript"
      />
      <Skills
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        skill="React"
      />
      <Skills
        src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
        alt="Node.js Logo"
        skill="Node.js"
      />
      <Skills
        src={expressJS}
        alt="Express Logo"
        skill="Express"
        styles="scale-50"
      />
      <Skills
        src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
        alt="Node.js Logo"
        skill="MongoDB"
      />
      <Skills
        src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
        alt="PostgreSQL Logo"
        skill="PostgreSQL"
      />
      <Skills
        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
        alt="TailwindCSS Logo"
        skill="TailwindCSS"
        styles="scale-75"
      />
    </div>

    <div>
      <div class="flex justify-between mt-48 items-center">
        <h1 class="md:text-8xl sm:text-7xl text-5xl font-bold tracking-tight">
          Projects
        </h1>
        <a
          href="#contact-me"
          on:click={handleAnchorClick}
          class="text-xl font-bold uppercase hover:text-primary-green text-left"
        >
          <span
            class="border-b-4 border-solid md:text-xl sm:text-lg text-base border-b-primary-green pb-4 tracking-[0.25em]"
            >Contact me</span
          >
        </a>
      </div>

      <div
        class="mt-24 grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-48 lg:gap-y-36 mb-48"
      >
        <Projects
          src={todoApp}
          alt="Todo Web App"
          title="Todo Web App"
          github="https://github.com/KH-Ray/todo-app"
          liveSite="https://todo-app-be.fly.dev/"
          languages={["html", "css", "javascript"]}
        />
        <Projects
          src={githubSearchApp}
          alt="Github Search App"
          title="Github Search App"
          github="https://github.com/KH-Ray/github-user-search-app"
          liveSite="https://delightful-frangipane-6eb1ff.netlify.app/"
          languages={["html", "css", "javascript"]}
        />
        <Projects
          src={commectSectionApp}
          alt="Interactive Comments Section"
          title="Interactive Comments Section"
          github="https://github.com/KH-Ray/interactive-comments-section"
          liveSite="https://interative-comments-section-be.fly.dev/"
          languages={["html", "css", "javascript"]}
        />
        <Projects
          src={learningLadingPage}
          alt="Skilled e-learning landing page"
          title="Skilled e-learning landing page"
          github="https://github.com/KH-Ray/skilled-elearning-landing-page"
          liveSite="https://cheery-elf-40ec05.netlify.app/"
          languages={["html", "css"]}
        />
        <Projects
          src={restCountriesAPI}
          alt="REST Countries API"
          title="REST Countries API"
          github="https://github.com/KH-Ray/rest-countries-api-with-color-theme-switcher"
          liveSite="https://startling-cranachan-760ce0.netlify.app/"
          languages={["html", "css", "javascript"]}
        />
        <Projects
          src={schoolWebsite}
          alt="School Website"
          title="School Website"
          github="https://github.com/KH-Ray/WebSekolah"
          liveSite="https://smp-baktiidhata.sch.id/"
          languages={["html", "css", "javascript"]}
        />
      </div>
    </div>
  </div>

  <div id="contact-me" class="bg-dark-gray">
    <div
      class="mx-auto max-w-7xl w-11/12 sm:w-9/12 md:w-11/12 py-24 grid md:grid-cols-2 gap-x-4 gap-y-12 grid-cols-1 items-center"
    >
      <div
        class="flex flex-col gap-6 md:gap-12 md:text-left text-center self-start"
      >
        <h1 class="md:text-8xl sm:text-7xl text-5xl font-bold tracking-tight">
          Contact
        </h1>
        <p
          class="md:text-2xl sm:text-xl text-lg z-10 leading-7 md:leading-9 text-light-gray"
        >
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>

      <form
        on:submit|preventDefault={handleSubmit}
        class="md:justify-self-end justify-self-center flex flex-col gap-4 md:w-10/12 w-full"
      >
        <input
          class="bg-dark-gray border-b-2 border-solid border-b-white p-6 md:text-xl sm:text-lg text-base active:border-primary-green focus:border-primary-green outline-none"
          type="text"
          placeholder="NAME"
          bind:value={name}
          required
        />
        <input
          class="bg-dark-gray border-b-2 border-solid border-b-white p-6 md:text-xl sm:text-lg text-base active:border-primary-green focus:border-primary-green outline-none"
          type="email"
          placeholder="EMAIL"
          bind:value={email}
          required
        />
        <textarea
          class="bg-dark-gray border-b-2 border-solid border-b-white p-6 md:text-xl sm:text-lg text-base active:border-primary-green focus:border-primary-green outline-none"
          placeholder="MESSAGE"
          rows="5"
          bind:value={message}
          required
        ></textarea>

        <div class="mt-8 flex">
          <button
            class="md:text-xl sm:text-lg text-base font-bold uppercase text-right ml-auto"
          >
            <span
              class="border-b-4 border-solid border-b-primary-green pb-4 tracking-[0.25em] hover:text-primary-green"
              >send message</span
            >
          </button>
        </div>
      </form>
    </div>

    <hr class="border-b border-solid border-white mx-auto max-w-7xl w-11/12" />

    <div
      class="mx-auto max-w-7xl w-11/12 flex sm:flex-row flex-col justify-center sm:justify-between items-center py-12 gap-4"
    >
      <p class="text-3xl font-bold">kh-ray</p>
      <div class="flex gap-6 z-10 sm:mr-8">
        <IconGithub />
        <IconLinkedin />
      </div>
    </div>
  </div>
</main>
