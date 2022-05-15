import Vue from 'vue';
import Router from 'vue-router';

import HomeApp from './components/HomeApp.vue';
import ListarUsuario from './views/ListarUsuario.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeApp
        },
        {
            path: '/usuarios/:id',
            name: 'listar-usuario',
            component: ListarUsuario,
            props: true
        },
        {
            path: '/usuarios/:id',
            name: 'deletar-usuario',
            component: HomeApp
        },
    ]
});