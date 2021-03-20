<script>
  import { ready, goto } from '@roxi/routify'
  import { SuspenseList } from '@jamcart/suspense'
  import Apples from './_Apples.svelte'

  const params = new URLSearchParams(window.location.search)
  let timeout = params.get('timeout') || 1500
  let produceBug = parseInt(params.get('with-bug') ?? "1")

  setTimeout(() => $ready(), window.routify.inBrowser && produceBug ? timeout / 4 : timeout)
</script>

<div class="outer">
  <div>Choose an amount of time to wait for SSR.</div>
  <div class="right">
    <input type="range" bind:value={timeout} min=0 max=2100 step=100 />
    <span>{timeout} ms</span>
    <div>
      <button on:click={_ => window.location = `?timeout=${timeout}`}>(Re)load with flash-bug</button><br />
      <button on:click={_ => window.location = `?timeout=${timeout}&with-bug=0`}>(Re)load without flash-bug</button>
    </div>
  </div>
</div>

<SuspenseList collapse>
  <Apples />
</SuspenseList>

<style>
  .outer {
    @apply flex justify-between items-center my-2 px-2;
  }

  .right {
    @apply flex items-center;
  }

  .right > * {
    @apply ml-4;
  }

  input, button {
    @apply m-0;
  }
</style>