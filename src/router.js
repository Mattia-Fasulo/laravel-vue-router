import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectsListPage from './pages/ProjectsListPage.vue';
import SingleProjectPage from './pages/SingleProjectPage.vue';
import ContactUsPage from './pages/ContactUsPage.vue';
import AboutUsPage from './pages/AboutUsPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/prjects/:slug',
            name: 'single-project',
            component: SingleProjectPage
        },
        {
            path: '/prjects',
            name: 'projects-list',
            component: ProjectsListPage
        },
        {
            path: '/contacts',
            name: 'contact-us',
            component: ContactUsPage
        },
        {
            path: '/about',
            name: 'about-us',
            component: AboutUsPage
        },
        {
            path: "/:pathMatch(.*)*",
            name: 'not-found',
            component: NotFoundPage
        }

    ]
})

export {router};