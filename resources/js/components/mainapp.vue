<template>
	<div>
		<header class="top-head">
		  <div class="title">
		    Header
		  </div>
		  <div class="function">
		    <a href="#">
		      <label for="left-aside" :style="styleObject">test</label>
		    </a>
		    <a href="#">
		      <label for="right-aside">yyy</label>
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
		    aaa
		  </aside><!-- aside-left End Sub -->
		  <div class="content blueScroll">
		    <div class="scroll-content">
		      123
		    </div>
		  </div><!-- content End Sub -->
		  <aside class="aside-right">
		    bbb
		  </aside><!-- aside right End Sub -->
		</section><!-- down-content End Sub -->
		<router-view></router-view>
    </div>
</template>

export default {
	data() {
	  return {
	    styleObject: {
	      color: 'red',
	      fontSize: '13px'
	    }
	  }
}
}