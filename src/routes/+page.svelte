<script>
    import { page } from "$app/stores";

    let { data } = $props();
</script>

<svelte:head>
    <title>Pierre-Paul De Breuck | Computational Materials Scientist</title>
    <meta
        name="description"
        content="Research Intern at Mila, Montreal and Ph.D. Student at UCLouvain, specializing in Machine Learning for materials discovery."
    />
    <script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Pierre-Paul De Breuck",
            "jobTitle": "Computational Materials Scientist"
        }
    </script>
</svelte:head>

<div class="row">
    <div class="col-md-6 text-center px-5">
        <img
            src="/pp_small.jpg"
            alt="Pierre-Paul De Breuck"
            class="rounded"
            height="350"
            width="263"
        />
    </div>
    <div class="col-md-6">
        <h1>Pierre-Paul De Breuck</h1>
        <br />
        <ul>
            <li>
                <p>
                    Postdoctoral researcher at the Interdisciplinary Centre for
                    Advanced Materials Simulation (<a
                        href="https://www.icams.de">ICAMS</a
                    >) at Ruhr-Universität Bochum. Collaborating Alumni at
                    <a href="https://mila.quebec/en/pierre-paul-de-breuck"
                        >Mila</a
                    >
                    under supervision of
                    <a href="https://mila.quebec/en/yoshua-bengio"
                        >Prof. Yoshua Bengio</a
                    >. Previously Ph.D. Student at
                    <a
                        href="https://uclouvain.be/en/directories/pierre-paul.debreuck"
                        >UCLouvain</a
                    >
                    in the group of
                    <a href="https://perso.uclouvain.be/gian-marco.rignanese/"
                        >Prof. Gian-Marco Rignanese</a
                    >
                    at the Institute of Condensed Matter and Nanosciences.
                </p>
            </li>
            <li>
                Driven by the desire to discover more environmentally friendly
                materials for photovoltaics, batteries, and electrocatalysis,
                and more in our effort to combat climate change.
            </li>
            <li>
                Computational materials scientist specialized in AI for
                materials discovery: high-throughput screening, materials
                property prediction, AI agents for active learning campaigns and
                generative models.
            </li>
            <li>
                Please find <a href="/CV-full_publi-DEC25.pdf">my resume</a>
            </li>
            <li>
                Explore my latest project on generative models for materials
                discovery: <a
                    href="https://matra.pierrepauldb.com"
                    style="color: #ae7e2c;">Matra-Genoa</a
                >
            </li>
        </ul>
        <div class="row justify-content-center logos-main mt-5">
            <div class="col-3 text-center">
                <a href="https://github.com/ppdebreuck">
                    <i class="fa fa-github"></i>
                    <br />github
                </a>
            </div>
            <div class="col-3 text-center">
                <a href="https://www.linkedin.com/in/ppdebreuck">
                    <i class="fa fa-linkedin"></i>
                    <br />linkedin
                </a>
            </div>
            <div class="col-3 text-center">
                <a href="https://orcid.org/0000-0002-3173-2058">
                    <i class="fa fa-orcid"></i>
                    <br />orcid
                </a>
            </div>
            <div class="col-3 text-center">
                <a
                    href="https://scholar.google.com/citations?user=TYAyFXQAAAAJ&hl=en"
                >
                    <i class="fa fa-google"></i>
                    <br />scholar
                </a>
            </div>
        </div>
    </div>
</div>
