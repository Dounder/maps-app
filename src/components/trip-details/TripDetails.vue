<template>
    <div class="trip-container column" v-if="distance">
        <div class="col">
            Distancia: <strong>{{ distance }} kms</strong>
        </div>
        <div class="col">
            Duracion: <strong>{{ duration }} min</strong>
        </div>
    </div>
</template>

<script lang="ts">
import { useMapStore } from '@/composables'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TripDetails',
    setup() {
        const { distance, duration } = useMapStore()

        return { distance, duration }
    },
})
</script>

<style scoped>
.trip-container {
    background-color: white;
    border-radius: 10px;
    bottom: 30px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 18px;
    left: 30px;
    padding: 10px;
    position: fixed;
}
</style>
