"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{76:function(e,n,t){t.d(n,{$7:function(){return f},Hx:function(){return v},Y5:function(){return p},uV:function(){return l},wr:function(){return i}});var r=t(861),a=t(757),c=t.n(a),u=t(243),s="28e7de8a02a020e11a900cecedfaedb8",o="https://api.themoviedb.org/3",i=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/movie/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},936:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),o=t(87),i="Home_Container__Ccfa4",f="Home_Title__zLKc5",p="Home_MovieList__8DFZA",l="Home_Item__MlGuD",v="Home_Link__zeaS0",d=t(76),m=t(184),_=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],_=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.wr)();case 3:n=e.sent,c(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){_()}),[]),(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)("h1",{className:f,children:"Trending Today"}),(0,m.jsx)("ul",{className:p,children:t.map((function(e){return(0,m.jsx)("li",{className:l,children:(0,m.jsx)(o.rU,{to:"movies/".concat(e.id),state:{from:"/"},className:v,children:e.name||e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=936.56e99db2.chunk.js.map