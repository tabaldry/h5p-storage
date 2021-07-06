!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);H5PEditor.widgets.multiLineSelect=H5PEditor.MultiLineSelect=function(e,t,n,i){var r=this;this.parent=e,this.field=t,this.params=n,this.setValue=i,this.value=this.params,this.id=H5PEditor.getNextFieldId(this.field),this.changes=[],this.appendTo=function(e){var t=H5PEditor.createFieldMarkup(r.field,"",r.id),n=r.createSelect();e[0].innerHTML=t;var i=e[0].querySelector(".h5p-errors");i.parentNode.insertBefore(n,i),r.select=n},this.toggleListBox=function(e){var t=r.listBox.classList.contains("hidden");if(!(e=void 0!==e?e:t))return r.listBox.classList.add("hidden"),void r.selectButton.removeAttribute("aria-expanded");r.listBox.classList.remove("hidden"),r.selectButton.setAttribute("aria-expanded","true"),r.listBox.focus()},this.moveVertically=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=r.listBox.querySelector(".focused"),n=t.previousSibling;e&&(n=t.nextSibling),n&&(r.toggleListBox(!0),r.chooseOption(n))},this.chooseOption=function(e){var t=r.listBox.querySelector(".focused");t&&(t.classList.remove("focused"),t.removeAttribute("aria-selected")),e.classList.add("focused"),e.setAttribute("aria-selected","true"),r.selectButton.innerHTML=e.innerHTML,r.listBox.setAttribute("aria-activedescendant",e.id);var n=e.id.split("-");r.value=n[n.length-1],r.setValue(r.field,r.value),r.triggerListeners(r.value)},this.createSelect=function(){var e=document.createElement("div");e.classList.add("h5p-editor-multi-line-select");var t=document.createElement("button");t.setAttribute("aria-haspopup","listbox"),t.classList.add("multi-select"),r.selectButton=t,t.addEventListener("click",(function(){r.toggleListBox()})),t.addEventListener("keydown",(function(e){switch(e.key){case"Down":case"ArrowDown":r.moveVertically(),e.preventDefault();break;case"Up":case"ArrowUp":r.moveVertically(!1),e.preventDefault()}}));var n,i=document.createElement("ul");return i.tabIndex=-1,i.setAttribute("role","listbox"),i.classList.add("hidden"),i.classList.add("listbox"),i.addEventListener("keydown",(function(e){switch(e.key){case"Down":case"ArrowDown":r.moveVertically(),e.preventDefault();break;case"Up":case"ArrowUp":r.moveVertically(!1),e.preventDefault();break;case"Enter":case" ":r.selectButton.focus(),e.preventDefault()}})),i.addEventListener("blur",(function(e){var t=null===e.relatedTarget&&(i.contains(document.activeElement)||i===document.activeElement);e.relatedTarget&&(i.contains(e.relatedTarget)||i===e.relatedTarget)||t||r.toggleListBox(!1)})),r.listBox=i,r.field.options.forEach((function(e){var t=document.createElement("li");t.setAttribute("role","option"),t.id=r.id+"-"+e.value;var o=document.createElement("div");o.classList.add("title"),o.innerHTML=e.label;var a=document.createElement("div");a.classList.add("description"),a.innerHTML=e.description,t.appendChild(o),t.appendChild(a),t.addEventListener("keydown",(function(e){switch(e.key){case"Down":case"ArrowDown":r.moveVertically(!1),e.preventDefault();break;case"Up":case"ArrowUp":r.moveVertically(),e.preventDefault()}})),t.addEventListener("click",(function(){r.chooseOption(t),r.toggleListBox(!1)})),i.appendChild(t),r.params!==e.value&&n||(n=t)})),r.chooseOption(n),e.appendChild(t),e.appendChild(i),e},this.triggerListeners=function(e){r.changes.forEach((function(t){t(e)}))},this.validate=function(){return!0},this.getElement=function(){return r.select}}},function(e,t,n){var i=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},a=(i(r,o),r.locals?r.locals:{});e.exports=a},function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},i=[],r=0;r<e.length;r++){var o=e[r],s=t.base?o[0]+t.base:o[0],c=n[s]||0,u="".concat(s," ").concat(c);n[s]=c+1;var d=l(u),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:m(p,t),references:1}),i.push(u)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,v=0;function m(e,t){var n,i,r;if(t.singleton){var o=v++;n=h||(h=c(t)),i=p.bind(null,n,o,!1),r=p.bind(null,n,o,!0)}else n=c(t),i=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=l(n[i]);a[r].references--}for(var o=s(e,t),c=0;c<n.length;c++){var u=l(n[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=o}}}},function(e,t,n){var i=n(4),r=n(5),o=n(6);t=i(!1);var a=r(o);t.push([e.i,'.h5p-editor-multi-line-select{display:inline-block;position:relative}.h5p-editor-multi-line-select [role="listbox"]{padding:0;background-color:white;border:1px solid #aaa}.h5p-editor-multi-line-select [role="option"]{display:block;position:relative}.h5p-editor-multi-line-select [role="option"].focused{background-color:#bde4ff}.h5p-editor-multi-line-select button{font-size:16px;font-family:Lato, Sans-Serif, Arial;background-color:transparent;border:1px solid #d0d0d1;box-shadow:inset 0 0 5px rgba(0,0,0,0.12);cursor:pointer}.h5p-editor-multi-line-select button[aria-disabled="true"]{opacity:0.5}.h5p-editor-multi-line-select button.multi-select{border-radius:0;font-size:16px;text-align:left;position:relative;min-width:18em}.h5p-editor-multi-line-select [role="option"],.h5p-editor-multi-line-select button.multi-select{padding:0.85em 1em}.h5p-editor-multi-line-select button.multi-select:hover,.h5p-editor-multi-line-select button.multi-select[aria-expanded="true"]{box-shadow:0 0 8px 3px rgba(208,206,217,0.5)}.h5p-editor-multi-line-select button.multi-select::after{background:#fff url('+a+') no-repeat;width:1em;height:1em;content:" ";position:absolute;right:0.85em;top:50%;transform:translateY(-50%)}.h5p-editor-multi-line-select .title{font-weight:bold}.h5p-editor-multi-line-select .description{font-size:0.75em;color:#707070;font-style:italic}.h5p-editor-multi-line-select button .description{color:#707070 !important}.h5p-editor-multi-line-select .listbox{font-family:Lato, Sans-Serif, Arial;border-top:0;overflow-y:auto;position:absolute;margin:0;width:100%;z-index:1;outline:none;cursor:pointer}.h5p-editor-multi-line-select .hidden{display:none}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(a=i,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([r]).join("\n")}var a,l,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);i&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJCAYAAADpeqZqAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAf0lEQVQY053RsQ2EMAyF4d/XwCgpkUiXXZgja6S8haigRYyRDR4NQnCXIIElN7Y/y5JNEk/jA8BinTcfbcYVp2Zz3ny0hQ4AiXYcWAERUmaSk8SREy4FMiCGcUVq/xtnWKmXN4aU+VYWXdAvbFDt5Cu6O/UW7bCnjyUgCXvzpw2xjbiHyolgTgAAAABJRU5ErkJggg=="}]);