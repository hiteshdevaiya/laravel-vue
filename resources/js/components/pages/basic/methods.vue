<template>
	<div>
		<h1>the number is:{{views}} </h1>
		<button @click="updateCounter(1)">+</button>
		<button @click="updateCounter(-1)">-</button>

		<br>
		<br>

		<div v-for="(blog,i) in blogs" :key="i" v-if="blogs.length">
			<h2>{{ blog.title }}</h2>
			<p>{{ blog.post }}</p>
		</div>

		<br>
		<br>
		<br>

		<div>
			<h1 v-if="showItems">the statement "showItems" is true</h1>
			<p v-else>the statement "showItems" is false</p>
			<button @click="showItems = !showItems">change</button>
		</div>
    </div>
</template>

<script>

export default {
	data(){
		return {
			views:0,
			blogs :[],
			showItems:false,
		}
	},
	methods:{
		updateCounter(number){
			this.views += number
		}
	},

	created(){
		this.views = 100;

		this.blogs = [
			{title:"title1",post:'post 1',id:1},
			{title:"title2",post:'post 2',id:2},
			{title:"title3",post:'post 3',id:3},
			{title:"title4",post:'post 4',id:4},
		]
	}

}

</script>
