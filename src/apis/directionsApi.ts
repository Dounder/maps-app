import axios from 'axios'

const directionApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZG91bmRlciIsImEiOiJja3hxa296YWsyaXZ0MndwbmNqNXE1bTV2In0.tuop5LBcwCeei6QkpaMZmg',
    },
})

export default directionApi
