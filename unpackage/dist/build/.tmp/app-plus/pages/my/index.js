(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/index"],{2087:function(t,e,n){},"52ba":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"Hello",userInfo:{}}},onLoad:function(){},methods:{getUserInfo:function(t){console.log(t),this.userInfo=t.detail.userInfo}}};e.default=a},"67e8":function(t,e,n){"use strict";n.r(e);var a=n("52ba"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},"69f5":function(t,e,n){"use strict";n.r(e);var a=n("d702"),o=n("67e8");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("ac1f");var u=n("2877"),f=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=f.exports},ac1f:function(t,e,n){"use strict";var a=n("2087"),o=n.n(a);o.a},d702:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"header"},[t._v("登录/注册")]),n("view",{staticClass:"order"},[t._v("订单")]),n("button",{attrs:{"open-type":"getUserInfo",eventid:"791f1686-0"},on:{getuserinfo:t.getUserInfo}},[t._v("获取用户信息")]),n("open-data",{attrs:{type:"userNickName",mpcomid:"791f1686-0"}}),n("open-data",{attrs:{type:"userAvatarUrl",mpcomid:"791f1686-1"}})],1)},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},e202:function(t,e,n){"use strict";n("460d");var a=r(n("b0ce")),o=r(n("69f5"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))}},[["e202","common/runtime","common/vendor"]]]);