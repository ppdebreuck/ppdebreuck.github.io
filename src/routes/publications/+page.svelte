<script>
    import PublicationItem from "$lib/components/PublicationItem.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>Pierre-Paul De Breuck | Publications</title>
    <meta
        name="description"
        content="Pierre-Paul De Breuck's publication list"
    />
</svelte:head>

<div class="row pubs">
    <div class="col-1"></div>
    <div class="col-10">
        <ol>
            {#each data.publications as publication}
                <PublicationItem {publication} />
            {/each}
        </ol>
    </div>
    <div class="col-1"></div>
</div>
