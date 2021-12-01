var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function i(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const a="undefined"!=typeof window;let c=a?()=>window.performance.now():()=>Date.now(),h=a?t=>requestAnimationFrame(t):t;const u=new Set;function l(t){u.forEach((e=>{e.c(t)||(u.delete(e),e.f())})),0!==u.size&&h(l)}function d(t,e){t.appendChild(e)}function f(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function p(t){const e=y("style");return function(t,e){d(t.head||t,e)}(f(t),e),e}function g(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function w(){return v(" ")}const b=new Set;let E,I=0;function T(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-i.length;r&&(t.style.animation=i.join(", "),I-=r,I||h((()=>{I||(b.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),b.clear())})))}function S(t){E=t}function _(t){(function(){if(!E)throw new Error("Function called outside component initialization");return E})().$$.on_mount.push(t)}const A=[],C=[],D=[],N=[],k=Promise.resolve();let R=!1;function x(t){D.push(t)}let L=!1;const O=new Set;function P(){if(!L){L=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];S(e),M(e.$$)}for(S(null),A.length=0;C.length;)C.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];O.has(e)||(O.add(e),e())}D.length=0}while(A.length);for(;N.length;)N.pop()();R=!1,L=!1,O.clear()}}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}let F;function V(t,e,n){t.dispatchEvent(function(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}(`${e?"intro":"outro"}${n}`))}const U=new Set;let $;function j(t,e){t&&t.i&&(U.delete(t),t.i(e))}function B(t,e,n,i){if(t&&t.o){if(U.has(t))return;U.add(t),$.c.push((()=>{U.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}const q={duration:0};function H(n,i,r){let o,a,d=i(n,r),g=!1,m=0;function y(){o&&T(n,o)}function v(){const{delay:i=0,duration:r=300,easing:s=e,tick:v=t,css:w}=d||q;w&&(o=function(t,e,n,i,r,s,o,a=0){const c=16.666/i;let h="{\n";for(let t=0;t<=1;t+=c){const i=e+(n-e)*s(t);h+=100*t+`%{${o(i,1-i)}}\n`}const u=h+`100% {${o(n,1-n)}}\n}`,l=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,d=f(t);b.add(d);const g=d.__svelte_stylesheet||(d.__svelte_stylesheet=p(t).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[l]||(m[l]=!0,g.insertRule(`@keyframes ${l} ${u}`,g.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${l} ${i}ms linear ${r}ms 1 both`,I+=1,l}(n,0,1,r,i,s,w,m++)),v(0,1);const E=c()+i,T=E+r;a&&a.abort(),g=!0,x((()=>V(n,!0,"start"))),a=function(t){let e;return 0===u.size&&h(l),{promise:new Promise((n=>{u.add(e={c:t,f:n})})),abort(){u.delete(e)}}}((t=>{if(g){if(t>=T)return v(1,0),V(n,!0,"end"),y(),g=!1;if(t>=E){const e=s((t-E)/r);v(e,1-e)}}return g}))}let w=!1;return{start(){w||(w=!0,T(n),s(d)?(d=d(),(F||(F=Promise.resolve(),F.then((()=>{F=null}))),F).then(v)):v())},invalidate(){w=!1},end(){g&&(y(),g=!1)}}}function z(t,e){t.d(1),e.delete(t.key)}function K(t){t&&t.c()}function G(t,e,i,o){const{fragment:a,on_mount:c,on_destroy:h,after_update:u}=t.$$;a&&a.m(e,i),o||x((()=>{const e=c.map(n).filter(s);h?h.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(x)}function W(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(A.push(t),R||(R=!0,k.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(e,n,s,o,a,c,h,u=[-1]){const l=E;S(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:i(),dirty:u,skip_bound:!1,root:n.target||l.$$.root};h&&h(d.root);let f=!1;if(d.ctx=s?s(e,n.props||{},((t,n,...i)=>{const r=i.length?i[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),f&&Q(e,t)),n})):[],d.update(),f=!0,r(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(m)}else d.fragment&&d.fragment.c();n.intro&&j(e.$$.fragment),G(e,n.target,n.anchor,n.customElement),P()}S(l)}class X{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function J(t){var e={exports:{}};return t(e,e.exports),e.exports}var Z=J((function(t,e){t.exports=function(){var t=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},e=v,n=a,i=c,r=h,s=y,o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(t){for(var e,n=[],i=0,r=0,s="";null!=(e=o.exec(t));){var a=e[0],c=e[1],h=e.index;if(s+=t.slice(r,h),r=h+a.length,c)s+=c[1];else{s&&(n.push(s),s="");var u=e[2],d=e[3],f=e[4],p=e[5],g=e[6],m=e[7],y="+"===g||"*"===g,v="?"===g||"*"===g,w=u||"/",b=f||p||(m?".*":"[^"+w+"]+?");n.push({name:d||i++,prefix:u||"",delimiter:w,optional:v,repeat:y,pattern:l(b)})}}return r<t.length&&(s+=t.substr(r)),s&&n.push(s),n}function c(t){return h(a(t))}function h(e){for(var n=new Array(e.length),i=0;i<e.length;i++)"object"==typeof e[i]&&(n[i]=new RegExp("^"+e[i].pattern+"$"));return function(i){for(var r="",s=i||{},o=0;o<e.length;o++){var a=e[o];if("string"!=typeof a){var c,h=s[a.name];if(null==h){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(t(h)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+h+'"');if(0===h.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<h.length;u++){if(c=encodeURIComponent(h[u]),!n[o].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');r+=(0===u?a.prefix:a.delimiter)+c}}else{if(c=encodeURIComponent(h),!n[o].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');r+=a.prefix+c}}else r+=a}return r}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function l(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function d(t,e){return t.keys=e,t}function f(t){return t.sensitive?"":"i"}function p(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return d(t,e)}function g(t,e,n){for(var i=[],r=0;r<t.length;r++)i.push(v(t[r],e,n).source);return d(new RegExp("(?:"+i.join("|")+")",f(n)),e)}function m(t,e,n){for(var i=a(t),r=y(i,n),s=0;s<i.length;s++)"string"!=typeof i[s]&&e.push(i[s]);return d(r,e)}function y(t,e){for(var n=(e=e||{}).strict,i=!1!==e.end,r="",s=t[t.length-1],o="string"==typeof s&&/\/$/.test(s),a=0;a<t.length;a++){var c=t[a];if("string"==typeof c)r+=u(c);else{var h=u(c.prefix),l=c.pattern;c.repeat&&(l+="(?:"+h+l+")*"),r+=l=c.optional?h?"(?:"+h+"("+l+"))?":"("+l+")?":h+"("+l+")"}}return n||(r=(o?r.slice(0,-2):r)+"(?:\\/(?=$))?"),r+=i?"$":n&&o?"":"(?=\\/|$)",new RegExp("^"+r,f(e))}function v(e,n,i){return t(n=n||[])?i||(i={}):(i=n,n=[]),e instanceof RegExp?p(e,n):t(e)?g(e,n,i):m(e,n,i)}e.parse=n,e.compile=i,e.tokensToFunction=r,e.tokensToRegExp=s;var w,b="undefined"!=typeof document,E="undefined"!=typeof window,I="undefined"!=typeof history,T="undefined"!=typeof process,S=b&&document.ontouchstart?"touchstart":"click",_=E&&!(!window.history.location&&!window.location);function A(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function C(){var t=new A;function e(){return D.apply(t,arguments)}return e.callbacks=t.callbacks,e.exits=t.exits,e.base=t.base.bind(t),e.strict=t.strict.bind(t),e.start=t.start.bind(t),e.stop=t.stop.bind(t),e.show=t.show.bind(t),e.back=t.back.bind(t),e.redirect=t.redirect.bind(t),e.replace=t.replace.bind(t),e.dispatch=t.dispatch.bind(t),e.exit=t.exit.bind(t),e.configure=t.configure.bind(t),e.sameOrigin=t.sameOrigin.bind(t),e.clickHandler=t.clickHandler.bind(t),e.create=C,Object.defineProperty(e,"len",{get:function(){return t.len},set:function(e){t.len=e}}),Object.defineProperty(e,"current",{get:function(){return t.current},set:function(e){t.current=e}}),e.Context=R,e.Route=x,e}function D(t,e){if("function"==typeof t)return D.call(this,"*",t);if("function"==typeof e)for(var n=new x(t,null,this),i=1;i<arguments.length;++i)this.callbacks.push(n.middleware(arguments[i]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function N(t){if(!t.handled){var e=this,n=e._window;(e._hashbang?_&&this._getBase()+n.location.hash.replace("#!",""):_&&n.location.pathname+n.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,_&&(n.location.href=t.canonicalPath))}}function k(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function R(t,e,n){var i=this.page=n||D,r=i._window,s=i._hashbang,o=i._getBase();"/"===t[0]&&0!==t.indexOf(o)&&(t=o+(s?"#!":"")+t);var a=t.indexOf("?");this.canonicalPath=t;var c=new RegExp("^"+k(o));if(this.path=t.replace(c,"")||"/",s&&(this.path=this.path.replace("#!","")||"/"),this.title=b&&r.document.title,this.state=e||{},this.state.path=t,this.querystring=~a?i._decodeURLEncodedURIComponent(t.slice(a+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~a?t.slice(0,a):t),this.params={},this.hash="",!s){if(!~this.path.indexOf("#"))return;var h=this.path.split("#");this.path=this.pathname=h[0],this.hash=i._decodeURLEncodedURIComponent(h[1])||"",this.querystring=this.querystring.split("#")[0]}}function x(t,n,i){var r=this.page=i||L,s=n||{};s.strict=s.strict||r._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=e(this.path,this.keys=[],s)}A.prototype.configure=function(t){var e=t||{};this._window=e.window||E&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&E,this._click=!1!==e.click&&b,this._hashbang=!!e.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):E&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(S,this.clickHandler,!1):b&&n.document.removeEventListener(S,this.clickHandler,!1),this._hashbang&&E&&!I?n.addEventListener("hashchange",this._onpopstate,!1):E&&n.removeEventListener("hashchange",this._onpopstate,!1)},A.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},A.prototype._getBase=function(){var t=this._base;if(t)return t;var e=E&&this._window&&this._window.location;return E&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},A.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},A.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var n;if(this._running=!0,_){var i=this._window.location;n=this._hashbang&&~i.hash.indexOf("#!")?i.hash.substr(2)+i.search:this._hashbang?i.search+i.hash:i.pathname+i.search+i.hash}this.replace(n,null,!0,e.dispatch)}},A.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(S,this.clickHandler,!1),E&&t.removeEventListener("popstate",this._onpopstate,!1),E&&t.removeEventListener("hashchange",this._onpopstate,!1)}},A.prototype.show=function(t,e,n,i){var r=new R(t,e,this),s=this.prevContext;return this.prevContext=r,this.current=r.path,!1!==n&&this.dispatch(r,s),!1!==r.handled&&!1!==i&&r.pushState(),r},A.prototype.back=function(t,e){var n=this;if(this.len>0){var i=this._window;I&&i.history.back(),this.len--}else t?setTimeout((function(){n.show(t,e)})):setTimeout((function(){n.show(n._getBase(),e)}))},A.prototype.redirect=function(t,e){var n=this;"string"==typeof t&&"string"==typeof e&&D.call(this,t,(function(t){setTimeout((function(){n.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){n.replace(t)}),0)},A.prototype.replace=function(t,e,n,i){var r=new R(t,e,this),s=this.prevContext;return this.prevContext=r,this.current=r.path,r.init=n,r.save(),!1!==i&&this.dispatch(r,s),r},A.prototype.dispatch=function(t,e){var n=0,i=0,r=this;function s(){var t=r.exits[i++];if(!t)return o();t(e,s)}function o(){var e=r.callbacks[n++];if(t.path===r.current)return e?void e(t,o):N.call(r,t);t.handled=!1}e?s():o()},A.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var n=new x(t,null,this),i=1;i<arguments.length;++i)this.exits.push(n.middleware(arguments[i]))},A.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,n=t.path||(t.composedPath?t.composedPath():null);if(n)for(var i=0;i<n.length;i++)if(n[i].nodeName&&"A"===n[i].nodeName.toUpperCase()&&n[i].href){e=n[i];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var r="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var s=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==s)&&!(s&&s.indexOf("mailto:")>-1)&&!(r?e.target.baseVal:e.target)&&(r||this.sameOrigin(e.href))){var o=r?e.href.baseVal:e.pathname+e.search+(e.hash||"");o="/"!==o[0]?"/"+o:o,T&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var a=o,c=this._getBase();0===o.indexOf(c)&&(o=o.substr(c.length)),this._hashbang&&(o=o.replace("#!","")),(!c||a!==o||_&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(a))}}}}},A.prototype._onpopstate=(w=!1,E?(b&&"complete"===document.readyState?w=!0:window.addEventListener("load",(function(){setTimeout((function(){w=!0}),0)})),function(t){if(w){var e=this;if(t.state){var n=t.state.path;e.replace(n,t.state)}else if(_){var i=e._window.location;e.show(i.pathname+i.search+i.hash,void 0,void 0,!1)}}}):function(){}),A.prototype._which=function(t){return null==(t=t||E&&this._window.event).which?t.button:t.which},A.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&_)return new URL(t,e.location.toString());if(b){var n=e.document.createElement("a");return n.href=t,n}},A.prototype.sameOrigin=function(t){if(!t||!_)return!1;var e=this._toURL(t),n=this._window.location;return n.protocol===e.protocol&&n.hostname===e.hostname&&(n.port===e.port||""===n.port&&(80==e.port||443==e.port))},A.prototype._samePath=function(t){if(!_)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},A.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},R.prototype.pushState=function(){var t=this.page,e=t._window,n=t._hashbang;t.len++,I&&e.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},R.prototype.save=function(){var t=this.page;I&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},x.prototype.middleware=function(t){var e=this;return function(n,i){if(e.match(n.path,n.params))return n.routePath=e.path,t(n,i);i()}},x.prototype.match=function(t,e){var n=this.keys,i=t.indexOf("?"),r=~i?t.slice(0,i):t,s=this.regexp.exec(decodeURIComponent(r));if(!s)return!1;delete e[0];for(var o=1,a=s.length;o<a;++o){var c=n[o-1],h=this.page._decodeURLEncodedURIComponent(s[o]);void 0===h&&hasOwnProperty.call(e,c.name)||(e[c.name]=h)}return!0};var L=C(),O=L,P=L;return O.default=P,O}()}));function tt(t,{delay:n=0,duration:i=400,easing:r=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:i,easing:r,css:t=>"opacity: "+t*s}}
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
     */class et{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
     */function nt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function it(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}class rt extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,st.prototype.create)}}class st{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(ot,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new rt(i,o,n)}}const ot=/\{\$([^}]+)}/g;function at(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(ct(n)&&ct(s)){if(!at(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function ct(t){return null!==t&&"object"==typeof t}
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
     */function ht(t,e=1e3,n=2){const i=e*Math.pow(n,t),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
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
     */function ut(t){return t&&t._delegate?t._delegate:t}class lt{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
     */const dt="[DEFAULT]";
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
     */class ft{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new et;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:dt})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===dt?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:dt:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class pt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new ft(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
     */var gt;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(gt||(gt={}));const mt={debug:gt.DEBUG,verbose:gt.VERBOSE,info:gt.INFO,warn:gt.WARN,error:gt.ERROR,silent:gt.SILENT},yt=gt.INFO,vt={[gt.DEBUG]:"log",[gt.VERBOSE]:"log",[gt.INFO]:"info",[gt.WARN]:"warn",[gt.ERROR]:"error"},wt=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=vt[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class bt{constructor(t){this.name=t,this._logLevel=yt,this._logHandler=wt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in gt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?mt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,gt.DEBUG,...t),this._logHandler(this,gt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,gt.VERBOSE,...t),this._logHandler(this,gt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,gt.INFO,...t),this._logHandler(this,gt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,gt.WARN,...t),this._logHandler(this,gt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,gt.ERROR,...t),this._logHandler(this,gt.ERROR,...t)}}
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
     */class Et{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const It="@firebase/app",Tt="0.7.9",St=new bt("@firebase/app"),_t="[DEFAULT]",At={[It]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ct=new Map,Dt=new Map;function Nt(t,e){try{t.container.addComponent(e)}catch(n){St.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kt(t){const e=t.name;if(Dt.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;Dt.set(e,t);for(const e of Ct.values())Nt(e,t);return!0}function Rt(t,e){return t.container.getProvider(e)}
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
     */const xt=new st("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class Lt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new lt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}
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
     */function Ot(t="[DEFAULT]"){const e=Ct.get(t);if(!e)throw xt.create("no-app",{appName:t});return e}function Pt(t,e,n){var i;let r=null!==(i=At[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void St.warn(t.join(" "))}kt(new lt(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
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
     */var Mt;Mt="",kt(new lt("platform-logger",(t=>new Et(t)),"PRIVATE")),Pt(It,Tt,Mt),Pt(It,Tt,"esm2017"),Pt("fire-js","");var Ft,Vt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Ut=Ut||{},$t=Vt||self;function jt(){}function Bt(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function qt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Ht="closure_uid_"+(1e9*Math.random()>>>0),zt=0;function Kt(t,e,n){return t.call.apply(t.bind,arguments)}function Gt(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Wt(t,e,n){return(Wt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Kt:Gt).apply(null,arguments)}function Qt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Yt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function Xt(){this.s=this.s,this.o=this.o}var Jt={};Xt.prototype.s=!1,Xt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,Ht)&&t[Ht]||(t[Ht]=++zt)}(this);delete Jt[t]}},Xt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Zt=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},te=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r="string"==typeof t?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function ee(t){return Array.prototype.concat.apply([],arguments)}function ne(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function ie(t){return/^[\s\xa0]*$/.test(t)}var re,se=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function oe(t,e){return-1!=t.indexOf(e)}function ae(t,e){return t<e?-1:t>e?1:0}t:{var ce=$t.navigator;if(ce){var he=ce.userAgent;if(he){re=he;break t}}re=""}function ue(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function le(t){const e={};for(const n in t)e[n]=t[n];return e}var de="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fe(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<de.length;e++)n=de[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function pe(t){return pe[" "](t),t}pe[" "]=jt;var ge,me,ye=oe(re,"Opera"),ve=oe(re,"Trident")||oe(re,"MSIE"),we=oe(re,"Edge"),be=we||ve,Ee=oe(re,"Gecko")&&!(oe(re.toLowerCase(),"webkit")&&!oe(re,"Edge"))&&!(oe(re,"Trident")||oe(re,"MSIE"))&&!oe(re,"Edge"),Ie=oe(re.toLowerCase(),"webkit")&&!oe(re,"Edge");function Te(){var t=$t.document;return t?t.documentMode:void 0}t:{var Se="",_e=(me=re,Ee?/rv:([^\);]+)(\)|;)/.exec(me):we?/Edge\/([\d\.]+)/.exec(me):ve?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(me):Ie?/WebKit\/(\S+)/.exec(me):ye?/(?:Version)[ \/]?(\S+)/.exec(me):void 0);if(_e&&(Se=_e?_e[1]:""),ve){var Ae=Te();if(null!=Ae&&Ae>parseFloat(Se)){ge=String(Ae);break t}}ge=Se}var Ce,De={};function Ne(){return function(t){var e=De;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=se(String(ge)).split("."),n=se("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=ae(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||ae(0==r[2].length,0==s[2].length)||ae(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if($t.document&&ve){var ke=Te();Ce=ke||(parseInt(ge,10)||void 0)}else Ce=void 0;var Re=Ce,xe=function(){if(!$t.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$t.addEventListener("test",jt,e),$t.removeEventListener("test",jt,e)}catch(t){}return t}();function Le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Oe(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ee){t:{try{pe(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Pe[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Oe.Z.h.call(this)}}Le.prototype.h=function(){this.defaultPrevented=!0},Yt(Oe,Le);var Pe={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function Ve(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++Fe,this.ca=this.fa=!1}function Ue(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function $e(t){this.src=t,this.g={},this.h=0}function je(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=Zt(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ue(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Be(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}$e.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=Be(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Ve(e,this.src,s,!!i,r)).fa=n,t.push(e)),e};var qe="closure_lm_"+(1e6*Math.random()|0),He={};function ze(t,e,n,i,r){if(i&&i.once)return Ge(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ze(t,e[s],n,i,r);return null}return n=tn(n),t&&t[Me]?t.N(e,n,qt(i)?!!i.capture:!!i,r):Ke(t,e,n,!1,i,r)}function Ke(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=qt(r)?!!r.capture:!!r,a=Je(t);if(a||(t[qe]=a=new $e(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}var e=Xe;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)xe||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Ye(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function Ge(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ge(t,e[s],n,i,r);return null}return n=tn(n),t&&t[Me]?t.O(e,n,qt(i)?!!i.capture:!!i,r):Ke(t,e,n,!0,i,r)}function We(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)We(t,e[s],n,i,r);else i=qt(i)?!!i.capture:!!i,n=tn(n),t&&t[Me]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Be(s=t.g[e],n,i,r))&&(Ue(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Je(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Be(e,n,i,r)),(n=-1<t?e[t]:null)&&Qe(n))}function Qe(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Me])je(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Ye(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Je(e))?(je(n,t),0==n.h&&(n.src=null,e[qe]=null)):Ue(t)}}}function Ye(t){return t in He?He[t]:He[t]="on"+t}function Xe(t,e){if(t.ca)t=!0;else{e=new Oe(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Qe(t),t=n.call(i,e)}return t}function Je(t){return(t=t[qe])instanceof $e?t:null}var Ze="__closure_events_fn_"+(1e9*Math.random()>>>0);function tn(t){return"function"==typeof t?t:(t[Ze]||(t[Ze]=function(e){return t.handleEvent(e)}),t[Ze])}function en(){Xt.call(this),this.i=new $e(this),this.P=this,this.I=null}function nn(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new Le(e,t);else if(e instanceof Le)e.target=e.target||t;else{var r=e;fe(e=new Le(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=rn(o,i,!0,e)&&r}if(r=rn(o=e.g=t,i,!0,e)&&r,r=rn(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=rn(o=e.g=n[s],i,!1,e)&&r}function rn(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&je(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}Yt(en,Xt),en.prototype[Me]=!0,en.prototype.removeEventListener=function(t,e,n,i){We(this,t,e,n,i)},en.prototype.M=function(){if(en.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Ue(n[i]);delete e.g[t],e.h--}}this.I=null},en.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},en.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var sn=$t.JSON.stringify;function on(){var t=fn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var an,cn=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new hn),(t=>t.reset()));class hn{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function un(t){$t.setTimeout((()=>{throw t}),0)}function ln(t,e){an||function(){var t=$t.Promise.resolve(void 0);an=function(){t.then(pn)}}(),dn||(an(),dn=!0),fn.add(t,e)}var dn=!1,fn=new class{constructor(){this.h=this.g=null}add(t,e){const n=cn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function pn(){for(var t;t=on();){try{t.h.call(t.g)}catch(t){un(t)}var e=cn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}dn=!1}function gn(t,e){en.call(this),this.h=t||1,this.g=e||$t,this.j=Wt(this.kb,this),this.l=Date.now()}function mn(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function yn(t,e,n){if("function"==typeof t)n&&(t=Wt(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Wt(t.handleEvent,t)}return 2147483647<Number(e)?-1:$t.setTimeout(t,e||0)}function vn(t){t.g=yn((()=>{t.g=null,t.i&&(t.i=!1,vn(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Yt(gn,en),(Ft=gn.prototype).da=!1,Ft.S=null,Ft.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),nn(this,"tick"),this.da&&(mn(this),this.start()))}},Ft.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ft.M=function(){gn.Z.M.call(this),mn(this),delete this.g};class wn extends Xt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:vn(this)}M(){super.M(),this.g&&($t.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bn(t){Xt.call(this),this.h=t,this.g={}}Yt(bn,Xt);var En=[];function In(t,e,n,i){Array.isArray(n)||(n&&(En[0]=n.toString()),n=En);for(var r=0;r<n.length;r++){var s=ze(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Tn(t){ue(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Qe(t)}),t),t.g={}}function Sn(){this.g=!0}function _n(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return sn(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}bn.prototype.M=function(){bn.Z.M.call(this),Tn(this)},bn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Sn.prototype.Aa=function(){this.g=!1},Sn.prototype.info=function(){};var An={},Cn=null;function Dn(){return Cn=Cn||new en}function Nn(t){Le.call(this,An.Ma,t)}function kn(t){const e=Dn();nn(e,new Nn(e,t))}function Rn(t,e){Le.call(this,An.STAT_EVENT,t),this.stat=e}function xn(t){const e=Dn();nn(e,new Rn(e,t))}function Ln(t,e){Le.call(this,An.Na,t),this.size=e}function On(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return $t.setTimeout((function(){t()}),e)}An.Ma="serverreachability",Yt(Nn,Le),An.STAT_EVENT="statevent",Yt(Rn,Le),An.Na="timingevent",Yt(Ln,Le);var Pn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Mn={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Fn(){}function Vn(t){return t.h||(t.h=t.i())}function Un(){}Fn.prototype.h=null;var $n,jn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Bn(){Le.call(this,"d")}function qn(){Le.call(this,"c")}function Hn(){}function zn(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new bn(this),this.P=Gn,t=be?125:void 0,this.W=new gn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Kn}function Kn(){this.i=null,this.g="",this.h=!1}Yt(Bn,Le),Yt(qn,Le),Yt(Hn,Fn),Hn.prototype.g=function(){return new XMLHttpRequest},Hn.prototype.i=function(){return{}},$n=new Hn;var Gn=45e3,Wn={},Qn={};function Yn(t,e,n){t.K=1,t.v=wi(fi(e)),t.s=n,t.U=!0,Xn(t,null)}function Xn(t,e){t.F=Date.now(),ei(t),t.A=fi(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),xi(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Kn,t.g=xr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new wn(Wt(t.Ia,t,t.g),t.O)),In(t.V,t.g,"readystatechange",t.gb),e=t.H?le(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),kn(1),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Jn(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Zn(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=ti(t,n),i==Qn){4==e&&(t.o=4,xn(14),r=!1),_n(t.j,t.m,null,"[Incomplete Response]");break}if(i==Wn){t.o=4,xn(15),_n(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}_n(t.j,t.m,i,null),oi(t,i)}Jn(t)&&i!=Qn&&i!=Wn&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,xn(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Sr(e),e.L=!0,xn(11))):(_n(t.j,t.m,n,"[Invalid Chunked Response]"),si(t),ri(t))}function ti(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Qn:(n=Number(e.substring(n,i)),isNaN(n)?Wn:(i+=1)+n>e.length?Qn:(e=e.substr(i,n),t.C=i+n,e))}function ei(t){t.Y=Date.now()+t.P,ni(t,t.P)}function ni(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=On(Wt(t.eb,t),e)}function ii(t){t.B&&($t.clearTimeout(t.B),t.B=null)}function ri(t){0==t.l.G||t.I||Cr(t.l,t)}function si(t){ii(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,mn(t.W),Tn(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function oi(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Vi(n.i,t)))if(n.I=t.N,!t.J&&Vi(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ar(n),gr(n)}Tr(n),xn(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=On(Wt(n.ab,n),6e3));if(1>=Fi(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Nr(n,11)}else if((t.J||n.g==t)&&Ar(n),!ie(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let h=r[e];if(n.U=h[0],h=h[1],2==n.G)if("c"==h[0]){n.J=h[1],n.la=h[2];const e=h[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=h[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const u=h[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;!s.g&&(oe(t,"spdy")||oe(t,"quic")||oe(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Ui(s,s.h),s.h=null))}if(i.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,vi(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((i=n).oa=Rr(i,i.H?i.la:null,i.W),o.J){$i(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(ii(a),ei(a)),i.g=o}else Ir(i);0<n.l.length&&vr(n)}else"stop"!=h[0]&&"close"!=h[0]||Nr(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?Nr(n,7):pr(n):"noop"!=h[0]&&n.j&&n.j.wa(h),n.A=0)}kn(4)}catch(t){}}function ai(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Bt(t)||"string"==typeof t)te(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Bt(t)||"string"==typeof t){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(Bt(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function ci(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof ci)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function hi(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];ui(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)ui(r,i=t.g[e])||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}function ui(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(Ft=zn.prototype).setTimeout=function(t){this.P=t},Ft.gb=function(t){t=t.target;const e=this.L;e&&3==hr(t)?e.l():this.Ia(t)},Ft.Ia=function(t){try{if(t==this.g)t:{const u=hr(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>u)&&(3!=u||be||this.g&&(this.h.h||this.g.ga()||ur(this.g)))){this.I||4!=u||7==e||kn(8==e||0>=l?3:2),ii(this);var n=this.g.ba();this.N=n;e:if(Jn(this)){var i=ur(this.g);t="";var r=i.length,s=4==hr(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){si(this),ri(this);var o="";break e}this.h.i=new $t.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,xn(12),si(this),ri(this);break t}_n(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,oi(this,n)}this.U?(Zn(this,u,o),be&&this.i&&3==u&&(In(this.V,this.W,"tick",this.fb),this.W.start())):(_n(this.j,this.m,o,null),oi(this,o)),4==u&&si(this),this.i&&!this.I&&(4==u?Cr(this.l,this):(this.i=!1,ei(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,xn(12)):(this.o=0,xn(13)),si(this),ri(this)}}}catch(t){}},Ft.fb=function(){if(this.g){var t=hr(this.g),e=this.g.ga();this.C<e.length&&(ii(this),Zn(this,t,e),this.i&&4!=t&&ei(this))}},Ft.cancel=function(){this.I=!0,si(this)},Ft.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(kn(3),xn(17)),si(this),this.o=2,ri(this)):ni(this,this.Y-t)},(Ft=ci.prototype).R=function(){hi(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},Ft.T=function(){return hi(this),this.g.concat()},Ft.get=function(t,e){return ui(this.h,t)?this.h[t]:e},Ft.set=function(t,e){ui(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},Ft.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};var li=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function di(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof di){this.g=void 0!==e?e:t.g,pi(this,t.j),this.s=t.s,gi(this,t.i),mi(this,t.m),this.l=t.l,e=t.h;var n=new Di;n.i=e.i,e.g&&(n.g=new ci(e.g),n.h=e.h),yi(this,n),this.o=t.o}else t&&(n=String(t).match(li))?(this.g=!!e,pi(this,n[1]||"",!0),this.s=bi(n[2]||""),gi(this,n[3]||"",!0),mi(this,n[4]),this.l=bi(n[5]||"",!0),yi(this,n[6]||"",!0),this.o=bi(n[7]||"")):(this.g=!!e,this.h=new Di(null,this.g))}function fi(t){return new di(t)}function pi(t,e,n){t.j=n?bi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function gi(t,e,n){t.i=n?bi(e,!0):e}function mi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function yi(t,e,n){e instanceof Di?(t.h=e,function(t,e){e&&!t.j&&(Ni(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ki(this,e),xi(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=Ei(e,Ai)),t.h=new Di(e,t.g))}function vi(t,e,n){t.h.set(e,n)}function wi(t){return vi(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ei(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ii),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ii(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}di.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ei(e,Ti,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ei(e,Ti,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ei(n,"/"==n.charAt(0)?_i:Si,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ei(n,Ci)),t.join("")};var Ti=/[#\/\?@]/g,Si=/[#\?:]/g,_i=/[#\?]/g,Ai=/[#\?@]/g,Ci=/#/g;function Di(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ni(t){t.g||(t.g=new ci,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ki(t,e){Ni(t),e=Li(t,e),ui(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,ui((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&hi(t)))}function Ri(t,e){return Ni(t),e=Li(t,e),ui(t.g.h,e)}function xi(t,e,n){ki(t,e),0<n.length&&(t.i=null,t.g.set(Li(t,e),ne(n)),t.h+=n.length)}function Li(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ft=Di.prototype).add=function(t,e){Ni(this),this.i=null,t=Li(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ft.forEach=function(t,e){Ni(this),this.g.forEach((function(n,i){te(n,(function(n){t.call(e,n,i,this)}),this)}),this)},Ft.T=function(){Ni(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n},Ft.R=function(t){Ni(this);var e=[];if("string"==typeof t)Ri(this,t)&&(e=ee(e,this.g.get(Li(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=ee(e,t[n])}return e},Ft.set=function(t,e){return Ni(this),this.i=null,Ri(this,t=Li(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ft.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},Ft.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};function Oi(t){this.l=t||Pi,$t.PerformanceNavigationTiming?t=0<(t=$t.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!($t.g&&$t.g.Ea&&$t.g.Ea()&&$t.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Pi=10;function Mi(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Fi(t){return t.h?1:t.g?t.g.size:0}function Vi(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ui(t,e){t.g?t.g.add(e):t.h=e}function $i(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ji(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ne(t.i)}function Bi(){}function qi(){this.g=new Bi}function Hi(t,e,n){const i=n||"";try{ai(t,(function(t,n){let r=t;qt(t)&&(r=sn(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function zi(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function Ki(t){this.l=t.$b||null,this.j=t.ib||!1}function Gi(t,e){en.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Wi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Oi.prototype.cancel=function(){if(this.i=ji(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Bi.prototype.stringify=function(t){return $t.JSON.stringify(t,void 0)},Bi.prototype.parse=function(t){return $t.JSON.parse(t,void 0)},Yt(Ki,Fn),Ki.prototype.g=function(){return new Gi(this.l,this.j)},Ki.prototype.i=function(t){return function(){return t}}({}),Yt(Gi,en);var Wi=0;function Qi(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Yi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Xi(t)}function Xi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ft=Gi.prototype).open=function(t,e){if(this.readyState!=Wi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Xi(this)},Ft.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$t).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},Ft.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Yi(this)),this.readyState=Wi},Ft.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xi(this)),this.g&&(this.readyState=3,Xi(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==$t.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Qi(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},Ft.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Yi(this):Xi(this),3==this.readyState&&Qi(this)}},Ft.Ua=function(t){this.g&&(this.response=this.responseText=t,Yi(this))},Ft.Ta=function(t){this.g&&(this.response=t,Yi(this))},Ft.ha=function(){this.g&&Yi(this)},Ft.setRequestHeader=function(t,e){this.v.append(t,e)},Ft.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ft.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ji=$t.JSON.parse;function Zi(t){en.call(this),this.headers=new ci,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=tr,this.K=this.L=!1}Yt(Zi,en);var tr="",er=/^https?$/i,nr=["POST","PUT"];function ir(t){return"content-type"==t.toLowerCase()}function rr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,sr(t),ar(t)}function sr(t){t.D||(t.D=!0,nn(t,"complete"),nn(t,"error"))}function or(t){if(t.h&&void 0!==Ut&&(!t.C[1]||4!=hr(t)||2!=t.ba()))if(t.v&&4==hr(t))yn(t.Fa,0,t);else if(nn(t,"readystatechange"),4==hr(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var r=String(t.H).match(li)[1]||null;if(!r&&$t.self&&$t.self.location){var s=$t.self.location.protocol;r=s.substr(0,s.length-1)}i=!er.test(r?r.toLowerCase():"")}n=i}if(n)nn(t,"complete"),nn(t,"success");else{t.m=6;try{var o=2<hr(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",sr(t)}}finally{ar(t)}}}function ar(t,e){if(t.g){cr(t);const n=t.g,i=t.C[0]?jt:null;t.g=null,t.C=null,e||nn(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function cr(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($t.clearTimeout(t.A),t.A=null)}function hr(t){return t.g?t.g.readyState:0}function ur(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case tr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function lr(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=function(t){let e="";return ue(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):vi(t,e,n))}function dr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fr(t){this.za=0,this.l=[],this.h=new Sn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=dr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=dr("baseRetryDelayMs",5e3,t),this.$a=dr("retryDelaySeedMs",1e4,t),this.Ya=dr("forwardChannelMaxRetries",2,t),this.ra=dr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Oi(t&&t.concurrentRequestLimit),this.Ca=new qi,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function pr(t){if(mr(t),3==t.G){var e=t.V++,n=fi(t.F);vi(n,"SID",t.J),vi(n,"RID",e),vi(n,"TYPE","terminate"),br(t,n),(e=new zn(t,t.h,e,void 0)).K=2,e.v=wi(fi(n)),n=!1,$t.navigator&&$t.navigator.sendBeacon&&(n=$t.navigator.sendBeacon(e.v.toString(),"")),!n&&$t.Image&&((new Image).src=e.v,n=!0),n||(e.g=xr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ei(e)}kr(t)}function gr(t){t.g&&(Sr(t),t.g.cancel(),t.g=null)}function mr(t){gr(t),t.u&&($t.clearTimeout(t.u),t.u=null),Ar(t),t.i.cancel(),t.m&&("number"==typeof t.m&&$t.clearTimeout(t.m),t.m=null)}function yr(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&vr(t)}function vr(t){Mi(t.i)||t.m||(t.m=!0,ln(t.Ha,t),t.C=0)}function wr(t,e){var n;n=e?e.m:t.V++;const i=fi(t.F);vi(i,"SID",t.J),vi(i,"RID",n),vi(i,"AID",t.U),br(t,i),t.o&&t.s&&lr(i,t.o,t.s),n=new zn(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Er(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ui(t.i,n),Yn(n,i,e)}function br(t,e){t.j&&ai({},(function(t,n){vi(e,n,t)}))}function Er(t,e,n){n=Math.min(t.l.length,n);var i=t.j?Wt(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),s=!1;else try{Hi(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function Ir(t){t.g||t.u||(t.Y=1,ln(t.Ga,t),t.A=0)}function Tr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=On(Wt(t.Ga,t),Dr(t,t.A)),t.A++,!0)}function Sr(t){null!=t.B&&($t.clearTimeout(t.B),t.B=null)}function _r(t){t.g=new zn(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=fi(t.oa);vi(e,"RID","rpc"),vi(e,"SID",t.J),vi(e,"CI",t.N?"0":"1"),vi(e,"AID",t.U),br(t,e),vi(e,"TYPE","xmlhttp"),t.o&&t.s&&lr(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=wi(fi(e)),n.s=null,n.U=!0,Xn(n,t)}function Ar(t){null!=t.v&&($t.clearTimeout(t.v),t.v=null)}function Cr(t,e){var n=null;if(t.g==e){Ar(t),Sr(t),t.g=null;var i=2}else{if(!Vi(t.i,e))return;n=e.D,$i(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;nn(i=Dn(),new Ln(i,n,e,r)),vr(t)}else Ir(t);else if(3==(r=e.o)||0==r&&0<t.I||!(1==i&&function(t,e){return!(Fi(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=On(Wt(t.Ha,t,e),Dr(t,t.C)),t.C++,0)))}(t,e)||2==i&&Tr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Nr(t,5);break;case 4:Nr(t,10);break;case 3:Nr(t,6);break;default:Nr(t,2)}}function Dr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Nr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=Wt(t.jb,t);n||(n=new di("//www.google.com/images/cleardot.gif"),$t.location&&"http"==$t.location.protocol||pi(n,"https"),wi(n)),function(t,e){const n=new Sn;if($t.Image){const i=new Image;i.onload=Qt(zi,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Qt(zi,n,i,"TestLoadImage: error",!1,e),i.onabort=Qt(zi,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Qt(zi,n,i,"TestLoadImage: timeout",!1,e),$t.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else xn(2);t.G=0,t.j&&t.j.va(e),kr(t),mr(t)}function kr(t){t.G=0,t.I=-1,t.j&&(0==ji(t.i).length&&0==t.l.length||(t.i.i.length=0,ne(t.l),t.l.length=0),t.j.ua())}function Rr(t,e,n){let i=function(t){return t instanceof di?fi(t):new di(t,void 0)}(n);if(""!=i.i)e&&gi(i,e+"."+i.i),mi(i,i.m);else{const t=$t.location;i=function(t,e,n,i){var r=new di(null,void 0);return t&&pi(r,t),e&&gi(r,e),n&&mi(r,n),i&&(r.l=i),r}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&ue(t.aa,(function(t,e){vi(i,e,t)})),e=t.D,n=t.sa,e&&n&&vi(i,e,n),vi(i,"VER",t.ma),br(t,i),i}function xr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Zi(new Ki({ib:!0})):new Zi(t.qa)).L=t.H,e}function Lr(){}function Or(){if(ve&&!(10<=Number(Re)))throw Error("Environmental error: no available transport.")}function Pr(t,e){en.call(this),this.g=new fr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ie(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ie(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Vr(this)}function Mr(t){Bn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Fr(){qn.call(this),this.status=1}function Vr(t){this.g=t}(Ft=Zi.prototype).ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():$n.g(),this.C=this.u?Vn(this.u):Vn($n),this.g.onreadystatechange=Wt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void rr(this,t)}t=n||"";const r=new ci(this.headers);i&&ai(i,(function(t,e){r.set(e,t)})),i=function(t){t:{var e=ir;const n=t.length,i="string"==typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(r.T()),n=$t.FormData&&t instanceof $t.FormData,!(0<=Zt(nr,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{cr(this),0<this.B&&((this.K=function(t){return ve&&Ne()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Wt(this.pa,this)):this.A=yn(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){rr(this,t)}},Ft.pa=function(){void 0!==Ut&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nn(this,"timeout"),this.abort(8))},Ft.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nn(this,"complete"),nn(this,"abort"),ar(this))},Ft.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ar(this,!0)),Zi.Z.M.call(this)},Ft.Fa=function(){this.s||(this.F||this.v||this.l?or(this):this.cb())},Ft.cb=function(){or(this)},Ft.ba=function(){try{return 2<hr(this)?this.g.status:-1}catch(t){return-1}},Ft.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Ft.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ji(e)}},Ft.Da=function(){return this.m},Ft.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ft=fr.prototype).ma=8,Ft.G=1,Ft.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},Ft.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new zn(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=le(s),fe(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Er(this,r,e),vi(n=fi(this.F),"RID",t),vi(n,"CVER",22),this.D&&vi(n,"X-HTTP-Session-Id",this.D),br(this,n),this.o&&s&&lr(n,this.o,s),Ui(this.i,r),this.Ra&&vi(n,"TYPE","init"),this.ja?(vi(n,"$req",e),vi(n,"SID","null"),r.$=!0,Yn(r,n,null)):Yn(r,n,e),this.G=2}}else 3==this.G&&(t?wr(this,t):0==this.l.length||Mi(this.i)||wr(this))},Ft.Ga=function(){if(this.u=null,_r(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=On(Wt(this.bb,this),t)}},Ft.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,xn(10),gr(this),_r(this))},Ft.ab=function(){null!=this.v&&(this.v=null,gr(this),Tr(this),xn(19))},Ft.jb=function(t){t?(this.h.info("Successfully pinged google.com"),xn(2)):(this.h.info("Failed to ping google.com"),xn(1))},(Ft=Lr.prototype).xa=function(){},Ft.wa=function(){},Ft.va=function(){},Ft.ua=function(){},Ft.Oa=function(){},Or.prototype.g=function(t,e){return new Pr(t,e)},Yt(Pr,en),Pr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ln(Wt(t.hb,t,e))),xn(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Rr(t,null,t.W),vr(t)},Pr.prototype.close=function(){pr(this.g)},Pr.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,yr(this.g,e)}else this.v?((e={}).__data__=sn(t),yr(this.g,e)):yr(this.g,t)},Pr.prototype.M=function(){this.g.j=null,delete this.j,pr(this.g),delete this.g,Pr.Z.M.call(this)},Yt(Mr,Bn),Yt(Fr,qn),Yt(Vr,Lr),Vr.prototype.xa=function(){nn(this.g,"a")},Vr.prototype.wa=function(t){nn(this.g,new Mr(t))},Vr.prototype.va=function(t){nn(this.g,new Fr(t))},Vr.prototype.ua=function(){nn(this.g,"b")},Or.prototype.createWebChannel=Or.prototype.g,Pr.prototype.send=Pr.prototype.u,Pr.prototype.open=Pr.prototype.m,Pr.prototype.close=Pr.prototype.close,Pn.NO_ERROR=0,Pn.TIMEOUT=8,Pn.HTTP_ERROR=6,Mn.COMPLETE="complete",Un.EventType=jn,jn.OPEN="a",jn.CLOSE="b",jn.ERROR="c",jn.MESSAGE="d",en.prototype.listen=en.prototype.N,Zi.prototype.listenOnce=Zi.prototype.O,Zi.prototype.getLastError=Zi.prototype.La,Zi.prototype.getLastErrorCode=Zi.prototype.Da,Zi.prototype.getStatus=Zi.prototype.ba,Zi.prototype.getResponseJson=Zi.prototype.Qa,Zi.prototype.getResponseText=Zi.prototype.ga,Zi.prototype.send=Zi.prototype.ea;var Ur=Pn,$r=Mn,jr=An,Br=10,qr=11,Hr=Ki,zr=Un,Kr=Zi;const Gr="@firebase/firestore";
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
     */class Wr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Wr.UNAUTHENTICATED=new Wr(null),Wr.GOOGLE_CREDENTIALS=new Wr("google-credentials-uid"),Wr.FIRST_PARTY=new Wr("first-party-uid"),Wr.MOCK_USER=new Wr("mock-user");
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
let Qr="9.5.0";
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
     */const Yr=new bt("@firebase/firestore");function Xr(){return Yr.logLevel}function Jr(t,...e){if(Yr.logLevel<=gt.DEBUG){const n=e.map(es);Yr.debug(`Firestore (${Qr}): ${t}`,...n)}}function Zr(t,...e){if(Yr.logLevel<=gt.ERROR){const n=e.map(es);Yr.error(`Firestore (${Qr}): ${t}`,...n)}}function ts(t,...e){if(Yr.logLevel<=gt.WARN){const n=e.map(es);Yr.warn(`Firestore (${Qr}): ${t}`,...n)}}function es(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
     */function ns(t="Unexpected state"){const e=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: `+t;throw Zr(e),new Error(e)}function is(t,e){t||ns()}function rs(t,e){return t}
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
     */const ss={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class os extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class as{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
     */class cs{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class hs{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Wr.UNAUTHENTICATED)))}shutdown(){}}class us{constructor(t){this.t=t,this.currentUser=Wr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new as;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new as,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Jr("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Jr("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new as)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Jr("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(is("string"==typeof e.accessToken),new cs(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return is(null===t||"string"==typeof t),new Wr(t)}}class ls{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Wr.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class ds{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ls(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Wr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
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
     */class fs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
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
     */function ps(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */fs.T=-1;function gs(t,e){return t<e?-1:t>e?1:0}function ms(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
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
     */class ys{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new os(ss.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new os(ss.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new os(ss.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new os(ss.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ys.fromMillis(Date.now())}static fromDate(t){return ys.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ys(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?gs(this.nanoseconds,t.nanoseconds):gs(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class vs{constructor(t){this.timestamp=t}static fromTimestamp(t){return new vs(t)}static min(){return new vs(new ys(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */function ws(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
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
class Es{constructor(t,e,n){void 0===e?e=0:e>t.length&&ns(),void 0===n?n=t.length-e:n>t.length-e&&ns(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Es.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Es?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Is extends Es{construct(t,e,n){return new Is(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new os(ss.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Is(e)}static emptyPath(){return new Is([])}}const Ts=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ss extends Es{construct(t,e,n){return new Ss(t,e,n)}static isValidIdentifier(t){return Ts.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ss.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ss(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new os(ss.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new os(ss.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new os(ss.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new os(ss.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ss(e)}static emptyPath(){return new Ss([])}}
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
     */class _s{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new _s(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new _s(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return gs(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_s.EMPTY_BYTE_STRING=new _s("");const As=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cs(t){if(is(!!t),"string"==typeof t){let e=0;const n=As.exec(t);if(is(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ds(t.seconds),nanos:Ds(t.nanos)}}function Ds(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ns(t){return"string"==typeof t?_s.fromBase64String(t):_s.fromUint8Array(t)}
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
     */function ks(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Rs(t){const e=t.mapValue.fields.__previous_value__;return ks(e)?Rs(e):e}function xs(t){const e=Cs(t.mapValue.fields.__local_write_time__.timestampValue);return new ys(e.seconds,e.nanos)}
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
     */function Ls(t){return null==t}function Os(t){return 0===t&&1/t==-1/0}
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
     */class Ps{constructor(t){this.path=t}static fromPath(t){return new Ps(Is.fromString(t))}static fromName(t){return new Ps(Is.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Is.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Is.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ps(new Is(t.slice()))}}
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
     */function Ms(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ks(t)?4:10:ns()}function Fs(t,e){const n=Ms(t);if(n!==Ms(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xs(t).isEqual(xs(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Cs(t.timestampValue),i=Cs(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ns(t.bytesValue).isEqual(Ns(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ds(t.geoPointValue.latitude)===Ds(e.geoPointValue.latitude)&&Ds(t.geoPointValue.longitude)===Ds(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ds(t.integerValue)===Ds(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ds(t.doubleValue),i=Ds(e.doubleValue);return n===i?Os(n)===Os(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],Fs);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(ws(n)!==ws(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Fs(n[t],i[t])))return!1;return!0}(t,e);default:return ns()}}function Vs(t,e){return void 0!==(t.values||[]).find((t=>Fs(t,e)))}function Us(t,e){const n=Ms(t),i=Ms(e);if(n!==i)return gs(n,i);switch(n){case 0:return 0;case 1:return gs(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ds(t.integerValue||t.doubleValue),i=Ds(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return $s(t.timestampValue,e.timestampValue);case 4:return $s(xs(t),xs(e));case 5:return gs(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ns(t),i=Ns(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=gs(n[t],i[t]);if(0!==e)return e}return gs(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=gs(Ds(t.latitude),Ds(e.latitude));return 0!==n?n:gs(Ds(t.longitude),Ds(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Us(n[t],i[t]);if(e)return e}return gs(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){const e=gs(i[t],s[t]);if(0!==e)return e;const o=Us(n[i[t]],r[s[t]]);if(0!==o)return o}return gs(i.length,s.length)}(t.mapValue,e.mapValue);default:throw ns()}}function $s(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return gs(t,e);const n=Cs(t),i=Cs(e),r=gs(n.seconds,i.seconds);return 0!==r?r:gs(n.nanos,i.nanos)}function js(t){return Bs(t)}function Bs(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Cs(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ns(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Ps.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Bs(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Bs(t.fields[r])}`;return n+"}"}(t.mapValue):ns();var e,n}function qs(t){return!!t&&"integerValue"in t}function Hs(t){return!!t&&"arrayValue"in t}function zs(t){return!!t&&"nullValue"in t}function Ks(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Gs(t){return!!t&&"mapValue"in t}function Ws(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bs(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ws(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ws(t.arrayValue.values[n]);return e}return Object.assign({},t)}
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
     */class Qs{constructor(t){this.value=t}static empty(){return new Qs({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Gs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ws(e)}setAll(t){let e=Ss.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=Ws(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());Gs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Fs(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Gs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){bs(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Qs(Ws(this.value))}}
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
     */class Ys{constructor(t,e,n,i,r){this.key=t,this.documentType=e,this.version=n,this.data=i,this.documentState=r}static newInvalidDocument(t){return new Ys(t,0,vs.min(),Qs.empty(),0)}static newFoundDocument(t,e,n){return new Ys(t,1,e,n,0)}static newNoDocument(t,e){return new Ys(t,2,e,Qs.empty(),0)}static newUnknownDocument(t,e){return new Ys(t,3,e,Qs.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Qs.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Qs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ys&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new Ys(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class Xs{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.A=null}}function Js(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Xs(t,e,n,i,r,s,o)}function Zs(t){const e=rs(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+js(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ls(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=fo(e.startAt)),e.endAt&&(t+="|ub:",t+=fo(e.endAt)),e.A=t}return e.A}function to(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!go(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!Fs(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yo(t.startAt,e.startAt)&&yo(t.endAt,e.endAt)}function eo(t){return Ps.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class no extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new io(t,e,n):"array-contains"===e?new ao(t,n):"in"===e?new co(t,n):"not-in"===e?new ho(t,n):"array-contains-any"===e?new uo(t,n):new no(t,e,n)}static R(t,e,n){return"in"===e?new ro(t,n):new so(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(Us(e,this.value)):null!==e&&Ms(this.value)===Ms(e)&&this.P(Us(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ns()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class io extends no{constructor(t,e,n){super(t,e,n),this.key=Ps.fromName(n.referenceValue)}matches(t){const e=Ps.comparator(t.key,this.key);return this.P(e)}}class ro extends no{constructor(t,e){super(t,"in",e),this.keys=oo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class so extends no{constructor(t,e){super(t,"not-in",e),this.keys=oo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function oo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Ps.fromName(t.referenceValue)))}class ao extends no{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Hs(e)&&Vs(e.arrayValue,this.value)}}class co extends no{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Vs(this.value.arrayValue,e)}}class ho extends no{constructor(t,e){super(t,"not-in",e)}matches(t){if(Vs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Vs(this.value.arrayValue,e)}}class uo extends no{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Hs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Vs(this.value.arrayValue,t)))}}class lo{constructor(t,e){this.position=t,this.before=e}}function fo(t){return`${t.before?"b":"a"}:${t.position.map((t=>js(t))).join(",")}`}class po{constructor(t,e="asc"){this.field=t,this.dir=e}}function go(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function mo(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?Ps.comparator(Ps.fromName(o.referenceValue),n.key):Us(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return t.before?i<=0:i<0}function yo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fs(t.position[n],e.position[n]))return!1;return!0}
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
     */class vo{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function wo(t){return new vo(t)}function bo(t){return!Ls(t.limit)&&"F"===t.limitType}function Eo(t){return!Ls(t.limit)&&"L"===t.limitType}function Io(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function To(t){for(const e of t.filters)if(e.v())return e.field;return null}function So(t){const e=rs(t);if(null===e.V){e.V=[];const t=To(e),n=Io(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new po(t)),e.V.push(new po(Ss.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new po(Ss.keyField(),t))}}}return e.V}function _o(t){const e=rs(t);if(!e.S)if("F"===e.limitType)e.S=Js(e.path,e.collectionGroup,So(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of So(e)){const e="desc"===n.dir?"asc":"desc";t.push(new po(n.field,e))}const n=e.endAt?new lo(e.endAt.position,!e.endAt.before):null,i=e.startAt?new lo(e.startAt.position,!e.startAt.before):null;e.S=Js(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.S}function Ao(t,e){return to(_o(t),_o(e))&&t.limitType===e.limitType}function Co(t){return`${Zs(_o(t))}|lt:${t.limitType}`}function Do(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${js(e.value)}`;var e})).join(", ")}]`),Ls(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: "+fo(t.startAt)),t.endAt&&(e+=", endAt: "+fo(t.endAt)),`Target(${e})`}(_o(t))}; limitType=${t.limitType})`}function No(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ps.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!mo(t.startAt,So(t),e))&&(!t.endAt||!mo(t.endAt,So(t),e))}(t,e)}function ko(t){return(e,n)=>{let i=!1;for(const r of So(t)){const t=Ro(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function Ro(t,e,n){const i=t.field.isKeyField()?Ps.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?Us(i,r):ns()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return ns()}}
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
     */class xo{constructor(){this._=void 0}}function Lo(t,e,n){return t instanceof Po?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Mo?Fo(t,e):t instanceof Vo?Uo(t,e):function(t,e){const n=function(t,e){return t instanceof $o?qs(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}(t,e),i=jo(n)+jo(t.C);return qs(n)&&qs(t.C)?function(t){return{integerValue:""+t}}(i):function(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Os(e)?"-0":e}}(t.N,i)}(t,e)}function Oo(t,e,n){return t instanceof Mo?Fo(t,e):t instanceof Vo?Uo(t,e):n}class Po extends xo{}class Mo extends xo{constructor(t){super(),this.elements=t}}function Fo(t,e){const n=Bo(e);for(const e of t.elements)n.some((t=>Fs(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Vo extends xo{constructor(t){super(),this.elements=t}}function Uo(t,e){let n=Bo(e);for(const e of t.elements)n=n.filter((t=>!Fs(t,e)));return{arrayValue:{values:n}}}class $o extends xo{constructor(t,e){super(),this.N=t,this.C=e}}function jo(t){return Ds(t.integerValue||t.doubleValue)}function Bo(t){return Hs(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ho{}function zo(t,e,n){t instanceof Qo?function(t,e,n){const i=t.value.clone(),r=Jo(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Yo?function(t,e,n){if(!qo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Jo(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Xo(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ko(t,e,n){t instanceof Qo?function(t,e,n){if(!qo(t.precondition,e))return;const i=t.value.clone(),r=Zo(t.fieldTransforms,n,e);i.setAll(r),e.convertToFoundDocument(Wo(e),i).setHasLocalMutations()}(t,e,n):t instanceof Yo?function(t,e,n){if(!qo(t.precondition,e))return;const i=Zo(t.fieldTransforms,n,e),r=e.data;r.setAll(Xo(t)),r.setAll(i),e.convertToFoundDocument(Wo(e),r).setHasLocalMutations()}(t,e,n):function(t,e){qo(t.precondition,e)&&e.convertToNoDocument(vs.min())}(t,e)}function Go(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ms(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Mo&&e instanceof Mo||t instanceof Vo&&e instanceof Vo?ms(t.elements,e.elements,Fs):t instanceof $o&&e instanceof $o?Fs(t.C,e.C):t instanceof Po&&e instanceof Po}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Wo(t){return t.isFoundDocument()?t.version:vs.min()}class Qo extends Ho{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Yo extends Ho{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Xo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Jo(t,e,n){const i=new Map;is(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Oo(o,a,n[r]))}return i}function Zo(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,Lo(t,s,e))}return i}
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
     */class ta{constructor(t){this.count=t}}
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
     */var ea,na;function ia(t){if(void 0===t)return Zr("GRPC error has no .code"),ss.UNKNOWN;switch(t){case ea.OK:return ss.OK;case ea.CANCELLED:return ss.CANCELLED;case ea.UNKNOWN:return ss.UNKNOWN;case ea.DEADLINE_EXCEEDED:return ss.DEADLINE_EXCEEDED;case ea.RESOURCE_EXHAUSTED:return ss.RESOURCE_EXHAUSTED;case ea.INTERNAL:return ss.INTERNAL;case ea.UNAVAILABLE:return ss.UNAVAILABLE;case ea.UNAUTHENTICATED:return ss.UNAUTHENTICATED;case ea.INVALID_ARGUMENT:return ss.INVALID_ARGUMENT;case ea.NOT_FOUND:return ss.NOT_FOUND;case ea.ALREADY_EXISTS:return ss.ALREADY_EXISTS;case ea.PERMISSION_DENIED:return ss.PERMISSION_DENIED;case ea.FAILED_PRECONDITION:return ss.FAILED_PRECONDITION;case ea.ABORTED:return ss.ABORTED;case ea.OUT_OF_RANGE:return ss.OUT_OF_RANGE;case ea.UNIMPLEMENTED:return ss.UNIMPLEMENTED;case ea.DATA_LOSS:return ss.DATA_LOSS;default:return ns()}}(na=ea||(ea={}))[na.OK=0]="OK",na[na.CANCELLED=1]="CANCELLED",na[na.UNKNOWN=2]="UNKNOWN",na[na.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",na[na.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",na[na.NOT_FOUND=5]="NOT_FOUND",na[na.ALREADY_EXISTS=6]="ALREADY_EXISTS",na[na.PERMISSION_DENIED=7]="PERMISSION_DENIED",na[na.UNAUTHENTICATED=16]="UNAUTHENTICATED",na[na.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",na[na.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",na[na.ABORTED=10]="ABORTED",na[na.OUT_OF_RANGE=11]="OUT_OF_RANGE",na[na.UNIMPLEMENTED=12]="UNIMPLEMENTED",na[na.INTERNAL=13]="INTERNAL",na[na.UNAVAILABLE=14]="UNAVAILABLE",na[na.DATA_LOSS=15]="DATA_LOSS";
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
class ra{constructor(t,e){this.comparator=t,this.root=e||oa.EMPTY}insert(t,e){return new ra(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,oa.BLACK,null,null))}remove(t){return new ra(this.comparator,this.root.remove(t,this.comparator).copy(null,null,oa.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new sa(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new sa(this.root,t,this.comparator,!1)}getReverseIterator(){return new sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new sa(this.root,t,this.comparator,!0)}}class sa{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class oa{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:oa.RED,this.left=null!=i?i:oa.EMPTY,this.right=null!=r?r:oa.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new oa(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return oa.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return oa.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,oa.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,oa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ns();if(this.right.isRed())throw ns();const t=this.left.check();if(t!==this.right.check())throw ns();return t+(this.isRed()?0:1)}}oa.EMPTY=null,oa.RED=!0,oa.BLACK=!1,oa.EMPTY=new class{constructor(){this.size=0}get key(){throw ns()}get value(){throw ns()}get color(){throw ns()}get left(){throw ns()}get right(){throw ns()}copy(t,e,n,i,r){return this}insert(t,e,n){return new oa(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class aa{constructor(t){this.comparator=t,this.data=new ra(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ca(this.data.getIterator())}getIteratorFrom(t){return new ca(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof aa))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new aa(this.comparator);return e.data=t,e}}class ca{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */const ha=new ra(Ps.comparator);function ua(){return ha}const la=new ra(Ps.comparator);function da(){return la}new ra(Ps.comparator);const fa=new aa(Ps.comparator);function pa(...t){let e=fa;for(const n of t)e=e.add(n);return e}const ga=new aa(gs);function ma(){return ga}
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
     */class ya{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,va.createSynthesizedTargetChangeForCurrentChange(t,e)),new ya(vs.min(),n,ma(),ua(),pa())}}class va{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new va(_s.EMPTY_BYTE_STRING,e,pa(),pa(),pa())}}
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
     */class wa{constructor(t,e,n,i){this.k=t,this.removedTargetIds=e,this.key=n,this.$=i}}class ba{constructor(t,e){this.targetId=t,this.O=e}}class Ea{constructor(t,e,n=_s.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Ia{constructor(){this.F=0,this.M=_a(),this.L=_s.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=pa(),e=pa(),n=pa();return this.M.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:ns()}})),new va(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=_a()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Ta{constructor(t){this.tt=t,this.et=new Map,this.nt=ua(),this.st=Sa(),this.it=new aa(gs)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.ct(e,t.key,t.$);for(const e of t.removedTargetIds)this.ct(e,t.key,t.$)}at(t){this.forEachTarget(t,(e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:ns()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach(((t,n)=>{this.ht(n)&&e(n)}))}ft(t){const e=t.targetId,n=t.O.count,i=this.dt(e);if(i){const t=i.target;if(eo(t))if(0===n){const n=new Ps(t.path);this.ct(e,n,Ys.newNoDocument(n,vs.min()))}else is(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach(((n,i)=>{const r=this.dt(i);if(r){if(n.current&&eo(r.target)){const e=new Ps(r.target.path);null!==this.nt.get(e)||this.gt(i,e)||this.ct(i,e,Ys.newNoDocument(e,t))}n.K&&(e.set(i,n.W()),n.G())}}));let n=pa();this.st.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.dt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))}));const i=new ya(t,e,this.it,this.nt,n);return this.nt=ua(),this.st=Sa(),this.it=new aa(gs),i}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}ct(t,e,n){if(!this.ht(t))return;const i=this.ut(t);this.gt(t,e)?i.H(e,1):i.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new Ia,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new aa(gs),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||Jr("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Tt(t)}lt(t){this.et.set(t,new Ia),this.tt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function Sa(){return new ra(Ps.comparator)}function _a(){return new ra(Ps.comparator)}
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
     */const Aa={asc:"ASCENDING",desc:"DESCENDING"},Ca={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Da{constructor(t,e){this.databaseId=t,this.D=e}}function Na(t){return is(!!t),vs.fromTimestamp(function(t){const e=Cs(t);return new ys(e.seconds,e.nanos)}(t))}function ka(t){const e=Is.fromString(t);return is(Ga(e)),e}function Ra(t,e){const n=ka(e);if(n.get(1)!==t.databaseId.projectId)throw new os(ss.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new os(ss.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ps(Oa(n))}function xa(t,e){return function(t,e){return function(t){return new Is(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}(t.databaseId,e)}function La(t){return new Is(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Oa(t){return is(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Pa(t,e){return{documents:[xa(t,e.path)]}}function Ma(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=xa(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xa(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Ks(t.value))return{unaryFilter:{field:qa(t.field),op:"IS_NAN"}};if(zs(t.value))return{unaryFilter:{field:qa(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ks(t.value))return{unaryFilter:{field:qa(t.field),op:"IS_NOT_NAN"}};if(zs(t.value))return{unaryFilter:{field:qa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qa(t.field),op:Ba(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:qa(t.field),direction:ja(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.D||Ls(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Ua(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Ua(e.endAt)),n}function Fa(t){let e=function(t){const e=ka(t);return 4===e.length?Is.emptyPath():Oa(e)}(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){is(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Va(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new po(Ha(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ls(e)?null:e}(n.limit));let c=null;n.startAt&&(c=$a(n.startAt));let h=null;return n.endAt&&(h=$a(n.endAt)),function(t,e,n,i,r,s,o,a){return new vo(t,e,n,i,r,s,o,a)}(e,r,o,s,a,"F",c,h)}function Va(t){return t?void 0!==t.unaryFilter?[Ka(t)]:void 0!==t.fieldFilter?[za(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Va(t))).reduce(((t,e)=>t.concat(e))):ns():[]}function Ua(t){return{before:t.before,values:t.position}}function $a(t){const e=!!t.before,n=t.values||[];return new lo(n,e)}function ja(t){return Aa[t]}function Ba(t){return Ca[t]}function qa(t){return{fieldPath:t.canonicalString()}}function Ha(t){return Ss.fromServerFormat(t.fieldPath)}function za(t){return no.create(Ha(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ns()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ka(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ha(t.unaryFilter.field);return no.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ha(t.unaryFilter.field);return no.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ha(t.unaryFilter.field);return no.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ha(t.unaryFilter.field);return no.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ns()}}function Ga(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
class Wa{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ns(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Wa(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Wa?e:Wa.resolve(e)}catch(t){return Wa.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Wa.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Wa.reject(e)}static resolve(t){return new Wa(((e,n)=>{e(t)}))}static reject(t){return new Wa(((e,n)=>{n(t)}))}static waitFor(t){return new Wa(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=Wa.resolve(!1);for(const n of t)e=e.next((t=>t?Wa.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}}function Qa(t){return"IndexedDbTransactionError"===t.name}
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
     */class Ya{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&zo(i,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Ko(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Ko(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(vs.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),pa())}isEqual(t){return this.batchId===t.batchId&&ms(this.mutations,t.mutations,((t,e)=>Go(t,e)))&&ms(this.baseMutations,t.baseMutations,((t,e)=>Go(t,e)))}}
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
     */class Xa{constructor(t,e,n,i,r=vs.min(),s=vs.min(),o=_s.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Xa(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Xa(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Xa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
     */class Ja{constructor(t){this.Wt=t}}function Za(t){const e=Fa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new vo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
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
     */class tc{constructor(){this.Gt=new ec}addToCollectionParentIndex(t,e){return this.Gt.add(e),Wa.resolve()}getCollectionParents(t,e){return Wa.resolve(this.Gt.getEntries(e))}}class ec{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new aa(Is.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new aa(Is.comparator)).toArray()}}
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
     */class nc{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new nc(0)}static ie(){return new nc(-1)}}
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
     */async function ic(t){if(t.code!==ss.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;Jr("LocalStore","Unexpectedly lost primary lease")}
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
     */class rc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0!==i){for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),!0;return!1}forEach(t){bs(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(this.inner)}}
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
class sc{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Rn(t,e,n)))}Rn(t,e,n){return this.He.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}bn(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}Pn(t,e){return this.He.getEntries(t,e).next((e=>this.vn(t,e).next((()=>e))))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.bn(e,t)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Ps.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new Ps(e)).next((t=>{let e=da();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Sn(t,e,n){const i=e.collectionGroup;let r=da();return this.Ht.getCollectionParents(t,i).next((s=>Wa.forEach(s,(s=>{const o=function(t,e){return new vo(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.Dn(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}Dn(t,e,n){let i,r;return this.He.getDocumentsMatchingQuery(t,e,n).next((n=>(i=n,this.In.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(r=e,this.Cn(t,r,i).next((t=>{i=t;for(const t of r)for(const e of t.mutations){const n=e.key;let r=i.get(n);null==r&&(r=Ys.newInvalidDocument(n),i=i.insert(n,r)),Ko(e,r,t.localWriteTime),r.isFoundDocument()||(i=i.remove(n))}}))))).next((()=>(i.forEach(((t,n)=>{No(e,n)||(i=i.remove(t))})),i)))}Cn(t,e,n){let i=pa();for(const t of e)for(const e of t.mutations)e instanceof Yo&&null===n.get(e.key)&&(i=i.add(e.key));let r=n;return this.He.getEntries(t,i).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(r=r.insert(t,e))})),r)))}}
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
     */class oc{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=i}static kn(t,e){let n=pa(),i=pa();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new oc(t,e.fromCache,n,i)}}
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
     */class ac{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(vs.min())?this.Fn(t,e):this.On.Pn(t,i).next((r=>{const s=this.Mn(e,r);return(bo(e)||Eo(e))&&this.Ln(e.limitType,s,i,n)?this.Fn(t,e):(Xr()<=gt.DEBUG&&Jr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Do(e)),this.On.getDocumentsMatchingQuery(t,e,n).next((t=>(s.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}Mn(t,e){let n=new aa(ko(t));return e.forEach(((e,i)=>{No(t,i)&&(n=n.add(i))})),n}Ln(t,e,n,i){if(n.size!==e.size)return!0;const r="F"===t?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Fn(t,e){return Xr()<=gt.DEBUG&&Jr("QueryEngine","Using full collection scan to execute query:",Do(e)),this.On.getDocumentsMatchingQuery(t,e,vs.min())}}
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
     */class cc{constructor(t,e,n,i){this.persistence=t,this.Bn=e,this.N=i,this.Un=new ra(gs),this.qn=new rc((t=>Zs(t)),to),this.Kn=vs.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new sc(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Un)))}}async function hc(t,e){const n=rs(t);let i=n.In,r=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.In.getAllMutationBatches(t).next((o=>(s=o,i=n.persistence.getMutationQueue(e),r=new sc(n.jn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(t)))).next((e=>{const n=[],i=[];let o=pa();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return r.Pn(t,o).next((t=>({Wn:t,removedBatchIds:n,addedBatchIds:i})))}))}));return n.In=i,n.Qn=r,n.Bn.$n(n.Qn),s}function uc(t){const e=rs(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ze.getLastRemoteSnapshotVersion(t)))}function lc(t,e){const n=rs(t),i=e.snapshotVersion;let r=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});r=n.Un;const o=[];e.targetChanges.forEach(((e,s)=>{const a=r.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,s).next((()=>n.ze.addMatchingKeys(t,e.addedDocuments,s))));const c=e.resumeToken;if(c.approximateByteSize()>0){const h=a.withResumeToken(c,i).withSequenceNumber(t.currentSequenceNumber);r=r.insert(s,h),function(t,e,n){return is(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,h,e)&&o.push(n.ze.updateTargetData(t,h))}}));let a=ua();if(e.documentUpdates.forEach(((i,r)=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(function(t,e,n,i,r){let s=pa();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=ua();return n.forEach(((n,o)=>{const a=t.get(n),c=(null==r?void 0:r.get(n))||i;o.isNoDocument()&&o.version.isEqual(vs.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):Jr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(t,s,e.documentUpdates,i,void 0).next((t=>{a=t}))),!i.isEqual(vs.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next((e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return Wa.waitFor(o).next((()=>s.apply(t))).next((()=>n.Qn.vn(t,a))).next((()=>a))})).then((t=>(n.Un=r,t)))}async function dc(t,e,n){const i=rs(t),r=i.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(t=>i.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!Qa(t))throw t;Jr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.Un=i.Un.remove(e),i.qn.delete(r.target)}function fc(t,e,n){const i=rs(t);let r=vs.min(),s=pa();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=rs(t),r=i.qn.get(n);return void 0!==r?Wa.resolve(i.Un.get(r)):i.ze.getTargetData(e,n)}(i,t,_o(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.ze.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>i.Bn.getDocumentsMatchingQuery(t,e,n?r:vs.min(),n?s:pa()))).next((t=>({documents:t,Gn:s})))))}
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
     */class pc{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return Wa.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:Na(n.createTime)}),Wa.resolve()}getNamedQuery(t,e){return Wa.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Za(t.bundledQuery),readTime:Na(t.readTime)}}(e)),Wa.resolve()}}
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
     */class gc{constructor(){this.Zn=new aa(mc.ts),this.es=new aa(mc.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new mc(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new mc(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}cs(t){const e=new Ps(new Is([])),n=new mc(e,t),i=new mc(e,t+1),r=[];return this.es.forEachInRange([n,i],(t=>{this.rs(t),r.push(t.key)})),r}us(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Ps(new Is([])),n=new mc(e,t),i=new mc(e,t+1);let r=pa();return this.es.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new mc(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class mc{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return Ps.comparator(t.key,e.key)||gs(t.ls,e.ls)}static ns(t,e){return gs(t.ls,e.ls)||Ps.comparator(t.key,e.key)}}
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
     */class yc{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new aa(mc.ts)}checkEmpty(t){return Wa.resolve(0===this.In.length)}addMutationBatch(t,e,n,i){const r=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new Ya(r,e,n,i);this.In.push(s);for(const e of i)this.ds=this.ds.add(new mc(e.key,r)),this.Ht.addToCollectionParentIndex(t,e.key.path.popLast());return Wa.resolve(s)}lookupMutationBatch(t,e){return Wa.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this._s(n),r=i<0?0:i;return Wa.resolve(this.In.length>r?this.In[r]:null)}getHighestUnacknowledgedBatchId(){return Wa.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return Wa.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new mc(e,0),i=new mc(e,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([n,i],(t=>{const e=this.ws(t.ls);r.push(e)})),Wa.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new aa(gs);return e.forEach((t=>{const e=new mc(t,0),i=new mc(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,i],(t=>{n=n.add(t.ls)}))})),Wa.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;Ps.isDocumentKey(r)||(r=r.child(""));const s=new mc(new Ps(r),0);let o=new aa(gs);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.ls)),!0)}),s),Wa.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this.ws(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){is(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return Wa.forEach(e.mutations,(i=>{const r=new mc(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.ds=n}))}te(t){}containsKey(t,e){const n=new mc(e,0),i=this.ds.firstAfterOrEqual(n);return Wa.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.In.length,Wa.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
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
     */class vc{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new ra(Ps.comparator),this.size=0}addEntry(t,e,n){const i=e.key,r=this.docs.get(i),s=r?r.size:0,o=this.ps(e);return this.docs=this.docs.insert(i,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Wa.resolve(n?n.document.clone():Ys.newInvalidDocument(e))}getEntries(t,e){let n=ua();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():Ys.newInvalidDocument(t))})),Wa.resolve(n)}getDocumentsMatchingQuery(t,e,n){let i=ua();const r=new Ps(e.path.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:t,value:{document:r,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||No(e,r)&&(i=i.insert(r.key,r.clone()))}return Wa.resolve(i)}Ts(t,e){return Wa.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new wc(this)}getSize(t){return Wa.resolve(this.size)}}class wc extends class{constructor(){this.changes=new rc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:vs.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:Ys.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Wa.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.document.isValidDocument()?e.push(this.Se.addEntry(t,i.document,this.getReadTime(n))):this.Se.removeEntry(n)})),Wa.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
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
     */class bc{constructor(t){this.persistence=t,this.Es=new rc((t=>Zs(t)),to),this.lastRemoteSnapshotVersion=vs.min(),this.highestTargetId=0,this.Is=0,this.As=new gc,this.targetCount=0,this.Rs=nc.se()}forEachTarget(t,e){return this.Es.forEach(((t,n)=>e(n))),Wa.resolve()}getLastRemoteSnapshotVersion(t){return Wa.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Wa.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Wa.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),Wa.resolve()}ce(t){this.Es.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new nc(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,Wa.resolve()}updateTargetData(t,e){return this.ce(e),Wa.resolve()}removeTargetData(t,e){return this.Es.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,Wa.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Es.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Es.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),Wa.waitFor(r).next((()=>i))}getTargetCount(t){return Wa.resolve(this.targetCount)}getTargetData(t,e){const n=this.Es.get(e)||null;return Wa.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Wa.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),Wa.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),Wa.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Wa.resolve(n)}containsKey(t,e){return Wa.resolve(this.As.containsKey(e))}}
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
     */class Ec{constructor(t,e){this.bs={},this.Le=new fs(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new bc(this),this.Ht=new tc,this.He=function(t,e){return new vc(t,e)}(this.Ht,(t=>this.referenceDelegate.Ps(t))),this.N=new Ja(e),this.Je=new pc(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new yc(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){Jr("MemoryPersistence","Starting transaction:",t);const i=new Ic(this.Le.next());return this.referenceDelegate.vs(),n(i).next((t=>this.referenceDelegate.Vs(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ss(t,e){return Wa.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class Ic extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class Tc{constructor(t){this.persistence=t,this.Ds=new gc,this.Cs=null}static Ns(t){return new Tc(t)}get xs(){if(this.Cs)return this.Cs;throw ns()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),Wa.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),Wa.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Wa.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Wa.forEach(this.xs,(n=>{const i=Ps.fromPath(n);return this.ks(t,i).next((t=>{t||e.removeEntry(i)}))})).next((()=>(this.Cs=null,e.apply(t))))}updateLimboDocument(t,e){return this.ks(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}Ps(t){return 0}ks(t,e){return Wa.or([()=>Wa.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}class Sc{constructor(){this.activeTargetIds=ma()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _c{constructor(){this.yi=new Sc,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new Sc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
     */class Ac{Ti(t){}shutdown(){}}
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
     */class Cc{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){Jr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){Jr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */const Dc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
     */class Nc{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
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
     */class kc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,i){const r=this.Bi(t,e);Jr("RestConnection","Sending: ",r,n);const s={};return this.Ui(s,i),this.qi(t,r,s,n).then((t=>(Jr("RestConnection","Received: ",t),t)),(e=>{throw ts("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}Ki(t,e,n,i){return this.Li(t,e,n,i)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+Qr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=Dc[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,i){return new Promise(((r,s)=>{const o=new Kr;o.listenOnce($r.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ur.NO_ERROR:const e=o.getResponseJson();Jr("Connection","XHR received:",JSON.stringify(e)),r(e);break;case Ur.TIMEOUT:Jr("Connection",'RPC "'+t+'" timed out'),s(new os(ss.DEADLINE_EXCEEDED,"Request time out"));break;case Ur.HTTP_ERROR:const n=o.getStatus();if(Jr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ss).indexOf(e)>=0?e:ss.UNKNOWN}(t.status);s(new os(e,t.message))}else s(new os(ss.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new os(ss.UNAVAILABLE,"Connection failed."));break;default:ns()}}finally{Jr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=new Or,r=Dn(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new Hr({})),this.Ui(s.initMessageHeaders,e),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())||"object"==typeof navigator&&"ReactNative"===navigator.product||nt().indexOf("Electron/")>=0||function(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||nt().indexOf("MSAppHost/")>=0||it()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");Jr("Connection","Creating WebChannel: "+o,s);const a=i.createWebChannel(o,s);let c=!1,h=!1;const u=new Nc({vi:t=>{h?Jr("Connection","Not sending because WebChannel is closed:",t):(c||(Jr("Connection","Opening WebChannel transport."),a.open(),c=!0),Jr("Connection","WebChannel sending:",t),a.send(t))},Vi:()=>a.close()}),l=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return l(a,zr.EventType.OPEN,(()=>{h||Jr("Connection","WebChannel transport opened.")})),l(a,zr.EventType.CLOSE,(()=>{h||(h=!0,Jr("Connection","WebChannel transport closed"),u.$i())})),l(a,zr.EventType.ERROR,(t=>{h||(h=!0,ts("Connection","WebChannel transport errored:",t),u.$i(new os(ss.UNAVAILABLE,"The operation could not be completed")))})),l(a,zr.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];is(!!n);const i=n,r=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(r){Jr("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=ea[t];if(void 0!==e)return ia(e)}(t),n=r.message;void 0===e&&(e=ss.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),h=!0,u.$i(new os(e,n)),a.close()}else Jr("Connection","WebChannel received:",n),u.Oi(n)}})),l(r,jr.STAT_EVENT,(t=>{t.stat===Br?Jr("Connection","Detected buffering proxy"):t.stat===qr&&Jr("Connection","Detected no buffering proxy")})),setTimeout((()=>{u.ki()}),0),u}}function Rc(){return"undefined"!=typeof document?document:null}
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
     */function xc(t){return new Da(t,!0)}class Lc{constructor(t,e,n=1e3,i=1.5,r=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=i,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),i=Math.max(0,e-n);i>0&&Jr("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,i,(()=>(this.Ji=Date.now(),t()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
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
     */class Oc extends class{constructor(t,e,n,i,r,s,o){this.Oe=t,this.er=n,this.nr=i,this.sr=r,this.credentialsProvider=s,this.listener=o,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new Lc(t,e)}ur(){return 1===this.state||5===this.state||this.hr()}hr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&null===this.rr&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this._r())))}mr(t){this.gr(),this.stream.send(t)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.gr(),this.yr(),this.ar.cancel(),this.ir++,4!==t?this.ar.reset():e&&e.code===ss.RESOURCE_EXHAUSTED?(Zr(e.toString()),Zr("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):e&&e.code===ss.UNAUTHENTICATED&&3!==this.state&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.pr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}pr(){}auth(){this.state=1;const t=this.Tr(this.ir),e=this.ir;this.credentialsProvider.getToken().then((t=>{this.ir===e&&this.Er(t)}),(e=>{t((()=>{const t=new os(ss.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ir(t)}))}))}Er(t){const e=this.Tr(this.ir);this.stream=this.Ar(t),this.stream.Si((()=>{e((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,(()=>(this.hr()&&(this.state=3),Promise.resolve()))),this.listener.Si())))})),this.stream.Ci((t=>{e((()=>this.Ir(t)))})),this.stream.onMessage((t=>{e((()=>this.onMessage(t)))}))}lr(){this.state=5,this.ar.Xi((async()=>{this.state=0,this.start()}))}Ir(t){return Jr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Tr(t){return e=>{this.Oe.enqueueAndForget((()=>this.ir===t?e():(Jr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}{constructor(t,e,n,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r),this.N=i}Ar(t){return this.sr.ji("Listen",t)}onMessage(t){this.ar.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ns()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(t,e){return t.D?(is(void 0===e||"string"==typeof e),_s.fromBase64String(e||"")):(is(void 0===e||e instanceof Uint8Array),_s.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?ss.UNKNOWN:ia(t.code);return new os(e,t.message||"")}(o);n=new Ea(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Ra(t,i.document.name),s=Na(i.document.updateTime),o=new Qs({mapValue:{fields:i.document.fields}}),a=Ys.newFoundDocument(r,s,o),c=i.targetIds||[],h=i.removedTargetIds||[];n=new wa(c,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Ra(t,i.document),s=i.readTime?Na(i.readTime):vs.min(),o=Ys.newNoDocument(r,s),a=i.removedTargetIds||[];n=new wa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Ra(t,i.document),s=i.removedTargetIds||[];n=new wa([],s,r,null)}else{if(!("filter"in e))return ns();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,r=new ta(i),s=t.targetId;n=new ba(s,r)}}return n}(this.N,t),n=function(t){if(!("targetChange"in t))return vs.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?vs.min():e.readTime?Na(e.readTime):vs.min()}(t);return this.listener.Rr(e,n)}br(t){const e={};e.database=La(this.N),e.addTarget=function(t,e){let n;const i=e.target;return n=eo(i)?{documents:Pa(t,i)}:{query:Ma(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=function(t,e){return t.D?e.toBase64():e.toUint8Array()}(t,e.resumeToken):e.snapshotVersion.compareTo(vs.min())>0&&(n.readTime=function(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ns()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.N,t);n&&(e.labels=n),this.mr(e)}Pr(t){const e={};e.database=La(this.N),e.removeTarget=t,this.mr(e)}}
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
     */class Pc extends class{}{constructor(t,e,n){super(),this.credentials=t,this.sr=e,this.N=n,this.kr=!1}$r(){if(this.kr)throw new os(ss.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.$r(),this.credentials.getToken().then((i=>this.sr.Li(t,e,n,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ss.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new os(ss.UNKNOWN,t.toString())}))}Ki(t,e,n){return this.$r(),this.credentials.getToken().then((i=>this.sr.Ki(t,e,n,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ss.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new os(ss.UNKNOWN,t.toString())}))}terminate(){this.kr=!0}}class Mc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){0===this.Or&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve()))))}qr(t){"Online"===this.state?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Br("Offline")))}set(t){this.Kr(),this.Or=0,"Online"===t&&(this.Mr=!1),this.Br(t)}Br(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Ur(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(Zr(e),this.Mr=!1):Jr("OnlineStateTracker",e)}Kr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
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
     */class Fc{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=r,this.zr.Ti((t=>{n.enqueueAndForget((async()=>{Kc(this)&&(Jr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=rs(t);e.Wr.add(4),await Uc(e),e.Hr.set("Unknown"),e.Wr.delete(4),await Vc(e)}(this))}))})),this.Hr=new Mc(n,i)}}async function Vc(t){if(Kc(t))for(const e of t.Gr)await e(!0)}async function Uc(t){for(const e of t.Gr)await e(!1)}function $c(t,e){const n=rs(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),zc(n)?Hc(n):Jc(n).hr()&&Bc(n,e))}function jc(t,e){const n=rs(t),i=Jc(n);n.Qr.delete(e),i.hr()&&qc(n,e),0===n.Qr.size&&(i.hr()?i.wr():Kc(n)&&n.Hr.set("Unknown"))}function Bc(t,e){t.Jr.Y(e.targetId),Jc(t).br(e)}function qc(t,e){t.Jr.Y(e),Jc(t).Pr(e)}function Hc(t){t.Jr=new Ta({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),Jc(t).start(),t.Hr.Lr()}function zc(t){return Kc(t)&&!Jc(t).ur()&&t.Qr.size>0}function Kc(t){return 0===rs(t).Wr.size}function Gc(t){t.Jr=void 0}async function Wc(t){t.Qr.forEach(((e,n)=>{Bc(t,e)}))}async function Qc(t,e){Gc(t),zc(t)?(t.Hr.qr(e),Hc(t)):t.Hr.set("Unknown")}async function Yc(t,e,n){if(t.Hr.set("Online"),e instanceof Ea&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.Qr.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.Qr.delete(i),t.Jr.removeTarget(i))}(t,e)}catch(n){Jr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Xc(t,n)}else if(e instanceof wa?t.Jr.rt(e):e instanceof ba?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(vs.min()))try{const e=await uc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Jr._t(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.Qr.get(i);r&&t.Qr.set(i,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.Qr.get(e);if(!n)return;t.Qr.set(e,n.withResumeToken(_s.EMPTY_BYTE_STRING,n.snapshotVersion)),qc(t,e);const i=new Xa(n.target,e,1,n.sequenceNumber);Bc(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Jr("RemoteStore","Failed to raise snapshot:",e),await Xc(t,e)}}async function Xc(t,e,n){if(!Qa(e))throw e;t.Wr.add(1),await Uc(t),t.Hr.set("Offline"),n||(n=()=>uc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Jr("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await Vc(t)}))}function Jc(t){return t.Yr||(t.Yr=function(t,e,n){const i=rs(t);return i.$r(),new Oc(e,i.sr,i.credentials,i.N,n)
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
     */}(t.datastore,t.asyncQueue,{Si:Wc.bind(null,t),Ci:Qc.bind(null,t),Rr:Yc.bind(null,t)}),t.Gr.push((async e=>{e?(t.Yr.dr(),zc(t)?Hc(t):t.Hr.set("Unknown")):(await t.Yr.stop(),Gc(t))}))),t.Yr
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
     */}class Zc{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new as,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Zc(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new os(ss.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function th(t,e){if(Zr("AsyncQueue",`${e}: ${t}`),Qa(t))return new os(ss.UNAVAILABLE,`${e}: ${t}`);throw t}
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
     */class eh{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ps.comparator(e.key,n.key):(t,e)=>Ps.comparator(t.key,e.key),this.keyedMap=da(),this.sortedSet=new ra(this.comparator)}static emptySet(t){return new eh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof eh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new eh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
     */class nh{constructor(){this.Zr=new ra(Ps.comparator)}track(t){const e=t.doc.key,n=this.Zr.get(e);n?0!==t.type&&3===n.type?this.Zr=this.Zr.insert(e,t):3===t.type&&1!==n.type?this.Zr=this.Zr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Zr=this.Zr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Zr=this.Zr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Zr=this.Zr.remove(e):1===t.type&&2===n.type?this.Zr=this.Zr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Zr=this.Zr.insert(e,{type:2,doc:t.doc}):ns():this.Zr=this.Zr.insert(e,t)}eo(){const t=[];return this.Zr.inorderTraversal(((e,n)=>{t.push(n)})),t}}class ih{constructor(t,e,n,i,r,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new ih(t,e,eh.emptySet(e),r,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ao(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
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
     */class rh{constructor(){this.no=void 0,this.listeners=[]}}class sh{constructor(){this.queries=new rc((t=>Co(t)),Ao),this.onlineState="Unknown",this.so=new Set}}function oh(t,e){const n=rs(t);let i=!1;for(const t of e){const e=t.query,r=n.queries.get(e);if(r){for(const e of r.listeners)e.ro(t)&&(i=!0);r.no=t}}i&&ch(n)}function ah(t,e,n){const i=rs(t),r=i.queries.get(e);if(r)for(const t of r.listeners)t.onError(n);i.queries.delete(e)}function ch(t){t.so.forEach((t=>{t.next()}))}class hh{constructor(t,e,n){this.query=t,this.oo=e,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=n||{}}ro(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ih(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.uo(t)&&(this.oo.next(t),e=!0):this.ho(t,this.onlineState)&&(this.lo(t),e=!0),this.ao=t,e}onError(t){this.oo.error(t)}io(t){this.onlineState=t;let e=!1;return this.ao&&!this.co&&this.ho(this.ao,t)&&(this.lo(this.ao),e=!0),e}ho(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.fo&&n||t.docs.isEmpty()&&"Offline"!==e)}uo(t){if(t.docChanges.length>0)return!0;const e=this.ao&&this.ao.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}lo(t){t=ih.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.oo.next(t)}}
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
     */class uh{constructor(t){this.key=t}}class lh{constructor(t){this.key=t}}class dh{constructor(t,e){this.query=t,this.po=e,this.To=null,this.current=!1,this.Eo=pa(),this.mutatedKeys=pa(),this.Io=ko(t),this.Ao=new eh(this.Io)}get Ro(){return this.po}bo(t,e){const n=e?e.Po:new nh,i=e?e.Ao:this.Ao;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a=bo(this.query)&&i.size===this.query.limit?i.last():null,c=Eo(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const h=i.get(t),u=No(this.query,e)?e:null,l=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;h&&u?h.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.vo(h,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Io(u,a)>0||c&&this.Io(u,c)<0)&&(o=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))})),bo(this.query)||Eo(this.query))for(;s.size>this.query.limit;){const t=bo(this.query)?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Ao:s,Po:n,Ln:o,mutatedKeys:r}}vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Ao;this.Ao=t.Ao,this.mutatedKeys=t.mutatedKeys;const r=t.Po.eo();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ns()}};return n(t)-n(e)}
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
     */(t.type,e.type)||this.Io(t.doc,e.doc))),this.Vo(n);const s=e?this.So():[],o=0===this.Eo.size&&this.current?1:0,a=o!==this.To;return this.To=o,0!==r.length||a?{snapshot:new ih(this.query,t.Ao,i,r,t.mutatedKeys,0===o,a,!1),Do:s}:{Do:s}}io(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new nh,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(t){return!this.po.has(t)&&!!this.Ao.has(t)&&!this.Ao.get(t).hasLocalMutations}Vo(t){t&&(t.addedDocuments.forEach((t=>this.po=this.po.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.po=this.po.delete(t))),this.current=t.current)}So(){if(!this.current)return[];const t=this.Eo;this.Eo=pa(),this.Ao.forEach((t=>{this.Co(t.key)&&(this.Eo=this.Eo.add(t.key))}));const e=[];return t.forEach((t=>{this.Eo.has(t)||e.push(new lh(t))})),this.Eo.forEach((n=>{t.has(n)||e.push(new uh(n))})),e}No(t){this.po=t.Gn,this.Eo=pa();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return ih.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,0===this.To)}}class fh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ph{constructor(t){this.key=t,this.ko=!1}}class gh{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.$o={},this.Oo=new rc((t=>Co(t)),Ao),this.Fo=new Map,this.Mo=new Set,this.Lo=new ra(Ps.comparator),this.Bo=new Map,this.Uo=new gc,this.qo={},this.Ko=new Map,this.jo=nc.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return!0===this.Qo}}async function mh(t,e){const n=function(t){const e=rs(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Dh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bh.bind(null,e),e.$o.Rr=oh.bind(null,e.eventManager),e.$o.Go=ah.bind(null,e.eventManager),e}(t);let i,r;const s=n.Oo.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.xo();else{const t=await function(t,e){const n=rs(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.ze.getTargetData(t,e).next((r=>r?(i=r,Wa.resolve(i)):n.ze.allocateTargetId(t).next((r=>(i=new Xa(e,r,0,t.currentSequenceNumber),n.ze.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.Un.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t}))}(n.localStore,_o(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await async function(t,e,n,i){t.Wo=(e,n,i)=>async function(t,e,n,i){let r=e.view.bo(n);r.Ln&&(r=await fc(t.localStore,e.query,!1).then((({documents:t})=>e.view.bo(t,r))));const s=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,s);return Th(t,e.targetId,o.Do),o.snapshot}(t,e,n,i);const r=await fc(t.localStore,e,!0),s=new dh(e,r.Gn),o=s.bo(r.documents),a=va.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Th(t,n,c.Do);const h=new fh(e,n,s);return t.Oo.set(e,h),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}(n,e,i,"current"===s),n.isPrimaryClient&&$c(n.remoteStore,t)}return r}async function yh(t,e){const n=rs(t),i=n.Oo.get(e),r=n.Fo.get(i.targetId);if(r.length>1)return n.Fo.set(i.targetId,r.filter((t=>!Ao(t,e)))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await dc(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),jc(n.remoteStore,i.targetId),Eh(n,i.targetId)})).catch(ic)):(Eh(n,i.targetId),await dc(n.localStore,i.targetId,!0))}async function vh(t,e){const n=rs(t);try{const t=await lc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.Bo.get(e);i&&(is(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.ko=!0:t.modifiedDocuments.size>0?is(i.ko):t.removedDocuments.size>0&&(is(i.ko),i.ko=!1))})),await Ah(n,t,e)}catch(t){await ic(t)}}function wh(t,e,n){const i=rs(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.Oo.forEach(((n,i)=>{const r=i.view.io(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=rs(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.io(e)&&(i=!0)})),i&&ch(n)}(i.eventManager,e),t.length&&i.$o.Rr(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function bh(t,e,n){const i=rs(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Bo.get(e),s=r&&r.key;if(s){let t=new ra(Ps.comparator);t=t.insert(s,Ys.newNoDocument(s,vs.min()));const n=pa().add(s),r=new ya(vs.min(),new Map,new aa(gs),t,n);await vh(i,r),i.Lo=i.Lo.remove(s),i.Bo.delete(e),_h(i)}else await dc(i.localStore,e,!1).then((()=>Eh(i,e,n))).catch(ic)}function Eh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Fo.get(e))t.Oo.delete(i),n&&t.$o.Go(i,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach((e=>{t.Uo.containsKey(e)||Ih(t,e)}))}function Ih(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);null!==n&&(jc(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),_h(t))}function Th(t,e,n){for(const i of n)i instanceof uh?(t.Uo.addReference(i.key,e),Sh(t,i)):i instanceof lh?(Jr("SyncEngine","Document no longer in limbo: "+i.key),t.Uo.removeReference(i.key,e),t.Uo.containsKey(i.key)||Ih(t,i.key)):ns()}function Sh(t,e){const n=e.key,i=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(i)||(Jr("SyncEngine","New document in limbo: "+n),t.Mo.add(i),_h(t))}function _h(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new Ps(Is.fromString(e)),i=t.jo.next();t.Bo.set(i,new ph(n)),t.Lo=t.Lo.insert(n,i),$c(t.remoteStore,new Xa(_o(wo(n.path)),i,2,fs.T))}}async function Ah(t,e,n){const i=rs(t),r=[],s=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach(((t,a)=>{o.push(i.Wo(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=oc.kn(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.$o.Rr(r),await async function(t,e){const n=rs(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Wa.forEach(e,(e=>Wa.forEach(e.Nn,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>Wa.forEach(e.xn,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!Qa(t))throw t;Jr("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Un.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.Un=n.Un.insert(e,r)}}}(i.localStore,s))}async function Ch(t,e){const n=rs(t);if(!n.currentUser.isEqual(e)){Jr("SyncEngine","User change. New user:",e.toKey());const t=await hc(n.localStore,e);n.currentUser=e,function(t,e){t.Ko.forEach((t=>{t.forEach((t=>{t.reject(new os(ss.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.Ko.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ah(n,t.Wn)}}function Dh(t,e){const n=rs(t),i=n.Bo.get(e);if(i&&i.ko)return pa().add(i.key);{let t=pa();const i=n.Fo.get(e);if(!i)return t;for(const e of i){const i=n.Oo.get(e);t=t.unionWith(i.view.Ro)}return t}}class Nh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=xc(t.databaseInfo.databaseId),this.sharedClientState=this.Ho(t),this.persistence=this.Jo(t),await this.persistence.start(),this.gcScheduler=this.Yo(t),this.localStore=this.Xo(t)}Yo(t){return null}Xo(t){return function(t,e,n,i){return new cc(t,e,n,i)}(this.persistence,new ac,t.initialUser,this.N)}Jo(t){return new Ec(Tc.Ns,this.N)}Ho(t){return new _c}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>wh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ch.bind(null,this.syncEngine),await async function(t,e){const n=rs(t);e?(n.Wr.delete(2),await Vc(n)):e||(n.Wr.add(2),await Uc(n),n.Hr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new sh}createDatastore(t){const e=xc(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new kc(i));var i;return function(t,e,n){return new Pc(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>wh(this.syncEngine,t,0),s=Cc.bt()?new Cc:new Ac,new Fc(e,n,i,r,s);var e,n,i,r,s}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new gh(t,e,n,i,r,s);return o&&(a.Qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=rs(t);Jr("RemoteStore","RemoteStore shutting down."),e.Wr.add(5),await Uc(e),e.zr.shutdown(),e.Hr.set("Unknown")}(this.remoteStore)}}
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
     */class Rh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.tc(this.observer.next,t)}error(t){this.observer.error?this.tc(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}ec(){this.muted=!0}tc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
     */class xh{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=Wr.UNAUTHENTICATED,this.clientId=class{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=ps(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,(async t=>{Jr("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new os(ss.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new as;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=th(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Lh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(Jr("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),Jr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await hc(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new Nh)),t.offlineComponents}(t);Jr("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>async function(t,e){const n=rs(t);n.asyncQueue.verifyOperationInProgress(),Jr("RemoteStore","RemoteStore received new credentials");const i=Kc(n);n.Wr.add(3),await Uc(n),i&&n.Hr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Wr.delete(3),await Vc(n)}(e.remoteStore,t))),t.onlineComponents=e}async function Oh(t){const e=await async function(t){return t.onlineComponents||(Jr("FirestoreClient","Using default OnlineComponentProvider"),await Lh(t,new kh)),t.onlineComponents}(t),n=e.eventManager;return n.onListen=mh.bind(null,e.syncEngine),n.onUnlisten=yh.bind(null,e.syncEngine),n}function Ph(t,e,n={}){const i=new as;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new Rh({next:n=>{e.enqueueAndForget((()=>async function(t,e){const n=rs(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}(t,o))),n.fromCache&&"server"===i.source?r.reject(new os(ss.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new hh(n,s,{includeMetadataChanges:!0,fo:!0});return async function(t,e){const n=rs(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new rh),r)try{s.no=await n.onListen(i)}catch(t){const n=th(t,`Initialization of query '${Do(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.listeners.push(e),e.io(n.onlineState),s.no&&e.ro(s.no)&&ch(n)}(t,o)}(await Oh(t),t.asyncQueue,e,n,i))),i.promise}class Mh{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Fh{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Fh&&t.projectId===this.projectId&&t.database===this.database}}
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
     */const Vh=new Map;
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
     */function Uh(t){if(Ps.isDocumentKey(t))throw new os(ss.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $h(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new os(ss.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ns()}(t);throw new os(ss.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
     */class jh{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new os(ss.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new os(ss.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new os(ss.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
     */class Bh{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jh({}),this._settingsFrozen=!1,t instanceof Fh?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new os(ss.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fh(t.options.projectId)}(t))}get app(){if(!this._app)throw new os(ss.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new os(ss.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jh(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new hs;switch(t.type){case"gapi":const e=t.client;return is(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new ds(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new os(ss.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Vh.get(t);e&&(Jr("ComponentProvider","Removing Datastore"),Vh.delete(t),e.terminate())}(this),Promise.resolve()}}
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
     */class qh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new qh(this.firestore,t,this._key)}}class Hh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Hh(this.firestore,t,this._query)}}class zh extends Hh{constructor(t,e,n){super(t,e,wo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new qh(this.firestore,null,new Ps(t))}withConverter(t){return new zh(this.firestore,t,this._path)}}function Kh(t,e,...n){if(t=ut(t),function(t,e,n){if(!n)throw new os(ss.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}("collection","path",e),t instanceof Bh){const i=Is.fromString(e,...n);return Uh(i),new zh(t,null,i)}{if(!(t instanceof qh||t instanceof zh))throw new os(ss.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Is.fromString(e,...n));return Uh(i),new zh(t.firestore,null,i)}}
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
     */class Gh{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new Lc(this,"async_queue_retry"),this.Rc=()=>{const t=Rc();t&&Jr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ar.tr()};const t=Rc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.bc(),this.Pc(t)}enterRestrictedMode(t){if(!this.gc){this.gc=!0,this.Ic=t||!1;const e=Rc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Rc)}}enqueue(t){if(this.bc(),this.gc)return new Promise((()=>{}));const e=new as;return this.Pc((()=>this.gc&&this.Ic?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.mc.push(t),this.vc())))}async vc(){if(0!==this.mc.length){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(t){if(!Qa(t))throw t;Jr("AsyncQueue","Operation failed with retryable error: "+t)}this.mc.length>0&&this.ar.Xi((()=>this.vc()))}}Pc(t){const e=this._c.then((()=>(this.Ec=!0,t().catch((t=>{this.Tc=t,this.Ec=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t);throw Zr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ec=!1,t))))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.bc(),this.Ac.indexOf(t)>-1&&(e=0);const i=Zc.createAndSchedule(this,t,e,n,(t=>this.Vc(t)));return this.yc.push(i),i}bc(){this.Tc&&ns()}verifyOperationInProgress(){}async Sc(){let t;do{t=this._c,await t}while(t!==this._c)}Dc(t){for(const e of this.yc)if(e.timerId===t)return!0;return!1}Cc(t){return this.Sc().then((()=>{this.yc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.yc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sc()}))}Nc(t){this.Ac.push(t)}Vc(t){const e=this.yc.indexOf(t);this.yc.splice(e,1)}}class Wh extends Bh{constructor(t,e){super(t,e),this.type="firestore",this._queue=new Gh,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Qh(this),this._firestoreClient.terminate()}}function Qh(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Mh(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new xh(t._credentials,t._queue,i)}
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
     */class Yh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new os(ss.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ss(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
     */class Xh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Xh(_s.fromBase64String(t))}catch(t){throw new os(ss.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Xh(_s.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
     */class Jh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new os(ss.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new os(ss.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return gs(this._lat,t._lat)||gs(this._long,t._long)}}const Zh=new RegExp("[~\\*/\\[\\]]");function tu(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new os(ss.INVALID_ARGUMENT,a+t+c)
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
     */}class eu{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new qh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new nu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(iu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class nu extends eu{data(){return super.data()}}function iu(t,e){return"string"==typeof e?function(t,e,n){if(e.search(Zh)>=0)throw tu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yh(...e.split("."))._internalPath}catch(i){throw tu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e):e instanceof Yh?e._internalPath:e._delegate._internalPath}
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
     */class ru{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class su extends eu{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ou(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(iu("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ou extends su{data(t={}){return super.data(t)}}class au{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new ru(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new ou(this._firestore,this._userDataWriter,n.key,n,new ru(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new os(ss.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new ou(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ru(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new ou(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ru(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,s=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:cu(e.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function cu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ns()}}
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
     */class hu extends class{}{constructor(t,e){super(),this.Gc=t,this.Jc=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new os(ss.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new os(ss.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new po(e,n);return function(t,e){if(null===Io(t)){const n=To(t);null!==n&&function(t,e,n){if(!n.isEqual(e))throw new os(ss.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
     */(0,n,e.field)}}(t,i),i}(t._query,this.Gc,this.Jc);return new Hh(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new vo(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}class uu extends class{convertValue(t,e="none"){switch(Ms(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ds(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ns(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ns()}}convertObject(t,e){const n={};return bs(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new Jh(Ds(t.latitude),Ds(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Rs(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(xs(t));default:return null}}convertTimestamp(t){const e=Cs(t);return new ys(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Is.fromString(t);is(Ga(n));const i=new Fh(n.get(1),n.get(3)),r=new Ps(n.popFirst(5));return i.isEqual(e)||Zr(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new Xh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new qh(this.firestore,null,e)}}function lu(t){t=$h(t,Hh);const e=$h(t.firestore,Wh),n=function(t){return t._firestoreClient||Qh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(e),i=new uu(e);return function(t){if(Eo(t)&&0===t.explicitOrderBy.length)throw new os(ss.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),Ph(n,t._query).then((n=>new au(e,i,t,n)))}!function(t,e=!0){Qr="9.5.0",kt(new lt("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=new Wh(i,new us(t.getProvider("auth-internal")));return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r}),"PUBLIC")),Pt(Gr,"3.3.1",t),Pt(Gr,"3.3.1","esm2017")}();
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
Pt("firebase","9.5.0","app");var du=J((function(t,e){!function(t){function e(t){return Array.prototype.slice.call(t)}function n(t){return new Promise((function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function i(t,e,i){var r,s=new Promise((function(s,o){n(r=t[e].apply(t,i)).then(s,o)}));return s.request=r,s}function r(t,e,n){var r=i(t,e,n);return r.then((function(t){if(t)return new u(t,r.request)}))}function s(t,e,n){n.forEach((function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})}))}function o(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return i(this[e],r,arguments)})}))}function a(t,e,n,i){i.forEach((function(i){i in n.prototype&&(t.prototype[i]=function(){return this[e][i].apply(this[e],arguments)})}))}function c(t,e,n,i){i.forEach((function(i){i in n.prototype&&(t.prototype[i]=function(){return r(this[e],i,arguments)})}))}function h(t){this._index=t}function u(t,e){this._cursor=t,this._request=e}function l(t){this._store=t}function d(t){this._tx=t,this.complete=new Promise((function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}}))}function f(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new d(n)}function p(t){this._db=t}function g(t,e,n){var r=i(indexedDB,"open",[t,e]),s=r.request;return s&&(s.onupgradeneeded=function(t){n&&n(new f(s.result,t.oldVersion,s.transaction))}),r.then((function(t){return new p(t)}))}function m(t){return i(indexedDB,"deleteDatabase",[t])}s(h,"_index",["name","keyPath","multiEntry","unique"]),o(h,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(h,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(u.prototype[t]=function(){var e=this,i=arguments;return Promise.resolve().then((function(){return e._cursor[t].apply(e._cursor,i),n(e._request).then((function(t){if(t)return new u(t,e._request)}))}))})})),l.prototype.createIndex=function(){return new h(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){return new h(this._store.index.apply(this._store,arguments))},s(l,"_store",["name","keyPath","indexNames","autoIncrement"]),o(l,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(l,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(l,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new l(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new l(this._db.createObjectStore.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[l,h].forEach((function(n){t in n.prototype&&(n.prototype[t.replace("open","iterate")]=function(){var n=e(arguments),i=n[n.length-1],r=this._store||this._index,s=r[t].apply(r,n.slice(0,-1));s.onsuccess=function(){i(s.result)}})}))})),[h,l].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,i=[];return new Promise((function(r){n.iterateCursor(t,(function(t){t?(i.push(t.value),void 0===e||i.length!=e?t.continue():r(i)):r(i)}))}))})})),t.openDb=g,t.deleteDb=m,Object.defineProperty(t,"__esModule",{value:!0})}(e)}));const fu="@firebase/installations",pu="0.5.4",gu=1e4,mu="w:0.5.4",yu="FIS_v2",vu=36e5,wu=new st("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function bu(t){return t instanceof rt&&t.code.includes("request-failed")}
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
     */function Eu({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function Iu(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function Tu(t,e){const n=(await e.json()).error;return wu.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Su({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function _u(t,{refreshToken:e}){const n=Su(t);return n.append("Authorization",function(t){return`FIS_v2 ${t}`}
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
     */(e)),n}async function Au(t){const e=await t();return e.status>=500&&e.status<600?t():e}
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
function Cu(t){return new Promise((e=>{setTimeout(e,t)}))}
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
const Du=/^[cdef][\w-]{21}$/;function Nu(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
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
     */(t);return Du.test(e)?e:""}catch(t){return""}}function ku(t){return`${t.appName}!${t.appId}`}
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
     */const Ru=new Map;function xu(t,e){const n=ku(t);Lu(n,e),function(t,e){const n=function(){!Ou&&"BroadcastChannel"in self&&(Ou=new BroadcastChannel("[Firebase] FID Change"),Ou.onmessage=t=>{Lu(t.data.key,t.data.fid)});return Ou}();n&&n.postMessage({key:t,fid:e});0===Ru.size&&Ou&&(Ou.close(),Ou=null)}(n,e)}function Lu(t,e){const n=Ru.get(t);if(n)for(const t of n)t(e)}let Ou=null;
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
const Pu="firebase-installations-store";let Mu=null;function Fu(){return Mu||(Mu=du.openDb("firebase-installations-database",1,(t=>{if(0===t.oldVersion)t.createObjectStore(Pu)}))),Mu}async function Vu(t,e){const n=ku(t),i=(await Fu()).transaction(Pu,"readwrite"),r=i.objectStore(Pu),s=await r.get(n);return await r.put(e,n),await i.complete,s&&s.fid===e.fid||xu(t,e.fid),e}async function Uu(t){const e=ku(t),n=(await Fu()).transaction(Pu,"readwrite");await n.objectStore(Pu).delete(e),await n.complete}async function $u(t,e){const n=ku(t),i=(await Fu()).transaction(Pu,"readwrite"),r=i.objectStore(Pu),s=await r.get(n),o=e(s);return void 0===o?await r.delete(n):await r.put(o,n),await i.complete,!o||s&&s.fid===o.fid||xu(t,o.fid),o}
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
     */async function ju(t){let e;const n=await $u(t,(n=>{const i=function(t){return Hu(t||{fid:Nu(),registrationStatus:0})}(n),r=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(wu.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(t,e){try{const n=await async function(t,{fid:e}){const n=Eu(t),i=Su(t),r={fid:e,authVersion:yu,appId:t.appId,sdkVersion:mu},s={method:"POST",headers:i,body:JSON.stringify(r)},o=await Au((()=>fetch(n,s)));if(o.ok){const t=await o.json();return{fid:t.fid||e,registrationStatus:2,refreshToken:t.refreshToken,authToken:Iu(t.authToken)}}throw await Tu("Create Installation",o)}(t,e);return Vu(t,n)}catch(n){throw bu(n)&&409===n.customData.serverCode?await Uu(t):await Vu(t,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:Bu(t)}:{installationEntry:e}}(t,i);return e=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function Bu(t){let e=await qu(t);for(;1===e.registrationStatus;)await Cu(100),e=await qu(t);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await ju(t);return n||e}return e}function qu(t){return $u(t,(t=>{if(!t)throw wu.create("installation-not-found");return Hu(t)}))}function Hu(t){return 1===(e=t).registrationStatus&&e.registrationTime+gu<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
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
     */}async function zu({appConfig:t,platformLoggerProvider:e},n){const i=function(t,{fid:e}){return`${Eu(t)}/${e}/authTokens:generate`}
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
     */(t,n),r=_u(t,n),s=e.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:mu}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Au((()=>fetch(i,a)));if(c.ok){return Iu(await c.json())}throw await Tu("Generate Auth Token",c)}async function Ku(t,e=!1){let n;const i=await $u(t.appConfig,(i=>{if(!Wu(i))throw wu.create("not-registered");const r=i.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+vu}(t)}(r))return i;if(1===r.requestStatus)return n=async function(t,e){let n=await Gu(t.appConfig);for(;1===n.authToken.requestStatus;)await Cu(100),n=await Gu(t.appConfig);const i=n.authToken;return 0===i.requestStatus?Ku(t,e):i}(t,e),i;{if(!navigator.onLine)throw wu.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(i);return n=async function(t,e){try{const n=await zu(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Vu(t.appConfig,i),n}catch(n){if(!bu(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Vu(t.appConfig,n)}else await Uu(t.appConfig);throw n}}(t,e),e}}));return n?await n:i.authToken}function Gu(t){return $u(t,(t=>{if(!Wu(t))throw wu.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+gu<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
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
     */}))}function Wu(t){return void 0!==t&&2===t.registrationStatus}
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
async function Qu(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await ju(t);e&&await e}
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
     */(n.appConfig);return(await Ku(n,e)).token}function Yu(t){return wu.create("missing-app-config-values",{valueName:t})}
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
     */const Xu="installations",Ju=t=>{const e=t.getProvider("app").getImmediate(),n=function(t){if(!t||!t.options)throw Yu("App Configuration");if(!t.name)throw Yu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Yu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,platformLoggerProvider:Rt(e,"platform-logger"),_delete:()=>Promise.resolve()}},Zu=t=>{const e=Rt(t.getProvider("app").getImmediate(),Xu).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:i}=await ju(e.appConfig);return i?i.catch(console.error):Ku(e).catch(console.error),n.fid}(e),getToken:t=>Qu(e,t)}};kt(new lt(Xu,Ju,"PUBLIC")),kt(new lt("installations-internal",Zu,"PRIVATE")),Pt(fu,pu),Pt(fu,pu,"esm2017");
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
const tl="analytics",el="https://www.googletagmanager.com/gtag/js",nl=new bt("@firebase/analytics");
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
function il(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function rl(t,e,n,i){return async function(r,s,o){try{"event"===r?await async function(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let t=r.send_to;Array.isArray(t)||(t=[t]);const i=await il(n);for(const n of t){const t=i.find((t=>t.measurementId===n)),r=t&&e[t.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(t){nl.error(t)}}(t,e,n,s,o):"config"===r?await async function(t,e,n,i,r,s){const o=i[r];try{if(o)await e[o];else{const t=(await il(n)).find((t=>t.measurementId===r));t&&await e[t.appId]}}catch(t){nl.error(t)}t("config",r,s)}(t,e,n,i,s,o):t("set",s)}catch(t){nl.error(t)}}}
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
const sl=new st("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const ol=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function al(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function cl(t,e=ol,n){const{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw sl.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw sl.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ul;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),hl({appId:i,apiKey:r,measurementId:s},o,a,e)}async function hl(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=ol){const{appId:s,measurementId:o}=t;try{await function(t,e){return new Promise(((n,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(n,r);t.addEventListener((()=>{clearTimeout(s),i(sl.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(i,e)}catch(t){if(o)return nl.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:o};throw t}try{const e=await async function(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:al(i)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw sl.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return r.deleteThrottleMetadata(s),e}catch(e){if(!function(t){if(!(t instanceof rt&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(e)){if(r.deleteThrottleMetadata(s),o)return nl.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:o};throw e}const a=503===Number(e.customData.httpStatus)?ht(n,r.intervalMillis,30):ht(n,r.intervalMillis),c={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return r.setThrottleMetadata(s,c),nl.debug(`Calling attemptFetch again in ${a} millis`),hl(t,c,i,r)}}class ul{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}
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
     */async function ll(){if("object"!=typeof indexedDB)return nl.warn(sl.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}catch(t){return nl.warn(sl.create("indexeddb-unavailable",{errorInfo:t}).message),!1}return!0}async function dl(t,e,n,i,r,s,o){var a;const c=cl(t);c.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&nl.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>nl.error(t))),e.push(c);const h=ll().then((t=>t?i.getId():void 0)),[u,l]=await Promise.all([c,h]);(function(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(el))return e;return null})()||function(t,e){const n=document.createElement("script");n.src=`${el}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}(s,u.measurementId),r("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=l&&(d.firebase_id=l),r("config",u.measurementId,d),u.measurementId}
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
     */class fl{constructor(t){this.app=t}_delete(){return delete pl[this.app.options.appId],Promise.resolve()}}let pl={},gl=[];const ml={};let yl,vl,wl="dataLayer",bl=!1;function El(){const t=[];if(it()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=sl.create("invalid-analytics-context",{errorInfo:e});nl.warn(n.message)}}function Il(t,e,n){El();const i=t.options.appId;if(!i)throw sl.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw sl.create("no-api-key");nl.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=pl[i])throw sl.create("already-exists",{id:i});if(!bl){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(wl);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,i,r){let s=function(...t){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(s=window[r]),window[r]=rl(s,t,e,n),{gtagCore:s,wrappedGtag:window[r]}}(pl,gl,ml,wl,"gtag");vl=t,yl=e,bl=!0}pl[i]=dl(t,gl,ml,e,yl,wl,n);return new fl(t)}
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
     */function Tl(t,e,n,i){t=ut(t),async function(t,e,n,i,r){if(r&&r.global)t("event",n,i);else{const r=await e;t("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(vl,pl[t.app.options.appId],e,n,i).catch((t=>nl.error(t)))}const Sl="@firebase/analytics",_l="0.7.4";kt(new lt(tl,((t,{options:e})=>Il(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),kt(new lt("analytics-internal",(function(t){try{const e=t.getProvider(tl).getImmediate();return{logEvent:(t,n,i)=>Tl(e,t,n,i)}}catch(t){throw sl.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),Pt(Sl,_l),Pt(Sl,_l,"esm2017");const Al=function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:_t,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!=typeof i||!i)throw xt.create("bad-app-name",{appName:String(i)});const r=Ct.get(i);if(r){if(at(t,r.options)&&at(n,r.config))return r;throw xt.create("duplicate-app",{appName:i})}const s=new pt(i);for(const t of Dt.values())s.addComponent(t);const o=new Lt(t,n,s);return Ct.set(i,o),o}({apiKey:"AIzaSyCFEnFySHtQTgRBs0128lawmwfWupfajFo",authDomain:"earthify-886cf.firebaseapp.com",projectId:"earthify-886cf",storageBucket:"earthify-886cf.appspot.com",messagingSenderId:"207963653599",appId:"1:207963653599:web:81b889cee90f9f7bccf06a",measurementId:"G-KD51HZ5SSF"});function Cl(t,e,n){const i=t.slice();return i[1]=e[n],i}function Dl(t,e){let n,i,r=e[1].name+"";return{key:t,first:null,c(){n=y("p"),i=v(r),this.first=n},m(t,e){g(t,n,e),d(n,i)},p(t,n){e=t,1&n&&r!==(r=e[1].name+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(i,r)},d(t){t&&m(n)}}}function Nl(e){let n,i,r,s,o,a=[],c=new Map,h=e[0];const u=t=>t[1].id;for(let t=0;t<h.length;t+=1){let n=Cl(e,h,t),i=u(n);c.set(i,a[t]=Dl(i,n))}return{c(){n=w(),i=y("div"),r=y("h1"),r.textContent="Earthify",s=w();for(let t=0;t<a.length;t+=1)a[t].c();document.title="Home - Earthify"},m(t,e){g(t,n,e),g(t,i,e),d(i,r),d(i,s);for(let t=0;t<a.length;t+=1)a[t].m(i,null)},p(t,[e]){1&e&&(h=t[0],a=function(t,e,n,i,r,s,o,a,c,h,u,l){let d=t.length,f=s.length,p=d;const g={};for(;p--;)g[t[p].key]=p;const m=[],y=new Map,v=new Map;for(p=f;p--;){const t=l(r,s,p),a=n(t);let c=o.get(a);c?i&&c.p(t,e):(c=h(a,t),c.c()),y.set(a,m[p]=c),a in g&&v.set(a,Math.abs(p-g[a]))}const w=new Set,b=new Set;function E(t){j(t,1),t.m(a,u),o.set(t.key,t),u=t.first,f--}for(;d&&f;){const e=m[f-1],n=t[d-1],i=e.key,r=n.key;e===n?(u=e.first,d--,f--):y.has(r)?!o.has(i)||w.has(i)?E(e):b.has(r)?d--:v.get(i)>v.get(r)?(b.add(i),E(e)):(w.add(r),d--):(c(n,o),d--)}for(;d--;){const e=t[d];y.has(e.key)||c(e,o)}for(;f;)E(m[f-1]);return m}(a,e,u,1,t,h,c,i,z,Dl,null,Cl))},i(t){o||x((()=>{o=H(i,tt,{}),o.start()}))},o:t,d(t){t&&m(n),t&&m(i);for(let t=0;t<a.length;t+=1)a[t].d()}}}function kl(t,e,n){let i=[];return _((async()=>{const t=function(t,...e){for(const n of e)t=n._apply(t);return t}(Kh(function(t=Ot()){return Rt(t,"firestore").getImmediate()}(Al),"listings"),function(t,e="asc"){const n=e,i=iu("orderBy",t);return new hu(i,n)}("name"));(await lu(t)).forEach((t=>{const e=t.id;i.push({id:e,...t.data()})})),n(0,i)})),[i]}!function(t=Ot()){const e=Rt(t=ut(t),tl);e.isInitialized()?e.getImmediate():function(t,e={}){const n=Rt(t,tl);if(n.isInitialized()){const t=n.getImmediate();if(at(e,n.getOptions()))return t;throw sl.create("already-initialized")}n.initialize({options:e})}(t)}(Al);function Rl(e){let n,i;return{c(){n=y("div"),n.innerHTML="<h1>404 Not Found</h1>"},m(t,e){g(t,n,e)},p:t,i(t){i||x((()=>{i=H(n,tt,{}),i.start()}))},o:t,d(t){t&&m(n)}}}var xl=[{path:"/",component:class extends X{constructor(t){super(),Y(this,t,kl,Nl,o,{})}}},{path:"*",component:class extends X{constructor(t){super(),Y(this,t,null,Rl,o,{})}}}];function Ll(e){let n;return{c(){n=y("nav"),n.innerHTML='<a href="/">Home</a> \n    <a href="/starred">Starred Listings</a> \n    <a href="/chats">Chats</a> \n    <a href="/settings">Settings</a>'},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class Ol extends X{constructor(t){super(),Y(this,t,null,Ll,o,{})}}function Pl(t){let e,n,i,s,o;e=new Ol({});var a=t[0];function c(t){return{props:{params:t[1]}}}return a&&(s=new a(c(t))),{c(){K(e.$$.fragment),n=w(),i=y("main"),s&&K(s.$$.fragment)},m(t,r){G(e,t,r),g(t,n,r),g(t,i,r),s&&G(s,i,null),o=!0},p(t,[e]){const n={};if(2&e&&(n.params=t[1]),a!==(a=t[0])){if(s){$={r:0,c:[],p:$};const t=s;B(t.$$.fragment,1,0,(()=>{W(t,1)})),$.r||r($.c),$=$.p}a?(s=new a(c(t)),K(s.$$.fragment),j(s.$$.fragment,1),G(s,i,null)):s=null}else a&&s.$set(n)},i(t){o||(j(e.$$.fragment,t),s&&j(s.$$.fragment,t),o=!0)},o(t){B(e.$$.fragment,t),s&&B(s.$$.fragment,t),o=!1},d(t){W(e,t),t&&m(n),t&&m(i),s&&W(s)}}}function Ml(t,e,n){let i=null,r={};return xl.forEach((t=>{Z(t.path,((t,e)=>{n(1,r={...t.params}),e()}),(()=>{n(0,i=t.component)}))})),Z.start(),[i,r]}return new class extends X{constructor(t){super(),Y(this,t,Ml,Pl,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
