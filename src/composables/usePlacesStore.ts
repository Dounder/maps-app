import { computed, ComputedRef, onMounted } from 'vue'
import { useStore } from 'vuex'
import { StateInterface } from '@/store'
import { Feature } from '@/interfaces/places'

interface UsePlacesStoreInterface {
    isLoading: ComputedRef<boolean>
    userLocation: ComputedRef<[number, number] | undefined>
    places: ComputedRef<Feature[]>
    isLoadingPlaces: ComputedRef<boolean>
    isUserLocationReady: ComputedRef<boolean>
    searchPlacesByTerm: (query: string) => Promise<void>
}

export const usePlacesStore = (): UsePlacesStoreInterface => {
    const store = useStore<StateInterface>()

    onMounted(() => {
        if (!store.getters['places/isUserLocationReady']) store.dispatch('places/getInitialLocation')
    })

    return {
        // State
        isLoading: computed<boolean>(() => store.state.places.isLoading),
        userLocation: computed<[number, number] | undefined>(() => store.state.places.userLocation),
        places: computed<Feature[]>(() => store.state.places.places),
        isLoadingPlaces: computed<boolean>(() => store.state.places.isLoadingPlaces),

        // Actions
        searchPlacesByTerm: (query = '') => store.dispatch('places/searchPlacesByTerm', query),

        // Mutations

        // Getters
        isUserLocationReady: computed<boolean>(() => store.getters['places/isUserLocationReady']),
    }
}
