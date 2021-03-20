<script>
  import { Suspense } from '@jamcart/suspense'
    
  function timer () {
    return new Promise(resolve => {
      const timeout = Math.round(Math.random() * 2000)
      setTimeout(resolve, timeout)
    })
  }
  </script>
  
  <div class="grid">
    {#each Array(500) as i}
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
  