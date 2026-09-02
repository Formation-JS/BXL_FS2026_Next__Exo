import places from '@/data/lieux-events.json';

function delay(time = 1_000) {
    return new Promise((resolve) => { setTimeout(resolve, time); });
}

const PlaceService = {

    getByPagination: async (page, nbElem) => {
        await delay(500);

        const indexStart = (page - 1) * nbElem;
        const indexEnd = page * nbElem;

        return places.slice(indexStart, indexEnd).map(p => ({
            id: p.id,
            name: p.name,
            rating: p.averageRating,
            city: p.address.city,
            country: p.address.country
        }));
    },

    getById: async (id) => {
        await delay(3_500);

        return places.find(p => p.id === id) ?? null;
    }
}

export default PlaceService;