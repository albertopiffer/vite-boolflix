<template>
    <li class="card">
        <h3 v-if="type == 'm'">{{ item.title }}</h3>
        <h3 v-else>{{ item.name }}</h3>

        <p v-if="type == 'm'">{{ item.original_title }}</p>
        <p v-else>{{ item.original_name }}</p>

        <img :src="thumbnail" alt="">

        <p ref="flagEmote"></p>
        <!-- <p>{{ starsVoteCalc }}</p> -->
        <div>
            <font-awesome-icon v-for="el in starsVoteSolid()" icon="fa-solid fa-star" />
            <font-awesome-icon v-for="el in starsVoteRegular()" icon="fa-regular fa-star" />
        </div>
        <!-- <p>{{ item.vote_average }}</p> -->
        <p>{{ item.overview }}</p>
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
            return 'https://image.tmdb.org/t/p/' + 'w342' + this.item.poster_path
        },
        starsVoteCalc() {
            return Math.max(Math.ceil(this.item.vote_average - 5), 0)
        }
    },
    methods: {
        updateHtml() {
            const supportedLang = ['it', 'en', 'de', 'fr', 'es']

            const myParagraph = this.$refs.flagEmote

            if (supportedLang.includes(this.item.original_language)) {
                myParagraph.innerHTML = this.flags[this.item.original_language]
            }
            else {
                myParagraph.innerHTML = this.item.original_language
            }
        },
        starsVoteSolid() {
            let starString = []
            for (let i = 0; i < this.starsVoteCalc; i++) {
                starString.push(1)
            }
            return starString
        },
        starsVoteRegular() {
            let starString = []
            for (let i = 0; i < 5 - this.starsVoteCalc; i++) {
                starString.push(0)
            }
            return starString
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    flex-basis: calc((100% - 30px*3)/4);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    border: 1px dotted black;

    padding: 10px;

    // height: 550px;
    // max-height: 550px !important;
    overflow: hidden;
}
</style>