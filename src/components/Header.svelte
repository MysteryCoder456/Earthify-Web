<script>
    import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
    import {
        getAuth,
        signInWithPopup,
        GoogleAuthProvider,
    } from "firebase/auth";
    import { app, googleProvider } from "../firebase";

    function googleSignIn() {
        const db = getFirestore(app);
        const auth = getAuth(app);

        signInWithPopup(auth, googleProvider).then(async (result) => {
            // Get token to access Google APIs
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // User's information
            const user = result.user;

            // Fetch existing user data
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let nameSplit = user.displayName.split(" ");

                const data = docSnap.data();
                data.firstName = nameSplit[0];
                data.lastName = nameSplit[1];
                data.email = user.email;
                data.profileImageURL = user.photoURL;

                await setDoc(docRef, data);
            } else {
                const data = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    profileImageURL: user.photoURL,
                    starredItems: [],
                };
                await setDoc(docRef, data);
            }
        });
    }
</script>

<nav class="p-2">
    <span class="title">Earthify</span>

    <a href="/">Home</a>
    <a href="/starred">Starred Listings</a>
    <a href="/chats">Chats</a>
    <a href="/manage">Manage Listings</a>

    <a href="/#" class="auth" on:click={googleSignIn}>Login</a>
</nav>
<br />
<br />

<style>
    .title {
        font-weight: bold;
        font-size: x-large;
        padding: 0 1.7% 0 1.7%;
        color: white;
    }

    .auth {
        float: right;
    }

    nav {
        background-color: #30d158; /* TODO: Change this later */
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
    }

    a {
        text-decoration: none;
        font-size: larger;
        padding: 6px 0.6% 6px 0.6%;
        border-radius: 8px;
        color: white;
    }

    a:hover {
        color: white;
        background-color: #2bbe50;
    }
</style>
