import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router); 
import FirstPage from './components/pages/firstpage';
import SecondPage from './components/pages/secondpage';
import hooks from './components/pages/basic/hooks';
import methods from './components/pages/basic/methods';

//projects
import home from './components/pages/home';
import tags from './components/pages/tags';


const prefixurl = "/vue-laravel";

const routes = [
	//projects
	{
		path : prefixurl+'/',
		component : home,
		name : 'vue-laravel',
	},
	{
		path : prefixurl+'/tags',
		component : tags,
		name : 'tags',
	},


	//basic
	{
		path : prefixurl+'/first-page',
		component : FirstPage,
	},
	{
		path : prefixurl+'/second-page',
		component : SecondPage,
	},

	//hooks
	{
		path : prefixurl+'/hooks',
		component : hooks,
	},

	// methods
	{
		path : prefixurl+'/methods',
		component : methods,
	},

];

export default new Router({
	mode: 'history',
	routes
})