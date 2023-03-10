<template>
    <li class="card">
        <h3 v-if="type == 'm'">{{ item.title }}</h3>
        <h3 v-else>{{ item.name }}</h3>

        <p v-if="type == 'm'">{{ item.original_title }}</p>
        <p v-else>{{ item.original_name }}</p>

        <img :src="thumbnail" alt="">

        <p ref="flagEmote"></p>
        <p>{{ item.vote_average }}</p>
    </li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        },
        flags: {
            type: Object,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    mounted() {
        this.updateHtml()
    },
    computed: {
        thumbnail() {
            return 'https://image.tmdb.org/t/p/' + 'w185' + this.item.poster_path
        }
    },
    methods: {
        updateHtml() {
            const supportedLang = ['it', 'en', 'de', 'fr', 'es']

            const myParagraph = this.$refs.flagEmote

            if (supportedLang.includes(this.item.original_language)) {
                myParagraph.innerHTML = this.flags[this.item.original_language]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    flex-basis: calc(25% - 25px);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
}
</style>