import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '~/pages/index';

Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            { name: 'home', path: '/', component: HomePage }
        ]
    });
}