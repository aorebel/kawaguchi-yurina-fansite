<script>

  import InstaContents from "$lib/components/homepage/instagram/mcontents.svelte";


  import Masonry from 'svelte-bricks'

  let nItems = 9
  $: items = [...Array(nItems).keys()]

  let [minColWidth, maxColWidth, gap] = [400, 1200, 5]
  let width, height

</script>
    <!-- {#each visibleItems as item (item.key)}
      <div class="item">
       {item.data.key}
      </div>
    {/each} -->
    <Masonry
    {items}
    {minColWidth}
    {maxColWidth}
    {gap}
    let:item
    bind:width
    bind:height
  >
  <InstaContents />
</Masonry>