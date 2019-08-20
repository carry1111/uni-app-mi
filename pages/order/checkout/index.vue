<template>
	<view class="checkout">
		<!-- #ifndef MP-WEIXIN -->
		<top-one :text="title"></top-one>
		<!-- #endif -->
		<view class="address">
			添加收货地址
		</view>
		<view class="payment">
			<view class="list">
				<view :class="{'list-item': true, 'on': this.index === 0 }" @click="selWei">
					<view class="weixin">
						微信支付
					</view>
				</view>
				<view :class="{'list-item': true, 'on': this.index === 1 }" @click="selAli">
					<view class="aliapy">
						支付宝
					</view>
				</view>
				<view :class="{'list-item': true, 'on': this.index === 2 }" @click="selMi">
					<view class="xiaomi">
						小米钱包
					</view>
				</view>
				<view v-show="showOtherPay">
					<view :class="{'list-item': true, 'on': this.index === 3 }" @click="selYinlian">
						<view class="yinlian">
							银联支付
						</view>
					</view>
					<view :class="{'list-item': true, 'on': this.index === 4 }" @click="selYi">
						<view class="yi">
							翼支付
						</view>
					</view>
					<view :class="{'list-item': true, 'on': this.index === 5 }" @click="selMifen">
						<view class="mifen">
							小米分期						
						</view>
					</view>
					<view :class="{'list-item': true, 'on': this.index === 6 }" @click="selHuafen">
						<view class="huafen">
							花呗分期				
						</view>
					</view>
				</view>
			</view>
			<view class="payment-foot" @click="toggleOther">
				<text v-if="showOtherPay">收起其他支付方式</text>
				<text v-else>使用其他支付方式</text>
			</view>
		</view>
		<view class="money">
			<view class="item item1">
				<span>运费</span>
				<span>包邮</span>
			</view>
			<view class="item item2">
				<span>电子发票</span>
			</view>
			<view class="item">
				<span>优惠券</span>
			</view>
		</view>
		<view class="product">
			<view class="main product-main">
				<view class="left"><img class="img" src="//i1.mifile.cn/a1/pms_1528718745.83129328!80x80.jpg"></view>
				<view class="center">红米6 全网通版 3GB内存 32GB 铂银灰</view>
				<view class="right">729.00</view>
			</view>
			<view class="main">
				<view class="left"><img class="img" src="//i1.mifile.cn/a1/pms_1501236937.96732594!80x80.jpg"></view>
				<view class="center">米粉卡日租卡</view>
				<view class="right">0.00</view>
			</view>
		</view>
		<view class="price">
			<view class="item">
				<strong>商品价格：</strong>
				<span>1458.00</span>
			</view>
			<view class="item">
				<strong>以优惠：</strong>
				<span>0.00</span>
			</view>
			<view class="item">
				<strong>配送费用：</strong>
				<span>0.00</span>
			</view>
		</view>
		<view class="footer">
			<view class="left">
				<span class="title">共3件 合计: </span>
				<span class="num">1458.00</span>
			</view>
			<view class="right">
				去付款
			</view>
		</view>
		<view class="gejue">
			
		</view>
	</view>
</template>

<script>
	import topOne from '@/components/common/top-one.vue'
	export default {
		data() {
			return {
				title: '用户结算',
				index: 0,
				showOtherPay: false,
			}
		},
		methods: {
			selWei() {
				this.index = 0;
			},
			selAli() {
				this.index = 1;
			},
			selMi() {
				this.index = 2;
			},
			selYinlian(){
				this.index = 3;
			},
		    selYi(){
				this.index = 4;
			},
			selMifen(){
				this.index = 5;
			},
			selHuafen(){
				this.index = 6;
			},
			toggleOther() {
				this.showOtherPay = !this.showOtherPay;
			}
		},
		components: {
			topOne,
		}
	}
</script>

<style lang="scss">
	.checkout{
		background: #f5f5f5;
	}
	.address{
		position: relative;
		height: 80upx;
		line-height: 80upx;
		margin-bottom: 20upx;
		padding: 0 40upx;
		background-color: #fff;
		font-size: 26upx;
		font-weight: 700;
		&::after{
			position: absolute;
			content: '';
			width: 20upx;
			height: 20upx;
			top:50%;
			right: 40upx;
			border-top: 1upx solid #000;
			border-left: 1upx solid #000;
			transform: translate3d(0,-50%,0) rotate(135deg);
		}
	}
	.payment{
		margin-bottom: 20upx;
		.list{
			padding: 0 40upx;
			background-color: #fff;
		}
		.list-item{
			height: 80upx;
			line-height: 80upx;
			border-bottom: 1upx solid #ccc;
			background-image: url('https://s1.mi.com/m/images/m/check_normal.png');
			background-position: 100% 50%;
			background-repeat: no-repeat;
			background-size: 40upx 40upx;
		}
		.on{
			background-image: url('https://s1.mi.com/m/images/m/check_press.png');
		}
		.weixin{
			background: url('https://s1.mi.com/m/images/m/pay_wx.png') 0 50% no-repeat;
			background-size: 50upx 50upx;
			padding-left: 60upx;
		}
		.aliapy{
			background: url('https://s1.mi.com/m/images/m/pay_zfb2.png') 0 50% no-repeat;
			background-size: 50upx 50upx;
			padding-left: 60upx;
		}
		.xiaomi{
			background: url('https://s1.mi.com/m/images/m/micash_wap.png') 0 50% no-repeat;
			background-size: 50upx 50upx;
			padding-left: 60upx;
		}
		.yinlian{
			background: url('https://s1.mi.com/m/images/m/pay_yl1.png') 0 50% no-repeat;
			background-size: 50upx 50upx;
			padding-left: 60upx;
		}
		.yi{
			background: url('https://s1.mi.com/m/images/m/pay_yzf.png') 0 50% no-repeat;
			background-size: 50upx 50upx;
			padding-left: 60upx;
		}
		.mifen{
			background: url('https://s1.mi.com/m/images/m/pay_mifinanceinstal.png') 0 50% no-repeat;
			background-size: 50upx 50upx;
			padding-left: 60upx;
		}
		.huafen{
			background: url('https://s1.mi.com/m/images/m/pay_antinstalment.png') 0 50% no-repeat;
			background-size: 50upx 50upx;
			padding-left: 60upx;
		}
		.payment-foot{
			height: 80upx;
			line-height: 80upx;
			padding: 0 40upx;
			background-color: #fff;
			color: #bdbdbd;
			text-align: center;
			font-size: 26upx;
		}
	}
	.money{
		background-color: #fff;
		padding: 0 40upx;
		margin-bottom: 20upx;
		.item{
			height: 80upx;
			line-height: 80upx;
			font-size: 26upx;
			font-weight: 700;
		}
		.item1,
		.item2{
			border-bottom: 1upx solid #ccc;
		}
	}
	.product{
		padding: 0 40upx;
		margin-bottom: 20upx;
		background-color: #fff;
		.product-main{
			border-bottom: 1upx solid #ccc;
		}
		.main{
			display: flex;
			height: 100upx;
			padding: 10upx 0;
			.left,
			.center,
			.right{
				display: flex;
				align-items: center;
			}
			.left{
				width: 100upx;
				.img{
					width:80upx;
					height: 80upx;
				}
			}
			.center{
				flex: 1;
				font-size: 26upx;
				margin-right: 58upx;
			}
			.right{
				width: 120upx;
				justify-content: flex-end;
				text-align: right;
			}
		}
	}
	.price{
		padding: 40upx;
		margin-bottom: 20upx;
		background: #fff;
		font-size: 26upx;
		.item{
			margin-bottom: 10upx;
		}
	}
	.footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100upx;
		border-top: 1upx solid #ccc;
		display: flex;
		background-color: #fff;
		.left{
			flex: 1;
			line-height: 100upx;
			color: #ff4d14;
			.title{
				
			}
			.num{
				font-weight: 700;
			}
		}
		.right{
			flex: 1;
			line-height: 100upx;
			text-align: center;
			background-color: #ff5722;
			color: #fff;
		}
	}
	.gejue{
		height: 300upx;
		background-color: #fff;
	}
</style>
