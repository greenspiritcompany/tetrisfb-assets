/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);

var Tetris = (function() {
    this.initComplete = false;
    this.initFacebookComplete = false;
    this.initCrossPromoBar = false;
    this.initAnalyticsComplete = false;
    this.initAdsComplete = false;
    this.initBannerComplete = false;
    this.initSponsorPayComplete = false;
    this.initSponsorPayEnergyComplete = false;
    this.initSponsorPayArmorComplete = false;
    this.initSponsorPayGatchaComplete = false;
    this.initSponsorPayJSComplete = false;
    this.initSupersonicAdsComplete = false;
    this.initSupersonicAdsArmorComplete = false;
    this.initSupersonicAdsJSComplete = false;
    this.initEbuzzingComplete = false;
    this.initEbuzzingJSComplete = false;
    this.initImpactComplete = false;
    this.initImpactBarComplete = false;
    this.initHouseAdsComplete = false;
    this.initDetectZoomMessage = false;
    this.tabHold = true;
    this.timeoutMSEC;
    this.timerID;
    this.loginUrl;
    this.hideFlashTimeout;
    this.locale = "en_US";
    this.channelUrl;
    this.localeDropdownOpen = false;
    this.timestampMSEC = 0;
    this.lastTimestampMSEC = 0;
    this.timerIntervalMSEC = 100;
    this.clipboard = null;
    this.flashObject;
    this.gameLoadedCounter = 0;
    this.gameStartCounter = 0;
    this.gameCompleteCounter = 0;
    this.gameEndedCounter = 0;
    this.banMessage;
    this.paymentBucket = 0;
    this.platform = "fb";
    this.dtSEC = false;
    this.dtDay = false;
    this.authResponse = false;
    this.currency = null;
    this.retryWebLogin = 0;
    this.retryWebLoginNumRetry;
    this.retryWebLoginTimeout;
    this.retryWebloginPause;
    this.flashVersionString;
    this.promoBannerTarget = "#app-container";
    this.campId = "false", this.linkName = "false";
    this.showCashUpSell = true;
    this.useFlash2 = false;
    this.optimatic = false;
    this.debugEnergy = false;
    this.debugAbId = false;
    this.debugCountry = false;
    this.optimaticTimeout = 37;
    this.mobilePopupVisible = false;
    this.config = {
        apiKey: 0,
        accessToken: "",
        appID: 0,
        appName: "",
        pageID: 0,
        appURL: "",
        userID: 0,
        userIP: 0,
        abID: 0,
        eaLevel: 22,
        abSwitch: "",
        thirdPartyId: "",
        isNewUser: false,
        staticURL: "",
        advertisingPartialURL: "",
        alternateStaticURL: "",
        apiURL: "",
        ticket: "",
        install: false,
        webCodeVersion: "",
        artVersion: "",
        environment: "",
        underConstruction: false,
        googleAnalytics: "",
        redirect: "",
        friendId: 0,
        allFriends: null,
        appFriends: null,
        elapsedFriends: null,
        energyCap: null,
        af: null,
        ud: null,
        loadingDivOn: false,
        loadingDivCount: 0,
        lastClickedTabName: null,
        cashImage: "",
        coinImage: "",
        level: 1,
        l: null,
        exp: 0,
        coins: 0,
        energyToken: null,
        flash: {
            dir: {},
            minimumVersion: {},
            hasRequestedVersion: true,
            objectWebURL: "",
            objectAkamaiURL: "",
            objectHeight: 690,
            asyncServers: {},
            syncServers: "",
            ArenaSyncServer: "",
            ArenaSyncServerPort: "",
            installPassword: "",
            reviewLink: "",
            discussionLink: "",
            useTransparencyMode: false,
            skipFacebookLogin: false,
            kontKey: "",
            kontUrl: "",
            serverTime: "",
            bucket: 0,
            countryCode: "US",
            countryGroup: "0",
            abId: 1,
            abSwitch: "A"
        },
        crosspromo: {
            showing: false
        },
        minibar: {
            showing: false
        },
        googleAds: {
            showing: false,
            refreshInterval: -1,
            refreshCounter: 0,
            hideDuringGames: false,
            hideForNewUsers: false,
            hideForPC: false
        },
        buyTab: {
            flipContents: false,
            defaultTabName: ""
        },
        requestIds: [],
        requestData: {},
        thirdPartyId: "",
        fpc: true,
        fis: true,
        fic: true,
        pc: false,
        isBanned: false
    };
    this.login = function(authResponse) {
        SpiritAccount.log("Tetris.login");
        var getLoginInfo = true;
        if (Tetris.authResponse == false) {
            Tetris.authResponse = authResponse
        } else {
            authResponse = Tetris.authResponse
        }
        Tetris.clearErrorDialog();
        if (Tetris.config.isBanned) {
            Tetris.showBanDialog(Tetris.lang.strings.error_login_blacklist)
        } else {
            if (Tetris.platform == "ow" && Tetris.config.userID == "") {
                window.location.reload()
            } else {
                if (Tetris.config.userID != 0 && Tetris.config.userID == authResponse.userID) {
                    getLoginInfo = false
                }
                var flashVersionObj = swfobject.getFlashPlayerVersion();
                Tetris.flashVersionString = flashVersionObj.major + "." + flashVersionObj.minor + "." + flashVersionObj.release;
                SpiritAccount.log("WebLoginRQ: ");
                Tetris.trackEvent(Tetris.config.userID, "WebLoginRQ", {
                    subtype1: "Funnel"
                });
                $.ajax({
                    type: "POST",
                    url: "//" + Tetris.config.apiUrl + "api/login",
                    cache: false,
                    timeout: Tetris.retryWebLoginTimeout[Tetris.retryWebLogin],
                    data: {
                        signed_request: authResponse.signedRequest,
                        locale: Tetris.locale,
                        platform: Tetris.platform,
                        doLoginInfo: (getLoginInfo == true ? 1 : 0),
                        flashVersion: Tetris.flashVersionString,
                        debugEnergy: (Tetris.debugEnergy == true ? 1 : 0),
                        debugAbId: (Tetris.debugAbId == false ? "1" : Tetris.debugAbId),
                        debugCountry: (Tetris.debugCountry == false ? "US" : Tetris.debugCountry)
                    },
                    success: function(data) {
                        if (data.errors && data.ban) {
                            Tetris.trackEvent(Tetris.config.userID, "Ban", {
                                subtype1: "Funnel",
                                subtype2: "WebLoginRQ"
                            });
                            Tetris.showBanDialog(Tetris.lang.strings.error_login_blacklist)
                        } else {
                            if (data.errors) {
                                Tetris.trackEvent(Tetris.config.userID, "Fail", {
                                    subtype1: "Funnel",
                                    subtype2: "WebLoginRQ"
                                });
                                Tetris.showErrorDialog(data.message, true)
                            } else {
                                Tetris.trackEvent(Tetris.config.userID, "Success", {
                                    subtype1: "Funnel",
                                    subtype2: "WebLoginRQ"
                                });
                                if (getLoginInfo) {
                                    window.Tetris.config.ticket = data.ticket;
                                    window.Tetris.config.ud = data.ud;
                                    window.Tetris.config.energyToken = data.energyToken;
                                    window.Tetris.config.abSwitch = data.abSwitch
                                }
                                window.Tetris.config.abID = data.abId;
                                if (window.Tetris.debugEnergy) {
                                    window.Tetris.config.energyToken = data.energyToken;
                                    window.Tetris.config.abSwitch = data.abSwitch
                                }
                                if (window.Tetris.config.environment == "toaqa" || window.Tetris.config.environment == "preproduction" || window.Tetris.config.environment == "production") {
                                    SpiritAccount.log("abId: " + data.abId);
                                    if (data.abId > 2) {
                                        window.Tetris.useFlash2 = true
                                    }
                                }
                                Tetris.loginComplete()
                            }
                        }
                    },
                    dataType: Tetris.config.apiDataType
                }).error(function(data, txtStatus) {
                    Tetris.trackEvent(Tetris.config.userID, "WebLoginRQFail", {
                        subtype: "Errors",
                        retries: retryWebLogin
                    });
                    if (Tetris.retryWebLogin < Tetris.retryWebLoginNumRetry) {
                        Tetris.retryWebLogin += 1;
                        setTimeout(function() {
                            Tetris.login(false)
                        }, Tetris.retryWebLoginPause)
                    } else {
                        Tetris.showErrorDialog(Tetris.lang.strings.error_bootstrap_loginFail, true)
                    }
                })
            }
        }
    };
    this.loginComplete = function() {
        Tetris.init(window.initParams());
        if (Tetris.config.googleAds.hideForNewUsers && Tetris.config.isNewUser) {
            $(".ad-container").hide()
        }
        Tetris.trackEvent(Tetris.config.userID, "UserAPIRS", {
            subtype: "Funnel"
        })
    };
    this.init = function(params) {
        SpiritAccount.log("INIT");
        if (!initComplete) {
            Tetris.internalJQuery = jQuery;
            $.extend(config, params);
            config.flash.minimumVersionString = config.flash.minimumVersion.majorVersion + "." + config.flash.minimumVersion.minorVersion + "." + config.flash.minimumVersion.revision;
            if (config.flash.reviewLink.length > 0) {
                config.flash.reviewLink = "http://www.facebook.com/apps/application.php?id=" + config.appID + config.flash.reviewLink
            }
            if (config.flash.discussionLink.length > 0) {
                config.flash.discussionLink = "http://www.facebook.com/apps/application.php?id=" + config.appID + config.flash.discussionLink
            }
            config.flash.hasRequestedVersion = swfobject.hasFlashPlayerVersion(config.flash.minimumVersionString);
            if (config.flash.hasRequestedVersion) {
                Tetris.trackEvent(Tetris.config.userID, "HasFlash", {
                    subtype1: "Funnel"
                });
                hideLoadingDiv();
                loadFlash()
            } else {
                Tetris.trackEvent(Tetris.config.userID, "NoFlash", {
                    subtype: "Errors"
                });
                var noFlashMsg = Tetris.lang.strings.error_bootstrap_noFlash;
                noFlashMsg = noFlashMsg.replace("[#VERSION#]", config.flash.minimumVersionString);
                Tetris.showErrorDialog(noFlashMsg, true, false);
                try {
                    config.isNewUser = false;
                    config.pc = false;
                    Tetris.initAdvertisements()
                } catch (ex) {}
            }
            $("#fb-tabitems a").click(function() {
                tabClick(this.id)
            });
            $("#footer a").each(function() {
                if ($(this).attr("onclick") != undefined) {
                    $(this).bind("contextmenu", function() {
                        return false
                    })
                }
            });
            $("#sale-container").hover(function() {
                $(this).addClass("sale-container-hover")
            }, function() {
                $(this).removeClass("sale-container-hover")
            });
            $("#message-box").click(function() {
                tabClick("message-box")
            });
            $("#message-box").hover(function() {
                $(this).addClass("message-box-hover")
            }, function() {
                $(this).removeClass("message-box-hover")
            });
            $(".locale-icon").click(localeDropdown);
            $(".locale-icon").mouseover(function() {
                var bgPosition = $(this).css("backgroundPosition").split(" ");
                $(this).css({
                    backgroundPosition: "0 " + (parseInt(bgPosition[1].replace("px", "")) - 24) + "px"
                })
            });
            $(".locale-icon").mouseout(function() {
                var bgPosition = $(this).css("backgroundPosition").split(" ");
                $(this).css({
                    backgroundPosition: "0 " + (parseInt(bgPosition[1].replace("px", "")) + 24) + "px"
                })
            });
            resizeIFrame(1080 + "px");
            $("#flash-object").attr("tabindex", "1");
            var flashContainer = document.getElementById("flash-container");
            if (flashContainer) {
                flashContainer.focus()
            }
            $(window).resize(function() {
                Tetris.detectZoom()
            });
            initComplete = true;
            initFacebookComplete = true
        }
    };
    this.offsetApp = function() {
        SpiritAccount.log("offsetApp");
        var viewportWidth = $(window).width();
        var minWidth = $("#content-wrapper").width();
        var leftWidth = $("#content-left").width();
        var rightWidth = $("#content-right").width();
        var offset = 0;
        if (leftWidth > 0 && rightWidth == 0) {
            if (viewportWidth > (minWidth + leftWidth)) {
                offset = (leftWidth / 2)
            } else {
                offset = Math.floor((viewportWidth - 760) / 2) - 7
            }
        } else {
            if (rightWidth > 0 && leftWidth == 0) {
                if (viewportWidth > (minWidth + rightWidth)) {
                    offset = -1 * (rightWidth / 2)
                } else {
                    offset = -1 * (Math.floor((viewportWidth - 760) / 2) - 7)
                }
            } else {}
        }
        $("#content-wrapper").css({
            left: offset + "px"
        })
    };
    this.detectZoom = function() {
        try {
            if (!$.browser.opera) {
                var ratios = DetectZoom.ratios();
                var zoom = ratios.zoom;
                var pixelPerCssPixel = ratios.devicePxPerCssPx;
                if (zoom != 1 || pixelPerCssPixel != 1) {
                    if (!initDetectZoomMessage) {
                        initDetectZoomMessage = true;
                        $("#minibar-container-text").hide();
                        Tetris.initMinibar("<div style='text-align: center'>Your browser appears to be zoomed. For an optimal experience, please reset your zoom. Visit <a href='http://bit.ly/zoomfix' target='_blank'>http://bit.ly/zoomfix</a> for more info.</div>")
                    }
                } else {
                    if (initDetectZoomMessage) {
                        initDetectZoomMessage = false;
                        $("#minibar-container").hide();
                        $("#minibar-container-text").hide()
                    }
                }
            }
        } catch (ex) {
            SpiritAccount.log("Error detecting browser zoom")
        }
    };
    this.initMinibar = function(msg) {
        SpiritAccount.log("initMinibar");
        if (typeof(msg) == "undefined" && Tetris.messages.length > 0) {
            msg = Tetris.messages[Math.floor((Math.random() * Tetris.messages.length))]
        }
        msg = typeof(msg) == "undefined" ? "" : msg;
        if (msg != "") {
            SpiritAccount.log("initMinibar - not blank");
            $("#minibar-container-text").html(Tetris.util.translateText(msg));
            $("#minibar-container-text").show();
            $("#minibar-container").show();
            Tetris.checkFriendListPermission()
        } else {
            $("#minibar-container").hide()
        }
    };
    this.friendsListNotice = "<div style='text-align: center; font-size: 12px'>Can&rsquo;t see your friends online? Click <a href='javascript:void(0)' onclick='Tetris.requestFriendListPermission()'>here</a> to give our game permission to read your friends list!</div>";
    this.checkFriendListPermission = function() {
        Tetris.api.checkPermission("user_friends", function(isAllowed) {
            if (!isAllowed) {
                $("#minibar-container-text").html(this.friendsListNotice)
            }
        }, false, false)
    };
    this.requestFriendListPermission = function() {
        Tetris.api.checkPermission("user_friends", function(isAllowed) {
            if (isAllowed) {
                SpiritAccount.log("Allowed friends list!");
                Tetris.api.getAppFriends();
                setTimeout(function() {
                    Tetris.flashObject = Tetris.util.getFlashObject();
                    if (Tetris.flashObject) {
                        Tetris.flashObject.onPermissionAdded("user_friends");
                        Tetris.initMinibar()
                    }
                }, 3000)
            }
        }, true, true)
    };
    this.adUnits = {
        http: [{
            div: "#ad-2",
            position: "/1607548/TetrisBattle_728x90_ROS_Bottom",
            size: [728, 90],
            target: "ca-pub-3122361475569593-2",
            slot: null
        }, {
            div: "#ad-4",
            position: "/1607548/TetrisBattle_160x600_Left",
            size: [160, 600],
            target: "ca-pub-3122361475569593-1",
            slot: null
        }, {
            div: "#ad-5",
            position: "/1607548/TetrisBattle_160x600_Right",
            size: [160, 600],
            target: "div-gpt-ad-1412825868384-0",
            slot: null
        }],
        https: [{
            div: "#ad-2",
            position: "/1607548/TetrisBattle_728x90_BTF_HTTPS",
            size: [728, 90],
            target: "ca-pub-3122361475569593-2",
            slot: null
        }, {
            div: "#ad-4",
            position: "/1607548/TetrisBattle_160x600_Left_HTTPS",
            size: [160, 600],
            target: "ca-pub-3122361475569593-1",
            slot: null
        }, {
            div: "#ad-5",
            position: "/1607548/TetrisBattle_160x600_Right_HTTPS",
            size: [160, 600],
            target: "div-gpt-ad-1412825868384-0",
            slot: null
        }]
    };
    this.initAdvertisements = function() {
        SpiritAccount.log("initAdvertisements - init");
        try {
            if (!Tetris.api.videoAdVisible) {
                var showAds = true;
                var protocol = ("https:" == document.location.protocol ? "https" : "http");
                if (platform == "fb" && ((config.googleAds.hideForNewUsers && config.isNewUser) || (config.googleAds.hideForPC && config.pc))) {
                    showAds = false
                }
                if (!initAdsComplete && showAds) {
                    initAdsComplete = true;
                    SpiritAccount.log("initAdvertisements - DFP");
                    googletag.cmd.push(function() {
                        for (var i = 0; i < Tetris.adUnits[protocol].length; i++) {
                            Tetris.adUnits[protocol][i].slot = googletag.defineSlot(Tetris.adUnits[protocol][i].position, Tetris.adUnits[protocol][i].size, Tetris.adUnits[protocol][i].target).addService(googletag.pubads())
                        }
                        googletag.pubads().enableSingleRequest();
                        googletag.pubads().setRequestNonPersonalizedAds(toaNonPersonalizedAds);
                        googletag.enableServices()
                    });
                    for (var i = 0; i < Tetris.adUnits[protocol].length; i++) {
                        $(Tetris.adUnits[protocol][i].div).html("<div id='" + Tetris.adUnits[protocol][i].target + "' style='width:" + Tetris.adUnits[protocol][i].size[0] + "px; height:" + Tetris.adUnits[protocol][i].size[1] + "px;'>");
                        googletag.cmd.push(function() {
                            googletag.display(Tetris.adUnits[protocol][i].target)
                        })
                    }
                    Tetris.fitIFrameToCanvas();
                    Tetris.initAdvertisementsComplete();
                    Tetris.checkAdsBlocked()
                }
            }
        } catch (e) {
            SpiritAccount.log(e.message);
            SpiritAccount.log(e.description)
        }
    };
    this.checkAdsBlocked = function() {
        if (Tetris.config.userID != 0) {
            if (!Tetris.config.pc) {
                if (Tetris.initHouseAdsComplete) {
                    Tetris.trackEvent(Tetris.config.userID, "AdsBlocked", {
                        subtype1: "Tracker",
                        blocked: "false"
                    })
                } else {
                    Tetris.trackEvent(Tetris.config.userID, "AdsBlocked", {
                        subtype1: "Tracker",
                        blocked: "true"
                    })
                }
            }
        }
    };
    this.refreshAdvertisements = function() {
        SpiritAccount.log("refreshAdvertisements");
        var protocol = ("https:" == document.location.protocol ? "https" : "http");
        for (var i = 0; i < Tetris.adUnits[protocol].length; i++) {
            googletag.pubads().refresh([Tetris.adUnits[protocol][i].slot])
        }
    };
    this.initAdvertisementsComplete = function() {
        SpiritAccount.log("initAdvertisementsComplete");
        try {
            if (Tetris.platform == "fb") {
                if (util.arrayIndexOf(config.googleAds.enabledAds, "ad-4") != -1) {
                    Tetris.offsetApp();
                    $(window).resize(function() {
                        Tetris.offsetApp()
                    })
                }
            }
        } catch (ex) {}
        Tetris.fitIFrameToCanvas()
    };
    this.initAppstrip = function() {
        if (!initCrossPromoBar) {
            initCrossPromoBar = true;
            $("<iframe />", {
                src: ("http://www.appstrip.com/appstrip.php?application_id=342&t=" + config.thirdPartyId),
                width: "760",
                height: "60",
                frameborder: "0",
                marginwidth: "0",
                marginheight: "0",
                scrolling: "no",
                hspace: "0",
                vspace: "0"
            }).appendTo("#crosspromo-container")
        }
    };
    this.initApplifier = function() {
        if (!initCrossPromoBar && Tetris.config.crosspromo.showing && (!config.googleAds.hideForPC || (config.googleAds.hideForPC && !config.pc))) {
            initCrossPromoBar = true;
            $("<div id='applifier-container' style='height: 76px'><script type='text/javascript'>(function() {try {   window.applifierAsyncInit = function() {       var bar = new Applifier.Bar({applicationId: 237, thirdPartyId: '" + config.thirdPartyId + "', barType: 'bar', barContainer: '#applifier-container'});   };   var a = document.createElement('script'); a.type = 'text/javascript'; a.async = true;   a.src = (('https:' == document.location.protocol) ? 'https://secure/' : 'http://cdn/') + '.applifier.com/applifier.min.js';   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(a, s);} catch (e) {    SpiritAccount.log(e.message);}})();<\/script></div>").appendTo("#crosspromo-container")
        }
    };
    this.initAnalytics = function() {
        if (!initAnalyticsComplete && config.environment == "production") {
            initAnalyticsComplete = true;
            window._gaq = window._gaq || [];
            _gaq.push(["_setAccount", config.googleAnalytics]);
            _gaq.push(["_trackPageview"]);
            (function() {
                var ga = document.createElement("script");
                ga.type = "text/javascript";
                ga.async = true;
                ga.src = ("https:" == document.location.protocol ? "https://ssl/" : "http://www/") + ".google-analytics.com/ga.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(ga, s)
            })()
        }
    };
    this.trackGAEvent = function(category, action, label, value, noninteraction) {
        label = (typeof(label) != "undefined" ? label : null);
        value = (typeof(value) != "undefined" && value != null ? parseInt(value) : null);
        interaction = (typeof(interaction) != "undefined" ? interaction : null);
        try {
            _gaq.push(["_trackEvent", category, action, label, value, noninteraction])
        } catch (err) {}
    };
    this.initClipboard = function() {
        ZeroClipboard.setMoviePath(config.alternateStaticURL + "data/js/ZeroClipboard/ZeroClipboard.swf");
        clipboard = new ZeroClipboard.Client();
        clipboard.setHandCursor(true);
        $(".replay-copy-button").mouseover(function() {
            var fieldId = $(this).attr("copy-input");
            clipboard.setText(document.getElementById(fieldId).value);
            if (clipboard.div) {
                clipboard.receiveEvent("mouseout", null);
                clipboard.reposition(this)
            } else {
                clipboard.glue(this)
            }
            clipboard.receiveEvent("mouseover", null)
        })
    };
    this.initReplayer = function(replayId) {
        if (replayId == "") {
            $("#replayer-form-container").css({
                display: "block"
            });
            $("#flash-container").css({
                display: "none"
            });
            $("#replay-id-input").bind("keyup", Tetris.toggleReplayWatchButton);
            Tetris.toggleReplayWatchButton()
        } else {
            var swfUrl = config.replayerCdnUrl + replayId + "&api=" + config.replayerApiUrl;
            var embedHtml = Tetris.util.buildEmbedHtml("tetris-battle-replayer", swfUrl, "368", "284", config.flashVars);
            $("#flash-container").css({
                display: "block"
            });
            $("#share-container").css({
                display: "block"
            });
            $("#replayer-form-container").hide();
            $("#replay-id").html(replayId);
            $("#replay-embed-html")[0].value = embedHtml;
            Tetris.embedSwf("flash-object", swfUrl, "368", "324", {});
            Tetris.initClipboard()
        }
    };
    this.initVideoAds = function() {
        SpiritAccount.log("initVideoAds");
        if (config.thirdPartyId && config.thirdPartyId != "" && config.thirdPartyId != null && config.thirdPartyId != "null" && config.thirdPartyId != undefined && config.thirdPartyId != "undefined") {
            if (config.features.videoAdPriorities.menu.indexOf("applifier") != -1) {
                initApplifierSpotAd()
            }
        }
    };
    this.initSupersonicAds = function() {
        if (!initSupersonicAdsComplete) {
            initSupersonicAdsComplete = true;
            SpiritAccount.log("initSupersonicAds");
            var callback = function(response) {
                initSponsorPayJSComplete = true;
                if (config.features.videoAdPriorities.outOfEnergy.indexOf("supersonicEnergy") != -1) {
                    Tetris.ironRVEnergy = IronRV.getInstance({
                        applicationKey: Tetris.config.supersonicKey,
                        applicationUserId: Tetris.config.thirdPartyId,
                        reload: true
                    });
                    if (Tetris.ironRVEnergy) {
                        Tetris.ironRVEnergy.addListener(IronRV.EVENTS.READY, Tetris.api.supersonicOnReady);
                        Tetris.ironRVEnergy.addListener(IronRV.EVENTS.OPEN, Tetris.api.supersonicOnShow);
                        Tetris.ironRVEnergy.addListener(IronRV.EVENTS.CLOSE, Tetris.api.supersonicOnClose);
                        Tetris.ironRVEnergy.addListener(IronRV.EVENTS.COMPLETION, Tetris.api.supersonicOnComplete);
                        Tetris.ironRVEnergy.addListener(IronRV.EVENTS.NO_CAMPAIGNS, Tetris.api.supersonicOnDone)
                    }
                }
            };
            if (!initSupersonicAdsJSComplete) {
                $.getScript(Tetris.supersonicScript, callback)
            } else {
                callback()
            }
        }
    };
    this.initSupersonicAdsArmor = function() {
        if (!initSupersonicAdsArmorComplete) {
            initSupersonicAdsArmorComplete = true;
            SpiritAccount.log("initSupersonicAdsArmor");
            var callback = function(response) {
                initSponsorPayJSComplete = true;
                if (config.features.videoAdPriorities.popup.indexOf("supersonicArmor") != -1) {
                    Tetris.ironRVArmor = IronRV.getInstance({
                        applicationKey: Tetris.config.supersonicArmorKey,
                        applicationUserId: Tetris.config.thirdPartyId,
                        reload: true
                    });
                    if (Tetris.ironRVArmor) {
                        Tetris.ironRVArmor.addListener(IronRV.EVENTS.READY, Tetris.api.supersonicArmorOnReady);
                        Tetris.ironRVArmor.addListener(IronRV.EVENTS.OPEN, Tetris.api.supersonicArmorOnShow);
                        Tetris.ironRVArmor.addListener(IronRV.EVENTS.CLOSE, Tetris.api.supersonicArmorOnClose);
                        Tetris.ironRVArmor.addListener(IronRV.EVENTS.COMPLETION, Tetris.api.supersonicArmorOnComplete);
                        Tetris.ironRVArmor.addListener(IronRV.EVENTS.NO_CAMPAIGNS, Tetris.api.supersonicArmorOnDone)
                    }
                }
            };
            if (!initSupersonicAdsJSComplete) {
                $.getScript(Tetris.supersonicScript, callback)
            } else {
                callback()
            }
        }
    };
    this.initSponsorPay = function() {
        if (!initSponsorPayComplete) {
            initSponsorPayComplete = true;
            SpiritAccount.log("initSponsorPay");
            $.getScript(Tetris.sponsorpayScript, function(response) {
                var appId = "5276";
                if (config.environment == "preproduction") {
                    appId = "5278"
                } else {
                    if (config.environment == "production") {
                        appId = "5274"
                    }
                }
                var params = {
                    appid: appId,
                    uid: config.thirdPartyId,
                    height: 750,
                    width: 750,
                    display_format: "bare_player",
                    callback_on_start: function() {
                        Tetris.api.sponsorpayOnReady(true)
                    },
                    callback_no_offers: function() {
                        Tetris.api.sponsorpayOnReady(false)
                    },
                    callback_on_close: function() {
                        Tetris.api.sponsorpayOnClose()
                    },
                    callback_on_conversion: function() {
                        Tetris.api.sponsorpayOnComplete()
                    }
                };
                if (config.features.videoAdPriorities.outOfEnergy.indexOf("sponsorpayEnergy") != -1) {
                    Tetris._sp_video_energy = new SPONSORPAY.Video.Iframe($.extend(params, {
                        pub0: "energy",
                        callback_on_start: function() {
                            Tetris.api.sponsorpayOnReady(true, "energy")
                        },
                        callback_no_offers: function() {
                            Tetris.api.sponsorpayOnReady(false, "energy")
                        }
                    }));
                    Tetris._sp_video_energy.backgroundLoad()
                }
                if (config.features.videoAdPriorities.popup.indexOf("sponsorpayArmor") != -1) {
                    Tetris._sp_video_armor = new SPONSORPAY.Video.Iframe($.extend(params, {
                        pub0: "armor",
                        callback_on_start: function() {
                            Tetris.api.sponsorpayOnReady(true, "armor")
                        },
                        callback_no_offers: function() {
                            Tetris.api.sponsorpayOnReady(false, "armor")
                        }
                    }));
                    Tetris._sp_video_armor.backgroundLoad()
                }
                Tetris.api.sponsorpayTimerId = setInterval(Tetris.api.sponsorpayOnRefresh, 60000 * 5)
            })
        }
    };
    this.initSponsorPayEnergy = function() {
        if (!initSponsorPayEnergyComplete) {
            initSponsorPayEnergyComplete = true;
            SpiritAccount.log("initSponsorPayEnergyComplete");
            var callback = function(response) {
                initSponsorPayJSComplete = true;
                var appId = "5276";
                if (config.environment == "preproduction") {
                    appId = "5278"
                } else {
                    if (config.environment == "production") {
                        appId = "5274"
                    }
                }
                var params = {
                    appid: appId,
                    uid: config.thirdPartyId,
                    height: 750,
                    width: 750,
                    display_format: "bare_player",
                    callback_on_start: function() {
                        Tetris.api.sponsorpayOnReady(true)
                    },
                    callback_no_offers: function() {
                        Tetris.api.sponsorpayOnReady(false)
                    },
                    callback_on_close: function() {
                        Tetris.api.sponsorpayOnClose()
                    },
                    callback_on_conversion: function() {
                        Tetris.api.sponsorpayOnComplete()
                    }
                };
                if (config.features.videoAdPriorities.outOfEnergy.indexOf("sponsorpayEnergy") != -1) {
                    Tetris._sp_video_energy = new SPONSORPAY.Video.Iframe($.extend(params, {
                        pub0: "energy",
                        callback_on_start: function() {
                            Tetris.api.sponsorpayOnReady(true, "energy")
                        },
                        callback_no_offers: function() {
                            Tetris.api.sponsorpayOnReady(false, "energy")
                        }
                    }));
                    Tetris._sp_video_energy.backgroundLoad()
                }
                if (Tetris.api.sponsorpayTimerId == -1) {
                    Tetris.api.sponsorpayTimerId = setInterval(Tetris.api.sponsorpayOnRefresh, 60000 * 5)
                }
            };
            if (!initSponsorPayJSComplete) {
                $.getScript(Tetris.sponsorpayScript, callback)
            } else {
                callback()
            }
        }
    };
    this.initSponsorPayArmor = function() {
        if (!initSponsorPayArmorComplete) {
            initSponsorPayArmorComplete = true;
            SpiritAccount.log("initSponsorPayArmorComplete");
            var callback = function(response) {
                initSponsorPayJSComplete = true;
                var appId = "5276";
                if (config.environment == "preproduction") {
                    appId = "5278"
                } else {
                    if (config.environment == "production") {
                        appId = "5274"
                    }
                }
                var params = {
                    appid: appId,
                    uid: config.thirdPartyId,
                    height: 750,
                    width: 750,
                    display_format: "bare_player",
                    callback_on_start: function() {
                        Tetris.api.sponsorpayOnReady(true)
                    },
                    callback_no_offers: function() {
                        Tetris.api.sponsorpayOnReady(false)
                    },
                    callback_on_close: function() {
                        Tetris.api.sponsorpayOnClose()
                    },
                    callback_on_conversion: function() {
                        Tetris.api.sponsorpayOnComplete()
                    }
                };
                if (config.features.videoAdPriorities.popup.indexOf("sponsorpayArmor") != -1) {
                    Tetris._sp_video_armor = new SPONSORPAY.Video.Iframe($.extend(params, {
                        pub0: "armor",
                        callback_on_start: function() {
                            Tetris.api.sponsorpayOnReady(true, "armor")
                        },
                        callback_no_offers: function() {
                            Tetris.api.sponsorpayOnReady(false, "armor")
                        }
                    }));
                    Tetris._sp_video_armor.backgroundLoad()
                }
                if (Tetris.api.sponsorpayTimerId == -1) {
                    Tetris.api.sponsorpayTimerId = setInterval(Tetris.api.sponsorpayOnRefresh, 60000 * 5)
                }
            };
            if (!initSponsorPayJSComplete) {
                $.getScript(Tetris.sponsorpayScript, callback)
            } else {
                callback()
            }
        }
    };
    this.initSponsorPayGatcha = function() {
        if (!initSponsorPayGatchaComplete) {
            initSponsorPayGatchaComplete = true;
            SpiritAccount.log("initSponsorPayGatchaComplete");
            var callback = function(response) {
                initSponsorPayJSComplete = true;
                var appId = "5276";
                if (config.environment == "preproduction") {
                    appId = "5278"
                } else {
                    if (config.environment == "production") {
                        appId = "18780"
                    }
                }
                var params = {
                    appid: appId,
                    uid: config.thirdPartyId,
                    height: 750,
                    width: 750,
                    display_format: "bare_player",
                    callback_on_start: function() {
                        Tetris.api.sponsorpayOnReady(true)
                    },
                    callback_no_offers: function() {
                        Tetris.api.sponsorpayOnReady(false)
                    },
                    callback_on_close: function() {
                        Tetris.api.sponsorpayOnClose()
                    },
                    callback_on_conversion: function() {
                        Tetris.api.sponsorpayOnComplete()
                    }
                };
                SpiritAccount.log(params);
                if (config.gatchaOffer) {
                    Tetris._sp_video_gatcha = new SPONSORPAY.Video.Iframe($.extend(params, {
                        pub0: "gatcha",
                        callback_on_start: function() {
                            Tetris.api.sponsorpayOnReady(true, "gatcha")
                        },
                        callback_no_offers: function() {
                            Tetris.api.sponsorpayOnReady(false, "gatcha")
                        }
                    }));
                    Tetris._sp_video_gatcha.backgroundLoad()
                }
                if (Tetris.api.sponsorpayTimerId == -1) {
                    Tetris.api.sponsorpayTimerId = setInterval(Tetris.api.sponsorpayOnRefresh, 60000 * 5)
                }
            };
            if (!initSponsorPayJSComplete) {
                $.getScript(Tetris.sponsorpayScript, callback)
            } else {
                callback()
            }
        }
    };
    this.initEbuzzing = function() {
        if (!initEbuzzingComplete) {
            initEbuzzingComplete = true;
            SpiritAccount.log("initEbuzzing");
            var callback = function(response) {
                SpiritAccount.log("initEbuzzingComplete");
                initEbuzzingJSComplete = true;
                if (config.features.videoAdPriorities.popup.indexOf("ebuzzing") != -1) {
                    ebuzzing.init(Tetris.config.ebuzzingUserId, Tetris.config.ebuzzingKey)
                }
            };
            if (!initEbuzzingJSComplete) {
                $.getScript("https://www.ebuzzing.com/api/ebz-distribution.js", callback)
            } else {
                callback()
            }
        }
    };
    this.initApplifierSpotAd = function() {
        SpiritAccount.log("initApplifierSpotAd");
        if (!initImpactComplete) {
            initImpactComplete = true;
            window.applifierAsyncInit = function() {
                $ = Tetris.util.getJQuery();
                SpiritAccount.log("applifierAsyncInit");
                var appId = "2269";
                if (config.environment == "preproduction") {
                    appId = "2270"
                } else {
                    if (config.environment == "production") {
                        appId = "237"
                    }
                }
                Applifier.init({
                    applicationId: appId,
                    thirdPartyId: config.thirdPartyId
                }, function(response) {
                    Applifier.initFeatures("impact", {
                        testImpact: (config.environment == "production" ? false : true),
                        gameElement: "#mainnav"
                    }, function() {
                        Applifier.impact.setTrackingParameter("sid", Tetris.config.thirdPartyId);
                        Applifier.impact.bind("dialog_open", Tetris.api.applifierOnShow);
                        Applifier.impact.bind("dialog_close", Tetris.api.applifierOnClose);
                        Applifier.impact.bind("video_start", Tetris.api.applifierOnStart);
                        Applifier.impact.bind("video_end", Tetris.api.applifierOnComplete);
                        Tetris.applifierOnReady()
                    })
                })
            };
            (function() {
                var a = document.createElement("script");
                a.type = "text/javascript";
                a.async = true;
                a.src = (("https:" == document.location.protocol) ? "https://secure/" : "http://cdn/") + ".applifier.com/applifier.min.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(a, s)
            })()
        }
    };
    this.initHouseAds = function() {
        trace("initHouseAds");
        Tetris.paymentBucket = Tetris.config.houseAds.bucket;
        var params = {
            now: Tetris.config.houseAds.now,
            day: Tetris.config.houseAds.day,
            bucket: Tetris.config.houseAds.bucket,
            lvl: config.level,
            fpc: config.fpc,
            cc: config.countryCode
        };
        try {
            initBanner(Tetris.util.getAvailableOptions(Tetris.config.houseAds.banners, params));
            initMinibar()
        } catch (ex) {
            SpiritAccount.log(ex.message)
        }
    };
    this.initSaleTab = function(option) {
        option.saleTabTxt = (option.saleTabTxt == "1" ? "tabs_buyCashCoinIcon" : option.saleTabTxt);
        if (option.saleTabTxt != "") {
            $("#buy > span").html(Tetris.lang.strings[option.saleTabTxt].replace("[#CASH_COIN_ICON#]", "<div id='cashCoin-icon'></div>"))
        }
    };
    this.initBanner = function(option) {
        SpiritAccount.log("initBanner");
        if (!Tetris.initBannerComplete) {
            Tetris.initBannerComplete = true;
            Tetris.bannerAction = (option && option.action ? option.action : "");
            Tetris.bannerBackground = (option && option.background ? option.background : "Unknown");
            Tetris.bannerDateToMSEC = (option && option.dateTo ? option.dateTo * 1000 : 0);
            Tetris.bannerNowMSEC = Tetris.dtSEC != 0 ? Tetris.dtSEC * 1000 : Tetris.util.getNow();
            Tetris.bannerTimeLeftSEC = Math.ceil((Tetris.bannerDateToMSEC - Tetris.bannerNowMSEC) / 1000);
            if (Tetris.bannerTimeLeftSEC > 0) {
                $("#banner-content").css({
                    background: "transparent url(" + config.alternateStaticURL + "/graphics/" + Tetris.lang.fblocale + "/" + option.background + "_" + Tetris.lang.fblocale + ".png) no-repeat 0 0",
                    display: "block"
                });
                Tetris.setBannerTimer(Tetris.bannerTimeLeftSEC);
                lastTimestampMSEC = Tetris.util.getNow();
                if (option.showTimer != "false") {
                    $("#banner-timer").show()
                }
                $("#banner-content").bind("click", Tetris.bannerTimerClick);
                $("#banner-container").show();
                setTimeout(bannerTimerTick, timerIntervalMSEC);
                Tetris.trackEvent(Tetris.config.userID, Tetris.bannerBackground, {
                    subtype1: "TimedBanner",
                    subtype2: "View"
                })
            }
        }
    };
    this.bannerTimerClick = function() {
        var action = Tetris.bannerAction.split(":");
        if (action[0] == "tab") {
            tabClick(action[1])
        } else {
            if (action[0] == "url") {
                window.open(decodeURIComponent(action[1]))
            } else {
                if (action[0] == "flash") {
                    Tetris.flashObject = Tetris.util.getFlashObject();
                    if (Tetris.flashObject) {
                        eval("Tetris.flashObject." + action[1] + "()")
                    }
                } else {
                    if (action[0] == "js") {
                        eval(action[1] + "()")
                    }
                }
            }
        }
        Tetris.trackEvent(Tetris.config.userID, Tetris.bannerBackground, {
            subtype1: "TimedBanner",
            subtype2: "Click"
        })
    };
    this.bannerTimerTick = function() {
        var now = Tetris.util.getNow();
        var timerOffsetMSEC = now - lastTimestampMSEC;
        Tetris.bannerNowMSEC += timerOffsetMSEC;
        lastTimestampMSEC = now;
        Tetris.bannerTimeLeftSEC = Math.ceil((Tetris.bannerDateToMSEC - Tetris.bannerNowMSEC) / 1000);
        Tetris.setBannerTimer(Tetris.bannerTimeLeftSEC);
        if (Tetris.bannerTimeLeftSEC >= 0) {
            var intervalMSEC = timerIntervalMSEC - timerOffsetMSEC;
            setTimeout(bannerTimerTick, (intervalMSEC < 0 ? 0 : intervalMSEC))
        }
    };
    this.setBannerTimer = function(seconds) {
        var timeObject = Tetris.util.getTimeObject(seconds);
        if (timeObject.days > 0) {
            $("#banner-first-field").html(Tetris.util.padLeft(timeObject.days, 2, "0"));
            $("#banner-second-field").html(Tetris.util.padLeft(timeObject.hours, 2, "0"));
            $("#banner-third-field").html(Tetris.util.padLeft(timeObject.minutes, 2, "0"))
        } else {
            if (timeObject.hours > 0 || timeObject.minutes > 0 || timeObject.seconds > 0) {
                $("#banner-content").addClass("banner-last-day");
                $("#banner-first-field").html(Tetris.util.padLeft(timeObject.hours, 2, "0"));
                $("#banner-second-field").html(Tetris.util.padLeft(timeObject.minutes, 2, "0"));
                $("#banner-third-field").html(Tetris.util.padLeft(timeObject.seconds, 2, "0"))
            } else {
                $("#banner-timer").hide();
                $("#banner-content").removeClass("banner-last-day");
                $("#banner-content").addClass("banner-over")
            }
        }
    };
    this.exDoneLoading = function(params) {
        SpiritAccount.log("flashDoneLoading");
        SpiritAccount.Canvas.setDoneLoading();
        Tetris.unlockTabs();
        if (config.redirect.length > 0 && $("#" + config.redirect).length > 0) {
            if (config.redirect == "freegifts" && config.friendId != 0) {
                this.directToFriendGift()
            } else {
                tabClick(config.redirect)
            }
            config.redirect = ""
        } else {
            if (config.requestIds.length > 0) {
                this.processRequests()
            }
        }
        setTimeout(function() {
            var obj = $("flash-object");
            obj.focus()
        }, 1000);
        setTimeout(function() {
            Tetris.loadExternalScripts()
        }, 1100)
    };
    this.exFlashLoaded = function() {
        Tetris.trackEvent(Tetris.config.userID, "FlashLoaded", {
            subtype: "Funnel"
        })
    };
    this.exPreloaderComplete = function() {
        Tetris.trackEvent(Tetris.config.userID, "PreloaderComplete", {
            subtype: "Funnel"
        });
        Tetris.api.checkPermission("user_friends", function(isAllowed) {
            if (isAllowed) {
                Tetris.api.getAppFriends()
            } else {
                Tetris.config.appFriends = []
            }
        }, true, false)
    };
    this.exAfterUserData = function(params) {
        SpiritAccount.log("exAfterUserData");
        SpiritAccount.log(params);
        Tetris.trackEvent(Tetris.config.userID, "AfterUserData", {
            subtype1: "Funnel"
        });
        config.thirdPartyId = params.thirdPartyId;
        initAdvertisements();
        initApplifier();
        initVideoAds();
        initHouseAds();
        fitIFrameToCanvas()
    };
    this.exAfterUserSettings = function(fpc, fis, fic, pc, coins, exp, level, l, eaLevel) {
        SpiritAccount.log("exAfterUserSettings");
        config.fpc = fpc;
        config.fis = fis;
        config.fic = fic;
        config.pc = pc;
        config.eaLevel = eaLevel;
        config.exp = exp;
        config.level = level;
        config.l = l;
        config.coins = coins;
        if (config.googleAds.hideForPC && config.pc) {
            $("#crosspromo-container").hide();
            $(".ad-container").hide();
            Tetris.fitIFrameToCanvas()
        }
        var st1 = "Page";
        var st2 = (config.pc ? "PayingUser" : "NonPayingUser");
        var st3 = (SpiritAccount._isHttps() ? "HTTPS" : "HTTP");
        Tetris.trackEvent(Tetris.config.userID, "Load", {
            subtype1: st1,
            subtype2: st2,
            subtype3: st3
        })
    };
    this.exGameLoad = function(params) {
        SpiritAccount.log("exGameLoad");
        Tetris.gameMode = params.mode + (params.hybrid == "true" ? "_hybrid" : "");
        if (Tetris.interstitialEnabled && config.googleAds.hideForPC && !config.pc) {
            Tetris.gameLoadedCounter++;
            if (Tetris.interstitialIntervals.preroll[Tetris.gameMode].length > 0 && Tetris.gameLoadedCounter % Tetris.interstitialIntervals.preroll[Tetris.gameMode][0] == 0) {
                if (Tetris.interstitialIntervals.isVideoByBucket[(Tetris.config.abID - 1)]) {
                    Tetris.interstitialIntervals.isVideo = true;
                    if (Tetris.doVideoAd) {
                        Tetris.api.interstitalVideoAdOnOpen(Tetris.interstitialIntervals.videoPrerollProviderByBucket, true, params)
                    } else {
                        if (Tetris.flashObject) {
                            Tetris.flashObject.prerollStartGame(0)
                        }
                    }
                } else {
                    Tetris.interstitialIntervals.isVideo = false;
                    Tetris.api.interstitialOnOpen(params)
                }
                if (Tetris.gameMode != "arena6p") {
                    if (Tetris.interstitialIntervals.preroll[Tetris.gameMode].length > 1) {
                        Tetris.interstitialIntervals.preroll[Tetris.gameMode].shift()
                    }
                }
                Tetris.gameLoadedCounter = 0
            }
        }
    };
    this.exGameStart = function(params) {
        SpiritAccount.log("exGameStart");
        if (config.googleAds.hideDuringGames) {
            $(".ad-container").empty()
        }
        Tetris.gameStartCounter++;
        if (platform == "ow") {
            Tetris.trackGAEvent("Game", "Start", "Game - " + Tetris.gameStartCounter)
        }
        if (Tetris.campId != "false" && Tetris.gameCompleteStart == 1) {
            Tetris.trackEvent(Tetris.config.userID, Tetris.linkName, {
                subtype1: ("EmailCampaign" + Tetris.campId),
                subtype2: "ClickedLink",
                subtype3: "GameStart"
            })
        }
    };
    this.exGameComplete = function() {
        SpiritAccount.log("exGameComplete");
        if (config.googleAds.refreshInterval != -1) {
            config.googleAds.refreshCounter++;
            SpiritAccount.log("Counter: " + config.googleAds.refreshCounter + ", Interval: " + config.googleAds.refreshInterval);
            if (config.googleAds.refreshCounter % config.googleAds.refreshInterval == 0) {
                SpiritAccount.log("Refreshing ads!");
                Tetris.refreshAdvertisements();
                config.googleAds.refreshCounter = 0
            }
        }
        Tetris.gameCompleteCounter++;
        if (platform == "ow") {
            Tetris.trackGAEvent("Game", "Complete", "Game - " + Tetris.gameCompleteCounter)
        }
        if (Tetris.campId != "false") {
            if (Tetris.gameCompleteCounter == 1) {
                Tetris.trackEvent(Tetris.config.userID, Tetris.linkName, {
                    subtype1: ("EmailCampaign" + Tetris.campId),
                    subtype2: "ClickedLink",
                    subtype3: "GameStart"
                })
            } else {
                if (Tetris.gameCompleteCounter == 3) {
                    Tetris.trackEvent(Tetris.config.userID, Tetris.linkName, {
                        subtype1: ("EmailCampaign" + Tetris.campId),
                        subtype2: "ClickedLink",
                        subtype3: "Engaged"
                    })
                }
            }
        }
    };
    this.exGameEnded = function(params) {
        SpiritAccount.log("exGameEnded");
        SpiritAccount.log(params);
        var doShowAd = 0;
        if (Tetris.interstitialEnabled) {
            try {
                SpiritAccount.log(Tetris.interstitialIntervals);
                Tetris.gameMode = params.mode + (params.opponent ? "_hybrid" : "");
                Tetris.gameEndedCounter++;
                Tetris.flashObject = Tetris.util.getFlashObject();
                if (Tetris.interstitialIntervals.postroll[Tetris.gameMode].length > 0 && Tetris.gameEndedCounter % Tetris.interstitialIntervals.postroll[Tetris.gameMode][0] == 0) {
                    if (Tetris.interstitialIntervals.isVideoByBucket[(Tetris.config.abID - 1)]) {
                        Tetris.interstitialIntervals.isVideo = true;
                        if (Tetris.doVideoAd) {
                            doShowAd = Tetris.api.interstitalVideoAdOnOpen(Tetris.interstitialIntervals.videoPostrollProviderByBucket, false, params)
                        } else {
                            if (Tetris.flashObject) {
                                Tetris.flashObject.showGameResults(0)
                            }
                        }
                    } else {
                        Tetris.interstitialIntervals.isVideo = false;
                        Tetris.api.interstitialOnOpen(params)
                    }
                    if (Tetris.interstitialIntervals.postroll[Tetris.gameMode].length > 1) {
                        Tetris.interstitialIntervals.postroll[Tetris.gameMode].shift()
                    }
                    Tetris.gameEndedCounter = 0
                } else {
                    if (Tetris.flashObject) {
                        Tetris.flashObject.showGameResults(0)
                    }
                }
            } catch (e) {
                SpiritAccount.log(e.message)
            }
        }
        if (Tetris.initImpactBarComplete && Tetris.api.applifierGameCount != -1) {
            if (Tetris.api.applifierGameCount >= Tetris.api.applifierGameInterval) {
                toggleApplifierBar(false);
                Tetris.api.applifierGameCount = -1
            } else {
                Tetris.api.applifierGameCount++
            }
        }
        return doShowAd
    };
    this.exIsGameEndedEventEnabled = function(params) {
        switch (params.mode) {
            case "battle2p":
            case "battle6p":
                statistic = "line_sent";
                orderBy = "asc";
                break;
            case "arena6p":
            case "marathon1p":
                return false;
                break;
            case "sprint1p":
            case "sprint4p":
                statistic = "time_in_sec";
                orderBy = "desc";
                break
        }
        if (!Tetris.api.activity.cachedScores[params.mode][statistic] || (Tetris.api.activity.cachedScores[params.mode][statistic] && (orderBy == "asc" && params[statistic] > Tetris.api.activity.cachedScores[params.mode][statistic]) || (orderBy == "desc" && params[statistic] < Tetris.api.activity.cachedScores[params.mode][statistic]))) {
            return true
        } else {
            return false
        }
    };
    this.exGameEndedEvent = function(params) {
        SpiritAccount.log("exGameEndedEvent");
        SpiritAccount.log(params);
        if (params) {
            try {
                if (params.video) {
                    params.video = params.video.replace("http:", "https:")
                }
                if (Tetris.gameMode != "tournament2p") {
                    Tetris.api.activity.processGameActivity(params)
                }
            } catch (e) {
                SpiritAccount.log(e.message)
            }
        }
    };
    this.exToast = function(params) {
        SpiritAccount.log("exToast");
        if (params.goal_type) {
            if (params.goal_type == "special_rank") {
                if (params.varient == "toss2p") {
                    params.goal_type = "special_rank_30thAnni"
                } else {
                    if (params.varient == "slim2p") {
                        params.goal_type = "special_rank_30thAnni01"
                    }
                }
            }
        }
        Tetris.api.activity.sendToast(params)
    };
    this.exOutOfEnergy = function(params) {
        SpiritAccount.log("exOutOfEnergy");
        Tetris.api.activity.sendOutOfEnergy(params)
    };
    this.exUpdateAf = function(inAf) {
        SpiritAccount.log("exUpdateAf");
        Tetris.config.af = inAf
    };
    this.exGetAppFriends = function() {
        return (Tetris.config.appFriends != null ? Tetris.config.appFriends.join(",") : null)
    };
    this.exGetElapsedFriends = function() {
        SpiritAccount.log("exGetElapsedFriends: " + Tetris.config.elapsedFriends);
        return Tetris.config.elapsedFriends
    };
    this.exLoadDebug = function(inHtml) {
        $("#flash-debug").html(inHtml)
    };
    this.loadFlash = function() {
        SpiritAccount.log("loading flash...");
        Tetris.trackEvent(Tetris.config.userID, "LoadFlash", {
            subtype1: "Funnel"
        });
        var flashVars = {
            apiKey: config.apiKey,
            appID: config.appID,
            pageID: config.pageID,
            accessToken: config.accessToken,
            environment: config.environment,
            fbuid: config.userID,
            thirdPartyId: config.thirdPartyId,
            isNewUser: config.isNewUser,
            staticURL: config.staticURL,
            alternateStaticURL: config.alternateStaticURL,
            apiURL: config.apiURL,
            flashDir: config.flash.dir,
            asyncServers: config.flash.asyncServers,
            syncServers: config.flash.syncServers,
            ArenaSyncServer: config.flash.ArenaSyncServer,
            ArenaSyncServerPort: config.flash.ArenaSyncServerPort,
            webCodeVersion: config.webCodeVersion,
            artVersion: config.artVersion,
            installPassword: config.flash.installPassword,
            reviewLink: config.flash.reviewLink,
            discussionLink: config.flash.discussionLink,
            showDealspot: config.features.dealspot,
            showDealspotVideos: config.features.dealspotVideos,
            skipFacebookLogin: config.flash.skipFacebookLogin,
            appFriends: config.appFriends,
            kontKey: config.flash.kontKey,
            kontUrl: config.flash.kontUrl,
            lang: Tetris.lang.fblocale,
            locale: Tetris.locale,
            platform: config.flash.platform,
            energyCap: config.energyCap,
            bucketUrl: config.flash.bucketUrl,
            bucketUploadUrl: config.flash.bucketUploadUrl,
            bucketBackupUrl: config.flash.bucketBackupUrl,
            bucket: config.flash.bucket,
            countryCode: config.flash.countryCode,
            countryGroup: config.flash.countryGroup,
            serverTime: config.flash.serverTime,
            userIP: config.userIP,
            abID: config.abID,
            abSwitch: encodeURIComponent(config.abSwitch),
            energyToken: config.energyToken,
            jungroupPID: config.jungroupPID,
            features: encodeURIComponent(Tetris.util.getJSON(config.features)),
            requestIds: config.requestIds,
            creditsClientCoinXml: config.flash.creditsClientCoinXml
        };
        var strHref = window.location.href;
        if (strHref.indexOf("?") > -1) {
            var strQueryString = strHref.substr(strHref.indexOf("?") + 1);
            var aQueryString = strQueryString.split("&");
            for (var iParam = 0; iParam < aQueryString.length; iParam++) {
                var aParam = aQueryString[iParam].split("=");
                flashVars[aParam[0]] = aParam[1]
            }
        }
        $("#flash-container").css({
            left: 0,
            height: config.flash.objectHeight + "px"
        });
        $("#flash-object").css({
            height: config.flash.objectHeight + "px"
        });
        myEmbedSwf(config.flash.objectAkamaiURL, flashVars)
    };
    this.myEmbedSwf = function(embedURL, flashVars) {
        Tetris.trackEvent(Tetris.config.userID, "EmbedFlash", {
            subtype1: "Funnel"
        });
        var flashOptions = {
            allowScriptAccess: "always",
            allowFullScreen: "true"
        };
        if (config.flash.useTransparencyMode) {
            flashOptions.wmode = "transparent"
        }
        embedSwf("flash-object", embedURL, "100%", config.flash.objectHeight, flashVars);
        this.flashObject = document.getElementById("flash-object")
    };
    this.embedSwf = function(id, swfUrl, width, height, flashVars, callback) {
        flashVars = (typeof(flashVars) == "undefined" ? {} : flashVars);
        callback = (typeof(callback) == "undefined" ? function() {} : callback);
        minimumVersionString = (typeof(Tetris.config.flash.minimumVersionString) == "undefined" || Tetris.config.flash.minimumVersionString == "undefined.undefined.undefined" ? "10.0.0" : Tetris.config.flash.minimumVersionString);
        SpiritAccount.log(minimumVersionString);
        swfobject.embedSWF(swfUrl, id, width, height, minimumVersionString, false, flashVars, {
            wmode: "gpu",
            allowscriptaccess: "always"
        }, {
            id: id,
            name: id
        }, callback)
    };
    this.showContactSupport = function() {
        hideFlash();
        var supportModal = '<div id="fb-supportmodal"><div id="fb-supportmodal-header"><div id="fb-supportmodal-title">Contact Technical Support</div><div id="fb-supportmodal-close"></div></div><div id="fb-supportmodal-iframe"><img src="' + config.alternateStaticURL + '/graphics/TB_support.gif"></div></div>';
        $("body").append(supportModal);
        $("#fb-supportmodal").modal({
            overlayClose: true,
            opacity: 70,
            overlayCss: {
                backgroundColor: "#000"
            },
            onClose: function(dialog) {
                $.modal.close();
                showFlash();
                $("#fb-supportmodal").remove()
            },
            focus: true,
            autoPosition: true
        });
        $("#fb-supportmodal-close").click(function() {
            $.modal.close();
            showFlash();
            $("#fb-supportmodal").remove()
        })
    };
    this.showFanPage = function() {
        window.open("https://www.facebook.com/" + config.pageID);
        Tetris.trackEvent(Tetris.config.userID, "BecomeAFan", {
            subtype1: "Page"
        })
    };
    this.showFlash = function() {
        $("#flash-container").css({
            top: "0"
        });
        $("#flash-object").css({
            visibility: "visible"
        });
        $("#page-container").css({
            height: "700px"
        })
    };
    this.hideFlash = function() {
        $("#flash-container").css({
            top: "-10000px"
        })
    };
    this.showPage = function() {
        $("#page-container").css({
            height: "auto"
        })
    };
    this.hidePage = function() {
        $("#page-container").empty()
    };
    this.hideFlashCallback = function(info) {
        if ((config.lastClickedTabName == null || config.lastClickedTabName == "main" || config.lastClickedTabName == "invite" || config.lastClickedTabName == "freegifts" || config.lastClickedTabName == "message-box") && !Tetris.api.videoAdVisible) {
            if (info.state == "opened" && $("#flash-is-hidden").length == 0) {
                var data = "";
                Tetris.flashObject = Tetris.util.getFlashObject();
                if (Tetris.flashObject && !Tetris.api.videoAdVisible) {
                    try {
                        data = Tetris.flashObject.exportScreenshot()
                    } catch (ex) {}
                }
                $("#page-container").html("<div id='flash-is-hidden' " + (data != "" ? "style='background-image: url(data:image/jpeg;base64," + data + ")'" : "") + "></div>");
                Tetris.showPage();
                Tetris.hideFlash()
            } else {
                if (info.state == "closed" && $("#flash-is-hidden").length != 0) {
                    Tetris.showFlash();
                    setTimeout(function() {
                        Tetris.hidePage()
                    }, 250)
                }
            }
        }
    };
    this.localeDropdown = function() {
        var info = {};
        if (Tetris.localeDropdownOpen) {
            $("#locale-dropdown li.headlink ul").css("display", "none");
            info.state = "closed";
            Tetris.localeDropdownOpen = false;
            Tetris.hideFlashCallback(info)
        } else {
            $("#locale-dropdown li.headlink ul").css("display", "block");
            info.state = "opened";
            Tetris.localeDropdownOpen = true;
            Tetris.hideFlashCallback(info);
            $("#flash-is-hidden").click(function() {
                Tetris.tabClick("main");
                Tetris.localeDropdown()
            })
        }
        try {
            Tetris.trackEvent(Tetris.config.userID, info.state, {
                subtype1: "Tab",
                subtype2: "Locale"
            })
        } catch (ex) {}
    };
    this.hideFlashWithBackground = function() {
        var info = {};
        if (Tetris.localeDropdownOpen) {
            info.state = "closed";
            Tetris.localeDropdownOpen = false
        } else {
            info.state = "opened";
            Tetris.localeDropdownOpen = true
        }
        Tetris.hideFlashCallback(info)
    };
    this.resizeIFrame = function(height) {
        SpiritAccount.Canvas.setSize({
            height: height
        })
    };
    this.fitIFrameToCanvas = function() {
        if (!initFacebookComplete) {
            setTimeout(function() {
                fitIFrameToCanvas()
            }, 50)
        } else {
            var height = getIFrameHeight();
            SpiritAccount.Canvas.setSize({
                height: height
            })
        }
    };
    this.showLoadingDiv = function() {
        config.loadingDivOn = true;
        $("#loading-container").css({
            height: 600,
            display: "block"
        });
        $("#footer").css({
            display: "none"
        })
    };
    this.hideLoadingDiv = function() {
        config.loadingDivOn = false;
        $("#loading-container").css({
            height: 1,
            display: "none"
        });
        $("#footer").fadeIn(330)
    };
    this.showErrorDialog = function(message, isFatalError, showButton) {
        hideFlash();
        showPage();
        if (typeof(isFatalError) == "undefined") {
            isFatalError = false
        }
        if (typeof(showButton) == "undefined") {
            showButton = true
        }
        if (typeof(message) == "undefined") {
            message = Tetris.lang.strings.error_default
        }
        var html = "<div id='main-container'><div id='background-frame-container'><div class='top-third'></div><div class='middle-third'></div><div class='bottom-third'></div></div><div id='failure-container'><div class='error'>" + message + "</div>" + (showButton ? "<div id='failure-button-container'><div class='play-button'></div></div>" : "") + "</div></div>";
        $("#page-container").html(html);
        Tetris.staticBackgroundResize($("#failure-container").height() + 111);
        $("#failure-container").css({
            height: ($("#failure-container").height() + 70)
        });
        if (isFatalError) {
            $(".play-button").click(function() {
                window.top.location = "//" + config.appUrl
            })
        } else {
            $(".play-button").click(function() {
                tabClick("main")
            })
        }
        finishLoad(0, "error")
    };
    this.clearErrorDialog = function() {
        var failureContainer = $("#failure-container");
        if (failureContainer.length) {
            $("#page-container").empty();
            hidePage();
            showFlash()
        }
    };
    this.showBanDialog = function(message) {
        hideFlash();
        showPage();
        var html = "<div id='main-container'><div id='background-frame-container'><div class='top-third'></div><div class='middle-third'></div><div class='bottom-third'></div></div><div id='ban-container'><div class='error'>" + message + "</div></div></div>";
        $("#page-container").html(html);
        Tetris.staticBackgroundResize($("#ban-container").height() + 111);
        finishLoad(0, "error")
    };
    this.showMobilePopup = function() {
        if (!Tetris.mobilePopupVisible) {
            Tetris.mobilePopupVisible = true;
            var html = "<div id='mobile-modal' style='position: relative; visibility: hidden;'><div id='mobile-content'></div><div id='fb-supportmodal-close' style='position: absolute; top: -3px; right: 0;' onclick='Tetris.closeMobilePopup()'></div></div>";
            $("body").append(html);
            $("#mobile-content").load("/payment/mobilebuy.php?access_token=" + config.accessToken + "&ud=" + config.ud + "&fbuid=" + config.userID + "&thirdPartyId=" + config.thirdPartyId + "&locale=" + Tetris.locale + "&lvl=" + config.level + "&currency=" + Tetris.util.getJSON(Tetris.currency) + "&fpc=" + (config.fpc ? 1 : 0) + (Tetris.dtSEC != 0 ? "&dtSEC=" + Tetris.dtSEC : "&cc=" + Tetris.config.flash.countryCode), function() {
                $("#mobile-modal").modal({
                    opacity: 70,
                    overlayCss: {
                        backgroundColor: "#000"
                    },
                    overlayClose: false,
                    focus: true,
                    autoPosition: true,
                    onClose: function() {
                        Tetris.closeMobilePopup()
                    },
                    onShow: function() {
                        $("#mobile-modal").css("visibility", "visible")
                    }
                })
            })
        }
    };
    this.closeMobilePopup = function() {
        Tetris.mobilePopupVisible = false;
        $.modal.close();
        $("#mobile-modal").remove()
    };
    this.toggleReplayWatchButton = function() {
        var replayIdInput = document.getElementById("replay-id-input");
        if (replayIdInput.value == "") {
            $("#replay-watch-btn").addClass("replay-watch-btn-disabled")
        } else {
            $("#replay-watch-btn").removeClass("replay-watch-btn-disabled")
        }
    };
    this.toggleReplayEmbedBox = function() {
        var height = $("#embed-content").css("height");
        if (height == "0px") {
            $("#embed-content").animate({
                height: "100px"
            }, 500)
        } else {
            $("#embed-content").css({
                height: "0"
            })
        }
    };
    this.specialBuyTabLinkClick = function(e, flip, defaultTabName) {
        if (flip) {
            config.buyTab.flipContents = true
        }
        config.buyTab.defaultTabName = defaultTabName;
        if (!e) {
            var e = window.event
        }
        tabClick("buy");
        e.cancelBubble = true;
        e.returnValue = false;
        if (e.stopPropagation) {
            e.stopPropagation();
            e.preventDefault()
        }
        return false
    };
    this.lockTabs = function() {
        this.tabHold = true;
        $("#fb-tabitems").addClass("disabled");
        $("#locale-dropdown").addClass("locale-disabled");
        $("#message-box").addClass("message-box-disabled")
    };
    this.unlockTabs = function() {
        this.tabHold = false;
        $("#fb-tabitems").removeClass("disabled");
        $("#locale-dropdown").removeClass("locale-disabled");
        $("#message-box").removeClass("message-box-disabled")
    };
    this.tabClick = function(tabString, tabOptions) {
        if (tabHold == false && config.underConstruction == false) {
            var tab = tabString;
            tabString = (tabString == "earnfromapp" ? "earn" : tabString);
            tabString = (tabString == "buycoin" ? "buy" : tabString);
            tabOptions = (typeof(tabOptions) != "undefined" ? tabOptions : "");
            var selectedTab = $("#" + tabString);
            if (selectedTab.length) {
                tabHold = true;
                $("#app-container").css({
                    height: "auto"
                });
                config.lastClickedTabName = tabString;
                var prevSelectedTabs = $("#mainnav #fb-tabitems a.selected");
                prevSelectedTabs.removeClass("selected");
                if (selectedTab.parents("#mainnav").length > 0) {
                    selectedTab.addClass("selected");
                    selectedTab.css({
                        textDecoration: "none"
                    })
                }
                if (tabString != "freegifts" && tabString != "message-box" && tabString != "shop" && tabString != "buy" && tabString != "buyCoin" && tabString != "earn" && tabString != "earnfromapp") {
                    hidePage()
                }
                if (tabString != "main" && tabString != "invite" && tabString != "freegifts" && tabString != "message-box" && tabString != "shop" && tabString != "buy" && tabString != "buyCoin" && tabString != "earn" && tabString != "earnfromapp") {
                    hideFlash();
                    showLoadingDiv();
                    fitIFrameToCanvas()
                }
                Tetris.flashObject = Tetris.util.getFlashObject();
                switch (tab) {
                    case "main":
                        finishLoad(0, tabString);
                        Tetris.flashObject.clickToolbar(tab);
                        break;
                    case "invite":
                        Tetris.api.sendInvitePiece([], "invite", "tab");
                        break;
                    case "shop":
                    case "freegifts":
                    case "message-box":
                        if (!(prevSelectedTabs[0]) || (prevSelectedTabs[0].id != "main" && prevSelectedTabs[0].id != "freegifts" && prevSelectedTabs[0].id != "invite" && prevSelectedTabs[0].id != "message-box" && prevSelectedTabs[0].id != "shop")) {
                            hidePage();
                            showFlash()
                        }
                        tabHold = false;
                        if (Tetris.flashObject) {
                            if (tabString == "invite" && (!prevSelectedTabs[0] || prevSelectedTabs[0].id != "invite")) {
                                if (tabOptions == "") {
                                    Tetris.flashObject.inviteFriends()
                                } else {
                                    Tetris.flashObject.inviteFriends(tabOptions[0], tabOptions[1])
                                }
                            } else {
                                if (tabString == "freegifts" && (!prevSelectedTabs[0] || prevSelectedTabs[0].id != "freegifts")) {
                                    Tetris.flashObject.sendGifts()
                                } else {
                                    if (tabString == "message-box") {
                                        Tetris.flashObject.openMessageCenter("");
                                        Tetris.trackEvent(Tetris.config.userID, "MainMenuMsgCenter_Button", {
                                            subtype1: "UI",
                                            subtype2: "Click"
                                        })
                                    } else {
                                        if (tabString == "shop") {
                                            Tetris.flashObject.clickToolbar(tab)
                                        }
                                    }
                                }
                            }
                            fitIFrameToCanvas()
                        }
                        break;
                    case "buycoin":
                    case "buy":
                    case "earn":
                        Tetris.api.facebookTrialPayOfferWall();
                        break;
                    case "earnfromapp":
                        Tetris.api.facebookTrialPayOfferWallFromApplication();
                        break;
                        Tetris.showFeatureDisabledPopup();
                        tabHold = false;
                        break;
                    case "tipsandtricks":
                        Tetris.help.showTipsAndTricks(onPageLoad.tipsandtricks);
                        break;
                    case "terms":
                        $.ajax({
                            url: "./policy/terms.php",
                            dataType: "text",
                            success: Tetris.ajaxPageLoad
                        });
                        break;
                    case "privacy":
                        $.ajax({
                            url: "./policy/privacy.php",
                            dataType: "text",
                            success: Tetris.ajaxPageLoad
                        });
                        break;
                    case "acceptableuse":
                        $.ajax({
                            url: "./policy/acceptableuse.php",
                            dataType: "text",
                            success: Tetris.ajaxPageLoad
                        });
                        break;
                    case "saleterms":
                        $.ajax({
                            url: "./policy/saleterms.php",
                            dataType: "text",
                            success: Tetris.ajaxPageLoad
                        });
                        break;
                    case "replayer":
                        $.ajax({
                            url: "./replayer/play.php?id=" + Tetris.config.replayId,
                            dataType: "text",
                            success: Tetris.ajaxPageLoad
                        });
                        break
                }
                try {
                    if (tabString == "buy") {
                        Tetris.trackEvent(Tetris.config.userID, Tetris.util.ucfirst(tabString) + Tetris.config.houseAds.bucket, {
                            subtype1: "Tab"
                        })
                    } else {
                        Tetris.trackEvent(Tetris.config.userID, Tetris.util.ucfirst(tabString), {
                            subtype1: "Tab"
                        })
                    }
                } catch (ex) {}
            }
        }
    };
    this.ajaxPageLoad = function(html) {
        var tabName = config.lastClickedTabName;
        var ele = $("#page-container")[0];
        $(ele).html(html);
        if (tabName in onPageLoad) {
            onPageLoad[tabName]()
        }
        onPageLoad.defaultOnAll();
        var pageHeight = 0;
        if (tabName == "replayer") {
            pageHeight = 800
        }
        finishLoad(pageHeight, tabName)
    };
    this.finishLoad = function(resizeValue, linkID) {
        hideLoadingDiv();
        if (linkID == "main") {
            showFlash()
        } else {
            showPage()
        }
        if (resizeValue > 0) {
            resizeIFrame(resizeValue + "px")
        } else {
            setTimeout(fitIFrameToCanvas, 50)
        }
        tabHold = false
    };
    this.goToPlayTab = function() {
        if (typeof(Tetris.bootstrap) == "object") {
            Tetris.tabClick("main")
        } else {
            if (typeof(window.parent.Tetris.bootstrap) == "object") {
                window.parent.Tetris.tabClick("main")
            } else {
                window.parent.parent.Tetris.tabClick("main")
            }
        }
    };
    this.staticBackgroundResize = function(height) {
        var middlePartHeight = height - 111;
        $("#background-frame-container .middle-third").css({
            height: middlePartHeight + "px"
        })
    };
    this.getIFrameHeight = function() {
        var targetHeight = 800;
        if (Tetris.platform == "fb") {
            targetHeight = $("#content-wrapper").height() + 95 + (initImpactComplete ? 86 : 0)
        } else {
            targetHeight = ($("#crosspromo-container").css("display") == "none" ? 0 : $("#ad-1").height()) + ($("#minibar-container").is(":hidden") ? 0 : $("#minibar-container").height()) + ($("#main-like") != undefined ? $("#main-like").height() : 0) + ($("#flash-container").css("top") == "0px" ? $("#flash-container").height() : 0) + ($("#page-container").html() == "" ? 0 : $("#page-container").height()) + ($("#loading-container").css("display") == "none" ? 0 : $("#loading-container").height()) + $("#footer").height() + ($("#ad-1").css("display") == "none" ? 0 : $("#ad-1").height()) + ($("#ad-2").css("display") == "none" ? 0 : $("#ad-2").height()) + ($("#ad-3").css("display") == "none" ? 0 : $("#ad-3").height()) + 95
        }
        return targetHeight
    };
    this.onPageLoad = {
        buy: function() {
            $(".fbcredits-form").submit(function() {
                var option = $(this).find("input:checked");
                var data = new Object();
                data.item_id = option.attr("item_id");
                data.price = option.attr("price");
                data.quantity = parseInt(option.val());
                data.title = data.quantity + " @fbcredits_" + data.item_id;
                data.description = "@fbcredits_description_" + data.item_id;
                data.image = config[data.item_id + "Image"];
                var params = option.attr("params");
                Tetris.api.facebookCredits.placeOrder(data, params);
                return false
            })
        },
        earn: function() {
            $("#page-container")[0].innerHTML = '<div id="earn-container" align="center"><img src="' + config.alternateStaticURL + '/graphics/TB_logo_215x190.png"/></div>';
            finishLoad(1290, "earn");
            Tetris.trackPageRequest(Tetris.config.userID, {
                pageAddress: "earn_tab"
            })
        },
        tipsandtricks: function() {
            finishLoad(0, "tipsandtricks");
            Tetris.trackPageRequest(Tetris.config.userID, {
                pageAddress: "tab_tipsandtricks"
            })
        },
        invite: function() {
            $("#page-container")[0].innerHTML = '<div id="earn-container" align="center"><img src="' + config.alternateStaticURL + '/graphics/TB_logo_215x190.png"/></div>';
            finishLoad(800, "invite");
            Tetris.trackPageRequest(Tetris.config.userID, {
                pageAddress: "tab_invite"
            })
        },
        defaultOnAll: function() {}
    };
    this.localeClick = function(locale) {
        try {
            Tetris.trackEvent(Tetris.config.userID, locale, {
                subtype1: "Tab",
                subtype2: "Locale",
                subtype3: "Click"
            })
        } catch (ex) {}
        setTimeout(function() {
            $.ajax({
                type: "GET",
                url: "//" + Tetris.config.apiUrl + "/api/user/updatelocale?fbuid=" + Tetris.config.userID + "&locale=" + locale,
                success: function(response) {
                    SpiritAccount.log(JSON.stringify(response));
                    if (response.locale) {
                        window.top.location = "//" + Tetris.config.appUrl + "?locale=" + response.locale
                    } else {
                        Tetris.tabClick("main")
                    }
                },
                error: Tetris.showErrorDialog,
                dataType: Tetris.config.apiDataType
            })
        }, 250)
    };
    this.activateFlashClick = function() {
        Tetris.trackEvent(Tetris.config.userID, "Click", {
            subtype1: "UI",
            subtype2: "ActivateFlash"
        })
    };
    this.directToFriendGift = function() {
        $.ajax({
            type: "POST",
            url: "//" + config.apiUrl + "/api/gift/dailyRecipients",
            data: {
                fbuid: config.userID
            },
            success: function(response) {
                if ($.inArray("" + config.friendId, response.recipients) === -1) {
                    Tetris.flashObject = Tetris.util.getFlashObject();
                    Tetris.flashObject.sendGifts(config.friendId)
                } else {
                    config.friendId = 0;
                    Tetris.showErrorDialog(Tetris.lang.strings.error_sendGift_alreadySent)
                }
            },
            error: Tetris.showErrorDialog,
            dataType: Tetris.config.apiDataType
        })
    };
    this.processRequests = function() {
        var requestId = config.requestIds[config.requestIds.length - 1];
        if (requestId) {
            Tetris.api.requests.get(requestId + "_" + config.userID, function(response) {
                SpiritAccount.log(response);
                if (response) {
                    var data = response.data.split("|");
                    var rq_data = $.evalJSON(data[0]);
                    var kt_data = "";
                    config.requestData = $.extend(rq_data, kt_data);
                    config.requestData.requestId = response.id;
                    config.requestData.locale = Tetris.locale;
                    if (config.requestData.requestType == "gift") {
                        Tetris.flashObject = Tetris.util.getFlashObject();
                        Tetris.flashObject.openMessageCenter("Notification");
                        Tetris.trackEvent(Tetris.config.userID, "Request", {
                            subtype1: "MesssageCenter",
                            subtype2: "Impression",
                            subtype3: "Notification"
                        })
                    } else {
                        if (config.requestData.requestType == "invite") {
                            Tetris.requests.remove(requestId + "_" + config.userID)
                        }
                    }
                }
            })
        }
    };
    this.finalizeGiftSend = function(apiUrl, params) {
        params.platform = Tetris.platform;
        $.ajax({
            type: "POST",
            url: "//" + apiUrl + "api/gift/send",
            data: params,
            success: function(response) {
                try {
                    SpiritAccount.log("Calling onSendGiftComplete");
                    Tetris.flashObject = Tetris.util.getFlashObject();
                    Tetris.flashObject.onSendGiftComplete(params.recipientList)
                } catch (ex) {
                    SpiritAccount.log("Failure calling onSendGiftComplete");
                    SpiritAccount.log(ex.message)
                }
                Tetris.tabClick("main")
            },
            error: Tetris.showErrorDialog,
            dataType: Tetris.config.apiDataType
        })
    };
    this.finalizeAcceptFeed = function(apiUrl, params, callback) {
        params.platform = Tetris.platform;
        $.ajax({
            type: "POST",
            url: "//" + apiUrl + "api/feed/",
            data: params,
            success: callback,
            error: Tetris.showErrorDialog,
            dataType: Tetris.config.apiDataType
        })
    };
    this.finalizeAcceptWall = function(apiUrl, params, callback) {
        params.platform = Tetris.platform;
        $.ajax({
            type: "POST",
            url: "//" + apiUrl + "api/feed/wall",
            data: params,
            success: callback,
            error: Tetris.showErrorDialog,
            dataType: Tetris.config.apiDataType
        })
    };
    this.finalizeDestructibleLink = function(apiUrl, params, callback) {
        params.platform = Tetris.platform;
        $.ajax({
            type: "POST",
            url: "//" + apiUrl + "api/link/destructable",
            data: params,
            success: callback,
            error: Tetris.showErrorDialog,
            dataType: Tetris.config.apiDataType
        })
    };
    this.showAcceptFeed = function() {
        $("#loading-container").hide();
        $("#main-container").show();
        $("#play-button").hover(function() {
            $(this).addClass("play-button-hover")
        }, function() {
            $(this).removeClass("play-button-hover")
        })
    };
    this.startBattle2p = function() {
        try {
            Tetris.flashObject = Tetris.util.getFlashObject();
            Tetris.flashObject.startGame("battle2p")
        } catch (ex) {}
    };
    this.trackFlashEvent = function(messageType, userId, eventName, optionalParams) {
        if (optionalParams.v) {
            optionalParams.value = optionalParams.v;
            delete optionalParams.v
        }
        if (optionalParams.l) {
            optionalParams.level = optionalParams.l;
            delete optionalParams.l
        }
        if (optionalParams.st1) {
            optionalParams.subtype1 = optionalParams.st1;
            delete optionalParams.st1
        }
        if (optionalParams.st2) {
            optionalParams.subtype2 = optionalParams.st2;
            delete optionalParams.st2
        }
        if (optionalParams.st3) {
            optionalParams.subtype3 = optionalParams.st3;
            delete optionalParams.st3
        }
        switch (messageType) {
            case "gci":
                break;
            case "pst":
                break;
            case "mtu":
                break;
            case "inr":
                break;
            case "evt":
                if (isEventAllowed(eventName, optionalParams)) {
                    this.trackEvent(userId, eventName, optionalParams)
                }
                break
        }
    };
    this.isEventAllowed = function(eventName) {
        var result = false;
        switch (eventName) {}
        return result
    };
    this.genCaptureUserInfo = function(appId, uid) {
        return "kt_capture_user_info_" + appId + "_" + uid
    };
    this.trackApplicationAdded = function(userId, optionalParams, successCallback, validationErrorCallback) {
        if (SpiritAccount && SpiritAccount._ktApi) {}
    };
    this.trackThirdPartyCommClick = function(type, shortUniqueTrackingTag, optionalParams, successCallback, validationErrorCallback) {
        if (SpiritAccount && SpiritAccount._ktApi) {}
    };
    this.trackGoalCount = function(userId, optionalParams, successCallback, validationErrorCallback) {
        if (SpiritAccount && SpiritAccount._ktApi) {}
    };
    this.trackRevenue = function(userId, value, optionalParams, successCallback, validationErrorCallback) {
        if (SpiritAccount && SpiritAccount._ktApi) {}
    };
    this.trackPageRequest = function(userId, optionalParams, successCallback, validationErrorCallback) {
        if (SpiritAccount && SpiritAccount._ktApi) {}
    };
    this.trackUserInformation = function(userId, optionalParams, successCallback, validationErrorCallback) {
        if (SpiritAccount && SpiritAccount._ktApi) {}
    };
    this.trackInviteSent = function(userId, recipientUserIds, uniqueTrackingTag, optionalParams, successCallback, validationErrorCallback) {
        if (SpiritAccount && SpiritAccount._ktApi) {}
    };
    this.trackInviteResponse = function(uniqueTrackingTag, optionalParams, successCallback, validationErrorCallback) {
        if (SpiritAccount && SpiritAccount._ktApi) {}
    };
    this.trackStreamPost = function(userId, uniqueTrackingTag, type, optionalParams, successCallback, validationErrorCallback) {
        if (SpiritAccount && SpiritAccount._ktApi) {}
    };
    this.trackStreamPostResponse = function(uniqueTrackingTag, type, optionalParams, successCallback, validationErrorCallback) {
        if (SpiritAccount && SpiritAccount._ktApi) {}
    };
    this.trackEvent = function(userId, eventName, optionalParams, successCallback, validationErrorCallback) {
        if (SpiritAccount && SpiritAccount._ktApi) {}
        if (SpiritAccount && SpiritAccount.AppEvents) {
            var name = Tetris.convertToAppEventName(eventName);
            var value = null;
            var params = null;
            if (optionalParams != null && typeof optionalParams != "undefined") {
                params = Tetris.util.parseJSON(Tetris.util.getJSON(optionalParams));
                if (params.subtype3) {
                    name = Tetris.convertToAppEventName(params.subtype3) + "-" + name;
                    delete params.subtype3
                }
                if (params.subtype2) {
                    name = Tetris.convertToAppEventName(params.subtype2) + "-" + name;
                    delete params.subtype2
                }
                if (params.subtype1) {
                    name = Tetris.convertToAppEventName(params.subtype1) + "-" + name;
                    delete params.subtype1
                }
                if (params.value) {
                    value = parseInt(params.value);
                    delete params.value
                }
                if (params.ts) {
                    delete params.ts
                }
                if (Tetris.config.install) {
                    params.install = 1
                }
            }
            try {
                SpiritAccount.AppEvents.logEvent(name, value, params)
            } catch (ex) {
                SpiritAccount.log("[ERROR] Could not log AppEvent: " + ex.message)
            }
        }
    };
    this.convertToAppEventName = function(eventName) {
        var name = eventName;
        switch (eventName) {
            case "UserAPIRS":
                name = "LoginComplete";
                break;
            case "BugTracking":
                name = "Tracker";
                break
        }
        return name
    };
    return this
})();
Tetris.api = (function() {
    this.purchaseItemId = -1;
    this.purchaseAmount = -1;
    this.videoAdReward = -1;
    this.videoAdRewardType = "energy";
    this.videoAdVisible = false;
    this.videoAdId = -1;
    this.applifierOffers = null;
    this.applifierOffersCount = 0;
    this.trialpayViewLimit = 5;
    this.trialpayGameCount = -1;
    this.interstitialTimerId = -1;
    this.interstitialTimeMSEC = 0;
    this.interstitialOptimaticAdTime = -1;
    this.interstitialOptimaticStaticAd = false;
    this.interstitialVideoAdProviders = [];
    this.interstitialVideoAdIsPreroll = false;
    this.elapsedLimit = 50;
    this.elapsedProb = 50;
    this.supersonicReady = false;
    this.supersonicArmorReady = false;
    this.supersonicArmorOffers = [];
    this.sponsorpayOffers = [];
    this.sponsorpayTimerId = -1;
    this.dealSpotEnergy1 = false;
    this.dealSpotEnergy2 = false;
    this.dealSpotEnergy3 = false;
    this.dealSpotArmor = false;
    this.dealSpotCash = false;
    this.dealSpot = false;
    this.ebuzzingOpts = {
        tracking: {
            view: function() {
                Tetris.api.ebuzzingOnComplete()
            }
        },
        playerUrlParams: {
            uid: null,
            customparam: null
        }
    };
    this.optimaticAdTime = 15;
    this.refreshBrowser = function(code) {
        code = (typeof(code) != "undefined") ? code : "unknown";
        Tetris.trackEvent(Tetris.config.userID, code, {
            subtype1: "Tracker",
            subtype2: "RefreshBrowser"
        });
        setTimeout(function() {
            window.top.location = config.appURL
        }, 500)
    }, this.redirectToDrop = function(code) {
        code = (typeof(code) != "undefined") ? code : "app_announcement";
        Tetris.api.openWindow("https://apps.facebook.com/tetrisbattledrop/?kt_type=partner&kt_st1=" + code + "&kt_st2=tetrisbattlefb")
    }, this.openWindow = function(url) {
        window.open(url)
    }, this.facebookTrialPayOfferWall = function() {
        TRIALPAY.fb.show_overlay(config.appID, "fbdirect", {
            tp_vendor_id: "2FTKT3KT",
            sid: Tetris.config.thirdPartyId,
            onClose: Tetris.api.offersShowFlash,
            onTransact: Tetris.api.dealspotOfferComplete,
            currency_url: config.staticURL + "opengraph/tp_offer.php?v=2f",
            callback_url: config.staticURL + "api/offer/trialpay",
            order_info: '{"item_id":"cash"}',
            zIndex: 2000
        });
        Tetris.onPageLoad.earn()
    };
    this.facebookTrialPayOfferWallFromApplication = function() {
        TRIALPAY.fb.show_overlay(config.appID, "fbdirect", {
            tp_vendor_id: "2FTKT3KT",
            touchpoint: 2,
            sid: Tetris.config.thirdPartyId,
            onClose: Tetris.api.offersShowFlash,
            onTransact: Tetris.api.dealspotOfferComplete,
            currency_url: config.staticURL + "opengraph/tp_offer.php?v=2f",
            callback_url: config.staticURL + "api/offer/trialpay",
            order_info: '{"item_id":"cash"}',
            zIndex: 2000
        });
        Tetris.onPageLoad.earn()
    };
    this.videoOnOpen = function(id) {
        SpiritAccount.log("videoOnOpen");
        Tetris.api.videoAdId = (typeof(id) != "undefined" ? id : 1);
        try {
            SpiritAccount.log("videoOnOpen - Calling flashObject.dealspotOnOpen - " + Tetris.api.videoAdId);
            Tetris.flashObject = Tetris.util.getFlashObject();
            Tetris.flashObject.dealspotOnOpen(Tetris.api.videoAdId)
        } catch (ex) {}
        hideFlashCallback({
            state: "opened"
        });
        Tetris.api.videoAdVisible = true;
        tabHold = true
    }, this.videoOnClose = function() {
        SpiritAccount.log("videoOnClose");
        Tetris.api.videoAdVisible = false;
        tabHold = false;
        hideFlashCallback({
            state: "closed"
        });
        if (Tetris.api.videoAdReward != -1) {
            try {
                Tetris.api.videoOnReward()
            } catch (ex) {}
            Tetris.api.videoAdId = -1;
            Tetris.api.videoAdReward = -1
        }
    }, this.videoOnComplete = function() {
        SpiritAccount.log("videoOnComplete");
        if (!Tetris.api.videoAdVisible) {
            try {
                Tetris.api.videoOnReward()
            } catch (ex) {}
            Tetris.api.videoAdId = -1;
            Tetris.api.videoAdReward = -1
        }
    }, this.videoOnReward = function() {
        if (Tetris.api.videoAdId > 0) {
            if (Tetris.api.videoAdRewardType == "energy" || Tetris.api.videoAdRewardType == "armor" || Tetris.api.videoAdRewardType == "gatcha") {
                SpiritAccount.log("videoOnReward - Calling flashObject.dealspotItemComplete - " + Tetris.api.videoAdId);
                Tetris.flashObject = Tetris.util.getFlashObject();
                Tetris.flashObject.dealspotItemComplete(Tetris.api.videoAdId)
            }
        }
    }, this.dealspotHideFlash = function() {
        SpiritAccount.log("dealspotHideFlash");
        videoOnOpen(1);
        $("#trialpay-banner").css({
            position: "relative",
            top: -99999
        })
    }, this.dealspotShowFlash = function() {
        SpiritAccount.log("dealspotShowFlash");
        videoOnClose();
        $("#trialpay-banner").css({
            position: "relative",
            top: 0
        })
    }, this.dealspotItemComplete = function(obj) {
        SpiritAccount.log("dealspotItemComplete");
        Tetris.api.videoAdReward = (obj.completions && obj.completions > 0) ? 1 : 0;
        videoOnComplete()
    }, this.dealspotHideFlash2 = function() {
        SpiritAccount.log("dealspotHideFlash2");
        videoOnOpen(2)
    }, this.dealspotShowFlash2 = function() {
        SpiritAccount.log("dealspotShowFlash2");
        videoOnClose()
    }, this.dealspotItemComplete2 = function(obj) {
        SpiritAccount.log("dealspotItemComplete2");
        Tetris.api.videoAdReward = (obj.completions && obj.completions > 0) ? 1 : 0;
        videoOnComplete()
    }, this.dealspotHideFlash3 = function() {
        SpiritAccount.log("dealspotHideFlash3");
        videoOnOpen(7)
    }, this.dealspotShowFlash3 = function() {
        SpiritAccount.log("dealspotShowFlash3");
        videoOnClose()
    }, this.dealspotItemComplete3 = function(obj) {
        SpiritAccount.log("dealspotItemComplete3");
        Tetris.api.videoAdReward = (obj.completions && obj.completions > 0) ? 1 : 0;
        videoOnComplete()
    }, this.dealspotHideFlash4 = function() {
        SpiritAccount.log("dealspotHideFlash4");
        videoOnOpen(13)
    }, this.dealspotShowFlash4 = function() {
        SpiritAccount.log("dealspotShowFlash4");
        videoOnClose()
    }, this.dealspotItemComplete4 = function(obj) {
        SpiritAccount.log("dealspotItemComplete4");
        Tetris.api.videoAdReward = (obj.completions && obj.completions > 0) ? 1 : 0;
        videoOnComplete()
    }, this.dealspotHideFlash5 = function() {
        SpiritAccount.log("dealspotHideFlash5");
        videoOnOpen(27)
    }, this.dealspotShowFlash5 = function() {
        SpiritAccount.log("dealspotShowFlash5");
        videoOnClose()
    }, this.dealspotItemComplete5 = function(obj) {
        SpiritAccount.log("dealspotItemComplete5");
        try {
            Tetris.flashObject = Tetris.util.getFlashObject();
            Tetris.flashObject.dealspotNoticeUnavailable()
        } catch (ex) {}
        Tetris.api.videoAdReward = (obj.completions && obj.completions > 0) ? 1 : 0;
        videoOnComplete()
    }, this.dealspotHideFlash6 = function() {
        SpiritAccount.log("dealspotHideFlash6");
        videoOnOpen(28)
    }, this.dealspotShowFlash6 = function() {
        SpiritAccount.log("dealspotShowFlash6");
        videoOnClose()
    }, this.dealspotItemComplete6 = function(obj) {
        SpiritAccount.log("dealspotItemComplete6");
        try {
            Tetris.flashObject = Tetris.util.getFlashObject();
            Tetris.flashObject.dealspotNoticeUnavailable()
        } catch (ex) {}
        Tetris.api.videoAdReward = (obj.completions && obj.completions > 0) ? 1 : 0;
        videoOnComplete()
    }, this.dealspotItemAvailable = function() {
        SpiritAccount.log("dealspotItemAvailable")
    }, this.dealspotItemUnavailable = function() {
        SpiritAccount.log("dealspotItemUnavailable")
    }, this.dealspotItemAvailableEnergy1 = function() {
        SpiritAccount.log("dealspotItemAvailableEnergy1");
        this.dealSpotEnergy1 = true
    }, this.dealspotItemUnavailableEnergy1 = function() {
        SpiritAccount.log("dealspotItemUnavailableEnergy1");
        this.dealSpotEnergy1 = false
    }, this.dealspotItemAvailableEnergy2 = function() {
        SpiritAccount.log("dealspotItemAvailableEnergy2");
        this.dealSpotEnergy2 = true
    }, this.dealspotItemUnavailableEnergy2 = function() {
        SpiritAccount.log("dealspotItemUnavailableEnergy2");
        this.dealSpotEnergy2 = false
    }, this.dealspotItemAvailableEnergy3 = function() {
        SpiritAccount.log("dealspotItemAvailableEnergy3");
        this.dealSpotEnergy3 = true
    }, this.dealspotItemUnavailableEnergy3 = function() {
        SpiritAccount.log("dealspotItemUnavailableEnergy3");
        this.dealSpotEnergy3 = false
    }, this.dealspotItemAvailableEnergyNotice = function() {
        SpiritAccount.log("dealspotItemAvailableEnergyNotice");
        this.dealSpotEnergy4 = true
    }, this.dealspotItemUnavailableEnergyNotice = function() {
        SpiritAccount.log("dealspotItemUnavailableEnergyNotice");
        try {
            Tetris.flashObject = Tetris.util.getFlashObject();
            Tetris.flashObject.dealspotNoticeUnavailable()
        } catch (ex) {
            SpiritAccount.log("ERROR CALLBACK: " + ex.message)
        }
        this.dealSpotEnergy4 = false
    }, this.dealspotItemAvailableArmor = function() {
        SpiritAccount.log("dealspotItemAvailableArmor");
        this.dealSpotArmor = true
    }, this.dealspotItemUnavailableArmor = function() {
        SpiritAccount.log("dealspotItemUnavailableArmor");
        this.dealSpotArmor = true
    }, this.dealspotItemAvailableArmorNotice = function() {
        SpiritAccount.log("dealspotItemAvailableArmorNotice");
        this.dealSpotArmor2 = true
    }, this.dealspotItemUnavailableArmorNotice = function() {
        SpiritAccount.log("dealspotItemUnavailableArmorNotice");
        try {
            Tetris.flashObject = Tetris.util.getFlashObject();
            Tetris.flashObject.dealspotNoticeUnavailable()
        } catch (ex) {
            SpiritAccount.log("ERROR CALLBACK: " + ex.message)
        }
        this.dealSpotArmor2 = true
    }, this.dealspotItemAvailableCashNotice = function() {
        SpiritAccount.log("dealspotItemAvailableCashNotice");
        this.dealSpotCash = true;
        try {
            Tetris.flashObject = Tetris.util.getFlashObject();
            Tetris.flashObject.OnTrialpayCashReady()
        } catch (ex) {
            SpiritAccount.log("ERROR CALLBACK: " + ex.message)
        }
    }, this.dealspotItemUnavailableCashNotice = function() {
        SpiritAccount.log("dealspotItemUnavailableCashNotice");
        try {
            Tetris.flashObject = Tetris.util.getFlashObject();
            Tetris.flashObject.dealspotNoticeUnavailable()
        } catch (ex) {
            SpiritAccount.log("ERROR CALLBACK: " + ex.message)
        }
    }, this.dealspotAvailable = function() {
        SpiritAccount.log("dealspotAvailable");
        this.dealSpot = true;
        setTimeout(function() {
            try {
                Tetris.flashObject = Tetris.util.getFlashObject();
                Tetris.flashObject.OnDealspotReady()
            } catch (ex) {
                SpiritAccount.log("ERROR CALLBACK: " + ex.message)
            }
        }, 1500)
    }, this.dealspotUnavailable = function() {
        SpiritAccount.log("dealspotUnavailable");
        try {
            Tetris.flashObject = Tetris.util.getFlashObject();
            Tetris.flashObject.OnDealspotUnavailable()
        } catch (ex) {
            SpiritAccount.log("ERROR CALLBACK: " + ex.message)
        }
    }, this.dealspotAvailableCash = function() {
        SpiritAccount.log("dealspotAvailableCash");
        this.dealSpotCash = true;
        setTimeout(function() {
            try {
                Tetris.flashObject = Tetris.util.getFlashObject();
                Tetris.flashObject.OnDealspotCashReady()
            } catch (ex) {
                SpiritAccount.log("ERROR CALLBACK: " + ex.message)
            }
        }, 250)
    }, this.dealspotUnavailableCash = function() {
        SpiritAccount.log("dealspotUnavailableCash");
        try {
            Tetris.flashObject = Tetris.util.getFlashObject();
            Tetris.flashObject.OnDealspotCashUnavailable()
        } catch (ex) {
            SpiritAccount.log("ERROR CALLBACK: " + ex.message)
        }
    }, this.getDealSpotEnergy1 = function() {
        return (this.dealSpotEnergy1 ? 1 : 0)
    }, this.getDealSpotEnergy2 = function() {
        return (this.dealSpotEnergy2 ? 1 : 0)
    }, this.getDealSpotEnergy3 = function() {
        return (this.dealSpotEnergy3 ? 1 : 0)
    }, this.getDealSpotEnergy4 = function() {
        return (this.dealSpotEnergy4 ? 1 : 0)
    }, this.getDealSpotArmor = function() {
        return (this.dealSpotArmor ? 1 : 0)
    }, this.getDealSpotCash = function() {
        SpiritAccount.log("getDealSpotCash - " + this.dealSpotCash);
        return (this.dealSpotCash ? 1 : 0)
    }, this.getDealSpot = function() {
        SpiritAccount.log("getDealSpot - " + this.dealSpot);
        return (this.dealSpot ? 1 : 0)
    }, this.dealspotOfferComplete = function(obj) {
        SpiritAccount.log("dealspotOfferComplete");
        try {
            Tetris.flashObject = Tetris.util.getFlashObject();
            Tetris.flashObject.cashPurchaseComplete(false)
        } catch (ex) {}
    }, this.trialpayOnUnavailable = function(obj) {
        SpiritAccount.log("trialpayOnUnavailable");
        $("#trialpay-container").css({
            height: 1,
            overflow: "hidden"
        })
    }, this.trialpayOnAvailable = function(obj) {
        SpiritAccount.log("trialpayOnAvailable");
        $("#trialpay-container").css({
            height: "auto",
            overflow: "visible"
        })
    }, this.trialpayOnComplete = function(obj) {
        SpiritAccount.log("trialpayOnComplete");
        try {
            Tetris.flashObject = Tetris.util.getFlashObject();
            Tetris.flashObject.cashPurchaseComplete(false);
            var cookie = getCookie("tp_banner_" + config.userID);
            if (!cookie) {
                cookie = 0
            }
            cookie = parseInt(cookie) + 1;
            setDailyCookie("tp_banner_" + config.userID, cookie, 1);
            if (cookie < Tetris.api.trialpayViewLimit) {
                Tetris.api.trialpayGameCount = 1
            } else {
                Tetris.api.trialpayOnUnavailable()
            }
        } catch (ex) {}
    }, this.jungroupOnOpen = function(id, rewardType) {
        SpiritAccount.log("jungroupOnOpen");
        Tetris.api.videoAdId = (typeof(id) != "undefined" ? id : 3);
        Tetris.api.videoAdRewardType = (typeof(rewardType) != "undefined" ? rewardType : "energy");
        videoOnOpen(Tetris.api.videoAdId);
        var videoUrl = "https://embed.jungroup.com/embedded_videos/catalog_frame?uid=" + config.thirdPartyId + "&site=Tetris+Battle&pid=" + config.jungroupPID + "&sub_id=" + Tetris.util.getOrderId("JG_") + "&partner_code=" + Tetris.api.videoAdRewardType + "&reward" + +Tetris.api.videoAdRewardType;
        var videoModal = '<div id="video-ad-modal" class="jungroup-modal"><div  id="video-ad-content"><div id="video-ad-header">Earn Your Free Item</div><iframe id="video-ad-modal-iframe" scrolling="no" frameborder="0" style="border: 1px solid #ccc; border-width: 1px 0; overflow: hidden;" allowTransparency="true"></iframe><br /><a id="video-ad-close-button" href="javascript:void(0)" onclick="jungroupOnClose()">Close</a><div class="clear"></div></div></div>';
        $("body").append(videoModal);
        $("#video-ad-modal").modal({
            opacity: 70,
            overlayCss: {
                backgroundColor: "#000"
            },
            overlayClose: false,
            focus: true,
            autoPosition: true,
            onShow: function() {
                $("#video-ad-modal-iframe").attr("src", videoUrl)
            }
        })
    }, this.jungroupOnClose = function() {
        SpiritAccount.log("jungroupOnClose");
        $.modal.close();
        $("#video-ad-modal").css({
            visibility: "hidden"
        });
        setTimeout(function() {
            $("#video-ad-modal").remove()
        }, 500);
        videoOnClose()
    }, this.jungroupOnComplete = function() {
        SpiritAccount.log("jungroupOnComplete");
        Tetris.api.videoAdReward = 1;
        $("#video-ad-message").html("Congratulations! You have earned your free " + Tetris.api.videoAdRewardType + ".");
        videoOnComplete()
    }, this.supersonicOnReady = function() {
        SpiritAccount.log("supersonicOnReady");
        Tetris.api.supersonicReady = true
    };
    this.supersonicIsAvailable = function() {
        SpiritAccount.log("supersonicIsAvailable - " + Tetris.api.supersonicReady);
        return (Tetris.api.supersonicReady ? "1" : "0")
    };
    this.supersonicOnOpen = function(id, rewardType) {
        SpiritAccount.log("supersonicOnOpen");
        Tetris.api.videoAdId = (typeof(id) != "undefined" ? id : 5);
        Tetris.api.videoAdRewardType = (typeof(rewardType) != "undefined" ? rewardType : "energy");
        videoOnOpen(Tetris.api.videoAdId);
        Tetris.ironRVEnergy.show()
    };
    this.supersonicOnShow = function() {
        SpiritAccount.log("supersonicOnShow")
    };
    this.supersonicOnClose = function() {
        SpiritAccount.log("supersonicOnClose");
        videoOnClose()
    };
    this.supersonicOnComplete = function() {
        SpiritAccount.log("supersonicOnComplete");
        Tetris.api.videoAdReward = 1;
        $("#video-ad-message").html("Congratulations! You have earned your free energy.");
        videoOnComplete()
    };
    this.supersonicOnDone = function() {
        SpiritAccount.log("supersonicOnDone");
        Tetris.api.supersonicReady = false
    };
    this.supersonicArmorOnReady = function() {
        SpiritAccount.log("supersonicArmorOnReady");
        Tetris.api.supersonicArmorReady = true;
        setTimeout(function() {
            try {
                Tetris.flashObject = Tetris.util.getFlashObject();
                Tetris.flashObject.OnArmorReady(null)
            } catch (ex) {
                SpiritAccount.log("ERROR CALLBACK: " + ex.message)
            }
        }, 250)
    };
    this.supersonicArmorIsAvailable = function() {
        SpiritAccount.log("supersonicArmorIsAvailable - " + Tetris.api.supersonicArmorReady);
        return (Tetris.api.supersonicArmorReady ? "1" : "0")
    };
    this.supersonicArmorOnOpen = function(id, rewardType) {
        SpiritAccount.log("supersonicArmorOnOpen");
        Tetris.api.videoAdId = (typeof(id) != "undefined" ? id : 7000);
        Tetris.api.videoAdRewardType = (typeof(rewardType) != "undefined" ? rewardType : "armor");
        videoOnOpen(Tetris.api.videoAdId);
        Tetris.ironRVArmor.show()
    };
    this.supersonicArmorOnShow = function() {
        SpiritAccount.log("supersonicArmorOnShow")
    };
    this.supersonicArmorOnClose = function() {
        SpiritAccount.log("supersonicArmorOnClose");
        videoOnClose()
    };
    this.supersonicArmorOnComplete = function() {
        SpiritAccount.log("supersonicArmorOnComplete");
        Tetris.api.videoAdReward = 1;
        $("#video-ad-message").html("Congratulations! You have earned your free energy.");
        videoOnComplete()
    };
    this.supersonicArmorOnDone = function() {
        SpiritAccount.log("supersonicArmorOnDone");
        Tetris.api.supersonicArmorReady = false
    };
    this.sponsorpayOnReady = function(response, rewardType) {
        SpiritAccount.log("sponsorpayOnReady");
        SpiritAccount.log(new Array(response, rewardType));
        Tetris.api.sponsorpayOffers[rewardType] = response;
        if (response == false) {
            clearInterval(Tetris.api.sponsorpayTimerId);
            Tetris.api.sponsorpayTimerId = -1
        } else {
            if (rewardType == "armor") {
                setTimeout(function() {
                    try {
                        Tetris.flashObject = Tetris.util.getFlashObject()
                    } catch (ex) {
                        SpiritAccount.log("ERROR CALLBACK: " + ex.message)
                    }
                }, 5000)
            }
        }
    };
    this.sponsorpayIsAvailable = function(rewardType) {
        SpiritAccount.log("sponsorpayIsAvailable");
        var result = false;
        if (typeof(Tetris.api.sponsorpayOffers[rewardType]) != "undefined") {
            result = (Tetris.api.sponsorpayOffers[rewardType]) ? "1" : "0"
        }
        return result
    };
    this.sponsorpayOnRefresh = function() {
        SpiritAccount.log("sponsorpayOnRefresh");
        try {
            if (!Tetris.api.videoAdVisible) {
                if (typeof(Tetris._sp_video_energy) != "undefined") {
                    Tetris._sp_video_energy.backgroundLoad()
                }
                if (typeof(Tetris._sp_video_armor) != "undefined") {
                    Tetris._sp_video_armor.backgroundLoad()
                }
                if (typeof(Tetris._sp_video_gatcha) != "undefined") {
                    Tetris._sp_video_gatcha.backgroundLoad()
                }
            }
        } catch (ex) {}
    };
    this.sponsorpayOnOpen = function(id, rewardType) {
        SpiritAccount.log("sponsorpayOnOpen - " + rewardType);
        Tetris.api.videoAdId = (typeof(id) != "undefined" ? id : 10);
        Tetris.api.videoAdRewardType = (typeof(rewardType) != "undefined" ? rewardType : "energy");
        if (Tetris.api.sponsorpayIsAvailable(rewardType) == "1") {
            videoOnOpen(Tetris.api.videoAdId);
            try {
                if (rewardType == "gatcha") {
                    Tetris._sp_video_gatcha.showVideo()
                } else {
                    if (rewardType == "energy") {
                        Tetris._sp_video_energy.showVideo()
                    } else {
                        Tetris._sp_video_armor.showVideo()
                    }
                }
            } catch (ex) {
                SpiritAccount.log(ex.message)
            }
        } else {
            SpiritAccount.log("NO OFFER");
            Tetris.api.sponsorpayOnClose()
        }
    };
    this.sponsorpayOnClose = function() {
        SpiritAccount.log("sponsorpayOnClose");
        $.modal.close();
        $("#video-ad-modal").remove();
        if (Tetris.api.videoAdRewardType == "gatcha") {
            Tetris._sp_video_gatcha.backgroundLoad()
        } else {
            if (Tetris.api.videoAdRewardType == "energy") {
                Tetris._sp_video_energy.backgroundLoad()
            } else {
                Tetris._sp_video_armor.backgroundLoad()
            }
        }
        videoOnClose()
    };
    this.sponsorpayOnComplete = function() {
        SpiritAccount.log("sponsorpayOnComplete");
        Tetris.api.videoAdReward = 1;
        videoOnComplete()
    };
    this.ebuzzingOnReady = function(response) {
        SpiritAccount.log("ebuzzingOnReady")
    };
    this.ebuzzingIsAvailable = function() {
        SpiritAccount.log("ebuzzingIsAvailable");
        ebuzzing.getHasDeal({
            site_id: Tetris.config.ebuzzingSiteId,
            uid: Tetris.config.thirdPartyId
        }, function(adsAvailabilityBool) {
            SpiritAccount.log("ebuzzingIsAvailable:  " + (adsAvailabilityBool ? 1 : 0));
            try {
                Tetris.flashObject = Tetris.util.getFlashObject();
                if (Tetris.flashObject) {
                    Tetris.flashObject.ebuzzingReady((adsAvailabilityBool ? 1 : 0))
                }
            } catch (ex) {}
        })
    };
    this.ebuzzingOnOpen = function(id, rewardType) {
        SpiritAccount.log("ebuzzingOnOpen");
        Tetris.api.videoAdId = (typeof(id) != "undefined" ? id : 5);
        Tetris.api.videoAdRewardType = (typeof(rewardType) != "undefined" ? rewardType : "energy");
        videoOnOpen(Tetris.api.videoAdId);
        var videoModal = '<div id="video-ad-modal" class="ebuzzing-modal"><div  id="video-ad-content"><div id="video-ad-header">Earn Your Free Item</div><div id="video-ad-modal-div" scrolling="no" frameborder="0" style="position: relative; border: 1px solid #ccc; border-width: 1px 0; width: 700px; height: 500px; top: 7px; left: 50px" allowTransparency="true"></div><br /><div id="video-ad-message" style="visibility: hidden"></div><a id="video-ad-close-button" href="javascript:void(0)" onclick="ebuzzingOnClose()">Close</a><div class="clear"></div></div></div>';
        $("body").append(videoModal);
        $("#video-ad-modal").modal({
            opacity: 70,
            overlayCss: {
                backgroundColor: "#000"
            },
            overlayClose: false,
            focus: true,
            autoPosition: true,
            onShow: function() {
                Tetris.api.ebuzzingOpts.playerUrlParams.uid = Tetris.config.thirdPartyId;
                Tetris.api.ebuzzingOpts.playerUrlParams.customparam = (Tetris.config.thirdPartyId + "," + Tetris.api.videoAdRewardType);
                ebuzzing.showFeedChannel(Tetris.config.ebuzzingSiteId, "video-ad-modal-div", Tetris.api.ebuzzingOpts)
            }
        })
    };
    this.ebuzzingOnClose = function() {
        SpiritAccount.log("ebuzzingOnClose");
        $.modal.close();
        $("#video-ad-modal").css({
            visibility: "hidden"
        });
        setTimeout(function() {
            $("#video-ad-modal").remove()
        }, 500);
        setTimeout("Tetris.api.videoOnClose();", 100)
    };
    this.ebuzzingOnComplete = function() {
        SpiritAccount.log("ebuzzingOnComplete");
        Tetris.api.videoAdReward = 1;
        $("#video-ad-message").html("Congratulations! You have earned your free " + Tetris.api.videoAdRewardType + ".");
        $("#video-ad-message").css("visibility", "visible");
        videoOnComplete()
    };
    this.applifierOnReady = function() {
        SpiritAccount.log("applifierOnReady");
        Applifier.impact.prepare(function(err, data) {
            SpiritAccount.log("camp length" + data.campaigns.length);
            Tetris.flashObject = Tetris.util.getFlashObject();
            if (err) {
                Tetris.flashObject.applifierReady(false)
            } else {
                if (data.campaigns.length > 0) {
                    if (Tetris.api.applifierOffers == null) {
                        try {
                            Tetris.trackEvent(Tetris.config.userID, "Impression", {
                                subtype1: "Applifier",
                                subtype2: "Armor"
                            })
                        } catch (ex) {}
                    }
                    Tetris.api.applifierOffers = data.campaigns;
                    Tetris.api.applifierOffersLength = data.campaigns.length
                } else {
                    Tetris.api.applifierOffers = []
                }
                Tetris.flashObject.applifierReady(Tetris.api.applifierIsAvailable())
            }
        })
    };
    this.applifierIsAvailable = function(rewardType) {
        SpiritAccount.log("applifierIsAvailable");
        return (Tetris.api.applifierOffers.length > 0)
    };
    this.applifierOnRefresh = function() {
        SpiritAccount.log("applifierOnRefresh");
        try {
            if (!Tetris.api.videoAdVisible) {
                Tetris.api.applifierOnReady()
            }
        } catch (ex) {}
    };
    this.applifierOnStart = function() {
        SpiritAccount.log("applifierOnStart");
        try {
            Tetris.trackEvent(Tetris.config.userID, "Watch", {
                subtype1: "Applifier",
                subtype2: "Armor"
            })
        } catch (ex) {}
    };
    this.applifierOnOpen = function() {
        SpiritAccount.log("applifierOnOpen");
        if (!Tetris.api.videoAdVisible) {
            Tetris.api.videoAdId = (typeof(id) != "undefined" ? id : 19);
            Tetris.api.videoAdRewardType = (typeof(rewardType) != "undefined" ? rewardType : "armor");
            videoOnOpen(Tetris.api.videoAdId);
            $(".ad-container > iframe").css({
                position: "relative",
                top: -9999
            });
            Applifier.impact.open()
        }
    };
    this.applifierOnShow = function() {
        SpiritAccount.log("applifierOnShow")
    };
    this.applifierOnClose = function() {
        SpiritAccount.log("applifierOnClose");
        $(".ad-container > iframe").css({
            top: 0
        });
        videoOnClose();
        Tetris.api.applifierOnRefresh()
    };
    this.applifierOnComplete = function() {
        SpiritAccount.log("applifierOnComplete");
        Tetris.api.videoAdReward = 1;
        videoOnComplete()
    };
    this.applifierHideFlash = function() {
        SpiritAccount.log("applifierOnClose")
    };
    this.applifierShowFlash = function() {
        SpiritAccount.log("applifierOnClose")
    };
    this.interstitialOnOpen = function(params) {
        SpiritAccount.log("interstitialOnOpen1");
        if (($.inArray(Tetris.config.eaLevel, Tetris.interstitialIntervals.eaLevels) >= 0) && Tetris.config.level >= Tetris.interstitialIntervals.levelThreshold) {
            SpiritAccount.log("interstitialOnOpen2");
            hideFlashCallback({
                state: "opened"
            });
            Tetris.api.videoAdVisible = true;
            var adUrl = "//" + Tetris.config.advertisingPartialURL + "interstitial1" + (SpiritAccount._isHttps() ? "_ssl" : "") + ".html";
            var adModal = '<div id="interstitial-modal"><div id="video-ad-content"><div id="interstitial-sponser-message">' + Tetris.lang.strings.textfields_intStaticAdTitle + '</div><a id="interstitial-close-button" href="javascript:void(0)" onclick="interstitialOnClose(true)" style="display: none"></a><iframe id="interstitial-ad-modal-iframe" scrolling="no" frameborder="0" style="border: 1px solid #ccc; overflow: hidden;" allowTransparency="true"></iframe><br /><div id="interstitial-ad-message-container"><div id="interstitial-ad-message">' + Tetris.lang.strings.textfields_intStaticAdUpsell + '</div></div><div id="interstitial-message"></div><div class="clear"></div></div></div>';
            $("body").append(adModal);
            $("#interstitial-modal").modal({
                opacity: 70,
                overlayCss: {
                    backgroundColor: "#000"
                },
                overlayClose: false,
                focus: true,
                autoPosition: true,
                escClose: false,
                onShow: function() {
                    $("#interstitial-ad-modal-iframe").attr("src", adUrl);
                    Tetris.api.interstitialTimeMSEC = Tetris.util.getNow();
                    Tetris.api.interstitialTimerId = setInterval(Tetris.api.interstitialOnTick, 500);
                    Tetris.trackEvent(Tetris.config.userID, Tetris.gameMode, {
                        subtype1: "AdStaticPopup",
                        subtype2: "Impression"
                    })
                }
            });
            $("#interstitial-ad-message-container").click(function() {
                Tetris.api.interstitialOnClose();
                Tetris.trackEvent(Tetris.config.userID, Tetris.gameMode, {
                    subtype1: "AdStaticPopup",
                    subtype2: "NoAds"
                });
                setTimeout("Tetris.tabClick('buy');", 100)
            });
            var topPos = $("#mainnav").position();
            var position = $("#simplemodal-container").position();
            $("#simplemodal-container").css("top", (position.top - (topPos.top + 10)))
        }
    };
    this.interstitialOnTick = function() {
        var timeShowClose = (Tetris.interstitialIntervals.showCloseByBucket[(Tetris.config.abID - 1)] ? Tetris.interstitialIntervals.showCloseByBucket[(Tetris.config.abID - 1)] : 3000);
        var timeAutoClose = (Tetris.interstitialIntervals.autoCloseByBucket[(Tetris.config.abID - 1)] ? Tetris.interstitialIntervals.autoCloseByBucket[(Tetris.config.abID - 1)] : 10000);
        var timeDiff = Tetris.util.getNow() - Tetris.api.interstitialTimeMSEC;
        var isClosed = false;
        if (Tetris.interstitialIntervals.isVideo && !Tetris.api.interstitialOptimaticStaticAd && (timeDiff >= (Tetris.optimaticTimeout * 1000)) && Tetris.api.interstitialOptimaticAdTime <= 0) {
            Tetris.api.interstitialOptimaticAdTime = 1
        }
        if (isClosed == false) {
            if (Tetris.api.interstitialOptimaticAdTime > 0) {
                timeShowClose = Tetris.api.interstitialOptimaticAdTime * 1000
            }
            if (timeShowClose != -1 && timeShowClose <= timeDiff) {
                $("#interstitial-message").hide();
                $("#interstitial-close-button").show();
                if (Tetris.interstitialIntervals.isVideo) {
                    $("#interstitial-ad-message-container").show();
                    $("#interstitial-video-ad-message").show()
                }
            } else {
                var msg = Tetris.lang.strings.textfields_intStaticAdCloseIn;
                var secondsLeft = parseInt(Math.ceil((timeShowClose - timeDiff) / 1000));
                if (secondsLeft > 0) {
                    if (Tetris.interstitialIntervals.isVideo) {
                        $("#interstitial-message").html("Disable ads with any purchase of Tetris Cash or Coins")
                    } else {
                        $("#interstitial-message").html(msg.replace("[#sec#]", secondsLeft))
                    }
                }
            }
            if (timeAutoClose != -1 && timeAutoClose <= timeDiff) {
                Tetris.api.interstitialOnClose()
            }
        }
    };
    this.interstitialOnClose = function(trackClick) {
        SpiritAccount.log("interstitialOnClose");
        if (Tetris.interstitialIntervals.isVideo) {
            Tetris.api.interstitialOptimaticAdTime = 0;
            Tetris.api.interstitialOptimaticStaticAd = false
        }
        trackClick = (typeof(trackClick) == "undefined" ? false : trackClick);
        clearInterval(Tetris.api.interstitialTimerId);
        Tetris.api.interstitialTimerId = -1;
        Tetris.api.videoAdVisible = false;
        if (trackClick) {
            Tetris.trackEvent(Tetris.config.userID, Tetris.gameMode, {
                subtype1: (Tetris.interstitialIntervals.isVideo ? "AdVideoPopup" : "AdStaticPopup"),
                subtype2: "Close"
            })
        }
        Tetris.initAdvertisements();
        hideFlashCallback({
            state: "closed"
        });
        Tetris.flashObject = Tetris.util.getFlashObject();
        if (Tetris.flashObject) {
            try {
                setTimeout(function() {
                    Tetris.api.interstitialVideoFlashCallback((Tetris.interstitialIntervals.isVideo ? 1 : 0))
                }, 150)
            } catch (ex) {
                Tetris.trackEvent(Tetris.config.userID, "NoFlashCallback", {
                    subtype1: (Tetris.interstitialIntervals.isVideo ? "AdVideoPopup" : "AdStaticPopup"),
                    subtype2: "Impression"
                })
            }
        } else {
            Tetris.trackEvent(Tetris.config.userID, "NoFlashObject", {
                subtype1: (Tetris.interstitialIntervals.isVideo ? "AdVideoPopup" : "AdStaticPopup"),
                subtype2: "Impression"
            })
        }
        $.modal.close();
        $((Tetris.interstitialIntervals.isVideo ? "#interstitial-video-ad-modal" : "#interstitial-modal")).remove()
    };
    this.interstitialOnCloseDelayed = function(trackClick, timeToDelay) {
        SpiritAccount.log("interstitialOnClose");
        if (Tetris.interstitialIntervals.isVideo) {
            Tetris.api.interstitialOptimaticAdTime = 0;
            Tetris.api.interstitialOptimaticStaticAd = false
        }
        trackClick = (typeof(trackClick) == "undefined" ? false : trackClick);
        interstitialId = (Tetris.interstitialIntervals.isVideo ? "#interstitial-video-ad-modal" : "#interstitial-modal");
        clearInterval(Tetris.api.interstitialTimerId);
        Tetris.api.interstitialTimerId = -1;
        Tetris.api.videoAdVisible = false;
        if (trackClick) {
            Tetris.trackEvent(Tetris.config.userID, Tetris.gameMode, {
                subtype1: (Tetris.interstitialIntervals.isVideo ? "AdVideoPopup" : "AdStaticPopup"),
                subtype2: "Close"
            })
        }
        Tetris.initAdvertisements();
        hideFlashCallback({
            state: "closed"
        });
        Tetris.flashObject = Tetris.util.getFlashObject();
        if (Tetris.flashObject) {
            try {
                setTimeout(function() {
                    Tetris.api.interstitialVideoFlashCallback((Tetris.interstitialIntervals.isVideo ? 1 : 0))
                }, 150)
            } catch (ex) {
                Tetris.trackEvent(Tetris.config.userID, "NoFlashCallback", {
                    subtype1: (Tetris.interstitialIntervals.isVideo ? "AdVideoPopup" : "AdStaticPopup"),
                    subtype2: "Impression"
                })
            }
        } else {
            Tetris.trackEvent(Tetris.config.userID, "NoFlashObject", {
                subtype1: (Tetris.interstitialIntervals.isVideo ? "AdVideoPopup" : "AdStaticPopup"),
                subtype2: "Impression"
            })
        }
        $(interstitialId).hide();
        $("#simplemodal-overlay").hide();
        setTimeout(function() {
            $.modal.close();
            $(interstitialId).remove()
        }, timeToDelay)
    };
    this.interstitialSetTimeout = function(duration) {
        Tetris.api.interstitialOptimaticAdTime = (duration + Tetris.api.optimaticAdTime)
    };
    this.interstitialExtendTimeout = function(duration) {
        var timeDiffSEC = (Tetris.util.getNow() - Tetris.api.interstitialTimeMSEC) / 1000;
        Tetris.api.interstitialOptimaticAdTime = timeDiffSEC + duration
    };
    this.isHouseAdEnabled = false;
    this.houseAdViews = 0;
    this.interstitalVideoAdOnOpen = function(providers, isPreroll, params) {
        Tetris.api.interstitialVideoAdProviders = providers;
        Tetris.api.interstitialVideoAdIsPreroll = isPreroll;
        var provider = Tetris.api.interstitialVideoAdProviders[(Tetris.config.abID - 1)];
        if (Tetris.api.isHouseAdEnabled && Tetris.api.houseAdViews < 2) {
            provider = "house";
            Tetris.api.houseAdViews++
        }
        switch (provider) {
            case "house":
                Tetris.api.houseOnOpen(params);
                break;
            case "optimatic":
                Tetris.api.optimaticOnOpen(params);
                break;
            case "liverail":
                Tetris.api.liveRailOnOpen(params);
                break;
            case "spotx":
                Tetris.api.spotxOnOpen(params);
                break;
            case "lifestreet":
                Tetris.api.lifestreetOnOpen(params);
                break;
            default:
                if (Tetris.flashObject) {
                    Tetris.api.interstitialVideoFlashCallback(0);
                    return 0
                }
                break
        }
        return 1
    };
    this.optimaticRemoveIframe = function() {
        $("#interstitial-video-ad-modal-iframe").remove();
        $("#interstitial-message").hide();
        $("#interstitial-close-button").show();
        if (Tetris.interstitialIntervals.isVideo) {
            $("#interstitial-ad-message-container").show();
            $("#optimatic-ad-message").show()
        }
        Tetris.api.interstitialOptimaticAdTime = 0;
        Tetris.api.interstitialOptimaticStaticAd = false
    };
    this.optimaticOnOpen = function(params) {
        SpiritAccount.log("OptimaticOnOpen1");
        if (Tetris.optimaticOverride == true || ($.inArray(Tetris.config.eaLevel, Tetris.interstitialIntervals.eaLevels) >= 0) && Tetris.config.level >= Tetris.interstitialIntervals.levelThreshold) {
            SpiritAccount.log("OptimaticOnOpen2");
            hideFlashCallback({
                state: "opened"
            });
            try {
                document.getElementById("page-container").focus()
            } catch (ex) {}
            Tetris.api.videoAdVisible = true;
            var adUrl = "//" + Tetris.config.advertisingPartialURL + "optimatic1" + (SpiritAccount._isHttps() ? "_ssl" : "") + ".html";
            var adModal = '<div id="interstitial-video-ad-modal"><div id="video-ad-content"><a id="interstitial-close-button" href="javascript:void(0)" onclick="interstitialOnClose(true)" style="display: none"></a><div id="interstitial-video-ad-sponser-message">' + Tetris.lang.strings.textfields_intStaticAdTitle + '</div><iframe id="interstitial-video-ad-modal-iframe" scrolling="no" frameborder="0" style="border: 1px solid #ccc; overflow: hidden;" allowTransparency="true"></iframe><br /><div id="interstitial-ad-message-container" style="display:none"><div id="interstitial-video-ad-message" style="display:none">' + Tetris.lang.strings.textfields_intStaticAdUpsell + '</div></div><div id="interstitial-message">...Loading...</div><div class="clear"></div></div></div>';
            $("body").append(adModal);
            $("#interstitial-video-ad-modal").modal({
                opacity: 70,
                overlayCss: {
                    backgroundColor: "#000"
                },
                overlayClose: false,
                focus: true,
                autoPosition: true,
                escClose: false,
                onShow: function() {
                    Tetris.api.interstitialTimeMSEC = Tetris.util.getNow();
                    Tetris.api.interstitialTimerId = setInterval(Tetris.api.interstitialOnTick, 500);
                    Tetris.trackEvent(Tetris.config.userID, Tetris.gameMode, {
                        subtype1: "AdVideoPopup",
                        subtype2: "Impression"
                    });
                    $("#interstitial-video-ad-modal-iframe").attr("src", adUrl)
                }
            });
            $("#interstitial-ad-message-container").click(function() {
                Tetris.api.interstitialOnClose();
                Tetris.trackEvent(Tetris.config.userID, Tetris.gameMode, {
                    subtype1: "AdVideoPopup",
                    subtype2: "NoAds"
                });
                setTimeout("Tetris.tabClick('buy');", 100)
            });
            var topPos = $("#mainnav").position();
            var position = $("#simplemodal-container").position();
            $("#simplemodal-container").css("top", (position.top - (topPos.top + 10)));
            return 1
        } else {
            Tetris.flashObject = Tetris.util.getFlashObject();
            if (Tetris.flashObject) {
                Tetris.api.interstitialVideoFlashCallback(0)
            }
            return 0
        }
    };
    this.optimaticShowStatic = function() {
        var adUrl = "//" + Tetris.config.advertisingPartialURL + "interstitial1" + (SpiritAccount._isHttps() ? "_ssl" : "") + ".html";
        $("#interstitial-video-ad-modal-iframe").hide();
        $("#interstitial-video-ad-modal-iframe").attr("src", adUrl);
        $("#interstitial-video-ad-modal-iframe").css({
            top: "75px",
            left: "120px",
            border: "0px solid #ccc"
        });
        $("#interstitial-video-ad-modal-iframe").show();
        Tetris.api.interstitialOptimaticStaticAd = true;
        Tetris.api.interstitialTimeMSEC = Tetris.util.getNow();
        Tetris.api.interstitialOptimaticAdTime = 40;
        Tetris.trackEvent(Tetris.config.userID, Tetris.gameMode, {
            subtype1: "AdVideoPopup",
            subtype2: "StaticAd"
        })
    };
    this.liveRailOnOpen = function(params) {
        SpiritAccount.log("LiveRailOnOpen1");
        if (($.inArray(Tetris.config.eaLevel, Tetris.interstitialIntervals.eaLevels) >= 0) && Tetris.config.level >= Tetris.interstitialIntervals.levelThreshold) {
            SpiritAccount.log("LiveRailOnOpen2");
            hideFlashCallback({
                state: "opened"
            });
            try {
                document.getElementById("page-container").focus()
            } catch (ex) {}
            Tetris.api.videoAdVisible = true;
            var adUrl = "//" + Tetris.config.advertisingPartialURL + "liverail" + (Tetris.isLiveRailSpotXTest ? "2" : "1") + (SpiritAccount._isHttps() ? "_ssl" : "") + ".html";
            var adModal = '<div id="interstitial-video-ad-modal"><div id="video-ad-content"><a id="interstitial-close-button" href="javascript:void(0)" onclick="interstitialOnClose(true)" style="display: none"></a><div id="interstitial-video-ad-sponser-message">' + Tetris.lang.strings.textfields_intStaticAdTitle + '</div><iframe id="interstitial-video-ad-modal-iframe" scrolling="no" frameborder="0" style="border: 1px solid #ccc; overflow: hidden;" allowTransparency="true"></iframe><br /><div id="interstitial-ad-message-container" style="display:none"><div id="interstitial-video-ad-message" style="display:none">' + Tetris.lang.strings.textfields_intStaticAdUpsell + '</div></div><div id="interstitial-message">...Loading...</div><div class="clear"></div></div></div>';
            $("body").append(adModal);
            $("#interstitial-video-ad-modal").modal({
                opacity: 70,
                overlayCss: {
                    backgroundColor: "#000"
                },
                overlayClose: false,
                focus: true,
                autoPosition: true,
                escClose: false,
                onShow: function() {
                    Tetris.trackEvent(Tetris.config.userID, Tetris.gameMode, {
                        subtype1: "AdVideoPopup",
                        subtype2: "Impression"
                    });
                    $("#interstitial-video-ad-modal-iframe").attr("src", adUrl);
                    setTimeout(function() {
                        Tetris.trackEvent(Tetris.config.userID, "liverail", {
                            subtype1: "AdVideoPopup",
                            subtype2: "ImpressionByProvider"
                        })
                    }, 50)
                }
            });
            $("#interstitial-ad-message-container").click(function() {
                Tetris.api.interstitialOnClose();
                Tetris.trackEvent(Tetris.config.userID, Tetris.gameMode, {
                    subtype1: "AdVideoPopup",
                    subtype2: "NoAds"
                });
                setTimeout("Tetris.tabClick('buy');", 100)
            });
            var topPos = $("#mainnav").position();
            var position = $("#simplemodal-container").position();
            $("#simplemodal-container").css("top", (position.top - (topPos.top + 10)));
            return 1
        } else {
            Tetris.flashObject = Tetris.util.getFlashObject();
            if (Tetris.flashObject) {
                Tetris.api.interstitialVideoFlashCallback(0)
            }
            return 0
        }
    };
    this.spotxOnOpen = function(params) {
        SpiritAccount.log("spotxOnOpen1");
        if (Tetris.spotxOverride || ($.inArray(Tetris.config.eaLevel, Tetris.interstitialIntervals.eaLevels) >= 0) && Tetris.config.level >= Tetris.interstitialIntervals.levelThreshold) {
            SpiritAccount.log("spotxOnOpen2");
            hideFlashCallback({
                state: "opened"
            });
            try {
                document.getElementById("page-container").focus()
            } catch (ex) {}
            Tetris.api.videoAdVisible = true;
            var adUrl = "//" + Tetris.config.advertisingPartialURL + "spotx1" + (SpiritAccount._isHttps() ? "_ssl" : "") + ".html";
            var adModal = '<div id="interstitial-video-ad-modal"><div id="video-ad-content"><a id="interstitial-close-button" href="javascript:void(0)" onclick="interstitialOnClose(true)" style="display: none"></a><div id="interstitial-video-ad-sponser-message">' + Tetris.lang.strings.textfields_intStaticAdTitle + '</div><iframe id="interstitial-video-ad-modal-iframe" scrolling="no" frameborder="0" style="border: 1px solid #ccc; overflow: hidden;" allowTransparency="true"></iframe><br /><div id="interstitial-ad-message-container" style="display:none"><div id="interstitial-video-ad-message" style="display:none">' + Tetris.lang.strings.textfields_intStaticAdUpsell + '</div></div><div id="interstitial-message">...Loading...</div><div class="clear"></div></div></div>';
            $("body").append(adModal);
            $("#interstitial-video-ad-modal").modal({
                opacity: 70,
                overlayCss: {
                    backgroundColor: "#000"
                },
                overlayClose: false,
                focus: true,
                autoPosition: true,
                escClose: false,
                onShow: function() {
                    Tetris.api.interstitialTimeMSEC = Tetris.util.getNow();
                    Tetris.api.interstitialTimerId = setInterval(Tetris.api.interstitialOnTick, 500);
                    Tetris.trackEvent(Tetris.config.userID, Tetris.gameMode, {
                        subtype1: "AdVideoPopup",
                        subtype2: "Impression"
                    });
                    $("#interstitial-video-ad-modal-iframe").attr("src", adUrl)
                }
            });
            $("#interstitial-ad-message-container").click(function() {
                Tetris.api.interstitialOnClose();
                Tetris.trackEvent(Tetris.config.userID, Tetris.gameMode, {
                    subtype1: "AdVideoPopup",
                    subtype2: "NoAds"
                });
                setTimeout("Tetris.tabClick('buy');", 100)
            });
            var topPos = $("#mainnav").position();
            var position = $("#simplemodal-container").position();
            $("#simplemodal-container").css("top", (position.top - (topPos.top + 10)));
            return 1
        } else {
            Tetris.flashObject = Tetris.util.getFlashObject();
            if (Tetris.flashObject) {
                Tetris.api.interstitialVideoFlashCallback(0)
            }
            return 0
        }
    };
    this.lifestreetOnOpen = function(params) {
        SpiritAccount.log("lifestreetOnOpen");
        if (Tetris.lifestreetOverride || ($.inArray(Tetris.config.eaLevel, Tetris.interstitialIntervals.eaLevels) >= 0) && Tetris.config.level >= Tetris.interstitialIntervals.levelThreshold) {
            SpiritAccount.log("lifestreetOnOpen2");
            hideFlashCallback({
                state: "opened"
            });
            try {
                document.getElementById("page-container").focus()
            } catch (ex) {}
            Tetris.api.videoAdVisible = true;
            var adUrl = "//" + Tetris.config.advertisingPartialURL + "lifestreet1" + (SpiritAccount._isHttps() ? "_ssl" : "") + ".html";
            var adModal = '<div id="interstitial-video-ad-modal"><div id="video-ad-content"><a id="interstitial-close-button" href="javascript:void(0)" onclick="interstitialOnClose(true)" style="display: none"></a><div id="interstitial-video-ad-sponser-message">' + Tetris.lang.strings.textfields_intStaticAdTitle + '</div><iframe id="interstitial-video-ad-modal-iframe" scrolling="no" frameborder="0" style="border: 1px solid #ccc; overflow: hidden;" allowTransparency="true"></iframe><br /><div id="interstitial-ad-message-container" style="display:none"><div id="interstitial-video-ad-message" style="display:none">' + Tetris.lang.strings.textfields_intStaticAdUpsell + '</div></div><div id="interstitial-message">...Loading...</div><div class="clear"></div></div></div>';
            $("body").append(adModal);
            $("#interstitial-video-ad-modal").modal({
                opacity: 70,
                overlayCss: {
                    backgroundColor: "#000"
                },
                overlayClose: false,
                focus: true,
                autoPosition: true,
                escClose: false,
                onShow: function() {
                    Tetris.api.interstitialTimeMSEC = Tetris.util.getNow();
                    Tetris.api.interstitialTimerId = setInterval(Tetris.api.interstitialOnTick, 500);
                    Tetris.trackEvent(Tetris.config.userID, Tetris.gameMode, {
                        subtype1: "AdVideoPopup",
                        subtype2: "Impression"
                    });
                    $("#interstitial-video-ad-modal-iframe").attr("src", adUrl)
                }
            });
            $("#interstitial-ad-message-container").click(function() {
                Tetris.api.interstitialOnClose();
                Tetris.trackEvent(Tetris.config.userID, Tetris.gameMode, {
                    subtype1: "AdVideoPopup",
                    subtype2: "NoAds"
                });
                setTimeout("Tetris.tabClick('buy');", 100)
            });
            var topPos = $("#mainnav").position();
            var position = $("#simplemodal-container").position();
            $("#simplemodal-container").css("top", (position.top - (topPos.top + 10)));
            return 1
        } else {
            Tetris.flashObject = Tetris.util.getFlashObject();
            if (Tetris.flashObject) {
                Tetris.api.interstitialVideoFlashCallback(0)
            }
            return 0
        }
    };
    this.houseOnOpen = function(params) {
        SpiritAccount.log("houseOnOpen1");
        if (Tetris.houseOverride || ($.inArray(Tetris.config.eaLevel, Tetris.interstitialIntervals.eaLevels) >= 0) && Tetris.config.level >= Tetris.interstitialIntervals.levelThreshold) {
            SpiritAccount.log("houseOnOpen2");
            hideFlashCallback({
                state: "opened"
            });
            try {
                document.getElementById("page-container").focus()
            } catch (ex) {}
            Tetris.api.videoAdVisible = true;
            var adUrl = "//" + Tetris.config.advertisingPartialURL + "house1" + (SpiritAccount._isHttps() ? "_ssl" : "") + ".html";
            var adModal = '<div id="interstitial-video-ad-modal"><div id="video-ad-content"><a id="interstitial-close-button" href="javascript:void(0)" onclick="interstitialOnClose(true)" style="display: none"></a><div id="interstitial-video-ad-sponser-message">' + Tetris.lang.strings.textfields_intStaticAdTitle + '</div><iframe id="interstitial-video-ad-modal-iframe" scrolling="no" frameborder="0" style="border: 1px solid #ccc; overflow: hidden;" allowTransparency="true"></iframe><br /><div id="interstitial-ad-message-container" style="display:none"><div id="interstitial-video-ad-message" style="display:none">' + Tetris.lang.strings.textfields_intStaticAdUpsell + '</div></div><div id="interstitial-message">...Loading...</div><div class="clear"></div></div></div>';
            $("body").append(adModal);
            $("#interstitial-video-ad-modal").modal({
                opacity: 70,
                overlayCss: {
                    backgroundColor: "#000"
                },
                overlayClose: false,
                focus: true,
                autoPosition: true,
                escClose: false,
                onShow: function() {
                    Tetris.api.interstitialTimeMSEC = Tetris.util.getNow();
                    Tetris.api.interstitialTimerId = setInterval(Tetris.api.interstitialOnTick, 500);
                    Tetris.trackEvent(Tetris.config.userID, Tetris.gameMode, {
                        subtype1: "AdVideoPopup",
                        subtype2: "Impression"
                    });
                    $("#interstitial-video-ad-modal-iframe").attr("src", adUrl)
                }
            });
            $("#interstitial-ad-message-container").click(function() {
                Tetris.api.interstitialOnClose();
                Tetris.trackEvent(Tetris.config.userID, Tetris.gameMode, {
                    subtype1: "AdVideoPopup",
                    subtype2: "NoAds"
                });
                setTimeout("Tetris.tabClick('buy');", 100)
            });
            var topPos = $("#mainnav").position();
            var position = $("#simplemodal-container").position();
            $("#simplemodal-container").css("top", (position.top - (topPos.top + 10)));
            return 1
        } else {
            Tetris.flashObject = Tetris.util.getFlashObject();
            if (Tetris.flashObject) {
                Tetris.api.interstitialVideoFlashCallback(0)
            }
            return 0
        }
    };
    this.interstitialVideoStart = function(provider) {
        $("#interstitial-message").html("Disable ads with any purchase of Tetris Cash or Coins")
    };
    this.interstitialVideoFlashCallback = function(param) {
        if (Tetris.api.interstitialVideoAdIsPreroll) {
            Tetris.flashObject.prerollStartGame(param);
            document.getElementById("flash-object").focus();
            window.document.getElementById("flash-object").tabIndex = 0;
            window.document.getElementById("flash-object").focus()
        } else {
            Tetris.flashObject.showGameResults(param)
        }
    };
    this.getAppFriends = function(nextCursor) {
        nextCursor = (typeof(nextCursor) != "undefined") ? nextCursor : "";
        if (nextCursor != null) {
            SpiritAccount.api("me/friends?fields=id,name&after=" + nextCursor, function(response) {
                if (response && !response.error) {
                    if (Tetris.config.appFriends == null) {
                        Tetris.config.appFriends = []
                    }
                    Tetris.config.appFriends = Tetris.config.appFriends.concat(Tetris.util.processUserIds2(response.data));
                    var cursor = null;
                    if (response.paging && response.paging.next) {
                        cursor = response.paging.cursors.after
                    }
                    Tetris.api.getAppFriends(cursor)
                }
            })
        } else {
            Tetris.api.checkElapsedFriends();
            Tetris.api.checkInstalledFriends()
        }
    };
    this.checkIsAppFriend = function(friendId, callback) {
        SpiritAccount.api("/me/friends/" + friendId + "?fields=id,name", function(response) {
            callback(response)
        })
    };
    this.checkElapsedFriends = function() {
        if (Tetris.config.houseAds.gift && Tetris.config.houseAds.gift.cc && Tetris.config.houseAds.gift.cc.indexOf(Tetris.config.countryCode) !== false && Tetris.config.houseAds.gift.enabled !== false) {
            SpiritAccount.log("checkElapsedFriends");
            if (Tetris.config.appFriends != null && Tetris.config.appFriends.length > 0) {
                if (Tetris.api.elapsedProb > Math.floor((Math.random() * 100) + 1)) {
                    var params = {
                        fbuid: Tetris.config.userID,
                        friendIds: Tetris.config.appFriends.join(","),
                        timestamp: Tetris.util.getNow(),
                        ticket: Tetris.config.ticket
                    };
                    $.ajax({
                        type: "POST",
                        url: "//" + Tetris.config.apiUrl + "api/user/elapsedFriends",
                        data: params,
                        success: function(response) {
                            if (response.friends) {
                                Tetris.config.elapsedFriends = response.friends.join(",");
                                if (Tetris.config.elapsedFriends.length > Tetris.api.elapsedLimit) {
                                    Tetris.config.elapsedFriends = Tetris.config.elapsedFriends.slice(0, Tetris.api.elapsedLimit)
                                }
                            }
                        },
                        error: function() {
                            Tetris.config.elapsedFriends = null
                        },
                        dataType: Tetris.config.apiDataType
                    })
                }
            }
        }
    };
    this.checkInstalledFriends = function() {
        SpiritAccount.log("checkInstalledFriends");
        if (Tetris.config.appFriends != null && Tetris.config.appFriends.length > 0) {
            var params = {
                fbuid: Tetris.config.userID,
                count: Tetris.config.appFriends.length,
                timestamp: Tetris.util.getNow(),
                ticket: Tetris.config.ticket
            };
            $.ajax({
                type: "POST",
                url: "//" + Tetris.config.apiUrl + "api/user/installedFriends",
                data: params,
                success: function(response) {
                    if (response.friends) {
                        Tetris.config.elapsedFriends = response.friends.join(",");
                        if (Tetris.config.elapsedFriends.length > Tetris.api.elapsedLimit) {
                            Tetris.config.elapsedFriends = Tetris.config.elapsedFriends.slice(0, Tetris.api.elapsedLimit)
                        }
                    }
                },
                error: function() {
                    Tetris.config.elapsedFriends = null
                },
                dataType: Tetris.config.apiDataType
            })
        }
    };
    this.checkThirdPartyId = function() {
        SpiritAccount.log("checkThirdPartyId");
        var tpidCookieName = Tetris.api.getThirdPartyIdCookieName();
        var tpidCookie = getCookie(tpidCookieName);
        if (Tetris.forceTpidUpdate || (!tpidCookie || (tpidCookie != Tetris.config.thirdPartyId))) {
            var params = {
                fbuid: Tetris.config.userID,
                thirdPartyId: Tetris.config.thirdPartyId
            };
            $.ajax({
                type: "POST",
                url: "//" + Tetris.config.apiUrl + "api/user/updateThirdPartyId",
                data: params,
                success: function(response) {
                    if (!response.errors) {
                        setCookie(tpidCookieName, config.thirdPartyId, Tetris.tpidCookieExpiration)
                    }
                },
                error: function() {},
                dataType: Tetris.config.apiDataType
            })
        }
    }, this.getThirdPartyIdCookieName = function() {
        return "fb_tpid_1_" + Tetris.config.appId + "_" + Tetris.config.userID
    }, this.offersHideFlash = function() {
        SpiritAccount.log("offersHideFlash");
        hideFlash();
        showPage();
        tabHold = true
    }, this.offersShowFlash = function() {
        SpiritAccount.log("offersShowFlash");
        hidePage();
        showFlash();
        $("#earn").removeClass("selected");
        $("#main").addClass("selected").css({
            textDecoration: "none"
        });
        config.lastClickedTabName = "main";
        tabHold = false
    }, this.streamPublish = (function() {
        var selectedTab = "";
        var uniqueTrackingTag = null;
        var st1 = null;
        this.browserHideFlash = function() {
            selectedTab = getSelectedTab();
            if (selectedTab == "main") {
                $("#page-container").empty();
                $("#page-container").height(500);
                hideFlash()
            }
        };
        this.browserShowFlash = function() {
            selectedTab = getSelectedTab();
            if (selectedTab == "main") {
                $("#page-container").height(0);
                showFlash()
            }
        };
        this.getSelectedTab = function() {
            return $("#mainnav a.selected").attr("id")
        };
        this.endStreamPublish = function(postID, exception, data) {
            if (publishConfig.doCallback) {
                SpiritAccount.log("endStreamPublish doCallBack");
                Tetris.flashObject = Tetris.util.getFlashObject();
                if (typeof Tetris.flashObject.processComplete == "function") {
                    SpiritAccount.log("endStreamPublish function exists");
                    Tetris.flashObject.processComplete(postID)
                }
            }
            if (postID != "null" && postID != null) {
                $.ajax({
                    url: "//" + Tetris.config.apiUrl + "api/user/wallpost",
                    data: {
                        returnType: "json",
                        fbuid: config.userID,
                        token: Tetris.api.publishConfig.token
                    },
                    dataType: Tetris.config.apiDataType
                });
                Tetris.trackStreamPost(config.userID, this.uniqueTrackingTag, "stream", {
                    subtype1: this.st1
                });
                this.st1 = null;
                this.uniqueTrackingTag = null
            }
            browserShowFlash();
            dialogShowing = false;
            Tetris.unlockTabs()
        };
        this.publishConfig = {};
        this.resetConfigToDefault = function() {
            publishConfig = {
                apiKey: config.apiKey,
                appURL: config.appURL,
                userID: config.userID,
                targetId: config.userID,
                titleText: 'Pass in "titleText"',
                attachmentText: 'Pass in "attachmentText"',
                mediaType: "image",
                mediaSource: "mediaSource",
                flashSource: "flashSource",
                flashWidth: 90,
                flashHeight: 90,
                flashExpandedWidth: 460,
                flashExpandedHeight: 355,
                actionText: 'Pass in "actionText"',
                actionURL: config.appURL,
                defaultPostText: 'Pass in "defaultPostText"',
                doCallback: false,
                kt_u: null,
                kt_st1: null,
                token: 0
            }
        };
        this.popup = function(params) {
            Tetris.lockTabs();
            resetConfigToDefault();
            $.extend(publishConfig, params);
            browserHideFlash();
            try {
                document.getElementById("page-container").focus()
            } catch (ex) {}
            Tetris.api.streamPublish.uniqueTrackingTag = publishConfig.kt_u;
            Tetris.api.streamPublish.st1 = publishConfig.kt_st1;
            publishConfig.actionURL = publishConfig.actionURL.replace(/\[#appName#\]/g, config.appName);
            publishConfig.actionURL = publishConfig.actionURL.replace(/\[#appID#\]/g, config.appID);
            publishConfig.actionURL = publishConfig.actionURL.replace(/\[#appURL#\]/g, config.appURL);
            if (publishConfig.actionReplayURL) {
                publishConfig.actionReplayURL = publishConfig.actionReplayURL.replace(/\[#appURL#\]/g, config.appURL)
            }
            var data = {};
            data.method = "feed";
            data.link = publishConfig.actionURL;
            if (publishConfig.mediaType == "image") {
                data.picture = ""
            } else {
                if (publishConfig.mediaType == "flash") {
                    data.picture = publishConfig.mediaSource;
                    data.source = publishConfig.flashSource
                }
            }
            data.actions = [{
                name: publishConfig.actionText,
                link: (publishConfig.actionReplayURL ? publishConfig.actionReplayURL : publishConfig.actionURL)
            }];
            data.uniqueTrackingTag = publishConfig.kt_u;
            data.subtype1 = publishConfig.kt_st1;
            SpiritAccount.ui(data, endStreamPublish)
        };
        return this
    })(), this.facebookCredits = (function() {
        this.placeOrder = function(data, params) {
            try {
                document.getElementById("page-container").focus()
            } catch (ex) {}
            if (data.description.length == 0) {
                data.description = Tetris.lang.strings.fbcredits_description_coin
            }
            data.lang = Tetris.lang.fblocale;
            SpiritAccount.log(Tetris.util.getJSON(data));
            var purchaseObject = {
                method: "pay",
                action: "purchaseitem",
                product: config.staticURL + "/opengraph/currency.php?data=" + $.base64.encode(Tetris.util.getJSON(data)) + "&params=" + params,
                pricepoint_id: data.pricepoint_id ? data.pricepoint_id : null
            };
            SpiritAccount.log("Place Order");
            SpiritAccount.log(purchaseObject);
            SpiritAccount.ui(purchaseObject, placeOrderCallback)
        };
        this.placeOrderCallback = function(data) {
            SpiritAccount.log(data);
            if (data.payment_id && data.status == "completed") {
                SpiritAccount.log("Order Successful");
                Tetris.hideFlash();
                Tetris.hidePage();
                Tetris.showLoadingDiv();
                var delaySEC = 5000;
                var initialSEC = 1750;
                setTimeout(function() {
                    Tetris.hideLoadingDiv();
                    Tetris.showFlash();
                    Tetris.flashObject = Tetris.util.getFlashObject();
                    Tetris.flashObject.cashPurchaseComplete();
                    if ($("#mobile-modal").length > 0) {
                        Tetris.closeMobilePopup()
                    }
                    if (config.googleAds.hideForPC && !config.pc) {
                        Tetris.offsetApp();
                        Tetris.config.pc = true;
                        $("#crosspromo-container").hide();
                        $(".ad-container").hide();
                        Tetris.fitIFrameToCanvas()
                    }
                    Tetris.showCashUpSell = false;
                    Tetris.tabClick("main");
                    setTimeout(function() {
                        Tetris.flashObject = Tetris.util.getFlashObject();
                        Tetris.flashObject.cashPurchaseComplete()
                    }, delaySEC - initialSEC)
                }, initialSEC);
                return true
            } else {
                SpiritAccount.log("placeOrder() failure");
                SpiritAccount.log("Error from Facebook: " + data.error_code);
                return false
            }
        };
        this.placeItemOrder = function(data) {
            hideFlash();
            try {
                document.getElementById("page-container").focus()
            } catch (ex) {}
            Tetris.api.purchaseItemId = data.item_d;
            Tetris.api.purchaseAmount = data.price;
            if (data.description.length == 0) {
                data.description = Tetris.lang.strings.fbcredits_description_coin
            }
            if (data.image.length == 0) {
                data.image = config.alternateStaticURL + "/graphics/logo_rainbow_50x50.png"
            }
            data.lang = Tetris.lang.fblocale;
            var params = {
                bucket: Tetris.paymentBucket,
                lvl: config.level,
                dtSEC: Tetris.dtSEC,
                cc: Tetris.config.flash.countryCode
            };
            var purchaseObject = {
                method: "pay",
                action: "purchaseitem",
                product: config.staticURL + "/opengraph/currency.php?data=" + $.base64.encode(Tetris.util.getJSON(data)) + "&params=" + $.base64.encode(Tetris.util.getJSON(params)),
                pricepoint_id: data.pricepoint_id ? data.pricepoint_id : null
            };
            SpiritAccount.log("Place Order");
            SpiritAccount.log(purchaseObject);
            SpiritAccount.ui(purchaseObject, placeItemOrderCallback)
        };
        this.placeItemOrderCallback = function(data) {
            SpiritAccount.log(data);
            if (data.payment_id && data.status == "completed") {
                SpiritAccount.log("Order Successful");
                Tetris.hideFlash();
                Tetris.hidePage();
                Tetris.showLoadingDiv();
                var delaySEC = 5000;
                setTimeout(function() {
                    Tetris.hideLoadingDiv();
                    Tetris.showFlash();
                    Tetris.flashObject = Tetris.util.getFlashObject();
                    Tetris.flashObject.fbCreditsPurchaseComplete(Tetris.api.purchaseItemId);
                    if (config.googleAds.hideForPC && !config.pc) {
                        Tetris.offsetApp();
                        Tetris.config.pc = true;
                        $("#crosspromo-container").hide();
                        $(".ad-container").hide();
                        Tetris.fitIFrameToCanvas()
                    }
                    Tetris.tabClick("main");
                    Tetris.api.purchaseItemId = -1;
                    Tetris.api.purchaseAmount = -1
                }, delaySEC);
                return true
            } else {
                SpiritAccount.log("placeOrder() failure");
                SpiritAccount.log("Error from Facebook: " + data.error_code);
                return false
            }
        };
        return this
    })();
    this.requests = (function() {
        this.inviteIds = null;
        this.inviteUUID = null;
        this.requestCallback = null;
        this.get = function(id, callback) {
            SpiritAccount.log("GET /" + id);
            SpiritAccount.api("/" + id + "?fields=id,to,from,message,data,created_time", callback)
        };
        this.remove = function(id, callback) {
            SpiritAccount.log("DELETE /" + id);
            SpiritAccount.api("/" + id, "DELETE", callback)
        };
        this.setCount = function(count) {
            $("#message-count").html(count);
            if (count > 0) {
                $("#message-box").attr("title", count + Tetris.lang.strings.textfields_messages);
                $("#message-box").addClass("message-box-full").attr("title", count + Tetris.lang.strings.textfields_messages)
            } else {
                $("#message-box").attr("title", "0" + Tetris.lang.strings.textfields_messages);
                $("#message-box").removeClass("message-box-full")
            }
        };
        this.sendGift = function(params) {
            SpiritAccount.log("sendGift");
            SpiritAccount.log(params);
            var targetIds = params.target_ids;
            if (params.target_ids == null || params.target_ids.length > 1) {
                Tetris.hideFlashWithBackground();
                Tetris.api.requests.inviteIds = (params.target_ids).split(",")
            } else {
                Tetris.api.requests.inviteIds = null
            }
            Tetris.lockTabs();
            Tetris.api.requests.sendGiftPiece(params, Tetris.api.requests.inviteIds)
        };
        this.sendGiftPiece = function(params, targetIds) {
            SpiritAccount.log("sendGiftPiece");
            var title = Tetris.lang.strings.textfields_giftPageHeaderText;
            var message = Tetris.lang.strings.textfields_giftRequestText;
            message = message.replace("[#giftName#]", params.gift_name);
            message = message.replace("[#appName#]", config.appName);
            SpiritAccount.log(params);
            var data = {
                requestType: "gift",
                senderId: config.userID,
                giftId: params.gift_id
            };
            if (params.origin) {
                data.origin = params.origin
            }
            var uuid = SpiritAccount.getKontagentApi().genUniqueTrackingTag();
            var targetIdsNew = [];
            var i;
            if (targetIds.length > 50) {
                for (i = 0; i < 50; i++) {
                    targetIdsNew.push(targetIds.pop())
                }
                Tetris.api.requests.send(title, message, Tetris.util.getJSON(data), ["all", "app_users"], null, targetIdsNew.toString(), function(response) {
                    SpiritAccount.log("REQUEST DATA: " + Tetris.util.getJSON(response));
                    if (response && response.to) {
                        var data = {
                            fbuid: config.userID,
                            giftID: params.gift_id,
                            level: params.level,
                            l: params.l,
                            recipientList: response.to.join(","),
                            locale: Tetris.locale
                        };
                        Tetris.finalizeGiftSend(config.apiUrl, data);
                        Tetris.api.requests.sendGiftPiece(params, Tetris.api.requests.inviteIds)
                    } else {
                        Tetris.hideFlashWithBackground();
                        Tetris.goToPlayTab();
                        Tetris.unlockTabs()
                    }
                }, "gift", Tetris.api.requests.getGiftEventName(params.gift_id))
            } else {
                var length = targetIds.length;
                for (i = 0; i < length; i++) {
                    targetIdsNew.push(targetIds.pop())
                }
                targetIds = null;
                Tetris.api.requests.send(title, message, Tetris.util.getJSON(data), ["all", "app_users"], null, targetIdsNew.toString(), function(response) {
                    if (response && response.to) {
                        var data = {
                            fbuid: config.userID,
                            giftID: params.gift_id,
                            level: params.level,
                            l: params.l,
                            recipientList: response.to.join(","),
                            locale: Tetris.locale
                        };
                        Tetris.finalizeGiftSend(config.apiUrl, data)
                    }
                    Tetris.hideFlashWithBackground();
                    Tetris.goToPlayTab();
                    Tetris.unlockTabs()
                }, "gift", Tetris.api.requests.getGiftEventName(params.gift_id))
            }
        };
        this.sendInvite = function(params) {
            SpiritAccount.log("sendInvite");
            var targetIds = params.target_ids;
            var kt_st1 = (params.kt_st1 ? params.kt_st1 : "invite");
            var kt_st2 = (params.kt_st2 ? params.kt_st2 : "tab");
            if (params.target_ids == null || params.target_ids.length > 1) {
                Tetris.hideFlashWithBackground();
                Tetris.api.requests.inviteIds = (params.target_ids).split(",")
            } else {
                Tetris.api.requests.inviteIds = null
            }
            Tetris.lockTabs();
            Tetris.api.requests.sendInvitePiece(Tetris.api.requests.inviteIds, kt_st1, kt_st2)
        };
        this.sendInvitePiece = function(targetIds, subtype1, subtype2) {
            SpiritAccount.log("sendInvitePiece");
            var title = Tetris.lang.strings.textfields_inviteHeaderText;
            var message = Tetris.lang.strings.textfields_invitePopupText;
            var data = {
                requestType: "invite",
                senderId: config.userID
            };
            var uuid = SpiritAccount.getKontagentApi().genUniqueTrackingTag();
            var targetIdsNew = [];
            var i;
            if (targetIds.length > 50) {
                for (i = 0; i < 50; i++) {
                    targetIdsNew.push(targetIds.pop())
                }
                Tetris.api.requests.send(title, message, Tetris.util.getJSON(data), ["app_non_users"], null, targetIdsNew.toString(), function(response) {
                    if (response == "undefined" || response == null) {
                        Tetris.hideFlashWithBackground();
                        Tetris.goToPlayTab();
                        Tetris.unlockTabs()
                    } else {
                        Tetris.api.requests.sendInvitePiece(Tetris.api.requests.inviteIds, subtype1, subtype2)
                    }
                }, subtype1, subtype2)
            } else {
                var length = targetIds.length;
                for (i = 0; i < length; i++) {
                    targetIdsNew.push(targetIds.pop())
                }
                targetIds = null;
                Tetris.api.requests.send(title, message, Tetris.util.getJSON(data), ["app_non_users"], null, targetIdsNew.toString(), function(response) {
                    Tetris.hideFlashWithBackground();
                    Tetris.unlockTabs();
                    Tetris.goToPlayTab();
                    if (response.request) {
                        try {
                            document.getElementById("flash-object").inviteComplete()
                        } catch (ex) {}
                    }
                }, subtype1, subtype2)
            }
        };
        this.sendMultiple = function(params) {
            SpiritAccount.log("sendMultiple");
            var targetIds = params.target_ids;
            if (params.target_ids == null || params.target_ids.length > 1) {
                Tetris.hideFlashWithBackground();
                try {
                    document.getElementById("page-container").focus()
                } catch (ex) {}
                Tetris.api.requests.inviteIds = (params.target_ids).split(",")
            } else {
                Tetris.api.requests.inviteIds = null
            }
            if (params.target_ids.length != 0) {
                Tetris.lockTabs();
                if (params.callback) {
                    Tetris.api.requests.requestCallback = params.callback
                }
                Tetris.api.requests.sendMultiplePiece(params, Tetris.api.requests.inviteIds)
            } else {
                Tetris.goToPlayTab();
                Tetris.unlockTabs()
            }
        };
        this.sendMultiplePiece = function(params, targetIds) {
            SpiritAccount.log("sendMultiplePiece");
            var title = params.title;
            var message = params.message;
            var kt_st1 = params.kt_st1;
            var kt_st2 = params.kt_st2;
            var kt_st3 = params.kt_st3;
            var data = params.data;
            var uuid = SpiritAccount.getKontagentApi().genUniqueTrackingTag();
            var targetIdsNew = [];
            var i;
            if (targetIds.length > 50) {
                for (i = 0; i < 50; i++) {
                    targetIdsNew.push(targetIds.pop())
                }
                Tetris.api.requests.send(title, message, Tetris.util.getJSON(data), ["all", "app_users"], null, targetIdsNew.toString(), function(response) {
                    SpiritAccount.log("REQUEST DATA: " + Tetris.util.getJSON(response));
                    if (response && response.to) {
                        Tetris.api.requests.sendMultiplePiece(params, Tetris.api.requests.inviteIds)
                    } else {
                        Tetris.hideFlashWithBackground();
                        try {
                            document.getElementById("page-container").focus()
                        } catch (ex) {}
                        Tetris.goToPlayTab();
                        Tetris.unlockTabs();
                        Tetris.api.requests.callFlashCallback(Tetris.api.requests.requestCallback, response.to.length)
                    }
                }, kt_st1, kt_st2, kt_st3)
            } else {
                var length = targetIds.length;
                for (i = 0; i < length; i++) {
                    targetIdsNew.push(targetIds.pop())
                }
                targetIds = null;
                Tetris.api.requests.send(title, message, Tetris.util.getJSON(data), ["all", "app_users"], null, targetIdsNew.toString(), function(response) {
                    SpiritAccount.log("REQUEST DATA: " + Tetris.util.getJSON(response));
                    Tetris.hideFlashWithBackground();
                    try {
                        document.getElementById("page-container").focus()
                    } catch (ex) {}
                    Tetris.goToPlayTab();
                    Tetris.unlockTabs();
                    Tetris.api.requests.callFlashCallback(Tetris.api.requests.requestCallback, response.to.length)
                }, kt_st1, kt_st2, kt_st3)
            }
        };
        this.send = function(title, message, data, filters, exclude_ids, target_id, callback, kt_st1, kt_st2, kt_st3) {
            SpiritAccount.log("send");
            target_id = (typeof(target_id) != "undefined") ? target_id : null;
            kt_st1 = (typeof(kt_st1) != "undefined") ? kt_st1 : null;
            kt_st2 = (typeof(kt_st2) != "undefined") ? kt_st2 : null;
            kt_st3 = (typeof(kt_st3) != "undefined") ? kt_st3 : null;
            SpiritAccount.ui({
                method: "apprequests",
                title: title,
                message: message,
                data: data,
                filters: filters,
                to: target_id,
                exclude_ids: exclude_ids,
                subtype1: kt_st1,
                subtype2: kt_st2,
                subtype3: kt_st3
            }, callback)
        };
        this.callFlashCallback = function(callbackName, numRequestsSent) {
            Tetris.flashObject = Tetris.util.getFlashObject;
            if (callbackName && Tetris.flashObject) {
                eval("Tetris.flashObject." + callbackName + "(" + numRequestsSent + ")")
            }
        };
        this.getGiftEventName = function(giftId) {
            var eventName = "";
            if (giftId >= 1 && giftId <= 7) {
                eventName = "tetrimino"
            }
            if (giftId == 8) {
                eventName = "mystery"
            }
            if (giftId == 13) {
                eventName = "200coins"
            }
            if (giftId == 9) {
                eventName = "100coins"
            }
            if (giftId == 10) {
                eventName = "50coins"
            }
            if (giftId == 11) {
                eventName = "1cash"
            }
            if (giftId == 12 || (giftId >= 14 && giftId <= 16)) {
                eventName = "energy"
            }
            if (giftId >= 2000 & giftId < 3000) {
                eventName = "minoset"
            }
            if (giftId >= 3000 & giftId < 4000) {
                eventName = "ghostset"
            }
            return eventName
        };
        return this
    })();
    this.activity = (function() {
        this.taggedIds = new Array();
        this.cachedScores = {
            battle2p: new Array(),
            battle6p: new Array(),
            sprint1p: new Array(),
            sprint4p: new Array(),
            marathon1p: new Array(),
            arena6p: new Array()
        };
        this.activityEventCount = {};
        this.processTournamentChest = function(id, rank, isTop) {
            SpiritAccount.log("processTournamentChest");
            var params = new Object();
            params.prefix = "";
            params.postfix = "%";
            params.isTop = isTop;
            params.rank = rank;
            if (isTop == 1) {
                params.prefix = "Top";
                params.postfix = ""
            }
            params.chest = config.staticURL + "/opengraph/tournament.php?id=" + id + "&rank=" + params.rank + "&isTop=" + params.isTop;
            Tetris.api.activity.sendActivity("open", "post", params)
        };
        this.processGameActivity = function(params) {
            SpiritAccount.log("processGameActivity");
            var statistic = "";
            var orderBy = "";
            var action = "";
            var data = {
                mode: params.mode
            };
            if (params.win == 1 || params.mode == "marathon1p") {
                params.score = (params.score && params.score.indexOf(":") == -1) ? params.score : null;
                params.time_in_sec = (params.time_in_sec) ? Math.floor(params.time_in_sec) : null;
                params.line_sent = (params.garbageLineSent) ? params.garbageLineSent : null;
                var postfix = "";
                switch (params.mode) {
                    case "battle2p":
                        postfix = "_a";
                        break;
                    case "battle6p":
                        postfix = "_b";
                        break;
                    case "arena6p":
                        postfix = "_c";
                        break;
                    case "marathon1p":
                        postfix = "";
                        break;
                    case "sprint1p":
                        postfix = "_a";
                        break;
                    case "sprint4p":
                        postfix = "_b";
                        break
                }
                switch (params.mode) {
                    case "battle2p":
                    case "battle6p":
                    case "arena6p":
                        statistic = "line_sent";
                        orderBy = "asc";
                        action = "sendSendLine";
                        data.line_sent = params.line_sent;
                        data.sd_mode = params.mode;
                        data["sd_line_sent" + postfix] = params.line_sent;
                        break;
                    case "marathon1p":
                        statistic = "score";
                        orderBy = "asc";
                        action = "sendPostScore";
                        data.score = params.score;
                        data.pt_mode = params.mode;
                        data.pt_score = params.score;
                        break;
                    case "sprint1p":
                    case "sprint4p":
                        statistic = "time_in_sec";
                        orderBy = "desc";
                        action = "sendSprintRace";
                        data.st_mode = params.mode;
                        data.time_in_sec = params.time_in_sec;
                        data["st_time_in_sec" + postfix] = params.time_in_sec;
                        break
                }
                if (params.video) {
                    data.video = params.video
                }
                if (params.token) {
                    data.token = params.token;
                    data.has_token = 1
                }
                if (!Tetris.api.activity.cachedScores[params.mode][statistic] || (Tetris.api.activity.cachedScores[params.mode][statistic] && (orderBy == "asc" && params[statistic] > Tetris.api.activity.cachedScores[params.mode][statistic]) || (orderBy == "desc" && params[statistic] < Tetris.api.activity.cachedScores[params.mode][statistic]))) {
                    Tetris.api.activity.cachedScores[params.mode][statistic] = params[statistic];
                    Tetris.api.activity[action](data)
                }
            }
        };
        this.sendGamePlayed = function(params) {
            SpiritAccount.log("sendGamePlayed");
            params.game = config.staticURL + "/opengraph/game.php?id=" + params.mode;
            params.opponent = null;
            Tetris.api.activity.sendActivity("play", "post", params)
        };
        this.sendSendLine = function(params) {
            SpiritAccount.log("sendSendLine");
            params.line = config.staticURL + "/opengraph/statistic.php?id=" + params.mode + "&type=line&value=" + params.line_sent + "&v=1" + (params.video ? "&video=" + params.video : "") + (params.token ? "&token=" + params.token : "");
            params.opponent = null;
            params.video = null;
            Tetris.api.activity.sendActivity("send", "post", params)
        };
        this.sendPostScore = function(params) {
            SpiritAccount.log("sendPostScore");
            params.score = config.staticURL + "/opengraph/statistic.php?id=" + params.mode + "&type=score&value=" + params.score + "&v=1" + (params.video ? "&video=" + params.video : "") + (params.token ? "&token=" + params.token : "");
            params.opponent = null;
            params.video = null;
            Tetris.api.activity.sendActivity("post", "post", params)
        };
        this.sendSprintRace = function(params) {
            SpiritAccount.log("sendSprintRace");
            params.race = config.staticURL + "/opengraph/statistic.php?id=" + params.mode + "&type=race&value=" + params.time_in_sec + "&v=1" + (params.video ? "&video=" + params.video : "") + (params.token ? "&token=" + params.token : "");
            params.opponent = null;
            params.video = null;
            Tetris.api.activity.sendActivity("sprint", "post", params)
        };
        this.sendOutOfEnergy = function(params) {
            SpiritAccount.log("sendOutOfEnergy");
            params.energy = config.staticURL + "/opengraph/energy.php?" + (params.token ? "token=" + params.token : "") + "&v=3";
            if (params.token) {
                params.has_token = 1
            } else {
                params.has_token = 0
            }
            Tetris.api.activity.sendActivity("run_out_of", "post", params)
        };
        this.sendToast = function(params) {
            SpiritAccount.log("sendToast");
            if (!Tetris.api.activity.activityEventCount[params.type]) {
                Tetris.api.activity.activityEventCount[params.type] = 0
            }
            if (params.type == "mission") {
                params.variant_name = params.varient;
                params.mission = config.staticURL + "/opengraph/toast.php?type=mission&goal_type=" + params.goal_type + "&goal_amount=" + params.goal_amount + "&reward_type=" + params.reward_type + "&reward_amount=" + params.reward_amount + "&variant_name=" + params.variant_name + "&v=1";
                Tetris.api.activity.sendActivity("complete", "post", params)
            } else {
                if (params.type == "rank") {
                    params.variant_name = params.varient;
                    params.rank = config.staticURL + "/opengraph/toast.php?type=rank&rank_name=" + params.rank_name + "&rank_value=" + params.rank_value + "&variant_name=" + params.variant_name + "&v=1";
                    params.reached_max = params.reached_max ? params.reached_max : 0;
                    Tetris.api.activity.sendActivity("achieve", "post", params)
                }
            }
        };
        this.sendActivity = function(action, method, params) {
            SpiritAccount.log("sendActivity");
            SpiritAccount.log(new Array(action, method, params));
            Tetris.api.checkPermission("publish_actions", function(isAllowed) {
                if (isAllowed) {
                    SpiritAccount.log("Publish Allowed");
                    SpiritAccount.api("/me/" + config.appNamespace + ":" + action, method, params)
                }
            }, false)
        };
        return this
    })();
    this.checkPermission = function(permission, callback, requestPermission, forceRequest) {
        requestPermission = (typeof(requestPermission) == "undefined" ? true : requestPermission);
        forceRequest = (typeof(forceRequest) == "undefined" ? false : forceRequest);
        SpiritAccount.api("/" + config.userID + "/permissions?fields=permission,status", function(response) {
            var isAllowed = false;
            if (response.data) {
                for (var i = 0; i < response.data.length; i++) {
                    if (response.data[i].permission == permission) {
                        isAllowed = (response.data[i].status == "granted")
                    }
                }
            }
            if (isAllowed) {
                SpiritAccount.log("Permission Allowed - " + permission);
                callback(true)
            } else {
                var cookie = getCookie("fb_" + permission + config.userID);
                SpiritAccount.log("Permission Not Allowed - " + permission + ", cookie: " + cookie + ", requestPermission: " + requestPermission);
                if (requestPermission) {
                    if ((!cookie || cookie && forceRequest)) {
                        SpiritAccount.login(function(response) {
                            setCookie("fb_" + permission + config.userID, 1, 30);
                            Tetris.api.checkPermission(permission, callback, false, false)
                        }, {
                            scope: permission,
                            auth_type: "rerequest"
                        })
                    } else {
                        callback(false)
                    }
                } else {
                    callback(false)
                }
            }
        })
    };
    return this
})();
if (typeof Tetris == "undefined") {
    this.Tetris = (function() {
        return this
    })()
}
Tetris.debug = (function() {
    this.openDebugWindowMain = function(a, c, b) {
        if (typeof(this.dbgWndMain) == "undefined" || this.dbgWndMain.closed) {
            this.dbgWndMain = window.open("", "dbgWndMain", "scrollbars=1,width=" + c + ",height=" + b);
            this.dbgWndMain.Tetris = window.Tetris;
            this.dbgWndMain.document.write("<title>Tetris Battle Debug Panel</title><style type='text/css'>* { font-family: Courier New; font-size: 11px; }</style>");
            this.dbgWndMain.document.write(a)
        } else {
            this.dbgWndMain.resizeTo(c, b);
            this.dbgWndMain.document.getElementsByTagName("body")[0].innerHTML = a
        }
    };
    this.setDebugWindowContent = function(a) {
        if (typeof(this.dbgWndMain) != "undefined" && !this.dbgWndMain.closed) {
            this.dbgWndMain.document.getElementsByTagName("body")[0].innerHTML = a
        }
    };
    this.setParam = function(a, b) {
        if (b.type == "checkbox") {
            a[b.id] = b.checked
        } else {
            if (b.type == "radio") {
                if (b.checked) {
                    a[b.id] = b.value
                }
            } else {
                if (b.type == "text") {
                    a[b.id] = b.value
                }
            }
        }
    };
    this.mainCallback = function(f, c) {
        if (typeof(this.dbgWndMain) == "undefined") {
            return
        }
        var e = {};
        if (c == "all") {
            var a = dbgWndMain.document.getElementsByTagName("input");
            for (var d = 0; d < a.length; d++) {
                this.setParam(e, a[d])
            }
        } else {
            if (typeof(c) != "undefined") {
                var b = c.split(",");
                for (var d = 0; d < b.length; d++) {
                    this.setParam(e, this.dbgWndMain.document.getElementById(b[d]))
                }
            }
        }
        this.dbgWndMain.opener.document.getElementById("flash-object").debugMain(f, e)
    };
    this.getCSS = function() {
        var a = "<style type='text/css'>* { font-family: Courier New; font-size: 11px; } P.warn { color : red;font-weight:bold; } </style>";
        return a
    };
    this.openTraceWindow = function() {
        if (typeof(this.dbgWndTrace) == "undefined" || this.dbgWndTrace.closed) {
            var b = getCSS();
            this.dbgWndTrace = window.open("", "dbgWndTrace", "scrollbars=1,width=600,height=400");
            this.dbgWndTrace.document.close();
            this.dbgWndTrace.document.write("<title>Tetris Battle Debug Messages</title><style type='text/css'>html,body{margin: 0;padding: 0;height: 100%; width: 100%}#container{}#options{border: 1px solid #000000;position: relative;height : 40px}#content{border: 1px solid #000000;padding-bottom: -40px;height: 100%;}</style><body style='width: 100%'><div id='container'><iframe id='options'>" + b + "</iframe><iframe id='content'>" + b + "</iframe></div></body>");
            this.frameOption = this.dbgWndTrace.document.getElementById("options");
            this.frameOption.contentWindow.document.traceClear = function() {
                Tetris.debug.traceClear()
            };
            $(dbgWndTrace).resize(function() {
                Tetris.debug.resizeContent()
            });
            this.frameOption.contentWindow.document.write("<button type='button' onclick='traceClear()'>Clear</button>\t");
            this.frameOption.contentWindow.document.write("<input id='checkboxScroll' type='checkbox' checked='checked'>Scrolling</input>");
            this.frameTrace = this.dbgWndTrace.document.getElementById("content");
            this.frameTrace.contentWindow.document.write(b);
            if (typeof(this.mTraceArray) != "undefined") {
                var a = "";
                for (i = 0; i < mTraceArray.length; i++) {
                    a += mTraceArray[i]
                }
                this.frameTrace.contentWindow.document.write(a);
                this.scrollTraceWindow(0, this.frameTrace.contentWindow.document.body.scrollHeight)
            }
            this.resizeContent()
        }
        dbgWndTrace.focus()
    };
    this.resizeContent = function() {
        var a = $(dbgWndTrace).width() - 20;
        $(this.frameTrace).css({
            width: a,
            height: $(dbgWndTrace).height() - 49
        });
        $(this.frameOption).css({
            width: a
        })
    };
    this.traceClear = function() {
        this.frameTrace.contentWindow.document.close();
        this.mTraceArray = new Array();
        this.trace("")
    };
    this.trace = function(d) {
        var b = d;
        var a = 300;
        if (typeof(this.mTraceArray) == "undefined") {
            this.mTraceArray = new Array()
        }
        this.mTraceArray.push(b);
        if (this.mTraceArray.length > a) {
            this.mTraceArray.shift()
        }
        if (typeof(this.dbgWndTrace) != "undefined" && !this.dbgWndTrace.closed) {
            var c = getCSS();
            this.frameTrace.contentWindow.document.write(c);
            this.frameTrace.contentWindow.document.write(b);
            this.scrollTraceWindow(0, this.frameTrace.contentWindow.document.body.scrollHeight)
        }
    };
    this.scrollTraceWindow = function(b, a) {
        var c = this.frameOption.contentWindow.document.getElementById("checkboxScroll").checked;
        if (c) {
            this.frameTrace.contentWindow.scrollTo(b, a)
        }
    };
    return this
})();
Tetris.googleAds = (function() {
    this.ads = new Array();
    this.googleAdCount = 0;
    this.ad5MauDau = false;
    this.appendAdIFrame = function(a) {
        var c = $("#" + (this.ads[a]["targetDivId"]));
        var b = '<iframe style="display: block;" src="//' + config.advertisingPartialURL;
        b = b + this.ads[a]["fileName"] + '.html" width="' + this.ads[a]["width"] + '" height="' + this.ads[a]["height"] + '" hspace="0" vspace="0" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"></iframe>';
        c.html(b);
        this.googleAdCount--;
        if (this.googleAdCount < 1) {
            Tetris.initAdvertisementsComplete()
        }
    };
    this.writeBasicAdCode = function(b, c, d, a, e) {
        if (util.arrayIndexOf(config.googleAds.enabledAds, b) != -1) {
            if (b != "ad-5" || (b == "ad-5" && !this.ad5MauDau)) {
                this.ads[e] = {
                    targetDivId: b,
                    fileName: c,
                    width: d,
                    height: a
                };
                setTimeout("Tetris.googleAds.appendAdIFrame(" + e + ")", (e + 30));
                this.googleAdCount++
            }
        } else {
            $("#" + b).remove()
        }
    };
    return this
})();
Tetris.help = (function() {
    this.callback = function() {};
    this.showTipsAndTricks = function(a) {
        this.callback = a;
        $("#page-container").html("<div id='help-container'></div>");
        Tetris.help.buildHelpSection($("#help-container"), "help/tipsandtricks.php")
    };
    this.buildHelpSection = function(d, g) {
        i = 0;
        j = 0;
        b = false;
        h = 1;
        e = 1;
        d.load(g, function() {
            $("#tabs").prepend("<ul></ul>");
            var k = $(".tab").length;
            var l = 0;
            $(".tab").each(function() {
                var m = $(this).text();
                var n = $(this).attr("id").substr(4, 1);
                $("#tabs > ul").append('<li><a href="#tabs-' + n + '">' + m + "</a></li>");
                $(this).remove();
                l++;
                if (k == l) {
                    f()
                }
            })
        });

        function f() {
            var k = $(".tab-content").length;
            var l = 0;
            $(".tab-content").each(function() {
                var m = $(this).attr("id").substr(12, 1);
                $(this).removeClass("tab-content");
                $(this).attr({
                    id: "tabs-" + m
                });
                l++;
                if (k == l) {
                    c()
                }
            })
        }
        var i = 0;
        var j = 0;
        var b = false;
        var h = 1;
        var e = 1;

        function c() {
            var m = ".accordion";
            for (var l = 1; l < h; l++) {
                m += " .accordion"
            }
            var k = $(m);
            i += k.length;
            if (k.length == 0) {
                e = h - 1;
                a()
            }
            k.each(function() {
                var n = $(this);
                n.addClass("accordion-level-" + h);
                $(this).children(".item").each(function() {
                    var o = $(this).children(".title").html();
                    n.append('<h3 class="header-level-' + h + '"><a href="#">' + o + "</a></h3>");
                    var p = $(this).children(".content").html();
                    n.append("<div>" + p + "</div>");
                    $(this).remove()
                });
                j++;
                if (i == j) {
                    h++;
                    c()
                }
            })
        }

        function a() {
            $("#tabs").tabs({
                select: function(k, m) {
                    var l = $(this).attr("href");
                    swfLoadImage($(m.panel))
                },
                show: function(k, l) {
                    fitIFrameToCanvas()
                }
            });
            for (h = 1; h <= e; h++) {
                $(".accordion-level-" + h).accordion({
                    header: "h3.header-level-" + h,
                    active: false,
                    clearStyle: true,
                    autoHeight: false,
                    collapsible: true,
                    change: function() {
                        fitIFrameToCanvas()
                    }
                })
            }
            swfLoadImage($("#tabs-1"));
            if (typeof(this.callback) == "function") {
                this.callback()
            }
        }
    };
    this.swfLoadImage = function(a) {
        $(a).find(".flashimage").each(function() {
            var c = $(this).attr("id");
            var e = $(this).children(".source").text();
            var d = $(this).children(".width").text();
            var b = $(this).children(".height").text();
            $(this).empty();
            swfobject.embedSWF(e, c, d, b, config.flash.minimumVersionString, config.staticURL + "flash/" + config.flash.dir + "/expressInstall.swf")
        })
    };
    return this
})();
jQuery.base64 = (function(b) {
    var a = {
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        lookup: null,
        ie: /MSIE /.test(navigator.userAgent),
        ieo: /MSIE [67]/.test(navigator.userAgent),
        encode: function(j) {
            var g = a.toUtf8(j),
                e = -1,
                d = g.length,
                i, f, h = [, , , ];
            if (a.ie) {
                var c = [];
                while (++e < d) {
                    i = g[e + 1], f = g[e + 2];
                    h[0] = g[e] >> 2;
                    h[1] = ((g[e] & 3) << 4) | (g[++e] >> 4);
                    if (isNaN(i)) {
                        h[2] = h[3] = 64
                    } else {
                        h[2] = ((g[e] & 15) << 2) | (g[++e] >> 6);
                        h[3] = (isNaN(f)) ? 64 : g[e] & 63
                    }
                    c.push(a.alphabet[h[0]], a.alphabet[h[1]], a.alphabet[h[2]], a.alphabet[h[3]])
                }
                return c.join("")
            } else {
                c = "";
                while (++e < d) {
                    i = g[e + 1];
                    f = g[e + 2];
                    h[0] = g[e] >> 2;
                    h[1] = ((g[e] & 3) << 4) | (g[++e] >> 4);
                    if (isNaN(i)) {
                        h[2] = h[3] = 64
                    } else {
                        h[2] = ((g[e] & 15) << 2) | (g[++e] >> 6);
                        h[3] = (isNaN(f)) ? 64 : g[e] & 63
                    }
                    c += a.alphabet[h[0]] + a.alphabet[h[1]] + a.alphabet[h[2]] + a.alphabet[h[3]]
                }
                return c
            }
        },
        decode: function(f) {
            var e = a.fromUtf8(f),
                d = 0,
                c = e.length;
            if (a.ieo) {
                result = [];
                while (d < c) {
                    if (e[d] < 128) {
                        result.push(String.fromCharCode(e[d++]))
                    } else {
                        if (e[d] > 191 && e[d] < 224) {
                            result.push(String.fromCharCode(((e[d++] & 31) << 6) | (e[d++] & 63)))
                        } else {
                            result.push(String.fromCharCode(((e[d++] & 15) << 12) | ((e[d++] & 63) << 6) | (e[d++] & 63)))
                        }
                    }
                }
                return result.join("")
            } else {
                result = "";
                while (d < c) {
                    if (e[d] < 128) {
                        result += String.fromCharCode(e[d++])
                    } else {
                        if (e[d] > 191 && e[d] < 224) {
                            result += String.fromCharCode(((e[d++] & 31) << 6) | (e[d++] & 63))
                        } else {
                            result += String.fromCharCode(((e[d++] & 15) << 12) | ((e[d++] & 63) << 6) | (e[d++] & 63))
                        }
                    }
                }
                return result
            }
        },
        toUtf8: function(g) {
            var d = -1,
                c = g.length,
                f, e = [];
            if (/^[\x00-\x7f]*$/.test(g)) {
                while (++d < c) {
                    e.push(g.charCodeAt(d))
                }
            } else {
                while (++d < c) {
                    f = g.charCodeAt(d);
                    if (f < 128) {
                        e.push(f)
                    } else {
                        if (f < 2048) {
                            e.push((f >> 6) | 192, (f & 63) | 128)
                        } else {
                            e.push((f >> 12) | 224, ((f >> 6) & 63) | 128, (f & 63) | 128)
                        }
                    }
                }
            }
            return e
        },
        fromUtf8: function(g) {
            var d = -1,
                c, e = [],
                f = [, , , ];
            if (!a.lookup) {
                c = a.alphabet.length;
                a.lookup = {};
                while (++d < c) {
                    a.lookup[a.alphabet[d]] = d
                }
                d = -1
            }
            c = g.length;
            while (d < c) {
                f[0] = a.lookup[g.charAt(++d)];
                f[1] = a.lookup[g.charAt(++d)];
                e.push((f[0] << 2) | (f[1] >> 4));
                f[2] = a.lookup[g.charAt(++d)];
                if (f[2] == 64) {
                    break
                }
                e.push(((f[1] & 15) << 4) | (f[2] >> 2));
                f[3] = a.lookup[g.charAt(++d)];
                if (f[3] == 64) {
                    break
                }
                e.push(((f[2] & 3) << 6) | f[3])
            }
            return e
        }
    };
    return {
        decode: a.decode,
        encode: a.encode
    }
}(jQuery));
jQuery.uaMatch = function(b) {
    b = b.toLowerCase();
    var a = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || b.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
    return {
        browser: a[1] || "",
        version: a[2] || "0"
    }
};
if (!jQuery.browser) {
    matched = jQuery.uaMatch(navigator.userAgent);
    browser = {};
    if (matched.browser) {
        browser[matched.browser] = true;
        browser.version = matched.version
    }
    if (browser.chrome) {
        browser.webkit = true
    } else {
        if (browser.webkit) {
            browser.safari = true
        }
    }
    jQuery.browser = browser
};
(function($) {
    var escapeable = /["\\\x00-\x1f\x7f-\x9f]/g,
        meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
    $.toJSON = typeof JSON === "object" && JSON.stringify ? JSON.stringify : function(o) {
        if (o === null) {
            return "null"
        }
        var type = typeof o;
        if (type === "undefined") {
            return undefined
        }
        if (type === "number" || type === "boolean") {
            return "" + o
        }
        if (type === "string") {
            return $.quoteString(o)
        }
        if (type === "object") {
            if (typeof o.toJSON === "function") {
                return $.toJSON(o.toJSON())
            }
            if (o.constructor === Date) {
                var month = o.getUTCMonth() + 1,
                    day = o.getUTCDate(),
                    year = o.getUTCFullYear(),
                    hours = o.getUTCHours(),
                    minutes = o.getUTCMinutes(),
                    seconds = o.getUTCSeconds(),
                    milli = o.getUTCMilliseconds();
                if (month < 10) {
                    month = "0" + month
                }
                if (day < 10) {
                    day = "0" + day
                }
                if (hours < 10) {
                    hours = "0" + hours
                }
                if (minutes < 10) {
                    minutes = "0" + minutes
                }
                if (seconds < 10) {
                    seconds = "0" + seconds
                }
                if (milli < 100) {
                    milli = "0" + milli
                }
                if (milli < 10) {
                    milli = "0" + milli
                }
                return '"' + year + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + "." + milli + 'Z"'
            }
            if (o.constructor === Array) {
                var ret = [];
                for (var i = 0; i < o.length; i++) {
                    ret.push($.toJSON(o[i]) || "null")
                }
                return "[" + ret.join(",") + "]"
            }
            var name, val, pairs = [];
            for (var k in o) {
                type = typeof k;
                if (type === "number") {
                    name = '"' + k + '"'
                } else {
                    if (type === "string") {
                        name = $.quoteString(k)
                    } else {
                        continue
                    }
                }
                type = typeof o[k];
                if (type === "function" || type === "undefined") {
                    continue
                }
                val = $.toJSON(o[k]);
                pairs.push(name + ":" + val)
            }
            return "{" + pairs.join(",") + "}"
        }
    };
    $.evalJSON = typeof JSON === "object" && JSON.parse ? JSON.parse : function(src) {
        return eval("(" + src + ")")
    };
    $.secureEvalJSON = typeof JSON === "object" && JSON.parse ? JSON.parse : function(src) {
        var filtered = src.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
        if (/^[\],:{}\s]*$/.test(filtered)) {
            return eval("(" + src + ")")
        } else {
            throw new SyntaxError("Error parsing JSON, source is not valid.")
        }
    };
    $.quoteString = function(string) {
        if (string.match(escapeable)) {
            return '"' + string.replace(escapeable, function(a) {
                var c = meta[a];
                if (typeof c === "string") {
                    return c
                }
                c = a.charCodeAt();
                return "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16)
            }) + '"'
        }
        return '"' + string + '"'
    }
})(jQuery);

function KontagentApi(b, a) {
    this._timestamp = null;
    this._baseApiUrl = "http://api.geo.kontagent.net/api/v1/";
    this._baseHttpsApiUrl = "https://api.geo.kontagent.net/api/v1/";
    this._baseTestServerUrl = "http://test-server.kontagent.com/api/v1/";
    this._baseHttpsTestServerUrl = "https://test-server.kontagent.com/api/v1/";
    this._apiKey = b;
    this._useTestServer = (a.useTestServer) ? a.useTestServer : false;
    this._useHttps = (a.useHttps) ? a.useHttps : false;
    this._validateParams = (a.validateParams) ? a.validateParams : false;
    this._isSendingMessage = false
}
KontagentApi.prototype._imageCallback = function(a) {
    SpiritAccount._ktApi._isSendingMessage = false;
    if (typeof(a) == "function") {
        setTimeout(a, 50)
    }
};
KontagentApi.prototype._sendHttpRequestViaImgTag = function(c, a) {
    var b = new Image();
    try {
        b.onerror = this._imageCallback(a);
        b.onload = this._imageCallback(null)
    } catch (d) {
        SpiritAccount.log(d.message);
        SpiritAccount.log(d.description)
    }
    b.src = c
};
KontagentApi.prototype._sendMessageViaImgTag = function(f, h, b, e) {
    if (this._validateParams == true) {
        var a;
        for (var c in h) {
            a = KtValidator.validateParameter(f, c, h[c]);
            if (a != true) {
                e(a);
                return
            }
        }
    }
    var d;
    var g = Date.parse((new Date()).toUTCString().slice(0, -4)) / 1000;
    if (this._timestamp == g) {
        g += 1
    }
    this._timestamp = g;
    h.ts = g;
    if (this._useTestServer == true) {
        if (this._useHttps == true) {
            d = this._baseHttpsTestServerUrl + this._apiKey + "/" + f + "/?" + this._httpBuildQuery(h)
        } else {
            d = this._baseTestServerUrl + this._apiKey + "/" + f + "/?" + this._httpBuildQuery(h)
        }
    } else {
        if (this._useHttps == true) {
            d = this._baseHttpsApiUrl + this._apiKey + "/" + f + "/?" + this._httpBuildQuery(h)
        } else {
            d = this._baseApiUrl + this._apiKey + "/" + f + "/?" + this._httpBuildQuery(h)
        }
    }
    this._isSendingMessage = true;
    this._sendHttpRequestViaImgTag(d, b)
};
KontagentApi.prototype._httpBuildQuery = function(d) {
    var c, a, e;
    var b = [];
    for (a in d) {
        e = d[a] ? encodeURIComponent(decodeURIComponent(d[a].toString())) : "";
        a = encodeURIComponent(decodeURIComponent(a));
        b.push(a + "=" + e)
    }
    return b.join("&")
};
KontagentApi.prototype._s4 = function() {
    return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
};
KontagentApi.prototype.genUniqueTrackingTag = function() {
    var a = "";
    for (i = 0; i < 8; i++) {
        a += this._s4()
    }
    return a
};
KontagentApi.prototype.genShortUniqueTrackingTag = function() {
    var a = "";
    for (i = 0; i < 8; i++) {
        a += this._s4()
    }
    return a
};
KontagentApi.prototype.trackInviteSent = function(d, g, b, e, a, c) {
    var f = {
        s: d,
        r: g,
        u: b
    };
    if (e != null && typeof e != "undefined") {
        if (e.subtype1) {
            f.st1 = e.subtype1
        }
        if (e.subtype2) {
            f.st2 = e.subtype2
        }
        if (e.subtype3) {
            f.st3 = e.subtype3
        }
    }
    this._sendMessageViaImgTag("ins", f, a, c)
};
KontagentApi.prototype.trackInviteResponse = function(b, d, a, c) {
    var e = {
        i: "0",
        u: b
    };
    if (d != null && typeof d != "undefined") {
        if (d.recipientUserId) {
            e.r = d.recipientUserId
        }
        if (d.subtype1) {
            e.st1 = d.subtype1
        }
        if (d.subtype2) {
            e.st2 = d.subtype2
        }
        if (d.subtype3) {
            e.st3 = d.subtype3
        }
    }
    this._sendMessageViaImgTag("inr", e, a, c)
};
KontagentApi.prototype.trackNotificationSent = function(d, g, b, e, a, c) {
    var f = {
        s: d,
        r: g,
        u: b
    };
    if (e != null && typeof e != "undefined") {
        if (e.subtype1) {
            f.st1 = e.subtype1
        }
        if (e.subtype2) {
            f.st2 = e.subtype2
        }
        if (e.subtype3) {
            f.st3 = e.subtype3
        }
    }
    this._sendMessageViaImgTag("nts", f, successCalback, c)
};
KontagentApi.prototype.trackNotificationResponse = function(b, d, a, c) {
    var e = {
        i: "0",
        u: b
    };
    if (d != null && typeof d != "undefined") {
        if (d.recipientUserId) {
            e.r = d.recipientUserId
        }
        if (d.subtype1) {
            e.st1 = d.subtype1
        }
        if (d.subtype2) {
            e.st2 = d.subtype2
        }
        if (d.subtype3) {
            e.st3 = d.subtype3
        }
    }
    this._sendMessageViaImgTag("ntr", e, a, c)
};
KontagentApi.prototype.trackNotificationEmailSent = function(d, g, b, e, a, c) {
    var f = {
        s: d,
        r: g,
        u: b
    };
    if (e != null && typeof e != "undefined") {
        if (e.subtype1) {
            f.st1 = e.subtype1
        }
        if (e.subtype2) {
            f.st2 = e.subtype2
        }
        if (e.subtype3) {
            f.st3 = e.subtype3
        }
    }
    this._sendMessageViaImgTag("nes", f, a, c)
};
KontagentApi.prototype.trackNotificationEmailResponse = function(b, d, a, c) {
    var e = {
        i: "0",
        u: b
    };
    if (d != null && typeof d != "undefined") {
        if (d.recipientUserId) {
            e.r = d.recipientUserId
        }
        if (d.subtype1) {
            e.st1 = d.subtype1
        }
        if (d.subtype2) {
            e.st2 = d.subtype2
        }
        if (d.subtype3) {
            e.st3 = d.subtype3
        }
    }
    this._sendMessageViaImgTag("nei", e, a, c)
};
KontagentApi.prototype.trackStreamPost = function(d, b, f, e, a, c) {
    var g = {
        s: d,
        u: b,
        tu: f
    };
    if (e != null && typeof e != "undefined") {
        if (e.subtype1) {
            g.st1 = e.subtype1
        }
        if (e.subtype2) {
            g.st2 = e.subtype2
        }
        if (e.subtype3) {
            g.st3 = e.subtype3
        }
    }
    this._sendMessageViaImgTag("pst", g, a, c)
};
KontagentApi.prototype.trackStreamPostResponse = function(b, e, d, a, c) {
    var f = {
        i: "0",
        u: b,
        tu: e
    };
    if (d != null && typeof d != "undefined") {
        if (d.recipientUserId) {
            f.r = d.recipientUserId
        }
        if (d.subtype1) {
            f.st1 = d.subtype1
        }
        if (d.subtype2) {
            f.st2 = d.subtype2
        }
        if (d.subtype3) {
            f.st3 = d.subtype3
        }
    }
    this._sendMessageViaImgTag("psr", f, a, c)
};
KontagentApi.prototype.trackEvent = function(d, b, e, a, c) {
    var f = {
        s: d,
        n: b
    };
    if (e != null && typeof e != "undefined") {
        if (e.value) {
            f.v = e.value
        }
        if (e.level) {
            f.l = e.level
        }
        if (e.subtype1) {
            f.st1 = e.subtype1
        }
        if (e.subtype2) {
            f.st2 = e.subtype2
        }
        if (e.subtype3) {
            f.st3 = e.subtype3
        }
    }
    this._sendMessageViaImgTag("evt", f, a, c)
};
KontagentApi.prototype.trackApplicationAdded = function(c, d, a, b) {
    var e = {
        s: c
    };
    if (d != null && typeof d != "undefined") {
        if (d.uniqueTrackingTag) {
            e.u = d.uniqueTrackingTag
        }
        if (d.shortUniqueTrackingTag) {
            e.su = d.shortUniqueTrackingTag
        }
    }
    this._sendMessageViaImgTag("apa", e, a, b)
};
KontagentApi.prototype.trackApplicationRemoved = function(c, a, b) {
    var d = {
        s: c
    };
    this._sendMessageViaImgTag("apr", d, a, b)
};
KontagentApi.prototype.trackThirdPartyCommClick = function(d, f, c, a, b) {
    var e = {
        i: "0",
        tu: d,
        su: f
    };
    if (c != null && typeof c != "undefined") {
        if (c.userId) {
            e.s = c.userId
        }
        if (c.subtype1) {
            e.st1 = c.subtype1
        }
        if (c.subtype2) {
            e.st2 = c.subtype2
        }
        if (c.subtype3) {
            e.st3 = c.subtype3
        }
    }
    this._sendMessageViaImgTag("ucc", e, a, b)
};
KontagentApi.prototype.trackPageRequest = function(c, d, a, b) {
    var e = {
        s: c,
        ts: Math.round(new Date().getTime() / 1000)
    };
    if (d != null && typeof d != "undefined") {
        if (d.ipAddress) {
            e.ip = d.ipAddress
        }
        if (d.pageAddress) {
            e.u = d.pageAddress
        }
    }
    this._sendMessageViaImgTag("pgr", e, a, b)
};
KontagentApi.prototype.trackUserInformation = function(c, d, a, b) {
    var e = {
        s: c
    };
    if (d != null && typeof d != "undefined") {
        if (d.birthYear) {
            e.b = d.birthYear
        }
        if (d.gender) {
            e.g = d.gender
        }
        if (d.country) {
            e.lc = d.country
        }
        if (d.friendCount) {
            e.f = d.friendCount
        }
    }
    this._sendMessageViaImgTag("cpu", e, a, b)
};
KontagentApi.prototype.trackGoalCount = function(c, d, a, b) {
    var e = {
        s: c
    };
    if (d != null && typeof d != "undefined") {
        if (d.goalCount1) {
            e.gc1 = d.goalCount1
        }
        if (d.goalCount2) {
            e.gc2 = d.goalCount2
        }
        if (d.goalCount3) {
            e.gc3 = d.goalCount3
        }
        if (d.goalCount4) {
            e.gc4 = d.goalCount4
        }
    }
    this._sendMessageViaImgTag("gci", e, a, b)
};
KontagentApi.prototype.trackRevenue = function(c, e, d, a, b) {
    var f = {
        s: c,
        v: e
    };
    if (d != null && typeof d != "undefined") {
        if (d.type) {
            f.tu = d.type
        }
        if (d.subtype1) {
            f.st1 = d.subtype1
        }
        if (d.subtype2) {
            f.st2 = d.subtype2
        }
        if (d.subtype3) {
            f.st3 = d.subtype3
        }
    }
    this._sendMessageViaImgTag("mtu", f, a, b)
};
KontagentApi.prototype.genInstalledCookie = function(b, a) {
    return "kt_handled_installed_" + b + "_" + a
};
KontagentApi.prototype.genCaptureUserInfo = function(b, a) {
    return "kt_capture_user_info_" + b + "_" + a
};

function setCookie(c, d, e) {
    if (e) {
        var b = new Date();
        b.setTime(b.getTime() + (e * 24 * 60 * 60 * 1000));
        var a = "; expires=" + b.toGMTString()
    } else {
        var a = ""
    }
    document.cookie = c + "=" + d + a + "; path=/"
}

function setDailyCookie(c, d) {
    var b = new Date();
    b.setTime(b.getTime() + (24 * 60 * 60 * 1000));
    b = new Date(b.toLocaleDateString());
    var a = "; expires=" + b.toGMTString();
    document.cookie = c + "=" + d + a + "; path=/"
}

function getCookie(b) {
    var e = b + "=";
    var a = document.cookie.split(";");
    for (var d = 0; d < a.length; d++) {
        var f = a[d];
        while (f.charAt(0) == " ") {
            f = f.substring(1, f.length)
        }
        if (f.indexOf(e) == 0) {
            return f.substring(e.length, f.length)
        }
    }
    return null
}

function deleteCookie(a) {
    setCookie(a, "", -1)
};
var BASE_FB = {};
primeKontagentFacebookSDK = function() {
    BASE_FB.init = SpiritAccount.init;
    BASE_FB.login = SpiritAccount.login;
    BASE_FB.ui = SpiritAccount.ui;
    BASE_FB.api = SpiritAccount.api;
    SpiritAccount._ktApi = null;
    SpiritAccount.getKontagentApi = function() {
        return SpiritAccount._ktApi
    };
    SpiritAccount.init = function(a) {
        a.oauth = true;
        a.xfbml = false;
        a.hideFlashCallback = Tetris.hideFlashCallback;
        a.frictionlessRequests = true;
        a.channelUrl = Tetris.channelUrl;
        a.version = "v2.9";
        BASE_FB.init(a)
    };
    SpiritAccount.login = function(a, b) {
        var c = function(d) {
            if (d.authResponse) {
                if (KT_USE_JS_LOGIN) {
                    Tetris.trackApplicationAdded(d.authResponse.userID, {
                        uniqueTrackingTag: (KT_GET.kt_u) ? KT_GET.kt_u : null,
                        shortUniqueTrackingTag: (KT_GET.kt_su) ? KT_GET.kt_su : null
                    })
                }
            }
            a(d)
        };
        BASE_FB.login(c, b)
    };
    SpiritAccount.ui = function(f, a) {
        var e = a;
        var c = SpiritAccount.getAuthResponse();
        if (c && c.userID) {
            switch (f.method.toLowerCase()) {
                case "apprequests":
                    var b = SpiritAccount._ktApi.genUniqueTrackingTag();
                    f.data = SpiritAccount._appendKtVarsToDataField(f.data, {
                        kt_track_inr: 1,
                        kt_u: b,
                        kt_st1: f.subtype1,
                        kt_st2: f.subtype2,
                        kt_st3: f.subtype3
                    });
                    e = function(g) {
                        if (g && g.request_ids && g.request_ids.length > 0) {
                            Tetris.trackInviteSent(c.userID, g.request_ids.join(","), b, {
                                subtype1: f.subtype1,
                                subtype2: f.subtype2,
                                subtype3: f.subtype3
                            })
                        } else {
                            if (g && g.to && g.to.length > 0) {
                                Tetris.trackInviteSent(c.userID, g.to.join(","), b, {
                                    subtype1: f.subtype1,
                                    subtype2: f.subtype2,
                                    subtype3: f.subtype3
                                })
                            }
                        }
                        a(g)
                    };
                    break;
                case ("feed"):
                    var b = SpiritAccount._ktApi.genUniqueTrackingTag();
                    if (f.link) {
                        f.link = SpiritAccount._appendKtVarsToUrl(f.link, {
                            kt_track_psr: 1,
                            kt_u: b,
                            kt_st1: f.subtype1,
                            kt_st2: f.subtype2,
                            kt_st3: f.subtype3
                        })
                    }
                    if (f.actions && f.actions.length && f.actions.length > 0) {
                        for (var d = 0; d < f.actions.length; d++) {
                            if (f.actions[d]["link"]) {
                                f.actions[d]["link"] = SpiritAccount._appendKtVarsToUrl(f.actions[d]["link"], {
                                    kt_track_psr: 1,
                                    kt_u: b,
                                    kt_st1: f.subtype1,
                                    kt_st2: f.subtype2,
                                    kt_st3: f.subtype3
                                })
                            }
                        }
                    }
                    e = function(g) {
                        if (g && g.post_id) {
                            Tetris.trackStreamPost(c.userID, b, "stream", {
                                subtype1: f.subtype1,
                                subtype2: f.subtype2,
                                subtype3: f.subtype3
                            })
                        }
                        a(g)
                    };
                    break;
                case ("oauth"):
                    break
            }
        }
        BASE_FB.ui(f, e)
    };
    SpiritAccount._perform_redirect = function() {
        if (SpiritAccount._ktApi._isSendingMessage) {
            SpiritAccount.log("sending msg");
            setTimeout(SpiritAccount._perform_redirect(), 100)
        } else {
            setTimeout("top.location.href = kt_redirect;", 1000)
        }
    };
    SpiritAccount._trackLandingBeforeRedirect = function() {
        if (KT_SEND_CLIENT_SIDE) {
            if (KT_GET.kt_track_inr) {
                SpiritAccount.log("kt_track_invite");
                Tetris.trackInviteResponse(KT_GET.kt_u, {
                    recipientUserId: (userId > 0) ? userId : null,
                    subtype1: (KT_GET.kt_st1) ? KT_GET.kt_st1 : null,
                    subtype2: (KT_GET.kt_st2) ? KT_GET.kt_st2 : null,
                    subtype3: (KT_GET.kt_st3) ? KT_GET.kt_st3 : null
                })
            }
            if (KT_GET.kt_track_psr) {
                Tetris.trackStreamPostResponse(KT_GET.kt_u, "stream", {
                    recipientUserId: (userId > 0) ? userId : null,
                    subtype1: (KT_GET.kt_st1) ? KT_GET.kt_st1 : null,
                    subtype2: (KT_GET.kt_st2) ? KT_GET.kt_st2 : null,
                    subtype3: (KT_GET.kt_st3) ? KT_GET.kt_st3 : null
                })
            }
            if (KT_GET.kt_type) {
                Tetris.trackThirdPartyCommClick(KT_GET.kt_type, KT_GET.kt_su, {
                    userId: (userId > 0) ? userId : null,
                    subtype1: (KT_GET.kt_st1) ? KT_GET.kt_st1 : null,
                    subtype2: (KT_GET.kt_st2) ? KT_GET.kt_st2 : null,
                    subtype3: (KT_GET.kt_st3) ? KT_GET.kt_st3 : null
                })
            }
            if (window.kt_redirect && !KT_USE_JS_LOGIN) {
                SpiritAccount._perform_redirect()
            }
        }
    };
    SpiritAccount._trackLandingAfterRedirect = function() {
        var b = SpiritAccount.getAuthResponse();
        if (b && b.userID) {
            Tetris.trackPageRequest(b.userID);
            if (KT_GET.fb_appcenter || (KT_GET.kt_track_apa && KT_GET.code && !KT_GET.error)) {
                var a = SpiritAccount._ktApi.genInstalledCookie(Tetris.config.appId, b.userID);
                if (!getCookie(a)) {
                    Tetris.trackApplicationAdded(b.userID, {
                        uniqueTrackingTag: (KT_GET.kt_u) ? KT_GET.kt_u : null,
                        shortUniqueTrackingTag: (KT_GET.kt_su) ? KT_GET.kt_su : null
                    });
                    setCookie(a, "done");
                    Tetris.config.install = true;
                    Tetris.trackEvent(b.userID, "Install", {
                        subtype1: "Funnel"
                    })
                }
            }
        }
    };
    SpiritAccount._trackInviteSent = function(a, b) {
        if (KT_GET.kt_track_ins) {
            Tetris.trackInviteSent(a, KT_GET.ids, KT_GET.kt_u, {
                subtype1: (KT_GET.kt_st1) ? KT_GET.kt_st1 : null,
                subtype2: (KT_GET.kt_st2) ? KT_GET.kt_st2 : null,
                subtype3: (KT_GET.kt_st3) ? KT_GET.kt_st3 : null
            }, b)
        }
    };
    SpiritAccount._trackUserInformation = function(d, a) {
        var c, b;
        if (d) {
            c = d.substring(0, 1)
        }
        if (a) {
            b = a
        }
        Tetris.trackUserInformation(Tetris.config.userId, {
            gender: c,
            birthYear: b
        });
        setTimeout(function() {
            BASE_FB.api("/me/friends?fields=id,name", function(f) {
                var e;
                if (f.summary && f.summary.total_count) {
                    e = f.summary.total_count
                }
                Tetris.trackUserInformation(Tetris.config.userId, {
                    friendCount: e
                })
            })
        }, 250)
    };
    SpiritAccount._isHttps = function() {
        if (window.location.protocol == "https:") {
            return true
        } else {
            return false
        }
    };
    SpiritAccount._trackSpruce = function() {
        KT_GET.spruce_adid && SpiritAccount._ktApi._sendHttpRequestViaImgTag(window.location.protocol + "https://bp-pixel.sprucemedia.com/100480/pixel.ssps?spruce_adid=" + KT_GET.spruce_adid + "&spruce_sid=" + SpiritAccount._ktApi.genShortUniqueTrackingTag())
    };
    SpiritAccount._isArray = function(a) {
        if (!KT_GET.request_ids) {
            return false
        } else {
            if (KT_GET.request_ids instanceof Array) {
                return true
            } else {
                return false
            }
        }
    };
    SpiritAccount._appendKtVarsToDataField = function(b, c) {
        b += "|";
        for (var a in c) {
            if (c[a] != null && typeof c[a] != "undefined") {
                b += a + "=" + c[a] + "&"
            }
        }
        return SpiritAccount._removeTrailingAmpersand(b)
    };
    SpiritAccount._appendKtVarsToUrl = function(a, c) {
        if (a.indexOf("?") == -1) {
            a += "?"
        } else {
            a += "&"
        }
        for (var b in c) {
            if (c[b] != null && typeof c[b] != "undefined") {
                a += b + "=" + c[b] + "&"
            }
        }
        return SpiritAccount._removeTrailingAmpersand(a)
    };
    SpiritAccount._removeTrailingAmpersand = function(a) {
        if (a.charAt(a.length - 1) == "&") {
            return a.slice(0, -1)
        } else {
            return a
        }
    }
};

function KtValidator() {}
KtValidator.validateParameter = function(a, b, c) {
    return KtValidator["_validate" + KtValidator._upperCaseFirst(b)](a, b, c)
};
KtValidator._upperCaseFirst = function(a) {
    return a.charAt(0).toUpperCase() + a.slice(1)
};
KtValidator._validateB = function(a, b, c) {
    if (typeof c == "undefined" || c != parseInt(c) || c < 1900 || c > 2011) {
        return "Invalid birth year."
    } else {
        return true
    }
};
KtValidator._validateF = function(a, b, c) {
    if (typeof c == "undefined" || c != parseInt(c) || c < 0) {
        return "Invalid friend count."
    } else {
        return true
    }
};
KtValidator._validateG = function(a, c, d) {
    var b = /^[mfu]$/;
    if (typeof d == "undefined" || !b.test(d)) {
        return "Invalid gender."
    } else {
        return true
    }
};
KtValidator._validateGc1 = function(a, b, c) {
    if (typeof c == "undefined" || c != parseInt(c) || c < -16384 || c > 16384) {
        return "Invalid goal count value."
    } else {
        return true
    }
};
KtValidator._validateGc2 = function(a, b, c) {
    return KtValidator._validateGc1(a, b, c)
};
KtValidator._validateGc3 = function(a, b, c) {
    return KtValidator._validateGc1(a, b, c)
};
KtValidator._validateGc4 = function(a, b, c) {
    return KtValidator._validateGc1(a, b, c)
};
KtValidator._validateI = function(a, c, d) {
    var b = /^[01]$/;
    if (typeof d == "undefined" || !b.test(d)) {
        return "Invalid isAppInstalled value."
    } else {
        return true
    }
};
KtValidator._validateIp = function(a, c, d) {
    var b = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(\.\d{1,3})?$/;
    if (typeof d == "undefined" || !b.test(d)) {
        return "Invalid IP address value."
    } else {
        return true
    }
};
KtValidator._validateL = function(a, b, c) {
    if (typeof c == "undefined" || c != parseInt(c) || c < 0) {
        return "Invalid level value."
    } else {
        return true
    }
};
KtValidator._validateLc = function(a, c, d) {
    var b = /^[A-Z]{2}$/;
    if (typeof d == "undefined" || !b.test(d)) {
        return "Invalid country value."
    } else {
        return true
    }
};
KtValidator._validateLp = function(a, b, c) {
    return true
};
KtValidator._validateLs = function(a, b, c) {
    return true
};
KtValidator._validateN = function(a, c, d) {
    var b = /^[A-Za-z0-9-_]{1,32}$/;
    if (typeof d == "undefined" || !b.test(d)) {
        return "Invalid event name value."
    } else {
        return true
    }
};
KtValidator._validateR = function(a, c, d) {
    if (a == "ins" || a == "nes" || a == "nts") {
        var b = /^[0-9]+(,[0-9]+)*$/;
        if (typeof d == "undefined" || !b.test(d)) {
            return "Invalid recipient user ids."
        }
    } else {
        if (a == "inr" || a == "psr" || a == "nei" || a == "ntr") {
            if (typeof d == "undefined" || d != parseInt(d)) {
                return "Invalid recipient user id."
            }
        }
    }
    return true
};
KtValidator._validateS = function(a, b, c) {
    if (typeof c == "undefined" || c != parseInt(c)) {
        return "Invalid user id."
    } else {
        return true
    }
};
KtValidator._validateSt1 = function(a, c, d) {
    var b = /^[A-Za-z0-9-_]{1,32}$/;
    if (typeof d == "undefined" || !b.test(d)) {
        return "Invalid subtype value."
    } else {
        return true
    }
};
KtValidator._validateSt2 = function(a, b, c) {
    return KtValidator._validateSt1(a, b, c)
};
KtValidator._validateSt3 = function(a, b, c) {
    return KtValidator._validateSt1(a, b, c)
};
KtValidator._validateSu = function(a, c, d) {
    var b = /^[A-Fa-f0-9]{8}$/;
    if (typeof d == "undefined" || !b.test(d)) {
        return "Invalid short unique tracking tag."
    } else {
        return true
    }
};
KtValidator._validateTs = function(a, b, c) {
    if (typeof c == "undefined" || c != parseInt(c)) {
        return "Invalid timestamp."
    } else {
        return true
    }
};
KtValidator._validateTu = function(a, c, d) {
    var b;
    if (a == "mtu") {
        b = /^(direct|indirect|advertisement|credits|other)$/;
        if (typeof d == "undefined" || !b.test(d)) {
            return "Invalid monetization type."
        }
    } else {
        if (a == "pst" || a == "psr") {
            b = /^(feedpub|stream|feedstory|multifeedstory|dashboard_activity|dashboard_globalnews)$/;
            if (typeof d == "undefined" || !b.test(d)) {
                return "Invalid stream post/response type."
            }
        } else {
            if (a == "ucc") {
                b = /^(ad|partner)$/;
                if (typeof d == "undefined" || !b.test(d)) {
                    return "Invalid third party communication click type."
                }
            }
        }
    }
    return true
};
KtValidator._validateU = function(a, c, d) {
    if (a != "pgr") {
        var b = /^[A-Fa-f0-9]{16}$/;
        if (typeof d == "undefined" || !b.test(d)) {
            return "Invalid unique tracking tag."
        }
    }
    return true
};
KtValidator._validateV = function(a, b, c) {
    if (typeof c == "undefined" || c != parseInt(c)) {
        return "Invalid value."
    } else {
        return true
    }
};
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(e) {
    var h = [],
        f = e(document),
        c = navigator.userAgent.toLowerCase(),
        g = e(window),
        a = [];
    var b = {
        ieQuirks: null,
        msie: /msie/.test(c) && !/opera/.test(c),
        opera: /opera/.test(c)
    };
    b.ie6 = b.msie && /msie 6./.test(c) && typeof window.XMLHttpRequest !== "object";
    b.ie7 = b.msie && /msie 7.0/.test(c);
    b.boxModel = (document.compatMode === "CSS1Compat");
    e.modal = function(i, d) {
        return e.modal.impl.init(i, d)
    };
    e.modal.close = function() {
        e.modal.impl.close()
    };
    e.modal.focus = function(d) {
        e.modal.impl.focus(d)
    };
    e.modal.setContainerDimensions = function() {
        e.modal.impl.setContainerDimensions()
    };
    e.modal.setPosition = function() {
        e.modal.impl.setPosition()
    };
    e.modal.update = function(d, i) {
        e.modal.impl.update(d, i)
    };
    e.fn.modal = function(d) {
        return e.modal.impl.init(this, d)
    };
    e.modal.defaults = {
        appendTo: "body",
        focus: true,
        opacity: 50,
        overlayId: "simplemodal-overlay",
        overlayCss: {},
        containerId: "simplemodal-container",
        containerCss: {},
        dataId: "simplemodal-data",
        dataCss: {},
        minHeight: null,
        minWidth: null,
        maxHeight: null,
        maxWidth: null,
        autoResize: false,
        autoPosition: true,
        zIndex: 1000,
        close: true,
        closeHTML: '<a class="modalCloseImg" title="Close"></a>',
        closeClass: "simplemodal-close",
        escClose: true,
        overlayClose: false,
        fixed: true,
        position: null,
        persist: false,
        modal: true,
        onOpen: null,
        onShow: null,
        onClose: null
    };
    e.modal.impl = {
        d: {},
        init: function(j, d) {
            var i = this;
            if (i.d.data) {
                return false
            }
            b.ieQuirks = b.msie && !b.boxModel;
            i.o = e.extend({}, e.modal.defaults, d);
            i.zIndex = i.o.zIndex;
            i.occb = false;
            if (typeof j === "object") {
                j = j instanceof e ? j : e(j);
                i.d.placeholder = false;
                if (j.parent().parent().length > 0) {
                    j.before(e("<span></span>").attr("id", "simplemodal-placeholder").css({
                        display: "none"
                    }));
                    i.d.placeholder = true;
                    i.display = j.css("display");
                    if (!i.o.persist) {
                        i.d.orig = j.clone(true)
                    }
                }
            } else {
                if (typeof j === "string" || typeof j === "number") {
                    j = e("<div></div>").html(j)
                } else {
                    alert("SimpleModal Error: Unsupported data type: " + typeof j);
                    return i
                }
            }
            i.create(j);
            j = null;
            i.open();
            if (e.isFunction(i.o.onShow)) {
                i.o.onShow.apply(i, [i.d])
            }
            return i
        },
        create: function(i) {
            var d = this;
            d.getDimensions();
            if (d.o.modal && b.ie6) {
                d.d.iframe = e('<iframe src="javascript:false;"></iframe>').css(e.extend(d.o.iframeCss, {
                    display: "none",
                    opacity: 0,
                    position: "fixed",
                    height: a[0],
                    width: a[1],
                    zIndex: d.o.zIndex,
                    top: 0,
                    left: 0
                })).appendTo(d.o.appendTo)
            }
            d.d.overlay = e("<div></div>").attr("id", d.o.overlayId).addClass("simplemodal-overlay").css(e.extend(d.o.overlayCss, {
                display: "none",
                opacity: d.o.opacity / 100,
                height: d.o.modal ? h[0] : 0,
                width: d.o.modal ? h[1] : 0,
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: d.o.zIndex + 1
            })).appendTo(d.o.appendTo);
            d.d.container = e("<div></div>").attr("id", d.o.containerId).addClass("simplemodal-container").css(e.extend({
                position: d.o.fixed ? "fixed" : "absolute"
            }, d.o.containerCss, {
                display: "none",
                zIndex: d.o.zIndex + 2
            })).append(d.o.close && d.o.closeHTML ? e(d.o.closeHTML).addClass(d.o.closeClass) : "").appendTo(d.o.appendTo);
            d.d.wrap = e("<div></div>").attr("tabIndex", -1).addClass("simplemodal-wrap").css({
                height: "100%",
                outline: 0,
                width: "100%"
            }).appendTo(d.d.container);
            d.d.data = i.attr("id", i.attr("id") || d.o.dataId).addClass("simplemodal-data").css(e.extend(d.o.dataCss, {
                display: "none"
            })).appendTo("body");
            i = null;
            d.setContainerDimensions();
            d.d.data.appendTo(d.d.wrap);
            if (b.ie6 || b.ieQuirks) {
                d.fixIE()
            }
        },
        bindEvents: function() {
            var d = this;
            e("." + d.o.closeClass).bind("click.simplemodal", function(i) {
                i.preventDefault();
                d.close()
            });
            if (d.o.modal && d.o.close && d.o.overlayClose) {
                d.d.overlay.bind("click.simplemodal", function(i) {
                    i.preventDefault();
                    d.close()
                })
            }
            f.bind("keydown.simplemodal", function(i) {
                if (d.o.modal && i.keyCode === 9) {
                    d.watchTab(i)
                } else {
                    if ((d.o.close && d.o.escClose) && i.keyCode === 27) {
                        i.preventDefault();
                        d.close()
                    }
                }
            });
            g.bind("resize.simplemodal orientationchange.simplemodal", function() {
                d.getDimensions();
                d.o.autoResize ? d.setContainerDimensions() : d.o.autoPosition && d.setPosition();
                if (b.ie6 || b.ieQuirks) {
                    d.fixIE()
                } else {
                    if (d.o.modal) {
                        d.d.iframe && d.d.iframe.css({
                            height: a[0],
                            width: a[1]
                        });
                        d.d.overlay.css({
                            height: h[0],
                            width: h[1]
                        })
                    }
                }
            })
        },
        unbindEvents: function() {
            e("." + this.o.closeClass).unbind("click.simplemodal");
            f.unbind("keydown.simplemodal");
            g.unbind(".simplemodal");
            this.d.overlay.unbind("click.simplemodal")
        },
        fixIE: function() {
            var d = this,
                i = d.o.position;
            e.each([d.d.iframe || null, !d.o.modal ? null : d.d.overlay, d.d.container.css("position") === "fixed" ? d.d.container : null], function(u, m) {
                if (m) {
                    var r = "document.body.clientHeight",
                        w = "document.body.clientWidth",
                        y = "document.body.scrollHeight",
                        v = "document.body.scrollLeft",
                        p = "document.body.scrollTop",
                        l = "document.body.scrollWidth",
                        k = "document.documentElement.clientHeight",
                        t = "document.documentElement.clientWidth",
                        q = "document.documentElement.scrollLeft",
                        z = "document.documentElement.scrollTop",
                        A = m[0].style;
                    A.position = "absolute";
                    if (u < 2) {
                        A.removeExpression("height");
                        A.removeExpression("width");
                        A.setExpression("height", "" + y + " > " + r + " ? " + y + " : " + r + ' + "px"');
                        A.setExpression("width", "" + l + " > " + w + " ? " + l + " : " + w + ' + "px"')
                    } else {
                        var o, j;
                        if (i && i.constructor === Array) {
                            var x = i[0] ? typeof i[0] === "number" ? i[0].toString() : i[0].replace(/px/, "") : m.css("top").replace(/px/, "");
                            o = x.indexOf("%") === -1 ? x + " + (t = " + z + " ? " + z + " : " + p + ') + "px"' : parseInt(x.replace(/%/, "")) + " * ((" + k + " || " + r + ") / 100) + (t = " + z + " ? " + z + " : " + p + ') + "px"';
                            if (i[1]) {
                                var n = typeof i[1] === "number" ? i[1].toString() : i[1].replace(/px/, "");
                                j = n.indexOf("%") === -1 ? n + " + (t = " + q + " ? " + q + " : " + v + ') + "px"' : parseInt(n.replace(/%/, "")) + " * ((" + t + " || " + w + ") / 100) + (t = " + q + " ? " + q + " : " + v + ') + "px"'
                            }
                        } else {
                            o = "(" + k + " || " + r + ") / 2 - (this.offsetHeight / 2) + (t = " + z + " ? " + z + " : " + p + ') + "px"';
                            j = "(" + t + " || " + w + ") / 2 - (this.offsetWidth / 2) + (t = " + q + " ? " + q + " : " + v + ') + "px"'
                        }
                        A.removeExpression("top");
                        A.removeExpression("left");
                        A.setExpression("top", o);
                        A.setExpression("left", j)
                    }
                }
            })
        },
        focus: function(k) {
            var i = this,
                j = k && e.inArray(k, ["first", "last"]) !== -1 ? k : "first";
            var d = e(":input:enabled:visible:" + j, i.d.wrap);
            setTimeout(function() {
                d.length > 0 ? d.focus() : i.d.wrap.focus()
            }, 10)
        },
        getDimensions: function() {
            var i = this,
                d = typeof window.innerHeight === "undefined" ? g.height() : window.innerHeight;
            h = [f.height(), f.width()];
            a = [d, g.width()]
        },
        getVal: function(i, j) {
            return i ? (typeof i === "number" ? i : i === "auto" ? 0 : i.indexOf("%") > 0 ? ((parseInt(i.replace(/%/, "")) / 100) * (j === "h" ? a[0] : a[1])) : parseInt(i.replace(/px/, ""))) : null
        },
        update: function(d, j) {
            var i = this;
            if (!i.d.data) {
                return false
            }
            i.d.origHeight = i.getVal(d, "h");
            i.d.origWidth = i.getVal(j, "w");
            i.d.data.hide();
            d && i.d.container.css("height", d);
            j && i.d.container.css("width", j);
            i.setContainerDimensions();
            i.d.data.show();
            i.o.focus && i.focus();
            i.unbindEvents();
            i.bindEvents()
        },
        setContainerDimensions: function() {
            var t = this,
                k = b.ie6 || b.ie7;
            var d = t.d.origHeight ? t.d.origHeight : b.opera ? t.d.container.height() : t.getVal(k ? t.d.container[0].currentStyle.height : t.d.container.css("height"), "h"),
                j = t.d.origWidth ? t.d.origWidth : b.opera ? t.d.container.width() : t.getVal(k ? t.d.container[0].currentStyle.width : t.d.container.css("width"), "w"),
                o = t.d.data.outerHeight(true),
                i = t.d.data.outerWidth(true);
            t.d.origHeight = t.d.origHeight || d;
            t.d.origWidth = t.d.origWidth || j;
            var l = t.o.maxHeight ? t.getVal(t.o.maxHeight, "h") : null,
                p = t.o.maxWidth ? t.getVal(t.o.maxWidth, "w") : null,
                n = l && l < a[0] ? l : a[0],
                r = p && p < a[1] ? p : a[1];
            var m = t.o.minHeight ? t.getVal(t.o.minHeight, "h") : "auto";
            if (!d) {
                if (!o) {
                    d = m
                } else {
                    if (o > n) {
                        d = n
                    } else {
                        if (t.o.minHeight && m !== "auto" && o < m) {
                            d = m
                        } else {
                            d = o
                        }
                    }
                }
            } else {
                d = t.o.autoResize && d > n ? n : d < m ? m : d
            }
            var q = t.o.minWidth ? t.getVal(t.o.minWidth, "w") : "auto";
            if (!j) {
                if (!i) {
                    j = q
                } else {
                    if (i > r) {
                        j = r
                    } else {
                        if (t.o.minWidth && q !== "auto" && i < q) {
                            j = q
                        } else {
                            j = i
                        }
                    }
                }
            } else {
                j = t.o.autoResize && j > r ? r : j < q ? q : j
            }
            t.d.container.css({
                height: d,
                width: j
            });
            t.d.wrap.css({
                overflow: (o > d || i > j) ? "auto" : "visible"
            });
            t.o.autoPosition && t.setPosition()
        },
        setPosition: function() {
            var j = this,
                l, k, m = (a[0] / 2) - (j.d.container.outerHeight(true) / 2),
                i = (a[1] / 2) - (j.d.container.outerWidth(true) / 2),
                d = j.d.container.css("position") !== "fixed" ? g.scrollTop() : 0;
            if (j.o.position && Object.prototype.toString.call(j.o.position) === "[object Array]") {
                l = d + (j.o.position[0] || m);
                k = j.o.position[1] || i
            } else {
                l = d + m;
                k = i
            }
            j.d.container.css({
                left: k,
                top: l
            })
        },
        watchTab: function(i) {
            var d = this;
            if (e(i.target).parents(".simplemodal-container").length > 0) {
                d.inputs = e(":input:enabled:visible:first, :input:enabled:visible:last", d.d.data[0]);
                if ((!i.shiftKey && i.target === d.inputs[d.inputs.length - 1]) || (i.shiftKey && i.target === d.inputs[0]) || d.inputs.length === 0) {
                    i.preventDefault();
                    var j = i.shiftKey ? "last" : "first";
                    d.focus(j)
                }
            } else {
                i.preventDefault();
                d.focus()
            }
        },
        open: function() {
            var d = this;
            d.d.iframe && d.d.iframe.show();
            if (e.isFunction(d.o.onOpen)) {
                d.o.onOpen.apply(d, [d.d])
            } else {
                d.d.overlay.show();
                d.d.container.show();
                d.d.data.show()
            }
            d.o.focus && d.focus();
            d.bindEvents()
        },
        close: function() {
            var d = this;
            if (!d.d.data) {
                return false
            }
            d.unbindEvents();
            if (e.isFunction(d.o.onClose) && !d.occb) {
                d.occb = true;
                d.o.onClose.apply(d, [d.d])
            } else {
                if (d.d.placeholder) {
                    var i = e("#simplemodal-placeholder");
                    if (d.o.persist) {
                        i.replaceWith(d.d.data.removeClass("simplemodal-data").css("display", d.display))
                    } else {
                        d.d.data.hide().remove();
                        i.replaceWith(d.d.orig)
                    }
                } else {
                    d.d.data.hide().remove()
                }
                d.d.container.hide().remove();
                d.d.overlay.hide();
                d.d.iframe && d.d.iframe.hide().remove();
                d.d.overlay.remove();
                d.d = {}
            }
        }
    }
}));
Tetris.util = (function() {
    this.MINUTE_SEC = 60;
    this.HOUR_SEC = (60 * 60);
    this.DAY_SEC = (60 * 60 * 24);
    this.WEEK_SEC = (60 * 60 * 24 * 7);
    this.getFlashObject = function() {
        document.getElementById("app-container").focus();
        return document.getElementById("flash-object")
    };
    this.arrayDiff = function(array1, array2) {
        var result = new Array();
        for (var i = 0; i < array1.length; i++) {
            if ($.inArray(array1[i], array2) === -1) {
                result.push(array1[i])
            }
        }
        return result
    };
    this.arrayIndexOf = function(array, value) {
        var result = -1;
        for (var i = 0; i < array.length && result == -1; i++) {
            if (array[i] == value) {
                result = i
            }
        }
        return result
    };
    this.startsWithVowel = function(string) {
        var fl = string.toLowerCase().charAt(0);
        var result = false;
        switch (fl) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                result = true;
                break
        }
        return result
    };
    this.ucfirst = function(string) {
        return string.charAt(0).toUpperCase() + string.substring(1)
    };
    this.arrayKeys = function(array) {
        var result = new Array();
        for (var key in array) {
            if (array.hasOwnProperty(key)) {
                result.push(key)
            }
        }
        return result
    };
    this.buildQueryString = function(data) {
        var query, key, val;
        var tmpArray = [];
        for (key in data) {
            val = data[key] ? encodeURIComponent(decodeURIComponent(data[key].toString())) : "";
            key = encodeURIComponent(decodeURIComponent(key));
            tmpArray.push(key + "=" + val)
        }
        return tmpArray.join("&")
    };
    this.buildCSV = function(data) {
        var query, key, val;
        var tmpArray = [];
        for (key in data) {
            val = data[key] ? encodeURIComponent(decodeURIComponent(data[key].toString())) : "";
            key = encodeURIComponent(decodeURIComponent(key));
            tmpArray.push(key + "=" + val)
        }
        return tmpArray.join(",")
    };
    this.buildEmbedHtml = function(swfId, swfUrl, width, height, flashVars) {
        swfId = (typeof(swfId) == "undefined" ? "tetris-battle-replayer" : swfId);
        flashVars = (typeof(flashVars) == "undefined" ? {} : flashVars);
        if (typeof(flashVars) == "object") {
            flashVars = Tetris.util.buildQueryString(flashVars)
        }
        var tmpHtml = '<object id="' + swfId + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + width + '" height="' + height + '" data="' + swfUrl + '">';
        tmpHtml += '<param name="movie" value="' + swfUrl + '">';
        tmpHtml += '<param name="quality" value="high">';
        tmpHtml += '<param name="wmode" value="transparent">';
        tmpHtml += '<param name="scale" value="noscale">';
        tmpHtml += '<param name="salign" value="tl">';
        tmpHtml += '<param name="allowScriptAccess" value="always">';
        tmpHtml += '<param name="FlashVars" value="' + flashVars + '">';
        tmpHtml += '<embed name="' + swfId + '" src="' + swfUrl + '" width="' + width + '" FlashVars="' + flashVars + '" allowScriptAccess="always" quality="high" wmode="transparent" scale="noscale" salign="tl" height="' + height + '"></embed>';
        tmpHtml += "</object>";
        return tmpHtml
    };
    this.getJQuery = function() {
        var result = $;
        if (!$.toJSON || !$.modal) {
            SpiritAccount.log("toJSON or modal missing - returning internal jQuery");
            result = this.internalJQuery
        }
        return result
    };
    this.getJSON = function(data) {
        $ = Tetris.util.getJQuery();
        var result = "";
        if ($ && $.toJSON) {
            result = $.toJSON(data)
        } else {
            if (JSON && JSON.stringify) {
                result = JSON.stringify(data)
            }
        }
        return result
    };
    this.getNow = function() {
        return new Date().getTime()
    };
    this.getTimeObject = function(seconds) {
        var timeObject = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        if (seconds >= DAY_SEC) {
            timeObject.days = Math.floor(seconds / DAY_SEC);
            seconds -= (timeObject.days * DAY_SEC)
        }
        if (seconds >= HOUR_SEC) {
            timeObject.hours = Math.floor(seconds / HOUR_SEC);
            seconds -= (timeObject.hours * HOUR_SEC)
        }
        if (seconds >= MINUTE_SEC) {
            timeObject.minutes = Math.floor(seconds / MINUTE_SEC);
            seconds -= (timeObject.minutes * MINUTE_SEC)
        }
        if (seconds >= 0) {
            timeObject.seconds = seconds
        }
        return timeObject
    };
    this.padLeft = function(str, length, fill) {
        for (var i = 0; i < (length - str.toString().length); i++) {
            str = "" + fill + str
        }
        return str
    };
    this.parseQueryString = function(string) {
        var result = new Array();
        var params = string.split("&");
        for (var i = 0; i < params.length; i++) {
            var param = params[i].split("=");
            result[param[0]] = param[1]
        }
        return result
    };
    this.parseCSV = function(string) {
        var result = new Array();
        var params = string.split(",");
        for (var i = 0; i < params.length; i++) {
            var param = params[i].split("=");
            result[param[0]] = param[1]
        }
        return result
    };
    this.parseJSON = function(string) {
        $ = Tetris.util.getJQuery();
        var result = "";
        if ($ && $.parse) {
            result = $.parse(string)
        } else {
            if ($ && $.parseJSON) {
                result = $.parseJSON(string)
            } else {
                if (JSON && JSON.parse) {
                    result = JSON.parse(string)
                }
            }
        }
        return result
    };
    this.processUserIds2 = function(array) {
        var tmpIds = new Array();
        for (var i = 0; i < array.length; i++) {
            tmpIds.push(array[i].id)
        }
        return tmpIds
    };
    this.getAppPageUrl = function(pageId) {
        var pageUrl = "";
        switch (pageId) {
            case 274469902618807:
                pageUrl = "https://www.facebook.com/pages/TB_PreProduction/274469902618807";
                break;
            case 345869588775471:
                pageUrl = "https://www.facebook.com/tetrisbattle";
                break;
            case 385827991457211:
                pageUrl = "https://www.facebook.com/pages/Tb-Dev-Tobias-New-Community/385827991457211";
                break;
            case 451165881577151:
                pageUrl = "https://www.facebook.com/pages/TB-TOAQA-Community/451165881577151";
                break;
            default:
                pageUrl = "https://www.facebook.com/" + pageId;
                break
        }
        return pageUrl
    };
    this.translateText = function(string) {
        var pattern = /@[a-zA-Z0-9_]+/g;
        var matches = string.toString().match(pattern);
        for (var i = 0; matches && i < matches.length; i++) {
            var localizedText = Tetris.lang.strings[matches[i].substring(1)];
            if (localizedText) {
                string = string.replace(matches[i], localizedText)
            }
        }
        return string
    };
    this.selectAllText = function(elementId) {
        elementId = (typeof(elementId) != "object" && elementId.indexOf("#") == -1 ? "#" + elementId : elementId);
        $(elementId).focus();
        $(elementId).select()
    };
    this.getOrderId = function(prefix) {
        prefix = typeof(prefix) != "undefined" ? prefix : "";
        var orderId = "";
        for (var i = 0; i < 8; i++) {
            orderId += getRandom4()
        }
        return prefix + orderId
    };
    this.getRandom4 = function() {
        return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
    };
    this.getAvailableOptions = function(buckets, params, limit) {
        SpiritAccount.log("getAvailableOptions");
        limit = typeof(limit) != "undefined" ? limit : "1";
        var options = buckets[params.bucket];
        var now = Tetris.dtSEC != 0 ? Tetris.dtSEC : params.now;
        var count = 0;
        var option = null;
        if (params.day && Tetris.dtDay) {
            params.day = Tetris.dtDay
        }
        for (var i = 0; i < options.length; i++) {
            var dateFrom = options[i].dateFrom;
            var dateTo = options[i].dateTo;
            if (options[i].dateFrom <= now && options[i].dateTo >= now && options[i].condition == "" || (options[i].condition != "" && Tetris.util.isConditionTrue(options[i].condition, params))) {
                option = options[i];
                count++;
                if (limit != -1 || count <= limit) {
                    break
                }
            }
        }
        return option
    };
    this.isConditionTrue = function(condition, params) {
        SpiritAccount.log("isConditionTrue");
        var isValid = true;
        if (isValid) {
            condition = condition.replace(/lvl/g, params.lvl);
            condition = condition.replace(/fpc/g, (params.fpc ? 1 : 0));
            condition = condition.replace(/day/g, "'" + params.day + "'");
            condition = condition.replace(/cc/g, "'" + params.cc + "'");
            condition = condition.replace(/=/g, " == ");
            condition = condition.replace(/! ==/g, " != ");
            condition = condition.replace(/ OR /g, " || ");
            condition = condition.replace(/ AND /g, " && ");
            try {
                isValid = eval(condition)
            } catch (ex) {
                SpiritAccount.log(ex.message)
            }
        }
        return isValid
    };
    this.formatBDate = function(inBDate) {
        var birthdayPieces = inBDate.split("/");
        var bdate = 0;
        if (birthdayPieces.length == 3) {
            birthYear = birthdayPieces[2];
            birthDay = birthdayPieces[1];
            birthMonth = birthdayPieces[0];
            bdate = (birthYear + "-" + birthMonth + "-" + birthDay)
        }
        return bdate
    };
    this.getBirthYearFromAge = function(inAge) {
        var birthYear = (new Date().getFullYear()) - inAge;
        return birthYear
    };
    return this
})();
var DetectZoom = {
    mediaQueryBinarySearch: function(m, l, k, j, g, n) {
        var f;
        var i, e, d;
        if (window.matchMedia) {
            f = window.matchMedia
        } else {
            i = document.getElementsByTagName("head")[0];
            e = document.createElement("style");
            d = document.createElement("div");
            d.className = "mediaQueryBinarySearch";
            i.appendChild(e);
            d.style.display = "none";
            document.body.appendChild(d);
            f = function(b) {
                e.sheet.insertRule("@media " + b + "{.mediaQueryBinarySearch {text-decoration: underline} }", 0);
                var a = getComputedStyle(d, null).textDecoration == "underline";
                e.sheet.deleteRule(0);
                return {
                    matches: a
                }
            }
        }
        var c = h(k, j, g);
        if (d) {
            i.removeChild(e);
            document.body.removeChild(d)
        }
        return c;

        function h(p, o, s) {
            var q = (p + o) / 2;
            if (s == 0 || o - p < n) {
                return q
            }
            var r = "(" + m + ":" + q + l + ")";
            if (f(r).matches) {
                return h(q, o, s - 1)
            } else {
                return h(p, q, s - 1)
            }
        }
    },
    _zoomIe7: function() {
        var a = document.body.getBoundingClientRect();
        var b = (a.right - a.left) / document.body.offsetWidth;
        b = Math.round(b * 100) / 100;
        return {
            zoom: b,
            devicePxPerCssPx: b
        }
    },
    _zoomIe8: function() {
        return {
            zoom: screen.systemXDPI / screen.logicalXDPI,
            devicePxPerCssPx: screen.deviceXDPI / screen.logicalXDPI
        }
    },
    _zoomWebkitMobile: function() {
        var b = document.documentElement.clientWidth / window.innerWidth;
        var a = window.devicePixelRatio != null ? window.devicePixelRatio : 1;
        return {
            zoom: b,
            devicePxPerCssPx: b * a
        }
    },
    _zoomWebkit: function() {
        var a = window.devicePixelRatio != null ? window.devicePixelRatio : 1;
        var b = document.createElement("div"),
            f = document.createElement("div");
        var c = function(g) {
            return g.replace(/;/g, " !important;")
        };
        b.setAttribute("style", c("width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;"));
        f.innerHTML = "1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0";
        f.setAttribute("style", c("font: 100px/1em sans-serif; -webkit-text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;"));
        b.appendChild(f);
        document.body.appendChild(b);
        var e = 1000 / f.clientHeight;
        e = Math.round(e * 100) / 100;
        var d = {
            zoom: e,
            devicePxPerCssPx: a * e
        };
        document.body.removeChild(b);
        return d
    },
    _zoomFF35: function() {
        var a = screen.width / this.mediaQueryBinarySearch("min-device-width", "px", 0, 6000, 20, 0.0001);
        a = Math.round(a * 100) / 100;
        return {
            zoom: a,
            devicePxPerCssPx: a
        }
    },
    _zoomFF36: function() {
        var b = document.createElement("div"),
            h = document.createElement("div");
        b.setAttribute("style", "width:0; height:0; overflow:hidden;visibility:hidden; position: absolute");
        h.style.width = h.style.height = "500px";
        var a = h;
        for (var d = 0; d < 10; ++d) {
            var c = document.createElement("div");
            c.style.overflowY = "scroll";
            a.appendChild(c);
            a = c
        }
        b.appendChild(h);
        document.body.appendChild(b);
        var j = h.clientWidth;
        var g = a.clientWidth;
        var f = (j - g) / 10;
        document.body.removeChild(b);
        var k = 15;
        if (-1 != navigator.platform.indexOf("Win")) {
            k = 17
        }
        var e = k / f;
        e = Math.round(e * 100) / 100;
        return {
            zoom: e,
            devicePxPerCssPx: e
        }
    },
    _zoomFF4: function() {
        var a = this.mediaQueryBinarySearch("min--moz-device-pixel-ratio", "", 0, 10, 20, 0.0001);
        a = Math.round(a * 100) / 100;
        return {
            zoom: a,
            devicePxPerCssPx: a
        }
    },
    _zoomOperaOlder: function() {
        var a = document.createElement("div");
        a.style.position = "fixed";
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.top = a.style.left = "0";
        a.style.visibility = "hidden";
        document.body.appendChild(a);
        var b = window.innerWidth / a.offsetWidth;
        document.body.removeChild(a);
        return {
            zoom: b,
            devicePxPerCssPx: b
        }
    },
    _zoomOpera11: function() {
        var a = window.outerWidth / window.innerWidth;
        a = Math.round(a * 100) / 100;
        return {
            zoom: a,
            devicePxPerCssPx: a
        }
    },
    ratios: function() {
        var a;
        if (!isNaN(screen.logicalXDPI) && !isNaN(screen.systemXDPI)) {
            return this._zoomIe8()
        } else {
            if ("ontouchstart" in window && document.body.style.webkitTextSizeAdjust != null) {
                return this._zoomWebkitMobile()
            } else {
                if (document.body.style.webkitTextSizeAdjust != null) {
                    return this._zoomWebkit()
                } else {
                    if (-1 != navigator.userAgent.indexOf("Firefox/3.5")) {
                        return this._zoomFF35()
                    } else {
                        if (-1 != navigator.userAgent.indexOf("Firefox/3.6")) {
                            return this._zoomFF36()
                        } else {
                            if (-1 != navigator.appVersion.indexOf("MSIE 7.")) {
                                return this._zoomIe7()
                            } else {
                                if (-1 != navigator.userAgent.indexOf("Opera")) {
                                    var b = navigator.userAgent.indexOf("Version/");
                                    if (11.01 < parseFloat(navigator.userAgent.substr(b + 8))) {
                                        return this._zoomOpera11()
                                    } else {
                                        return this._zoomOperaOlder()
                                    }
                                } else {
                                    if (0.001 < (a = this._zoomFF4()).zoom) {
                                        return a
                                    } else {
                                        return {
                                            zoom: 1,
                                            devicePxPerCssPx: 1
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    zoom: function() {
        return this.ratios().zoom
    },
    device: function() {
        return this.ratios().devicePxPerCssPx
    }
};