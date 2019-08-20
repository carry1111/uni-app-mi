<template>
	<view class="content">
		<!-- #ifndef MP-WEIXIN -->
		<top title="分类"></top>
		<!-- #endif -->
		<view class="container">
			<scroll-view class="left" scroll-top="0" scroll-y="true" :scroll-into-view="scrollId">
				<ul>
					<li :id="categoryId[index]" 
					:class="{selected:index === currentCategoryIndex}" 
					v-for="(item,index) in categoryList" 
					:key="index" 
					@click="clickHandle(index)">
						{{item}}
					</li>
				</ul>
			</scroll-view>
			<scroll-view class="right" scroll-top="0" scroll-y="true" :scroll-into-view="scrollId" @scroll="scrollHandle">
				<view v-for="(item,index) in product" :key="index" :id="categoryId[index]" ref="categoryList">
					<view v-for="(val,ind) in item.subcategory" :key="ind">
						<view class="title" ref="mobilePhone">{{val.typeName}}</view>
						<ul class="list1">
							<li v-for="(i,dex) in val.productList" :key="dex">
								<image class="image" :src="i.imgSrc"></image>
								<view>{{i.name}}</view>
							</li>
						</ul>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<tab-bar></tab-bar>
	</view>
</template>

<script>
	import tabBar from '@/components/common/tab-bar.vue'
	import top from '@/components/common/top.vue'
	import productList from '@/static/data/categoryProductList.js'
	export default {
		data() {
			return {
				categoryList: [
					'新品','众筹','手机','电视','电脑','智能','家用电器','厨房电器','穿戴酷玩',
					'家居家装','电源插座','出行车载','耳机音箱','路由器','个护健康','日用百货',
					'床品家具','配件线材','办公用品','鞋服箱包','儿童用品','家装','礼品','服务',
					'会员卡','米粉卡','零售店'
				],
				categoryId: [
					'xinpin','zhongchou','shouji','dianshi','zhineng','jiayong','chufang','chuandai',
					'jiaju','dianyuan','chuxing','erji','luyou','gehu','riyong','chuangpin','peijian',
					'bangong','xiefu','ertong','jiazhuang','lipin','fuwu','huiyuan','mifen','lingshou',
				],
				product: productList,
				scrollId: '',
				currentCategoryIndex: 0,
				listHeight: [],
			}
		},
		created() {
			this.$nextTick(() => {
                    this._calculateHeight()
            });
			
		},
		methods: {
			scrollHandle(event) {
				let top = event.detail.scrollTop;
				let list = this.listHeight;
				let len = list.length;
				let arr = this.categoryId;
				for(let i = 0;i < len;i++){
					if(top > list[i] && top < list[i+1]){
						this.currentCategoryIndex = i;
						this.scrollId = arr[i];
					}
				}
			},
			clickHandle(index) {
				let arr = this.categoryId;
				this.scrollId = arr[index];
				this.currentCategoryIndex = index;
			},
			_calculateHeight() {
				let category = this.$refs.categoryList;
				let height = 0;
				this.listHeight.push(height);
				for(let i = 0;i < category.length;i++){
					let item = category[i];
					height += item.$el.clientHeight;
					this.listHeight.push(height);
				}
				console.log(this.listHeight);
			},
			scrollToLower() {
				console.log('aaaa');
			}
		},
		components: {
			tabBar,
			top,
		}
	}
</script>

<style lang="scss">
	.container{
		display: flex;
	}
	.left{
		flex: 1;
		height: 1120upx;
		border-right: 1upx solid #ccc;
		li{
			width: 170upx;
			height: 92upx;
			line-height: 92upx;
			text-align: center;
			font-size: 26upx;
		}
		.selected{
			color: #fb7d34;
			font-size: 34upx;
		}
	}
	.right{
		flex: 5;
		height: 1120upx;
		.title{
			height: 70upx;
			line-height: 70upx;
			margin: 20upx 0;
			text-align: center;
			position: relative;
			font-size: 28upx;
			&::before,
			&::after{
				content: '';
				position: absolute;
				top: 50%;
				width: 30upx;
				height: 2upx;
				background-color: rgba(0,0,0,.3);
			}
			&::before{
				left: 30%;
			}
			&::after{
				right: 30%;
			}
		}
		.list1{
			font-size: 26upx;
			li{
				display: inline-block;
				width: 33.2%;
				font-size: 20upx;
				text-align: center;
				margin-bottom: 36upx;
				.image{
					margin-bottom: 15upx;
				}
			}	
		}
		.image{
			width: 100upx;
			height: 100upx;
		}
	}
</style>
