<template>
	<view>
		<view class="image1">
			<img class="new" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dc78c411988f4f2f59fe1f4df063ad5.jpg?thumb=1&amp;w=720&amp;h=192">
		</view>
		<view class="image2">
			<img class="tu" src="//i8.mifile.cn/v1/a1/2d42dee8-5351-cf06-d23a-485c3f41ad04!720x376.webp">
		</view>
		<view class="shop" v-for="(item,index) in list" :key="index">
			<view class="t1">
				<img class="top-img" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/20ba0e86871afd110c163ce4be9cb709.jpg?thumb=1&amp;w=720&amp;h=120"></img>
			</view>
			<view class="list">
				<view class="item" v-for="(val,index) in item.shopList" :key="index">
					<view>
						<img class="big" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/10ea8491fbe4eaedc48d4888024d8752.jpg?thumb=1&amp;w=344&amp;h=280"></img>
					</view>
					<view class="">
						<view class="name">{{val.name}}</view>
						<view class="info">{{val.info}}</view>
						<view class="price">{{val.price}}起</view>
						<view class="btn">立即购买</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import list from '@/static/data/phone.js'
	export default {
		data(){
			return {
				list: []
			}
		},
		mounted() {
			this.list = list;
		}
	}
</script>

<style lang="scss">
	@mixin threePoint {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.image1{
		height: 140upx;
		.new{
			width: 100%;
			height: 140upx;
		}
	}
	.image2{
		height: 340upx;
		.tu{
			width: 100%;
			height: 340upx;
		}
	}
	.shop{
		.t1{
			height: 150upx;
			.top-img{
				width: 100%;
				height: 150upx;
			}
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			background-color: rgb(241, 78, 73);
			padding: 0 5upx;
			.item{
				width: 365upx;
				margin-bottom: 10upx;
				background-color: #fff;
				&:nth-child(odd){
					margin-right: 8upx;
				}
				.big{
					width: 365upx;
					height: 288upx;
				}
				.name{
					font-size: 26upx;
					color: rgba(0,0,0,.87);
					@include threePoint
				}
				.info{
					margin-top: 4upx;
					font-size: 24upx;
					color: rgba(0,0,0,.54);
					@include threePoint
				}
				.btn{
					width: 200upx;
					height: 50upx;
					line-height: 50upx;
					margin: 10upx auto;
					font-size: 26upx;
					font-weight: 700;
					color: #fff;
					background-color: #ea625b;
				}
			}
		}
	}
</style>
