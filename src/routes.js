import ItemBrowser from "./routes/ItemBrowser.svelte";
import PageNotFound from "./routes/PageNotFound.svelte";

export default [
    {
        path: "/",
        component: ItemBrowser,
    },
    {
        path: "*",
        component: PageNotFound,
    },
];
