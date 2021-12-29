import axios from 'axios'

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZG91bmRlciIsImEiOiJja3hxa296YWsyaXZ0MndwbmNqNXE1bTV2In0.tuop5LBcwCeei6QkpaMZmg',
    },
})

export default searchApi
