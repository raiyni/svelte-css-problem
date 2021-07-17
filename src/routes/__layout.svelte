<script>
  import "$lib/style/app.css";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />

<main>
  <div class="container">
    <slot />
  </div>
</main>
