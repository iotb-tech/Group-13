const STORAGE_KEY = "animeExplorerFavourites";

function getFavourites() {
    const favourites = localStorage.getItem(STORAGE_KEY);
    return favourites
        ? JSON.parse(favourites)
        : [];
}

function saveFavourites(favourites) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(favourites)
    );
}

function isFavourite(id) {
    const favourites = getFavourites();
    return favourites.some(anime => anime.mal_id === id);
}

function removeFavourite(id) {
    const favourites = getFavourites();
    const updated = favourites.filter(
        anime => anime.mal_id !== id
    );
    saveFavourites(updated);
}