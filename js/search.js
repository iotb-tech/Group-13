const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

async function searchAnime() {
    const query = searchInput.value.trim();

    animeContainer.innerHTML = "";

    error.classList.add("hidden");

    if (!query) {
        animeContainer.innerHTML = `
            <p class="text-center text-red-500 text-xl">
                Please enter an anime name.
            </p>
        `;
        return;
    }

    loading.classList.remove("hidden");
    try {
        const animeList = await fetchAnime(query);
        displayAnime(animeList);
    }
    catch (err) {
        error.classList.remove("hidden");
        error.innerText =
            "Something went wrong. Please try again.";
    }

    finally {
        loading.classList.add("hidden");
    }
}

searchButton.addEventListener(
    "click",
    searchAnime
);

searchInput.addEventListener(
    "keypress",
    function (event) {
        if (event.key === "Enter") {
            searchAnime();
        }
    }
);