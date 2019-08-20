<template>
	<view class="toTop" @click="backTop"></view>
</template>

<script>
	export default {
		methods: {
			backTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			}
		},
	}
</script>

<style>
	.toTop{
		width: 76upx;
		height: 76upx;
		border-radius: 38upx;
		border: 1upx solid #ccc;
		background: url('../../static/images/top.png') no-repeat center #fafafa;
		background-size: 76upx;
	}
</style>
