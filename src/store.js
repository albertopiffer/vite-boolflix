import { reactive } from 'vue'

const store = reactive({
    movies: [],
    tv: [],
    search: '',
    config: {
        API_KEY: '1f3eae963dbc0d0e0e03636cd3ade61a',
        BASE_URI: 'https://api.themoviedb.org/3',
    },
})

export default store