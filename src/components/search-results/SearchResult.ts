import { useMapStore, usePlacesStore } from '@/composables'
import { Feature } from '@/interfaces/places'
import { LngLat } from 'mapbox-gl'
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
    name: 'SearchResult',
    setup() {
        const { isLoadingPlaces, places } = usePlacesStore()
        const { map, setPlaceMarkers } = useMapStore()

        const activePlace = ref('')

        watch(places, (newPlaces) => {
            activePlace.value = ''
            setPlaceMarkers(newPlaces)
        })

        return {
            isLoadingPlaces,
            places,
            activePlace,

            onPlaceClicked: (place: Feature) => {
                const [lng, lat] = place.center

                activePlace.value = place.id

                map.value?.flyTo({
                    center: [lng, lat],
                    zoom: 14,
                })
            },
        }
    },
})
