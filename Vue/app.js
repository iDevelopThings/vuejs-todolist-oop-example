
import Vue      from 'vue';
import TaskList from './TaskList';

const app = document.getElementById('app');

Vue.component('TaskList', TaskList)

new Vue({

}).$mount(app);
