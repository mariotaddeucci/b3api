import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'github-markdown-css/github-markdown.css'
import 'bulma/css/bulma.min.css'

createApp(App).use(router).mount('#app')
