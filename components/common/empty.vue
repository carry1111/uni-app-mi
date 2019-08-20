<template>
	<view class="empty" >
		<span class="" @click="toPage">
			<span class="text">购物车还是空的</span>
			<span class="btn">去逛逛</span>
		</span>
	</view>
</template>

<script>
	export default {
		methods: {
			toPage() {
				uni.navigateTo({
					url: '../../pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	.empty{
		height: 140upx;
		background-color: #ebebeb;
		text-align: center;
	}
	.text{
		display: inline-block;
		height: 100upx;
		line-height: 100upx;
		font-size: 30upx;
		padding-left: 70upx;
		background: url('../../static/images/cartnull.png') no-repeat left;
		background-size: 60upx;
		color: rgba(0,0,0,.27);
	}
	.btn{
		display: inline-block;
		border: 1upx solid rgba(0,0,0,.15);
		box-sizing: border-box;
		height: 50upx;
		line-height: 50upx;
		padding: 0 18upx;
		color: rgba(0,0,0,.87);
		font-size: 26upx;
	}
</style>
