<template>
	<view class="">
		<view class="tab-bar">
			<view class="home" @click="toHome">
				<view :class="{'home-off':true,'home-on':tabBarIndex === 0}"></view>
				<span :class="{'text':tabBarIndex === 0}">首页</span>
			</view>
			<view class="classify" @click="toClassify">
				<view :class="{'classify-off':true,'classify-on':tabBarIndex === 1}"></view>
				<span :class="{'text':tabBarIndex === 1}">分类</span>
			</view>
			<view class="shopcart" @click="toShopcart">
				<view :class="{'shopcart-off':true,'shopcart-on':tabBarIndex === 2}"></view>
				<span :class="{'text':tabBarIndex === 2}">购物车</span>
				<count class="count" :num="this.cartList.length"></count>
			</view>
			<view class="my" @click="toMy">
				<view :class="{'my-off':true,'my-on':tabBarIndex === 3}"></view>
				<span :class="{'text':tabBarIndex === 3}">我的</span>
			</view>
		</view>
		<view class="partition"></view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	import count from '@/components/common/count.vue'
	export default {
		data() {
			return {
				index: 1,
				cartNum: 0,
			}
		},
		computed: {
			...mapState([
				'tabBarIndex',
				'cartList'
			])
		},
		methods: {
			...mapMutations(['changeTabBarIndex']),
			toHome() {
				this.changeTabBarIndex(0);
				uni.navigateTo({
					url: '../../pages/index/index'
				})
			},
			toClassify() {
				this.changeTabBarIndex(1);
				uni.navigateTo({
					url: '../../pages/classify/index'
				})
			},
			toShopcart() {
				this.changeTabBarIndex(2);
				uni.navigateTo({
					url: '../../pages/shopcart/index'
				})
			},
			toMy() {
				this.changeTabBarIndex(3);
				uni.navigateTo({
					url: '../../pages/my/index'
				})
			},
		},
		components: {
			count,
		},
		mounted() {
			;
		}
	}
</script>

<style lang="scss">
	.tab-bar{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		height: 100upx;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: #fff;
		box-shadow: 0 6upx 28upx 4upx rgba(0,0,0,.12);
	}
	.text{
		color: #ff6700;
	}
	.shopcart{
		position: relative;
		.count{
			position: absolute;
			top: 0;
			left: 50%;
		}
	}
	.home,
	.classify,
	.shopcart,
	.my{
		flex: 1;
		height: 100upx;
		font-size: 24upx;
	}
	.home-off,
	.classify-off,
	.shopcart-off,
	.my-off{
		height: 60upx;
	}
	.home-off{
		background: url('../../static/images/home-off.png') no-repeat center;
		background-size: 40upx;
	}
	.classify-off{
		background: url('../../static/images/order-off.png') no-repeat center;
		background-size: 40upx;
	}
	.shopcart-off{
		background: url('../../static/images/cart-off.png') no-repeat center;
		background-size: 40upx;
	}
	.my-off{
		background: url('../../static/images/my-off.png') no-repeat center;
		background-size: 40upx;
	}
	.home-on{
		background: url('../../static/images/home-on.png') no-repeat center;
		background-size: 40upx;
	}
	.classify-on{
		background: url('../../static/images/order-on.png') no-repeat center;
		background-size: 40upx;
	}
	.shopcart-on{
		background: url('../../static/images/cart-on.png') no-repeat center;
		background-size: 40upx;
	}
	.my-on{
		background: url('../../static/images/my-on.png') no-repeat center;
		background-size: 40upx;
	}
	.partition{
		height: 100upx;
	}
</style>
