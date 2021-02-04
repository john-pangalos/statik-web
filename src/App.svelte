<script lang="typescript">
  import { Route } from "tinro";
</script>

<div class="flex items-center justify-center flex-col h-screen">
  <div class="text-2xl font-bold">STATIK HOSTING!!!</div>
  <div>Page made by &#169; BACKENDERS</div>
  <Route>
    <nav class="space-x-4 pt-4">
      <a class="text-blue-600 underline" href="/">Home</a>
      <a class="text-blue-600 underline" href="about">About</a>
      <a class="text-blue-600 underline" href="blog">Blog</a>
    </nav>
    <br />
    <div class="text-5xl font-bold">
      <Route path="blog">Blog</Route>
      <Route path="about">About</Route>
      <Route path="/">Home</Route>
    </div>
  </Route>
</div>
