import { defineComponent, ref, onMounted, watch } from 'vue'
import Mapboxgl from 'mapbox-gl'
import { usePlacesStore, useMapStore } from '@/composables'

export default defineComponent({
    setup() {
        const mapElement = ref<HTMLDivElement>()
        const { userLocation, isUserLocationReady } = usePlacesStore()
        const { setMap } = useMapStore()

        const initMap = async () => {
            if (!mapElement.value) throw new Error('Map element is not defined.')

            if (!userLocation.value) throw new Error('User location is not defined.')

            await Promise.resolve()

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/dark-v10', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
            })

            const miLocationPopup = new Mapboxgl.Popup().setLngLat(userLocation.value).setHTML(`
                <h4>Mi Location</h4>
                <p>Actualmente en Guate</p>
            `)

            /*const miLocationMarker =*/ new Mapboxgl.Marker().setLngLat(userLocation.value).addTo(map).setPopup(miLocationPopup)

            setMap(map)
        }

        onMounted(() => {
            if (isUserLocationReady.value) return initMap()

            console.log('User location is not ready yet.')
        })

        watch(isUserLocationReady, () => {
            if (isUserLocationReady.value) initMap()
        })

        return {
            mapElement,
            isUserLocationReady,
        }
    },
})
