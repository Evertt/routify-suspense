<script>
  import { Suspense } from '@jamcart/suspense'

  let wait = 0
  const appleCount = 500
  const maxWait = 2000
  
  function timer () {
    return new Promise(resolve => {
      wait += maxWait / appleCount
      const random = Math.round(Math.random() * maxWait) - maxWait
      const timeout = Math.min(Math.max(wait + random, 0), maxWait)
      setTimeout(resolve, timeout)
    })
  }
</script>
  
  <div class="grid">
    {#each Array(appleCount) as i}
      <Suspense let:suspend>
        <div slot="loading">⌛</div>
  
        {#await suspend(timer()) then _}
          <div>🍎</div>
        {/await}
      </Suspense>
    {/each}
  </div>
  
  <style>
  .grid {
    align-items: center;
    justify-items: center;
    display: grid;
    grid-auto-rows: 2em;
    grid-template-columns: repeat(auto-fill, minmax(2em, 1fr));
    color: black;
  }
  </style>
  