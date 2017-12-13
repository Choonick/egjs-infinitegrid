/*!
 * Copyright (c) 2017 NAVER Corp.
 * @egjs/infinitegrid project is licensed under the MIT license
 * 
 * @egjs/infinitegrid JavaScript library
 * https://github.com/naver/egjs-infinitegrid
 * 
 * @version 3.0.0-rc
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Parallax=t():(e.eg=e.eg||{},e.eg.Parallax=t())}(this,function(){return function(e){function __webpack_require__(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,__webpack_require__),o.l=!0,o.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=2)}([function(e,t,n){"use strict";t.__esModule=!0,t.DEFENSE_BROWSER=t.WEBKIT_VERSION=t.PROCESSING=t.LOADING_PREPEND=t.LOADING_APPEND=t.IDLE=t.ALIGN=t.isMobile=t.agent=t.DEFAULT_OPTIONS=t.GROUPKEY_ATT=t.DUMMY_POSITION=t.SINGLE=t.MULTI=t.NO_TRUSTED=t.TRUSTED=t.NO_CACHE=t.CACHE=t.HORIZONTAL=t.VERTICAL=t.PREPEND=t.APPEND=t.IGNORE_CLASSNAME=t.CONTAINER_CLASSNAME=t.RETRY=t.IS_ANDROID2=t.IS_IOS=t.IS_IE=t.SUPPORT_PASSIVE=t.SUPPORT_ADDEVENTLISTENER=t.SUPPORT_COMPUTEDSTYLE=undefined;var o=n(1),r=o.window.navigator.userAgent,i=(t.SUPPORT_COMPUTEDSTYLE=!!("getComputedStyle"in o.window),t.SUPPORT_ADDEVENTLISTENER=!!("addEventListener"in document)),_=(t.SUPPORT_PASSIVE=function(){var e=!1;try{i&&Object.defineProperty&&document.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){e=!0}}))}catch(t){}return e}(),t.IS_IE=/MSIE|Trident|Windows Phone|Edge/.test(r),t.IS_IOS=/iPhone|iPad/.test(r),t.IS_ANDROID2=/Android 2\./.test(r),t.RETRY=3,t.CONTAINER_CLASSNAME="_eg-infinitegrid-container_",t.IGNORE_CLASSNAME="_eg-infinitegrid-ignore_",t.APPEND=!0,t.PREPEND=!1,t.VERTICAL="vertical",t.HORIZONTAL="horizontal",t.CACHE=!0,t.NO_CACHE=!1,t.TRUSTED=!0,t.NO_TRUSTED=!1,t.MULTI=!0,t.SINGLE=!1,t.DUMMY_POSITION=-1e5,t.GROUPKEY_ATT="data-groupkey",t.DEFAULT_OPTIONS={horizontal:!1,margin:0},t.agent=r.toLowerCase()),a=(t.isMobile=/mobi|ios|android/.test(_),t.ALIGN={START:"start",CENTER:"center",END:"end",JUSTIFY:"justify"},t.IDLE=0,t.LOADING_APPEND=1,t.LOADING_PREPEND=2,t.PROCESSING=4,/applewebkit\/([\d|.]*)/g.exec(_)),s=t.WEBKIT_VERSION=a&&parseInt(a[1],10)||0;t.DEFENSE_BROWSER=s&&s<537},function(e,t,n){"use strict";t.__esModule=!0;var o=window;t.window=window;t.document=o.document},function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(0),i=n(3),_={vertical:{position:"top",size:"height",cammelSize:"Height",coordinate:"Y"},horizontal:{position:"left",size:"width",cammelSize:"Width",coordinate:"X"}},a=r.ALIGN.START,s=r.ALIGN.CENTER,c=function(){for(var e=(document.head||document.getElementsByTagName("head")[0]).style,t=["transform","webkitTransform","msTransform","mozTransform"],n=0,o=t.length;n<o;n++)if(t[n]in e)return t[n];return""}(),l=function(){function Parallax(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window,t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_classCallCheck(this,Parallax),this.options=o({container:null,selector:"img",strength:1,center:0,range:[-1,1],align:a,horizontal:!1},t),this._root=(0,i.$)(e),this._container=this.options.container&&(0,i.$)(this.options.container),this._rootSize=0,this._containerPosition=0,this._style=_[this.options.horizontal?"horizontal":"vertical"],this.resize()}return Parallax.prototype._checkParallaxItem=function(e){if(e){var t=this.options.selector;if(!e.__IMAGE__){var n=e.querySelector(t);if(e.__IMAGE__=n||-1,-1===e.__IMAGE__)return;e.__BOX__=n.parentNode}if(-1!==e.__IMAGE__){var o=this._style.cammelSize;e.__IMAGE__.__SIZE__=e.__IMAGE__["offset"+o],e.__BOX__.__SIZE__=e.__BOX__["offset"+o]}}},Parallax.prototype.resize=function(){var e=this,t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[],n=this._root,o=this._container,_=this._style.position,a=this._style.cammelSize;if(o&&n!==o){var s=((0,i.isWindow)(n)?document.body:n).getBoundingClientRect(),c=o.getBoundingClientRect();this._containerPosition=c[_]-s[_]}else this._containerPosition=0;if(this._rootSize=(0,i.isWindow)(n)?window["inner"+a]||document.documentElement["client"+a]:n["client"+a],r.isMobile&(0,i.isWindow)(n)){var l=document.body.offsetWidth||document.documentElement.offsetWidth,u=window.innerWidth;this._rootSize=this._rootSize/(l/u)}return t.forEach(function(t){e._checkParallaxItem(t.el)}),this},Parallax.prototype.refresh=function(){var e=this,t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[],n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0,o=this._style,r=o.position,i=o.coordinate,_=o.size,a=this.options,l=a.strength,u=a.center,f=a.range,d=a.align,E=this._rootSize,h=n+E,S=this._containerPosition;return t.forEach(function(t){if(t.rect&&t.size&&t.el){var o=S+t.rect[r],a=t.rect[_]||t.size[_];if(!(n>o+a||h<o)){var p=t.el;if(p.__IMAGE__||e._checkParallaxItem(p),-1!==p.__IMAGE__){var T=p.__IMAGE__,P=p.__BOX__.__SIZE__,y=T.__SIZE__;if(P>=y)T.style[c]="";else{var I=(n+E/2-(E+P)/2*u-(o+P/2))/(E+P)*2*l,m=(P-y)/2,g=m*(1-(I=Math.max(Math.min(I,f[1]),f[0])));d===s&&(g-=m),T.__TRANSLATE__=g,T.__RATIO__=I,T.style[c]="translate"+i+"("+g+"px)"}}}}}),this},Parallax}();e.exports=l},function(e,t,n){"use strict";function toArray(e){var t=[];if(e)for(var n=0,o=e.length;n<o;n++)t.push(e[n]);return t}function $(e){var t=arguments.length>1&&arguments[1]!==undefined&&arguments[1],n=void 0;if("string"==typeof e){if(e.match(/^<([A-z]+)\s*([^>]*)>/)){var o=i.document.createElement("div");o.innerHTML=e,n=o.childNodes}else n=i.document.querySelectorAll(e);n=t?toArray(n):n&&n.length>0&&n[0]||undefined}else e===i.window?n=e:!e.nodeName||1!==e.nodeType&&9!==e.nodeType?"jQuery"in i.window&&e instanceof i.window.jQuery||e.constructor.prototype.jquery?n=t?e.toArray():e.get(0):Array.isArray(e)&&(n=e.map(function(e){return $(e)}),t||(n=n.length>=1?n[0]:undefined)):n=e;return n}function getStyles(e){return _.SUPPORT_COMPUTEDSTYLE?i.window.getComputedStyle(e):e.currentStyle}function _getSize(e,t){if(e===i.window)return e.document.documentElement["client"+t];if(9===e.nodeType){var n=e.documentElement;return Math.max(e.body["scroll"+t],n["scroll"+t],e.body["offset"+t],n["offset"+t],n["client"+t])}var o=getStyles(e),r=o[t.toLowerCase()];return parseFloat(/auto|%/.test(r)?e["offset"+t]:o[t.toLowerCase()])}t.__esModule=!0,t.STYLE=undefined;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.toArray=toArray,t.fill=function(e,t){for(var n="object"===(void 0===e?"undefined":r(e))?e:new Array(e),o=n.length-1;o>=0;--o)n[o]=t;return n},t.$=$,t.addEvent=function(e,t,n,o){if(_.SUPPORT_ADDEVENTLISTENER){var i=o||!1;"object"===(void 0===o?"undefined":r(o))&&(i=!!_.SUPPORT_PASSIVE&&o),e.addEventListener(t,n,i)}else e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},t.removeEvent=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null},t.scroll=function(e,t){var n="scroll"+(t?"Top":"Left");return e===i.window?i.window[t?"pageYOffset":"pageXOffset"]||i.document.body[n]||i.document.documentElement[n]:e[n]},t.scrollTo=function(e,t,n){e===i.window?e.scroll(t,n):(e.scrollLeft=t,e.scrollTop=n)},t.scrollBy=function(e,t,n){e===i.window?e.scrollBy(t,n):(e.scrollLeft+=t,e.scrollTop+=n)},t.getStyles=getStyles,t.innerWidth=function(e){return _getSize(e,"Width")},t.innerHeight=function(e){return _getSize(e,"Height")},t.getStyleNames=function(e){return a[e?_.HORIZONTAL:_.VERTICAL]},t.assignOptions=function(e,t){return o({},_.DEFAULT_OPTIONS,e,t)},t.toZeroArray=function(e){return e&&e.length?e:[0]},t.isWindow=function(e){return e===i.window},t.indexOf=function(e,t){if(!(arguments.length>2&&arguments[2]!==undefined&&arguments[2]))return e.indexOf(t);for(var n=e.length-1;n>=0;--n)if(e[n]===t)return n;return-1};var i=n(1),_=n(0),a=t.STYLE={vertical:{pos1:"top",endPos1:"bottom",size1:"height",pos2:"left",endPos2:"right",size2:"width"},horizontal:{pos1:"left",endPos1:"right",size1:"width",pos2:"top",endPos2:"bottom",size2:"height"}}}])});
//# sourceMappingURL=parallax.js.map