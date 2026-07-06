const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModalBtn = document.getElementById("closeModal");

function openModal(anime) {

    const genres = anime.genres
        ?.map(genre => genre.name)
        .join(", ") || "Unknown";

    const studios = anime.studios
        ?.map(studio => studio.name)
        .join(", ") || "Unknown";

    modalContent.innerHTML = `

        <img
            src="${anime.images.jpg.large_image_url}"
            alt="${anime.title}"
            class="w-full rounded-lg mb-5"
        >

        <h2 class="text-3xl font-bold mb-2">
            ${anime.title}
        </h2>

        <p class="text-gray-500 mb-4">
            ${anime.title_english || "No English Title"}
        </p>

        <div class="grid grid-cols-2 gap-3 text-sm">
            <p><strong> Score:</strong> ${anime.score ?? "N/A"}</p>
            <p><strong> Year:</strong> ${anime.year ?? "Unknown"}</p>
            <p><strong> Episodes:</strong> ${anime.episodes ?? "Unknown"}</p>
            <p><strong> Status:</strong> ${anime.status}</p>
            <p><strong> Rating:</strong> ${anime.rating ?? "Unknown"}</p>
            <p><strong> Duration:</strong> ${anime.duration ?? "Unknown"}</p>
            <p><strong> Season:</strong> ${anime.season ?? "Unknown"}</p>
            <p><strong> Source:</strong> ${anime.source ?? "Unknown"}</p>
        </div>

        <div class="mt-5">
            <p>
                <strong> Genres:</strong>
                ${genres}
            </p>
        </div>

        <div class="mt-3">
            <p>
                <strong> Studios:</strong>
                ${studios}
            </p>
        </div>

        <div class="mt-6">
            <h3 class="text-xl font-bold mb-2">
                Synopsis
            </h3>

            <p class="leading-7">
                ${anime.synopsis || "No synopsis available."}
            </p>

        </div>

        ${
            anime.trailer?.embed_url
            ?
            `
            <div class="mt-8">
                <h3 class="text-xl font-bold mb-3">
                    Trailer
                </h3>

                <iframe
                    class="w-full h-72 rounded-lg"
                    src="${anime.trailer.embed_url}"
                    allowfullscreen
                ></iframe>
            </div>
            `
            :
            ""
        }
    `;
    modal.classList.remove("hidden");
}


function closeModal() {
    modal.classList.add("hidden");
}

closeModalBtn.addEventListener(
    "click",
    closeModal
);

window.addEventListener(

    "click",
    
    function (event) {
        if (event.target === modal) {
            closeModal();
        }
    }
);