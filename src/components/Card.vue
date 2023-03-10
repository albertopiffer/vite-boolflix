<template>
    <li class="card">
        <h3>{{ item.title }}</h3>
        <h4>{{ item.original_title }}</h4>
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
    },
    mounted() {
        this.updateHtml()
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

    line-height: 30px;
}
</style>