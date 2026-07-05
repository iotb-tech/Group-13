const animeContainer = document.getElementById("animeContainer");

function displayAnime(animeList) {

    animeContainer.innerHTML = "";

    if (animeList.length === 0) {
        animeContainer.innerHTML = `
            <div class="col-span-full text-center py-10">
                <h2 class="text-2xl font-bold">
                    No Anime Found 
                </h2>
                <p class="text-gray-500">
                    Try another search.
                </p>
            </div>
        `;
        return;
    }
    animeList.forEach(anime => {
        const genres = anime.genres
            .map(genre => genre.name)
            .join(", ");

        const card = document.createElement("div");

        card.className =
            "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300";
        card.innerHTML = `
            <img
                src="${anime.images.jpg.image_url}"
                alt="${anime.title}"
                class="w-full h-80 object-cover"
            >
            <div class="p-5">
                <h2 class="text-xl font-bold">
                    ${anime.title}
                </h2>

                <p class="text-gray-500 mb-2">
                    ${anime.title_english || "No English Title"}
                </p>

                <p>
                    <strong>
                    Score:
                    </strong>

                    <strong>

                        ${anime.score || "N/A"}

                    </strong>
                </p>

                <p>
                    <strong>
                    Year:
                    </strong>
                    ${anime.year || "Unknown"}
                </p>

                <p>
                    <strong>
                    Episodes:
                    </strong>
                    ${anime.episodes || "Unknown"}
                </p>


                <p>
                    <strong>
                    Rating:
                    </strong>
                    ${anime.rating || "Unknown"}
                </p>

                <p>
                    <strong>
                    Status:
                    </strong>
                    ${anime.status}
                </p>

                <p class="text-sm text-gray-600 mt-2">
                    <strong>
                    Genres:
                    </strong> ${genres}
                </p>

                <div class="flex justify-between mt-5">
                    <button
                        class="detailsBtn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        View Details
                    </button>

                    <button
                        class="favBtn bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
                    >
                        Favourite
                    </button>
                </div>
            </div>
        `;
 
        card.querySelector(".detailsBtn")
            .addEventListener("click", function () {
                openModal(anime);
            });

        card.querySelector(".favBtn")
            .addEventListener("click", function () {
                saveFavourite(anime);
            });
        animeContainer.appendChild(card);
    });
}