parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
"use strict";var e=function(e){this.XMLHttpRequest=e};e.prototype.getPenguin=function(e,n){var i=new this.XMLHttpRequest;i.onload=function(i){var t=JSON.parse(i.currentTarget.responseText),o=t[e];o.index=e,o.count=t.length,n(o)},i.open("GET","https://codepen.io/beautifulcoder/pen/vmOOLr.js",!0),i.send()};var n=function(e){this.element=e,this.onClickGetPenguin=null};n.prototype.render=function(e){this.element.innerHTML="<h3>"+e.name+'</h3><img class="penguin-image" src="'+e.imageUrl+'" alt="'+e.name+'" /><p><b>Size:</b> '+e.size+"</p><p><b>Favorite food:</b> "+e.favoriteFood+'</p><a id="previousPenguin" class="previous button" href="javascript:void(0);" data-penguin-index="'+e.previousIndex+'">Previous</a> <a id="nextPenguin" class="next button" href="javascript:void(0);" data-penguin-index="'+e.nextIndex+'">Next</a>',this.previousIndex=e.previousIndex,this.nextIndex=e.nextIndex,this.element.querySelector("#previousPenguin").addEventListener("click",this.onClickGetPenguin),this.element.querySelector("#nextPenguin").addEventListener("click",this.onClickGetPenguin)};var i=function(e,n){this.penguinView=e,this.penguinModel=n};i.prototype.initialize=function(){this.penguinView.onClickGetPenguin=this.onClickGetPenguin.bind(this)},i.prototype.onClickGetPenguin=function(e){var n=e.currentTarget,i=parseInt(n.dataset.penguinIndex,10);this.penguinModel.getPenguin(i,this.showPenguin.bind(this))},i.prototype.showPenguin=function(e){var n={name:e.name,imageUrl:e.imageUrl,size:e.size,favoriteFood:e.favoriteFood};n.previousIndex=e.index-1,n.nextIndex=e.index+1,0===e.index&&(n.previousIndex=e.count-1),e.index===e.count-1&&(n.nextIndex=0),this.penguinView.render(n)};var t=new e(XMLHttpRequest),o=document.getElementById("listOfPenguins"),u=new n(o),s=new i(u,t);s.initialize(),s.onClickGetPenguin({currentTarget:{dataset:{penguinIndex:0}}});
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.b9c6c13d.js.map