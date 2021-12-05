<script>
    import Hero from "$lib/components/homepage/hero.svelte";
    import Carrousel from "$lib/components/homepage/caroussel.svelte";
    import Profile from "$lib/components/homepage/profile.svelte";
    import Gallery from "$lib/components/homepage/gallery.svelte";
    import Instagram from "$lib/components/homepage/instagram.svelte";
    import Footer from "$lib/components/homepage/footer.svelte";
    import AutoPost from "$lib/services/instagram-post.svelte";
import Caroussel from "$lib/components/homepage/caroussel.svelte";
</script>

<Hero />
<Carrousel />

<main id="main">
    <Profile />
    <Gallery />
    <Instagram />
    <AutoPost />
</main>
<Footer />
<!-- 
<div id="preloader"></div> -->
<a href="#hero" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
