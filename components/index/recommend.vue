<template>
	<view>
		<swiper class="swiper" :indicator-dots="indicatorDots" indicator-active-color="rgb(255, 255, 255)" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<view class="swiper-item uni-bg-red">
					<img class="swiper-img" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6760547aa713f72d47f8f81425caa4c.jpg?thumb=1&w=720&h=360">
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">
					<img class="swiper-img" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f08d593e99c34980480f9e2d395c80b4.jpg?thumb=1&w=720&h=360">
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">
					<img class="swiper-img" src="//i8.mifile.cn/v1/a1/86392590-70ca-90e4-a9ff-f1fc9f128e4c.webp">
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
					<img class="img" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152">
				</a>
			</li>
			<li>
				<a href="#">
					<img class="img" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&amp;w=144&amp;h=152">
				</a>
			</li>
			<li>
				<a href="#">
					<img class="img" src="//i8.mifile.cn/v1/a1/e49720d6-3a48-ac6e-44d4-79f92b2e890c.webp">
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
				<img src="//i8.mifile.cn/v1/a1/dbac8d88-17f5-3514-d70b-fe1e8c09a0f7.webp">
			</a>
			<view class="right">
				<a class="t" href="#">
					<img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6254fb39b219368ae18b94526bf3d22.jpg?thumb=1&amp;w=358&amp;h=252">
				</a>
				<a href="#">
					<img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fce6d1a0b00677a89c2c9e451e8da42e.jpg?thumb=1&w=358&h=252">
				</a>
			</view>
		</view>
		<view class="banner1">
			<img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8127f1259d91ce4cd6fe701314a9f15.jpg?thumb=1&amp;w=720&amp;h=280">
		</view>
		<view class="banner2">
			<img src="//i8.mifile.cn/v1/a1/cdd95b3e-9d6f-5756-162e-94c15f396d98.webp">
		</view>
		<view class="mobile">
			<ul class="mobile-ul clearfix">
				<li @click="toDetail(phone.typeId,item.goodsId)" v-for="(item,index) in phone['goodsList']" :key="index">
					<view>
						<image class="big" :src="item.imageUrl[0]"></image>
					</view>
					<view class="info">
						<p class="name">{{item.name}}</p>
						<p class="text">{{item.info}}</p>
						<p class="price symbol">
							{{item.price}}
							<span class="qi">起</span>
							<span class="old symbol">2699</span>
						</p>
					</view>
				</li>
			</ul>
			<footer class="mobile-foot">
				更多小米手机产品 >
			</footer>
		</view>
		<view class="banner1">
			<img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/24e7c8c04cd9f087a6a2abfe8cfdfbc9.jpg?thumb=1&w=720&h=280">
		</view>
		<view class="banner2">
			<img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ae984432e104262ca9549efae84b1a0.jpg?thumb=1&amp;w=720&amp;h=440">
		</view>
		<view class="mobile">
			<ul class="mobile-ul clearfix">
				<li @click="toDetail(television.typeId,item.goodsId)" v-for="(item,index) in television['goodsList']" :key="index">
					<view>
						<!-- <img class="big" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d3480d56fd89dc2f80e2ec1653e718d1.jpg?thumb=1&amp;w=360&amp;h=360"> -->
						<image class="big" :src="item.imageUrl[0]"></image>
					</view>
					<view class="info">
						<p class="name">{{item.name}}</p>
						<p class="text">{{item.info}}</p>
						<p class="price symbol">
							{{item.price}}
							<span class="qi">起</span>
							<span class="old symbol">{{item.oldPrice}}</span>
						</p>
					</view>
				</li>
			</ul>
			<footer class="mobile-foot">
				更多小米电视产品 >
			</footer>
		</view>
		<view class="banner1">
			<img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1eb65451e5e7f26cbe479340b821b6f5.jpg?thumb=1&amp;w=720&amp;h=280">
		</view>
		<view class="banner2">
			<img src="//i8.mifile.cn/v1/a1/df143377-72f6-181a-afc8-c8775408fb82.webp">
		</view>
		<view class="mobile">
			<ul class="mobile-ul">
				<li @click="toDetail(appliances.typeId,item.goodsId)" v-for="(item,index) in appliances['goodsList']" :key="index">
					<view>
						<!-- <img class="big" src="//i8.mifile.cn/v1/a1/75f5a1ad-e2c6-36a9-fd56-66d253cc0469!360x360.webp"> -->
						<image class="big" :src="item.imageUrl[0]"></image>
					</view>
					<view class="info">
						<p class="name">{{item.name}}</p>
						<p class="text">{{item.info}}</p>
						<p class="price symbol">
							{{item.price}}
							<span class="qi">起</span>
							<span class="old symbol">{{item.oldPrice}}</span>
						</p>
					</view>
				</li>
			</ul>
			<footer class="mobile-foot">
				更多米家家电产品 >
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
			<img src="//i8.mifile.cn/v1/a1/fc12f9b1-5f50-642d-d5ca-041bb28bf096.webp">
		</view>
		<view class="foot-text" @click="toAbout">
			了解小米
		</view>
	</view>
</template>

<script>
	import list from '@/static/data/phone.js'
	import television from '@/static/data/television.js'
	import appliances from '@/static/data/appliances.js'
	import product from '@/static/data/product.js'
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500,
				phone: [],
				television: [],
				appliances : [],
			}
		},
		methods: {
			toDetail(typeId,goodsId){
				uni.navigateTo({
					url: '../../pages/detail/index?typeId='+typeId+'&goodsId='+goodsId,
				})
			},
			toAbout(){
				uni.navigateTo({
					url: '../../pages/about/index'
				})			
			}
		},
		mounted() {
			// this.phone = list[0];
			this.television = product[1];
			this.appliances = product[2];
			this.phone = product[0];
		}
	}
</script>

<style lang="scss">
	@mixin threePoint {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.swiper{
		height: 374upx;
		.swiper-item{
			.swiper-img{
				display: inline-block;
				width: 750upx;
				height: 374upx;
			}
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
		margin: 16upx 0;
		height: 525upx;
		.left{
			position: absolute;
			left: 0;
			top: 0;
			img{
				width: 375upx;
				height: 525upx;
			}
		}
		.right{
			width: 375upx;
			margin-left:380upx;
			a{
				display: block;
				width: 370upx;
				height: 260upx;
				img{
					width: 370upx;
					height: 260upx;
				}
			}
			.t{
				margin-bottom: 5upx;
			}
		}
	}
	.banner1{
		width: 750upx;
		height: 290upx;
		img{
			width: 750upx;
			height: 290upx;
		}
	}
	.banner2{
		margin: 16upx 0 4upx;
		width: 750upx;
		height: 450upx;
		img{
			width: 750upx;
			height: 450upx;
		}
	}
	.mobile{
		margin: 16upx 0;
		background-color: #fff;
		.mobile-ul{
			display: flex;
			flex-wrap: wrap;
			li{
				width: 372upx;
				&:nth-child(odd){
					margin-right: 6upx;
				}
				.big{
					display: inline-block;
					width: 375upx;
					height: 375upx;
				}
				.info{
					padding: 20upx;
					text-align: left;
					@include threePoint
				}
				.name{
					font-size: 28upx;
					@include threePoint
				}
				.text{
					font-size: 22upx;
					color: rgba(0,0,0,.54);
					margin: 8upx 0;
				}
				.symbol{
					&::before{
						content: '\A5';
						position: absolute;
						left: 0;
						top: 0;
						text-decoration: none;
						font-size: 25upx;
						vertical-align: middle;
					}
				}
				.price{
					position: relative;
					height: 32upx;
					line-height: 32upx;
					color: #ea625b;
					padding-left: 16upx;
					font-size: 28upx;
					&::before{
						font-size: 24upx;
					}
					.qi{
						margin-left: 4upx;
						font-size: 20upx;
					}
					.old{
						position: relative;
						padding-left: 15upx;
						margin-left: 15upx;
						text-decoration: line-through;
						font-size: 25upx;
						color: rgba(0,0,0,.64);
					}
				}
			}
		}
		.mobile-foot{
			padding: 32upx 0;
			border-top: 1upx solid #ccc;
			color: rgba(0,0,0,.6);
			font-size: 30upx;
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
		color: rgba(0,0,0,.6);
	}
</style>
