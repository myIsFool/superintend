import { createApp } from 'vue'
import ElementPlus from 'element-plus'//引入Element ui Plus
import 'element-plus/dist/index.css'//引入样式
import  * as ElIcons from '@element-plus/icons-vue'//引入Element图标
import zhCn from 'element-plus/es/locale/lang/zh-cn'//Element国际化(中国)一般用于时间空间
import axios from 'axios'
import router from './router'
import App from './App.vue'

const app=createApp(App);
app.config.globalProperties.axios=axios;
for(const name in ElIcons){
    app.component(name,(ElIcons)[name])//图标全局引用
}
app.use(ElementPlus,{locale:zhCn}).use(router).mount("#app")
//createApp(App).mount('#app')
