<template>
	<view class="popup">
		<view class="content">
			<view class="text">成功加入购物车</view>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss">
	.popup{
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 999;
	}
	.content{
		position: absolute;
		top: 50%;
		left: 50%;
		width: 400upx;
		height: 300upx;
		margin-left: -200upx;
		margin-top: -150upx;
		text-align: center;
		color: #fff;
		background-color: rgba(0,0,0,.7);
		.text{
			padding-top: 100upx;
		}
	}
</style>
