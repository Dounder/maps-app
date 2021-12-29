<script lang="ts" src="./searchBar.ts" />

<template>
    <div class="searchbar-container">
        <input type="text" class="form-control" placeholder="Buscar lugares..." v-model="searchTerm" />

        <SearchResult />
    </div>
</template>

<style scoped>
.searchbar-container {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
    left: 30px;
    position: fixed;
    top: 30px;
    width: 300px;
    z-index: 9999;
    border-radius: 10px;
    overflow: hidden;
    padding: 5px;
    background: #fafafa;
}
</style>
