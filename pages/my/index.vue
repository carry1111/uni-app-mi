<template>
	<view class="content">
        <!-- <view class="header">
			登录/注册
			<button class='bottom' type='primary' open-type="getUserInfo" lang="zh_CN" @getuserinfo="wxGetUserInfo">
				授权登录
			</button>
		</view> -->
		<!-- <view class="header"> -->
		<!-- 	<open-data type="userAvatarUrl" class="img"></open-data>
			<open-data type="userNickName" class=""></open-data> -->
		<!-- </view> -->
		<!-- <uni-popup :show="middle" type="middle" mode="fixed" msg="居中弹出popup" @hidePopup="hidePopup"></uni-popup> -->
		<view class="header">
			<view class="head">
				<image class="img" src="https://m.mi.com/static/img/avatar.76a75b8f17.png"></image>
			</view>
			<view class="login">登录/注册</view>
		</view>	
		<view class="order">
			<span class="my">我的订单</span>
			<span class="all">全部订单</span>
		</view>
		<view class="tab">
			<view class="item">
				<view class="icon1"></view>
				<text class="">待付款</text>
			</view>
			<view class="item">
				<view class="icon2"></view>
				<text class="">待换货</text>
			</view>
			<view class="item">
				<view class="icon3"></view>
				<text class="">退换修</text>
			</view>
		</view>
		<view class="list">
			<view class="list-item list-item1">
				<view class="text border">会员中心</view>
			</view>
			<view class="list-item list-item2">
				<view class="text">我的优惠</view>
			</view>
			<view class="list-item list-item3">
				<view class="text border">服务中心</view>
			</view>
			<view class="list-item list-item4">
				<view class="text">小米之家</view>
			</view>
			<view class="list-item list-item5">
				<view class="text">F码通道</view>
			</view>
			<view class="list-item list-item6">
				<view class="text">设置</view>
			</view>
		</view>
		<tab-bar></tab-bar>
		<!-- <button open-type="getUserInfo" @getuserinfo="getUserInfo">获取用户信息</button>
		<open-data type="userNickName"></open-data>
		<open-data type="userAvatarUrl"></open-data> -->
	</view>
</template>

<script>
	// import {uniPopup} from "@/components/uni-popup/uni-popup.vue"
	import tabBar from '@/components/common/tab-bar.vue'
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		onLoad() {

		},
		methods: {
			wxGetUserInfo(res) {
				console.log(res.detail.rawData);
				this.userInfo = res.detail.rawData;
				console.log(this.userInfo);
//                 let _this = this;
//                 uni.getUserInfo({
//                     provider: 'weixin',
//                     success: function(infoRes) {
// 						console.log(infoRes.userInfo);
//                         let nickName = infoRes.userInfo.nickName; //昵称
//                         let avatarUrl = infoRes.userInfo.avatarUrl; //头像
//                         try {
//                             uni.setStorageSync('isCanUse', false);//记录是否第一次授权  false:表示不是第一次授权
//                             // _this.updateUserInfo();
//                         } catch (e) {}
//                     },
//                     fail(res) {}
//                 });
            },
			test() {
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
					let js_code=loginRes.code;//js_code可以给后台获取unionID或openID作为用户标识
					// 获取用户信息
					uni.getUserInfo({
					  provider: 'weixin',
					  success: function (infoRes) {
						//infoRes里面有用户信息需要的话可以取一下
					},
					  fail:function(res){}
					})
				  },
				  fail:function(res){}
				})
			}
		},
		components: {
			// uniPopup,
			tabBar
		}
	}
</script>

<style lang="scss">
	.content {
		background-color: #f2f2f2;
	}
	.header{
		padding: 30upx 0;
		display: flex;
		align-items: center;
		background: url('../../static/images/userbg.png') no-repeat;
		background-size: 100%;
		background-color: #f37d0f;
		color: #fff;
		font-size: 26upx;
		.head{
			margin: 0 20upx 0 40upx;
		}
		.img{
			width: 100upx;
			height: 100upx;
			border-radius: 50upx;
		}
		.login{
			
		}
	}
	.order{
		position: relative;
		height: 80upx;
		line-height: 80upx;
		padding: 0 50upx 0 30upx;
		border-bottom: 1upx solid #ccc;
		font-size: 30upx;
		background-color: #fff;
		.my{
			display: inline-block;
			width: 50%;
		}
		.all{
			display: inline-block;
			width: 50%;
			text-align: right;
			font-size: 26upx;
		}
		&::after{
			content: '';
			position: absolute;
			top: 50%;
			right: 10upx;
			width: 40upx;
			height: 40upx;
			transform: translateY(-50%);
			background: url('../../static/images/right.png') no-repeat;
			background-size: 40upx;
		}
	}
	.tab{
		display: flex;
		height: 180upx;
		background-color: #fff;
		font-size: 25upx;
		align-items: center;
		.item{
			flex: 1;
			text-align: center;
		}
		.icon1,
		.icon2,
		.icon3{
			width: 100%;
			height: 60upx;
			margin-bottom: 10upx;
		}
		.icon1{
			background: url('../../static/images/fukuan.png') no-repeat center;
			background-size: 60upx;
		}
		.icon2{
			background: url('../../static/images/shouhuo.png') no-repeat center;
			background-size: 60upx;
		}
		.icon3{
			background: url('../../static/images/banshou.png') no-repeat center;
			background-size: 60upx;
		}
	}
	.list{
		.list-item1{
			margin-top: 18upx;
			background: url('../../static/images/usercenter.png') no-repeat 30upx center;
		}
		.list-item2{
			background: url('../../static/images/youhui.png') no-repeat 30upx center;
		}
		.list-item3{
			margin-top: 18upx;
			background: url('../../static/images/service.png') no-repeat 30upx center;
		}
		.list-item4{
			background: url('../../static/images/xiaomihome.png') no-repeat 30upx center;
		}
		.list-item5{
			margin-top: 18upx;
			background: url('../../static/images/f.png') no-repeat 30upx center;
		}
		.list-item6{
			margin-top: 18upx;
			background: url('../../static/images/setup.png') no-repeat 30upx center;
		}
		.list-item{
			position: relative;
			height: 110upx;
			line-height: 110upx;
			text-align: left;
			background-color: #fff;
			background-size: 50upx;
			&::after{
				content: '';
				position: absolute;
				right: 20upx;
				top: 50%;
				transform: translateY(-50%);
				width: 40upx;
				height: 40upx;
				background: url('../../static/images/right.png') no-repeat center;
				background-size: 40upx;
			}
		}
		.text{
			height: 110upx;
			box-sizing: border-box;
			margin-left: 110upx;
			font-size: 28upx;
		}
		.border{
			border-bottom: 1upx solid #ccc;
		}
	}
</style>
