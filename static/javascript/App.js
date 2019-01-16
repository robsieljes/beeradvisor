// Route components
import { Advisor } from './routes/Advisor.js';
import './modules/VueGlobals.js';

Vue.use(VueFormGenerator);

const routes = [
  { name: 'advisor', path: '/', component: Advisor}
];

const router = new VueRouter({ routes: routes });
let app = new Vue({ router: router }).$mount('#app');