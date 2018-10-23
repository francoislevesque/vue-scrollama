(function(e){function t(t){for(var n,o,a=t[0],c=t[1],l=t[2],p=0,u=[];p<a.length;p++)o=a[p],i[o]&&u.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==i[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},i={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("31c5"),i=r.n(n);i.a},"0e03":function(e,t,r){var n=r("c664");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("499e").default;i("4233d03c",n,!0,{sourceMap:!1,shadowMode:!1})},"30c9":function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"\n.step[data-v-6619131c]{width:30vw;padding:10rem 0;margin:3rem 2.5vw 10rem;border:1px solid #333;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n.step.is-active[data-v-6619131c]{background-color:#fafad2\n}\n.graphic[data-v-6619131c]{position:absolute;right:0;margin:0 2.5vw;width:60vw;top:25vh;height:50vh;background-color:#ddd;border:1px solid #333;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:5rem\n}",""])},"31c5":function(e,t,r){var n=r("5fc7");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("499e").default;i("f155f63c",n,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._m(0),r("h2",[e._v("Examples")]),r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/basic"}},[e._v("Basic")]),r("router-link",{attrs:{to:"/progress"}},[e._v("Progress")]),r("router-link",{attrs:{to:"/stickygraphic"}},[e._v("Sticky-Graphic")])],1),r("router-view")],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",[r("a",{attrs:{href:"https://github.com/shenoy/vue-scrollama"}},[e._v("Vue-Scrollama")])])}],o=(r("034f"),r("2877")),a={},c=Object(o["a"])(a,i,s,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,d=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Scrollama",{attrs:{debug:!0},on:{"step-enter":e.stepEnterHandler,"step-exit":e.stepExitHandler}},e._l(e.steps,function(t){return r("div",{key:t.no,staticClass:"step",class:{"is-active":t.id==e.currStepId},attrs:{"data-step-id":t.id}},[r("p",[e._v("STEP "+e._s(t.id))])])}))],1)},u=[],f=(r("5abe"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"scroll-container",attrs:{id:"scroll-container-"+e.id}},[r("div",{ref:"scroll-graphic",staticClass:"scroll-graphic",attrs:{id:"scroll-graphic-"+e.id}},[e._t("graphic")],2),r("div",{staticClass:"scroll-steps",attrs:{id:"scroll-steps-"+e.id}},[e._t("default")],2),r("resize-observer",{on:{notify:e.handleResize}})],1)}),v=[],b=r("c93e"),m=r("d11d"),h=r.n(m),x=r("252c"),g=r("e671"),y=r.n(g),_={components:{ResizeObserver:x["a"]},props:{id:{type:String,validator:function(e){return!/\s/.test(e)},default:"scrollama"}},mounted:function(){var e=this;y.a.add(this.$refs["scroll-graphic"]),this.scroller=h()(),this.scroller.setup(Object(b["a"])({step:"#scroll-steps-".concat(this.id,">div"),container:"#scroll-container-".concat(this.id),graphic:"#scroll-graphic-".concat(this.id)},this.$attrs)).onStepProgress(function(t){e.$emit("step-progress",t)}).onStepEnter(function(t){e.$emit("step-enter",t)}).onStepExit(function(t){e.$emit("step-exit",t)}).onContainerEnter(function(t){e.$emit("container-enter",t)}).onContainerExit(function(t){e.$emit("container-exit",t)}),this.handleResize()},methods:{handleResize:function(){this.scroller.resize()}}},k=_,w=(r("76e0"),Object(o["a"])(k,f,v,!1,null,null,null));w.options.__file="Scrollama.vue";var S=w.exports,E={components:{Scrollama:S},data:function(){return{currStepId:null,steps:[{id:1},{id:2},{id:3},{id:4}]}},methods:{stepEnterHandler:function(e){var t=e.element,r=e.direction,n=e.index;console.log({element:t,direction:r,index:n}),this.currStepId=t.dataset.stepId},stepExitHandler:function(e){var t=e.element,r=e.direction,n=e.index;console.log({element:t,direction:r,index:n}),this.currStepId=null}}},j=E,O=(r("cb50"),Object(o["a"])(j,p,u,!1,null,"5f0ef03b",null));O.options.__file="Basic.vue";var I=O.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Scrollama",{attrs:{debug:!0,progress:!0},on:{"step-progress":e.stepProgressHandler}},e._l(e.steps,function(t){return r("div",{key:t.no,staticClass:"step",style:{"background-color":"rgba("+t.rgb+", "+t.progress+")"},attrs:{"data-step-id":t.id}},[r("div",[e._v("STEP "+e._s(t.id))]),r("div",[e._v(e._s((100*t.progress).toFixed(1))+"%")])])}))],1)},P=[],$=(r("7514"),{components:{Scrollama:S},data:function(){return{currStepId:null,steps:[{id:1,rgb:"250,220,0",progress:0},{id:2,rgb:"50,250,200",progress:0}]}},methods:{stepProgressHandler:function(e){var t=this,r=e.element,n=e.progress,i=e.index;console.log({element:r,progress:n,index:i}),this.currStepId=r.dataset.stepId,this.steps.find(function(e){return e.id==t.currStepId}).progress=n}}}),C=$,z=(r("bc4b"),Object(o["a"])(C,M,P,!1,null,"0ee822a6",null));z.options.__file="Progress.vue";var H=z.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Scrollama",{attrs:{debug:!0},on:{"step-enter":e.stepEnterHandler}},[r("div",{staticClass:"graphic",attrs:{slot:"graphic"},slot:"graphic"},[r("p",[e._v(e._s(e.currStepId))])]),e._l(e.steps,function(t){return r("div",{key:t.no,staticClass:"step",class:{"is-active":t.id==e.currStepId},attrs:{"data-step-id":t.id}},[r("p",[e._v("STEP "+e._s(t.id))])])})],2)],1)},R=[],B={components:{Scrollama:S},data:function(){return{currStepId:null,steps:[{id:1},{id:2},{id:3},{id:4}]}},methods:{stepEnterHandler:function(e){var t=e.element,r=e.direction,n=e.index;console.log({element:t,direction:r,index:n}),this.currStepId=t.dataset.stepId}}},F=B,G=(r("d205"),Object(o["a"])(F,T,R,!1,null,"6619131c",null));G.options.__file="StickyGraphic.vue";var J=G.exports;n["a"].use(d["a"]);var U=new d["a"]({routes:[{path:"/",redirect:"/basic"},{path:"/basic",component:I},{path:"/progress",component:H},{path:"/stickygraphic",component:J}]});n["a"].config.productionTip=!1,new n["a"]({router:U,render:function(e){return e(l)}}).$mount("#app")},"5fc7":function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"\nbody{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-size:18px;margin:0;padding:0;text-align:center\n}\n#app{padding-bottom:100vh\n}\n#nav{width:80%;max-width:40rem;margin:1rem auto;padding-bottom:40vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n#nav a{padding:1rem;text-decoration:none\n}\n#nav a.router-link-active{text-decoration:underline\n}",""])},"76e0":function(e,t,r){"use strict";var n=r("7a0e"),i=r.n(n);i.a},"7a0e":function(e,t,r){var n=r("b626");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("499e").default;i("070b9599",n,!0,{sourceMap:!1,shadowMode:!1})},b3ed:function(e,t,r){var n=r("efb0");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("499e").default;i("6adba488",n,!0,{sourceMap:!1,shadowMode:!1})},b626:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"\n.scroll-container{position:relative\n}\n.scroll-graphic{position:-webkit-sticky;position:sticky;top:0;z-index:-1\n}",""])},b98d:function(e,t,r){var n=r("30c9");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("499e").default;i("70566566",n,!0,{sourceMap:!1,shadowMode:!1})},bc4b:function(e,t,r){"use strict";var n=r("0e03"),i=r.n(n);i.a},c664:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"\n.step[data-v-0ee822a6]{width:80%;max-width:40rem;padding:10rem 0;margin:3rem auto 10rem;border:1px solid #333;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}",""])},cb50:function(e,t,r){"use strict";var n=r("b3ed"),i=r.n(n);i.a},d205:function(e,t,r){"use strict";var n=r("b98d"),i=r.n(n);i.a},efb0:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"\n.step[data-v-5f0ef03b]{width:80%;max-width:40rem;padding:10rem 0;margin:3rem auto 10rem;border:1px solid #333;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n.step.is-active[data-v-5f0ef03b]{background-color:#fafad2\n}",""])}});
//# sourceMappingURL=app.4b47b749.js.map