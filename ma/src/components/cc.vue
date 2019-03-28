<template>
	<div>
		<div class="a1">
		<form>
			用户名:<input type="text" v-model="namea" class="a2"/>
			
		</form>
	</div>
	<div class="a6">
		<form>
			密码:<input type="password" v-model="pwda" class="a3"/>
		</form>
	</div>
	<div class="a5">
		<form>
			<input class="a4" type="button" value="登陆" @click="login" />
		</form>
	</div>
	</div>
	
</template>
<script>
	
</script>
<style>
*{
	margin: 0 auto;
	width: 750px;
}
.a1{
	width: 750px;
	height: 1500px;
	background-image: url(../assets/img/app3-1.gif);
	background-size: cover;
}
.a2{
	margin-top: 200px;
	width: 550px;
	height: 50px;
	margin-right: 15px;
}
.a3{
	width: 550px;
	height: 50px;
}
.a5{
	margin-top: 150px;
	margin-right: -15px;
}
.a4{
	width: 550px;
	height: 50px;
}
.a6{
	margin-top: -1400px;
}

</style>