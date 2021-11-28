<script>
    import Hero from "$lib/components/homepage/hero.svelte";
    import Profile from "$lib/components/homepage/profile.svelte";
    import Gallery from "$lib/components/homepage/gallery.svelte";
    import Instagram from "$lib/components/homepage/instagram.svelte";
    import AutoPost from "$lib/services/instagram-post.svelte";
</script>

<Hero />
<main id="main">
    <Profile />
    <Gallery />
    <Instagram />
    <AutoPost />
</main>