<template>
	<view class="content">
		<view class="">
			<view class="top">
				<view class="header">
					<view class="icon"></view>
					<view class="search">
						<span class="search-icon"></span>
						搜索商品名称
					</view>
					<view class="user" @click="toUser"></view>
				</view>
				<view class="nav">
					<tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange" tab-class="tab" :selectClass="tabSelected"></tab>
					<view class="extra"></view>
					<view :class="['down',isShowNavLayer ? 'unfold' : '']" @click="toggleNavLayer"></view>
					<view class="nav-layer" v-show="isShowNavLayer">
						<view class="title">
							全部
						</view>
						<span :class="{'item':true,'selected':index === TabCur}" v-for="(item,index) in tabList" :key="index" @click="toggleNavItem(index)">{{item.name}}</span>
					</view>
				</view>
			</view>
			<view class="interval">
				
			</view>
		</view>
		<view class="popup-mask" v-show="isShowNavLayer" @click="toggleNavLayer"></view>
		<recommend v-if="TabCur === 0"></recommend>
		<phone v-if="TabCur === 1"></phone>
		<intellect v-if="TabCur === 2"></intellect>
		<intellect v-if="TabCur === 3"></intellect>
		<intellect v-if="TabCur === 4"></intellect>
		<intellect v-if="TabCur === 5"></intellect>
		<intellect v-if="TabCur === 6"></intellect>
		<view class="backTop" v-show="isShowTop">
			<back-top></back-top>
		</view>
		<tab-bar></tab-bar>
	</view>
</template>

<script>
	import tab from '@/components/wuc-tab/wuc-tab.vue'
	import phone from '@/components/index/phone.vue'
	import recommend from '@/components/index/recommend.vue'
	import intellect from '@/components/index/intellect.vue'
	import backTop from '@/components/common/back-top.vue'
	import tabBar from '@/components/common/tab-bar.vue'
	export default {
		data() {
			return {
			  TabCur: 0,
			  tabList: [
				  { name: '推荐' }, 
				  { name: '手机' }, 
				  { name: '智能' }, 
				  { name: '电视' },
				  { name: '笔记本' }, 
				  { name: '家电' }, 
				  { name: '生活周边' },
			  ],
			  isShowTop: false,
			  isShowNavLayer: false,
			  tabSelected: 'tab-selected',
			}
		},
		methods: {
			tabChange(index) {
				this.TabCur = index;
			},
			toUser() {
				uni.navigateTo({
					url: '../../pages/my/index'
				})
			},
			toSearch() {
				uni.navigateTo({
					url: '../../pages/search/index'
				})
			},
			toggleNavLayer() {
				this.isShowNavLayer = !this.isShowNavLayer;
			},
			toggleNavItem(index) {
				this.tabChange(index)
				this.toggleNavLayer()
			}
		},
		components: {
			tab,
			phone,
			recommend,
			intellect,
			backTop,
			tabBar,
		},
		onPageScroll(e) {
			if(e.scrollTop > 500) {
				this.isShowTop = true;
			}else{
				this.isShowTop = false;
			}
		},
	}
</script>

<style lang="scss">
	.content {
		text-align: center;
		background-color: #f2f2f2;
		overflow-y: scroll;
		overflow-x: hidden;
	}
	.interval{
		height: 151upx;
	}
	.top{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		box-shadow: 0 4upx 10upx 1upx rgba(0,0,0,.2);
	}
    .header{
		display: flex;
		background-color: #f2f2f2;
		.icon{
			width: 100upx;
			height: 86upx;
			background: url('./../../static/images/xiaomi.png') no-repeat center;
			background-size: 58upx;
		}
		.search{
			flex: 1;
			height: 66upx;
			line-height: 66upx;
			margin-top: 10upx;
			padding-left: 10upx;
			border: 2upx solid #e5e5e5;
			background-color: #fff;
			text-align: left;
			color: rgba(0,0,0,.3);
			font-size: 30upx;
			.search-icon{
				display: inline-block;
				width: 36upx;
				height: 36upx;
				margin-right: 10upx;
				vertical-align: middle;
				background: url('../../static/images/search.png') no-repeat center;
				background-size: 36upx;
			}
		}
		.user{
			width: 100upx;
			height: 86upx;
			background: url('./../../static/images/my.png') no-repeat center;
			background-size: 58upx;
		}
	}
	.nav{
		position: relative;
	}
	.tab{
		background-color: #f2f2f2;
		font-size: 26upx;
	}
	.down{
		position: absolute;
		right: 10upx;
		top: 15upx;
		z-index: 2;
		width: 40upx;
		height: 40upx;
		background: url('./../../static/images/down.png') no-repeat center;
		background-color: #f2f2f2;
		background-size: 40upx;
		transition: transform .2s linear,-webkit-transform .2s linear;
	}
	.unfold{
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg);
	}
	.nav-layer{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		padding: 20upx 20upx 0 20upx;
		background-color: #f2f2f2;
		text-align: left;
		.title{
			text-align: left;
			height: 70upx;
			font-size: 28upx;
		}
		.item{
			display: inline-block;
			box-sizing: border-box;
			width: 21%;
			height: 60upx;
			line-height: 60upx;
			margin-right: 3%;
			margin-bottom: 20upx;
			border: 1upx solid #e5e5e5;
			border-radius: 8upx;
			background-color: #fff;
			text-align: center;
			font-size: 24upx;
		}
		.selected{
			background-color: #fde0d5;
			border-color: #ff6700;
			color: #ff6700;
		}
	}
	.backTop{
		position: fixed;
		bottom: 130upx;
		right: 30upx;
		z-index: 9999;
	}
	.popup-mask{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background-color: rgba(0,0,0,.3);
	}
</style>
