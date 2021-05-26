import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router); 
import FirstPage from './components/pages/firstpage';
import SecondPage from './components/pages/secondpage';

const prefixurl = "/vue-laravel";

const routes = [
	{
		path : prefixurl+'/first-page',
		component : FirstPage,
	},
	{
		path : prefixurl+'/second-page',
		component : SecondPage,
	}

];

export default new Router({
	mode: 'history',
	routes
})