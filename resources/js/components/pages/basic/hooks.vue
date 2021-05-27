<template>
	<div>
		<h1 ref="myref">Hook page </h1>
		<h2>My name is:{{name}} </h2>
    </div>
</template>

<script>

export default {
	data(){
		return {
			name:'hitesh'
		}
	},

	beforeCreate(){
		console.log('hooks page beforeCreated',this.name);
	},

	created(){
		console.log('hooks page created',this.name);
	},

	mounted(){
		console.log('hooks page mounted',this.$refs.myref);
	},
}

</script>
