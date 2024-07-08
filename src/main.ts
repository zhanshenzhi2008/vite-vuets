import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import './common.scss'
import 'virtual:windi.css'
import formCreate from '@form-create/element-ui'

const app = createApp(App)
app.use(formCreate)
app.mount('#app');
