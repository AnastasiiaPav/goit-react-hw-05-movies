"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[202],{198:function(e,t,n){n.d(t,{E7:function(){return s},FD:function(){return o},_z:function(){return u},bw:function(){return a},n3:function(){return i}});var c="ac9cb1355cb7bf1b65c12a841cabe9f3",r="https://api.themoviedb.org/3",i=function(){return fetch("".concat(r,"/trending/movie/day?api_key=").concat(c))},o=function(e){return fetch("".concat(r,"/movie/").concat(e,"?api_key=").concat(c))},a=function(e){return fetch("".concat(r,"/movie/").concat(e,"/credits?api_key=").concat(c))},s=function(e){return fetch("".concat(r,"/movie/").concat(e,"/reviews?api_key=").concat(c))},u=function(e){return fetch("".concat(r,"/search/movie?api_key=").concat(c,"&query=").concat(e))}},202:function(e,t,n){n.r(t);var c=n(885),r=n(791),i=n(739),o=n(198),a=n(650),s=n(184);t.default=function(){var e,t,n=(0,r.useState)({}),u=(0,c.Z)(n,2),h=u[0],f=u[1],l=(0,i.UO)().movieId,d=(0,i.TH)();(0,r.useEffect)((function(){(0,o.FD)(l).then((function(e){return e.json()})).then((function(e){return f(e)})).catch((function(e){return console.log(e)}))}),[]);var v=null===(e=d.state)||void 0===e?void 0:e.home,m=null===(t=d.state)||void 0===t?void 0:t.from;return(0,s.jsxs)("div",{children:[(0,s.jsx)(a.y,{to:null!==v&&void 0!==v?v:m,children:"Go back"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:h.poster_path&&"https://image.tmdb.org/t/p/w300"+h.poster_path,alt:h.title,width:"250"}),(0,s.jsxs)("h2",{children:[h.title," (",new Date(h.release_date).getFullYear(),")"," "]}),(0,s.jsxs)("p",{children:["Score: ",h.vote_avarage]}),(0,s.jsxs)("p",{children:["Overview: ",h.overview]}),(0,s.jsxs)("p",{children:["Genres:"," ",h.genres&&h.genres.map((function(e){return e.name})).join(", ")," "]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:" Information "}),(0,s.jsx)("li",{children:(0,s.jsx)(a.y,{to:"roles",state:{home:v,from:m},children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.y,{to:"reviews",state:{home:v,from:m},children:"Reviews"})})]}),(0,s.jsx)(r.Suspense,{children:(0,s.jsx)(i.j3,{})})]})}}}]);
//# sourceMappingURL=202.c8a6c624.chunk.js.map