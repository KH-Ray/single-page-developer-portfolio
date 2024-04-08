<script>
  export let src;
  export let alt;
  export let skill;
  export let styles = "";
</script>

<div class="flex flex-col items-center gap-8">
  <img class={`h-52 ${styles}`} {src} {alt} />
  <p class="text-5xl font-bold">{skill}</p>
</div>
