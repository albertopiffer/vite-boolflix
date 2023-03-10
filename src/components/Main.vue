<template>
    <main>
        <div class="container">
            <ul>
                <Card v-for="movie in movies" :key="movie.id" :item="movie" :flags="flags" :type="'m'" />
                <Card v-for="tvShow in tvShows" :key="tvShow.id" :item="tvShow" :flags="flags" :type="'t'" />
            </ul>
        </div>
    </main>
</template>

<script>
import store from '../store'
import Card from './Card.vue'
export default {
    components: {
        Card
    },
    data() {
        return {
            store,
            flags: {
                it: '&#127470;&#127481;',
                en: '&#127468;&#127463;',
                de: '&#127465;&#127466;',
                fr: '&#127467;&#127479;',
                es: '&#127466;&#127480;'
            }
        }
    },
    computed: {
        movies() {
            return this.store.movies
        },
        tvShows() {
            return this.store.tv
        },
    }
}
</script>

<style lang="scss" scoped>
.container {
    ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        gap: 25px;
    }
}
</style>