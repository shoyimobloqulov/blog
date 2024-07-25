import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/flexgridcombo.css'
import './assets/bootstrap.min.css'
import './assets/style.css'
const app = createApp(App)

app.use(router)

app.mount('#app')
