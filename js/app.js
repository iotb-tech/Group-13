async function loadDefaultAnime() {

    try {

        const animeList = await fetchAnime("Naruto");

        displayAnime(animeList);

    }

    catch (error) {

        console.error(error);

    }

}

async function initializeApp() {

    console.log("Anime Explorer Started");

    displayFavourites();


    await loadDefaultAnime();

}

initializeApp();
