<script>
    let { publication } = $props();

    function highlightAuthor(authorString) {
        return authorString.replace(
            /P\.-P\. De Breuck/g,
            "<u>P.-P. De Breuck</u>",
        );
    }
</script>

<li>
    <div class="title">
        {publication.title}
    </div>
    {#if publication.links && publication.links.length > 0}
        <div class="pb-2 pt-2">
            {#each publication.links as link}
                <a href={link.url} class="button">{link.text}</a>
            {/each}
        </div>
    {/if}
    <div class="authors">
        {@html highlightAuthor(publication.authors)}
    </div>
    <div class="journal">
        {publication.journal}
    </div>
</li>
