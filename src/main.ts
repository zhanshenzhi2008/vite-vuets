import {createApp} from 'vue'
import {createPinia} from 'pinia'
import './style.css'
import App from './App.vue'
// import router from './router/index' //等同于下面
import router from '@/router/index'
import '../common.scss'
import 'virtual:windi.css'
import ElementPlus from 'element-plus/es/index'
import 'element-plus/dist/index.css'
import formCreate from '@form-create/element-ui'
// import FcDesigner from '@form-create/designer'
import '@/polyfill/polyfill'

const app = createApp(App)
app.use(createPinia())
app.use(ElementPlus)
app.use(formCreate)
// app.use(FcDesigner)
app.use(router)
app.mount('#app');
