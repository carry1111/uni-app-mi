<template>
	<view class="">
		<swiper class="swiper" :indicator-dots="indicatorDots" indicator-active-color="rgb(255, 255, 255)" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<view class="swiper-item uni-bg-red">
					<img class="swiper-img" src="//i8.mifile.cn/v1/a1/fe08cdfd-5a9c-0c44-ac75-924ea7494207.webp">
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">
					<img class="swiper-img" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/20bc031bc5ca94aece4564369330f60a.jpg?thumb=1&w=720&h=360">
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">
					<img class="swiper-img" src="//i8.mifile.cn/v1/a1/d1c7c3c9-e51d-cfbf-0e60-90fdec0f409b.webp">
				</view>
			</swiper-item>
		</swiper>
		<ul class="nav clearfix">
			<li v-for="(item,index) in this.navList" :key="index">
				<a href="#">
					<image class="img" :src="item.imgsrc"></image>
				</a>
			</li>
		</ul>
		<view class="layer">
			<image class="img" src="//i8.mifile.cn/v1/a1/72411ddf-3df9-8d3a-7e5d-9429991710dc.webp"></image>
		</view>
		<ul class="bestSeller">
			<li v-for="(item,index) in bestSeller" :key="index">
				<image class="image" :src="item.imgSrc"></image>
				<view class="info-box">
					<view class="name">{{item.name}}</view>
					<view class="brief">{{item.brief}}</view>
					<view class="price">{{item.price}}</view>
				</view>
			</li>
		</ul>
		<view class="cells_auto_fill">
			<image class="img" src="//i8.mifile.cn/v1/a1/d6a387d1-3b5e-d81b-0c8b-3d0133d0bb5c.webp"></image>
		</view>
		<view class="cells">
			<image class="img" src="//i8.mifile.cn/v1/a1/79687e89-60b5-8846-aa46-6d2762213694.webp"></image>
		</view>
		<view class="cells1">
			<image class="img" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c25c68694e064f1eda1c207ad481f767.jpg?thumb=1&w=720&h=112"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500,
				navList: [
					{imgsrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e47dad0c224065a73a4c722eeaf1b8e1.jpg?thumb=1&w=144&h=152'},
					{imgsrc: 'https://i8.mifile.cn/v1/a1/eddc5967-7f37-bf45-72d9-de0db438658b.webp'},
					{imgsrc: 'https://i8.mifile.cn/v1/a1/8d73dc73-3a27-1587-6c43-47998c859a48.webp'},
					{imgsrc: 'https://i8.mifile.cn/v1/a1/afe66888-30af-d023-ebbe-6ed7e4607167.webp'},
					{imgsrc: 'https://i8.mifile.cn/v1/a1/3ad80cd6-0188-1c0a-95d3-aeaa58ede247.webp'},
					{imgsrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b9b8b8e686044afb2585e78a03ee96b6.png?thumb=1&w=144&h=152'},
					{imgsrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3304e52970aa972c4f4ccd6eb424ad7.png?thumb=1&w=144&h=152'},
					{imgsrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fed94691e4b361f237d411c3f687c2d4.png?thumb=1&w=144&h=152'},
					{imgsrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2bc35b6be2ab377bfc7e8fddeaa54c5.png?thumb=1&w=144&h=152'},
					{imgsrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d41a54c825db28e47888db6bd61349de.png?thumb=1&w=144&h=152'},
				],
				bestSeller: [
					{
						imgSrc: '//i8.mifile.cn/v1/a1/81bf6395-c0af-7fd7-6caa-7dd301a02105.webp',
						name: '扫地机器人1S',
						brief: '看得明白扫得彻底',
						price: '1999'
					},
					{
						imgSrc: '//i8.mifile.cn/v1/a1/c9c2cd57-0baa-edd3-a7fd-db53fb892a03.webp',
						name: '摄像机云台版',
						brief: '高清画质，守护家的每一面',
						price: '199'
					},
					{
						imgSrc: '//i8.mifile.cn/v1/a1/f105eafc-714b-da61-a322-f5cc53e251e0.webp',
						name: '视频门铃套装',
						brief: '手机看门外，出门更放心',
						price: '299'
					},
					{
						imgSrc: '//i8.mifile.cn/v1/a1/92a0708f-dbae-0b7e-117e-63fe11dda7e9.webp',
						name: '变频落地扇',
						brief: '模拟自然风算法',
						price: '299'
					},
					{
						imgSrc: '//i8.mifile.cn/v1/a1/c637bd2a-1bbb-ce7b-0465-a6a89cd868d7.webp',
						name: '真无线蓝牙耳机',
						brief: '自动秒连，拿起就能用',
						price: '99.9'
					},
					{
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/75cfba1ec641388eabc3ae5464ff1d27.jpg?thumb=1&w=221&h=221',
						name: '小爱音箱 Play',
						brief: '听音乐、语音遥控家电',
						price: '169'
					},
					{
						imgSrc: '//i8.mifile.cn/v1/a1/6f2954f1-9b60-6d87-ffc1-ca203190fdb7.webp',
						name: '小米AI音箱',
						brief: '听音乐、语音遥控家电',
						price: '229'
					},
					{
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1e42a35d6bf49a177809f7ba429e5ab1.jpg?thumb=1&w=221&h=221',
						name: '小米小爱触屏音箱智能门铃套装',
						brief: '小米小爱触屏音箱智能门铃套装',
						price: '548'
					},
					{
						imgSrc: '//i8.mifile.cn/v1/a1/51da3fb0-fbeb-fc42-8e18-f4d728fa534c.webp',
						name: '米家投影仪',
						brief: '三秒自动对焦，好用又好看',
						price: '3999'
					}
				]
			}
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
			display: inline-block;
			width: 20%;
			padding: 10upx 0 5upx;
			background-color: #fff;
			.img{
				display: inline-block;
				width: 150upx;
				height: 150upx;
			}
		}
	}
	.layer{
		.img{
			display: block;
			width: 100%;
			height: 110upx;
		}
	}
	.bestSeller{
		li{
			display: inline-block;
			box-sizing: border-box;
			width: 33.3%;
			padding: 10upx;
			background-color: #fff;
			.image{
				width: 100%;
				height: 220upx;
			}
			.info-box{
				.name{
					font-size: 26upx;
					font-weight: 700;
					@include threePoint
				}
				.brief{
					font-size: 24upx;
					@include threePoint
				}
				.price{
					font-size: 22upx;
				}
			}
		}
	}
	.cells_auto_fill{
		.img{
			display: block;
			width: 100%;
			height: 100upx;
			margin-top: 4upx;
		}
	}
	.cells{
		padding-bottom: 15upx;
		.img{
			display: block;
			width: 100%;
			height: 220upx;
		}
	}
	.cells1{
		padding-bottom: 15upx;
		background-color: #fff;
		.img{
			display: block;
			width: 100%;
			height: 140upx;
		}
	}
</style>
