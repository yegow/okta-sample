import Router from 'vue-router';
import Auth from '@okta/okta-vue';
import Home from '../components/Home.vue';
import Signup from '../components/Signup';
import Login from '../components/Login';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/implicit/callback', component: Auth.handleCallback() }
];

export default new Router({
    mode: 'history',
    routes
});