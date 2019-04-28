<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent= 'appQuote'">Quote</button>
                <button @click="selectedComponent= 'appAuthor'">Author</button>
                <button @click="selectedComponent= 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>default content</p>
                    </component>
                </keep-alive>
                <!-- <appQuote>
                    <h2 slot="title">{{ quoteTitle }}</h2>
                    <p>An awesome quote!</p>
                </appQuote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/quote.vue';
    import Author from './components/author.vue';
    import New from './components/new.vue';

    export default {
        data: function () {
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
</style>
