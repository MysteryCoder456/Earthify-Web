var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(n)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const a="undefined"!=typeof window;let c=a?()=>window.performance.now():()=>Date.now(),h=a?t=>requestAnimationFrame(t):t;const u=new Set;function p(t){u.forEach((e=>{e.c(t)||(u.delete(e),e.f())})),0!==u.size&&h(p)}function l(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function f(t){const e=g("style");return function(t,e){!function(t,e){t.appendChild(e)}(t.head||t,e)}(l(t),e),e}function d(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function v(){return t=" ",document.createTextNode(t);var t}const _=new Set;let y,w=0;function b(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-o.length;i&&(t.style.animation=o.join(", "),w-=i,w||h((()=>{w||(_.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),_.clear())})))}function $(t){y=t}const x=[],E=[],k=[],R=[],C=Promise.resolve();let L=!1;function U(t){k.push(t)}let O=!1;const T=new Set;function P(){if(!O){O=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];$(e),A(e.$$)}for($(null),x.length=0;E.length;)E.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];T.has(e)||(T.add(e),e())}k.length=0}while(x.length);for(;R.length;)R.pop()();L=!1,O=!1,T.clear()}}function A(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}let S;function j(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const H=new Set;let N;function I(t,e){t&&t.i&&(H.delete(t),t.i(e))}function B(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),N.c.push((()=>{H.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const q={duration:0};function z(n,o,i){let s,a,d=o(n,i),m=!1,g=0;function v(){s&&b(n,s)}function y(){const{delay:o=0,duration:i=300,easing:r=e,tick:y=t,css:b}=d||q;b&&(s=function(t,e,n,o,i,r,s,a=0){const c=16.666/o;let h="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*r(t);h+=100*t+`%{${s(o,1-o)}}\n`}const u=h+`100% {${s(n,1-n)}}\n}`,p=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,d=l(t);_.add(d);const m=d.__svelte_stylesheet||(d.__svelte_stylesheet=f(t).sheet),g=d.__svelte_rules||(d.__svelte_rules={});g[p]||(g[p]=!0,m.insertRule(`@keyframes ${p} ${u}`,m.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${p} ${o}ms linear ${i}ms 1 both`,w+=1,p}(n,0,1,i,o,r,b,g++)),y(0,1);const $=c()+o,x=$+i;a&&a.abort(),m=!0,U((()=>j(n,!0,"start"))),a=function(t){let e;return 0===u.size&&h(p),{promise:new Promise((n=>{u.add(e={c:t,f:n})})),abort(){u.delete(e)}}}((t=>{if(m){if(t>=x)return y(1,0),j(n,!0,"end"),v(),m=!1;if(t>=$){const e=r((t-$)/i);y(e,1-e)}}return m}))}let $=!1;return{start(){$||($=!0,b(n),r(d)?(d=d(),(S||(S=Promise.resolve(),S.then((()=>{S=null}))),S).then(y)):y())},invalidate(){$=!1},end(){m&&(v(),m=!1)}}}function D(t){t&&t.c()}function M(t,e,o,s){const{fragment:a,on_mount:c,on_destroy:h,after_update:u}=t.$$;a&&a.m(e,o),s||U((()=>{const e=c.map(n).filter(r);h?h.push(...e):i(e),t.$$.on_mount=[]})),u.forEach(U)}function F(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,e){-1===t.$$.dirty[0]&&(x.push(t),L||(L=!0,C.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,n,r,s,a,c,h,u=[-1]){const p=y;$(e);const l=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(p?p.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||p.$$.root};h&&h(l.root);let f=!1;if(l.ctx=r?r(e,n.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return l.ctx&&a(l.ctx[t],l.ctx[t]=i)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](i),f&&K(e,t)),n})):[],l.update(),f=!0,i(l.before_update),l.fragment=!!s&&s(l.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);l.fragment&&l.fragment.l(t),t.forEach(m)}else l.fragment&&l.fragment.c();n.intro&&I(e.$$.fragment),M(e,n.target,n.anchor,n.customElement),P()}$(p)}class G{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Z,J,Q=(Z=function(t,e){t.exports=function(){var t=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},e=_,n=a,o=c,i=h,r=v,s=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(t){for(var e,n=[],o=0,i=0,r="";null!=(e=s.exec(t));){var a=e[0],c=e[1],h=e.index;if(r+=t.slice(i,h),i=h+a.length,c)r+=c[1];else{r&&(n.push(r),r="");var u=e[2],l=e[3],f=e[4],d=e[5],m=e[6],g=e[7],v="+"===m||"*"===m,_="?"===m||"*"===m,y=u||"/",w=f||d||(g?".*":"[^"+y+"]+?");n.push({name:l||o++,prefix:u||"",delimiter:y,optional:_,repeat:v,pattern:p(w)})}}return i<t.length&&(r+=t.substr(i)),r&&n.push(r),n}function c(t){return h(a(t))}function h(e){for(var n=new Array(e.length),o=0;o<e.length;o++)"object"==typeof e[o]&&(n[o]=new RegExp("^"+e[o].pattern+"$"));return function(o){for(var i="",r=o||{},s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var c,h=r[a.name];if(null==h){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(t(h)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+h+'"');if(0===h.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<h.length;u++){if(c=encodeURIComponent(h[u]),!n[s].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');i+=(0===u?a.prefix:a.delimiter)+c}}else{if(c=encodeURIComponent(h),!n[s].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');i+=a.prefix+c}}else i+=a}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function p(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function l(t,e){return t.keys=e,t}function f(t){return t.sensitive?"":"i"}function d(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var o=0;o<n.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return l(t,e)}function m(t,e,n){for(var o=[],i=0;i<t.length;i++)o.push(_(t[i],e,n).source);return l(new RegExp("(?:"+o.join("|")+")",f(n)),e)}function g(t,e,n){for(var o=a(t),i=v(o,n),r=0;r<o.length;r++)"string"!=typeof o[r]&&e.push(o[r]);return l(i,e)}function v(t,e){for(var n=(e=e||{}).strict,o=!1!==e.end,i="",r=t[t.length-1],s="string"==typeof r&&/\/$/.test(r),a=0;a<t.length;a++){var c=t[a];if("string"==typeof c)i+=u(c);else{var h=u(c.prefix),p=c.pattern;c.repeat&&(p+="(?:"+h+p+")*"),i+=p=c.optional?h?"(?:"+h+"("+p+"))?":"("+p+")?":h+"("+p+")"}}return n||(i=(s?i.slice(0,-2):i)+"(?:\\/(?=$))?"),i+=o?"$":n&&s?"":"(?=\\/|$)",new RegExp("^"+i,f(e))}function _(e,n,o){return t(n=n||[])?o||(o={}):(o=n,n=[]),e instanceof RegExp?d(e,n):t(e)?m(e,n,o):g(e,n,o)}e.parse=n,e.compile=o,e.tokensToFunction=i,e.tokensToRegExp=r;var y,w="undefined"!=typeof document,b="undefined"!=typeof window,$="undefined"!=typeof history,x="undefined"!=typeof process,E=w&&document.ontouchstart?"touchstart":"click",k=b&&!(!window.history.location&&!window.location);function R(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function C(){var t=new R;function e(){return L.apply(t,arguments)}return e.callbacks=t.callbacks,e.exits=t.exits,e.base=t.base.bind(t),e.strict=t.strict.bind(t),e.start=t.start.bind(t),e.stop=t.stop.bind(t),e.show=t.show.bind(t),e.back=t.back.bind(t),e.redirect=t.redirect.bind(t),e.replace=t.replace.bind(t),e.dispatch=t.dispatch.bind(t),e.exit=t.exit.bind(t),e.configure=t.configure.bind(t),e.sameOrigin=t.sameOrigin.bind(t),e.clickHandler=t.clickHandler.bind(t),e.create=C,Object.defineProperty(e,"len",{get:function(){return t.len},set:function(e){t.len=e}}),Object.defineProperty(e,"current",{get:function(){return t.current},set:function(e){t.current=e}}),e.Context=T,e.Route=P,e}function L(t,e){if("function"==typeof t)return L.call(this,"*",t);if("function"==typeof e)for(var n=new P(t,null,this),o=1;o<arguments.length;++o)this.callbacks.push(n.middleware(arguments[o]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function U(t){if(!t.handled){var e=this,n=e._window;(e._hashbang?k&&this._getBase()+n.location.hash.replace("#!",""):k&&n.location.pathname+n.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,k&&(n.location.href=t.canonicalPath))}}function O(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function T(t,e,n){var o=this.page=n||L,i=o._window,r=o._hashbang,s=o._getBase();"/"===t[0]&&0!==t.indexOf(s)&&(t=s+(r?"#!":"")+t);var a=t.indexOf("?");this.canonicalPath=t;var c=new RegExp("^"+O(s));if(this.path=t.replace(c,"")||"/",r&&(this.path=this.path.replace("#!","")||"/"),this.title=w&&i.document.title,this.state=e||{},this.state.path=t,this.querystring=~a?o._decodeURLEncodedURIComponent(t.slice(a+1)):"",this.pathname=o._decodeURLEncodedURIComponent(~a?t.slice(0,a):t),this.params={},this.hash="",!r){if(!~this.path.indexOf("#"))return;var h=this.path.split("#");this.path=this.pathname=h[0],this.hash=o._decodeURLEncodedURIComponent(h[1])||"",this.querystring=this.querystring.split("#")[0]}}function P(t,n,o){var i=this.page=o||A,r=n||{};r.strict=r.strict||i._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=e(this.path,this.keys=[],r)}R.prototype.configure=function(t){var e=t||{};this._window=e.window||b&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&b,this._click=!1!==e.click&&w,this._hashbang=!!e.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):b&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(E,this.clickHandler,!1):w&&n.document.removeEventListener(E,this.clickHandler,!1),this._hashbang&&b&&!$?n.addEventListener("hashchange",this._onpopstate,!1):b&&n.removeEventListener("hashchange",this._onpopstate,!1)},R.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},R.prototype._getBase=function(){var t=this._base;if(t)return t;var e=b&&this._window&&this._window.location;return b&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},R.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},R.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var n;if(this._running=!0,k){var o=this._window.location;n=this._hashbang&&~o.hash.indexOf("#!")?o.hash.substr(2)+o.search:this._hashbang?o.search+o.hash:o.pathname+o.search+o.hash}this.replace(n,null,!0,e.dispatch)}},R.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(E,this.clickHandler,!1),b&&t.removeEventListener("popstate",this._onpopstate,!1),b&&t.removeEventListener("hashchange",this._onpopstate,!1)}},R.prototype.show=function(t,e,n,o){var i=new T(t,e,this),r=this.prevContext;return this.prevContext=i,this.current=i.path,!1!==n&&this.dispatch(i,r),!1!==i.handled&&!1!==o&&i.pushState(),i},R.prototype.back=function(t,e){var n=this;if(this.len>0){var o=this._window;$&&o.history.back(),this.len--}else t?setTimeout((function(){n.show(t,e)})):setTimeout((function(){n.show(n._getBase(),e)}))},R.prototype.redirect=function(t,e){var n=this;"string"==typeof t&&"string"==typeof e&&L.call(this,t,(function(t){setTimeout((function(){n.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){n.replace(t)}),0)},R.prototype.replace=function(t,e,n,o){var i=new T(t,e,this),r=this.prevContext;return this.prevContext=i,this.current=i.path,i.init=n,i.save(),!1!==o&&this.dispatch(i,r),i},R.prototype.dispatch=function(t,e){var n=0,o=0,i=this;function r(){var t=i.exits[o++];if(!t)return s();t(e,r)}function s(){var e=i.callbacks[n++];if(t.path===i.current)return e?void e(t,s):U.call(i,t);t.handled=!1}e?r():s()},R.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var n=new P(t,null,this),o=1;o<arguments.length;++o)this.exits.push(n.middleware(arguments[o]))},R.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,n=t.path||(t.composedPath?t.composedPath():null);if(n)for(var o=0;o<n.length;o++)if(n[o].nodeName&&"A"===n[o].nodeName.toUpperCase()&&n[o].href){e=n[o];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var i="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var r=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==r)&&!(r&&r.indexOf("mailto:")>-1)&&!(i?e.target.baseVal:e.target)&&(i||this.sameOrigin(e.href))){var s=i?e.href.baseVal:e.pathname+e.search+(e.hash||"");s="/"!==s[0]?"/"+s:s,x&&s.match(/^\/[a-zA-Z]:\//)&&(s=s.replace(/^\/[a-zA-Z]:\//,"/"));var a=s,c=this._getBase();0===s.indexOf(c)&&(s=s.substr(c.length)),this._hashbang&&(s=s.replace("#!","")),(!c||a!==s||k&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(a))}}}}},R.prototype._onpopstate=(y=!1,b?(w&&"complete"===document.readyState?y=!0:window.addEventListener("load",(function(){setTimeout((function(){y=!0}),0)})),function(t){if(y){var e=this;if(t.state){var n=t.state.path;e.replace(n,t.state)}else if(k){var o=e._window.location;e.show(o.pathname+o.search+o.hash,void 0,void 0,!1)}}}):function(){}),R.prototype._which=function(t){return null==(t=t||b&&this._window.event).which?t.button:t.which},R.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&k)return new URL(t,e.location.toString());if(w){var n=e.document.createElement("a");return n.href=t,n}},R.prototype.sameOrigin=function(t){if(!t||!k)return!1;var e=this._toURL(t),n=this._window.location;return n.protocol===e.protocol&&n.hostname===e.hostname&&(n.port===e.port||""===n.port&&(80==e.port||443==e.port))},R.prototype._samePath=function(t){if(!k)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},R.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},T.prototype.pushState=function(){var t=this.page,e=t._window,n=t._hashbang;t.len++,$&&e.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},T.prototype.save=function(){var t=this.page;$&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},P.prototype.middleware=function(t){var e=this;return function(n,o){if(e.match(n.path,n.params))return n.routePath=e.path,t(n,o);o()}},P.prototype.match=function(t,e){var n=this.keys,o=t.indexOf("?"),i=~o?t.slice(0,o):t,r=this.regexp.exec(decodeURIComponent(i));if(!r)return!1;delete e[0];for(var s=1,a=r.length;s<a;++s){var c=n[s-1],h=this.page._decodeURLEncodedURIComponent(r[s]);void 0===h&&hasOwnProperty.call(e,c.name)||(e[c.name]=h)}return!0};var A=C(),S=A,j=A;return S.default=j,S}()},Z(J={exports:{}},J.exports),J.exports);function W(t,{delay:n=0,duration:o=400,easing:i=e}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:i,css:t=>"opacity: "+t*r}}function X(e){let n,o;return{c(){n=g("div"),n.innerHTML="<h1>Earthify</h1> \n    <p>Coming soon...</p>"},m(t,e){d(t,n,e)},p:t,i(t){o||U((()=>{o=z(n,W,{}),o.start()}))},o:t,d(t){t&&m(n)}}}function Y(e){let n,o;return{c(){n=g("div"),n.innerHTML="<h1>404 Not Found</h1>"},m(t,e){d(t,n,e)},p:t,i(t){o||U((()=>{o=z(n,W,{}),o.start()}))},o:t,d(t){t&&m(n)}}}var tt=[{path:"/",component:class extends G{constructor(t){super(),V(this,t,null,X,s,{})}}},{path:"*",component:class extends G{constructor(t){super(),V(this,t,null,Y,s,{})}}}];function et(e){let n;return{c(){n=g("nav"),n.innerHTML='<a href="/">Home</a> \n    <a href="/settings">Settings</a>'},m(t,e){d(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class nt extends G{constructor(t){super(),V(this,t,null,et,s,{})}}function ot(t){let e,n,o,r,s;e=new nt({});var a=t[0];function c(t){return{props:{params:t[1]}}}return a&&(r=new a(c(t))),{c(){D(e.$$.fragment),n=v(),o=g("main"),r&&D(r.$$.fragment)},m(t,i){M(e,t,i),d(t,n,i),d(t,o,i),r&&M(r,o,null),s=!0},p(t,[e]){const n={};if(2&e&&(n.params=t[1]),a!==(a=t[0])){if(r){N={r:0,c:[],p:N};const t=r;B(t.$$.fragment,1,0,(()=>{F(t,1)})),N.r||i(N.c),N=N.p}a?(r=new a(c(t)),D(r.$$.fragment),I(r.$$.fragment,1),M(r,o,null)):r=null}else a&&r.$set(n)},i(t){s||(I(e.$$.fragment,t),r&&I(r.$$.fragment,t),s=!0)},o(t){B(e.$$.fragment,t),r&&B(r.$$.fragment,t),s=!1},d(t){F(e,t),t&&m(n),t&&m(o),r&&F(r)}}}function it(t,e,n){let o=null,i={};return tt.forEach((t=>{Q(t.path,((t,e)=>{n(1,i={...t.params}),e()}),(()=>{n(0,o=t.component)}))})),Q.start(),[o,i]}return new class extends G{constructor(t){super(),V(this,t,it,ot,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
