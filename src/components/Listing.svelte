<script>
    import { onMount } from "svelte";
    import { getStorage, ref, getDownloadURL } from "firebase/storage";
    import { app } from "../firebase";

    export let listing;
    let imageURL;

    onMount(() => {
        const storage = getStorage(app);
        const pathReference = ref(
            storage,
            "listingImages/" + listing.id + ".jpg"
        );
        getDownloadURL(pathReference).then((url) => (imageURL = url));
    });
</script>

<div class="listing">
    <img src={imageURL} alt="Item Listing" />
    <h2>{listing.name}</h2>
    <p>{listing.description}</p>
</div>

<style>
    img {
        object-fit: cover;
        object-position: center;
        width: 20em;
        height: 13.7em;
    }
</style>
