<script>
  import { metatags, page } from "@roxi/routify";

  $: metatags.title = `My Routify app - ${$page.title}`;
  metatags.description = "Description coming soon...";
</script>

<div class="container">
  <slot />
</div>
