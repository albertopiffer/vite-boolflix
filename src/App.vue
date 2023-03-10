<template>
    <div>
        <Header />
        <Main />
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import store from './store'
import axios from 'axios'
export default {
    components: {
        Main,
        Header
    },
    data() {
        return {
            store: store
        }
    },
    computed: {
        API_KEY() {
            return this.store.config.API_KEY
        },
        BASE_URI() {
            return this.store.config.BASE_URI
        },
        search() {
            return this.store.search
        },
        moviesEndpoint() {
            return this.BASE_URI + '/search/movie'
        },
        tvShowEndpoint() {
            return this.BASE_URI + '/search/tv'
        }
    },
    watch: {
        search(newVal, oldVal) {
            this.fetchData()
        }
    },
    methods: {
        fetchData() {
            this.fetchMovies()
            this.fetchTVshow()
        },
        fetchMovies() {
            axios.get(this.moviesEndpoint, {
                params: {
                    api_key: this.API_KEY,
                    query: this.search,
                    language: 'it-IT'
                }
            }).then(res => {
                const { results } = res.data
                this.store.movies = results
            }).catch(() => {
                this.store.movies = []
            })
        },
        fetchTVshow() {
            axios.get(this.tvShowEndpoint, {
                params: {
                    api_key: this.API_KEY,
                    query: this.search,
                    language: 'it-IT'
                }
            }).then(res => {
                const { results } = res.data
                this.store.tv = results
            }).catch(() => {
                this.store.tv = []
            })
        }
    }

}
</script>

<style lang="scss" >
@use './style/main.scss';
</style>