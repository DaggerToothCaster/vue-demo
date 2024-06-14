import Vue from 'vue';
import VueRouter from 'vue-router';
import Shouye from '../pages/shouye/shouye.vue';
import Home from '../pages/home/home.vue';
import Nengyuanbao from '../pages/nengyuanbao/nengyuanbao.vue';
import Upgrade from '../pages/upgrade/upgrade.vue';
import Package from '../pages/package/package.vue';
import InviteList from '../pages/inviteList/inviteList.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/shouye',
    name: 'shouye',
    component: Shouye,
  },
  {
    path: '/nengyuanbao',
    name: 'nengyuanbao',
    component: Nengyuanbao,
  },
  {
    path: '/upgrade',
    name: 'upgrade',
    component: Upgrade,
  },
  {
    path: '/package',
    name: 'package',
    component: Package,
  },
  {
    path: '/inviteList',
    name: 'inviteList',
    component: InviteList,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
