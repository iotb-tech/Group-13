// storage.js
// Key used to store favourites
const STORAGE_KEY = "animeExplorerFavourites";
/**
 * Get favourites from localStorage
 *
 * @returns {Array}
 */
function getFavourites() {
    const favourites = localStorage.getItem(STORAGE_KEY);
    return favourites
        ? JSON.parse(favourites)
        : [];
}

/**
 * Save favourites to localStorage
 *
 * @param {Array} favourites
 */
function saveFavourites(favourites) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(favourites)
    );
}

/**
 * Check if anime already exists
 *
 * @param {number} id
 * @returns {boolean}
 */
function isFavourite(id) {
    const favourites = getFavourites();
    return favourites.some(anime => anime.mal_id === id);
}

/**
 * Remove favourite
 *
 * @param {number} id
 */
function removeFavourite(id) {
    const favourites = getFavourites();
    const updated = favourites.filter(
        anime => anime.mal_id !== id
    );
    saveFavourites(updated);
}