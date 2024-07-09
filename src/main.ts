import {createApp} from 'vue'
import {createPinia} from 'pinia'
import './style.css'
import App from './App.vue'
// import router from './router/index' //等同于下面
import router from '@/router/index'
import '../common.scss'
import 'virtual:windi.css'
import '@/polyfill/polyfill'
import ElementPlus from 'element-plus/es/index'
import 'element-plus/dist/index.css'

/* ---- DemoFcDesigner.vue begin------*/
import formCreate from '@form-create/element-ui'
import FcDesigner from '@form-create/designer'
import ELEMENT from 'element-plus';
import 'element-plus/dist/index.css';
/* ---- DemoFcDesigner.vue end------*/

const app = createApp(App)

app.use(ELEMENT);
app.use(FcDesigner)

app.use(createPinia())
app.use(ElementPlus)
app.use(formCreate)
// app.use(DemoFcDesigner.vue)
app.use(router)
app.mount('#app');
