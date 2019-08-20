import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
		tabBarIndex: 0,
		cartList: [],
	},
	mutations:{
		changeTabBarIndex(state,index){
			state.tabBarIndex = index;
		},
		changeCartList(state,cartItem){
			let arr = state.cartList;
			let isPush = true;
			arr.forEach((value,index)=>{
				if(value.typeId == cartItem.typeId && value.goodsId == cartItem.goodsId){
					value.num += 1;
					isPush = false;
				}
			})
			if(isPush){
				state.cartList.push(cartItem);
			}
		},
		delCartItem(state,index){
			state.cartList.splice(index,1);
		},
		addCartItemNum(state,index){
			let arr = state.cartList;
			console.log(arr[index]);
			arr[index]['num'] ++;
		},
		reduceCartItemNum(state,index){
			let arr = state.cartList;
			if(arr[index]['num'] > 1){
				arr[index]['num'] --;
			}
		},
	},
	actions:{
		changeTabBarIndex(commit,index){
			commit("changeTabBarIndex",index);
		},
		changeCartList(commit,cartItem){
			commit('changeCartList',cartItem);
		}
	}
})
export default store;