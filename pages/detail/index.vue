<template>
	<view class="content">
		<view class="header">
			<!-- #ifdef H5 -->
			<view class="back" @click="backPre"></view>
			<!-- #endif -->
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in detail.imageUrl" :key="index">
					<view class="swiper-item uni-bg-red">
						<image class="swiper-img" :src="item"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="section product-name">
			{{detail.name}}
		</view>
		<view class="section product-info">
			<font color="#ff4a00">「6GB+64GB 限时秒杀价1099元」</font>
			与小米9相同的超级夜景算法 / 2400万旗舰自拍 / Dual PD 双核对焦 / 潮流镜面渐变色 / 7.5mm超薄机身 / 6.26"小刘海全面屏 / 骁龙660AIE处理器
		</view>
		<view class="section price">
			<span class="new sign">{{detail.price}}</span>
			<span class="old sign">{{detail.oldPrice}}</span>
		</view>
		<view class="section product-detail">
			<view class="item">
				<img class="image" src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png">
				<view class="text">cpu</view>
				<view class="info">骁龙660八核</view>
			</view>
			<view class="item">
				<img class="image" src="https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png">
				<view class="text">双摄像头</view>
				<view class="info">1200万+500万像素</view>
			</view>
			<view class="item">
				<img class="image" src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
				<view class="text">超大屏</view>
				<view class="info">6.26英寸</view>
			</view>
			<view class="item">
				<img class="image" src="https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png">
				<view class="text">屏幕分辨率</view>
				<view class="info">2280×1080</view>
			</view>
			<view class="item">
				<img class="image" src="https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png">
				<view class="text">极速畅玩</view>
				<view class="info">6GB</view>
			</view>
			<view class="item">
				<img class="image" src="https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png">
				<view class="text">存储容量</view>
				<view class="info">64GB</view>
			</view>
			<view class="item">
				<img class="image" src="https://i8.mifile.cn/b2c-mimall-media/52ad10a73685342e437e44ea3d29cbff.png">
				<view class="text">薄</view>
				<view class="info">7.5mm</view>
			</view>
			<view class="item">
				<img class="image" src="https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png">
				<view class="text">持久待机</view>
				<view class="info">3350mAh</view>
			</view>
			<view class="item">
				<img class="image" src="https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png">
				<view class="text">运营商网络</view>
				<view class="info">4G全网通</view>
			</view>
			<view class="item">
				<img class="image" src="https://i8.mifile.cn/b2c-mimall-media/bfd5ba9ae72c365dee42db14dfae4b0f.png">
				<view class="text">网络模式</view>
				<view class="info">双卡双待</view>
			</view>
		</view>
		<view class="section cuxiao">
			<view class="promotion three-column">
				<view class="left">
					促销
				</view>
				<view class="center">
					<view class="">
						小米青春版 赠贴膜
					</view>
					<view class="">
						赠米粉卡，最高含100元话费
					</view>
				</view>
				<view class="right">
					>
				</view>
			</view>
		</view>
		<view class="section delivery">
			<view class="con">
				<view class="item three-column">
					<view class="left">
						已选
					</view>
					<view class="center">
						小米8 青春版 6GB+64GB 深空灰 x 1
					</view>
					<view class="right">
						>
					</view>
				</view>
				<view class="item three-column">
					<view class="left">
						送至
					</view>
					<view class="center">
						北京市 东城区
					</view>
					<view class="right">
						>
					</view>
				</view>
				<view class="item3 three-column">
					<view class="center">
						小米自营 小米发货 7天无理由退货
					</view>
					<view class="right">
						>
					</view>
				</view>
			</view>
		</view>
		<view class="comment">
			<swiper class="swiper">
				<swiper-item class="swiper-item">
					<view class="item">
						<view class="comment-info">
							<view class="head-portrait">
								<img class="img" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/4d2e02e0bdb73c9bbed9fbf29ba4a953.webp">
							</view>
							<view class="name">
								廖冬英
								<view>2019-03-01</view>
							</view>
							<view class="up">点赞</view>
						</view>
						<view class="content">
							很漂亮，大小也合适，照相棒棒哒没毛病！值了
						</view>
						<view class="photo">
							<img class="img" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/8e44e245b45da353ec93b54a3680536e.webp">
							<img class="img" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c4d39101c25b7438983448860f2950c1.webp">
							<img class="img" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/b0e9cb09a0779e19c6b815bc4a7721c4.webp">
						</view>
						<view class="reply">
							<text class="title">官方回复:</text>
							五一来了，我带着你，你带着小米8 青春版。三亚也好，丽江也罢，横穿唐古...
						</view>
					</view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<view class="item">
						<view class="comment-info">
							<view class="head-portrait">
								<img class="img" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/4d2e02e0bdb73c9bbed9fbf29ba4a953.webp">
							</view>
							<view class="name">
								廖冬英
								<view>2019-03-01</view>
							</view>
							<view class="up">点赞</view>
						</view>
						<view class="content">
							很漂亮，大小也合适，照相棒棒哒没毛病！值了
						</view>
						<view class="photo">
							<img class="img" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/8e44e245b45da353ec93b54a3680536e.webp">
							<img class="img" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c4d39101c25b7438983448860f2950c1.webp">
							<img class="img" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/b0e9cb09a0779e19c6b815bc4a7721c4.webp">
						</view>
						<view class="reply">
							<text class="title">官方回复:</text>
							五一来了，我带着你，你带着小米8 青春版。三亚也好，丽江也罢，横穿唐古...
						</view>
					</view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<view class="item">
						<view class="comment-info">
							<view class="head-portrait">
								<img class="img" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/4d2e02e0bdb73c9bbed9fbf29ba4a953.webp">
							</view>
							<view class="name">
								廖冬英
								<view>2019-03-01</view>
							</view>
							<view class="up">点赞</view>
						</view>
						<view class="content">
							很漂亮，大小也合适，照相棒棒哒没毛病！值了
						</view>
						<view class="photo">
							<img class="img" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/8e44e245b45da353ec93b54a3680536e.webp">
							<img class="img" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c4d39101c25b7438983448860f2950c1.webp">
							<img class="img" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/b0e9cb09a0779e19c6b815bc4a7721c4.webp">
						</view>
						<view class="reply">
							<text class="title">官方回复:</text>
							五一来了，我带着你，你带着小米8 青春版。三亚也好，丽江也罢，横穿唐古...
						</view>
					</view>
				</swiper-item>
			</swiper>
			<view class="more">
				<span class="more-comment">更多评论</span>
			</view>
		</view>
		<!-- <view class="image1"> -->
		<img class="image1" src="//i8.mifile.cn/v1/a1/9c3e29dc-151f-75cb-b0a5-c423a5d13926.webp?w=1080&amp;h=849&amp;bg=C5DFEA">
		<!-- </view> -->
		<!-- <view class="image2"> -->
		<img class="image1" src="//i8.mifile.cn/v1/a1/f442b971-379f-5030-68aa-3b0accb8c2b9.webp?w=1080&amp;h=829&amp;bg=6F61AE">
		<!-- </view> -->
		<!-- <view class="image3"> -->
		<img class="image1" src="//i8.mifile.cn/v1/a1/63b700b6-643e-ec18-fdf3-da66b4b4173f.webp?w=1080&amp;h=750&amp;bg=F5F2F9">
		<!-- </view> -->
		<!-- <view class="image4"> -->
		<img class="image1" src="//i8.mifile.cn/v1/a1/e9dbf276-193e-11c4-99a6-3097fde82350.webp?w=1080&amp;h=942&amp;bg=313B8F">
		<!-- </view> -->
		<!-- <view class="image5"> -->
		<img class="image1" src="//i8.mifile.cn/v1/a1/1249d3ee-2990-a2b4-28d9-f719c2417b1f.webp?w=1080&amp;h=1080&amp;bg=3442A3">
		<!-- </view> -->
		<view class="backTop" v-show="isShowTop">
			<back-top ></back-top>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="confirm" :animation="animationData">
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<view class="confirm-h5">
		<!-- #endif -->
			<view class="container">
				<view class="page" @click="toPage">
					<view><img class="img" src="../../static/images/home-off.png"></view>
					<view>首页</view>
				</view>
				<view class="shop-car" @click="toCart">
					<view><img class="img" src="../../static/images/cart-off.png"></view>
					<view>购物车</view>
					<count class="count" :num="this.cartList.length"></count>
				</view>
				<!-- <view class="shop"> -->
					<button class="btn" @click="buy">加入购物车</button>
				<!-- </view> -->
			</view>
		</view>
		<popup v-if="isShowPopup"></popup>
	</view>
</template>

<script>
	import backTop from '@/components/common/back-top.vue'
	import popup from '@/components/common/popup.vue'
	import { mapState, mapMutations, mapActions } from 'vuex'
	import product from '@/static/data/product.js'
	import count from '@/components/common/count.vue'
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500,
				isShowTop: false,
				isShowPopup: false,
				detail: {},
				animationData: {},
				typeId: 0,
				goodsId: 0,
			}
		},
		computed: {
			...mapState([
				'cartList'
			])
		},
		methods: {
			...mapMutations(['changeCartList']),
			toPage() {
				uni.navigateTo({
					url: '../../pages/index/index'
				})
			},
			toCart() {
				uni.navigateTo({
					url: '../../pages/shopcart/index',
				})
			},
			backPre() {
				uni.navigateBack({
					delta: 1
				})
			},
			buy() {
				this.isShowPopup = true;
				let timer = setTimeout(()=>{
					this.isShowPopup = false;
				},1200);
				let cartItem = {
					typeId: this.typeId,
					goodsId: this.goodsId,
					num: 1
				};
				this.changeCartList(cartItem);
			}
		},
		onPageScroll(e) {
			if(e.scrollTop > 500) {
				this.isShowTop = true;
			}else{
				this.isShowTop = false;
			}
		},
		onLoad(option) {
			// console.log(option.typeId,option.goodsId);
			this.typeId = option.typeId;
			this.goodsId = option.goodsId;
			
			
			product.forEach((value,index)=>{
				if(value.typeId == option.typeId){
					let arr = value.goodsList;
					arr.forEach((val,ind)=>{
						if(val.goodsId == option.goodsId){
							this.detail = val;
						}
					})
				}
			})
		},
		onShow() {
			var animation = uni.createAnimation({
				duration: 1000,
				timingFunction: 'ease',
			})
			this.animation = animation;
			animation.translateY(-80).step();
			this.animationData = animation.export()
		},
		components: {
			backTop,
			popup,
			count,
		}
	}
</script>

<style lang="scss">
	$color : #ff6700;
	.header{
		position: relative;
		.back{
			position: absolute;
			left: 20upx;
			top: 20upx;
			z-index: 100;
			width: 64upx;
			height: 64upx;
			line-height: 64upx;
			border-radius: 32upx;
			text-align: center;
			background-color: rgba(0,0,0,.6);
			// font-size: 45upx;
			&::after{
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				width: 18upx;
				height: 18upx;
				border-top: 3upx solid #fff;
				border-left: 3upx solid #fff;
				transform: translate(-30%,-50%)rotate(-45deg);
			}
		}
	}
	.swiper{
		height: 800upx;
		.swiper-item{
			width: 750upx;
			height: 800upx;
			.swiper-img{
				width: 750upx;
				height: 800upx;
			}
		}
	}
	.section{
		padding-left: 30upx;
		padding-right: 30upx;
	}
	.product-name{
		padding-top: 30upx;
		padding-bottom: 10upx;
	}
	.product-info{
		padding-top: 10upx;
		padding-bottom: 10upx;
		font-size: 26upx;
		color: rgba(0,0,0,.54);
	}
	.price{
		.sign{
			&::before{
				content: '\A5';
				position: absolute;
				left: 0;
				top: 0;
				text-decoration: none;
			}
		}
		.new{
			position: relative;
			color: #ff6700;
			padding-left: 24upx;
			font-size: 40upx;
			&::before{
				font-size: 35upx;
			}
		}
		.old{
			position: relative;
			padding-left: 10upx;
			margin-left: 10upx;
			text-decoration: line-through;
			font-size: 20upx;
			color: rgba(0,0,0,.5);
			&::before{
				font-size: 20upx;
			}
		}
	}
	.product-detail{
		display: flex;
		height: 140upx;
		margin-top: 20upx;
		overflow-x: auto;
		text-align: center;
		.item{
			width: 170upx;
			height: 140upx;
			font-size: 25upx;
			flex-shrink: 0;
			border-right: 1upx solid #d9d9d9;
			.image{
				width: 40upx;
				height: 40upx;
			}
			.text{
				
			}
			.info{
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}
	.cuxiao{
		margin: 14upx 0;
		font-size: 28upx;
		.promotion{
			background-color: #fafafa;
		}
	}
	.delivery{
		margin: 10upx 0;
		font-size: 28upx;
		.con{
			background-color: #fafafa;
		}
		.item3{
			.center{
				color: rgba(0,0,0,.54);
				font-size: 22upx;
			}
		}
	}
	.three-column{
		display: flex;
		padding: 20upx;
		border-left: 1upx solid #eee;
		border-top: 1upx solid #eee;
		.left{
			color: rgba(0,0,0,.54);
			width: 100upx;
		}
		.center{
			flex: 1;
		}
		.right{
			width: 40upx;
			align-self: center;
			color: #ccc;
		}
	}
	.comment{
		margin: 16upx 30upx;
		.swiper{
			height: 450upx;
			.swiper-item{
				// width: 650upx!important;
			}
			.item{
				padding: 10upx 20upx;
				border: 1upx solid #eee;
				.comment-info{
					display: flex;
					align-items: center;
					padding: 10upx;
					font-size: 24upx;
					.head-portrait{
						width: 100upx;
						.img{
							width: 80upx;
							height: 80upx;
							border-radius: 80upx;
						}
					}
					.name{
						flex: 1;
					}
					.up{
						width: 100upx;
					}
				}
				.content{
					margin: 10upx 0 20upx;
					font-size: 26upx;
				}
				.photo{
					.img{
						width: 170upx;
						height: 140upx;
						margin-right: 15upx;
						border-radius: 14upx;
					}
				}
				.reply{
					margin: 10upx 0;
					font-size: 26upx;
					.title{
						color: $color;
						margin-right: 10upx;
					}
				}
			}
		}
		.more{
			margin: 40upx 0;
			text-align: center;
			color: #4e72a5;
			.more-comment{
				&::after{
					content: "\25BA";
					font-size: 6upx;
					vertical-align: middle;
					display: inline-block;
					-webkit-transform: scale(.8,1.5);
					transform: scale(.8,1.5);
					font-family: Times New Roman;
				}
			}
			
		}
	}
	.image1{
		width:100%;
		display: block;
	}
	.backTop{
		position: fixed;
		bottom: 160upx;
		right: 60upx;
		z-index: 100;
	}
	.confirm-h5{
		position: fixed;
		box-sizing: border-box;
		bottom: 20upx;
		left: 0;
		width: 100%;
		padding: 0 25upx;
	}
	.confirm{
		position: fixed;
		box-sizing: border-box;
		bottom: -140upx;
		left: 0;
		width: 100%;
		padding: 0 25upx;
	}
	.confirm,.confirm-h5{
		.container{
			width: 100%;
			height: 110upx;
			display: flex;
			align-items: center;
			background-color: #fff;
			border-radius: 10upx;
			box-shadow: 0 2upx 4upx -1upx rgba(0,0,0,.2), 0 4upx 5upx rgba(0,0,0,.14), 0 1upx 10upx rgba(0,0,0,.12);
		}
		.img{
			width: 40upx;
			height: 40upx;
		}
		.page{
			width: 120upx;
			font-size: 26upx;
			text-align: center;
		}
		.shop-car{
			// flex:1;
			position: relative;
			width: 120upx;
			font-size: 26upx;
			text-align: center;
			.count{
				position: absolute;
				top: 0;
				left: 50%;
			}
		}
		.btn{
			width: 250upx;
			height: 70upx;
			line-height: 70upx;
			margin-right: 20upx;
			background-color: #ff6700;
			border-radius: 35upx;
			color: #fff;
			font-size: 26upx;
		}
	}
</style>
