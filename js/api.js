const BASE_URL = "https://api.jikan.moe/v4/anime";

async function fetchAnime(query) {

    try {

        const url =
            `${BASE_URL}?q=${encodeURIComponent(query)}&limit=12`;
        const response = await fetch(url);

        if (!response.ok) {

            throw new Error("Unable to fetch anime.");

        }

        const result = await response.json();

        if (!result.data) {
            return [];
        }
        return result.data;
    }

    catch (error) {
        console.error("API Error:", error);
        throw error;

    }

}