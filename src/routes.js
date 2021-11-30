import Home from "./routes/Home.svelte";
import PageNotFound from "./routes/PageNotFound.svelte";

export default [
    {
        path: "/",
        component: Home,
    },
    {
        path: "*",
        component: PageNotFound,
    },
];
