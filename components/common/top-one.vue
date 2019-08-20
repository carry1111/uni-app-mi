<template>
	<view class="content">
		<view class="back" @click="backPre">
			
		</view>
		<view class="text">
			{{text}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				default: ''
			}
		},
		methods: {
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
		position: relative;
		height: 100upx;
		line-height: 100upx;
		background-color: #eee;
		text-align: center;
	}
	.back{
		width: 100upx;
		height: 100upx;
		position: absolute;
		left: 0;
		top: 0;
		background: url('../../static/images/back.png') no-repeat center;
		background-size: 40upx;
	}
	.text{
		font-size: 30upx;
	}
</style>
