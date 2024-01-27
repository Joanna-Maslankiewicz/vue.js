//creating component
Vue.component('card', {
    props: ['title', 'content'],    //attributes = properties = props
    data() {
        return {
            claps: 0
        }
    },
    template: `
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                {{ title }}
            </h3>
            <div class="card-text">
                {{ content }}
            </div>
            <div class="text-center text-muted display-4">{{ claps }}</div>
            <button @click="clapForArticle" class="btn btn-info btn-sm">Clap for me</button>
            <button @click="deleteArticle" class="btn btn-danger btn-sm">Delete Me</button>
        </div>
    </div>
    `,
    methods: {
        deleteArticle() {
            this.$emit('delete-article', this.title)
        },
        clapForArticle() {
            this.claps++
        }
    }
})

new Vue({
    el: '#app',
    data: {
        articles: [{
            title: 'Build fullstack applications with laravel and vue.js',
            content: 'contrary to popular belief, Lorem Ipsum is not simply random text'
        }, {
            title: 'Where does it come from?',
            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'
        }, {
            title: '1914 translation by H. Rackham',
            content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising...'
        }]
    },
    methods: {
        removeArticle(event) {
            this.articles = this.articles.filter(article => article.title !== event)
        }
    }
})
