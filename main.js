const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image : './assets/images/socks_green.jpg',
            url : 'https://www.vuemastery.com/',
            isActive : false
        }
    },
    methods: {
        handleClick() {
            this.isActive = !this.isActive;
        }
    }
})
