(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{158:function(t,e,n){"use strict";function o(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var r=n(72);var i=n(19),s=(n(159),n(1)),u=n.n(s).a["undefined"!==typeof document&&void 0!==document.createElement?"useLayoutEffect":"useEffect"],c=["root"];function h(t){var e=t.root,n=void 0===e?null:e,o=t.pollInterval,i=void 0===o?null:o,s=t.useMutationObserver,u=void 0!==s&&s,c=t.rootMargin,h=void 0===c?"0px 0px 0px 0px":c,a=t.threshold,l=void 0===a?0:a,f=new Set;if("undefined"===typeof IntersectionObserver)return null;var p=new IntersectionObserver((function(t){var e,n=function(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(r.a)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,u=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return u=t.done,t},e:function(t){c=!0,s=t},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw s}}}}(f);try{for(n.s();!(e=n.n()).done;){(0,e.value)(t,p)}}catch(o){n.e(o)}finally{n.f()}}),{root:n,rootMargin:h,threshold:l});return p.POLL_INTERVAL=i,p.USE_MUTATION_OBSERVER=u,{observer:p,getListeners:function(){return f},subscribe:function(t){return f.add(t)},unsubscribe:function(t){return f.delete(t)}}}var a=new Map;function l(t){var e=t.root,n=o(t,c),r=JSON.stringify(n),i=a.get(e);return i||(i={},a.set(e,i)),i[r]?i[r]:i[r]=h(t)}e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.root,o=void 0===n?null:n,r=e.pollInterval,c=void 0===r?null:r,h=e.useMutationObserver,a=void 0!==h&&h,f=e.rootMargin,p=void 0===f?"0px 0px 0px 0px":f,d=e.threshold,g=void 0===d?0:d,v=e.initialIsIntersecting,m=void 0!==v&&v,b=s.useState((function(){return{boundingClientRect:null,intersectionRatio:0,intersectionRect:null,isIntersecting:m,rootBounds:null,target:null,time:0}})),y=Object(i.a)(b,2),w=y[0],_=y[1],I=s.useState((function(){return l({root:o,pollInterval:c,useMutationObserver:a,rootMargin:p,threshold:g})})),E=Object(i.a)(I,2),O=E[0],T=E[1];return s.useEffect((function(){var t=l({root:o,pollInterval:c,useMutationObserver:a,rootMargin:p,threshold:g});T(t)}),[o,p,c,a,JSON.stringify(g)]),u((function(){var e=t&&"current"in t?t.current:t;if(O&&e){var n=!1;O.observer.observe(e);var o=function(t){if(!n)for(var o=0;o<t.length;o++){var r=t[o];r.target===e&&_(r)}};return O.subscribe(o),function(){n=!0,O.observer.unobserve(e),O.unsubscribe(o)}}}),[t,O]),w}},159:function(t,e){!function(){"use strict";if("object"===typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=window.document,e=[],n=null,o=null;i.prototype.THROTTLE_TIMEOUT=100,i.prototype.POLL_INTERVAL=null,i.prototype.USE_MUTATION_OBSERVER=!0,i._setupCrossOriginUpdater=function(){return n||(n=function(t,n){o=t&&n?l(t,n):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),n},i._resetCrossOriginUpdater=function(){n=null,o=null},i.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},i.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},i.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},i.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},i.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},i.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},i.prototype._monitorIntersections=function(e){var n=e.defaultView;if(n&&-1==this._monitoringDocuments.indexOf(e)){var o=this._checkForIntersections,r=null,i=null;if(this.POLL_INTERVAL?r=n.setInterval(o,this.POLL_INTERVAL):(s(n,"resize",o,!0),s(e,"scroll",o,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in n&&(i=new n.MutationObserver(o)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(r&&t.clearInterval(r),u(t,"resize",o,!0)),u(e,"scroll",o,!0),i&&i.disconnect()})),e!=(this.root&&this.root.ownerDocument||t)){var c=d(e);c&&this._monitorIntersections(c.ownerDocument)}}},i.prototype._unmonitorIntersections=function(e){var n=this._monitoringDocuments.indexOf(e);if(-1!=n){var o=this.root&&this.root.ownerDocument||t;if(!this._observationTargets.some((function(t){var n=t.element.ownerDocument;if(n==e)return!0;for(;n&&n!=o;){var r=d(n);if((n=r&&r.ownerDocument)==e)return!0}return!1}))){var r=this._monitoringUnsubscribes[n];if(this._monitoringDocuments.splice(n,1),this._monitoringUnsubscribes.splice(n,1),r(),e!=o){var i=d(e);i&&this._unmonitorIntersections(i.ownerDocument)}}}},i.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},i.prototype._checkForIntersections=function(){if(this.root||!n||o){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var i=o.element,s=h(i),u=this._rootContainsTarget(i),c=o.entry,a=t&&u&&this._computeTargetAndRootIntersection(i,s,e),l=o.entry=new r({time:window.performance&&performance.now&&performance.now(),target:i,boundingClientRect:s,rootBounds:n&&!this.root?null:e,intersectionRect:a});c?t&&u?this._hasCrossedThreshold(c,l)&&this._queuedEntries.push(l):c&&c.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},i.prototype._computeTargetAndRootIntersection=function(e,r,i){if("none"!=window.getComputedStyle(e).display){for(var s=r,u=p(e),a=!1;!a&&u;){var f=null,d=1==u.nodeType?window.getComputedStyle(u):{};if("none"==d.display)return null;if(u==this.root||9==u.nodeType)if(a=!0,u==this.root||u==t)n&&!this.root?!o||0==o.width&&0==o.height?(u=null,f=null,s=null):f=o:f=i;else{var g=p(u),v=g&&h(g),m=g&&this._computeTargetAndRootIntersection(g,v,i);v&&m?(u=g,f=l(v,m)):(u=null,s=null)}else{var b=u.ownerDocument;u!=b.body&&u!=b.documentElement&&"visible"!=d.overflow&&(f=h(u))}if(f&&(s=c(f,s)),!s)break;u=u&&p(u)}return s}},i.prototype._getRootRect=function(){var e;if(this.root)e=h(this.root);else{var n=t.documentElement,o=t.body;e={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(e)},i.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},i.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!==i<o)return!0}},i.prototype._rootIsInDom=function(){return!this.root||f(t,this.root)},i.prototype._rootContainsTarget=function(e){return f(this.root||t,e)&&(!this.root||this.root.ownerDocument==e.ownerDocument)},i.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},i.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=i,window.IntersectionObserverEntry=r}function r(t){this.time=t.time,this.target=t.target,this.rootBounds=a(t.rootBounds),this.boundingClientRect=a(t.boundingClientRect),this.intersectionRect=a(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,r=o.width*o.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function i(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=function(t,e){var n=null;return function(){n||(n=setTimeout((function(){t(),n=null}),e))}}(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function s(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function u(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function c(t,e){var n=Math.max(t.top,e.top),o=Math.min(t.bottom,e.bottom),r=Math.max(t.left,e.left),i=Math.min(t.right,e.right),s=i-r,u=o-n;return s>=0&&u>=0&&{top:n,bottom:o,left:r,right:i,width:s,height:u}||null}function h(t){var e;try{e=t.getBoundingClientRect()}catch(n){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function a(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function l(t,e){var n=e.top-t.top,o=e.left-t.left;return{top:n,left:o,height:e.height,width:e.width,bottom:n+e.height,right:o+e.width}}function f(t,e){for(var n=e;n;){if(n==t)return!0;n=p(n)}return!1}function p(e){var n=e.parentNode;return 9==e.nodeType&&e!=t?d(e):n&&11==n.nodeType&&n.host?n.host:n&&n.assignedSlot?n.assignedSlot.parentNode:n}function d(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(e){return null}}}()}}]);
//# sourceMappingURL=0.cc249a34.chunk.js.map