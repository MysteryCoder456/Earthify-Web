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

    let listings = [];

    onMount(async () => {
        const db = getFirestore(app);
        const q = query(collection(db, "listings"), orderBy("name"));
        const snapshot = await getDocs(q);

        snapshot.forEach((doc) => {
            const id = doc.id;
            listings.push({ id, ...doc.data() });
        });
        listings = listings; // Trigger state update
    });
</script>

<svelte:head>
    <title>Home - Earthify</title>
</svelte:head>

<div in:fade>
    <h1>Earthify</h1>

    {#each listings as listing (listing.id)}
        <p>{listing.name}</p>
    {/each}
</div>
