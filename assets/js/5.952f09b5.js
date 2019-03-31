(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{220:function(a,t,s){a.exports=s.p+"assets/img/push_1.0a3bdc0b.png"},221:function(a,t,s){a.exports=s.p+"assets/img/push_2.ae65fc1e.png"},222:function(a,t,s){a.exports=s.p+"assets/img/push_3.c763cc80.png"},223:function(a,t,s){a.exports=s.p+"assets/img/push_4.7971009d.png"},224:function(a,t,s){a.exports=s.p+"assets/img/push_5.b9cc20be.png"},233:function(a,t,s){"use strict";s.r(t);var r=s(2),e=Object(r.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"app推送"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#app推送","aria-hidden":"true"}},[a._v("#")]),a._v(" app推送")]),a._v(" "),r("p",[a._v("app推送有很多提供商，这里我们先选择个推。主要使用apicloud的"),r("a",{attrs:{href:"https://docs.apicloud.com/Client-API/Open-SDK/pushGeTui",target:"_blank",rel:"noopener noreferrer"}},[a._v("pushGeTui模块"),r("OutboundLink")],1),a._v(", "),r("a",{attrs:{href:"https://dev.getui.com/dos5.0/#/appList/dashboard/app",target:"_blank",rel:"noopener noreferrer"}},[a._v("个推文档辅助"),r("OutboundLink")],1)]),a._v(" "),r("h2",{attrs:{id:"个推配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#个推配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 个推配置")]),a._v(" "),r("p",[r("img",{attrs:{src:s(220),alt:""}}),a._v("\n这里就用到apicloud里面的配置信息了，一般app生成正式之后，信息都不会变。")]),a._v(" "),r("p",[a._v("ios push证书，之前也有说明，照着文档做就好了。")]),a._v(" "),r("h2",{attrs:{id:"apicloud配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#apicloud配置","aria-hidden":"true"}},[a._v("#")]),a._v(" apicloud配置")]),a._v(" "),r("p",[a._v("我们app是通过apicloud来构建，那就是要涉及到在apicloud里面怎么使用个推的api了。")]),a._v(" "),r("p",[r("img",{attrs:{src:s(221),alt:""}})]),a._v(" "),r("p",[a._v("在config.xml里面配置好个推的信息，然后在代码里面"),r("code",[a._v("window.api.require('pushGeTui')")]),a._v("就可以正常使用个推模块了。")]),a._v(" "),r("p",[a._v("但是会发现这样设置之后，调试的时候，无法找到pushGeTui。那是因为我们自定义的loader没有包含个推。")]),a._v(" "),r("p",[r("img",{attrs:{src:s(222),alt:""}})]),a._v(" "),r("p",[a._v("在云端添加个推模块之后，重新生成下自定义loader就可以开发调试了。")]),a._v(" "),r("h2",{attrs:{id:"消息类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#消息类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 消息类型")]),a._v(" "),r("p",[a._v("为了ios和Android都能使用，采用透传模式，否则我们得区分用户os类型。")]),a._v(" "),r("p",[r("img",{attrs:{src:s(223),alt:""}})]),a._v(" "),r("h2",{attrs:{id:"ios透传"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ios透传","aria-hidden":"true"}},[a._v("#")]),a._v(" ios透传")]),a._v(" "),r("p",[a._v("ios10以后的系统，支持本地透传消息处理成apns通知，从顶部状态栏弹出。也就是说在app进入后台，ios会自动弹出状态栏信息，app在前台的时候，不会弹出状态栏信息。")]),a._v(" "),r("h2",{attrs:{id:"android透传"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#android透传","aria-hidden":"true"}},[a._v("#")]),a._v(" android透传")]),a._v(" "),r("p",[a._v("andriod就无法自动装换状态栏信息弹出了，就需要自己处理。")]),a._v(" "),r("p",[r("img",{attrs:{src:s(224),alt:""}})])])},[],!1,null,null,null);t.default=e.exports}}]);