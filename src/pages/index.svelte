<script>
  import { ready, goto } from '@roxi/routify'
  import { SuspenseList } from '@jamcart/suspense'
  import Apples from './_Apples.svelte'

  const params = new URLSearchParams(window.location.search)
  let timeout = params.get('timeout') || 1500

  setTimeout(() => $ready(), window.routify.inBrowser ? timeout / 4 : timeout)
</script>

<div class="outer">
  <div>Choose an amount of time to wait for SSR.</div>
  <div>
    <input type="range" bind:value={timeout} min=0 max=2100 step=100 />
    {timeout} ms
    <button on:click={_ => window.location = `?timeout=${timeout}`}>(Re)load</button>
  </div>
</div>

<SuspenseList collapse>
  <Apples />
</SuspenseList>

<style>
  .outer {
    @apply flex justify-between items-center my-4 px-2;
  }

  input, button {
    @apply m-0;
  }
</style>