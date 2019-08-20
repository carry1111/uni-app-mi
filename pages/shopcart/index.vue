<template>
	<view class="content">
		<!-- #ifndef MP-WEIXIN -->
		<top></top>
		<!-- #endif -->
		<!-- <view class="login">
			<span class="main">登录后享受更多优惠</span>
			<span class="aside">去登录</span>
		</view> -->
		<empty v-if="isEmpty"></empty>
		<view v-if="!isEmpty">
			<view class="list" >
				<view class="item" v-for="(item,index) in shopCartList" :key="index">
					<view :class="{radio:true,checked:checkeds[index],unchecked:!checkeds[index]}" @click="change(index)"></view>
					<image class="img" :src="item.imageUrl[0]"></image>
					<view class="info">
						<view class="name">{{item.name}}</view>
						<view class="price">售价：{{item.price}}元</view>
						<view class="num">
							<view class="main">
								<view class="box">
									<span class="btn" @click="changeNum(-1,index)">-</span>
									<span class="number">{{item.num}}</span>
									<span class="btn" @click="changeNum(1,index)">+</span>
								</view>
							</view>
							<view class="del" @click="delProduct(index)"></view>
						</view>
						<!-- <uni-number-box :value="item.num" @change="bindChange"></uni-number-box> -->
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="guess">
			<image src="//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg"></image>
		</view> -->
		<!-- <view class="like">
			<ul>
				<li v-for="(item,index) in likeList" :key="index">
					<image :src="item.imgSrc"></image>
					<view class="name">{{item.name}}</view>
					<view class="price">{{item.price}}</view>
				</li>
			</ul>
		</view> -->
		<tab-bar v-if="isEmpty"></tab-bar>
		<view v-if="!isEmpty">
			<view class="footer">
				<view class="left">
					<view>共{{totalNum}}件 金额:</view>
					<view>
						<span class="num">{{totalPrice}}</span>
						<span>元</span>
					</view>
				</view>
				<view class="center" @click="toHome">
					继续购物
				</view>
				<view class="right" @click="toCheckout">
					去结算
				</view>
			</view>
			<!-- <view  class="all"></view> -->
		</view>
		
	</view>
</template>

<script>
	import top from '@/components/common/top.vue'
	import tabBar from '@/components/common/tab-bar.vue'
	import empty from '@/components/common/empty.vue'
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	import { mapState, mapMutations } from 'vuex'
	import product from '@/static/data/product.js'
	import like from '@/static/data/like.js'
	export default {
		data() {
			return {
				totalPrice: 0,
				totalNum: 0,
				check_goods: [],
				shopCartList: [],
				likeList: like,
			}
		},
		computed: {
			...mapState([
				'cartList'
			]),
			checkeds() {
				let checkeds = []
				this.cartList.forEach((value,inde)=>{
					checkeds.push(false);
				})
				return checkeds;
			},
			isEmpty() {
				if(this.shopCartList != 0){
					return false;
				}else{
					return true;
				}
			}
		},
		methods: {
			...mapMutations([
				'delCartItem',
				'addCartItemNum',
				'reduceCartItemNum'
			]),
			change(index){
				this.checkeds[index] = !this.checkeds[index];
				this.calTotalPrice()
				this.calTotalNum()
			},
			calTotalPrice() {
				this.totalPrice = 0;
				this.shopCartList.forEach((value,index)=>{
					if(this.checkeds[index]){
						this.totalPrice += value.price * value.num;
					}
				})
			},
			calTotalNum() {
				this.totalNum = 0;
				this.cartList.forEach((value,index)=>{
					if(this.checkeds[index]){
						this.totalNum += value.num;
					}
				})
			},
			changeNum(way,index) {
				if(way>0){
					this.addCartItemNum(index)
				}else{
					this.reduceCartItemNum(index)
				}
				this.getShopCartList();
				this.calTotalPrice();
				this.calTotalNum();
				
			},
			delProduct(index){
				this.shopCartList.splice(index,1)
				this.delCartItem(index)
				this.calTotalPrice()
				this.calTotalNum()
			},
			toHome() {
				uni.navigateTo({
					url: '../../pages/index/index'
				})
			},
			toCheckout() {
				uni.navigateTo({
					url: '../../pages/order/checkout/index'
				})
			},
			getShopCartList() {
				this.shopCartList = [];
				let cartList = this.cartList;
				cartList.forEach((item,i)=>{
					product.forEach((value,index)=>{
						if(value.typeId == item.typeId){
							let arr = value.goodsList;
							arr.forEach((val,ind)=>{
								if(val.goodsId == item.goodsId){
									val.num = item.num;
									this.shopCartList.push(val);
								}
							})
						}
					})
				})
				console.log(this.shopCartList);
				if(this.shopCartList != 0){
					this.isEmpty = false;
				}
			}
		},
		components: {
			top,
			tabBar,
			uniNumberBox,
			empty,
		},
		onLoad(option) {
			console.log(this.isEmpty);
			this.calTotalPrice()
			this.calTotalNum()
			this.getShopCartList()
			// console.log(this.isEmpty);
// 			if(this.cartList == []){
// 				console.log('1');
// 				this.isEmpty = true;
// 			}else{
// 				console.log('2');
// 				this.isEmpty = true;
// 			}
		},
	}
</script>

<style lang="scss">
	@mixin textflow {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.content{
		background-color: #f2f2f2;
	}
	.login{
		background-color: #fff;
		height: 100upx;
		line-height: 100upx;
		padding: 0 70upx 0 30upx;
		position: relative;
		.main{
			display: inline-block;
			width: 82%;
			font-size: 32upx;
		}
		.aside{
			display: inline-block;
			width: 18%;
			color: rgba(0,0,0,.6);
			font-size: 26upx;
			text-align: right;
		}
		&::after{
			content: '';
			position: absolute;
			right: 30upx;
			top: 55%;
			width: 40upx;
			height: 40upx;
			transform: translateY(-50%);
			
			background: url('../../static/images/right.png') no-repeat center;
			background-size: 30upx;
		}
	}
	.item{
		display: flex;
		margin-bottom: 20upx;
		padding: 20upx 15upx;
		background-color: #fff;
	}
	.radio{
		width: 40upx;
	}
	.checked{
		background: url(//s1.mi.com/m/images/m/check_press.png) 50% 50% no-repeat;
		background-size: 40upx 40upx;
	}
	.unchecked{
		background: url(//s1.mi.com/m/images/m/check_normal.png) 50% 50% no-repeat;
		background-size: 40upx 40upx;
	}
	.img{
		display: block;
		border: 1upx solid #eee;
		width: 180upx;
		height: 180upx;
		margin-left: 10upx;
		margin-right: 10upx;
	}
	.info{
		flex: 1;
		padding-left: 10upx;
		.name{
			width: 300upx;
			font-size: 27upx;
			margin-bottom: 8upx;
		}
		.num{
			font-size: 30upx;
			display: flex;
			.main{
				flex: 1;
				.box{
					display: inline-block;
					border: 1upx solid #f2f2f2;
				}
			}
			.number{
				display: inline-block;
				width: 60upx;
				height: 60upx;
				text-align: center;
				line-height: 60upx;
			}
			.btn{
				display: inline-block;
				width: 60upx;
				height: 60upx;
				font-size: 40upx;
				text-align: center;
				background-color: #f2f2f2;
			}
			.del{
				width: 100upx;
				background: url('../../static/images/shanchu.png') no-repeat center;
				background-size: 50upx;
			}
		}
		.price{
			margin-bottom: 10upx;
			font-size: 24upx;
			color: #999;
		}
	}
// 	.all{
// 		height: 1000upx;
// 	}
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 3;
		width: 100%;
		height: 100upx;
		display: flex;
		flex-direction: row;
		.left,
		.center,
		.right{
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.left{
			flex: 1;
			flex-direction: column;
			background-color: #fff;
			font-size: 26upx;
			.num{
				color: #ff5722;
				font-size: 34upx;
				font-weight: 700;
				margin-right: 10upx;
			}
		}
		.center{
			flex: 1;
			background-color: #eee;
			font-size: 30upx;
		}
		.right{
			flex: 1;
			background-color: #ff6700;
			color: #fff;
			font-size: 30upx;
		}
	}
	.all{
		height: 100upx;
	}
	.guess{
		image{
			width: 100%;
			height: 130upx;
		}
	}
	.like{
		ul{
			background-color: #fff;
			li{
				display: inline-block;
				width: 49.5%;
				margin-top: 8upx;
				image{
					width: 100%;
					height: 360upx;
				}
				&:nth-child(odd){
					margin-right: 1%;
				}
				.name{
					@include textflow()
				}
				.price{
					color: #ff6700;
				}
			}
		}
	}
</style>
