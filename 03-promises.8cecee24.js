!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("6JpON"),i=document.querySelector(".form"),c=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),l=document.querySelector('[name="amount"]'),f=0,d=0,s=0;i.addEventListener("submit",(function(n){var t=function(n){var t=d*n+s;setTimeout((function(){var o,r,i;(o=n+1,r=t,i=Math.random()>.3,new Promise((function(e,n){i?e("✅ Fulfilled promise ".concat(o," in ").concat(r,"ms")):n("❌ Rejected promise ".concat(o," in ").concat(r,"ms"))}))).then((function(n){return e(u).Notify.success(n)})).catch((function(n){return e(u).Notify.failure(n)}))}),t)};n.preventDefault(),s=+c.value,d=+a.value,f=+l.value;for(var o=0;o<f;o++)t(o)}))}();
//# sourceMappingURL=03-promises.8cecee24.js.map