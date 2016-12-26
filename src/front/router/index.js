import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import DashboardView from '../views/DashboardView.vue'

export default new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/', component: DashboardView },
    ]
})