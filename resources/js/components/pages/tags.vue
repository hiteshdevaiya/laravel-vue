<template>
	<div>
		<header class="top-head">
		  <div class="title">
		    Header
		  </div>
		  <div class="function">
		    <a href="#">
		      <label for="left-aside">left</label>
		    </a>
		    <a href="#">
		      <label for="right-aside">right</label>
		    </a>
		  </div>
		</header><!-- top-head End Sub -->

		<input type="checkbox" style="display:none;" id="left-aside">
		<input type="checkbox" 
		       checked="true"
		       style="display:none;" 
		       id="right-aside">

		<section class="down-content">
		  <aside class="aside-left">
		  	<ul>
		  		<li class="list-item"><router-link to="/vue-laravel/">dashboard</router-link></li>
		  		<li class="list-item"><router-link to="/vue-laravel/tags">tags</router-link></li>
		  	</ul>
		    
		  </aside><!-- aside-left End Sub -->
		  <div class="content blueScroll">
		    <div class="scroll-content">
		      		<table id="t01">
		    		<h1>Tags <button>Add new</button></h1>
					  <tr>
					    <th>ID</th>
					    <th>TAG NAME</th> 
					    <th>CREATED</th>
					    <th>ACTION</th>
					  </tr>
					  <tr>
					    <td>1</td>
					    <td>Smith</td>
					    <td>50</td>
					    <td><a>EDIT</a> <a>DELETE</a></td>
					  </tr>
					</table>
		    </div>
		  </div><!-- content End Sub -->
		  <aside class="aside-right">
		    bbb
		  </aside><!-- aside right End Sub -->
		</section><!-- down-content End Sub -->
		<router-view></router-view>
    </div>
</template>

<script>
export default {
	async created(){
		const res = await this.callApi('post','/app/create_tag',{tagName: 'testTag'});
		console.log(res);
		if(res.status==200){
			console.log(res);
		}
	}
}
</script>