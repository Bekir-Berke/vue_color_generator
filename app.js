const app = Vue.createApp({
    data(){
        return{
            color:''
        }
    },
    methods:{
        changeColor(){
            let randomColor = (Math.random() * 0xfffff * 1000000).toString(16);
            this.color = '#' + randomColor.slice(0, 6);
            document.body.style.background = this.color
        }
    }
})
app.mount('#app')