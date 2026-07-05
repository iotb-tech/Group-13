const favouriteContainer =
document.getElementById("favouriteContainer");
function saveFavourite(anime) {
    const favourite = {
        mal_id: anime.mal_id,
        title: anime.title,
        image: anime.images.jpg.image_url,
        score: anime.score
    };
    if (isFavourite(favourite.mal_id)) {
        alert("Already in favourites.");
        return;
    }

    const favourites = getFavourites();
    favourites.push(favourite);
    saveFavourites(favourites);
    displayFavourites();
}

function displayFavourites() {
    favouriteContainer.innerHTML = "";
    const favourites = getFavourites();
    if (favourites.length === 0) {
        favouriteContainer.innerHTML = `
            <p class="text-gray-500">
                No favourites yet.
            </p>
        `;
        return;
    }

    favourites.forEach(anime => {
        const card = document.createElement("div");
        card.className =
        "bg-white rounded-lg shadow p-3";
        card.innerHTML = `
            <img
                src="${anime.image}"
                class="w-full h-48 object-cover rounded"
            >
            <h3 class="font-bold mt-3">
                ${anime.title}
            </h3>
            <p>
                <strong>Score:</strong> ${anime.score ?? "N/A"}
            </p>

            <button
                class="removeBtn mt-3 bg-red-500 text-white px-3 py-2 rounded"
            >
                Remove
            </button>
        `;
        // Remove button

        card.querySelector(".removeBtn")
        .addEventListener(
            "click",
            function () {
                removeFavourite(anime.mal_id);
                displayFavourites();
            }
        );
        favouriteContainer.appendChild(card);
    });
}