<script>
  export let src;
  export let alt;
  export let title;
  export let github = "#";
  export let liveSite = "#";
  export let languages = [];
</script>

<div>
  <div class="h-full group relative">
    <img class="h-full object-cover lg:group-hover:opacity-25" {src} {alt} />

    <div
      class="flex-col gap-16 text-xl absolute top-1/2 left-1/2 hidden lg:group-hover:flex -translate-x-1/2 -translate-y-1/2 justify-center items-center"
    >
      <a
        href={liveSite}
        class="uppercase border-b-2 border-primary-green border-solid pb-4 font-bold cursor-pointer hover:text-primary-green"
        target="_blank"
        >View Project
      </a>
      <a
        href={github}
        class="uppercase border-b-2 border-primary-green border-solid pb-4 font-bold cursor-pointer hover:text-primary-green"
        target="_blank">View Code</a
      >
    </div>
  </div>
  <div class="flex flex-col gap-2 mt-4">
    <p class="uppercase text-2xl md:text-3xl font-bold">{title}</p>

    <div class="flex gap-4 mb-4">
      {#each languages as language}
        <p class="md:text-xl text-lg text-light-gray uppercase">{language}</p>
      {/each}
    </div>

    <div class="lg:hidden flex gap-6">
      <a
        href={liveSite}
        class="uppercase border-b-2 border-primary-green border-solid pb-4 font-bold cursor-pointer hover:text-primary-green"
        target="_blank"
        >View Project
      </a>
      <a
        href={github}
        class="uppercase border-b-2 border-primary-green border-solid pb-4 font-bold cursor-pointer hover:text-primary-green"
        target="_blank">View Code</a
      >
    </div>
  </div>
</div>
