<script>
    import "../styles.css"
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
</svelte:head>

<header class='page-header'>
    <h1 class="website-title">maya.cosmos</h1>
    <nav class="main-nav" aria-label="Main menu">
        <ul class="main-menu">
            <a href='#' class='main-menu-entry'>Portfolio</a>
            <a href='#' class='main-menu-entry'>Notes</a>
            <a href='#' class='main-menu-entry'>About</a>
        </ul>
    </nav>
</header>

<slot>

</slot>

<footer>

</footer>

<style>
    :global(body) {
        background-image: url("/yosemite-sunset.jpg");
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
    }
    header {
        display: flex;
        justify-content: space-between;
        align-content: center;
        width: 100vw;
        font-family: 'Roboto', sans-serif;
        color: hsl(var(--color-primary-000));
    }
    h1.website-title {
        padding: var(--px-height-XS);
        font-weight: var(--font-weight-100);
        font-size: var(--px-height-XXL);
    }
    nav {
        align-self: center;
    }
    ul.main-menu {
        display: flex;
        flex-grow: 1;
        align-items: center;
        font-weight: var(--font-weight-300);
        font-size: var(--px-height-M);
    }
    a {
        text-decoration: none;
        color:#474950;
        padding: var(--px-height-XS);
    }
    a:visited {
        color: hsl(var(--color-primary-000));
    }
</style>