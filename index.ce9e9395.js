!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire09c9;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},t.parcelRequire09c9=a);var c=a("bpxeT"),i=a("2TvXO"),s=(c=a("bpxeT"),i=a("2TvXO"),a("fkvfI")),o=document.querySelector(".card-set");function u(){return l.apply(this,arguments)}function l(){return(l=e(c)(e(i).mark((function t(){var n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.getGenreList)();case 3:return n=e.sent.genres,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=e(c)(e(i).mark((function t(n){var r,a,c;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.getPopularMovies)(n);case 3:return r=e.sent,a=r.results,c=r.total_pages,e.abrupt("return",{movies:a,totalPages:c});case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0);case 12:case"end":return e.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=e(c)(e(i).mark((function t(n){var r,a,c,s,l;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:return r=e.sent,e.next=5,d(n);case 5:return a=e.sent,c=a.movies,s=a.totalPages,l=c.map((function(e){return m(e,r)})).join(""),o.innerHTML="",o.insertAdjacentHTML("afterbegin",l),e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function m(e,t){var n=e.genre_ids,r=e.original_title,a=e.id,c=e.release_date,i=e.title,s=e.poster_path,o=function(e,t){return e.map((function(e){return t.find((function(t){return t.id===e})).name}))}(n,t),u=function(e){var t="";switch(e.length){case 1:t='<li class="card-set__genre-movie">'.concat(e[0],"</li>");break;case 2:t='<li class="card-set__genre-movie">'.concat(e[0],',&nbsp</li>\n                      <li class="card-set__genre-movie">').concat(e[1],"</li>");break;case 3:t='<li class="card-set__genre-movie">'.concat(e[0],',&nbsp</li>\n                      <li class="card-set__genre-movie">').concat(e[1],',&nbsp</li>\n                      <li class="card-set__genre-movie">').concat(e[2],"</li>");break;default:t='<li class="card-set__genre-movie">'.concat(e[0],',&nbsp</li>\n                      <li class="card-set__genre-movie">').concat(e[1],',&nbsp</li>\n                      <li class="card-set__genre-movie">Інші</li>')}return t}(o),l=new Date(c).getFullYear().toString();return'\n        <li class="card-set__item" data-id="'.concat(a,'">\n            <div class="card-set__box-img">\n            <img\n                loading="lazy"\n                src="https://image.tmdb.org/t/p/original').concat(s,'"\n                alt="').concat(r,'"\n                class="card-set__img"\n                \n            />\n            </div>\n            <h3 class="card-set__title">').concat(i,'</h3>\n            <div class="card-set__description">\n            <ul class="card-set__genre">\n                ').concat(u,'\n            </ul>\n            <span class="card-set__genre-movie">&nbsp| ').concat(l,"</span>\n            </div>\n        </li>")}var _,g=a("dpMWy"),h=(c=a("bpxeT"),i=a("2TvXO"),s=a("fkvfI"),g=a("dpMWy"),{});Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var b=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,w=/^0o[0-7]+$/i,L=parseInt,k="object"==typeof t&&t&&t.Object===Object&&t,T="object"==typeof self&&self&&self.Object===Object&&self,M=k||T||Function("return this")(),S=Object.prototype.toString,j=Math.max,O=Math.min,E=function(){return M.Date.now()};function q(t){var n=void 0===t?"undefined":e(h)(t);return!!t&&("object"==n||"function"==n)}function P(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(h)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==S.call(t)}(t))return NaN;if(q(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=q(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(b,"");var r=x.test(t);return r||w.test(t)?L(t.slice(2),r?2:8):y.test(t)?NaN:+t}_=function(e,t,n){var r,a,c,i,s,o,u=0,l=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,c=a;return r=a=void 0,u=t,i=e.apply(c,n)}function v(e){return u=e,s=setTimeout(_,t),l?f(e):i}function m(e){var n=e-o;return void 0===o||n>=t||n<0||d&&e-u>=c}function _(){var e=E();if(m(e))return g(e);s=setTimeout(_,function(e){var n=t-(e-o);return d?O(n,c-(e-u)):n}(e))}function g(e){return s=void 0,p&&r?f(e):(r=a=void 0,i)}function h(){var e=E(),n=m(e);if(r=arguments,a=this,o=e,n){if(void 0===s)return v(o);if(d)return s=setTimeout(_,t),f(o)}return void 0===s&&(s=setTimeout(_,t)),i}return t=P(t)||0,q(n)&&(l=!!n.leading,c=(d="maxWait"in n)?j(P(n.maxWait)||0,t):c,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=o=a=s=void 0},h.flush=function(){return void 0===s?i:g(E())},h};var D=document.querySelector(".card-set");document.querySelector(".header__form-input").addEventListener("input",e(_)((function(e){e.preventDefault(),N=e.target.value,(0,s.getSearchQuery)(),function(){z.apply(this,arguments)}()}),1e3));var N="";function F(){return H.apply(this,arguments)}function H(){return(H=e(c)(e(i).mark((function t(){var n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.getGenreList)();case 3:return n=e.sent.genres,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function W(e){return $.apply(this,arguments)}function $(){return($=e(c)(e(i).mark((function t(n){var r,a,c;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.getSearchQuery)(N,n);case 3:return r=e.sent,a=r.results,c=r.total_pages,0===r.total_results?G():Q(),e.abrupt("return",{movies:a,totalPages:c});case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0);case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function I(e){return U.apply(this,arguments)}function U(){return(U=e(c)(e(i).mark((function t(n){var r,a,c,s,o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return r=e.sent,e.next=5,W(n);case 5:return a=e.sent,c=a.movies,s=a.totalPages,o=c.map((function(e){return X(e,r)})).join(""),D.innerHTML="",D.insertAdjacentHTML("afterbegin",o),e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function X(e,t){var n=e.genre_ids,r=e.original_title,a=e.id,c=e.release_date,i=e.title,s=e.poster_path,o=function(e,t){return e.map((function(e){return t.find((function(t){return t.id===e})).name}))}(n,t),u=function(e){var t="";switch(e.length){case 1:t='<li class="card-set__genre-movie">'.concat(e[0],"</li>");break;case 2:t='<li class="card-set__genre-movie">'.concat(e[0],',&nbsp</li>\n                      <li class="card-set__genre-movie">').concat(e[1],"</li>");break;case 3:t='<li class="card-set__genre-movie">'.concat(e[0],',&nbsp</li>\n                      <li class="card-set__genre-movie">').concat(e[1],',&nbsp</li>\n                      <li class="card-set__genre-movie">').concat(e[2],"</li>");break;default:t='<li class="card-set__genre-movie">'.concat(e[0],',&nbsp</li>\n                      <li class="card-set__genre-movie">').concat(e[1],',&nbsp</li>\n                      <li class="card-set__genre-movie">Інші</li>')}return t}(o),l=new Date(c).getFullYear().toString();return'\n        <li class="card-set__item" data-id="'.concat(a,'">\n            <div class="card-set__box-img">\n            <img\n                loading="lazy"\n                src="https://image.tmdb.org/t/p/original').concat(s,'"\n                alt="').concat(r,'"\n                class="card-set__img"\n                \n            />\n            </div>\n            <h3 class="card-set__title">').concat(i,'</h3>\n            <div class="card-set__description">\n            <ul class="card-set__genre">\n                ').concat(u,'\n            </ul>\n            <span class="card-set__genre-movie">&nbsp| ').concat(l,"</span>\n            </div>\n        </li>")}function z(){return(z=e(c)(e(i).mark((function t(){var n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:n=e.sent,(0,g.changeMoviesPage)(n>50?50:n,I);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var A=document.querySelector(".header__error-text"),B=document.querySelector(".img-search-error");function G(){A.classList.remove("is-hidden"),B.classList.remove("is-hidden")}function Q(){A.classList.add("is-hidden"),B.classList.add("is-hidden")}a("73ES2");var R={openModalBtn:document.querySelector("[data-modal-opens]"),modal:document.querySelector("[data-modals]"),body:document.querySelector("body")};function Y(){return(Y=e(c)(e(i).mark((function t(){var n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:n=e.sent,(0,g.changeMoviesPage)(n>50?50:n,f);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}R.openModalBtn.addEventListener("click",(function(){R.modal.classList.remove("is-hiddens"),document.body.classList.add("modal-open"),R.body.addEventListener("keyup",(function e(t){"Escape"===t.code&&(R.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),R.body.removeEventListener("keyup",e))})),R.modal.addEventListener("click",(function e(t){t.target.closest(".modals")||(R.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),R.modal.removeEventListener("click",e))}))})),a("UL92Z"),a("hJTci"),function(){Y.apply(this,arguments)}()}();
//# sourceMappingURL=index.ce9e9395.js.map