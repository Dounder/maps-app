import { computed, ComputedRef } from 'vue';
import { useStore } from 'vuex'
import { StateInterface } from '@/store'
import Mapboxgl from 'mapbox-gl'
import { Feature } from '@/interfaces/places';

interface UseMapStoreInterface {
    map         : ComputedRef<Mapboxgl.Map | undefined>
    distance    : ComputedRef<number | undefined> 
    duration    : ComputedRef<number | undefined>
    isMapReady  : ComputedRef<boolean>
    setMap      : (map: Mapboxgl.Map) => void
    setPlaceMarkers: (places: Feature[]) => void
}

export const useMapStore = (): UseMapStoreInterface => {
    const store = useStore<StateInterface>()

    return {
        // State
        map     : computed(() => store.state.map.map),
        distance: computed(() => store.state.map.distance),
        duration: computed(() => store.state.map.duration),

        // Actions

        // Mutations
        setMap: (map: Mapboxgl.Map) => store.commit('map/setMap', map),
        setPlaceMarkers: (places: Feature[]) => store.commit('map/setPlaceMarkers', places),

        // Getters
        isMapReady: computed<boolean>(() => store.getters['map/isMapReady']),
    }
}