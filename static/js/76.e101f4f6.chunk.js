"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(861),a=t(885),c=t(757),i=t.n(c),o=t(791),s={movieContainer:"MovieDetails_movieContainer__uivPc",movieImg:"MovieDetails_movieImg__B2Jy1",link:"MovieDetails_link__coFQG",button:"MovieDetails_button__9VA3h"},u=t(87),p=t(689),l=t(937),v=t(184),d=function(){var e=(0,o.useState)(null),n=(0,a.Z)(e,2),t=n[0],c=n[1],d=(0,p.UO)().movieId,f=(0,p.s0)(),h=(0,p.TH)(),m=(0,p.bS)("/movies/:movieId/*").pathname.match(/^(\/movies\/\d+)/)[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.TP)(d);case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[d]),(0,v.jsxs)("div",{className:s.container,children:[t?(0,v.jsxs)("div",{children:[(0,v.jsx)("button",{type:"button",onClick:function(){f(-1)},className:s.button,children:"Go back"}),(0,v.jsxs)("div",{className:s.movieContainer,children:[(0,v.jsx)("div",{className:s.movieImg,children:(0,v.jsx)("img",{src:t.poster_path?l.yA+t.poster_path:"https://bitsofco.de/content/images/2018/12/broken-1.png",alt:t.title,widht:"",height:""})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:t.title}),(0,v.jsxs)("p",{children:["User Score: ","".concat((10*t.vote_average).toFixed(2)),"%"]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:"".concat(t.overview)}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:"".concat(t.genres.map((function(e){return e.name})).join(" / "))})]})]})]}):(0,v.jsx)("div",{className:s.notFound,children:"Movie is not found"}),(0,v.jsx)("hr",{}),(0,v.jsx)("p",{children:"Additional information"}),(0,v.jsxs)("nav",{children:[(0,v.jsx)(u.OL,{to:{pathname:"".concat(m,"/cast")},className:s.link,state:{location:h},replace:!0,children:"Cast"}),(0,v.jsx)(u.OL,{to:{pathname:"".concat(m,"/reviews")},className:s.link,state:{location:h},replace:!0,children:"Reviews"})]}),(0,v.jsx)(p.j3,{})]})}},937:function(e,n,t){t.d(n,{Df:function(){return l},Jh:function(){return d},M1:function(){return v},TP:function(){return p},yA:function(){return s},z1:function(){return u}});var r=t(861),a=t(757),c=t.n(a),i=t(44);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="8663fb316a268bb124c73bebcd8bdf78",s="https://image.tmdb.org/t/p/w500",u=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(n),e.next=3,i.Z.get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n,"$?api_key=").concat(o,"&language=en-US"),e.next=3,i.Z.get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="trending/movie/day?api_key=".concat(o),e.next=3,i.Z.get(n);case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US"),e.next=3,i.Z.get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US"),e.next=3,i.Z.get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.e101f4f6.chunk.js.map