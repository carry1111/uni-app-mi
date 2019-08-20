<template>
	<view class="">
		<view class="content">
			<view class="back" @click="backPre"></view>
			<view class="text">
				{{title}}
			</view>
			<view class="search"></view>
		</view>
		<view class="extra"></view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '购物车'
			}
		},
		methods:{
			backPre(){
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		display:flex;
		// align-items: center;
		height: 100upx;
		background-color: #f2f2f2;
		z-index: 100;
	}
	.back{
		width: 100upx;
		background: url('../../static/images/back.png') no-repeat center;
		background-size: 40upx;
	}
	.text{
		flex: 1;
		align-self: center;
		text-align: center;
		font-size: 30upx;
	}
	.search{
		width: 100upx;
		background: url('../../static/images/sousuo.png') no-repeat center;
		background-size: 40upx;
	}
	.extra{
		padding-bottom: 100upx;
	}
</style>
