/*!
 * artplayer-tool-github.js v3.1.20
 * Github: https://github.com/zhw2590582/ArtPlayer#readme
 * (c) 2017-2019 Harvey Zack
 * Released under the MIT License.
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).ArtplayerToolGithub=e()}(this,(function(){"use strict";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;return function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){t.exports=function(){var t,e=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},r=function(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(r){e(t,r,n[r])}))}return t},n=(function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=l;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",l="executing",p="completed",y={};function d(){}function g(){}function v(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(P([])));b&&b!==r&&n.call(b,i)&&(m=b);var x=v.prototype=d.prototype=Object.create(m);function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){var e;this._invoke=function(r,o){function i(){return new Promise((function(e,i){!function e(r,o,i,a){var c=s(t[r],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}(r,o,e,i)}))}return e=e?e.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return g.prototype=x.constructor=v,v.constructor=g,v[c]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o){var i=new L(u(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;0<=i;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}(t={exports:{}}),t.exports);function o(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var i=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}c(void 0)}))}},a=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=function(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),t},s="danmuku_settings";function f(t){var e=JSON.parse(window.localStorage.getItem(s))||{};return t?e[t]:e}function h(t,r){var n=Object.assign({},f(),e({},t,r));return window.localStorage.setItem(s,JSON.stringify(n))}function l(){return window.localStorage.removeItem(s)}function p(t){return Object.keys(t).map((function(e){return"".concat(e,"=").concat(window.encodeURIComponent(t[e]||""))})).join("&")}function y(t,e,r){if(!t)throw r&&r(),new Error("Danmuku Error: ".concat(e))}return function(){function t(e){a(this,t),this.options=Object.assign({},t.DEFAULT,e),this.limit=0,this.remaining=0,this.userInfo=null,this.token=null,this.isLogin=!1,this.init()}var e,o,c,s;return u(t,[{key:"init",value:(s=i(n.mark((function t(){var e,r,o,i,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(window.location.href.match(/([^?=&]+)(=([^&]*))/g)||[]).reduce((function(t,e){return t[e.slice(0,e.indexOf("="))]=e.slice(e.indexOf("=")+1),t}),{}),r=e.code)return t.next=4,this.getToken(r);t.next=15;break;case 4:return y((o=t.sent).access_token,"Can not get token, Please login again!"),h("token",o.access_token),t.next=9,this.getUserInfo(o.access_token);case 9:y((i=t.sent).id,"Can not get user info, Please login again!"),h("userInfo",i),y(a=f("redirect_uri"),"Can not get redirect url, Please login again!"),window.history.replaceState(null,"",a);case 15:this.userInfo=f("userInfo"),this.token=f("token"),this.isLogin=!!this.userInfo&&!!this.token;case 18:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)})},{key:"login",value:function(){l(),h("redirect_uri",window.location.href),window.location.href="http://github.com/login/oauth/authorize?".concat(p({state:"issues-danmuku",client_id:this.options.clientID,redirect_uri:window.location.href,scope:"public_repo"}))}},{key:"logout",value:function(){l(),window.location.reload()}},{key:"request",value:(c=i(n.mark((function t(e,r,o){var i,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=e.toUpperCase(),o=o&&JSON.stringify(o),i={"Content-Type":"application/json",Accept:"application/json"},this.token&&(i.Authorization="token ".concat(this.token)),t.prev=4,t.next=7,fetch(r,{method:e,headers:i,body:o});case 7:if(404===(a=t.sent).status)return t.abrupt("return",Promise.reject(new Error("Unauthorized")));t.next=12;break;case 12:if(401===a.status)return t.next=15,l();t.next=18;break;case 15:return t.abrupt("return",window.location.reload());case 18:return this.limit=Number(a.headers.get("X-RateLimit-Limit")),this.remaining=Number(a.headers.get("X-RateLimit-Remaining")),t.abrupt("return",a.json());case 21:t.next=26;break;case 23:t.prev=23,t.t0=t.catch(4),console.warn(t.t0,r);case 26:case"end":return t.stop()}}),t,this,[[4,23]])}))),function(t,e,r){return c.apply(this,arguments)})},{key:"urlQuery",value:function(t){return r({client_id:this.options.clientID,client_secret:this.options.clientSecret,t:Date.now()},t)}},{key:"getToken",value:function(t){var e=this.urlQuery({code:t,redirect_uri:window.location.href});return this.request("get","".concat(this.options.proxy,"?").concat(p(e)))}},{key:"getUserInfo",value:function(t){return this.request("get","https://api.github.com/user?access_token=".concat(t))}},{key:"load",value:(o=i(n.mark((function t(){var e;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.request("get","https://api.github.com/repos/".concat(this.options.api,"/comments?").concat(p(this.urlQuery({per_page:this.options.perPage,page:1}))));case 2:return e=t.sent,y(Array.isArray(e),"Can not get the danmuku, Please try again!"),t.abrupt("return",e.map((function(t){var e=JSON.parse(t.body);return r({id:t.id},e)})));case 5:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"send",value:(e=i(n.mark((function t(){var e,r,o,i=arguments;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=0<i.length&&void 0!==i[0]?i[0]:{},r=this.urlQuery({body:JSON.stringify(e)}),t.next=4,this.request("post","https://api.github.com/repos/".concat(this.options.api,"/comments"),r);case 4:return y((o=t.sent).id,"Can not send the danmu, Please try again!"),t.abrupt("return",JSON.parse(o.body));case 7:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}],[{key:"DEFAULT",get:function(){return{api:"",clientID:"",clientSecret:"",perPage:1e3,proxy:"https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token"}}}]),t}()}()}))}));
