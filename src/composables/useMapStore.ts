import { computed, ComputedRef } from 'vue'
import { useStore } from 'vuex'
import { StateInterface } from '@/store'
import Mapboxgl from 'mapbox-gl'
import { Feature } from '@/interfaces/places'
import { LngLat } from '@/store/map/actions'

interface UseMapStoreInterface {
    // state
    map: ComputedRef<Mapboxgl.Map | undefined>
    distance: ComputedRef<number | undefined>
    duration: ComputedRef<number | undefined>
    // getters
    isMapReady: ComputedRef<boolean>
    // mutations
    setMap: (map: Mapboxgl.Map) => void
    setPlaceMarkers: (places: Feature[]) => void
    // actions
    getRouteBetweenPoints: (start: LngLat, end: LngLat) => void
}

export const useMapStore = (): UseMapStoreInterface => {
    const store = useStore<StateInterface>()

    return {
        // State
        map: computed(() => store.state.map.map),
        distance: computed(() => store.state.map.distance),
        duration: computed(() => store.state.map.duration),

        // Actions
        getRouteBetweenPoints: (start: LngLat, end: LngLat) => store.dispatch('map/getRouteBetweenPoints', { start, end }),

        // Mutations
        setMap: (map: Mapboxgl.Map) => store.commit('map/setMap', map),
        setPlaceMarkers: (places: Feature[]) => store.commit('map/setPlaceMarkers', places),

        // Getters
        isMapReady: computed<boolean>(() => store.getters['map/isMapReady']),
    }
}
