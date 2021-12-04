<script>
    import Hero from "$lib/components/homepage/hero.svelte";
    import Carrrouseel from "$lib/components/homepage/caroussel.svelte";
    import Profile from "$lib/components/homepage/profile.svelte";
    import Gallery from "$lib/components/homepage/gallery.svelte";
    import Instagram from "$lib/components/homepage/instagram.svelte";
    import AutoPost from "$lib/services/instagram-post.svelte";
import Caroussel from "$lib/components/homepage/caroussel.svelte";
</script>

<Hero />
<Caroussel />

<main id="main">
    <Profile />
    <Gallery />
    <Instagram />
    <AutoPost />
</main>