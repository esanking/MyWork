(function(e){function n(n){for(var r,o,c=n[0],i=n[1],f=n[2],l=0,h=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&h.push(u[o][0]),u[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(h.length)h.shift()();return a.push.apply(a,f||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==u[c]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},u={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-025f3e55":"9448e51c","chunk-13b2b3f4":"36cca2ba","chunk-2805e8f0":"2edf1606","chunk-6b98e020":"2362413a","chunk-9a3385fa":"a547879e","chunk-b1144e96":"58df9f29"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-025f3e55":1,"chunk-13b2b3f4":1,"chunk-2805e8f0":1,"chunk-6b98e020":1,"chunk-9a3385fa":1,"chunk-b1144e96":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-025f3e55":"4448b64a","chunk-13b2b3f4":"e22cb5ca","chunk-2805e8f0":"ad7dd119","chunk-6b98e020":"69e41809","chunk-9a3385fa":"01d8251f","chunk-b1144e96":"56f82d37"}[e]+".css",u=i.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var f=a[c],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===u))return n()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){f=h[c],l=f.getAttribute("data-href");if(l===r||l===u)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],s.parentNode.removeChild(s),t(a)},s.href=u;var d=document.getElementsByTagName("head")[0];d.appendChild(s)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=a);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var h=new Error;f=function(n){l.onerror=l.onload=null,clearTimeout(s);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",h.name="ChunkLoadError",h.type=r,h.request=o,t[1](h)}u[e]=void 0}};var s=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var h=0;h<f.length;h++)n(f[h]);var s=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"458f":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=t("bc3a"),u=t.n(o),a=t("a7fe"),c=t.n(a),i=t("7bb1"),f=t("427f"),l=t.n(f),h=t("a925"),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view")},d=[],p=(t("5c0b"),t("2877")),b={},m=Object(p["a"])(b,s,d,!1,null,null,null),v=m.exports,k=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));r["a"].use(k["a"]);var g=new k["a"]({routes:[{path:"/",component:function(){return t.e("chunk-9a3385fa").then(t.bind(null,"7d4b"))},children:[{path:"",name:"Home",component:function(){return t.e("chunk-2805e8f0").then(t.bind(null,"bb51"))}},{path:"/Stock",name:"Stock",component:function(){return t.e("chunk-025f3e55").then(t.bind(null,"68e3"))}},{path:"/TodoList",name:"TodoList",component:function(){return t.e("chunk-6b98e020").then(t.bind(null,"a7b9"))}},{path:"/Login",name:"Login",component:function(){return t.e("chunk-b1144e96").then(t.bind(null,"a55b"))}},{path:"/ClockIn/:UserName",name:"ClockIn",component:function(){return t.e("chunk-13b2b3f4").then(t.bind(null,"66d6"))}}]},{path:"*",redirect:"/Login"}]});t("7b17");r["a"].use(c.a,u.a),r["a"].use(h["a"]);var y=new h["a"]({locale:"zhTW"});r["a"].use(i["a"],{events:"input|blur",i18n:y,dictionary:{zhTW:l.a}}),r["a"].config.productionTip=!1,new r["a"]({router:g,i18n:y,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("458f")}});
//# sourceMappingURL=app.cfb92bc5.js.map