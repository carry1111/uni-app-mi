(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-index"],{"0720":function(i,e,t){var a=t("dbf3");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var c=t("4f06").default;c("973043de",a,!0,{sourceMap:!1,shadowMode:!1})},"07b7":function(i,e,t){"use strict";t.r(e);var a=t("9dd7"),c=t.n(a);for(var n in a)"default"!==n&&function(i){t.d(e,i,function(){return a[i]})}(n);e["default"]=c.a},2542:function(i,e,t){"use strict";var a=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",{staticClass:"toTop",on:{click:function(e){e=i.$handleEvent(e),i.backTop(e)}}})},c=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return c})},2833:function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAADk0lEQVRYR+2WT4gcVRDG6+vu4JjWoKAEFIx4VHMKBJFIYlgJKBFFI4IGFNFV1qzJMu91Lyw4IMvs625GMrh48CIeRNAkeshBDbKJGhGiQsjRg3r0D5owO7s421Xhhe7Qzs5Mz0zibfvUUO9V/ep79aoe6Bq+RqNxY6fTOSoi74dheHZcVxh34+Li4k2tVutzAPcS0Q3MPDEuyFgQFmB5efkrEdmytra22/O8OQAvAXhUKbU0amIjQzSbzS2rq6unLIDruruq1eqfNmgURTERHRKR/UEQfDkKyEgQGcBpEdnkuu6eHCAPmIG8ISKPjQIyNES9Xr/VdV17BJuY+aHZ2dm/e2WbgzDzk2EYnhxGkaEgLIDjOF9bh4MA8oBxHL/JzHOO4zyjlDpRBlIKkSTJbWmaLgHopGm6t58C3YGiKKoS0QKAA2UgAyEygG8ArFQqld3T09OXyrIq2nMQZn4+DMOP+u3tCzE/P7/V87zTAC5VKpWJUQEKxVoVESMiz/UD6QmRAZwF8Jfv+3unpqZaoyjQvdYY8zoRHQXwotb6g277OohGo3Fnp9M5c70A8oAWBECTmSfDMHyvCPIfiAzAKvCH7/t7rlWBHsWqicgw8ytFkKsQSZJsS9PUKnCXlU5rfXjQEWSt+6CITBDRRQBL7Xb7w1qtttZv38LCwnbHcc5bu4gcCoLgHft/BcICMPO3ItICsJmIjg+CKMyOrQBOish9RLSLiJpBEBwpgxARO/j2EZHSWieo1+v3uK57xgLYWZD1hFODIIwxbwOYbLfbt9RqtX9tUGPMu0T0gtZ6MwDpBZIrAeABZn4WgFVbwRjzKxGt5MPIGHMBQBnEd7ZutNaPFwrvCQAnHMe5u1qtWp/rviKEUur7LJnDiKLoNQDHlFK/ZxkNA/ExEe0MgmBboR/MEdFbvu/f3K+guyGyeAfXXdEhlXgYgB3XnzDzcQD3E9GrAH7WWj9YVhP2OKwS+bqxIOzmKIoOiMgigNszZz84jvNUv6Owa3opcfV2FMmHUSJfLyJIkmR7mqb/hGH4W1lX/V8gyoJ22zcgckU2lNhQYuzbEUXRT0R0Tmv98qhXsGx9kiQ7mPkcEe3QWv84qGN+BmCnUuqOftOwLFgvu21scRzbSTvZPV96te1HAHwhIr8Q0af2wTJO0K49DhHts8kR0TGt9dNFe8+HbhzH+0VkJn/0XAeI3MUFz/PUzMzMStHnZbWUGebCoGAsAAAAAElFTkSuQmCC"},"2dc0":function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=d(t("7e99")),c=d(t("6cb0")),n=t("2f62"),s=d(t("366f")),o=d(t("3b40"));function d(i){return i&&i.__esModule?i:{default:i}}function r(i){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),a.forEach(function(e){f(i,e,t[e])})}return i}function f(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var l={data:function(){return{indicatorDots:!0,autoplay:!1,interval:2e3,duration:500,isShowTop:!1,isShowPopup:!1,detail:{},animationData:{},typeId:0,goodsId:0}},computed:r({},(0,n.mapState)(["cartList"])),methods:r({},(0,n.mapMutations)(["changeCartList"]),{toPage:function(){uni.navigateTo({url:"../../pages/index/index"})},toCart:function(){uni.navigateTo({url:"../../pages/shopcart/index"})},backPre:function(){uni.navigateBack({delta:1})},buy:function(){var i=this;this.isShowPopup=!0;setTimeout(function(){i.isShowPopup=!1},1200);var e={typeId:this.typeId,goodsId:this.goodsId,num:1};this.changeCartList(e)}}),onPageScroll:function(i){i.scrollTop>500?this.isShowTop=!0:this.isShowTop=!1},onLoad:function(i){var e=this;this.typeId=i.typeId,this.goodsId=i.goodsId,s.default.forEach(function(t,a){if(t.typeId==i.typeId){var c=t.goodsList;c.forEach(function(t,a){t.goodsId==i.goodsId&&(e.detail=t)})}})},onShow:function(){var i=uni.createAnimation({duration:1e3,timingFunction:"ease"});this.animation=i,i.translateY(-80).step(),this.animationData=i.export()},components:{backTop:a.default,popup:c.default,count:o.default}};e.default=l},"366f":function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=[{typeId:0,typeName:"phone",goodsList:[{goodsId:0,imageUrl:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d2bc1c7ff8c71628a28a5fce24caf245.jpg?thumb=1&w=360&h=360","//i8.mifile.cn/v1/a1/f9cea6ca-2711-a7da-dd94-4468f0d591ec.webp","//i8.mifile.cn/v1/a1/1536b35d-2a41-9343-8a53-b8f5a679eede.webp","//i8.mifile.cn/v1/a1/5d30814e-27d0-6bd5-8515-f05afefffae8.webp"],name:"小米8 青春版",info:"索尼2400万自拍，超级夜景",price:1049,oldPrice:1249},{goodsId:1,imageUrl:["https://i8.mifile.cn/v1/a1/249ac9d7-680d-5014-2009-8a49a0da2a7c.webp","//i8.mifile.cn/v1/a1/f6969241-5174-61b3-a06a-a3bcfab69a75.webp","//i8.mifile.cn/v1/a1/99b9acdd-95d2-d7cc-2806-c900f38265f9.webp"],name:"小米8 屏幕指纹版",info:"全新升级十大功能，骁龙845",price:1999,oldPrice:1249},{goodsId:2,imageUrl:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/354cea8ad076cee24738091c68f95b07.jpg?thumb=1&w=360&h=360","//i8.mifile.cn/v1/a1/80985354-0503-fa3f-1a9c-aa56ba2d682d.webp","//i8.mifile.cn/v1/a1/6b474a18-ead1-b287-9e58-07b281487209.webp"],name:"黑鲨游戏手机 Helo",info:"双液冷，更能打",price:3199,oldPrice:1249},{goodsId:3,imageUrl:["https://i8.mifile.cn/v1/a1/38a0996b-d3b7-a8f7-6997-b97004599a8e!360x360.webp","//i8.mifile.cn/v1/a1/3b58a57d-1f3e-9e6d-94b0-5c1ec1539d29.webp","//i8.mifile.cn/v1/a1/55286d9b-1d33-36d5-f1c2-2ea3cef483d6.webp","//i8.mifile.cn/v1/a1/bdc9eaf3-0470-8a63-1020-c8812def8263.webp"],name:"红米6",info:"小屏高性能的双摄手机",price:729,oldPrice:1249},{goodsId:4,imageUrl:["https://i8.mifile.cn/v1/a1/2c506517-9477-c928-8e77-bee18b6818a1!360x360.webp","//i8.mifile.cn/v1/a1/fe4285de-a35c-8ec5-dfbb-ff73696e753c.webp","//i8.mifile.cn/v1/a1/97f04715-4a9f-7a82-848f-2c1df63e29f7.webp","//i8.mifile.cn/v1/a1/72f637e1-4d84-89db-996e-ca730c76a593.webp"],name:"红米6A",info:"好看耐用/轻巧省心",price:549,oldPrice:1249},{goodsId:5,imageUrl:["https://i8.mifile.cn/v1/a1/a20cff3d-2bd4-b98f-4eb5-fb08d8b43a2e!360x360.webp","//i8.mifile.cn/v1/a1/3c359e84-a7ad-96a1-ed82-8e204ca0e7b6.webp","//i8.mifile.cn/v1/a1/f6ee756e-72dc-cfd4-f5c5-c7daa495ba70.webp","//i8.mifile.cn/v1/a1/0f5a44c9-5dff-c034-2d93-d7f9d04d99e8.webp"],name:"小米6X",info:"前置2000万，后置2000万",price:999,oldPrice:1249},{goodsId:6,imageUrl:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a183eae8ce729005a1e1bf2907f6d51d.png?thumb=1&w=360&h=360","//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f8e958393b1aad3dc080151abbea1d9.png?f=webp","//cdn.cnbj1.fds.api.mi-img.com/mi-mall/613f92a2d215f5e685e8bb6eca7cb34b.png?f=webp","//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ded092175206c2a1bf9dbebc5cbfa61e.png?f=webp"],name:"小米Play（附带流量卡）",info:"自带高速流量",price:899,oldPrice:1249},{goodsId:7,imageUrl:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a5be84661f1b82d1edef18f3a50a1b6f.jpg?thumb=1&w=360&h=360","//i8.mifile.cn/v1/a1/34a5d832-cb5b-a403-d473-3ae99d8699b9.webp","//i8.mifile.cn/v1/a1/3922d209-a3f5-8f21-2c01-13e1ba2452e9.webp","//i8.mifile.cn/v1/a1/676aebbd-3a5e-c431-4a69-43016422895a.webp"],name:"小米平板4",info:"大屏、长续航、超薄电脑",price:1099,oldPrice:1249}]},{typeId:1,typeName:"television",goodsList:[{goodsId:0,imageUrl:["https://i8.mifile.cn/v1/a1/6017d231-019c-a76d-e54a-0bb6948bfd0d!360x360.webp","//i8.mifile.cn/v1/a1/67031c46-8c12-133e-25b7-56cbbc277939.webp"],name:'电视4A 43" 青春版',info:"人工智能语音，FHD全高清屏",price:1499,oldPrice:4999},{goodsId:1,imageUrl:["http://i8.mifile.cn/v1/a1/d342ccbf-e3d6-2dcc-47a3-18656f28a0cc!360x360.webp"],name:"小米电视4A 32英寸",info:"人工智能系统，高清液晶屏",price:899,oldPrice:4999},{goodsId:2,imageUrl:["http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7d4d94788f8591e5557a4c23c3ba4307.jpg?thumb=1&w=360&h=360","//i8.mifile.cn/v1/a1/9fd60730-764d-2ea9-c983-161f3de3d107.webp"],name:"小米电视4A 58英寸",info:"4K HDR，人工智能语音系统",price:3599,oldPrice:4999},{goodsId:3,imageUrl:["http://i8.mifile.cn/v1/a1/c547c9f7-1703-a6ae-79e0-4e27912595f8!360x360.webp","//i8.mifile.cn/v1/a1/1fe20c3d-ad2b-fc82-e6f5-56de3b830051.webp"],name:"小米电视4C 50英寸",info:"4K HDR，钢琴烤漆",price:1899,oldPrice:2099},{goodsId:4,imageUrl:["http://i8.mifile.cn/v1/a1/4e925115-fde0-0364-814e-34471fda46e5!360x360.webp","//i8.mifile.cn/v1/a1/ee70b3f7-8717-a26e-b746-849faec2ad2a.webp"],name:"小米电视4X 55英寸",info:"4K HDR，人工智能语音",price:2299,oldPrice:2399},{goodsId:5,imageUrl:["http://i8.mifile.cn/v1/a1/b509d62f-a10a-6559-94f4-852b401815fb!360x360.webp","//i8.mifile.cn/v1/a1/ca755c3a-ccc3-ad91-b2e9-91bb8d8405d9.jpg"],name:"小米电视4A 65英寸",info:"4K HDR，人工智能语音系统",price:2999,oldPrice:3699}]},{typeId:2,typeName:"appliances",goodsList:[{goodsId:0,imageUrl:["http://i8.mifile.cn/v1/a1/c585ed38-bee4-2f3c-c413-a1af154a74b3!360x360.webp","//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0d52800d097eda2ecbbea3f7361936f7.jpg"],name:"米家互联网空调（一级能效）",info:"1.5匹，全直流变频",price:2299,oldPrice:2699},{goodsId:1,imageUrl:["http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/552e42b8706ee8d0bd3e048d2a5c4316.jpg?thumb=1&w=360&h=360","//i8.mifile.cn/v1/a1/b3fb5566-ce77-2097-c5ca-e97e39c4b26c.webp"],name:"米家洗烘一体机Pro",info:"支持语音遥控、智能投放",price:2999,oldPrice:2699},{goodsId:2,imageUrl:["http://i8.mifile.cn/v1/a1/75f5a1ad-e2c6-36a9-fd56-66d253cc0469!360x360.webp","//i8.mifile.cn/v1/a1/b3fb5566-ce77-2097-c5ca-e97e39c4b26c.webp"],name:"米家空调",info:"大1匹，静音，快速制冷热",price:1699,oldPrice:1799},{goodsId:3,imageUrl:["http://i8.mifile.cn/v1/a1/27721d21-782a-32e8-772b-462652d9acde!360x360.webp","//i8.mifile.cn/v1/a1/1042d213-8b5b-478b-1816-f5dde3d6d265.webp"],name:"米家洗烘一体机",info:"洗得净、烘得干",price:2299,oldPrice:2699},{goodsId:4,imageUrl:["http://i8.mifile.cn/v1/a1/ce8d4b39-18b3-5b8e-ea74-5a2c86856e20!360x360.webp","//i8.mifile.cn/v1/a1/887939d4-aefe-f051-54da-b30f837d6c69.webp"],name:"米家互联网空调C1（一级能效）",info:"1.5匹，自清洁，全直流变频",price:2499,oldPrice:2799},{goodsId:5,imageUrl:["http://i8.mifile.cn/v1/a1/33c6d391-82a0-0fd2-2d0e-fb59f4679b6c!360x360.webp","//i8.mifile.cn/v1/a1/00678823-f015-49b4-4db1-32a1d9b5df06.webp"],name:"Redmi波轮洗衣机1A",info:"大容量一次洗净全家衣物",price:899,oldPrice:2699}]}],c=a;e.default=c},"3b40":function(i,e,t){"use strict";t.r(e);var a=t("41c7"),c=t("91e2");for(var n in c)"default"!==n&&function(i){t.d(e,i,function(){return c[i]})}(n);t("3e64");var s=t("2877"),o=Object(s["a"])(c["default"],a["a"],a["b"],!1,null,"1a320f23",null);e["default"]=o.exports},"3e64":function(i,e,t){"use strict";var a=t("840a"),c=t.n(a);c.a},"41c7":function(i,e,t){"use strict";var a=function(){var i=this,e=i.$createElement,t=i._self._c||e;return i.num>0?t("v-uni-view",{staticClass:"circle"},[i._v(i._s(i.num))]):i._e()},c=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return c})},5367:function(i,e,t){"use strict";var a=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",{staticClass:"popup"},[t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{staticClass:"text"},[i._v("成功加入购物车")])],1)],1)},c=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return c})},5852:function(i,e,t){e=i.exports=t("2350")(!1),e.push([i.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.header[data-v-ec4fc812]{position:relative}.header .back[data-v-ec4fc812]{position:absolute;left:%?20?%;top:%?20?%;z-index:100;width:%?64?%;height:%?64?%;line-height:%?64?%;border-radius:%?32?%;text-align:center;background-color:rgba(0,0,0,.6)}.header .back[data-v-ec4fc812]:after{content:"";position:absolute;top:50%;left:50%;width:%?18?%;height:%?18?%;border-top:%?3?% solid #fff;border-left:%?3?% solid #fff;-webkit-transform:translate(-30%,-50%) rotate(-45deg);-ms-transform:translate(-30%,-50%) rotate(-45deg);transform:translate(-30%,-50%) rotate(-45deg)}.swiper[data-v-ec4fc812]{height:%?800?%}.swiper .swiper-item[data-v-ec4fc812]{width:%?750?%;height:%?800?%}.swiper .swiper-item .swiper-img[data-v-ec4fc812]{width:%?750?%;height:%?800?%}.section[data-v-ec4fc812]{padding-left:%?30?%;padding-right:%?30?%}.product-name[data-v-ec4fc812]{padding-top:%?30?%;padding-bottom:%?10?%}.product-info[data-v-ec4fc812]{padding-top:%?10?%;padding-bottom:%?10?%;font-size:%?26?%;color:rgba(0,0,0,.54)}.price .sign[data-v-ec4fc812]:before{content:"\\A5";position:absolute;left:0;top:0;text-decoration:none}.price .new[data-v-ec4fc812]{position:relative;color:#ff6700;padding-left:%?24?%;font-size:%?40?%}.price .new[data-v-ec4fc812]:before{font-size:%?35?%}.price .old[data-v-ec4fc812]{position:relative;padding-left:%?10?%;margin-left:%?10?%;text-decoration:line-through;font-size:%?20?%;color:rgba(0,0,0,.5)}.price .old[data-v-ec4fc812]:before{font-size:%?20?%}.product-detail[data-v-ec4fc812]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:%?140?%;margin-top:%?20?%;overflow-x:auto;text-align:center}.product-detail .item[data-v-ec4fc812]{width:%?170?%;height:%?140?%;font-size:%?25?%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border-right:%?1?% solid #d9d9d9}.product-detail .item .image[data-v-ec4fc812]{width:%?40?%;height:%?40?%}.product-detail .item .info[data-v-ec4fc812]{overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}.cuxiao[data-v-ec4fc812]{margin:%?14?% 0;font-size:%?28?%}.cuxiao .promotion[data-v-ec4fc812]{background-color:#fafafa}.delivery[data-v-ec4fc812]{margin:%?10?% 0;font-size:%?28?%}.delivery .con[data-v-ec4fc812]{background-color:#fafafa}.delivery .item3 .center[data-v-ec4fc812]{color:rgba(0,0,0,.54);font-size:%?22?%}.three-column[data-v-ec4fc812]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?20?%;border-left:%?1?% solid #eee;border-top:%?1?% solid #eee}.three-column .left[data-v-ec4fc812]{color:rgba(0,0,0,.54);width:%?100?%}.three-column .center[data-v-ec4fc812]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.three-column .right[data-v-ec4fc812]{width:%?40?%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;color:#ccc}.comment[data-v-ec4fc812]{margin:%?16?% %?30?%}.comment .swiper[data-v-ec4fc812]{height:%?450?%}.comment .swiper .item[data-v-ec4fc812]{padding:%?10?% %?20?%;border:%?1?% solid #eee}.comment .swiper .item .comment-info[data-v-ec4fc812]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?10?%;font-size:%?24?%}.comment .swiper .item .comment-info .head-portrait[data-v-ec4fc812]{width:%?100?%}.comment .swiper .item .comment-info .head-portrait .img[data-v-ec4fc812]{width:%?80?%;height:%?80?%;border-radius:%?80?%}.comment .swiper .item .comment-info .name[data-v-ec4fc812]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.comment .swiper .item .comment-info .up[data-v-ec4fc812]{width:%?100?%}.comment .swiper .item .content[data-v-ec4fc812]{margin:%?10?% 0 %?20?%;font-size:%?26?%}.comment .swiper .item .photo .img[data-v-ec4fc812]{width:%?170?%;height:%?140?%;margin-right:%?15?%;border-radius:%?14?%}.comment .swiper .item .reply[data-v-ec4fc812]{margin:%?10?% 0;font-size:%?26?%}.comment .swiper .item .reply .title[data-v-ec4fc812]{color:#ff6700;margin-right:%?10?%}.comment .more[data-v-ec4fc812]{margin:%?40?% 0;text-align:center;color:#4e72a5}.comment .more .more-comment[data-v-ec4fc812]:after{content:"\\25BA";font-size:%?6?%;vertical-align:middle;display:inline-block;-webkit-transform:scale(.8,1.5);-ms-transform:scale(.8,1.5);transform:scale(.8,1.5);font-family:Times New Roman}.image1[data-v-ec4fc812]{width:100%;display:block}.backTop[data-v-ec4fc812]{position:fixed;bottom:%?160?%;right:%?60?%;z-index:100}.confirm-h5[data-v-ec4fc812]{position:fixed;-webkit-box-sizing:border-box;box-sizing:border-box;bottom:%?20?%;left:0;width:100%;padding:0 %?25?%}.confirm[data-v-ec4fc812]{position:fixed;-webkit-box-sizing:border-box;box-sizing:border-box;bottom:%?-140?%;left:0;width:100%;padding:0 %?25?%}.confirm-h5 .container[data-v-ec4fc812],.confirm .container[data-v-ec4fc812]{width:100%;height:%?110?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#fff;border-radius:%?10?%;-webkit-box-shadow:0 %?2?% %?4?% %?-1?% rgba(0,0,0,.2),0 %?4?% %?5?% rgba(0,0,0,.14),0 %?1?% %?10?% rgba(0,0,0,.12);box-shadow:0 %?2?% %?4?% %?-1?% rgba(0,0,0,.2),0 %?4?% %?5?% rgba(0,0,0,.14),0 %?1?% %?10?% rgba(0,0,0,.12)}.confirm-h5 .img[data-v-ec4fc812],.confirm .img[data-v-ec4fc812]{width:%?40?%;height:%?40?%}.confirm-h5 .page[data-v-ec4fc812],.confirm .page[data-v-ec4fc812]{width:%?120?%;font-size:%?26?%;text-align:center}.confirm-h5 .shop-car[data-v-ec4fc812],.confirm .shop-car[data-v-ec4fc812]{position:relative;width:%?120?%;font-size:%?26?%;text-align:center}.confirm-h5 .shop-car .count[data-v-ec4fc812],.confirm .shop-car .count[data-v-ec4fc812]{position:absolute;top:0;left:50%}.confirm-h5 .btn[data-v-ec4fc812],.confirm .btn[data-v-ec4fc812]{width:%?250?%;height:%?70?%;line-height:%?70?%;margin-right:%?20?%;background-color:#ff6700;border-radius:%?35?%;color:#fff;font-size:%?26?%}',""])},"6cb0":function(i,e,t){"use strict";t.r(e);var a=t("5367"),c=t("07b7");for(var n in c)"default"!==n&&function(i){t.d(e,i,function(){return c[i]})}(n);t("6dae");var s=t("2877"),o=Object(s["a"])(c["default"],a["a"],a["b"],!1,null,"f69823f0",null);e["default"]=o.exports},"6dae":function(i,e,t){"use strict";var a=t("0720"),c=t.n(a);c.a},"6e71":function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADm0lEQVRYR+2XX2gcVRTGvzPrliYpJAERadEEBUGRhlJLKeJD37RapSCxqA/+KYl/YMs2mXNGpHagpcy9sySKRI2iVSsiUauUgqjQF32QWnypiviyYLXagrhRMogb75ELSVlsdjPUSfvivA1zz/1+c893zz2XcJkfusz6+B+AkiQZCoLgSwDllnQcYOa9lyI9pKpkjNlSKpVWeUHn3C4iWsfMWy8JwL9FjDEPAHhZRHr8N2PMWiJ6eyVgnHNPXmDCWq12k3PuGyK6LgzD+vT0dHl2dna3qq4pEKKfiCqquuUCgDiOg+7u7j9VdaeIHClQ9PxUSZLcQUTH+vr6Vi+5Da21XwD4dKWMaIzZS0T3MvPQkgDGmBcBXCMid63EClhrPwTwKzM/2m4FRlR1n4isWyGAH1X1oIi8sCRArVbb5Jw7US6X+6vVaqNIiDRNr1LVs6q6WUROLAngnd9oNLwRt0VR9LEHsNbeSkStxSo3FxH9Mj4+/p0PSJLkTiI66g04OjrabHsWGGO+JqK3mDnxxSpN0zMArs6t2jJQVX8QkYGFH3kGwA5m3uDf2wJYaw+r6ioRue9iRNvFWGuPquo5EdnVESBJkj1BEDzGzDcUCWCM+QnAfhF5qSOAMWYrER3PsqwnjuOsCIgWA24SkZMdASYnJ/uazeZvzrnboij6vCCA7ar6fm9vb483YEeAhYOoTkQTzPx8EQDGmJiItjPzxsX5OnZE1tojqtoQkUcKAjgG4IyIjOQCMMY8TUQHihBfnMM5NxJF0Su5AKamptZkWXZLkQADAwOfDQ8P/50LoEjhdnPl6orTNL3HOXc/gKaqHl4sz8sBJknSS0QCYD0RnXLOJVEUzbbGLQtgjKkASInoAwC+TfNH9MPM/HongDRNe5xzXwEIiOgjVd0B4K8gCNaHYTiXKwUTExNd8/PzvhY8FEXROz4oTdN9qrony7L+OI5dh5LLAJ4YHBy83ue8Vqtd6Zw7qaqvisj+XABpmt6sqqfK5fLaarX680JtuJGIvi2VSteOjY2d7gDwhqqWROTBxTHGmNeIqJuZd+YCWGhI/wAgzPycD7LWPg7gIDP3d0qBMSYEUAmCYGMYhudmZmZK9Xr9eyI6xMznt/ayHrDW7gbwLIB3Afi7wzZVHRWRQzk94Lvp9wDcDuCKrq6uDZVK5fdcK9CydHcD8PeFJhG9ycyfLLcD/HdfR+bm5p5S1aGL3gV5hP7LmH8AQWeelt1dwu0AAAAASUVORK5CYII="},"7e99":function(i,e,t){"use strict";t.r(e);var a=t("2542"),c=t("d207");for(var n in c)"default"!==n&&function(i){t.d(e,i,function(){return c[i]})}(n);t("dc6f");var s=t("2877"),o=Object(s["a"])(c["default"],a["a"],a["b"],!1,null,"10e39124",null);e["default"]=o.exports},"7f99":function(i,e,t){"use strict";t.r(e);var a=t("e66e"),c=t("8e70");for(var n in c)"default"!==n&&function(i){t.d(e,i,function(){return c[i]})}(n);t("aaeb");var s=t("2877"),o=Object(s["a"])(c["default"],a["a"],a["b"],!1,null,"ec4fc812",null);e["default"]=o.exports},"829f":function(i,e,t){e=i.exports=t("2350")(!1),e.push([i.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.circle[data-v-1a320f23]{width:%?28?%;height:%?28?%;line-height:%?28?%;border-radius:%?14?%;background:#ed4d41;color:#fff;font-size:%?12?%}',""])},"82e8":function(i,e,t){var a=t("5852");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var c=t("4f06").default;c("709969f9",a,!0,{sourceMap:!1,shadowMode:!1})},"840a":function(i,e,t){var a=t("829f");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var c=t("4f06").default;c("da31d9c6",a,!0,{sourceMap:!1,shadowMode:!1})},"8d65":function(i,e){i.exports="data:image/png;base64,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"},"8e70":function(i,e,t){"use strict";t.r(e);var a=t("2dc0"),c=t.n(a);for(var n in a)"default"!==n&&function(i){t.d(e,i,function(){return a[i]})}(n);e["default"]=c.a},"91e2":function(i,e,t){"use strict";t.r(e);var a=t("f9ca"),c=t.n(a);for(var n in a)"default"!==n&&function(i){t.d(e,i,function(){return a[i]})}(n);e["default"]=c.a},"9dd7":function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={};e.default=a},aaeb:function(i,e,t){"use strict";var a=t("82e8"),c=t.n(a);c.a},b041:function(i,e){i.exports=function(i){return"string"!==typeof i?i:(/^['"].*['"]$/.test(i)&&(i=i.slice(1,-1)),/["'() \t\n]/.test(i)?'"'+i.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':i)}},b3a8:function(i,e,t){var a=t("b041");e=i.exports=t("2350")(!1),e.push([i.i,".toTop[data-v-10e39124]{width:%?76?%;height:%?76?%;border-radius:%?38?%;border:%?1?% solid #ccc;background:url("+a(t("8d65"))+") no-repeat 50% #fafafa;background-size:%?76?%}",""])},b6e3:function(i,e,t){var a=t("b3a8");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var c=t("4f06").default;c("0fc15890",a,!0,{sourceMap:!1,shadowMode:!1})},d207:function(i,e,t){"use strict";t.r(e);var a=t("e8bd"),c=t.n(a);for(var n in a)"default"!==n&&function(i){t.d(e,i,function(){return a[i]})}(n);e["default"]=c.a},dbf3:function(i,e,t){e=i.exports=t("2350")(!1),e.push([i.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.popup[data-v-f69823f0]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:999}.content[data-v-f69823f0]{position:absolute;top:50%;left:50%;width:%?400?%;height:%?300?%;margin-left:%?-200?%;margin-top:%?-150?%;text-align:center;color:#fff;background-color:rgba(0,0,0,.7)}.content .text[data-v-f69823f0]{padding-top:%?100?%}',""])},dc6f:function(i,e,t){"use strict";var a=t("b6e3"),c=t.n(a);c.a},e66e:function(i,e,t){"use strict";var a=function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"back",on:{click:function(e){e=i.$handleEvent(e),i.backPre(e)}}}),a("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":i.indicatorDots,autoplay:i.autoplay,interval:i.interval,duration:i.duration}},i._l(i.detail.imageUrl,function(i,e){return a("v-uni-swiper-item",{key:e},[a("v-uni-view",{staticClass:"swiper-item uni-bg-red"},[a("v-uni-image",{staticClass:"swiper-img",attrs:{src:i}})],1)],1)}),1)],1),a("v-uni-view",{staticClass:"section product-name"},[i._v(i._s(i.detail.name))]),a("v-uni-view",{staticClass:"section product-info"},[a("font",{attrs:{color:"#ff4a00"}},[i._v("「6GB+64GB 限时秒杀价1099元」")]),i._v('与小米9相同的超级夜景算法 / 2400万旗舰自拍 / Dual PD 双核对焦 / 潮流镜面渐变色 / 7.5mm超薄机身 / 6.26"小刘海全面屏 / 骁龙660AIE处理器')],1),a("v-uni-view",{staticClass:"section price"},[a("span",{staticClass:"new sign"},[i._v(i._s(i.detail.price))]),a("span",{staticClass:"old sign"},[i._v(i._s(i.detail.oldPrice))])]),a("v-uni-view",{staticClass:"section product-detail"},[a("v-uni-view",{staticClass:"item"},[a("img",{staticClass:"image",attrs:{src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png"}}),a("v-uni-view",{staticClass:"text"},[i._v("cpu")]),a("v-uni-view",{staticClass:"info"},[i._v("骁龙660八核")])],1),a("v-uni-view",{staticClass:"item"},[a("img",{staticClass:"image",attrs:{src:"https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png"}}),a("v-uni-view",{staticClass:"text"},[i._v("双摄像头")]),a("v-uni-view",{staticClass:"info"},[i._v("1200万+500万像素")])],1),a("v-uni-view",{staticClass:"item"},[a("img",{staticClass:"image",attrs:{src:"https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png"}}),a("v-uni-view",{staticClass:"text"},[i._v("超大屏")]),a("v-uni-view",{staticClass:"info"},[i._v("6.26英寸")])],1),a("v-uni-view",{staticClass:"item"},[a("img",{staticClass:"image",attrs:{src:"https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png"}}),a("v-uni-view",{staticClass:"text"},[i._v("屏幕分辨率")]),a("v-uni-view",{staticClass:"info"},[i._v("2280×1080")])],1),a("v-uni-view",{staticClass:"item"},[a("img",{staticClass:"image",attrs:{src:"https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png"}}),a("v-uni-view",{staticClass:"text"},[i._v("极速畅玩")]),a("v-uni-view",{staticClass:"info"},[i._v("6GB")])],1),a("v-uni-view",{staticClass:"item"},[a("img",{staticClass:"image",attrs:{src:"https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png"}}),a("v-uni-view",{staticClass:"text"},[i._v("存储容量")]),a("v-uni-view",{staticClass:"info"},[i._v("64GB")])],1),a("v-uni-view",{staticClass:"item"},[a("img",{staticClass:"image",attrs:{src:"https://i8.mifile.cn/b2c-mimall-media/52ad10a73685342e437e44ea3d29cbff.png"}}),a("v-uni-view",{staticClass:"text"},[i._v("薄")]),a("v-uni-view",{staticClass:"info"},[i._v("7.5mm")])],1),a("v-uni-view",{staticClass:"item"},[a("img",{staticClass:"image",attrs:{src:"https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png"}}),a("v-uni-view",{staticClass:"text"},[i._v("持久待机")]),a("v-uni-view",{staticClass:"info"},[i._v("3350mAh")])],1),a("v-uni-view",{staticClass:"item"},[a("img",{staticClass:"image",attrs:{src:"https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png"}}),a("v-uni-view",{staticClass:"text"},[i._v("运营商网络")]),a("v-uni-view",{staticClass:"info"},[i._v("4G全网通")])],1),a("v-uni-view",{staticClass:"item"},[a("img",{staticClass:"image",attrs:{src:"https://i8.mifile.cn/b2c-mimall-media/bfd5ba9ae72c365dee42db14dfae4b0f.png"}}),a("v-uni-view",{staticClass:"text"},[i._v("网络模式")]),a("v-uni-view",{staticClass:"info"},[i._v("双卡双待")])],1)],1),a("v-uni-view",{staticClass:"section cuxiao"},[a("v-uni-view",{staticClass:"promotion three-column"},[a("v-uni-view",{staticClass:"left"},[i._v("促销")]),a("v-uni-view",{staticClass:"center"},[a("v-uni-view",{},[i._v("小米青春版 赠贴膜")]),a("v-uni-view",{},[i._v("赠米粉卡，最高含100元话费")])],1),a("v-uni-view",{staticClass:"right"},[i._v(">")])],1)],1),a("v-uni-view",{staticClass:"section delivery"},[a("v-uni-view",{staticClass:"con"},[a("v-uni-view",{staticClass:"item three-column"},[a("v-uni-view",{staticClass:"left"},[i._v("已选")]),a("v-uni-view",{staticClass:"center"},[i._v("小米8 青春版 6GB+64GB 深空灰 x 1")]),a("v-uni-view",{staticClass:"right"},[i._v(">")])],1),a("v-uni-view",{staticClass:"item three-column"},[a("v-uni-view",{staticClass:"left"},[i._v("送至")]),a("v-uni-view",{staticClass:"center"},[i._v("北京市 东城区")]),a("v-uni-view",{staticClass:"right"},[i._v(">")])],1),a("v-uni-view",{staticClass:"item3 three-column"},[a("v-uni-view",{staticClass:"center"},[i._v("小米自营 小米发货 7天无理由退货")]),a("v-uni-view",{staticClass:"right"},[i._v(">")])],1)],1)],1),a("v-uni-view",{staticClass:"comment"},[a("v-uni-swiper",{staticClass:"swiper"},[a("v-uni-swiper-item",{staticClass:"swiper-item"},[a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"comment-info"},[a("v-uni-view",{staticClass:"head-portrait"},[a("img",{staticClass:"img",attrs:{src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/4d2e02e0bdb73c9bbed9fbf29ba4a953.webp"}})]),a("v-uni-view",{staticClass:"name"},[i._v("廖冬英"),a("v-uni-view",[i._v("2019-03-01")])],1),a("v-uni-view",{staticClass:"up"},[i._v("点赞")])],1),a("v-uni-view",{staticClass:"content"},[i._v("很漂亮，大小也合适，照相棒棒哒没毛病！值了")]),a("v-uni-view",{staticClass:"photo"},[a("img",{staticClass:"img",attrs:{src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/8e44e245b45da353ec93b54a3680536e.webp"}}),a("img",{staticClass:"img",attrs:{src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c4d39101c25b7438983448860f2950c1.webp"}}),a("img",{staticClass:"img",attrs:{src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/b0e9cb09a0779e19c6b815bc4a7721c4.webp"}})]),a("v-uni-view",{staticClass:"reply"},[a("v-uni-text",{staticClass:"title"},[i._v("官方回复:")]),i._v("五一来了，我带着你，你带着小米8 青春版。三亚也好，丽江也罢，横穿唐古...")],1)],1)],1),a("v-uni-swiper-item",{staticClass:"swiper-item"},[a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"comment-info"},[a("v-uni-view",{staticClass:"head-portrait"},[a("img",{staticClass:"img",attrs:{src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/4d2e02e0bdb73c9bbed9fbf29ba4a953.webp"}})]),a("v-uni-view",{staticClass:"name"},[i._v("廖冬英"),a("v-uni-view",[i._v("2019-03-01")])],1),a("v-uni-view",{staticClass:"up"},[i._v("点赞")])],1),a("v-uni-view",{staticClass:"content"},[i._v("很漂亮，大小也合适，照相棒棒哒没毛病！值了")]),a("v-uni-view",{staticClass:"photo"},[a("img",{staticClass:"img",attrs:{src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/8e44e245b45da353ec93b54a3680536e.webp"}}),a("img",{staticClass:"img",attrs:{src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c4d39101c25b7438983448860f2950c1.webp"}}),a("img",{staticClass:"img",attrs:{src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/b0e9cb09a0779e19c6b815bc4a7721c4.webp"}})]),a("v-uni-view",{staticClass:"reply"},[a("v-uni-text",{staticClass:"title"},[i._v("官方回复:")]),i._v("五一来了，我带着你，你带着小米8 青春版。三亚也好，丽江也罢，横穿唐古...")],1)],1)],1),a("v-uni-swiper-item",{staticClass:"swiper-item"},[a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"comment-info"},[a("v-uni-view",{staticClass:"head-portrait"},[a("img",{staticClass:"img",attrs:{src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/4d2e02e0bdb73c9bbed9fbf29ba4a953.webp"}})]),a("v-uni-view",{staticClass:"name"},[i._v("廖冬英"),a("v-uni-view",[i._v("2019-03-01")])],1),a("v-uni-view",{staticClass:"up"},[i._v("点赞")])],1),a("v-uni-view",{staticClass:"content"},[i._v("很漂亮，大小也合适，照相棒棒哒没毛病！值了")]),a("v-uni-view",{staticClass:"photo"},[a("img",{staticClass:"img",attrs:{src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/8e44e245b45da353ec93b54a3680536e.webp"}}),a("img",{staticClass:"img",attrs:{src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c4d39101c25b7438983448860f2950c1.webp"}}),a("img",{staticClass:"img",attrs:{src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/b0e9cb09a0779e19c6b815bc4a7721c4.webp"}})]),a("v-uni-view",{staticClass:"reply"},[a("v-uni-text",{staticClass:"title"},[i._v("官方回复:")]),i._v("五一来了，我带着你，你带着小米8 青春版。三亚也好，丽江也罢，横穿唐古...")],1)],1)],1)],1),a("v-uni-view",{staticClass:"more"},[a("span",{staticClass:"more-comment"},[i._v("更多评论")])])],1),a("img",{staticClass:"image1",attrs:{src:"//i8.mifile.cn/v1/a1/9c3e29dc-151f-75cb-b0a5-c423a5d13926.webp?w=1080&h=849&bg=C5DFEA"}}),a("img",{staticClass:"image1",attrs:{src:"//i8.mifile.cn/v1/a1/f442b971-379f-5030-68aa-3b0accb8c2b9.webp?w=1080&h=829&bg=6F61AE"}}),a("img",{staticClass:"image1",attrs:{src:"//i8.mifile.cn/v1/a1/63b700b6-643e-ec18-fdf3-da66b4b4173f.webp?w=1080&h=750&bg=F5F2F9"}}),a("img",{staticClass:"image1",attrs:{src:"//i8.mifile.cn/v1/a1/e9dbf276-193e-11c4-99a6-3097fde82350.webp?w=1080&h=942&bg=313B8F"}}),a("img",{staticClass:"image1",attrs:{src:"//i8.mifile.cn/v1/a1/1249d3ee-2990-a2b4-28d9-f719c2417b1f.webp?w=1080&h=1080&bg=3442A3"}}),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:i.isShowTop,expression:"isShowTop"}],staticClass:"backTop"},[a("back-top")],1),a("v-uni-view",{staticClass:"confirm-h5"},[a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"page",on:{click:function(e){e=i.$handleEvent(e),i.toPage(e)}}},[a("v-uni-view",[a("img",{staticClass:"img",attrs:{src:t("2833")}})]),a("v-uni-view",[i._v("首页")])],1),a("v-uni-view",{staticClass:"shop-car",on:{click:function(e){e=i.$handleEvent(e),i.toCart(e)}}},[a("v-uni-view",[a("img",{staticClass:"img",attrs:{src:t("6e71")}})]),a("v-uni-view",[i._v("购物车")]),a("count",{staticClass:"count",attrs:{num:this.cartList.length}})],1),a("v-uni-button",{staticClass:"btn",on:{click:function(e){e=i.$handleEvent(e),i.buy(e)}}},[i._v("加入购物车")])],1)],1),i.isShowPopup?a("popup"):i._e()],1)},c=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return c})},e8bd:function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={methods:{backTop:function(){uni.pageScrollTo({scrollTop:0,duration:300})}}};e.default=a},f9ca:function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{num:{type:Number,default:0}}};e.default=a}}]);