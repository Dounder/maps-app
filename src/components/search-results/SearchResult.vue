<script lang="ts" src="./SearchResult.ts" />

<template>
    <div class="alert alert-primary text-center mt-3" v-if="isLoadingPlaces">
        <h5>Cargando</h5>
        <span>Espere por favor...</span>
    </div>

    <ul class="list-group mt-3" v-else-if="places.length > 0">
        <li
            class="list-group-item list-group-item-action text-left"
            v-for="place in places"
            :key="place.id"
            :class="{ active: place.id === activePlace }"
            @click="onPlaceClicked(place)"
        >
            <h5>{{ place.text }}</h5>
            <p>{{ place.place_name }}</p>
            <div align="right">
                <button
                    class="btn btn-outline-primary btn-sm"
                    :class="place.id === activePlace ? 'btn-outline-light' : 'btn-outline-primary'"
                    @click.self="getRouteDirections(place)"
                >
                    Direcciones
                </button>
            </div>
        </li>
    </ul>
</template>

<style scoped>
li {
    cursor: pointer;
}

h5 {
    font-size: 15px;
}
p {
    font-size: 10px;
}
</style>
