import { MutationTree } from 'vuex'
import { MapState } from './state'
import Mapboxgl from 'mapbox-gl'
import { Feature } from '@/interfaces/places'

const mutation: MutationTree<MapState> = {
    setMap(state, map: Mapboxgl.Map) {
        state.map = map
    },
    setPlaceMarkers(state, places: Feature[]) {
        state.markers.forEach((marker) => marker.remove())
        state.markers = []

        if (!state.map) return

        for (const place of places) {
            const [lng, lat] = place.center

            const popup = new Mapboxgl.Popup().setLngLat([lng, lat]).setHTML(`
                <h4>${place.text}</h4>
                <p>${place.place_name}</p>
            `)

            const customMarker = new Mapboxgl.Marker().setLngLat([lng, lat]).addTo(state.map).setPopup(popup)

            state.markers.push(customMarker)
        }
    },
}

export default mutation
