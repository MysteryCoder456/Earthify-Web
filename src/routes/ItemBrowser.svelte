<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import {
        getFirestore,
        collection,
        query,
        orderBy,
        getDocs,
    } from "firebase/firestore";
    import { app } from "../firebase";

    import Listing from "../components/Listing.svelte";

    let listings = [];

    onMount(async () => {
        const db = getFirestore(app);
        const q = query(collection(db, "listings"), orderBy("name"));
        const snapshot = await getDocs(q);

        snapshot.forEach((doc) => {
            const data = { id: doc.id, ...doc.data() };
            listings = [...listings, data]; // Trigger state update with every document
        });
    });
</script>

<svelte:head>
    <title>Home - Earthify</title>
</svelte:head>

<div in:fade>
    <h1>Earthify</h1>

    {#each listings as listing (listing.id)}
        <Listing {listing} />
    {/each}
</div>
