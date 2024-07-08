import {createApp} from 'vue'
import {createPinia} from 'pinia'
import './style.css'
import App from './App.vue'
import './common.scss'
import 'virtual:windi.css'
import formCreate from '@form-create/element-ui'

const app = createApp(App)
app.use(createPinia())
app.use(formCreate)
app.mount('#app');
