!function(){function r(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,u,o=[],l=!0,i=!1;try{for(n=n.call(r);!(l=(e=n.next()).done)&&(o.push(e.value),!t||o.length!==t);l=!0);}catch(a){i=!0,u=a}finally{try{l||null==n.return||n.return()}finally{if(i)throw u}}return o}(r,n)||function(r,n){if(!r)return;if("string"==typeof r)return t(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}System.register(["./index-legacy.56cb73bd.js","./useUtil-legacy.05037715.js","./api-legacy.3bdd3112.js","./useT-legacy.3b2ed944.js"],(function(t){"use strict";var n,e,u,o,l;return{setters:[function(r){n=r.e,e=r.bI,u=r.bH,o=r.Y},function(r){l=r.d},function(){},function(){}],execute:function(){t("default",(function(){var t=r(l(),1)[0];return n(o,{get loading(){return t.loading},get children(){return n(e,{w:"$full",h:"70vh",get children(){return n(u.iframe,{w:"$full",h:"$full",rounded:"$lg",shadow:"$md",get srcdoc(){var r;return null===(r=t())||void 0===r?void 0:r.content}})}})}})}))}}}))}();
