var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,a=u||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,d=Math.min,s=function(){return a.Date.now()};function y(t,e,n){var o,r,i,u,f,a,c=0,y=!1,v=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,i=r;return o=r=void 0,c=e,u=t.apply(i,n)}function h(t){return c=t,f=setTimeout(T,e),y?g(t):u}function j(t){var n=t-a;return void 0===a||n>=e||n<0||v&&t-c>=i}function T(){var t=s();if(j(t))return w(t);f=setTimeout(T,function(t){var n=e-(t-a);return v?d(n,i-(t-c)):n}(t))}function w(t){return f=void 0,m&&o?g(t):(o=r=void 0,u)}function O(){var t=s(),n=j(t);if(o=arguments,r=this,a=t,n){if(void 0===f)return h(a);if(v)return f=setTimeout(T,e),g(a)}return void 0===f&&(f=setTimeout(T,e)),u}return e=b(e)||0,p(n)&&(y=!!n.leading,i=(v="maxWait"in n)?l(b(n.maxWait)||0,e):i,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=r=f=void 0},O.flush=function(){return void 0===f?u:w(s())},O}function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(p(t)){var u="function"==typeof t.valueOf?t.valueOf():t;t=p(u)?u+"":u}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var f=o.test(t);return f||r.test(t)?i(t.slice(2),f?2:8):n.test(t)?NaN:+t}const v={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.querySelector("body")};v.start.addEventListener("click",(function(){const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;v.body.style.backgroundColor=t}));
//# sourceMappingURL=01-color-switcher.05720040.js.map
