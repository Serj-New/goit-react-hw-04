import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Accept-Version'] = 'v1';
axios.defaults.headers.common['Authorization'] = 'Client-ID wGTtwIeL2cUBubKkBguYpFZWYc9e-cZd3ayHG4eVlEM';

export const fetchPhotos = async ({
        query,
        page,
        perPage
    }) => {

        const response = await axios.get("/search/photos", {
            params: {
                query,
                page,
                per_page: 10,
                orientation: "landscape"
            },
          });
    
        return response.data.results;
};