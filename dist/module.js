!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vueConciseSlider",[],e):"object"==typeof exports?exports.vueConciseSlider=e():t.vueConciseSlider=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(t){delete installedChunks[t]}function i(t){var e=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.src=u.p+""+t+"."+b+".hot-update.js",e.appendChild(i)}function n(t){return t=t||1e4,new Promise(function(e,i){if("undefined"==typeof XMLHttpRequest)return i(new Error("No browser support"));try{var n=new XMLHttpRequest,a=u.p+""+b+".hot-update.json";n.open("GET",a,!0),n.timeout=t,n.send(null)}catch(t){return i(t)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)i(new Error("Manifest request to "+a+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)i(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(t){return void i(t)}e(t)}}})}function a(t){var e=C[t];if(!e)return u;var i=function(i){return e.hot.active?(C[i]?C[i].parents.indexOf(t)<0&&C[i].parents.push(t):(E=[t],g=i),e.children.indexOf(i)<0&&e.children.push(i)):(console.warn("[HMR] unexpected require("+i+") from disposed module "+t),E=[]),u(i)};for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&"e"!==n&&Object.defineProperty(i,n,function(t){return{configurable:!0,enumerable:!0,get:function(){return u[t]},set:function(e){u[t]=e}}}(n));return i.e=function(t){function e(){$--,"prepare"===S&&(L[t]||l(t),0===$&&0===D&&h())}return"ready"===S&&r("prepare"),$++,u.e(t).then(e,function(t){throw e(),t})},i}function s(t){var e={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:g!==t,active:!0,accept:function(t,i){if(void 0===t)e._selfAccepted=!0;else if("function"==typeof t)e._selfAccepted=t;else if("object"==typeof t)for(var n=0;n<t.length;n++)e._acceptedDependencies[t[n]]=i||function(){};else e._acceptedDependencies[t]=i||function(){}},decline:function(t){if(void 0===t)e._selfDeclined=!0;else if("object"==typeof t)for(var i=0;i<t.length;i++)e._declinedDependencies[t[i]]=!0;else e._declinedDependencies[t]=!0},dispose:function(t){e._disposeHandlers.push(t)},addDisposeHandler:function(t){e._disposeHandlers.push(t)},removeDisposeHandler:function(t){var i=e._disposeHandlers.indexOf(t);i>=0&&e._disposeHandlers.splice(i,1)},check:d,apply:p,status:function(t){if(!t)return S;T.push(t)},addStatusHandler:function(t){T.push(t)},removeStatusHandler:function(t){var e=T.indexOf(t);e>=0&&T.splice(e,1)},data:x[t]};return g=void 0,e}function r(t){S=t;for(var e=0;e<T.length;e++)T[e].call(null,t)}function o(t){return+t+""===t?+t:t}function d(t){if("idle"!==S)throw new Error("check() is only allowed in idle status");return _=t,r("check"),n(w).then(function(t){if(!t)return r("idle"),null;k={},L={},O=t.c,y=t.h,r("prepare");var e=new Promise(function(t,e){v={resolve:t,reject:e}});m={};return l(1),"prepare"===S&&0===$&&0===D&&h(),e})}function c(t,e){if(O[t]&&k[t]){k[t]=!1;for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(m[i]=e[i]);0==--D&&0===$&&h()}}function l(t){O[t]?(k[t]=!0,D++,i(t)):L[t]=!0}function h(){r("ready");var t=v;if(v=null,t)if(_)Promise.resolve().then(function(){return p(_)}).then(function(e){t.resolve(e)},function(e){t.reject(e)});else{var e=[];for(var i in m)Object.prototype.hasOwnProperty.call(m,i)&&e.push(o(i));t.resolve(e)}}function p(i){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];t.indexOf(n)<0&&t.push(n)}}if("ready"!==S)throw new Error("apply() is only allowed in ready status");i=i||{};var a,s,d,c,l,h={},p=[],f={},g=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var v in m)if(Object.prototype.hasOwnProperty.call(m,v)){l=o(v);var _;_=m[v]?function(t){for(var e=[t],i={},a=e.slice().map(function(t){return{chain:[t],id:t}});a.length>0;){var s=a.pop(),r=s.id,o=s.chain;if((c=C[r])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:r};if(c.hot._main)return{type:"unaccepted",chain:o,moduleId:r};for(var d=0;d<c.parents.length;d++){var l=c.parents[d],h=C[l];if(h){if(h.hot._declinedDependencies[r])return{type:"declined",chain:o.concat([l]),moduleId:r,parentId:l};e.indexOf(l)>=0||(h.hot._acceptedDependencies[r]?(i[l]||(i[l]=[]),n(i[l],[r])):(delete i[l],e.push(l),a.push({chain:o.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:t,outdatedModules:e,outdatedDependencies:i}}(l):{type:"disposed",moduleId:v};var w=!1,P=!1,T=!1,D="";switch(_.chain&&(D="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":i.onDeclined&&i.onDeclined(_),i.ignoreDeclined||(w=new Error("Aborted because of self decline: "+_.moduleId+D));break;case"declined":i.onDeclined&&i.onDeclined(_),i.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+D));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(_),i.ignoreUnaccepted||(w=new Error("Aborted because "+l+" is not accepted"+D));break;case"accepted":i.onAccepted&&i.onAccepted(_),P=!0;break;case"disposed":i.onDisposed&&i.onDisposed(_),T=!0;break;default:throw new Error("Unexception type "+_.type)}if(w)return r("abort"),Promise.reject(w);if(P){f[l]=m[l],n(p,_.outdatedModules);for(l in _.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,l)&&(h[l]||(h[l]=[]),n(h[l],_.outdatedDependencies[l]))}T&&(n(p,[_.moduleId]),f[l]=g)}var $=[];for(s=0;s<p.length;s++)l=p[s],C[l]&&C[l].hot._selfAccepted&&$.push({module:l,errorHandler:C[l].hot._selfAccepted});r("dispose"),Object.keys(O).forEach(function(t){!1===O[t]&&e(t)});for(var L,k=p.slice();k.length>0;)if(l=k.pop(),c=C[l]){var j={},M=c.hot._disposeHandlers;for(d=0;d<M.length;d++)(a=M[d])(j);for(x[l]=j,c.hot.active=!1,delete C[l],delete h[l],d=0;d<c.children.length;d++){var z=C[c.children[d]];z&&((L=z.parents.indexOf(l))>=0&&z.parents.splice(L,1))}}var I,H;for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(c=C[l]))for(H=h[l],d=0;d<H.length;d++)I=H[d],(L=c.children.indexOf(I))>=0&&c.children.splice(L,1);r("apply"),b=y;for(l in f)Object.prototype.hasOwnProperty.call(f,l)&&(t[l]=f[l]);var R=null;for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(c=C[l])){H=h[l];var N=[];for(s=0;s<H.length;s++)if(I=H[s],a=c.hot._acceptedDependencies[I]){if(N.indexOf(a)>=0)continue;N.push(a)}for(s=0;s<N.length;s++){a=N[s];try{a(H)}catch(t){i.onErrored&&i.onErrored({type:"accept-errored",moduleId:l,dependencyId:H[s],error:t}),i.ignoreErrored||R||(R=t)}}}for(s=0;s<$.length;s++){var A=$[s];l=A.module,E=[l];try{u(l)}catch(t){if("function"==typeof A.errorHandler)try{A.errorHandler(t)}catch(e){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:e,orginalError:t,originalError:t}),i.ignoreErrored||R||(R=e),R||(R=t)}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:l,error:t}),i.ignoreErrored||R||(R=t)}}return R?(r("fail"),Promise.reject(R)):(r("idle"),new Promise(function(t){t(p)}))}function u(e){if(C[e])return C[e].exports;var i=C[e]={i:e,l:!1,exports:{},hot:s(e),parents:(P=E,E=[],P),children:[]};return t[e].call(i.exports,i,i.exports,a(e)),i.l=!0,i.exports}var f=window.webpackHotUpdatevueConciseSlider;window.webpackHotUpdatevueConciseSlider=function(t,e){c(t,e),f&&f(t,e)};var g,v,m,y,_=!0,b="27a210fc1a55a147b5e4",w=1e4,x={},E=[],P=[],T=[],S="idle",D=0,$=0,L={},k={},O={},C={};return u.m=t,u.c=C,u.d=function(t,e,i){u.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.h=function(){return b},a(14)(u.s=14)}([function(t,e){t.exports=function(t,e,i,n,a){var s,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,r=t.default);var d="function"==typeof r?r.options:r;e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns),n&&(d._scopeId=n);var c;if(a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=c):i&&(c=i),c){var l=d.functional,h=l?d.render:d.beforeCreate;l?d.render=function(t,e){return c.call(e),h(t,e)}:d.beforeCreate=h?[].concat(h,c):[c]}return{esModule:s,exports:r,options:d}}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},a=0;a<this.length;a++){var s=this[a][0];"number"==typeof s&&(n[s]=!0)}for(a=0;a<e.length;a++){var r=e[a];"number"==typeof r[0]&&n[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),t.push(r))}},t}},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=l[i.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](i.parts[a]);for(;a<i.parts.length;a++)n.parts.push(s(i.parts[a]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var r=[],a=0;a<i.parts.length;a++)r.push(s(i.parts[a]));l[i.id]={id:i.id,refs:1,parts:r}}}}function a(){var t=document.createElement("style");return t.type="text/css",h.appendChild(t),t}function s(t){var e,i,n=document.querySelector("style["+m+'~="'+t.id+'"]');if(n){if(f)return g;n.parentNode.removeChild(n)}if(y){var s=u++;n=p||(p=a()),e=r.bind(null,n,s,!1),i=r.bind(null,n,s,!0)}else n=a(),e=o.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function r(t,e,i,n){var a=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=_(e,a);else{var s=document.createTextNode(a),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function o(t,e){var i=e.css,n=e.media,a=e.sourceMap;if(n&&t.setAttribute("media",n),v.ssrId&&t.setAttribute(m,e.id),a&&(i+="\n/*# sourceURL="+a.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=i(7),l={},h=d&&(document.head||document.getElementsByTagName("head")[0]),p=null,u=0,f=!1,g=function(){},v=null,m="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i,a){f=i,v=a||{};var s=c(t,e);return n(s),function(e){for(var i=[],a=0;a<s.length;a++){var r=s[a],o=l[r.id];o.refs--,i.push(o)}e?(s=c(t,e),n(s)):s=[];for(var a=0;a<i.length;a++){var o=i[a];if(0===o.refs){for(var d=0;d<o.parts.length;d++)o.parts[d]();delete l[o.id]}}}};var _=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e,i){"use strict";function n(t){i(5)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(8),s=i.n(a),r=i(11),o=i(0),d=n,c=o(s.a,r.a,d,null,null);e.default=c.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(12),a=i.n(n),s=i(13),r=i(0),o=r(a.a,s.a,null,null,null);e.default=o.exports},function(t,e,i){var n=i(6);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(2)("7b43aed2",n,!0,{})},function(t,e,i){e=t.exports=i(1)(),e.push([t.i,".slider-container{margin:0 auto;overflow:hidden;z-index:1;height:100%;width:100%;position:relative;white-space:nowrap}.slider-center-center{margin:auto;z-index:1;position:absolute;top:0;left:0;right:0;bottom:0}.slider-touch{height:100%}.swiper-container-horizontal>*>.slider-wrapper{-moz-flex-direction:row;-ms-flex-direction:row;-o-flex-direction:row;flex-direction:row}.swiper-container-horizontal>*>.slider-wrapper,.swiper-container-vertical>*>.slider-wrapper{box-sizing:content-box;display:-ms-flexbox;display:flex;height:100%;position:relative;transition-property:transform;width:100%;z-index:1;-ms-flex-align:center;align-items:center}.swiper-container-vertical>*>.slider-wrapper{-moz-flex-direction:column;-ms-flex-direction:column;-o-flex-direction:column;flex-direction:column}.slider-item{-ms-flex-negative:0;flex-shrink:0;height:100%;position:relative;width:100%;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;font-size:40px;-ms-flex-pack:center;justify-content:center;text-align:center;color:#fff}.slider-fade .slider-item{position:absolute;left:0;opacity:0}.slider-pagination{position:absolute;text-align:center;transform:translateZ(0);z-index:10}.swiper-container-horizontal>.slider-pagination-bullets{bottom:10px;left:0;width:100%}.swiper-container-horizontal>*>.slider-pagination-bullet{background:#000 none repeat scroll 0 0;border-radius:100%;display:inline-block;height:8px;opacity:.2;width:8px;cursor:pointer;margin:0 5px}.swiper-container-vertical>.slider-pagination-bullets{left:0;bottom:auto;left:auto;width:auto;right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>*>.slider-pagination-bullet{background:#000 none repeat scroll 0 0;border-radius:100%;height:8px;opacity:.2;width:8px;cursor:pointer;display:block;margin:5px 0}.swiper-container-horizontal .slider-pagination-bullet-active,.swiper-container-vertical .slider-pagination-bullet-active{background:#fff none repeat scroll 0 0;opacity:1}.slider-loading{position:absolute;top:50%;transform:translateY(-50%);z-index:999}.swiper-container-cursorGrab{cursor:-webkit-grab;cursor:grab}",""])},function(t,e){t.exports=function(t,e){for(var i=[],n={},a=0;a<e.length;a++){var s=e[a],r=s[0],o=s[1],d=s[2],c=s[3],l={id:t+":"+a,css:o,media:d,sourceMap:c};n[r]?n[r].parts.push(l):i.push(n[r]={id:r,parts:[l]})}return i}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(9),a=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={props:{options:{type:Object,default:function(){return{}}},pages:{type:Array,default:function(){return[]}}},name:"slider",data:function(){return{data:{poswidth:0,posheight:0,start:{},end:{},currentPage:this.options.currentPage||0,direction:""},s_data:{prefixes:(0,a.default)(),transitionEnding:!1,itemTransitionEnding:!1,setIntervalid:"",renderTime:"",sliderLength:0,effect:this.options.effect||"slide",direction:this.options.direction||"horizontal",tracking:!1,thresholdDistance:this.options.thresholdDistance||100,thresholdTime:this.options.thresholdTime||500,animation:!1,itemAnimation:this.options.itemAnimation||!1,loading:!1,containerClass:{"swiper-container-vertical":!1,"swiper-container-cursorGrab":this.options.grabCursor||!1},pageInit:!1,widthScalingRatio:this.options.widthScalingRatio||.8,heightScalingRatio:this.options.heightScalingRatio||.8,deviation:this.options.deviation||200,currentPage:this.options.currentPage||0,pageWidth:0,pageHeight:0,onSlide:!1,onSlideEnd:!0,sliderItem:"",pagination:void 0===this.options.pagination||this.options.pagination,nested:void 0===this.options.nested||this.options.nested,resize:void 0===this.options.resize||this.options.resize,freeze:void 0!==this.options.freeze&&this.options.freeze,slidesPerView:void 0===this.options.slidesPerView?0:this.options.slidesPerView,$parent:this.judgeParentSlider(this),route:!1}}},watch:{$route:function(){var t=this;if(t.route){var e=t.data.currentPage,i=t.s_data.sliderLength;t.s_data.transitionEnding=!1,e<0?t.slide(0,"animationnone"):e>=(t.pagenums||i)?t.slide(i-1,"animationnone"):t.slide(e,"animationnone"),t.options.autoplay&&t.clock().begin(t),t.route=!1}else t.route=!0,t.options.autoplay&&t.clock().stop(t)}},computed:{styleobj:function(){var t={};return t.transform="translate3D("+this.data.poswidth+"px,"+this.data.posheight+"px,0)",t[this.s_data.prefixes.transition+"TimingFunction"]=this.options.timingFunction||"ease",t[this.s_data.prefixes.transition+"Duration"]=(this.s_data.animation?this.options.speed||300:0)+"ms","fade"===this.s_data.effect||"coverflow"===this.s_data.effect?{}:t},pagenums:function(){return(this.pages.length||0!==this.s_data.sliderLength)&&this.s_data.pageInit,this.pages.length},currentWidth:{get:function(){if(!this.pages.length&&0===this.s_data.sliderLength||"fade"===this.s_data.effect||"coverflow"===this.s_data.effect)return 0;var t=void 0,e=this.data.currentPage,i=this.s_data.pageWidth,n=this.options.loopedSlides||1;this.options.loop&&(e+=n?n<=(this.pagenums||this.s_data.sliderLength)?n:this.pagenums||this.s_data.sliderLength:1),"coverflow"===this.options.effect&&(e-=1);for(var a in this.$el.children)/slider-touch/gi.test(this.$el.children[a].className)&&(t=this.$el.children[a]);var s=t.children[0].children,r=s[e].offsetLeft;this.options.loop&&(r=s[e].offsetLeft);var o=s[e].offsetWidth,d=this.options.slidesPerView,c=this.s_data.sliderLength;if(this.options.centeredSlides)if(d){var l=this.data.currentPage,h=parseInt((d-1)/2);l-h<=0?l=0:l+h>=c?l=c-d:l-=h,r=s[l].offsetLeft}else r=r-i/2+o/2;if(!this.options.centeredSlides&&d){var p=this.data.currentPage,u=this.options.slidesToScroll||1;p+u>=c&&(r=s[c-u].offsetLeft)}return r+i-i}},currentHeight:function(){var t=this.s_data.sliderLength,e=this.data.currentPage,i=this.pages.length,n=0,a=void 0,s=e-1,r=this.s_data.pageWidth,o=this.options.loopedSlides||1;if(!i&&0===t||"fade"===this.s_data.effect)return 0;this.options.loop&&(s=o?e+(o<=(i||t)?o:i||t)-1:e+1);for(var d in this.$el.children)/slider-touch/gi.test(this.$el.children[d].className)&&(a=this.$el.children[d]);var c=a.children[0].children;for(var l in c)l<=s&&(n+=c[l].offsetHeight,n+=parseInt(c[l].style.marginTop||0),n+=parseInt(c[l].style.marginBottom||0));return n+r-r},classObject:function(){var t={};switch(this.options.effect){case"fade":t={"slider-fade":!0}}return t}},mounted:function(){var t=this,e=this;this.s_data.pageWidth=this.$el.offsetWidth,this.s_data.pageHeight=this.$el.offsetHeight,this.$emit("init",this.data),this.$on("slideTo",function(e){t.slide(e,"slideTo")}),this.$on("slideNext",function(){t.next()}),this.$on("slidePre",function(){t.pre()}),this.$on("autoplayStart",function(i){t.options.autoplay=i||t.options.autoplay||1e3,t.clock().begin(e)}),this.$on("autoplayStop",function(){t.options.autoplay=0,t.clock().stop(e)}),this.$on("loadingShow",function(){t.s_data.loading=!0}),this.$on("loadingHide",function(){t.s_data.loading=!1}),this.options.autoplay&&this.clock().begin(e),document.addEventListener("visibilitychange",this.visibilitychange,!1),"vertical"===this.options.direction?this.s_data.containerClass["swiper-container-vertical"]=!0:this.s_data.containerClass["swiper-container-horizontal"]=!0,this.s_data.resize&&window.addEventListener("resize",this.resize)},beforeDestroy:function(){this.options.autoplay&&this.clock().stop(this),!0===this.options.preventDocumentMove&&document.removeEventListener("touchmove",this.preventDefault()),document.removeEventListener("visibilitychange",this.visibilitychange,!1),window.removeEventListener("resize",this.resize)},methods:{visibilitychange:function(){var t=this;document.hidden?t.options.autoplay&&t.clock().stop(t):t.options.autoplay&&t.clock().begin(t)},resize:function(){if(this.s_data.pageWidth=this.$el.offsetWidth,this.s_data.pageHeight=this.$el.offsetHeight,this.data.currentPage>=this.s_data.sliderLength&&this.options.loop)return this.slide(0,"animationnone"),!1;this.slide(this.data.currentPage,"animationnone")},swipeStart:function(t){var e=this;if(this.s_data.e=t,!this.s_data.freeze&&!this.s_data.transitionEnding&&!(this.s_data.transitionEnding||this.s_data.itemTransitionEnding&&this.options.itemAnimation))if(this.s_data.animation=!1,this.options.autoplay&&this.clock().stop(e),!0===this.options.preventDocumentMove&&document.addEventListener("touchmove",e.preventDefault(t)),"touchstart"===t.type){if(t.touches.length>1)return this.s_data.tracking=!1,!1;this.s_data.tracking=!0,this.data.start.t=(new Date).getTime(),this.data.start.x=t.targetTouches[0].clientX,this.data.start.y=t.targetTouches[0].clientY,this.data.end.x=t.targetTouches[0].clientX,this.data.end.y=t.targetTouches[0].clientY}else this.s_data.tracking=!0,this.data.start.t=(new Date).getTime(),this.data.start.x=t.clientX,this.data.start.y=t.clientY,this.data.end.x=t.clientX,this.data.end.y=t.clientY},swipeMove:function(t){if(this.s_data.e=t,this.s_data.tracking){var e=this.s_data.effect,i=this.s_data.$parent;"touchmove"===t.type?(this.data.end.x=t.targetTouches[0].clientX,this.data.end.y=t.targetTouches[0].clientY):(this.data.end.x=t.clientX,this.data.end.y=t.clientY);var n=Math.abs(this.data.end.x-this.data.start.x),a=Math.abs(this.data.end.y-this.data.start.y);if(n>=a&&"vertical"!==this.options.direction&&t.cancelable?t.preventDefault():n<=a&&"vertical"===this.options.direction&&t.cancelable&&t.preventDefault(),i&&i.s_data.direction===this.s_data.direction&&t.stopPropagation(),"fade"===e||"coverflow"===e)return;if("vertical"===this.options.direction){if(n>a)return;if(i&&"vertical"===i.options.direction&&0===this.data.currentPage&&this.data.end.y-this.data.start.y>=0&&i.s_data.nested&&(!i.options.preventRebound||0!==i.data.currentPage))i.data.posheight=-i.currentHeight+this.data.end.y-this.data.start.y;else if(i&&"vertical"===i.options.direction&&this.data.currentPage===this.s_data.sliderLength-1&&this.data.end.y-this.data.start.y<=0&&i.s_data.nested&&(!i.options.preventRebound||i.data.currentPage!==i.s_data.sliderLength-1))i.data.posheight=-i.currentHeight+this.data.end.y-this.data.start.y;else{if(this.options.preventRebound&&!this.options.loop)return;this.data.posheight=-this.currentHeight+this.data.end.y-this.data.start.y}}else{if(n<a)return;if(i&&"vertical"!==i.options.direction&&0===this.data.currentPage&&this.data.end.x-this.data.start.x>=0&&i.s_data.nested&&(!i.options.preventRebound||0!==i.data.currentPage))i.data.poswidth=-i.currentWidth+this.data.end.x-this.data.start.x;else if(i&&"vertical"!==i.options.direction&&this.data.currentPage===this.s_data.sliderLength-1&&this.data.end.x-this.data.start.x<=0&&i.s_data.nested&&(!i.options.preventRebound||i.data.currentPage!==i.s_data.sliderLength-1))i.data.poswidth=-i.currentWidth+this.data.end.x-this.data.start.x;else{if(this.options.preventRebound&&!this.options.loop)return;this.data.poswidth=-this.currentWidth+this.data.end.x-this.data.start.x}}}},swipeEnd:function(t){this.s_data.e=t,this.s_data.tracking=!1;var e=(new Date).getTime(),i=e-this.data.start.t,n=this.data.end.x-this.data.start.x,a=this.data.end.y-this.data.start.y,s=this.s_data.thresholdDistance,r=this.data.currentPage;if(this.options.autoplay){var o=this;setTimeout(function(){o.clock().begin(o)},this.options.autoplay)}if(!0===this.options.preventDocumentMove&&document.removeEventListener("touchmove",this.preventDefault(t)),i>this.s_data.thresholdTime)return this.slide(r),!1;if("vertical"!==this.options.direction){if(n>s&&Math.abs(a)<s)return this.pre(),!1;if(-n>s&&Math.abs(a)<s)return this.next(),!1;if(!(i<100&&Math.abs(n)<10&&Math.abs(a)<10))return this.slide(r),!1;this.$emit("tap",this.data),this.slide(r,"click")}else{if(a>s&&Math.abs(n)<s)return this.pre(),!1;if(-a>s&&Math.abs(n)<s)return this.next(),!1;if(!(i<100&&Math.abs(n)<10&&Math.abs(a)<10))return this.slide(r),!1;this.$emit("tap",this.data),this.slide(r,"click")}},swipeOut:function(t){this.$el===t.target&&this.s_data.tracking&&this.swipeEnd(t)},pre:function(){this.data.direction="left";var t=this.s_data.sliderLength,e=this.options.slidesToScroll||1,i=this.s_data.$parent;this.data.currentPage>=1&&this.data.currentPage-e>=0?(this.data.currentPage-=e||1,this.slide()):!(this.options.loop&&this.data.currentPage-e<0)||i&&i.s_data.nested?i&&0===this.data.currentPage&&i.s_data.nested?(i.pre(),this.slide()):this.slide(0):(this.data.currentPage-=e||1,this.s_data.transitionEnding=!0,this.s_data.itemTransitionEnding=!0,this.data.currentPage<0&&"fade"===this.s_data.effect?(this.slide((this.pagenums||t)-1),this.s_data.transitionEnding=!1,this.s_data.itemTransitionEnding=!1):this.slide())},next:function(){this.data.direction="right";var t=this.s_data.sliderLength,e=this.s_data.$parent,i=this.options.slidesToScroll||1;if(this.data.currentPage<(this.pagenums||t)-1&&this.data.currentPage+i<=t-1)this.data.currentPage+=this.options.slidesToScroll||1,this.slide();else if(!(this.options.loop&&this.data.currentPage+i>t-1)||e&&e.s_data.nested)if(e&&this.data.currentPage===(this.pagenums||t)-1&&e.s_data.nested){var n=this.s_data.$parent;n.next(),this.slide()}else this.slide();else this.data.currentPage+=this.options.slidesToScroll||1,this.s_data.transitionEnding=!0,this.s_data.itemTransitionEnding=!0,this.data.currentPage>=(this.pagenums||t)&&"fade"===this.s_data.effect?(this.slide(0),this.s_data.transitionEnding=!1,this.s_data.itemTransitionEnding=!1):this.slide()},slide:function(t,e){if(this.s_data.animation=!0,"slideTo"===e&&!0===this.s_data.onSlide)return!1;if("animationnone"===e?(this.s_data.animation=!1,this.s_data.onSlideEnd=!0,this.s_data.onSlide=!1):(this.s_data.onSlideEnd=!1,this.s_data.onSlide=!0),(t||0===t)&&(this.data.currentPage=t),this.$emit("slide",this.data),"fade"===this.s_data.effect)return void(this.pagenums||this.fadeDom());if("vertical"===this.options.direction?(Math.abs(this.data.posheight)===Math.abs(-this.currentHeight)&&(this.s_data.onSlideEnd=!0,this.s_data.onSlide=!1),this.data.posheight=-this.currentHeight):(Math.abs(this.data.poswidth)===Math.abs(-this.currentWidth)&&(this.s_data.onSlideEnd=!0,this.s_data.onSlide=!1),this.data.poswidth=-this.currentWidth),this.s_data.sliderLength){var i=this.$el.getElementsByClassName("slider-wrapper")[0],n=Array.prototype.slice.call(i.children),a=n.filter(function(t){return-1!==t.className.indexOf("slider-item")}),s=n.filter(function(t){return-1!==t.className.indexOf("slider-active-copy")}),r=this.options.loopedSlides||1,o=this.s_data.sliderLength,d=this.$children,c=this.data.currentPage;if(d=d.filter(function(t){return"slideritem"===t.$options._componentTag}),d.forEach(function(t){t.removeActive()}),"nest"===this.options.effect)return;if(d[c]&&d[c].addActive(),c<0||c>=(this.pagenums||o)){a[c+r]&&a[c+r].classList&&a[c+r].classList.add("slider-active-copy");d[c<0?(this.pagenums||o)+c:0+c-(this.pagenums||o)].addActive()}else for(var l=0;l<s.length;l++){var h=s[l];h.classList.remove("slider-active-copy")}}return!(this.data.currentPage<0||this.data.currentPage>=(this.pagenums||this.s_data.sliderLength))&&void 0},clock:function(){return{begin:function(t){t.s_data.setIntervalid||0!==t.options.autoplay&&(t.s_data.setIntervalid=setInterval(function(){t.next(),t.data.currentPage!==(t.pagenums||t.s_data.sliderLength)-1||t.options.loop||(clearInterval(t.s_data.setIntervalid),t.s_data.setIntervalid=0)},t.options.autoplay))},stop:function(t){clearInterval(t.s_data.setIntervalid),t.s_data.setIntervalid=0}}},preventDefault:function(t){t.preventDefault()},onTransitionEnd:function(t){var e=this;this.s_data.onSlideEnd=!0,this.s_data.onSlide=!1,setTimeout(function(){var t=e.data.currentPage,i=e.s_data.sliderLength;e.options.loop&&""!==e.s_data.effect&&(e.s_data.transitionEnding=!1,t<0?e.slide((e.pagenums||i)+t,"animationnone"):t>=(e.pagenums||i)&&e.slide(0+t-(e.pagenums||i),"animationnone"))},0)},onItemTransitionEnd:function(t){if(t.target===t.currentTarget){var e=this;setTimeout(function(){e.s_data.itemTransitionEnding=!1},0)}},renderDom:function(t){var e=this;this.s_data.renderTime&&clearTimeout(this.s_data.renderTime),e.s_data.sliderLength+=1,e.s_data.sliderLength>=1&&"fade"===e.options.effect&&(t.previousSibling?t.style["z-index"]=99-e.s_data.sliderLength:t.style["z-index"]=99+e.s_data.sliderLength),this.s_data.renderTime=setTimeout(function(){e.s_data.renderTime=void 0;var t=e.$el.getElementsByClassName("slider-wrapper")[0],i=Array.prototype.slice.call(t.children),n=i.filter(function(t){return-1!==t.className.indexOf("slider-item")});if(e.s_data.sliderLength>=1&&e.options.loop&&"fade"!==e.options.effect&&"coverflow"!==e.options.effect){for(var a=t.getElementsByClassName("slider-copy"),s=a.length-1;s>=0;s--)t.removeChild(a[s]);n=Array.prototype.slice.call(t.children).filter(function(t){return-1!==t.className.indexOf("slider-item")});for(var r=n.length,o=e.options.loopedSlides||1,d=0;d<r;d++){if(d+o-r>=0){var c=n[d+0].cloneNode(!0);c.classList.add("slider-copy"),c.classList.remove("slider-active"),t.insertBefore(c,n[0])}if(d-o<0){var l=n[d].cloneNode(!0);l.classList.add("slider-copy"),l.classList.remove("slider-active"),t.appendChild(l)}}}e.$nextTick(function(){e.slide(e.data.currentPage,"animationnone")})},0)},fadeDom:function(){for(var t=this.data.currentPage,e=this.$el.getElementsByClassName("slider-wrapper")[0],i=e.getElementsByClassName("slider-item"),n=this.options.speed,a=0;a<i.length;a++)a===t||a===t+1?(i[a].style.opacity="1",i[a].style["transition-property"]="opacity",i[a].style[this.s_data.prefixes.transition+"-duration"]=(this.s_data.animation?n||300:0)+"ms"):(i[a].style.opacity="0",i[a].style[this.s_data.prefixes.transition+"-duration"]=(this.s_data.animation?n||300:0)+"ms")},judgeParentSlider:function(t){return t.$parent&&t.$parent.$vnode&&"slider"===t.$parent.$options._componentTag?t.$parent:(!t.$parent||void 0!==t.$parent.$vnode)&&this.judgeParentSlider(t.$parent)}},components:{renderpagination:{render:function(t){var e=this.index;return this.options.renderPagination.call(this,t,e)},name:"renderpagination",props:{index:{type:Number,required:!0},options:{type:Object,required:!0}}}}}},function(t,e,i){"use strict";(function(t){function i(){var e=void 0,i=void 0,n=void 0,a=void 0;return function(){var s=document.createElement("_"),r=s.style,o=void 0;""===r[o="webkitTransition"]&&(n="webkitTransitionEnd",i=o),""===r[o="transition"]&&(n="transitionend",i=o),""===r[o="webkitTransform"]&&(e=o),""===r[o="msTransform"]&&(e=o),""===r[o="transform"]&&(e=o),document.body.insertBefore(s,null),r[e]="translate3d(0, 0, 0)",a=!!t.getComputedStyle(s).getPropertyValue(e),document.body.removeChild(s)}(),{transform:e,transition:i,transitionEnd:n,hasTranslate3d:a}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i}).call(e,i(10))},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider-container",class:t.s_data.containerClass,on:{mouseleave:t.swipeOut}},[i("div",{staticClass:"slider-touch",style:t.styleobj,on:{touchmove:t.swipeMove,touchstart:t.swipeStart,touchend:t.swipeEnd,mousedown:t.swipeStart,mouseup:t.swipeEnd,mousemove:t.swipeMove,"webkit-transition-end":t.onTransitionEnd,transitionend:t.onTransitionEnd,transitioncancel:t.onTransitionEnd,"webkit-transition-cancel":t.onTransitionEnd}},[0===t.pages.length?i("div",{staticClass:"slider-wrapper",class:t.classObject},[t._t("default")],2):t._e()]),t._v(" "),t.s_data.pagination?i("div",{staticClass:"slider-pagination slider-pagination-bullets"},[t._l(t.pagenums||t.s_data.sliderLength,function(e){return[t.options.renderPagination?t._e():i("span",{key:e,staticClass:"slider-pagination-bullet",class:e-1===t.data.currentPage?"slider-pagination-bullet-active":"",on:{click:function(i){t.slide(e-1)}}}),t._v(" "),t.options.renderPagination?i("renderpagination",{key:e,class:e-1===t.data.currentPage?"slider-pagination-bullet-active-render":"",attrs:{index:e,options:t.options},nativeOn:{click:function(i){t.slide(e-1)}}}):t._e()]})],2):t._e(),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.pagenums&&0===t.s_data.sliderLength||t.s_data.loading,expression:"(!pagenums && s_data.sliderLength === 0)||s_data.loading"}],staticClass:"slider-loading"},[t._t("loading")],2)])},a=[],s={render:n,staticRenderFns:a};e.a=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["index","pageLength"],name:"slideritem",data:function(){return{slideClass:{"slider-item":!0,"slider-active":!1},data:{start:{},end:{},index:this.index?this.index:this.$vnode.key,$el:""}}},mounted:function(){this.renderDom(),this.data.$el=this.$el},methods:{touchStart:function(t){if("touchstart"===t.type){if(t.touches.length>1)return this.data.tracking=!1,!1;this.data.start.t=(new Date).getTime(),this.data.start.x=t.targetTouches[0].clientX,this.data.start.y=t.targetTouches[0].clientY,this.data.end.x=t.targetTouches[0].clientX,this.data.end.y=t.targetTouches[0].clientY,this.data.start.pageX=t.targetTouches[0].pageX,this.data.start.pageY=t.targetTouches[0].pageY}else this.data.start.t=(new Date).getTime(),this.data.start.x=t.clientX,this.data.start.y=t.clientY,this.data.end.x=t.clientX,this.data.end.y=t.clientY,this.data.start.pageX=t.pageX,this.data.start.pageY=t.pageY},touchEnd:function(t){var e=(new Date).getTime(),i=e-this.data.start.t;"touchend"===t.type?(this.data.end.t=(new Date).getTime(),this.data.end.x=t.changedTouches[0].clientX,this.data.end.y=t.changedTouches[0].clientY,this.data.end.pageX=t.changedTouches[0].pageX,this.data.end.pageY=t.changedTouches[0].pageY):(this.data.end.t=(new Date).getTime(),this.data.end.x=t.clientX,this.data.end.y=t.clientY,this.data.end.pageX=t.pageX,this.data.end.pageY=t.pageY);var n=this.data.end.pageX-this.data.start.pageX||0,a=this.data.end.pageY-this.data.start.pageY||0;i<300&&Math.abs(n)<10&&Math.abs(a)<10&&this.$emit("tap",this.data)},renderDom:function(){this.$parent&&this.$parent.renderDom(this.$el)},addActive:function(){this.slideClass["slider-active"]=!0},removeActive:function(){this.slideClass["slider-active"]=!1},onTransitionEnd:function(t){this.$parent&&this.$parent.onItemTransitionEnd(t)},transform:function(){var t=this.$parent.options,e=this.$parent.data,i=this.$parent.s_data;if(!(t&&e&&i&&this.$el&&"coverflow"===t.effect))return{};var n=this.index,a=i.pageWidth,s=this.$el.offsetWidth,r=a/2-s/2,o=r-i.deviation+"px",d=r+i.deviation+"px",c=r+"px",l={};return n===e.currentPage-1||n===this.pageLength-2&&-1===e.currentPage?(l.transform="translate3D("+o+",0 ,0) scale3d("+i.widthScalingRatio+","+i.heightScalingRatio+",1)",l.opacity="1","left"===e.direction?l["z-index"]="10":l["z-index"]="1"):n===e.currentPage+1||1===n&&e.currentPage===this.pageLength?(l.transform="translate3D("+d+",0 ,0)",l.transform="translate3D("+d+",0 ,0) scale3d("+i.widthScalingRatio+","+i.heightScalingRatio+",1)",l.opacity="1","left"===e.direction?l["z-index"]="1":l["z-index"]="10"):n===e.currentPage?(l.transform="translate3D("+c+",0 ,0) scale3d(1,1,1)",l["z-index"]="99",l.opacity="1"):(l.transform="translate3D("+c+",0 ,0)",l.opacity="0"),n===this.pageLength-1&&0===e.currentPage&&(l.transform="translate3D("+o+",0 ,0) scale3d("+i.widthScalingRatio+","+i.heightScalingRatio+",1)",l.opacity="1"),0===n&&e.currentPage===this.pageLength-1&&(l.transform="translate3D("+d+",0 ,0) scale3d("+i.widthScalingRatio+","+i.heightScalingRatio+",1)",l.opacity="1"),(n!==this.pageLength-1&&n!==this.pageLength-2||-1!==e.currentPage)&&(0!==n&&1!==n||e.currentPage!==this.pageLength)||(l.opacity="1",0===n&&(l["z-index"]="99"),n===this.pageLength-1&&(l["z-index"]="99")),l[i.prefixes.transition+"Duration"]=(i.animation?t.speed||300:0)+"ms",l.position="absolute",l}}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass,style:[t.transform(t.index)],on:{touchstart:t.touchStart,touchend:t.touchEnd,mousedown:t.touchStart,mouseup:t.touchEnd,"webkit-transition-end":t.onTransitionEnd,transitionend:t.onTransitionEnd}},[t._t("default")],2)},a=[],s={render:n,staticRenderFns:a};e.a=s},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.slideritem=e.slider=void 0;var a=i(3),s=n(a),r=i(4),o=n(r),d=s.default,c=o.default;e.default=d,e.slider=d,e.slideritem=c}])});