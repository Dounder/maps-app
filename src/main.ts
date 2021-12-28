import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser')
    throw new Error('Geolocation is not supported by your browser.')
}

// Mapbox
import mapboxgl from 'mapbox-gl' // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1IjoiZG91bmRlciIsImEiOiJja3hxa296YWsyaXZ0MndwbmNqNXE1bTV2In0.tuop5LBcwCeei6QkpaMZmg'

createApp(App).use(store).use(router).mount('#app')
