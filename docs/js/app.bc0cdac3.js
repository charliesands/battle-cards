(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],p=0,u=[];p<i.length;p++)o=i[p],r[o]&&u.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/battle-cards/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var m=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("c21b"),r=a.n(n);r.a},"14a2":function(e,t,a){e.exports=a.p+"img/exploration2.583ece81.jpg"},3399:function(e,t,a){},5004:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}}),a("router-view")],1)},s=[],o=(a("034f"),a("2877")),i={},c=Object(o["a"])(i,r,s,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,m=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home container-fluid"},[a("h1",[e._v("BattleCards")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 offset-3 align-items-center"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.startGame(t)}}},[e._v("\n        Enter Name: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.game.gameConfig.playerName,expression:"game.gameConfig.playerName"}],attrs:{type:"text",placeholder:"Your Name"},domProps:{value:e.game.gameConfig.playerName},on:{input:function(t){t.target.composing||e.$set(e.game.gameConfig,"playerName",t.target.value)}}}),a("br"),e._v("# of\n        Opponents: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.game.gameConfig.opponents,expression:"game.gameConfig.opponents"}],attrs:{type:"number",placeholder:"# of Opponents"},domProps:{value:e.game.gameConfig.opponents},on:{input:function(t){t.target.composing||e.$set(e.game.gameConfig,"opponents",t.target.value)}}}),a("br"),e._v(" Deck #:\n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.game.gameConfig.set,expression:"game.gameConfig.set"}],attrs:{type:"number",placeholder:"Set #"},domProps:{value:e.game.gameConfig.set},on:{input:function(t){t.target.composing||e.$set(e.game.gameConfig,"set",t.target.value)}}}),a("button",{on:{click:e.startGame}},[e._v("Start")]),a("button",{attrs:{type:"button"},on:{click:e.gameList}},[e._v("Games")])])])]),a("div",e._l(e.gamesList,function(t){return a("p",[e._v("\n      "+e._s(t.players[0].name)+" vs. "+e._s(t.players[1].name)+"\n      "),a("button",{on:{click:function(a){e.selectGame(t.id)}}},[e._v("Continue")])])}))])},u=[],d={name:"Home",data(){return{game:{gameConfig:{playerName:"",opponents:1,set:1}}}},computed:{gamesList(){return this.$store.state.games},singleGame(){return this.$store.state.game}},components:{},methods:{startGame(){this.$store.dispatch("createGame",this.game)},gameList(){this.$store.dispatch("listGames")},goToGame(){D.push({name:"game"})},selectGame(e){this.$store.dispatch("getGame",e)}}},g=d,f=(a("cccb"),Object(o["a"])(g,p,u,!1,null,null,null));f.options.__file="Home.vue";var v=f.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"game"},[e.gameObject.over?a("div",[e._v("\n    "+e._s(e.gameObject.winner.name)+" Wins!\n  ")]):a("div",[a("player"),a("div",[a("h1",[e._v("Choose two cards and ")]),a("button",{on:{click:e.fight}},[e._v("Fight!")])]),a("enemy")],1)])},y=[],C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"player container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col align-text-center"},[a("h1",[e._v("\n        "+e._s(e.player.name)+"\n      ")])])]),a("div",{staticClass:"row"},e._l(e.player.hand,function(t){return a("div",{staticClass:"col-2 ",class:{active:t==e.playerCard},on:{click:function(a){e.setPlayerCard(t)}}},[a("img",{attrs:{src:t.img,id:"imageId"}}),a("p",[e._v(e._s(t.name)+" "),a("br"),e._v(" Attack:"+e._s(t.attack)+" Health: "+e._s(t.health)+" Defense: "+e._s(t.defense))])])}))])},_=[],b={name:"player",computed:{player(){return this.$store.state.gameObject.players[0]},playerCard(){return this.$store.state.playerCard}},methods:{setPlayerCard(e){this.$store.dispatch("setPlayerCard",e)}}},O=b,j=(a("6131"),Object(o["a"])(O,C,_,!1,null,null,null));j.options.__file="Player.vue";var $=j.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"enemy container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col align-text-center"},[n("h1",[e._v("\n        "+e._s(e.enemy.name)+"\n      ")])])]),n("div",{staticClass:"row"},e._l(e.enemy.hand,function(t){return n("div",{staticClass:"col-2",class:{active:t==e.enemyCard},on:{click:function(a){e.setEnemyCard(t)}}},[t.visible?n("div",[n("img",{attrs:{src:t.img}}),n("p",[e._v(e._s(t.name)+" "),n("br"),e._v(" Attack:"+e._s(t.attack)+" Health: "+e._s(t.health)+" Defense: "+e._s(t.defense)+" ")])]):e._e(),t.visible?e._e():n("div",[n("img",{staticClass:"card-back",attrs:{src:a("14a2")}})])])}))])},x=[],G={name:"enemy",computed:{enemy(){return this.$store.state.gameObject.players[1]},enemyCard(){return this.$store.state.enemyCard}},methods:{setEnemyCard(e){this.$store.dispatch("setEnemyCard",e)}}},P=G,k=(a("efe1"),Object(o["a"])(P,w,x,!1,null,null,null));k.options.__file="Enemy.vue";var E=k.exports,N={name:"game",data(){return{}},computed:{gameObject(){return this.$store.state.gameObject},playerCard(){return this.$store.state.playerCard},player(){return this.gameObject.players[0]},opponent(){return this.gameObject.players[1]},opponentCard(){return this.$store.state.opponentCard},enemyCard(){return this.$store.state.enemyCard}},methods:{fight(){let e={gameId:this.gameObject.id,playerId:this.player.id,opponentId:this.opponent.id,playerCardId:this.playerCard.id,opponentCardId:this.enemyCard.id};this.$store.dispatch("fight",e)}},components:{Player:$,Enemy:E}},I=N,S=Object(o["a"])(I,h,y,!1,null,null,null);S.options.__file="Game.vue";var L=S.exports;n["a"].use(m["a"]);var D=new m["a"]({routes:[{path:"/",name:"home",component:v},{path:"/game",name:"game",component:L}]}),H=a("2f62"),M=a("bc3a"),T=a.n(M);n["a"].use(H["a"]);let A=T.a.create({baseURL:"https://inspire-server.herokuapp.com/cards",timeout:3e3});var F=new H["a"].Store({state:{gameObject:{},games:[],playerCard:{},enemyCard:{},fightObject:{}},mutations:{startGame(e,t){t.players[0].hand.find(t=>t.id==e.playerCard.id)&&(e.playerCard={}),e.gameObject=t},setList(e,t){e.games=t},setPlayerCard(e,t){e.playerCard=t},setEnemyCard(e,t){e.enemyCard=t},setFight(e,t){e.fightObject=t}},actions:{createGame({commit:e,dispatch:t},a){A.post("",a).then(t=>{console.log(t.data),e("startGame",t.data),D.push({name:"game"})})},listGames({commit:e,dispatch:t}){A.get("").then(t=>{e("setList",t.data)})},getGame({commit:e,dispatch:t},a){A.get("/"+a).then(t=>{e("startGame",t.data.data),D.push({name:"game"})})},fight({commit:e,dispatch:t},a){A.put("/"+a.gameId,a).then(e=>{console.log(e),t("getGame",a.gameId)})},setPlayerCard({commit:e},t){e("setPlayerCard",t)},setEnemyCard({commit:e},t){e("setEnemyCard",t)}}});n["a"].config.productionTip=!1,new n["a"]({router:D,store:F,render:e=>e(l)}).$mount("#app")},6131:function(e,t,a){"use strict";var n=a("5004"),r=a.n(n);r.a},"8f59":function(e,t,a){},c21b:function(e,t,a){},cccb:function(e,t,a){"use strict";var n=a("8f59"),r=a.n(n);r.a},efe1:function(e,t,a){"use strict";var n=a("3399"),r=a.n(n);r.a}});
//# sourceMappingURL=app.bc0cdac3.js.map