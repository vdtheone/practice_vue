import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import global_registration from './components/global_registration.vue'

const app = createApp(App)
app.component('global_registration',global_registration).use(router)
app.mount('#app')
