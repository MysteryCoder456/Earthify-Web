var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function i(){return Object.create(null)}function s(t){t.forEach(n)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}const h="undefined"!=typeof window;let u=h?()=>window.performance.now():()=>Date.now(),l=h?t=>requestAnimationFrame(t):t;const d=new Set;function f(t){d.forEach((e=>{e.c(t)||(d.delete(e),e.f())})),0!==d.size&&l(f)}function p(t,e){t.appendChild(e)}function g(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function m(t){const e=w("style");return function(t,e){p(t.head||t,e)}(g(t),e),e}function y(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function E(){return b(" ")}function I(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const T=new Set;let S,A=0;function C(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-i.length;s&&(t.style.animation=i.join(", "),A-=s,A||l((()=>{A||(T.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),T.clear())})))}function k(t){S=t}function D(t){(function(){if(!S)throw new Error("Function called outside component initialization");return S})().$$.on_mount.push(t)}const R=[],N=[],x=[],L=[],O=Promise.resolve();let P=!1;function M(t){x.push(t)}let F=!1;const U=new Set;function V(){if(!F){F=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];k(e),$(e.$$)}for(k(null),R.length=0;N.length;)N.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];U.has(e)||(U.add(e),e())}x.length=0}while(R.length);for(;L.length;)L.pop()();P=!1,F=!1,U.clear()}}function $(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let j;function q(t,e,n){t.dispatchEvent(function(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}(`${e?"intro":"outro"}${n}`))}const B=new Set;let H;function z(){H={r:0,c:[],p:H}}function K(){H.r||s(H.c),H=H.p}function G(t,e){t&&t.i&&(B.delete(t),t.i(e))}function W(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),H.c.push((()=>{B.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}const Q={duration:0};function Y(n,i,s){let o,a,c=i(n,s),h=!1,p=0;function y(){o&&C(n,o)}function v(){const{delay:i=0,duration:s=300,easing:r=e,tick:v=t,css:w}=c||Q;w&&(o=function(t,e,n,i,s,r,o,a=0){const c=16.666/i;let h="{\n";for(let t=0;t<=1;t+=c){const i=e+(n-e)*r(t);h+=100*t+`%{${o(i,1-i)}}\n`}const u=h+`100% {${o(n,1-n)}}\n}`,l=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,d=g(t);T.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=m(t).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[l]||(p[l]=!0,f.insertRule(`@keyframes ${l} ${u}`,f.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${l} ${i}ms linear ${s}ms 1 both`,A+=1,l}(n,0,1,s,i,r,w,p++)),v(0,1);const b=u()+i,E=b+s;a&&a.abort(),h=!0,M((()=>q(n,!0,"start"))),a=function(t){let e;return 0===d.size&&l(f),{promise:new Promise((n=>{d.add(e={c:t,f:n})})),abort(){d.delete(e)}}}((t=>{if(h){if(t>=E)return v(1,0),q(n,!0,"end"),y(),h=!1;if(t>=b){const e=r((t-b)/s);v(e,1-e)}}return h}))}let w=!1;return{start(){w||(w=!0,C(n),r(c)?(c=c(),(j||(j=Promise.resolve(),j.then((()=>{j=null}))),j).then(v)):v())},invalidate(){w=!1},end(){h&&(y(),h=!1)}}}function X(t,e){W(t,1,1,(()=>{e.delete(t.key)}))}function J(t){t&&t.c()}function Z(t,e,i,o){const{fragment:a,on_mount:c,on_destroy:h,after_update:u}=t.$$;a&&a.m(e,i),o||M((()=>{const e=c.map(n).filter(r);h?h.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(M)}function tt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){-1===t.$$.dirty[0]&&(R.push(t),P||(P=!0,O.then(V)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,n,r,o,a,c,h,u=[-1]){const l=S;k(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:i(),dirty:u,skip_bound:!1,root:n.target||l.$$.root};h&&h(d.root);let f=!1;if(d.ctx=r?r(e,n.props||{},((t,n,...i)=>{const s=i.length?i[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),f&&et(e,t)),n})):[],d.update(),f=!0,s(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&G(e.$$.fragment),Z(e,n.target,n.anchor,n.customElement),V()}k(l)}class it{$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function st(t){var e={exports:{}};return t(e,e.exports),e.exports}var rt=st((function(t,e){t.exports=function(){var t=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},e=v,n=a,i=c,s=h,r=y,o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(t){for(var e,n=[],i=0,s=0,r="";null!=(e=o.exec(t));){var a=e[0],c=e[1],h=e.index;if(r+=t.slice(s,h),s=h+a.length,c)r+=c[1];else{r&&(n.push(r),r="");var u=e[2],d=e[3],f=e[4],p=e[5],g=e[6],m=e[7],y="+"===g||"*"===g,v="?"===g||"*"===g,w=u||"/",b=f||p||(m?".*":"[^"+w+"]+?");n.push({name:d||i++,prefix:u||"",delimiter:w,optional:v,repeat:y,pattern:l(b)})}}return s<t.length&&(r+=t.substr(s)),r&&n.push(r),n}function c(t){return h(a(t))}function h(e){for(var n=new Array(e.length),i=0;i<e.length;i++)"object"==typeof e[i]&&(n[i]=new RegExp("^"+e[i].pattern+"$"));return function(i){for(var s="",r=i||{},o=0;o<e.length;o++){var a=e[o];if("string"!=typeof a){var c,h=r[a.name];if(null==h){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(t(h)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+h+'"');if(0===h.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<h.length;u++){if(c=encodeURIComponent(h[u]),!n[o].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');s+=(0===u?a.prefix:a.delimiter)+c}}else{if(c=encodeURIComponent(h),!n[o].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');s+=a.prefix+c}}else s+=a}return s}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function l(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function d(t,e){return t.keys=e,t}function f(t){return t.sensitive?"":"i"}function p(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return d(t,e)}function g(t,e,n){for(var i=[],s=0;s<t.length;s++)i.push(v(t[s],e,n).source);return d(new RegExp("(?:"+i.join("|")+")",f(n)),e)}function m(t,e,n){for(var i=a(t),s=y(i,n),r=0;r<i.length;r++)"string"!=typeof i[r]&&e.push(i[r]);return d(s,e)}function y(t,e){for(var n=(e=e||{}).strict,i=!1!==e.end,s="",r=t[t.length-1],o="string"==typeof r&&/\/$/.test(r),a=0;a<t.length;a++){var c=t[a];if("string"==typeof c)s+=u(c);else{var h=u(c.prefix),l=c.pattern;c.repeat&&(l+="(?:"+h+l+")*"),s+=l=c.optional?h?"(?:"+h+"("+l+"))?":"("+l+")?":h+"("+l+")"}}return n||(s=(o?s.slice(0,-2):s)+"(?:\\/(?=$))?"),s+=i?"$":n&&o?"":"(?=\\/|$)",new RegExp("^"+s,f(e))}function v(e,n,i){return t(n=n||[])?i||(i={}):(i=n,n=[]),e instanceof RegExp?p(e,n):t(e)?g(e,n,i):m(e,n,i)}e.parse=n,e.compile=i,e.tokensToFunction=s,e.tokensToRegExp=r;var w,b="undefined"!=typeof document,E="undefined"!=typeof window,I="undefined"!=typeof history,_="undefined"!=typeof process,T=b&&document.ontouchstart?"touchstart":"click",S=E&&!(!window.history.location&&!window.location);function A(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function C(){var t=new A;function e(){return k.apply(t,arguments)}return e.callbacks=t.callbacks,e.exits=t.exits,e.base=t.base.bind(t),e.strict=t.strict.bind(t),e.start=t.start.bind(t),e.stop=t.stop.bind(t),e.show=t.show.bind(t),e.back=t.back.bind(t),e.redirect=t.redirect.bind(t),e.replace=t.replace.bind(t),e.dispatch=t.dispatch.bind(t),e.exit=t.exit.bind(t),e.configure=t.configure.bind(t),e.sameOrigin=t.sameOrigin.bind(t),e.clickHandler=t.clickHandler.bind(t),e.create=C,Object.defineProperty(e,"len",{get:function(){return t.len},set:function(e){t.len=e}}),Object.defineProperty(e,"current",{get:function(){return t.current},set:function(e){t.current=e}}),e.Context=N,e.Route=x,e}function k(t,e){if("function"==typeof t)return k.call(this,"*",t);if("function"==typeof e)for(var n=new x(t,null,this),i=1;i<arguments.length;++i)this.callbacks.push(n.middleware(arguments[i]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function D(t){if(!t.handled){var e=this,n=e._window;(e._hashbang?S&&this._getBase()+n.location.hash.replace("#!",""):S&&n.location.pathname+n.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,S&&(n.location.href=t.canonicalPath))}}function R(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function N(t,e,n){var i=this.page=n||k,s=i._window,r=i._hashbang,o=i._getBase();"/"===t[0]&&0!==t.indexOf(o)&&(t=o+(r?"#!":"")+t);var a=t.indexOf("?");this.canonicalPath=t;var c=new RegExp("^"+R(o));if(this.path=t.replace(c,"")||"/",r&&(this.path=this.path.replace("#!","")||"/"),this.title=b&&s.document.title,this.state=e||{},this.state.path=t,this.querystring=~a?i._decodeURLEncodedURIComponent(t.slice(a+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~a?t.slice(0,a):t),this.params={},this.hash="",!r){if(!~this.path.indexOf("#"))return;var h=this.path.split("#");this.path=this.pathname=h[0],this.hash=i._decodeURLEncodedURIComponent(h[1])||"",this.querystring=this.querystring.split("#")[0]}}function x(t,n,i){var s=this.page=i||L,r=n||{};r.strict=r.strict||s._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=e(this.path,this.keys=[],r)}A.prototype.configure=function(t){var e=t||{};this._window=e.window||E&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&E,this._click=!1!==e.click&&b,this._hashbang=!!e.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):E&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(T,this.clickHandler,!1):b&&n.document.removeEventListener(T,this.clickHandler,!1),this._hashbang&&E&&!I?n.addEventListener("hashchange",this._onpopstate,!1):E&&n.removeEventListener("hashchange",this._onpopstate,!1)},A.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},A.prototype._getBase=function(){var t=this._base;if(t)return t;var e=E&&this._window&&this._window.location;return E&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},A.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},A.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var n;if(this._running=!0,S){var i=this._window.location;n=this._hashbang&&~i.hash.indexOf("#!")?i.hash.substr(2)+i.search:this._hashbang?i.search+i.hash:i.pathname+i.search+i.hash}this.replace(n,null,!0,e.dispatch)}},A.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(T,this.clickHandler,!1),E&&t.removeEventListener("popstate",this._onpopstate,!1),E&&t.removeEventListener("hashchange",this._onpopstate,!1)}},A.prototype.show=function(t,e,n,i){var s=new N(t,e,this),r=this.prevContext;return this.prevContext=s,this.current=s.path,!1!==n&&this.dispatch(s,r),!1!==s.handled&&!1!==i&&s.pushState(),s},A.prototype.back=function(t,e){var n=this;if(this.len>0){var i=this._window;I&&i.history.back(),this.len--}else t?setTimeout((function(){n.show(t,e)})):setTimeout((function(){n.show(n._getBase(),e)}))},A.prototype.redirect=function(t,e){var n=this;"string"==typeof t&&"string"==typeof e&&k.call(this,t,(function(t){setTimeout((function(){n.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){n.replace(t)}),0)},A.prototype.replace=function(t,e,n,i){var s=new N(t,e,this),r=this.prevContext;return this.prevContext=s,this.current=s.path,s.init=n,s.save(),!1!==i&&this.dispatch(s,r),s},A.prototype.dispatch=function(t,e){var n=0,i=0,s=this;function r(){var t=s.exits[i++];if(!t)return o();t(e,r)}function o(){var e=s.callbacks[n++];if(t.path===s.current)return e?void e(t,o):D.call(s,t);t.handled=!1}e?r():o()},A.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var n=new x(t,null,this),i=1;i<arguments.length;++i)this.exits.push(n.middleware(arguments[i]))},A.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,n=t.path||(t.composedPath?t.composedPath():null);if(n)for(var i=0;i<n.length;i++)if(n[i].nodeName&&"A"===n[i].nodeName.toUpperCase()&&n[i].href){e=n[i];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var s="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var r=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==r)&&!(r&&r.indexOf("mailto:")>-1)&&!(s?e.target.baseVal:e.target)&&(s||this.sameOrigin(e.href))){var o=s?e.href.baseVal:e.pathname+e.search+(e.hash||"");o="/"!==o[0]?"/"+o:o,_&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var a=o,c=this._getBase();0===o.indexOf(c)&&(o=o.substr(c.length)),this._hashbang&&(o=o.replace("#!","")),(!c||a!==o||S&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(a))}}}}},A.prototype._onpopstate=(w=!1,E?(b&&"complete"===document.readyState?w=!0:window.addEventListener("load",(function(){setTimeout((function(){w=!0}),0)})),function(t){if(w){var e=this;if(t.state){var n=t.state.path;e.replace(n,t.state)}else if(S){var i=e._window.location;e.show(i.pathname+i.search+i.hash,void 0,void 0,!1)}}}):function(){}),A.prototype._which=function(t){return null==(t=t||E&&this._window.event).which?t.button:t.which},A.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&S)return new URL(t,e.location.toString());if(b){var n=e.document.createElement("a");return n.href=t,n}},A.prototype.sameOrigin=function(t){if(!t||!S)return!1;var e=this._toURL(t),n=this._window.location;return n.protocol===e.protocol&&n.hostname===e.hostname&&(n.port===e.port||""===n.port&&(80==e.port||443==e.port))},A.prototype._samePath=function(t){if(!S)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},A.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},N.prototype.pushState=function(){var t=this.page,e=t._window,n=t._hashbang;t.len++,I&&e.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},N.prototype.save=function(){var t=this.page;I&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},x.prototype.middleware=function(t){var e=this;return function(n,i){if(e.match(n.path,n.params))return n.routePath=e.path,t(n,i);i()}},x.prototype.match=function(t,e){var n=this.keys,i=t.indexOf("?"),s=~i?t.slice(0,i):t,r=this.regexp.exec(decodeURIComponent(s));if(!r)return!1;delete e[0];for(var o=1,a=r.length;o<a;++o){var c=n[o-1],h=this.page._decodeURLEncodedURIComponent(r[o]);void 0===h&&hasOwnProperty.call(e,c.name)||(e[c.name]=h)}return!0};var L=C(),O=L,P=L;return O.default=P,O}()}));function ot(t,{delay:n=0,duration:i=400,easing:s=e}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:i,easing:s,css:t=>"opacity: "+t*r}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class at{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ct(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ht(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}class ut extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lt.prototype.create)}}class lt{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,e){return t.replace(dt,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new ut(i,o,n)}}const dt=/\{\$([^}]+)}/g;function ft(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(pt(n)&&pt(r)){if(!ft(n,r))return!1}else if(n!==r)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function pt(t){return null!==t&&"object"==typeof t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function gt(t,e=1e3,n=2){const i=e*Math.pow(n,t),s=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+s)}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function mt(t){return t&&t._delegate?t._delegate:t}class yt{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const vt="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wt{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new at;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t))try{this.getOrInitializeService({instanceIdentifier:vt})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===vt?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:vt:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class bt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new wt(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Et;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(Et||(Et={}));const It={debug:Et.DEBUG,verbose:Et.VERBOSE,info:Et.INFO,warn:Et.WARN,error:Et.ERROR,silent:Et.SILENT},_t=Et.INFO,Tt={[Et.DEBUG]:"log",[Et.VERBOSE]:"log",[Et.INFO]:"info",[Et.WARN]:"warn",[Et.ERROR]:"error"},St=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=Tt[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class At{constructor(t){this.name=t,this._logLevel=_t,this._logHandler=St,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Et))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?It[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Et.DEBUG,...t),this._logHandler(this,Et.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Et.VERBOSE,...t),this._logHandler(this,Et.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Et.INFO,...t),this._logHandler(this,Et.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Et.WARN,...t),this._logHandler(this,Et.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Et.ERROR,...t),this._logHandler(this,Et.ERROR,...t)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ct{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const kt="@firebase/app",Dt="0.7.9",Rt=new At("@firebase/app"),Nt="[DEFAULT]",xt={[kt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Lt=new Map,Ot=new Map;function Pt(t,e){try{t.container.addComponent(e)}catch(n){Rt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mt(t){const e=t.name;if(Ot.has(e))return Rt.debug(`There were multiple attempts to register component ${e}.`),!1;Ot.set(e,t);for(const e of Lt.values())Pt(e,t);return!0}function Ft(t,e){return t.container.getProvider(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ut=new lt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Vt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new yt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const $t="9.5.0";function jt(t="[DEFAULT]"){const e=Lt.get(t);if(!e)throw Ut.create("no-app",{appName:t});return e}function qt(t,e,n){var i;let s=null!==(i=xt[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Rt.warn(t.join(" "))}Mt(new yt(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Bt;Bt="",Mt(new yt("platform-logger",(t=>new Ct(t)),"PRIVATE")),qt(kt,Dt,Bt),qt(kt,Dt,"esm2017"),qt("fire-js","");var Ht,zt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Kt=Kt||{},Gt=zt||self;function Wt(){}function Qt(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Yt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Xt="closure_uid_"+(1e9*Math.random()>>>0),Jt=0;function Zt(t,e,n){return t.call.apply(t.bind,arguments)}function te(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function ee(t,e,n){return(ee=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Zt:te).apply(null,arguments)}function ne(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ie(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function se(){this.s=this.s,this.o=this.o}var re={};se.prototype.s=!1,se.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,Xt)&&t[Xt]||(t[Xt]=++Jt)}(this);delete re[t]}},se.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const oe=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},ae=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function ce(t){return Array.prototype.concat.apply([],arguments)}function he(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function ue(t){return/^[\s\xa0]*$/.test(t)}var le,de=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function fe(t,e){return-1!=t.indexOf(e)}function pe(t,e){return t<e?-1:t>e?1:0}t:{var ge=Gt.navigator;if(ge){var me=ge.userAgent;if(me){le=me;break t}}le=""}function ye(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ve(t){const e={};for(const n in t)e[n]=t[n];return e}var we="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function be(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<we.length;e++)n=we[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ee(t){return Ee[" "](t),t}Ee[" "]=Wt;var Ie,_e,Te=fe(le,"Opera"),Se=fe(le,"Trident")||fe(le,"MSIE"),Ae=fe(le,"Edge"),Ce=Ae||Se,ke=fe(le,"Gecko")&&!(fe(le.toLowerCase(),"webkit")&&!fe(le,"Edge"))&&!(fe(le,"Trident")||fe(le,"MSIE"))&&!fe(le,"Edge"),De=fe(le.toLowerCase(),"webkit")&&!fe(le,"Edge");function Re(){var t=Gt.document;return t?t.documentMode:void 0}t:{var Ne="",xe=(_e=le,ke?/rv:([^\);]+)(\)|;)/.exec(_e):Ae?/Edge\/([\d\.]+)/.exec(_e):Se?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(_e):De?/WebKit\/(\S+)/.exec(_e):Te?/(?:Version)[ \/]?(\S+)/.exec(_e):void 0);if(xe&&(Ne=xe?xe[1]:""),Se){var Le=Re();if(null!=Le&&Le>parseFloat(Ne)){Ie=String(Le);break t}}Ie=Ne}var Oe,Pe={};function Me(){return function(t){var e=Pe;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=de(String(Ie)).split("."),n=de("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=pe(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||pe(0==s[2].length,0==r[2].length)||pe(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(Gt.document&&Se){var Fe=Re();Oe=Fe||(parseInt(Ie,10)||void 0)}else Oe=void 0;var Ue=Oe,Ve=function(){if(!Gt.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Gt.addEventListener("test",Wt,e),Gt.removeEventListener("test",Wt,e)}catch(t){}return t}();function $e(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function je(t,e){if($e.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ke){t:{try{Ee(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:qe[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&je.Z.h.call(this)}}$e.prototype.h=function(){this.defaultPrevented=!0},ie(je,$e);var qe={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Be="closure_listenable_"+(1e6*Math.random()|0),He=0;function ze(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++He,this.ca=this.fa=!1}function Ke(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ge(t){this.src=t,this.g={},this.h=0}function We(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=oe(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ke(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Qe(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}Ge.prototype.add=function(t,e,n,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=Qe(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new ze(e,this.src,r,!!i,s)).fa=n,t.push(e)),e};var Ye="closure_lm_"+(1e6*Math.random()|0),Xe={};function Je(t,e,n,i,s){if(i&&i.once)return tn(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Je(t,e[r],n,i,s);return null}return n=cn(n),t&&t[Be]?t.N(e,n,Yt(i)?!!i.capture:!!i,s):Ze(t,e,n,!1,i,s)}function Ze(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Yt(s)?!!s.capture:!!s,a=on(t);if(a||(t[Ye]=a=new Ge(t)),(n=a.add(e,n,i,o,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}var e=rn;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Ve||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(sn(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function tn(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)tn(t,e[r],n,i,s);return null}return n=cn(n),t&&t[Be]?t.O(e,n,Yt(i)?!!i.capture:!!i,s):Ze(t,e,n,!0,i,s)}function en(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)en(t,e[r],n,i,s);else i=Yt(i)?!!i.capture:!!i,n=cn(n),t&&t[Be]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Qe(r=t.g[e],n,i,s))&&(Ke(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=on(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Qe(e,n,i,s)),(n=-1<t?e[t]:null)&&nn(n))}function nn(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Be])We(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(sn(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=on(e))?(We(n,t),0==n.h&&(n.src=null,e[Ye]=null)):Ke(t)}}}function sn(t){return t in Xe?Xe[t]:Xe[t]="on"+t}function rn(t,e){if(t.ca)t=!0;else{e=new je(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&nn(t),t=n.call(i,e)}return t}function on(t){return(t=t[Ye])instanceof Ge?t:null}var an="__closure_events_fn_"+(1e9*Math.random()>>>0);function cn(t){return"function"==typeof t?t:(t[an]||(t[an]=function(e){return t.handleEvent(e)}),t[an])}function hn(){se.call(this),this.i=new Ge(this),this.P=this,this.I=null}function un(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new $e(e,t);else if(e instanceof $e)e.target=e.target||t;else{var s=e;be(e=new $e(i,t),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=ln(o,i,!0,e)&&s}if(s=ln(o=e.g=t,i,!0,e)&&s,s=ln(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)s=ln(o=e.g=n[r],i,!1,e)&&s}function ln(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&We(t.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}ie(hn,se),hn.prototype[Be]=!0,hn.prototype.removeEventListener=function(t,e,n,i){en(this,t,e,n,i)},hn.prototype.M=function(){if(hn.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Ke(n[i]);delete e.g[t],e.h--}}this.I=null},hn.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},hn.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var dn=Gt.JSON.stringify;function fn(){var t=bn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var pn,gn=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new mn),(t=>t.reset()));class mn{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function yn(t){Gt.setTimeout((()=>{throw t}),0)}function vn(t,e){pn||function(){var t=Gt.Promise.resolve(void 0);pn=function(){t.then(En)}}(),wn||(pn(),wn=!0),bn.add(t,e)}var wn=!1,bn=new class{constructor(){this.h=this.g=null}add(t,e){const n=gn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function En(){for(var t;t=fn();){try{t.h.call(t.g)}catch(t){yn(t)}var e=gn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wn=!1}function In(t,e){hn.call(this),this.h=t||1,this.g=e||Gt,this.j=ee(this.kb,this),this.l=Date.now()}function _n(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Tn(t,e,n){if("function"==typeof t)n&&(t=ee(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ee(t.handleEvent,t)}return 2147483647<Number(e)?-1:Gt.setTimeout(t,e||0)}function Sn(t){t.g=Tn((()=>{t.g=null,t.i&&(t.i=!1,Sn(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}ie(In,hn),(Ht=In.prototype).da=!1,Ht.S=null,Ht.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),un(this,"tick"),this.da&&(_n(this),this.start()))}},Ht.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ht.M=function(){In.Z.M.call(this),_n(this),delete this.g};class An extends se{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Sn(this)}M(){super.M(),this.g&&(Gt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cn(t){se.call(this),this.h=t,this.g={}}ie(Cn,se);var kn=[];function Dn(t,e,n,i){Array.isArray(n)||(n&&(kn[0]=n.toString()),n=kn);for(var s=0;s<n.length;s++){var r=Je(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Rn(t){ye(t.g,(function(t,e){this.g.hasOwnProperty(e)&&nn(t)}),t),t.g={}}function Nn(){this.g=!0}function xn(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return dn(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Cn.prototype.M=function(){Cn.Z.M.call(this),Rn(this)},Cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Nn.prototype.Aa=function(){this.g=!1},Nn.prototype.info=function(){};var Ln={},On=null;function Pn(){return On=On||new hn}function Mn(t){$e.call(this,Ln.Ma,t)}function Fn(t){const e=Pn();un(e,new Mn(e,t))}function Un(t,e){$e.call(this,Ln.STAT_EVENT,t),this.stat=e}function Vn(t){const e=Pn();un(e,new Un(e,t))}function $n(t,e){$e.call(this,Ln.Na,t),this.size=e}function jn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Gt.setTimeout((function(){t()}),e)}Ln.Ma="serverreachability",ie(Mn,$e),Ln.STAT_EVENT="statevent",ie(Un,$e),Ln.Na="timingevent",ie($n,$e);var qn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Bn={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Hn(){}function zn(t){return t.h||(t.h=t.i())}function Kn(){}Hn.prototype.h=null;var Gn,Wn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Qn(){$e.call(this,"d")}function Yn(){$e.call(this,"c")}function Xn(){}function Jn(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Cn(this),this.P=ti,t=Ce?125:void 0,this.W=new In(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Zn}function Zn(){this.i=null,this.g="",this.h=!1}ie(Qn,$e),ie(Yn,$e),ie(Xn,Hn),Xn.prototype.g=function(){return new XMLHttpRequest},Xn.prototype.i=function(){return{}},Gn=new Xn;var ti=45e3,ei={},ni={};function ii(t,e,n){t.K=1,t.v=Ai(bi(e)),t.s=n,t.U=!0,si(t,null)}function si(t,e){t.F=Date.now(),ci(t),t.A=bi(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Vi(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Zn,t.g=Vs(t.l,n?e:null,!t.s),0<t.O&&(t.L=new An(ee(t.Ia,t,t.g),t.O)),Dn(t.V,t.g,"readystatechange",t.gb),e=t.H?ve(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Fn(1),function(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function ri(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function oi(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=ai(t,n),i==ni){4==e&&(t.o=4,Vn(14),s=!1),xn(t.j,t.m,null,"[Incomplete Response]");break}if(i==ei){t.o=4,Vn(15),xn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}xn(t.j,t.m,i,null),fi(t,i)}ri(t)&&i!=ni&&i!=ei&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Vn(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ns(e),e.L=!0,Vn(11))):(xn(t.j,t.m,n,"[Invalid Chunked Response]"),di(t),li(t))}function ai(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?ni:(n=Number(e.substring(n,i)),isNaN(n)?ei:(i+=1)+n>e.length?ni:(e=e.substr(i,n),t.C=i+n,e))}function ci(t){t.Y=Date.now()+t.P,hi(t,t.P)}function hi(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=jn(ee(t.eb,t),e)}function ui(t){t.B&&(Gt.clearTimeout(t.B),t.B=null)}function li(t){0==t.l.G||t.I||Os(t.l,t)}function di(t){ui(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,_n(t.W),Rn(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function fi(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||zi(n.i,t)))if(n.I=t.N,!t.J&&zi(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ls(n),Is(n)}Rs(n),Vn(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=jn(ee(n.ab,n),6e3));if(1>=Hi(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Ms(n,11)}else if((t.J||n.g==t)&&Ls(n),!ue(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let h=s[e];if(n.U=h[0],h=h[1],2==n.G)if("c"==h[0]){n.J=h[1],n.la=h[2];const e=h[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=h[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const u=h[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;!r.g&&(fe(t,"spdy")||fe(t,"quic")||fe(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Ki(r,r.h),r.h=null))}if(i.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,Si(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((i=n).oa=Us(i,i.H?i.la:null,i.W),o.J){Gi(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(ui(a),ci(a)),i.g=o}else Ds(i);0<n.l.length&&Ss(n)}else"stop"!=h[0]&&"close"!=h[0]||Ms(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?Ms(n,7):Es(n):"noop"!=h[0]&&n.j&&n.j.wa(h),n.A=0)}Fn(4)}catch(t){}}function pi(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Qt(t)||"string"==typeof t)ae(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Qt(t)||"string"==typeof t){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(Qt(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function gi(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof gi)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function mi(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];yi(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)yi(s,i=t.g[e])||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}function yi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(Ht=Jn.prototype).setTimeout=function(t){this.P=t},Ht.gb=function(t){t=t.target;const e=this.L;e&&3==ms(t)?e.l():this.Ia(t)},Ht.Ia=function(t){try{if(t==this.g)t:{const u=ms(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>u)&&(3!=u||Ce||this.g&&(this.h.h||this.g.ga()||ys(this.g)))){this.I||4!=u||7==e||Fn(8==e||0>=l?3:2),ui(this);var n=this.g.ba();this.N=n;e:if(ri(this)){var i=ys(this.g);t="";var s=i.length,r=4==ms(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){di(this),li(this);var o="";break e}this.h.i=new Gt.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ue(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,Vn(12),di(this),li(this);break t}xn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,fi(this,n)}this.U?(oi(this,u,o),Ce&&this.i&&3==u&&(Dn(this.V,this.W,"tick",this.fb),this.W.start())):(xn(this.j,this.m,o,null),fi(this,o)),4==u&&di(this),this.i&&!this.I&&(4==u?Os(this.l,this):(this.i=!1,ci(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Vn(12)):(this.o=0,Vn(13)),di(this),li(this)}}}catch(t){}},Ht.fb=function(){if(this.g){var t=ms(this.g),e=this.g.ga();this.C<e.length&&(ui(this),oi(this,t,e),this.i&&4!=t&&ci(this))}},Ht.cancel=function(){this.I=!0,di(this)},Ht.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Fn(3),Vn(17)),di(this),this.o=2,li(this)):hi(this,this.Y-t)},(Ht=gi.prototype).R=function(){mi(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},Ht.T=function(){return mi(this),this.g.concat()},Ht.get=function(t,e){return yi(this.h,t)?this.h[t]:e},Ht.set=function(t,e){yi(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},Ht.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};var vi=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function wi(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof wi){this.g=void 0!==e?e:t.g,Ei(this,t.j),this.s=t.s,Ii(this,t.i),_i(this,t.m),this.l=t.l,e=t.h;var n=new Pi;n.i=e.i,e.g&&(n.g=new gi(e.g),n.h=e.h),Ti(this,n),this.o=t.o}else t&&(n=String(t).match(vi))?(this.g=!!e,Ei(this,n[1]||"",!0),this.s=Ci(n[2]||""),Ii(this,n[3]||"",!0),_i(this,n[4]),this.l=Ci(n[5]||"",!0),Ti(this,n[6]||"",!0),this.o=Ci(n[7]||"")):(this.g=!!e,this.h=new Pi(null,this.g))}function bi(t){return new wi(t)}function Ei(t,e,n){t.j=n?Ci(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ii(t,e,n){t.i=n?Ci(e,!0):e}function _i(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ti(t,e,n){e instanceof Pi?(t.h=e,function(t,e){e&&!t.j&&(Mi(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Fi(this,e),Vi(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=ki(e,Li)),t.h=new Pi(e,t.g))}function Si(t,e,n){t.h.set(e,n)}function Ai(t){return Si(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ci(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ki(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Di),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Di(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}wi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ki(e,Ri,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ki(e,Ri,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(ki(n,"/"==n.charAt(0)?xi:Ni,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ki(n,Oi)),t.join("")};var Ri=/[#\/\?@]/g,Ni=/[#\?:]/g,xi=/[#\?]/g,Li=/[#\?@]/g,Oi=/#/g;function Pi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Mi(t){t.g||(t.g=new gi,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Fi(t,e){Mi(t),e=$i(t,e),yi(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,yi((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&mi(t)))}function Ui(t,e){return Mi(t),e=$i(t,e),yi(t.g.h,e)}function Vi(t,e,n){Fi(t,e),0<n.length&&(t.i=null,t.g.set($i(t,e),he(n)),t.h+=n.length)}function $i(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ht=Pi.prototype).add=function(t,e){Mi(this),this.i=null,t=$i(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ht.forEach=function(t,e){Mi(this),this.g.forEach((function(n,i){ae(n,(function(n){t.call(e,n,i,this)}),this)}),this)},Ht.T=function(){Mi(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n},Ht.R=function(t){Mi(this);var e=[];if("string"==typeof t)Ui(this,t)&&(e=ce(e,this.g.get($i(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=ce(e,t[n])}return e},Ht.set=function(t,e){return Mi(this),this.i=null,Ui(this,t=$i(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ht.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},Ht.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function ji(t){this.l=t||qi,Gt.PerformanceNavigationTiming?t=0<(t=Gt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Gt.g&&Gt.g.Ea&&Gt.g.Ea()&&Gt.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qi=10;function Bi(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Hi(t){return t.h?1:t.g?t.g.size:0}function zi(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ki(t,e){t.g?t.g.add(e):t.h=e}function Gi(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Wi(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return he(t.i)}function Qi(){}function Yi(){this.g=new Qi}function Xi(t,e,n){const i=n||"";try{pi(t,(function(t,n){let s=t;Yt(t)&&(s=dn(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function Ji(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(t){}}function Zi(t){this.l=t.$b||null,this.j=t.ib||!1}function ts(t,e){hn.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=es,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ji.prototype.cancel=function(){if(this.i=Wi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Qi.prototype.stringify=function(t){return Gt.JSON.stringify(t,void 0)},Qi.prototype.parse=function(t){return Gt.JSON.parse(t,void 0)},ie(Zi,Hn),Zi.prototype.g=function(){return new ts(this.l,this.j)},Zi.prototype.i=function(t){return function(){return t}}({}),ie(ts,hn);var es=0;function ns(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function is(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ss(t)}function ss(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ht=ts.prototype).open=function(t,e){if(this.readyState!=es)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ss(this)},Ht.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Gt).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},Ht.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,is(this)),this.readyState=es},Ht.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ss(this)),this.g&&(this.readyState=3,ss(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Gt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ns(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},Ht.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?is(this):ss(this),3==this.readyState&&ns(this)}},Ht.Ua=function(t){this.g&&(this.response=this.responseText=t,is(this))},Ht.Ta=function(t){this.g&&(this.response=t,is(this))},Ht.ha=function(){this.g&&is(this)},Ht.setRequestHeader=function(t,e){this.v.append(t,e)},Ht.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ht.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ts.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var rs=Gt.JSON.parse;function os(t){hn.call(this),this.headers=new gi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=as,this.K=this.L=!1}ie(os,hn);var as="",cs=/^https?$/i,hs=["POST","PUT"];function us(t){return"content-type"==t.toLowerCase()}function ls(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ds(t),ps(t)}function ds(t){t.D||(t.D=!0,un(t,"complete"),un(t,"error"))}function fs(t){if(t.h&&void 0!==Kt&&(!t.C[1]||4!=ms(t)||2!=t.ba()))if(t.v&&4==ms(t))Tn(t.Fa,0,t);else if(un(t,"readystatechange"),4==ms(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var s=String(t.H).match(vi)[1]||null;if(!s&&Gt.self&&Gt.self.location){var r=Gt.self.location.protocol;s=r.substr(0,r.length-1)}i=!cs.test(s?s.toLowerCase():"")}n=i}if(n)un(t,"complete"),un(t,"success");else{t.m=6;try{var o=2<ms(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",ds(t)}}finally{ps(t)}}}function ps(t,e){if(t.g){gs(t);const n=t.g,i=t.C[0]?Wt:null;t.g=null,t.C=null,e||un(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function gs(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Gt.clearTimeout(t.A),t.A=null)}function ms(t){return t.g?t.g.readyState:0}function ys(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case as:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function vs(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=function(t){let e="";return ye(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Si(t,e,n))}function ws(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function bs(t){this.za=0,this.l=[],this.h=new Nn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ws("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ws("baseRetryDelayMs",5e3,t),this.$a=ws("retryDelaySeedMs",1e4,t),this.Ya=ws("forwardChannelMaxRetries",2,t),this.ra=ws("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ji(t&&t.concurrentRequestLimit),this.Ca=new Yi,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Es(t){if(_s(t),3==t.G){var e=t.V++,n=bi(t.F);Si(n,"SID",t.J),Si(n,"RID",e),Si(n,"TYPE","terminate"),Cs(t,n),(e=new Jn(t,t.h,e,void 0)).K=2,e.v=Ai(bi(n)),n=!1,Gt.navigator&&Gt.navigator.sendBeacon&&(n=Gt.navigator.sendBeacon(e.v.toString(),"")),!n&&Gt.Image&&((new Image).src=e.v,n=!0),n||(e.g=Vs(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ci(e)}Fs(t)}function Is(t){t.g&&(Ns(t),t.g.cancel(),t.g=null)}function _s(t){Is(t),t.u&&(Gt.clearTimeout(t.u),t.u=null),Ls(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Gt.clearTimeout(t.m),t.m=null)}function Ts(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&Ss(t)}function Ss(t){Bi(t.i)||t.m||(t.m=!0,vn(t.Ha,t),t.C=0)}function As(t,e){var n;n=e?e.m:t.V++;const i=bi(t.F);Si(i,"SID",t.J),Si(i,"RID",n),Si(i,"AID",t.U),Cs(t,i),t.o&&t.s&&vs(i,t.o,t.s),n=new Jn(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ks(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ki(t.i,n),ii(n,i,e)}function Cs(t,e){t.j&&pi({},(function(t,n){Si(e,n,t)}))}function ks(t,e,n){n=Math.min(t.l.length,n);var i=t.j?ee(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{Xi(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function Ds(t){t.g||t.u||(t.Y=1,vn(t.Ga,t),t.A=0)}function Rs(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=jn(ee(t.Ga,t),Ps(t,t.A)),t.A++,!0)}function Ns(t){null!=t.B&&(Gt.clearTimeout(t.B),t.B=null)}function xs(t){t.g=new Jn(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=bi(t.oa);Si(e,"RID","rpc"),Si(e,"SID",t.J),Si(e,"CI",t.N?"0":"1"),Si(e,"AID",t.U),Cs(t,e),Si(e,"TYPE","xmlhttp"),t.o&&t.s&&vs(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ai(bi(e)),n.s=null,n.U=!0,si(n,t)}function Ls(t){null!=t.v&&(Gt.clearTimeout(t.v),t.v=null)}function Os(t,e){var n=null;if(t.g==e){Ls(t),Ns(t),t.g=null;var i=2}else{if(!zi(t.i,e))return;n=e.D,Gi(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;un(i=Pn(),new $n(i,n,e,s)),Ss(t)}else Ds(t);else if(3==(s=e.o)||0==s&&0<t.I||!(1==i&&function(t,e){return!(Hi(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=jn(ee(t.Ha,t,e),Ps(t,t.C)),t.C++,0)))}(t,e)||2==i&&Rs(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Ms(t,5);break;case 4:Ms(t,10);break;case 3:Ms(t,6);break;default:Ms(t,2)}}function Ps(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ms(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=ee(t.jb,t);n||(n=new wi("//www.google.com/images/cleardot.gif"),Gt.location&&"http"==Gt.location.protocol||Ei(n,"https"),Ai(n)),function(t,e){const n=new Nn;if(Gt.Image){const i=new Image;i.onload=ne(Ji,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ne(Ji,n,i,"TestLoadImage: error",!1,e),i.onabort=ne(Ji,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ne(Ji,n,i,"TestLoadImage: timeout",!1,e),Gt.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Vn(2);t.G=0,t.j&&t.j.va(e),Fs(t),_s(t)}function Fs(t){t.G=0,t.I=-1,t.j&&(0==Wi(t.i).length&&0==t.l.length||(t.i.i.length=0,he(t.l),t.l.length=0),t.j.ua())}function Us(t,e,n){let i=function(t){return t instanceof wi?bi(t):new wi(t,void 0)}(n);if(""!=i.i)e&&Ii(i,e+"."+i.i),_i(i,i.m);else{const t=Gt.location;i=function(t,e,n,i){var s=new wi(null,void 0);return t&&Ei(s,t),e&&Ii(s,e),n&&_i(s,n),i&&(s.l=i),s}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&ye(t.aa,(function(t,e){Si(i,e,t)})),e=t.D,n=t.sa,e&&n&&Si(i,e,n),Si(i,"VER",t.ma),Cs(t,i),i}function Vs(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new os(new Zi({ib:!0})):new os(t.qa)).L=t.H,e}function $s(){}function js(){if(Se&&!(10<=Number(Ue)))throw Error("Environmental error: no available transport.")}function qs(t,e){hn.call(this),this.g=new bs(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ue(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ue(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new zs(this)}function Bs(t){Qn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Hs(){Yn.call(this),this.status=1}function zs(t){this.g=t}(Ht=os.prototype).ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Gn.g(),this.C=this.u?zn(this.u):zn(Gn),this.g.onreadystatechange=ee(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void ls(this,t)}t=n||"";const s=new gi(this.headers);i&&pi(i,(function(t,e){s.set(e,t)})),i=function(t){t:{var e=us;const n=t.length,i="string"==typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(s.T()),n=Gt.FormData&&t instanceof Gt.FormData,!(0<=oe(hs,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{gs(this),0<this.B&&((this.K=function(t){return Se&&Me()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ee(this.pa,this)):this.A=Tn(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){ls(this,t)}},Ht.pa=function(){void 0!==Kt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,un(this,"timeout"),this.abort(8))},Ht.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,un(this,"complete"),un(this,"abort"),ps(this))},Ht.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ps(this,!0)),os.Z.M.call(this)},Ht.Fa=function(){this.s||(this.F||this.v||this.l?fs(this):this.cb())},Ht.cb=function(){fs(this)},Ht.ba=function(){try{return 2<ms(this)?this.g.status:-1}catch(t){return-1}},Ht.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Ht.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),rs(e)}},Ht.Da=function(){return this.m},Ht.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ht=bs.prototype).ma=8,Ht.G=1,Ht.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},Ht.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Jn(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=ve(r),be(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ks(this,s,e),Si(n=bi(this.F),"RID",t),Si(n,"CVER",22),this.D&&Si(n,"X-HTTP-Session-Id",this.D),Cs(this,n),this.o&&r&&vs(n,this.o,r),Ki(this.i,s),this.Ra&&Si(n,"TYPE","init"),this.ja?(Si(n,"$req",e),Si(n,"SID","null"),s.$=!0,ii(s,n,null)):ii(s,n,e),this.G=2}}else 3==this.G&&(t?As(this,t):0==this.l.length||Bi(this.i)||As(this))},Ht.Ga=function(){if(this.u=null,xs(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=jn(ee(this.bb,this),t)}},Ht.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Vn(10),Is(this),xs(this))},Ht.ab=function(){null!=this.v&&(this.v=null,Is(this),Rs(this),Vn(19))},Ht.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Vn(2)):(this.h.info("Failed to ping google.com"),Vn(1))},(Ht=$s.prototype).xa=function(){},Ht.wa=function(){},Ht.va=function(){},Ht.ua=function(){},Ht.Oa=function(){},js.prototype.g=function(t,e){return new qs(t,e)},ie(qs,hn),qs.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),vn(ee(t.hb,t,e))),Vn(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Us(t,null,t.W),Ss(t)},qs.prototype.close=function(){Es(this.g)},qs.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Ts(this.g,e)}else this.v?((e={}).__data__=dn(t),Ts(this.g,e)):Ts(this.g,t)},qs.prototype.M=function(){this.g.j=null,delete this.j,Es(this.g),delete this.g,qs.Z.M.call(this)},ie(Bs,Qn),ie(Hs,Yn),ie(zs,$s),zs.prototype.xa=function(){un(this.g,"a")},zs.prototype.wa=function(t){un(this.g,new Bs(t))},zs.prototype.va=function(t){un(this.g,new Hs(t))},zs.prototype.ua=function(){un(this.g,"b")},js.prototype.createWebChannel=js.prototype.g,qs.prototype.send=qs.prototype.u,qs.prototype.open=qs.prototype.m,qs.prototype.close=qs.prototype.close,qn.NO_ERROR=0,qn.TIMEOUT=8,qn.HTTP_ERROR=6,Bn.COMPLETE="complete",Kn.EventType=Wn,Wn.OPEN="a",Wn.CLOSE="b",Wn.ERROR="c",Wn.MESSAGE="d",hn.prototype.listen=hn.prototype.N,os.prototype.listenOnce=os.prototype.O,os.prototype.getLastError=os.prototype.La,os.prototype.getLastErrorCode=os.prototype.Da,os.prototype.getStatus=os.prototype.ba,os.prototype.getResponseJson=os.prototype.Qa,os.prototype.getResponseText=os.prototype.ga,os.prototype.send=os.prototype.ea;var Ks=qn,Gs=Bn,Ws=Ln,Qs=10,Ys=11,Xs=Zi,Js=Kn,Zs=os;const tr="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class er{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}er.UNAUTHENTICATED=new er(null),er.GOOGLE_CREDENTIALS=new er("google-credentials-uid"),er.FIRST_PARTY=new er("first-party-uid"),er.MOCK_USER=new er("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let nr="9.5.0";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ir=new At("@firebase/firestore");function sr(){return ir.logLevel}function rr(t,...e){if(ir.logLevel<=Et.DEBUG){const n=e.map(cr);ir.debug(`Firestore (${nr}): ${t}`,...n)}}function or(t,...e){if(ir.logLevel<=Et.ERROR){const n=e.map(cr);ir.error(`Firestore (${nr}): ${t}`,...n)}}function ar(t,...e){if(ir.logLevel<=Et.WARN){const n=e.map(cr);ir.warn(`Firestore (${nr}): ${t}`,...n)}}function cr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function hr(t="Unexpected state"){const e=`FIRESTORE (${nr}) INTERNAL ASSERTION FAILED: `+t;throw or(e),new Error(e)}function ur(t,e){t||hr()}function lr(t,e){return t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const dr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fr extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gr{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class mr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(er.UNAUTHENTICATED)))}shutdown(){}}class yr{constructor(t){this.t=t,this.currentUser=er.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pr,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{rr("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(rr("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pr)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(rr("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ur("string"==typeof e.accessToken),new gr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ur(null===t||"string"==typeof t),new er(t)}}class vr{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=er.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class wr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new vr(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(er.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class br{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Er(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */br.T=-1;function Ir(t,e){return t<e?-1:t>e?1:0}function _r(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new fr(dr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new fr(dr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new fr(dr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new fr(dr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Tr.fromMillis(Date.now())}static fromDate(t){return Tr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Tr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Ir(this.nanoseconds,t.nanoseconds):Ir(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Sr(t)}static min(){return new Sr(new Tr(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ar(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class kr{constructor(t,e,n){void 0===e?e=0:e>t.length&&hr(),void 0===n?n=t.length-e:n>t.length-e&&hr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===kr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof kr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Dr extends kr{construct(t,e,n){return new Dr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new fr(dr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Dr(e)}static emptyPath(){return new Dr([])}}const Rr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nr extends kr{construct(t,e,n){return new Nr(t,e,n)}static isValidIdentifier(t){return Rr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Nr(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new fr(dr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new fr(dr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new fr(dr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new fr(dr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Nr(e)}static emptyPath(){return new Nr([])}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new xr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new xr(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ir(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}xr.EMPTY_BYTE_STRING=new xr("");const Lr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(t){if(ur(!!t),"string"==typeof t){let e=0;const n=Lr.exec(t);if(ur(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Pr(t.seconds),nanos:Pr(t.nanos)}}function Pr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Mr(t){return"string"==typeof t?xr.fromBase64String(t):xr.fromUint8Array(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Fr(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ur(t){const e=t.mapValue.fields.__previous_value__;return Fr(e)?Ur(e):e}function Vr(t){const e=Or(t.mapValue.fields.__local_write_time__.timestampValue);return new Tr(e.seconds,e.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function $r(t){return null==t}function jr(t){return 0===t&&1/t==-1/0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qr{constructor(t){this.path=t}static fromPath(t){return new qr(Dr.fromString(t))}static fromName(t){return new qr(Dr.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Dr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Dr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new qr(new Dr(t.slice()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fr(t)?4:10:hr()}function Hr(t,e){const n=Br(t);if(n!==Br(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vr(t).isEqual(Vr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Or(t.timestampValue),i=Or(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Mr(t.bytesValue).isEqual(Mr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Pr(t.geoPointValue.latitude)===Pr(e.geoPointValue.latitude)&&Pr(t.geoPointValue.longitude)===Pr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Pr(t.integerValue)===Pr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Pr(t.doubleValue),i=Pr(e.doubleValue);return n===i?jr(n)===jr(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return _r(t.arrayValue.values||[],e.arrayValue.values||[],Hr);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Ar(n)!==Ar(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Hr(n[t],i[t])))return!1;return!0}(t,e);default:return hr()}}function zr(t,e){return void 0!==(t.values||[]).find((t=>Hr(t,e)))}function Kr(t,e){const n=Br(t),i=Br(e);if(n!==i)return Ir(n,i);switch(n){case 0:return 0;case 1:return Ir(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Pr(t.integerValue||t.doubleValue),i=Pr(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Gr(t.timestampValue,e.timestampValue);case 4:return Gr(Vr(t),Vr(e));case 5:return Ir(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Mr(t),i=Mr(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=Ir(n[t],i[t]);if(0!==e)return e}return Ir(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Ir(Pr(t.latitude),Pr(e.latitude));return 0!==n?n:Ir(Pr(t.longitude),Pr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Kr(n[t],i[t]);if(e)return e}return Ir(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let t=0;t<i.length&&t<r.length;++t){const e=Ir(i[t],r[t]);if(0!==e)return e;const o=Kr(n[i[t]],s[r[t]]);if(0!==o)return o}return Ir(i.length,r.length)}(t.mapValue,e.mapValue);default:throw hr()}}function Gr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Ir(t,e);const n=Or(t),i=Or(e),s=Ir(n.seconds,i.seconds);return 0!==s?s:Ir(n.nanos,i.nanos)}function Wr(t){return Qr(t)}function Qr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Or(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,qr.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Qr(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${Qr(t.fields[s])}`;return n+"}"}(t.mapValue):hr();var e,n}function Yr(t){return!!t&&"integerValue"in t}function Xr(t){return!!t&&"arrayValue"in t}function Jr(t){return!!t&&"nullValue"in t}function Zr(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function to(t){return!!t&&"mapValue"in t}function eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=eo(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class no{constructor(t){this.value=t}static empty(){return new no({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!to(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=eo(e)}setAll(t){let e=Nr.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=eo(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());to(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Hr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];to(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Cr(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new no(eo(this.value))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class io{constructor(t,e,n,i,s){this.key=t,this.documentType=e,this.version=n,this.data=i,this.documentState=s}static newInvalidDocument(t){return new io(t,0,Sr.min(),no.empty(),0)}static newFoundDocument(t,e,n){return new io(t,1,e,n,0)}static newNoDocument(t,e){return new io(t,2,e,no.empty(),0)}static newUnknownDocument(t,e){return new io(t,3,e,no.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=no.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=no.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof io&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new io(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class so{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.A=null}}function ro(t,e=null,n=[],i=[],s=null,r=null,o=null){return new so(t,e,n,i,s,r,o)}function oo(t){const e=lr(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+Wr(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),$r(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=bo(e.startAt)),e.endAt&&(t+="|ub:",t+=bo(e.endAt)),e.A=t}return e.A}function ao(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Io(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!Hr(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!To(t.startAt,e.startAt)&&To(t.endAt,e.endAt)}function co(t){return qr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class ho extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new uo(t,e,n):"array-contains"===e?new go(t,n):"in"===e?new mo(t,n):"not-in"===e?new yo(t,n):"array-contains-any"===e?new vo(t,n):new ho(t,e,n)}static R(t,e,n){return"in"===e?new lo(t,n):new fo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(Kr(e,this.value)):null!==e&&Br(this.value)===Br(e)&&this.P(Kr(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return hr()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class uo extends ho{constructor(t,e,n){super(t,e,n),this.key=qr.fromName(n.referenceValue)}matches(t){const e=qr.comparator(t.key,this.key);return this.P(e)}}class lo extends ho{constructor(t,e){super(t,"in",e),this.keys=po("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class fo extends ho{constructor(t,e){super(t,"not-in",e),this.keys=po("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function po(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>qr.fromName(t.referenceValue)))}class go extends ho{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Xr(e)&&zr(e.arrayValue,this.value)}}class mo extends ho{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&zr(this.value.arrayValue,e)}}class yo extends ho{constructor(t,e){super(t,"not-in",e)}matches(t){if(zr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!zr(this.value.arrayValue,e)}}class vo extends ho{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Xr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>zr(this.value.arrayValue,t)))}}class wo{constructor(t,e){this.position=t,this.before=e}}function bo(t){return`${t.before?"b":"a"}:${t.position.map((t=>Wr(t))).join(",")}`}class Eo{constructor(t,e="asc"){this.field=t,this.dir=e}}function Io(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function _o(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?qr.comparator(qr.fromName(o.referenceValue),n.key):Kr(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return t.before?i<=0:i<0}function To(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hr(t.position[n],e.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class So{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Ao(t){return new So(t)}function Co(t){return!$r(t.limit)&&"F"===t.limitType}function ko(t){return!$r(t.limit)&&"L"===t.limitType}function Do(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ro(t){for(const e of t.filters)if(e.v())return e.field;return null}function No(t){const e=lr(t);if(null===e.V){e.V=[];const t=Ro(e),n=Do(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new Eo(t)),e.V.push(new Eo(Nr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Eo(Nr.keyField(),t))}}}return e.V}function xo(t){const e=lr(t);if(!e.S)if("F"===e.limitType)e.S=ro(e.path,e.collectionGroup,No(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of No(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Eo(n.field,e))}const n=e.endAt?new wo(e.endAt.position,!e.endAt.before):null,i=e.startAt?new wo(e.startAt.position,!e.startAt.before):null;e.S=ro(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.S}function Lo(t,e){return ao(xo(t),xo(e))&&t.limitType===e.limitType}function Oo(t){return`${oo(xo(t))}|lt:${t.limitType}`}function Po(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Wr(e.value)}`;var e})).join(", ")}]`),$r(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: "+bo(t.startAt)),t.endAt&&(e+=", endAt: "+bo(t.endAt)),`Target(${e})`}(xo(t))}; limitType=${t.limitType})`}function Mo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):qr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!_o(t.startAt,No(t),e))&&(!t.endAt||!_o(t.endAt,No(t),e))}(t,e)}function Fo(t){return(e,n)=>{let i=!1;for(const s of No(t)){const t=Uo(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function Uo(t,e,n){const i=t.field.isKeyField()?qr.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?Kr(i,s):hr()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return hr()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vo{constructor(){this._=void 0}}function $o(t,e,n){return t instanceof qo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Bo?Ho(t,e):t instanceof zo?Ko(t,e):function(t,e){const n=function(t,e){return t instanceof Go?Yr(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}(t,e),i=Wo(n)+Wo(t.C);return Yr(n)&&Yr(t.C)?function(t){return{integerValue:""+t}}(i):function(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jr(e)?"-0":e}}(t.N,i)}(t,e)}function jo(t,e,n){return t instanceof Bo?Ho(t,e):t instanceof zo?Ko(t,e):n}class qo extends Vo{}class Bo extends Vo{constructor(t){super(),this.elements=t}}function Ho(t,e){const n=Qo(e);for(const e of t.elements)n.some((t=>Hr(t,e)))||n.push(e);return{arrayValue:{values:n}}}class zo extends Vo{constructor(t){super(),this.elements=t}}function Ko(t,e){let n=Qo(e);for(const e of t.elements)n=n.filter((t=>!Hr(t,e)));return{arrayValue:{values:n}}}class Go extends Vo{constructor(t,e){super(),this.N=t,this.C=e}}function Wo(t){return Pr(t.integerValue||t.doubleValue)}function Qo(t){return Xr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Yo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Xo{}function Jo(t,e,n){t instanceof na?function(t,e,n){const i=t.value.clone(),s=ra(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof ia?function(t,e,n){if(!Yo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=ra(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(sa(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Zo(t,e,n){t instanceof na?function(t,e,n){if(!Yo(t.precondition,e))return;const i=t.value.clone(),s=oa(t.fieldTransforms,n,e);i.setAll(s),e.convertToFoundDocument(ea(e),i).setHasLocalMutations()}(t,e,n):t instanceof ia?function(t,e,n){if(!Yo(t.precondition,e))return;const i=oa(t.fieldTransforms,n,e),s=e.data;s.setAll(sa(t)),s.setAll(i),e.convertToFoundDocument(ea(e),s).setHasLocalMutations()}(t,e,n):function(t,e){Yo(t.precondition,e)&&e.convertToNoDocument(Sr.min())}(t,e)}function ta(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&_r(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Bo&&e instanceof Bo||t instanceof zo&&e instanceof zo?_r(t.elements,e.elements,Hr):t instanceof Go&&e instanceof Go?Hr(t.C,e.C):t instanceof qo&&e instanceof qo}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ea(t){return t.isFoundDocument()?t.version:Sr.min()}class na extends Xo{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class ia extends Xo{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function sa(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function ra(t,e,n){const i=new Map;ur(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,jo(o,a,n[s]))}return i}function oa(t,e,n){const i=new Map;for(const s of t){const t=s.transform,r=n.data.field(s.field);i.set(s.field,$o(t,r,e))}return i}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class aa{constructor(t){this.count=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var ca,ha;function ua(t){if(void 0===t)return or("GRPC error has no .code"),dr.UNKNOWN;switch(t){case ca.OK:return dr.OK;case ca.CANCELLED:return dr.CANCELLED;case ca.UNKNOWN:return dr.UNKNOWN;case ca.DEADLINE_EXCEEDED:return dr.DEADLINE_EXCEEDED;case ca.RESOURCE_EXHAUSTED:return dr.RESOURCE_EXHAUSTED;case ca.INTERNAL:return dr.INTERNAL;case ca.UNAVAILABLE:return dr.UNAVAILABLE;case ca.UNAUTHENTICATED:return dr.UNAUTHENTICATED;case ca.INVALID_ARGUMENT:return dr.INVALID_ARGUMENT;case ca.NOT_FOUND:return dr.NOT_FOUND;case ca.ALREADY_EXISTS:return dr.ALREADY_EXISTS;case ca.PERMISSION_DENIED:return dr.PERMISSION_DENIED;case ca.FAILED_PRECONDITION:return dr.FAILED_PRECONDITION;case ca.ABORTED:return dr.ABORTED;case ca.OUT_OF_RANGE:return dr.OUT_OF_RANGE;case ca.UNIMPLEMENTED:return dr.UNIMPLEMENTED;case ca.DATA_LOSS:return dr.DATA_LOSS;default:return hr()}}(ha=ca||(ca={}))[ha.OK=0]="OK",ha[ha.CANCELLED=1]="CANCELLED",ha[ha.UNKNOWN=2]="UNKNOWN",ha[ha.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ha[ha.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ha[ha.NOT_FOUND=5]="NOT_FOUND",ha[ha.ALREADY_EXISTS=6]="ALREADY_EXISTS",ha[ha.PERMISSION_DENIED=7]="PERMISSION_DENIED",ha[ha.UNAUTHENTICATED=16]="UNAUTHENTICATED",ha[ha.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ha[ha.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ha[ha.ABORTED=10]="ABORTED",ha[ha.OUT_OF_RANGE=11]="OUT_OF_RANGE",ha[ha.UNIMPLEMENTED=12]="UNIMPLEMENTED",ha[ha.INTERNAL=13]="INTERNAL",ha[ha.UNAVAILABLE=14]="UNAVAILABLE",ha[ha.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class la{constructor(t,e){this.comparator=t,this.root=e||fa.EMPTY}insert(t,e){return new la(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,fa.BLACK,null,null))}remove(t){return new la(this.comparator,this.root.remove(t,this.comparator).copy(null,null,fa.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new da(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new da(this.root,t,this.comparator,!1)}getReverseIterator(){return new da(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new da(this.root,t,this.comparator,!0)}}class da{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class fa{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:fa.RED,this.left=null!=i?i:fa.EMPTY,this.right=null!=s?s:fa.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,s){return new fa(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return fa.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return fa.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,fa.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,fa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw hr();if(this.right.isRed())throw hr();const t=this.left.check();if(t!==this.right.check())throw hr();return t+(this.isRed()?0:1)}}fa.EMPTY=null,fa.RED=!0,fa.BLACK=!1,fa.EMPTY=new class{constructor(){this.size=0}get key(){throw hr()}get value(){throw hr()}get color(){throw hr()}get left(){throw hr()}get right(){throw hr()}copy(t,e,n,i,s){return this}insert(t,e,n){return new fa(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class pa{constructor(t){this.comparator=t,this.data=new la(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ga(this.data.getIterator())}getIteratorFrom(t){return new ga(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof pa))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new pa(this.comparator);return e.data=t,e}}class ga{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ma=new la(qr.comparator);function ya(){return ma}const va=new la(qr.comparator);function wa(){return va}new la(qr.comparator);const ba=new pa(qr.comparator);function Ea(...t){let e=ba;for(const n of t)e=e.add(n);return e}const Ia=new pa(Ir);function _a(){return Ia}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ta{constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Sa.createSynthesizedTargetChangeForCurrentChange(t,e)),new Ta(Sr.min(),n,_a(),ya(),Ea())}}class Sa{constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Sa(xr.EMPTY_BYTE_STRING,e,Ea(),Ea(),Ea())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Aa{constructor(t,e,n,i){this.k=t,this.removedTargetIds=e,this.key=n,this.$=i}}class Ca{constructor(t,e){this.targetId=t,this.O=e}}class ka{constructor(t,e,n=xr.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Da{constructor(){this.F=0,this.M=xa(),this.L=xr.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=Ea(),e=Ea(),n=Ea();return this.M.forEach(((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:hr()}})),new Sa(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=xa()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Ra{constructor(t){this.tt=t,this.et=new Map,this.nt=ya(),this.st=Na(),this.it=new pa(Ir)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.ct(e,t.key,t.$);for(const e of t.removedTargetIds)this.ct(e,t.key,t.$)}at(t){this.forEachTarget(t,(e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:hr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach(((t,n)=>{this.ht(n)&&e(n)}))}ft(t){const e=t.targetId,n=t.O.count,i=this.dt(e);if(i){const t=i.target;if(co(t))if(0===n){const n=new qr(t.path);this.ct(e,n,io.newNoDocument(n,Sr.min()))}else ur(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach(((n,i)=>{const s=this.dt(i);if(s){if(n.current&&co(s.target)){const e=new qr(s.target.path);null!==this.nt.get(e)||this.gt(i,e)||this.ct(i,e,io.newNoDocument(e,t))}n.K&&(e.set(i,n.W()),n.G())}}));let n=Ea();this.st.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.dt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))}));const i=new Ta(t,e,this.it,this.nt,n);return this.nt=ya(),this.st=Na(),this.it=new pa(Ir),i}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}ct(t,e,n){if(!this.ht(t))return;const i=this.ut(t);this.gt(t,e)?i.H(e,1):i.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new Da,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new pa(Ir),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||rr("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Tt(t)}lt(t){this.et.set(t,new Da),this.tt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function Na(){return new la(qr.comparator)}function xa(){return new la(qr.comparator)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const La={asc:"ASCENDING",desc:"DESCENDING"},Oa={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Pa{constructor(t,e){this.databaseId=t,this.D=e}}function Ma(t){return ur(!!t),Sr.fromTimestamp(function(t){const e=Or(t);return new Tr(e.seconds,e.nanos)}(t))}function Fa(t){const e=Dr.fromString(t);return ur(tc(e)),e}function Ua(t,e){const n=Fa(e);if(n.get(1)!==t.databaseId.projectId)throw new fr(dr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new fr(dr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new qr(ja(n))}function Va(t,e){return function(t,e){return function(t){return new Dr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}(t.databaseId,e)}function $a(t){return new Dr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ja(t){return ur(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function qa(t,e){return{documents:[Va(t,e.path)]}}function Ba(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=Va(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Va(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Zr(t.value))return{unaryFilter:{field:Ya(t.field),op:"IS_NAN"}};if(Jr(t.value))return{unaryFilter:{field:Ya(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Zr(t.value))return{unaryFilter:{field:Ya(t.field),op:"IS_NOT_NAN"}};if(Jr(t.value))return{unaryFilter:{field:Ya(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ya(t.field),op:Qa(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ya(t.field),direction:Wa(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.D||$r(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Ka(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Ka(e.endAt)),n}function Ha(t){let e=function(t){const e=Fa(t);return 4===e.length?Dr.emptyPath():ja(e)}(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){ur(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=za(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Eo(Xa(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,$r(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Ga(n.startAt));let h=null;return n.endAt&&(h=Ga(n.endAt)),function(t,e,n,i,s,r,o,a){return new So(t,e,n,i,s,r,o,a)}(e,s,o,r,a,"F",c,h)}function za(t){return t?void 0!==t.unaryFilter?[Za(t)]:void 0!==t.fieldFilter?[Ja(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>za(t))).reduce(((t,e)=>t.concat(e))):hr():[]}function Ka(t){return{before:t.before,values:t.position}}function Ga(t){const e=!!t.before,n=t.values||[];return new wo(n,e)}function Wa(t){return La[t]}function Qa(t){return Oa[t]}function Ya(t){return{fieldPath:t.canonicalString()}}function Xa(t){return Nr.fromServerFormat(t.fieldPath)}function Ja(t){return ho.create(Xa(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return hr()}}(t.fieldFilter.op),t.fieldFilter.value)}function Za(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Xa(t.unaryFilter.field);return ho.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Xa(t.unaryFilter.field);return ho.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xa(t.unaryFilter.field);return ho.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Xa(t.unaryFilter.field);return ho.create(s,"!=",{nullValue:"NULL_VALUE"});default:return hr()}}function tc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ec{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&hr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ec(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ec?e:ec.resolve(e)}catch(t){return ec.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ec.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ec.reject(e)}static resolve(t){return new ec(((e,n)=>{e(t)}))}static reject(t){return new ec(((e,n)=>{n(t)}))}static waitFor(t){return new ec(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=ec.resolve(!1);for(const n of t)e=e.next((t=>t?ec.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}}function nc(t){return"IndexedDbTransactionError"===t.name}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ic{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&Jo(i,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Zo(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Zo(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(Sr.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ea())}isEqual(t){return this.batchId===t.batchId&&_r(this.mutations,t.mutations,((t,e)=>ta(t,e)))&&_r(this.baseMutations,t.baseMutations,((t,e)=>ta(t,e)))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sc{constructor(t,e,n,i,s=Sr.min(),r=Sr.min(),o=xr.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new sc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new sc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new sc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rc{constructor(t){this.Wt=t}}function oc(t){const e=Ha({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new So(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ac{constructor(){this.Gt=new cc}addToCollectionParentIndex(t,e){return this.Gt.add(e),ec.resolve()}getCollectionParents(t,e){return ec.resolve(this.Gt.getEntries(e))}}class cc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new pa(Dr.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new pa(Dr.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hc{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new hc(0)}static ie(){return new hc(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function uc(t){if(t.code!==dr.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;rr("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0!==i){for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),!0;return!1}forEach(t){Cr(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(this.inner)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class dc{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Rn(t,e,n)))}Rn(t,e,n){return this.He.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}bn(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}Pn(t,e){return this.He.getEntries(t,e).next((e=>this.vn(t,e).next((()=>e))))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.bn(e,t)))}getDocumentsMatchingQuery(t,e,n){return function(t){return qr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new qr(e)).next((t=>{let e=wa();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Sn(t,e,n){const i=e.collectionGroup;let s=wa();return this.Ht.getCollectionParents(t,i).next((r=>ec.forEach(r,(r=>{const o=function(t,e){return new So(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(i));return this.Dn(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}Dn(t,e,n){let i,s;return this.He.getDocumentsMatchingQuery(t,e,n).next((n=>(i=n,this.In.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(s=e,this.Cn(t,s,i).next((t=>{i=t;for(const t of s)for(const e of t.mutations){const n=e.key;let s=i.get(n);null==s&&(s=io.newInvalidDocument(n),i=i.insert(n,s)),Zo(e,s,t.localWriteTime),s.isFoundDocument()||(i=i.remove(n))}}))))).next((()=>(i.forEach(((t,n)=>{Mo(e,n)||(i=i.remove(t))})),i)))}Cn(t,e,n){let i=Ea();for(const t of e)for(const e of t.mutations)e instanceof ia&&null===n.get(e.key)&&(i=i.add(e.key));let s=n;return this.He.getEntries(t,i).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(s=s.insert(t,e))})),s)))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fc{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=i}static kn(t,e){let n=Ea(),i=Ea();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new fc(t,e.fromCache,n,i)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pc{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(Sr.min())?this.Fn(t,e):this.On.Pn(t,i).next((s=>{const r=this.Mn(e,s);return(Co(e)||ko(e))&&this.Ln(e.limitType,r,i,n)?this.Fn(t,e):(sr()<=Et.DEBUG&&rr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Po(e)),this.On.getDocumentsMatchingQuery(t,e,n).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}Mn(t,e){let n=new pa(Fo(t));return e.forEach(((e,i)=>{Mo(t,i)&&(n=n.add(i))})),n}Ln(t,e,n,i){if(n.size!==e.size)return!0;const s="F"===t?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(t,e){return sr()<=Et.DEBUG&&rr("QueryEngine","Using full collection scan to execute query:",Po(e)),this.On.getDocumentsMatchingQuery(t,e,Sr.min())}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gc{constructor(t,e,n,i){this.persistence=t,this.Bn=e,this.N=i,this.Un=new la(Ir),this.qn=new lc((t=>oo(t)),ao),this.Kn=Sr.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new dc(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Un)))}}async function mc(t,e){const n=lr(t);let i=n.In,s=n.Qn;const r=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.In.getAllMutationBatches(t).next((o=>(r=o,i=n.persistence.getMutationQueue(e),s=new dc(n.jn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(t)))).next((e=>{const n=[],i=[];let o=Ea();for(const t of r){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return s.Pn(t,o).next((t=>({Wn:t,removedBatchIds:n,addedBatchIds:i})))}))}));return n.In=i,n.Qn=s,n.Bn.$n(n.Qn),r}function yc(t){const e=lr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ze.getLastRemoteSnapshotVersion(t)))}function vc(t,e){const n=lr(t),i=e.snapshotVersion;let s=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.jn.newChangeBuffer({trackRemovals:!0});s=n.Un;const o=[];e.targetChanges.forEach(((e,r)=>{const a=s.get(r);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,r).next((()=>n.ze.addMatchingKeys(t,e.addedDocuments,r))));const c=e.resumeToken;if(c.approximateByteSize()>0){const h=a.withResumeToken(c,i).withSequenceNumber(t.currentSequenceNumber);s=s.insert(r,h),function(t,e,n){return ur(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,h,e)&&o.push(n.ze.updateTargetData(t,h))}}));let a=ya();if(e.documentUpdates.forEach(((i,s)=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(function(t,e,n,i,s){let r=Ea();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=ya();return n.forEach(((n,o)=>{const a=t.get(n),c=(null==s?void 0:s.get(n))||i;o.isNoDocument()&&o.version.isEqual(Sr.min())?(e.removeEntry(n,c),r=r.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),r=r.insert(n,o)):rr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),r}))}(t,r,e.documentUpdates,i,void 0).next((t=>{a=t}))),!i.isEqual(Sr.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next((e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return ec.waitFor(o).next((()=>r.apply(t))).next((()=>n.Qn.vn(t,a))).next((()=>a))})).then((t=>(n.Un=s,t)))}async function wc(t,e,n){const i=lr(t),s=i.Un.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!nc(t))throw t;rr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.Un=i.Un.remove(e),i.qn.delete(s.target)}function bc(t,e,n){const i=lr(t);let s=Sr.min(),r=Ea();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=lr(t),s=i.qn.get(n);return void 0!==s?ec.resolve(i.Un.get(s)):i.ze.getTargetData(e,n)}(i,t,xo(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,i.ze.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>i.Bn.getDocumentsMatchingQuery(t,e,n?s:Sr.min(),n?r:Ea()))).next((t=>({documents:t,Gn:r})))))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ec{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return ec.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:Ma(n.createTime)}),ec.resolve()}getNamedQuery(t,e){return ec.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:oc(t.bundledQuery),readTime:Ma(t.readTime)}}(e)),ec.resolve()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ic{constructor(){this.Zn=new pa(_c.ts),this.es=new pa(_c.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new _c(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new _c(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}cs(t){const e=new qr(new Dr([])),n=new _c(e,t),i=new _c(e,t+1),s=[];return this.es.forEachInRange([n,i],(t=>{this.rs(t),s.push(t.key)})),s}us(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new qr(new Dr([])),n=new _c(e,t),i=new _c(e,t+1);let s=Ea();return this.es.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new _c(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class _c{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return qr.comparator(t.key,e.key)||Ir(t.ls,e.ls)}static ns(t,e){return Ir(t.ls,e.ls)||qr.comparator(t.key,e.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tc{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new pa(_c.ts)}checkEmpty(t){return ec.resolve(0===this.In.length)}addMutationBatch(t,e,n,i){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const r=new ic(s,e,n,i);this.In.push(r);for(const e of i)this.ds=this.ds.add(new _c(e.key,s)),this.Ht.addToCollectionParentIndex(t,e.key.path.popLast());return ec.resolve(r)}lookupMutationBatch(t,e){return ec.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this._s(n),s=i<0?0:i;return ec.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return ec.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return ec.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new _c(e,0),i=new _c(e,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,i],(t=>{const e=this.ws(t.ls);s.push(e)})),ec.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new pa(Ir);return e.forEach((t=>{const e=new _c(t,0),i=new _c(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,i],(t=>{n=n.add(t.ls)}))})),ec.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;qr.isDocumentKey(s)||(s=s.child(""));const r=new _c(new qr(s),0);let o=new pa(Ir);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.ls)),!0)}),r),ec.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this.ws(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ur(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return ec.forEach(e.mutations,(i=>{const s=new _c(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.ds=n}))}te(t){}containsKey(t,e){const n=new _c(e,0),i=this.ds.firstAfterOrEqual(n);return ec.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.In.length,ec.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sc{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new la(qr.comparator),this.size=0}addEntry(t,e,n){const i=e.key,s=this.docs.get(i),r=s?s.size:0,o=this.ps(e);return this.docs=this.docs.insert(i,{document:e.clone(),size:o,readTime:n}),this.size+=o-r,this.Ht.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ec.resolve(n?n.document.clone():io.newInvalidDocument(e))}getEntries(t,e){let n=ya();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():io.newInvalidDocument(t))})),ec.resolve(n)}getDocumentsMatchingQuery(t,e,n){let i=ya();const s=new qr(e.path.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s,readTime:o}}=r.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Mo(e,s)&&(i=i.insert(s.key,s.clone()))}return ec.resolve(i)}Ts(t,e){return ec.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ac(this)}getSize(t){return ec.resolve(this.size)}}class Ac extends class{constructor(){this.changes=new lc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:Sr.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:io.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ec.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.document.isValidDocument()?e.push(this.Se.addEntry(t,i.document,this.getReadTime(n))):this.Se.removeEntry(n)})),ec.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cc{constructor(t){this.persistence=t,this.Es=new lc((t=>oo(t)),ao),this.lastRemoteSnapshotVersion=Sr.min(),this.highestTargetId=0,this.Is=0,this.As=new Ic,this.targetCount=0,this.Rs=hc.se()}forEachTarget(t,e){return this.Es.forEach(((t,n)=>e(n))),ec.resolve()}getLastRemoteSnapshotVersion(t){return ec.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ec.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),ec.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),ec.resolve()}ce(t){this.Es.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new hc(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,ec.resolve()}updateTargetData(t,e){return this.ce(e),ec.resolve()}removeTargetData(t,e){return this.Es.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,ec.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Es.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Es.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),ec.waitFor(s).next((()=>i))}getTargetCount(t){return ec.resolve(this.targetCount)}getTargetData(t,e){const n=this.Es.get(e)||null;return ec.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),ec.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),ec.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),ec.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return ec.resolve(n)}containsKey(t,e){return ec.resolve(this.As.containsKey(e))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kc{constructor(t,e){this.bs={},this.Le=new br(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new Cc(this),this.Ht=new ac,this.He=function(t,e){return new Sc(t,e)}(this.Ht,(t=>this.referenceDelegate.Ps(t))),this.N=new rc(e),this.Je=new Ec(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Tc(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){rr("MemoryPersistence","Starting transaction:",t);const i=new Dc(this.Le.next());return this.referenceDelegate.vs(),n(i).next((t=>this.referenceDelegate.Vs(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ss(t,e){return ec.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class Dc extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class Rc{constructor(t){this.persistence=t,this.Ds=new Ic,this.Cs=null}static Ns(t){return new Rc(t)}get xs(){if(this.Cs)return this.Cs;throw hr()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),ec.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),ec.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),ec.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ec.forEach(this.xs,(n=>{const i=qr.fromPath(n);return this.ks(t,i).next((t=>{t||e.removeEntry(i)}))})).next((()=>(this.Cs=null,e.apply(t))))}updateLimboDocument(t,e){return this.ks(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}Ps(t){return 0}ks(t,e){return ec.or([()=>ec.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}class Nc{constructor(){this.activeTargetIds=_a()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class xc{constructor(){this.yi=new Nc,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new Nc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lc{Ti(t){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Oc{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){rr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){rr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Pc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mc{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,i){const s=this.Bi(t,e);rr("RestConnection","Sending: ",s,n);const r={};return this.Ui(r,i),this.qi(t,s,r,n).then((t=>(rr("RestConnection","Received: ",t),t)),(e=>{throw ar("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}Ki(t,e,n,i){return this.Li(t,e,n,i)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+nr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=Pc[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,i){return new Promise(((s,r)=>{const o=new Zs;o.listenOnce(Gs.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ks.NO_ERROR:const e=o.getResponseJson();rr("Connection","XHR received:",JSON.stringify(e)),s(e);break;case Ks.TIMEOUT:rr("Connection",'RPC "'+t+'" timed out'),r(new fr(dr.DEADLINE_EXCEEDED,"Request time out"));break;case Ks.HTTP_ERROR:const n=o.getStatus();if(rr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(dr).indexOf(e)>=0?e:dr.UNKNOWN}(t.status);r(new fr(e,t.message))}else r(new fr(dr.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new fr(dr.UNAVAILABLE,"Connection failed."));break;default:hr()}}finally{rr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=new js,s=Pn(),r={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(r.xmlHttpFactory=new Xs({})),this.Ui(r.initMessageHeaders,e),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())||"object"==typeof navigator&&"ReactNative"===navigator.product||ct().indexOf("Electron/")>=0||function(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||ct().indexOf("MSAppHost/")>=0||ht()||(r.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");rr("Connection","Creating WebChannel: "+o,r);const a=i.createWebChannel(o,r);let c=!1,h=!1;const u=new Mc({vi:t=>{h?rr("Connection","Not sending because WebChannel is closed:",t):(c||(rr("Connection","Opening WebChannel transport."),a.open(),c=!0),rr("Connection","WebChannel sending:",t),a.send(t))},Vi:()=>a.close()}),l=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return l(a,Js.EventType.OPEN,(()=>{h||rr("Connection","WebChannel transport opened.")})),l(a,Js.EventType.CLOSE,(()=>{h||(h=!0,rr("Connection","WebChannel transport closed"),u.$i())})),l(a,Js.EventType.ERROR,(t=>{h||(h=!0,ar("Connection","WebChannel transport errored:",t),u.$i(new fr(dr.UNAVAILABLE,"The operation could not be completed")))})),l(a,Js.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];ur(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){rr("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=ca[t];if(void 0!==e)return ua(e)}(t),n=s.message;void 0===e&&(e=dr.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),h=!0,u.$i(new fr(e,n)),a.close()}else rr("Connection","WebChannel received:",n),u.Oi(n)}})),l(s,Ws.STAT_EVENT,(t=>{t.stat===Qs?rr("Connection","Detected buffering proxy"):t.stat===Ys&&rr("Connection","Detected no buffering proxy")})),setTimeout((()=>{u.ki()}),0),u}}function Uc(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Vc(t){return new Pa(t,!0)}class $c{constructor(t,e,n=1e3,i=1.5,s=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=i,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),i=Math.max(0,e-n);i>0&&rr("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,i,(()=>(this.Ji=Date.now(),t()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jc extends class{constructor(t,e,n,i,s,r,o){this.Oe=t,this.er=n,this.nr=i,this.sr=s,this.credentialsProvider=r,this.listener=o,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new $c(t,e)}ur(){return 1===this.state||5===this.state||this.hr()}hr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&null===this.rr&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this._r())))}mr(t){this.gr(),this.stream.send(t)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.gr(),this.yr(),this.ar.cancel(),this.ir++,4!==t?this.ar.reset():e&&e.code===dr.RESOURCE_EXHAUSTED?(or(e.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):e&&e.code===dr.UNAUTHENTICATED&&3!==this.state&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.pr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}pr(){}auth(){this.state=1;const t=this.Tr(this.ir),e=this.ir;this.credentialsProvider.getToken().then((t=>{this.ir===e&&this.Er(t)}),(e=>{t((()=>{const t=new fr(dr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ir(t)}))}))}Er(t){const e=this.Tr(this.ir);this.stream=this.Ar(t),this.stream.Si((()=>{e((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,(()=>(this.hr()&&(this.state=3),Promise.resolve()))),this.listener.Si())))})),this.stream.Ci((t=>{e((()=>this.Ir(t)))})),this.stream.onMessage((t=>{e((()=>this.onMessage(t)))}))}lr(){this.state=5,this.ar.Xi((async()=>{this.state=0,this.start()}))}Ir(t){return rr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Tr(t){return e=>{this.Oe.enqueueAndForget((()=>this.ir===t?e():(rr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}{constructor(t,e,n,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s),this.N=i}Ar(t){return this.sr.ji("Listen",t)}onMessage(t){this.ar.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:hr()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(t,e){return t.D?(ur(void 0===e||"string"==typeof e),xr.fromBase64String(e||"")):(ur(void 0===e||e instanceof Uint8Array),xr.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?dr.UNKNOWN:ua(t.code);return new fr(e,t.message||"")}(o);n=new ka(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Ua(t,i.document.name),r=Ma(i.document.updateTime),o=new no({mapValue:{fields:i.document.fields}}),a=io.newFoundDocument(s,r,o),c=i.targetIds||[],h=i.removedTargetIds||[];n=new Aa(c,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Ua(t,i.document),r=i.readTime?Ma(i.readTime):Sr.min(),o=io.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Aa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Ua(t,i.document),r=i.removedTargetIds||[];n=new Aa([],r,s,null)}else{if(!("filter"in e))return hr();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,s=new aa(i),r=t.targetId;n=new Ca(r,s)}}return n}(this.N,t),n=function(t){if(!("targetChange"in t))return Sr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Sr.min():e.readTime?Ma(e.readTime):Sr.min()}(t);return this.listener.Rr(e,n)}br(t){const e={};e.database=$a(this.N),e.addTarget=function(t,e){let n;const i=e.target;return n=co(i)?{documents:qa(t,i)}:{query:Ba(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=function(t,e){return t.D?e.toBase64():e.toUint8Array()}(t,e.resumeToken):e.snapshotVersion.compareTo(Sr.min())>0&&(n.readTime=function(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return hr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.N,t);n&&(e.labels=n),this.mr(e)}Pr(t){const e={};e.database=$a(this.N),e.removeTarget=t,this.mr(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qc extends class{}{constructor(t,e,n){super(),this.credentials=t,this.sr=e,this.N=n,this.kr=!1}$r(){if(this.kr)throw new fr(dr.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.$r(),this.credentials.getToken().then((i=>this.sr.Li(t,e,n,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===dr.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new fr(dr.UNKNOWN,t.toString())}))}Ki(t,e,n){return this.$r(),this.credentials.getToken().then((i=>this.sr.Ki(t,e,n,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===dr.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new fr(dr.UNKNOWN,t.toString())}))}terminate(){this.kr=!0}}class Bc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){0===this.Or&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve()))))}qr(t){"Online"===this.state?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Br("Offline")))}set(t){this.Kr(),this.Or=0,"Online"===t&&(this.Mr=!1),this.Br(t)}Br(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Ur(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(or(e),this.Mr=!1):rr("OnlineStateTracker",e)}Kr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hc{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=s,this.zr.Ti((t=>{n.enqueueAndForget((async()=>{Zc(this)&&(rr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=lr(t);e.Wr.add(4),await Kc(e),e.Hr.set("Unknown"),e.Wr.delete(4),await zc(e)}(this))}))})),this.Hr=new Bc(n,i)}}async function zc(t){if(Zc(t))for(const e of t.Gr)await e(!0)}async function Kc(t){for(const e of t.Gr)await e(!1)}function Gc(t,e){const n=lr(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),Jc(n)?Xc(n):rh(n).hr()&&Qc(n,e))}function Wc(t,e){const n=lr(t),i=rh(n);n.Qr.delete(e),i.hr()&&Yc(n,e),0===n.Qr.size&&(i.hr()?i.wr():Zc(n)&&n.Hr.set("Unknown"))}function Qc(t,e){t.Jr.Y(e.targetId),rh(t).br(e)}function Yc(t,e){t.Jr.Y(e),rh(t).Pr(e)}function Xc(t){t.Jr=new Ra({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),rh(t).start(),t.Hr.Lr()}function Jc(t){return Zc(t)&&!rh(t).ur()&&t.Qr.size>0}function Zc(t){return 0===lr(t).Wr.size}function th(t){t.Jr=void 0}async function eh(t){t.Qr.forEach(((e,n)=>{Qc(t,e)}))}async function nh(t,e){th(t),Jc(t)?(t.Hr.qr(e),Xc(t)):t.Hr.set("Unknown")}async function ih(t,e,n){if(t.Hr.set("Online"),e instanceof ka&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.Qr.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.Qr.delete(i),t.Jr.removeTarget(i))}(t,e)}catch(n){rr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await sh(t,n)}else if(e instanceof Aa?t.Jr.rt(e):e instanceof Ca?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(Sr.min()))try{const e=await yc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Jr._t(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.Qr.get(i);s&&t.Qr.set(i,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.Qr.get(e);if(!n)return;t.Qr.set(e,n.withResumeToken(xr.EMPTY_BYTE_STRING,n.snapshotVersion)),Yc(t,e);const i=new sc(n.target,e,1,n.sequenceNumber);Qc(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){rr("RemoteStore","Failed to raise snapshot:",e),await sh(t,e)}}async function sh(t,e,n){if(!nc(e))throw e;t.Wr.add(1),await Kc(t),t.Hr.set("Offline"),n||(n=()=>yc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{rr("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await zc(t)}))}function rh(t){return t.Yr||(t.Yr=function(t,e,n){const i=lr(t);return i.$r(),new jc(e,i.sr,i.credentials,i.N,n)
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}(t.datastore,t.asyncQueue,{Si:eh.bind(null,t),Ci:nh.bind(null,t),Rr:ih.bind(null,t)}),t.Gr.push((async e=>{e?(t.Yr.dr(),Jc(t)?Xc(t):t.Hr.set("Unknown")):(await t.Yr.stop(),th(t))}))),t.Yr
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class oh{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new oh(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new fr(dr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ah(t,e){if(or("AsyncQueue",`${e}: ${t}`),nc(t))return new fr(dr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ch{constructor(t){this.comparator=t?(e,n)=>t(e,n)||qr.comparator(e.key,n.key):(t,e)=>qr.comparator(t.key,e.key),this.keyedMap=wa(),this.sortedSet=new la(this.comparator)}static emptySet(t){return new ch(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ch))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ch;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hh{constructor(){this.Zr=new la(qr.comparator)}track(t){const e=t.doc.key,n=this.Zr.get(e);n?0!==t.type&&3===n.type?this.Zr=this.Zr.insert(e,t):3===t.type&&1!==n.type?this.Zr=this.Zr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Zr=this.Zr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Zr=this.Zr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Zr=this.Zr.remove(e):1===t.type&&2===n.type?this.Zr=this.Zr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Zr=this.Zr.insert(e,{type:2,doc:t.doc}):hr():this.Zr=this.Zr.insert(e,t)}eo(){const t=[];return this.Zr.inorderTraversal(((e,n)=>{t.push(n)})),t}}class uh{constructor(t,e,n,i,s,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new uh(t,e,ch.emptySet(e),s,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Lo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lh{constructor(){this.no=void 0,this.listeners=[]}}class dh{constructor(){this.queries=new lc((t=>Oo(t)),Lo),this.onlineState="Unknown",this.so=new Set}}function fh(t,e){const n=lr(t);let i=!1;for(const t of e){const e=t.query,s=n.queries.get(e);if(s){for(const e of s.listeners)e.ro(t)&&(i=!0);s.no=t}}i&&gh(n)}function ph(t,e,n){const i=lr(t),s=i.queries.get(e);if(s)for(const t of s.listeners)t.onError(n);i.queries.delete(e)}function gh(t){t.so.forEach((t=>{t.next()}))}class mh{constructor(t,e,n){this.query=t,this.oo=e,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=n||{}}ro(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new uh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.uo(t)&&(this.oo.next(t),e=!0):this.ho(t,this.onlineState)&&(this.lo(t),e=!0),this.ao=t,e}onError(t){this.oo.error(t)}io(t){this.onlineState=t;let e=!1;return this.ao&&!this.co&&this.ho(this.ao,t)&&(this.lo(this.ao),e=!0),e}ho(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.fo&&n||t.docs.isEmpty()&&"Offline"!==e)}uo(t){if(t.docChanges.length>0)return!0;const e=this.ao&&this.ao.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}lo(t){t=uh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.oo.next(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yh{constructor(t){this.key=t}}class vh{constructor(t){this.key=t}}class wh{constructor(t,e){this.query=t,this.po=e,this.To=null,this.current=!1,this.Eo=Ea(),this.mutatedKeys=Ea(),this.Io=Fo(t),this.Ao=new ch(this.Io)}get Ro(){return this.po}bo(t,e){const n=e?e.Po:new hh,i=e?e.Ao:this.Ao;let s=e?e.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a=Co(this.query)&&i.size===this.query.limit?i.last():null,c=ko(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const h=i.get(t),u=Mo(this.query,e)?e:null,l=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;h&&u?h.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.vo(h,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Io(u,a)>0||c&&this.Io(u,c)<0)&&(o=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(a||c)&&(o=!0)),f&&(u?(r=r.add(u),s=d?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),Co(this.query)||ko(this.query))for(;r.size>this.query.limit;){const t=Co(this.query)?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Ao:r,Po:n,Ln:o,mutatedKeys:s}}vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Ao;this.Ao=t.Ao,this.mutatedKeys=t.mutatedKeys;const s=t.Po.eo();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return hr()}};return n(t)-n(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t.type,e.type)||this.Io(t.doc,e.doc))),this.Vo(n);const r=e?this.So():[],o=0===this.Eo.size&&this.current?1:0,a=o!==this.To;return this.To=o,0!==s.length||a?{snapshot:new uh(this.query,t.Ao,i,s,t.mutatedKeys,0===o,a,!1),Do:r}:{Do:r}}io(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new hh,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(t){return!this.po.has(t)&&!!this.Ao.has(t)&&!this.Ao.get(t).hasLocalMutations}Vo(t){t&&(t.addedDocuments.forEach((t=>this.po=this.po.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.po=this.po.delete(t))),this.current=t.current)}So(){if(!this.current)return[];const t=this.Eo;this.Eo=Ea(),this.Ao.forEach((t=>{this.Co(t.key)&&(this.Eo=this.Eo.add(t.key))}));const e=[];return t.forEach((t=>{this.Eo.has(t)||e.push(new vh(t))})),this.Eo.forEach((n=>{t.has(n)||e.push(new yh(n))})),e}No(t){this.po=t.Gn,this.Eo=Ea();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return uh.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,0===this.To)}}class bh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Eh{constructor(t){this.key=t,this.ko=!1}}class Ih{constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.$o={},this.Oo=new lc((t=>Oo(t)),Lo),this.Fo=new Map,this.Mo=new Set,this.Lo=new la(qr.comparator),this.Bo=new Map,this.Uo=new Ic,this.qo={},this.Ko=new Map,this.jo=hc.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return!0===this.Qo}}async function _h(t,e){const n=function(t){const e=lr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ph.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ch.bind(null,e),e.$o.Rr=fh.bind(null,e.eventManager),e.$o.Go=ph.bind(null,e.eventManager),e}(t);let i,s;const r=n.Oo.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.xo();else{const t=await function(t,e){const n=lr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.ze.getTargetData(t,e).next((s=>s?(i=s,ec.resolve(i)):n.ze.allocateTargetId(t).next((s=>(i=new sc(e,s,0,t.currentSequenceNumber),n.ze.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.Un.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t}))}(n.localStore,xo(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,s=await async function(t,e,n,i){t.Wo=(e,n,i)=>async function(t,e,n,i){let s=e.view.bo(n);s.Ln&&(s=await bc(t.localStore,e.query,!1).then((({documents:t})=>e.view.bo(t,s))));const r=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,r);return Rh(t,e.targetId,o.Do),o.snapshot}(t,e,n,i);const s=await bc(t.localStore,e,!0),r=new wh(e,s.Gn),o=r.bo(s.documents),a=Sa.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),c=r.applyChanges(o,t.isPrimaryClient,a);Rh(t,n,c.Do);const h=new bh(e,n,r);return t.Oo.set(e,h),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}(n,e,i,"current"===r),n.isPrimaryClient&&Gc(n.remoteStore,t)}return s}async function Th(t,e){const n=lr(t),i=n.Oo.get(e),s=n.Fo.get(i.targetId);if(s.length>1)return n.Fo.set(i.targetId,s.filter((t=>!Lo(t,e)))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await wc(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Wc(n.remoteStore,i.targetId),kh(n,i.targetId)})).catch(uc)):(kh(n,i.targetId),await wc(n.localStore,i.targetId,!0))}async function Sh(t,e){const n=lr(t);try{const t=await vc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.Bo.get(e);i&&(ur(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.ko=!0:t.modifiedDocuments.size>0?ur(i.ko):t.removedDocuments.size>0&&(ur(i.ko),i.ko=!1))})),await Lh(n,t,e)}catch(t){await uc(t)}}function Ah(t,e,n){const i=lr(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.Oo.forEach(((n,i)=>{const s=i.view.io(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=lr(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.io(e)&&(i=!0)})),i&&gh(n)}(i.eventManager,e),t.length&&i.$o.Rr(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Ch(t,e,n){const i=lr(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Bo.get(e),r=s&&s.key;if(r){let t=new la(qr.comparator);t=t.insert(r,io.newNoDocument(r,Sr.min()));const n=Ea().add(r),s=new Ta(Sr.min(),new Map,new pa(Ir),t,n);await Sh(i,s),i.Lo=i.Lo.remove(r),i.Bo.delete(e),xh(i)}else await wc(i.localStore,e,!1).then((()=>kh(i,e,n))).catch(uc)}function kh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Fo.get(e))t.Oo.delete(i),n&&t.$o.Go(i,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach((e=>{t.Uo.containsKey(e)||Dh(t,e)}))}function Dh(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);null!==n&&(Wc(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),xh(t))}function Rh(t,e,n){for(const i of n)i instanceof yh?(t.Uo.addReference(i.key,e),Nh(t,i)):i instanceof vh?(rr("SyncEngine","Document no longer in limbo: "+i.key),t.Uo.removeReference(i.key,e),t.Uo.containsKey(i.key)||Dh(t,i.key)):hr()}function Nh(t,e){const n=e.key,i=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(i)||(rr("SyncEngine","New document in limbo: "+n),t.Mo.add(i),xh(t))}function xh(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new qr(Dr.fromString(e)),i=t.jo.next();t.Bo.set(i,new Eh(n)),t.Lo=t.Lo.insert(n,i),Gc(t.remoteStore,new sc(xo(Ao(n.path)),i,2,br.T))}}async function Lh(t,e,n){const i=lr(t),s=[],r=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach(((t,a)=>{o.push(i.Wo(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=fc.kn(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.$o.Rr(s),await async function(t,e){const n=lr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ec.forEach(e,(e=>ec.forEach(e.Nn,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>ec.forEach(e.xn,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!nc(t))throw t;rr("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Un.get(e),i=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(i);n.Un=n.Un.insert(e,s)}}}(i.localStore,r))}async function Oh(t,e){const n=lr(t);if(!n.currentUser.isEqual(e)){rr("SyncEngine","User change. New user:",e.toKey());const t=await mc(n.localStore,e);n.currentUser=e,function(t,e){t.Ko.forEach((t=>{t.forEach((t=>{t.reject(new fr(dr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.Ko.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Lh(n,t.Wn)}}function Ph(t,e){const n=lr(t),i=n.Bo.get(e);if(i&&i.ko)return Ea().add(i.key);{let t=Ea();const i=n.Fo.get(e);if(!i)return t;for(const e of i){const i=n.Oo.get(e);t=t.unionWith(i.view.Ro)}return t}}class Mh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=Vc(t.databaseInfo.databaseId),this.sharedClientState=this.Ho(t),this.persistence=this.Jo(t),await this.persistence.start(),this.gcScheduler=this.Yo(t),this.localStore=this.Xo(t)}Yo(t){return null}Xo(t){return function(t,e,n,i){return new gc(t,e,n,i)}(this.persistence,new pc,t.initialUser,this.N)}Jo(t){return new kc(Rc.Ns,this.N)}Ho(t){return new xc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Fh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ah(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Oh.bind(null,this.syncEngine),await async function(t,e){const n=lr(t);e?(n.Wr.delete(2),await zc(n)):e||(n.Wr.add(2),await Kc(n),n.Hr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new dh}createDatastore(t){const e=Vc(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Fc(i));var i;return function(t,e,n){return new qc(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>Ah(this.syncEngine,t,0),r=Oc.bt()?new Oc:new Lc,new Hc(e,n,i,s,r);var e,n,i,s,r}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new Ih(t,e,n,i,s,r);return o&&(a.Qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=lr(t);rr("RemoteStore","RemoteStore shutting down."),e.Wr.add(5),await Kc(e),e.zr.shutdown(),e.Hr.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Uh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.tc(this.observer.next,t)}error(t){this.observer.error?this.tc(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}ec(){this.muted=!0}tc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vh{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=er.UNAUTHENTICATED,this.clientId=class{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Er(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,(async t=>{rr("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new fr(dr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=ah(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function $h(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(rr("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),rr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await mc(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new Mh)),t.offlineComponents}(t);rr("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>async function(t,e){const n=lr(t);n.asyncQueue.verifyOperationInProgress(),rr("RemoteStore","RemoteStore received new credentials");const i=Zc(n);n.Wr.add(3),await Kc(n),i&&n.Hr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Wr.delete(3),await zc(n)}(e.remoteStore,t))),t.onlineComponents=e}async function jh(t){const e=await async function(t){return t.onlineComponents||(rr("FirestoreClient","Using default OnlineComponentProvider"),await $h(t,new Fh)),t.onlineComponents}(t),n=e.eventManager;return n.onListen=_h.bind(null,e.syncEngine),n.onUnlisten=Th.bind(null,e.syncEngine),n}function qh(t,e,n={}){const i=new pr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new Uh({next:n=>{e.enqueueAndForget((()=>async function(t,e){const n=lr(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}(t,o))),n.fromCache&&"server"===i.source?s.reject(new fr(dr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new mh(n,r,{includeMetadataChanges:!0,fo:!0});return async function(t,e){const n=lr(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new lh),s)try{r.no=await n.onListen(i)}catch(t){const n=ah(t,`Initialization of query '${Po(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,r),r.listeners.push(e),e.io(n.onlineState),r.no&&e.ro(r.no)&&gh(n)}(t,o)}(await jh(t),t.asyncQueue,e,n,i))),i.promise}class Bh{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Hh{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Hh&&t.projectId===this.projectId&&t.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const zh=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Kh(t){if(qr.isDocumentKey(t))throw new fr(dr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new fr(dr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":hr()}(t);throw new fr(dr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wh{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new fr(dr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new fr(dr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new fr(dr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qh{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wh({}),this._settingsFrozen=!1,t instanceof Hh?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new fr(dr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hh(t.options.projectId)}(t))}get app(){if(!this._app)throw new fr(dr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new fr(dr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wh(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new mr;switch(t.type){case"gapi":const e=t.client;return ur(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new wr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new fr(dr.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=zh.get(t);e&&(rr("ComponentProvider","Removing Datastore"),zh.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Yh(this.firestore,t,this._key)}}class Xh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Xh(this.firestore,t,this._query)}}class Jh extends Xh{constructor(t,e,n){super(t,e,Ao(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Yh(this.firestore,null,new qr(t))}withConverter(t){return new Jh(this.firestore,t,this._path)}}function Zh(t,e,...n){if(t=mt(t),function(t,e,n){if(!n)throw new fr(dr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}("collection","path",e),t instanceof Qh){const i=Dr.fromString(e,...n);return Kh(i),new Jh(t,null,i)}{if(!(t instanceof Yh||t instanceof Jh))throw new fr(dr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Dr.fromString(e,...n));return Kh(i),new Jh(t.firestore,null,i)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tu{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new $c(this,"async_queue_retry"),this.Rc=()=>{const t=Uc();t&&rr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ar.tr()};const t=Uc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.bc(),this.Pc(t)}enterRestrictedMode(t){if(!this.gc){this.gc=!0,this.Ic=t||!1;const e=Uc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Rc)}}enqueue(t){if(this.bc(),this.gc)return new Promise((()=>{}));const e=new pr;return this.Pc((()=>this.gc&&this.Ic?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.mc.push(t),this.vc())))}async vc(){if(0!==this.mc.length){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(t){if(!nc(t))throw t;rr("AsyncQueue","Operation failed with retryable error: "+t)}this.mc.length>0&&this.ar.Xi((()=>this.vc()))}}Pc(t){const e=this._c.then((()=>(this.Ec=!0,t().catch((t=>{this.Tc=t,this.Ec=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);throw or("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ec=!1,t))))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.bc(),this.Ac.indexOf(t)>-1&&(e=0);const i=oh.createAndSchedule(this,t,e,n,(t=>this.Vc(t)));return this.yc.push(i),i}bc(){this.Tc&&hr()}verifyOperationInProgress(){}async Sc(){let t;do{t=this._c,await t}while(t!==this._c)}Dc(t){for(const e of this.yc)if(e.timerId===t)return!0;return!1}Cc(t){return this.Sc().then((()=>{this.yc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.yc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sc()}))}Nc(t){this.Ac.push(t)}Vc(t){const e=this.yc.indexOf(t);this.yc.splice(e,1)}}class eu extends Qh{constructor(t,e){super(t,e),this.type="firestore",this._queue=new tu,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||nu(this),this._firestoreClient.terminate()}}function nu(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Bh(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Vh(t._credentials,t._queue,i)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class iu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new fr(dr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class su{constructor(t){this._byteString=t}static fromBase64String(t){try{return new su(xr.fromBase64String(t))}catch(t){throw new fr(dr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new su(xr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ru{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new fr(dr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new fr(dr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ir(this._lat,t._lat)||Ir(this._long,t._long)}}const ou=new RegExp("[~\\*/\\[\\]]");function au(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new fr(dr.INVALID_ARGUMENT,a+t+c)
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class cu{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Yh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new hu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(uu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class hu extends cu{data(){return super.data()}}function uu(t,e){return"string"==typeof e?function(t,e,n){if(e.search(ou)>=0)throw au(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new iu(...e.split("."))._internalPath}catch(i){throw au(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e):e instanceof iu?e._internalPath:e._delegate._internalPath}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class du extends cu{constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new fu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(uu("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class fu extends du{data(t={}){return super.data(t)}}class pu{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new lu(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new fu(this._firestore,this._userDataWriter,n.key,n,new lu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new fr(dr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new fu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new lu(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new fu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new lu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:gu(e.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function gu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return hr()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mu extends class{}{constructor(t,e){super(),this.Gc=t,this.Jc=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new fr(dr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new fr(dr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new Eo(e,n);return function(t,e){if(null===Do(t)){const n=Ro(t);null!==n&&function(t,e,n){if(!n.isEqual(e))throw new fr(dr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(0,n,e.field)}}(t,i),i}(t._query,this.Gc,this.Jc);return new Xh(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new So(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}class yu extends class{convertValue(t,e="none"){switch(Br(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Pr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Mr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw hr()}}convertObject(t,e){const n={};return Cr(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new ru(Pr(t.latitude),Pr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ur(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Vr(t));default:return null}}convertTimestamp(t){const e=Or(t);return new Tr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Dr.fromString(t);ur(tc(n));const i=new Hh(n.get(1),n.get(3)),s=new qr(n.popFirst(5));return i.isEqual(e)||or(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new su(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Yh(this.firestore,null,e)}}function vu(t){t=Gh(t,Xh);const e=Gh(t.firestore,eu),n=function(t){return t._firestoreClient||nu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(e),i=new yu(e);return function(t){if(ko(t)&&0===t.explicitOrderBy.length)throw new fr(dr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),qh(n,t._query).then((n=>new pu(e,i,t,n)))}!function(t,e=!0){nr="9.5.0",Mt(new yt("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=new eu(i,new yr(t.getProvider("auth-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),qt(tr,"3.3.1",t),qt(tr,"3.3.1","esm2017")}();
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
qt("firebase","9.5.0","app");var wu=st((function(t,e){!function(t){function e(t){return Array.prototype.slice.call(t)}function n(t){return new Promise((function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function i(t,e,i){var s,r=new Promise((function(r,o){n(s=t[e].apply(t,i)).then(r,o)}));return r.request=s,r}function s(t,e,n){var s=i(t,e,n);return s.then((function(t){if(t)return new u(t,s.request)}))}function r(t,e,n){n.forEach((function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})}))}function o(t,e,n,s){s.forEach((function(s){s in n.prototype&&(t.prototype[s]=function(){return i(this[e],s,arguments)})}))}function a(t,e,n,i){i.forEach((function(i){i in n.prototype&&(t.prototype[i]=function(){return this[e][i].apply(this[e],arguments)})}))}function c(t,e,n,i){i.forEach((function(i){i in n.prototype&&(t.prototype[i]=function(){return s(this[e],i,arguments)})}))}function h(t){this._index=t}function u(t,e){this._cursor=t,this._request=e}function l(t){this._store=t}function d(t){this._tx=t,this.complete=new Promise((function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}}))}function f(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new d(n)}function p(t){this._db=t}function g(t,e,n){var s=i(indexedDB,"open",[t,e]),r=s.request;return r&&(r.onupgradeneeded=function(t){n&&n(new f(r.result,t.oldVersion,r.transaction))}),s.then((function(t){return new p(t)}))}function m(t){return i(indexedDB,"deleteDatabase",[t])}r(h,"_index",["name","keyPath","multiEntry","unique"]),o(h,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(h,"_index",IDBIndex,["openCursor","openKeyCursor"]),r(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(u.prototype[t]=function(){var e=this,i=arguments;return Promise.resolve().then((function(){return e._cursor[t].apply(e._cursor,i),n(e._request).then((function(t){if(t)return new u(t,e._request)}))}))})})),l.prototype.createIndex=function(){return new h(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){return new h(this._store.index.apply(this._store,arguments))},r(l,"_store",["name","keyPath","indexNames","autoIncrement"]),o(l,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(l,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(l,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new l(this._tx.objectStore.apply(this._tx,arguments))},r(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new l(this._db.createObjectStore.apply(this._db,arguments))},r(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},r(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[l,h].forEach((function(n){t in n.prototype&&(n.prototype[t.replace("open","iterate")]=function(){var n=e(arguments),i=n[n.length-1],s=this._store||this._index,r=s[t].apply(s,n.slice(0,-1));r.onsuccess=function(){i(r.result)}})}))})),[h,l].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,i=[];return new Promise((function(s){n.iterateCursor(t,(function(t){t?(i.push(t.value),void 0===e||i.length!=e?t.continue():s(i)):s(i)}))}))})})),t.openDb=g,t.deleteDb=m,Object.defineProperty(t,"__esModule",{value:!0})}(e)}));const bu="@firebase/installations",Eu="0.5.4",Iu=1e4,_u="w:0.5.4",Tu="FIS_v2",Su=36e5,Au=new lt("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Cu(t){return t instanceof ut&&t.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ku({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function Du(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function Ru(t,e){const n=(await e.json()).error;return Au.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Nu({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function xu(t,{refreshToken:e}){const n=Nu(t);return n.append("Authorization",function(t){return`FIS_v2 ${t}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)),n}async function Lu(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Ou(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Pu=/^[cdef][\w-]{21}$/;function Mu(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);return Pu.test(e)?e:""}catch(t){return""}}function Fu(t){return`${t.appName}!${t.appId}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Uu=new Map;function Vu(t,e){const n=Fu(t);$u(n,e),function(t,e){const n=function(){!ju&&"BroadcastChannel"in self&&(ju=new BroadcastChannel("[Firebase] FID Change"),ju.onmessage=t=>{$u(t.data.key,t.data.fid)});return ju}();n&&n.postMessage({key:t,fid:e});0===Uu.size&&ju&&(ju.close(),ju=null)}(n,e)}function $u(t,e){const n=Uu.get(t);if(n)for(const t of n)t(e)}let ju=null;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const qu="firebase-installations-store";let Bu=null;function Hu(){return Bu||(Bu=wu.openDb("firebase-installations-database",1,(t=>{if(0===t.oldVersion)t.createObjectStore(qu)}))),Bu}async function zu(t,e){const n=Fu(t),i=(await Hu()).transaction(qu,"readwrite"),s=i.objectStore(qu),r=await s.get(n);return await s.put(e,n),await i.complete,r&&r.fid===e.fid||Vu(t,e.fid),e}async function Ku(t){const e=Fu(t),n=(await Hu()).transaction(qu,"readwrite");await n.objectStore(qu).delete(e),await n.complete}async function Gu(t,e){const n=Fu(t),i=(await Hu()).transaction(qu,"readwrite"),s=i.objectStore(qu),r=await s.get(n),o=e(r);return void 0===o?await s.delete(n):await s.put(o,n),await i.complete,!o||r&&r.fid===o.fid||Vu(t,o.fid),o}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Wu(t){let e;const n=await Gu(t,(n=>{const i=function(t){return Xu(t||{fid:Mu(),registrationStatus:0})}(n),s=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(Au.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(t,e){try{const n=await async function(t,{fid:e}){const n=ku(t),i=Nu(t),s={fid:e,authVersion:Tu,appId:t.appId,sdkVersion:_u},r={method:"POST",headers:i,body:JSON.stringify(s)},o=await Lu((()=>fetch(n,r)));if(o.ok){const t=await o.json();return{fid:t.fid||e,registrationStatus:2,refreshToken:t.refreshToken,authToken:Du(t.authToken)}}throw await Ru("Create Installation",o)}(t,e);return zu(t,n)}catch(n){throw Cu(n)&&409===n.customData.serverCode?await Ku(t):await zu(t,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:Qu(t)}:{installationEntry:e}}(t,i);return e=s.registrationPromise,s.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function Qu(t){let e=await Yu(t);for(;1===e.registrationStatus;)await Ou(100),e=await Yu(t);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await Wu(t);return n||e}return e}function Yu(t){return Gu(t,(t=>{if(!t)throw Au.create("installation-not-found");return Xu(t)}))}function Xu(t){return 1===(e=t).registrationStatus&&e.registrationTime+Iu<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}async function Ju({appConfig:t,platformLoggerProvider:e},n){const i=function(t,{fid:e}){return`${ku(t)}/${e}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t,n),s=xu(t,n),r=e.getImmediate({optional:!0});r&&s.append("x-firebase-client",r.getPlatformInfoString());const o={installation:{sdkVersion:_u}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Lu((()=>fetch(i,a)));if(c.ok){return Du(await c.json())}throw await Ru("Generate Auth Token",c)}async function Zu(t,e=!1){let n;const i=await Gu(t.appConfig,(i=>{if(!el(i))throw Au.create("not-registered");const s=i.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Su}(t)}(s))return i;if(1===s.requestStatus)return n=async function(t,e){let n=await tl(t.appConfig);for(;1===n.authToken.requestStatus;)await Ou(100),n=await tl(t.appConfig);const i=n.authToken;return 0===i.requestStatus?Zu(t,e):i}(t,e),i;{if(!navigator.onLine)throw Au.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(i);return n=async function(t,e){try{const n=await Ju(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await zu(t.appConfig,i),n}catch(n){if(!Cu(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await zu(t.appConfig,n)}else await Ku(t.appConfig);throw n}}(t,e),e}}));return n?await n:i.authToken}function tl(t){return Gu(t,(t=>{if(!el(t))throw Au.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+Iu<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}))}function el(t){return void 0!==t&&2===t.registrationStatus}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function nl(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await Wu(t);e&&await e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(n.appConfig);return(await Zu(n,e)).token}function il(t){return Au.create("missing-app-config-values",{valueName:t})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const sl="installations",rl=t=>{const e=t.getProvider("app").getImmediate(),n=function(t){if(!t||!t.options)throw il("App Configuration");if(!t.name)throw il("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw il(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,platformLoggerProvider:Ft(e,"platform-logger"),_delete:()=>Promise.resolve()}},ol=t=>{const e=Ft(t.getProvider("app").getImmediate(),sl).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:i}=await Wu(e.appConfig);return i?i.catch(console.error):Zu(e).catch(console.error),n.fid}(e),getToken:t=>nl(e,t)}};Mt(new yt(sl,rl,"PUBLIC")),Mt(new yt("installations-internal",ol,"PRIVATE")),qt(bu,Eu),qt(bu,Eu,"esm2017");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const al="analytics",cl="https://www.googletagmanager.com/gtag/js",hl=new At("@firebase/analytics");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function ul(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function ll(t,e,n,i){return async function(s,r,o){try{"event"===s?await async function(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let t=s.send_to;Array.isArray(t)||(t=[t]);const i=await ul(n);for(const n of t){const t=i.find((t=>t.measurementId===n)),s=t&&e[t.appId];if(!s){r=[];break}r.push(s)}}0===r.length&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(t){hl.error(t)}}(t,e,n,r,o):"config"===s?await async function(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const t=(await ul(n)).find((t=>t.measurementId===s));t&&await e[t.appId]}}catch(t){hl.error(t)}t("config",s,r)}(t,e,n,i,r,o):t("set",r)}catch(t){hl.error(t)}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const dl=new lt("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const fl=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function pl(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function gl(t,e=fl,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw dl.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw dl.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new yl;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),ml({appId:i,apiKey:s,measurementId:r},o,a,e)}async function ml(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=fl){const{appId:r,measurementId:o}=t;try{await function(t,e){return new Promise(((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener((()=>{clearTimeout(r),i(dl.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(i,e)}catch(t){if(o)return hl.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:r,measurementId:o};throw t}try{const e=await async function(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:pl(i)},r="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(r,s);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw dl.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return s.deleteThrottleMetadata(r),e}catch(e){if(!function(t){if(!(t instanceof ut&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(e)){if(s.deleteThrottleMetadata(r),o)return hl.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:r,measurementId:o};throw e}const a=503===Number(e.customData.httpStatus)?gt(n,s.intervalMillis,30):gt(n,s.intervalMillis),c={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return s.setThrottleMetadata(r,c),hl.debug(`Calling attemptFetch again in ${a} millis`),ml(t,c,i,s)}}class yl{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function vl(){if("object"!=typeof indexedDB)return hl.warn(dl.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}catch(t){return hl.warn(dl.create("indexeddb-unavailable",{errorInfo:t}).message),!1}return!0}async function wl(t,e,n,i,s,r,o){var a;const c=gl(t);c.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&hl.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>hl.error(t))),e.push(c);const h=vl().then((t=>t?i.getId():void 0)),[u,l]=await Promise.all([c,h]);(function(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(cl))return e;return null})()||function(t,e){const n=document.createElement("script");n.src=`${cl}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}(r,u.measurementId),s("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=l&&(d.firebase_id=l),s("config",u.measurementId,d),u.measurementId}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bl{constructor(t){this.app=t}_delete(){return delete El[this.app.options.appId],Promise.resolve()}}let El={},Il=[];const _l={};let Tl,Sl,Al="dataLayer",Cl=!1;function kl(){const t=[];if(ht()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=dl.create("invalid-analytics-context",{errorInfo:e});hl.warn(n.message)}}function Dl(t,e,n){kl();const i=t.options.appId;if(!i)throw dl.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw dl.create("no-api-key");hl.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=El[i])throw dl.create("already-exists",{id:i});if(!Cl){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(Al);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,i,s){let r=function(...t){window[i].push(arguments)};return window[s]&&"function"==typeof window[s]&&(r=window[s]),window[s]=ll(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}(El,Il,_l,Al,"gtag");Sl=t,Tl=e,Cl=!0}El[i]=wl(t,Il,_l,e,Tl,Al,n);return new bl(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Rl(t,e,n,i){t=mt(t),async function(t,e,n,i,s){if(s&&s.global)t("event",n,i);else{const s=await e;t("event",n,Object.assign(Object.assign({},i),{send_to:s}))}}(Sl,El[t.app.options.appId],e,n,i).catch((t=>hl.error(t)))}const Nl="@firebase/analytics",xl="0.7.4";Mt(new yt(al,((t,{options:e})=>Dl(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),Mt(new yt("analytics-internal",(function(t){try{const e=t.getProvider(al).getImmediate();return{logEvent:(t,n,i)=>Rl(e,t,n,i)}}catch(t){throw dl.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),qt(Nl,xl),qt(Nl,xl,"esm2017");const Ll=function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:Nt,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!=typeof i||!i)throw Ut.create("bad-app-name",{appName:String(i)});const s=Lt.get(i);if(s){if(ft(t,s.options)&&ft(n,s.config))return s;throw Ut.create("duplicate-app",{appName:i})}const r=new bt(i);for(const t of Ot.values())r.addComponent(t);const o=new Vt(t,n,r);return Lt.set(i,o),o}({apiKey:"AIzaSyCFEnFySHtQTgRBs0128lawmwfWupfajFo",authDomain:"earthify-886cf.firebaseapp.com",projectId:"earthify-886cf",storageBucket:"earthify-886cf.appspot.com",messagingSenderId:"207963653599",appId:"1:207963653599:web:81b889cee90f9f7bccf06a",measurementId:"G-KD51HZ5SSF"});!function(t=jt()){const e=Ft(t=mt(t),al);e.isInitialized()?e.getImmediate():function(t,e={}){const n=Ft(t,al);if(n.isInitialized()){const t=n.getImmediate();if(ft(e,n.getOptions()))return t;throw dl.create("already-initialized")}n.initialize({options:e})}(t)}(Ll);
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Ol="firebasestorage.googleapis.com";class Pl extends ut{constructor(t,e){super(Ml(t),`Firebase Storage: ${e} (${Ml(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pl.prototype)}_codeEquals(t){return Ml(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function Ml(t){return"storage/"+t}function Fl(){return new Pl("unknown","An unknown error occurred, please check the error payload for server response.")}function Ul(t){return new Pl("invalid-argument",t)}function Vl(){return new Pl("app-deleted","The Firebase app was deleted.")}function $l(t){throw new Pl("internal-error","Internal error: "+t)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jl{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=jl.makeFromUrl(t,e)}catch(e){return new jl(t,"")}if(""===n.path)return n;throw new Pl("invalid-default-bucket","Invalid default bucket '"+t+"'.")}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+i+"(/(.*))?$","i");function r(t){t.path_=decodeURIComponent(t.path)}const o=e.replace(/[.]/g,"\\."),a=[{regex:s,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:r},{regex:new RegExp(`^https?://${e===Ol?"(?:storage.googleapis.com|storage.cloud.google.com)":e}/${i}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:r}];for(let e=0;e<a.length;e++){const i=a[e],s=i.regex.exec(t);if(s){const t=s[i.indices.bucket];let e=s[i.indices.path];e||(e=""),n=new jl(t,e),i.postModify(n);break}}if(null==n)throw function(t){return new Pl("invalid-url","Invalid URL '"+t+"'.")}(t);return n}}class ql{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Bl(t){return"string"==typeof t||t instanceof String}function Hl(t,e,n,i){if(i<e)throw Ul(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Ul(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function zl(t,e,n){let i=e;return null==n&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function Kl(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){n=n+(e(i)+"="+e(t[i]))+"&"}return n=n.slice(0,-1),n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Gl;!function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"}(Gl||(Gl={}));
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Wl{constructor(t,e,n,i,s,r,o,a,c,h,u){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=r,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new Ql(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===Gl.NO_ERROR,s=n.getStatus();if(!e||this.isRetryStatusCode_(s)){const e=n.getErrorCode()===Gl.ABORT;return void t(!1,new Ql(!1,null,e))}const r=-1!==this.successCodes_.indexOf(s);t(!0,new Ql(r,n))}))},e=(t,e)=>{const n=this.resolve_,i=this.reject_,s=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(s,s.getResponse());!
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(t){return void 0!==t}(t)?n():n(t)}catch(t){i(t)}else if(null!==s){const t=Fl();t.serverResponse=s.getErrorText(),this.errorCallback_?i(this.errorCallback_(s,t)):i(t)}else if(e.canceled){i(this.appDelete_?Vl():new Pl("canceled","User canceled the upload/download."))}else{i(new Pl("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?e(0,new Ql(!1,null,!0)):this.backoffId_=function(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function c(){return 2===a}let h=!1;function u(...t){h||(h=!0,e.apply(null,t))}function l(e){s=setTimeout((()=>{s=null,t(f,c())}),e)}function d(){r&&clearTimeout(r)}function f(t,...e){if(h)return void d();if(t)return d(),void u.call(null,t,...e);if(c()||o)return d(),void u.call(null,t,...e);let n;i<64&&(i*=2),1===a?(a=2,n=0):n=1e3*(i+Math.random()),l(n)}let p=!1;function g(t){p||(p=!0,d(),h||(null!==s?(t||(a=2),clearTimeout(s),l(0)):t||(a=1)))}return l(0),r=setTimeout((()=>{o=!0,g(!0)}),n),g}(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&function(t){t(!1)}(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=-1!==[408,429].indexOf(t),i=-1!==this.additionalRetryCodes_.indexOf(t);return e||n||i}}class Ql{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Yl(t){let e;try{e=JSON.parse(t)}catch(t){return null}return function(t){return"object"==typeof t&&!Array.isArray(t)}(e)?e:null}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Xl(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Jl(t,e){return e}class Zl{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||Jl}}let td=null;function ed(){if(td)return td;const t=[];t.push(new Zl("bucket")),t.push(new Zl("generation")),t.push(new Zl("metageneration")),t.push(new Zl("name","fullPath",!0));const e=new Zl("name");e.xform=function(t,e){return function(t){return!Bl(t)||t.length<2?t:Xl(t)}(e)},t.push(e);const n=new Zl("size");return n.xform=function(t,e){return void 0!==e?Number(e):e},t.push(n),t.push(new Zl("timeCreated")),t.push(new Zl("updated")),t.push(new Zl("md5Hash",null,!0)),t.push(new Zl("cacheControl",null,!0)),t.push(new Zl("contentDisposition",null,!0)),t.push(new Zl("contentEncoding",null,!0)),t.push(new Zl("contentLanguage",null,!0)),t.push(new Zl("contentType",null,!0)),t.push(new Zl("metadata","customMetadata",!0)),td=t,td}function nd(t,e,n){const i={type:"file"},s=n.length;for(let t=0;t<s;t++){const s=n[t];i[s.local]=s.xform(i,e[s.server])}return function(t,e){Object.defineProperty(t,"ref",{get:function(){const n=t.bucket,i=t.fullPath,s=new jl(n,i);return e._makeStorageReference(s)}})}(i,t),i}class id{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function sd(t,e){return function(n,i){const s=function(t,e,n){const i=Yl(e);return null===i?null:nd(t,i,n)}(t,i,e);return function(t){if(!t)throw Fl()}(null!==s),function(t,e,n,i){const s=Yl(e);if(null===s)return null;if(!Bl(s.downloadTokens))return null;const r=s.downloadTokens;if(0===r.length)return null;const o=encodeURIComponent;return r.split(",").map((e=>{const s=t.bucket,r=t.fullPath;return zl("/b/"+o(s)+"/o/"+o(r),n,i)+Kl({alt:"media",token:e})}))[0]}(s,i,t.host,t._protocol)}}function rd(t){return function(e,n){let i;var s,r;return 401===e.getStatus()?i=e.getErrorText().includes("Firebase App Check token is invalid")?new Pl("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new Pl("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(r=t.bucket,i=new Pl("quota-exceeded","Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(s=t.path,i=new Pl("unauthorized","User does not have permission to access '"+s+"'.")):i=n,i.serverResponse=n.serverResponse,i}}function od(t){const e=rd(t);return function(n,i){let s=e(n,i);var r;return 404===n.getStatus()&&(r=t.path,s=new Pl("object-not-found","Object '"+r+"' does not exist.")),s.serverResponse=i.serverResponse,s}}class ad extends class{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Gl.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=Gl.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=Gl.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,i){if(this.sent_)throw $l("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const t in i)i.hasOwnProperty(t)&&this.xhr_.setRequestHeader(t,i[t].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $l("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $l("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw $l("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $l("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}{initXhr(){this.xhr_.responseType="text"}}function cd(){return new ad}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hd{constructor(t,e){this._service=t,this._location=e instanceof jl?e:jl.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new hd(t,e)}get root(){const t=new jl(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Xl(this._location.path)}get storage(){return this._service}get parent(){const t=function(t){if(0===t.length)return null;const e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}(this._location.path);if(null===t)return null;const e=new jl(this._location.bucket,t);return new hd(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw function(t){return new Pl("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)}}function ud(t){t._throwIfRoot("getDownloadURL");const e=function(t,e,n){const i=zl(e.fullServerUrl(),t.host,t._protocol),s=t.maxOperationRetryTime,r=new id(i,"GET",sd(t,n),s);return r.errorHandler=od(e),r}(t.storage,t._location,ed());return t.storage.makeRequestWithTokens(e,cd).then((t=>{if(null===t)throw new Pl("no-download-url","The given file does not have any download URLs.");return t}))}function ld(t,e){if(t instanceof pd){const n=t;if(null==n._bucket)throw new Pl("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const i=new hd(n,n._bucket);return null!=e?ld(i,e):i}return void 0!==e?function(t,e){const n=function(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}(t._location.path,e),i=new jl(t._location.bucket,n);return new hd(t.storage,i)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t,e):t}function dd(t,e){if(e&&/^[A-Za-z]+:\/\//.test(e)){if(t instanceof pd)return new hd(t,e);throw Ul("To use ref(service, url), the first argument must be a Storage instance.")}return ld(t,e)}function fd(t,e){const n=null==e?void 0:e.storageBucket;return null==n?null:jl.makeFromBucketSpec(n,t)}class pd{constructor(t,e,n,i,s){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Ol,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?jl.makeFromBucketSpec(i,this._host):fd(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=jl.makeFromBucketSpec(this._url,t):this._bucket=fd(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Hl("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Hl("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){return(await t.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new hd(this,t)}_makeRequest(t,e,n,i){if(this._deleted)return new ql(Vl());{const s=function(t,e,n,i,s,r){const o=Kl(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return function(t,e){e&&(t["X-Firebase-GMPID"]=e)}(c,e),function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(c,n),function(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!=e?e:"AppManager")}(c,r),function(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}(c,i),new Wl(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}(t,this._appId,n,i,e,this._firebaseVersion);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const gd="@firebase/storage",md="0.9.0",yd="storage";function vd(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new pd(n,i,s,e,$t)}function wd(e){let n,i,s,r,o,a,h,u,l,d=e[0].name+"",f=e[0].description+"";return{c(){n=w("div"),i=w("img"),r=E(),o=w("h2"),a=b(d),h=E(),u=w("p"),l=b(f),c(i.src,s=e[1])||I(i,"src",s),I(i,"alt","Item Listing"),I(i,"class","svelte-1yvyklo"),I(n,"class","listing")},m(t,e){y(t,n,e),p(n,i),p(n,r),p(n,o),p(o,a),p(n,h),p(n,u),p(u,l)},p(t,[e]){2&e&&!c(i.src,s=t[1])&&I(i,"src",s),1&e&&d!==(d=t[0].name+"")&&_(a,d),1&e&&f!==(f=t[0].description+"")&&_(l,f)},i:t,o:t,d(t){t&&v(n)}}}function bd(t,e,n){let i,{listing:s}=e;return D((()=>{const t=function(t=jt(),e){return Ft(t=mt(t),yd).getImmediate({identifier:e})}(Ll);var e,r;(function(t){return ud(t=mt(t))})((e=t,r="listingImages/"+s.id+".jpg",dd(e=mt(e),r))).then((t=>n(1,i=t)))})),t.$$set=t=>{"listing"in t&&n(0,s=t.listing)},[s,i]}Mt(new yt(yd,vd,"PUBLIC").setMultipleInstances(!0)),qt(gd,md,""),qt(gd,md,"esm2017");class Ed extends it{constructor(t){super(),nt(this,t,bd,wd,o,{listing:0})}}function Id(t,e,n){const i=t.slice();return i[1]=e[n],i}function _d(t,e){let n,i,s;return i=new Ed({props:{listing:e[1]}}),{key:t,first:null,c(){n=b(""),J(i.$$.fragment),this.first=n},m(t,e){y(t,n,e),Z(i,t,e),s=!0},p(t,n){e=t;const s={};1&n&&(s.listing=e[1]),i.$set(s)},i(t){s||(G(i.$$.fragment,t),s=!0)},o(t){W(i.$$.fragment,t),s=!1},d(t){t&&v(n),tt(i,t)}}}function Td(t){let e,n,i,s,r,o,a=[],c=new Map,h=t[0];const u=t=>t[1].id;for(let e=0;e<h.length;e+=1){let n=Id(t,h,e),i=u(n);c.set(i,a[e]=_d(i,n))}return{c(){e=E(),n=w("div"),i=w("h1"),i.textContent="Listings",s=E();for(let t=0;t<a.length;t+=1)a[t].c();document.title="Home - Earthify",I(i,"class","display-2")},m(t,r){y(t,e,r),y(t,n,r),p(n,i),p(n,s);for(let t=0;t<a.length;t+=1)a[t].m(n,null);o=!0},p(t,[e]){1&e&&(h=t[0],z(),a=function(t,e,n,i,s,r,o,a,c,h,u,l){let d=t.length,f=r.length,p=d;const g={};for(;p--;)g[t[p].key]=p;const m=[],y=new Map,v=new Map;for(p=f;p--;){const t=l(s,r,p),a=n(t);let c=o.get(a);c?i&&c.p(t,e):(c=h(a,t),c.c()),y.set(a,m[p]=c),a in g&&v.set(a,Math.abs(p-g[a]))}const w=new Set,b=new Set;function E(t){G(t,1),t.m(a,u),o.set(t.key,t),u=t.first,f--}for(;d&&f;){const e=m[f-1],n=t[d-1],i=e.key,s=n.key;e===n?(u=e.first,d--,f--):y.has(s)?!o.has(i)||w.has(i)?E(e):b.has(s)?d--:v.get(i)>v.get(s)?(b.add(i),E(e)):(w.add(s),d--):(c(n,o),d--)}for(;d--;){const e=t[d];y.has(e.key)||c(e,o)}for(;f;)E(m[f-1]);return m}(a,e,u,1,t,h,c,n,X,_d,null,Id),K())},i(t){if(!o){for(let t=0;t<h.length;t+=1)G(a[t]);r||M((()=>{r=Y(n,ot,{}),r.start()})),o=!0}},o(t){for(let t=0;t<a.length;t+=1)W(a[t]);o=!1},d(t){t&&v(e),t&&v(n);for(let t=0;t<a.length;t+=1)a[t].d()}}}function Sd(t,e,n){let i=[];return D((async()=>{const t=function(t,...e){for(const n of e)t=n._apply(t);return t}(Zh(function(t=jt()){return Ft(t,"firestore").getImmediate()}(Ll),"listings"),function(t,e="asc"){const n=e,i=uu("orderBy",t);return new mu(i,n)}("name"));(await vu(t)).forEach((t=>{const e={id:t.id,...t.data()};n(0,i=[...i,e])}))})),[i]}function Ad(e){let n,i,s;return{c(){n=E(),i=w("div"),i.innerHTML='<h1 class="display-2">404 Not Found</h1>',document.title="404 - Earthify"},m(t,e){y(t,n,e),y(t,i,e)},p:t,i(t){s||M((()=>{s=Y(i,ot,{}),s.start()}))},o:t,d(t){t&&v(n),t&&v(i)}}}var Cd=[{path:"/",component:class extends it{constructor(t){super(),nt(this,t,Sd,Td,o,{})}}},{path:"*",component:class extends it{constructor(t){super(),nt(this,t,null,Ad,o,{})}}}];function kd(e){let n,i,s,r,o;return{c(){n=w("nav"),n.innerHTML='<span class="svelte-z4v5ll">Earthify</span> \n\n    <a href="/" class="svelte-z4v5ll">Home</a> \n    <a href="/starred" class="svelte-z4v5ll">Starred Listings</a> \n    <a href="/chats" class="svelte-z4v5ll">Chats</a> \n    <a href="/manage" class="svelte-z4v5ll">Manage Listings</a>',i=E(),s=w("br"),r=E(),o=w("br"),I(n,"class","p-2 svelte-z4v5ll")},m(t,e){y(t,n,e),y(t,i,e),y(t,s,e),y(t,r,e),y(t,o,e)},p:t,i:t,o:t,d(t){t&&v(n),t&&v(i),t&&v(s),t&&v(r),t&&v(o)}}}class Dd extends it{constructor(t){super(),nt(this,t,null,kd,o,{})}}function Rd(t){let e,n,i,s,r;e=new Dd({});var o=t[0];function a(t){return{props:{params:t[1]}}}return o&&(s=new o(a(t))),{c(){J(e.$$.fragment),n=E(),i=w("main"),s&&J(s.$$.fragment)},m(t,o){Z(e,t,o),y(t,n,o),y(t,i,o),s&&Z(s,i,null),r=!0},p(t,[e]){const n={};if(2&e&&(n.params=t[1]),o!==(o=t[0])){if(s){z();const t=s;W(t.$$.fragment,1,0,(()=>{tt(t,1)})),K()}o?(s=new o(a(t)),J(s.$$.fragment),G(s.$$.fragment,1),Z(s,i,null)):s=null}else o&&s.$set(n)},i(t){r||(G(e.$$.fragment,t),s&&G(s.$$.fragment,t),r=!0)},o(t){W(e.$$.fragment,t),s&&W(s.$$.fragment,t),r=!1},d(t){tt(e,t),t&&v(n),t&&v(i),s&&tt(s)}}}function Nd(t,e,n){let i=null,s={};return Cd.forEach((t=>{rt(t.path,((t,e)=>{n(1,s={...t.params}),e()}),(()=>{n(0,i=t.component)}))})),rt.start(),[i,s]}return new class extends it{constructor(t){super(),nt(this,t,Nd,Rd,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
