<template>
	<view class="circle" v-if="num>0">
		{{num}}
	</view>
</template>

<script>
	export default {
		props: {
			num:{
				type: Number,
				default: 0
			}
		}
	}
</script>

<style lang="scss">
	.circle{
		width: 28upx;
		height: 28upx;
		line-height: 28upx;
		border-radius: 14upx;
		background: #ed4d41;
		color: #fff;
		font-size: 12upx;
	}
</style>
