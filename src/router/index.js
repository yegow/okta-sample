// import Vue from 'vue'
import Router from 'vue-router';
import Auth from '@okta/okta-vue';
import Home from '../components/Home.vue';
import Signup from '../components/Signup';
import Login from '../components/Login';
import JobsFeed from '@/components/JobsFeed'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/feed', 
        component: JobsFeed, 
        meta: {
            requiresAuth: true
        },
    },
    { path: '/logout', beforeEnter(/* to, from, next */) {
        
    } },
    { path: '/implicit/callback', component: Auth.handleCallback() }
];

const router = new Router({
    mode: 'history',
    routes
});

// router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router