define(function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,n){var o,i;o=[n,e],void 0!==(i=function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){this.content=t,this.startTimerButton=document.createElement("button"),this.startTimerButton.id="startTimerBtn",this.startTimerButton.innerText="Start",this.content.appendChild(this.startTimerButton),$("#startTimerBtn").click(this.startTimer()),this.stopTimerButton=document.createElement("button"),this.stopTimerButton.id="stopTimerBtn",this.stopTimerButton.innerText="Stop",this.content.appendChild(this.stopTimerButton),this.content.innerHTML+="Votes results :",this.voteResults=document.createElement("LI"),this.voteResults.id="voteResults",this.content.appendChild(this.voteResults),this.resultToCommit=document.createElement("span"),this.resultToCommit.id="resultToCommit",this.content.appendChild(this.resultToCommit),this.commitButton=document.createElement("button"),this.commitButton.id="commitTimerBtn",this.commitButton.innerText="Commit",this.content.appendChild(this.commitButton)}return t.prototype.startTimer=function(){console.log("Start timer")},t}();e.Moderator=n}.apply(e,o))&&(t.exports=i)},function(t,e,n){var o,i;o=[n,e],void 0!==(i=function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){this.element=t,this.input=document.createElement("input"),this.input.id="vote",this.element.appendChild(this.input),$("#vote").bind("input",this.vote)}return t.prototype.vote=function(){console.log("My vote is : "+$(this).val().toString())},t}();e.Player=n}.apply(e,o))&&(t.exports=i)},function(t,e,n){var o,i;o=[n,e,n(1),n(0)],void 0!==(i=function(t,e,n,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),"ms.vss-web.hub"===VSS.getContribution().type?new n.Player(document.getElementById("content")):new o.Moderator(document.getElementById("content"))}.apply(e,o))&&(t.exports=i)}])});