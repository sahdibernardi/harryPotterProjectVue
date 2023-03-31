import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Gryffindor from '../pages/Gryffindor.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/gryffindor',
        name: 'gryffindor',
        component: Gryffindor
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router