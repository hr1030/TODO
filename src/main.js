// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 入口js ：创建Vue实例
import Vue from 'vue'
import App from './App'
// 引入Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// 引入部分组件
import { Container,Header,Main,Footer ,Input,Row,Col} from 'element-ui';
Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Main.name, Main);
Vue.component(Footer.name, Footer);
Vue.component(Input.name, Input);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

Vue.config.productionTip = false
// 使用element工具  
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
