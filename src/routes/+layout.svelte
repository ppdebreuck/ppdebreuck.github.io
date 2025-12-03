<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import "../app.css";

    let { children } = $props();
</script>

<svelte:head>
    <!-- Google tag (gtag.js) -->
    <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1Y1K2P410N"
    ></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-1Y1K2P410N");
    </script>
</svelte:head>

<div class="container-md">
    <Header />

    <div id="content" class="pt-5">
        {@render children()}
    </div>

    <Footer />
</div>
