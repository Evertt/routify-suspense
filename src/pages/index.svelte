<script>
  import { ready, goto } from '@roxi/routify'
  import { SuspenseList } from '@jamcart/suspense'
  import Apples from './_Apples.svelte'

  const params = new URLSearchParams(window.location.search)
  let timeout = params.get('timeout') || 1900
  setTimeout(() => $ready(), timeout)
</script>

<p>
  Choose an amount of time to wait for SSR.<br />
  The apples will all take anywhere between 0 and 2 seconds to load.
</p>

<input type="range" bind:value={timeout} min=0 max=2100 step=100 />
{timeout} ms
<button on:click={_ => window.location = `?timeout=${timeout}`}>(Re)load</button>

<SuspenseList collapse>
  <Apples />
</SuspenseList>
