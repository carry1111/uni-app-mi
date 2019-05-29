<template>
	<view class="content">
		<view class="header clearfix">
			<view class="icon"></view>
			<view class="search">搜索商品名称</view>
			<view class="user"></view>
		</view>
		<tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange" tab-class="tab" select-class="tab-selected"></tab>
		<view v-show="TabCur == 0">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">
						<img class="swiper-img" 
						src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab1d745df1460133ca181cd2065936c5.jpg?thumb=1&amp;w=750&amp;h=360">
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">
						<img class="swiper-img" 
						src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/87e25f6b9a0945ec0daca71fdd4d0d5d.jpg?thumb=1&amp;w=750&amp;h=360">
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">
						<img class="swiper-img" 
						src="//i8.mifile.cn/v1/a1/3b39a95a-df61-a052-8f16-8cad413a929b!720x360.webp">
					</view>
				</swiper-item>
			</swiper>
			<ul class="nav clearfix">
				<li>
					<a href="#">
						<img class="img" src="//i8.mifile.cn/v1/a1/290976f3-acac-8a62-7e5c-a19985a6414b!144x152.webp">
					</a>
				</li>
				<li>
					<a href="#">
						<img class="img" src="//i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e!144x152.webp">
					</a>
				</li>
				<li>
					<a href="#">
						<img class="img" src="//i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee!144x152.webp">
					</a>
				</li>
				<li>
					<a href="#">
						<img class="img" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c94c523eb03128378ef2dc17c2c2cf0a.png?thumb=1&amp;w=144&amp;h=152">
					</a>
				</li>
				<li>
					<a href="#">
						<img class="img" src="//i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80!144x152.webp">
					</a>
				</li>
				<li>
					<a href="#">
						<img class="img" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&amp;w=144&amp;h=152">
					</a>
				</li>
				<li>
					<a href="#">
						<img class="img" src="//i8.mifile.cn/v1/a1/d5e3c742-3145-dd47-f665-331bef273a54!144x152.webp">
					</a>
				</li>
				<li>
					<a href="#">
						<img class="img" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&amp;w=144&amp;h=152">
					</a>
				</li>
				<li>
					<a href="#">
						<img class="img" src="//i8.mifile.cn/v1/a1/d7058e48-c115-e651-b33c-04ce071ae9e6!144x152.webp">
					</a>
				</li>
				<li>
					<a href="#">
						<img class="img" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&amp;w=144&amp;h=152">
					</a>
				</li>
			</ul>
			<view class="container">
				<a class="left" href="#">
					<img src="//i8.mifile.cn/v1/a1/5bd611b6-137c-7107-8329-93768a53fc58!358x508.webp">
				</a>
				<view class="right">
					<a class="top" href="#">
						<img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6254fb39b219368ae18b94526bf3d22.jpg?thumb=1&amp;w=358&amp;h=252">
					</a>
					<a href="#">
						<img src="//i8.mifile.cn/v1/a1/01811d34-74c0-ad2d-001f-759e82169fb3!358x252.webp">
					</a>
				</view>
			</view>
			<view class="banner">
				<img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8127f1259d91ce4cd6fe701314a9f15.jpg?thumb=1&amp;w=720&amp;h=280">
			</view>
			<view class="banner1">
				<img src="//i8.mifile.cn/v1/a1/5df15531-f43d-4255-7e2b-006c7e19ef12!720x440.webp">
			</view>
			<view class="mobile">
				<ul class="mobile-ul clearfix">
					<li>
						<view>
							<img class="big" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d2bc1c7ff8c71628a28a5fce24caf245.jpg?thumb=1&amp;w=360&amp;h=360">
						</view>
						<view class="info">
							<p>小米8青春版</p>
							<p class="text">潮流轻旗舰，超级夜景模式</p>
							<p>1299起</p>
						</view>
					</li>
					<li>
						<view>
							<img class="big" src="//i8.mifile.cn/v1/a1/2dc1fd08-ee77-65dd-c52a-82ba382ae864!360x360.webp">
						</view>
						<view class="info">
							<p>小米8青春版</p>
							<p class="text">潮流轻旗舰，超级夜景模式</p>
							<p>1299起</p>
						</view>
					</li>
					<li>
						<view>
							<img class="big" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d2bc1c7ff8c71628a28a5fce24caf245.jpg?thumb=1&amp;w=360&amp;h=360">
						</view>
						<view class="info">
							<p>小米8青春版</p>
							<p class="text">潮流轻旗舰，超级夜景模式</p>
							<p>1299起</p>
						</view>
					</li>
					<li>
						<view>
							<img class="big" src="//i8.mifile.cn/v1/a1/2dc1fd08-ee77-65dd-c52a-82ba382ae864!360x360.webp">
						</view>
						<view class="info">
							<p>小米8青春版</p>
							<p class="text">潮流轻旗舰，超级夜景模式</p>
							<p>1299起</p>
						</view>
					</li>
				</ul>
				<footer class="mobile-foot">
					更多小米手机产品
				</footer>
			</view>
			<view class="banner">
				<img src="//i8.mifile.cn/v1/a1/0d36ab1c-67a2-81b8-6ff9-608d2781ff03!720x280.webp">
			</view>
			<view class="banner1">
				<img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ae984432e104262ca9549efae84b1a0.jpg?thumb=1&amp;w=720&amp;h=440">
			</view>
			<view class="mobile">
				<ul class="mobile-ul clearfix">
					<li>
						<view>
							<img class="big" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d3480d56fd89dc2f80e2ec1653e718d1.jpg?thumb=1&amp;w=360&amp;h=360">
						</view>
						<view class="info">
							<p>Air 12.5" 2019款</p>
							<p class="text">像杂志一样随身携带</p>
							<p>3599起</p>
						</view>
					</li>
					<li>
						<view>
							<img class="big" src="//i8.mifile.cn/v1/a1/835f93ff-2b4e-89ae-64ee-230656e2fc87!360x360.webp">
						</view>
						<view class="info">
							<p>Air 12.5" 2019款</p>
							<p class="text">像杂志一样随身携带</p>
							<p>3599起</p>
						</view>
					</li>
					<li>
						<view>
							<img class="big" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d3480d56fd89dc2f80e2ec1653e718d1.jpg?thumb=1&amp;w=360&amp;h=360">
						</view>
						<view class="info">
							<p>Air 12.5" 2019款</p>
							<p class="text">像杂志一样随身携带</p>
							<p>3599起</p>
						</view>
					</li>
					<li>
						<view>
							<img class="big" src="//i8.mifile.cn/v1/a1/835f93ff-2b4e-89ae-64ee-230656e2fc87!360x360.webp">
						</view>
						<view class="info">
							<p>Air 12.5" 2019款</p>
							<p class="text">像杂志一样随身携带</p>
							<p>3599起</p>
						</view>
					</li>
				</ul>
				<footer class="mobile-foot">
					更多小米电视产品
				</footer>
			</view>
			<view class="banner">
				<img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1eb65451e5e7f26cbe479340b821b6f5.jpg?thumb=1&amp;w=720&amp;h=280">
			</view>
			<view class="banner1">
				<img src="//i8.mifile.cn/v1/a1/2edd3717-9264-c490-02cd-6eb10ca2f72f!720x440.webp">
			</view>
			<view class="mobile">
				<ul class="mobile-ul clearfix">
					<li>
						<view>
							<img class="big"src="//i8.mifile.cn/v1/a1/75f5a1ad-e2c6-36a9-fd56-66d253cc0469!360x360.webp">
						</view>
						<view class="info">
							<p>米家空调</p>
							<p class="text">大1匹，静音，快速制冷热</p>
							<p>1699起</p>
						</view>
					</li>
					<li>
						<view>
							<img class="big" src="//i8.mifile.cn/v1/a1/27721d21-782a-32e8-772b-462652d9acde!360x360.webp">
						</view>
						<view class="info">
							<p>米家空调</p>
							<p class="text">大1匹，静音，快速制冷热</p>
							<p>1699起</p>
						</view>
					</li>
					<li>
						<view>
							<img class="big"src="//i8.mifile.cn/v1/a1/75f5a1ad-e2c6-36a9-fd56-66d253cc0469!360x360.webp">
						</view>
						<view class="info">
							<p>米家空调</p>
							<p class="text">大1匹，静音，快速制冷热</p>
							<p>1699起</p>
						</view>
					</li>
					<li>
						<view>
							<img class="big" src="//i8.mifile.cn/v1/a1/27721d21-782a-32e8-772b-462652d9acde!360x360.webp">
						</view>
						<view class="info">
							<p>米家空调</p>
							<p class="text">大1匹，静音，快速制冷热</p>
							<p>1699起</p>
						</view>
					</li>
				</ul>
				<footer class="mobile-foot">
					更多米家家电产品
				</footer>
			</view>
			<ul class="clearfix cate">
				<li>
					<img src="//i8.mifile.cn/v1/a1/46c44f3e-479d-a999-dd2d-98fb39b51e17!358x480.webp">
				</li>
				<li>
					<img src="//i8.mifile.cn/v1/a1/b79cb907-3ae4-2a35-6756-b243b386a95a!358x480.webp">
				</li>
				<li>
					<img src="//i8.mifile.cn/v1/a1/1a8f5c31-f50c-5be0-3df0-f2c5c839e345!358x480.webp">
				</li>
				<li>
					<img src="//i8.mifile.cn/v1/a1/8cfcd654-4af5-9ae6-c6cc-1ba9d28be8e8!358x480.webp">
				</li>
				<li>
					<img src="//i8.mifile.cn/v1/a1/52866372-7fe5-76c2-29a0-9ae32d07b8ff!358x480.webp">
				</li>
				<li>
					<img src="//i8.mifile.cn/v1/a1/ad91499a-59ab-adc3-8fd5-98aefc1c43b4!358x480.webp">
				</li>
			</ul>
			<view class="foot-banner">
				<img src="//i8.mifile.cn/v1/a1/150eb1e7-f52d-ad60-893b-051ffb2a2a2d!720x280.webp">
			</view>
			<view class="foot-text">
				了解小米
			</view>
		</view>
		<view v-show="TabCur == 1">1</view>
	</view>
</template>

<script>
	import tab from '@/components/wuc-tab/wuc-tab.vue'
	export default {
		data() {
			return {
			  TabCur: 0,
			  tabList: [
				  { name: '推荐' }, 
				  { name: '手机' }, 
				  { name: '小米618' }, 
				  { name: '订阅' },
				  { name: '智能电视' }, 
				  { name: '笔记本' }, 
				  { name: '家电' }, 
				  { name: '生活周边' },
			  ],
			  indicatorDots: true,
			  autoplay: false,
			  interval: 2000,
			  duration: 500
			}
		},
		methods: {
			tabChange(index) {
				this.TabCur = index;
			}
		},
		components: {
			tab
		},
		onLoad() {
			
		}
	}
</script>

<style lang="scss">
	.content {
		text-align: center;
		background-color: #f2f2f2;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		overflow-y: scroll;
		overflow-x: hidden;
	}
    .header{
		background-color: #f2f2f2;
		.icon{
			float:left;
			width: 100upx;
			height: 100upx;
			background: url('./../../static/xiaomi.png') no-repeat center;
			background-size: 50upx;
		}
		.search{
			float:left;
			width: 540upx;
			height: 80upx;
			line-height: 80upx;
			margin-top: 10upx;
			padding-left: 10upx;
			background-color: #fff;
			text-align: left;
			color: rgba(0,0,0,.3);
		}
		.user{
			float:right;
			width: 100upx;
			height: 100upx;
			background: url('./../../static/user.png') no-repeat center;
			background-size: 50upx;
		}
	}
	.tab{
		background-color: #f2f2f2;
	}
	.tab-selected{
		color: rgb(237, 91, 0);
	}
	.swiper-item{
		.swiper-img{
			display: inline-block;
			width: 750upx;
			height: 300upx;
		}
	}
	.nav{
		li{
			float: left;
			width: 20%;
			background-color: #fff;
			.img{
				display: inline-block;
				width: 150upx;
				height: 150upx;
			}
		}
	}
	.container{
		position: relative;
		margin: 10upx 0;
		.left{
			position: absolute;
			left: 0;
			top: 0;
			img{
				width: 375upx;
				height: 405upx;
			}
		}
		.right{
			width: 375upx;
			margin-left:380upx;
			a{
				display: block;
				width: 370upx;
				height: 200upx;
				img{
					width: 370upx;
					height: 200upx;
				}
			}
			.top{
				margin-bottom: 5upx;
			}
		}
	}
	.banner{
		img{
			display: inline-block;
			width: 750upx;
			height: 300upx;
		}
	}
	.banner1{
		margin: 10upx 0;
		img{
			display: inline-block;
			width: 750upx;
			height: 400upx;
		}
	}
	.mobile{
		margin: 10upx 0;
		background-color: #fff;
		.mobile-ul{
			li{
				float: left;
				width: 50%;
				.big{
					display: inline-block;
					width: 375upx;
					height: 400upx;
				}
				.info{
					text-align: left;
				}
				.text{
					font-size: 24upx;
				}
			}
		}
		.mobile-foot{
			padding: 20upx 0;
			border-top: 1upx solid #ccc;
		}
	}
	.cate{
		li{
			float: left;
			width: 50%;
			img{
				display: inline-block;
				width: 375upx;
				height: 400upx;
			}
		}
	}
	.foot-banner{
		img{
			width: 750upx;
			height: 400upx;
		}
	}
	.foot-text{
		padding: 20upx 0;
		margin: 10upx 0;
		background-color: #fff;
    }
</style>
