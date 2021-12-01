<script>
    import router from "page";
    import routes from "./routes";

    import Header from "./components/Header.svelte";

    let page = null;
    let params = {};

    routes.forEach((route) => {
        // Loop around all of the routes and create a new instance of
        // router for reach one with some rudimentary checks.
        router(
            route.path,
            // Set the params variable to the context.
            // We use this on the component initialisation
            (ctx, next) => {
                params = { ...ctx.params };
                next();
            },
            // Check if auth is valid. If so, set the page to the component
            // otherwise redirect to login.
            () => {
                // if (route.auth && !user) {
                //     router.redirect("/");
                // } else {
                //     page = route.component;
                // }
                page = route.component;
            }
        );
    });

    router.start();
</script>

<Header />

<main>
    <svelte:component this={page} {params} />
</main>
