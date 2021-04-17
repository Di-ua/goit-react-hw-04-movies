(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{60:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var i=a(14),n=a(16),c=a(18),s=a(17),o=a(0),r=a(9),l=a(64),v=a(21),h=a(68),u=a(65),m=a(97),p=a.n(m),g=a(2),d=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={movie:"",path:"",search:""},e.handleGoBack=function(){var t=e.props,a=t.history,i=t.location;if(i.state)return i.state.from.search=e.state.search,i.state.from.pathname=e.state.path,void a.push(i.state.from);e.props.history.push(v.a.home)},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;u.a.fetchMovieDetails(t).then((function(t){e.setState({movie:t,path:e.props.location.state.from.pathname,search:e.props.location.state.from.search})}))}},{key:"render",value:function(){var e,t,a,i=this.state.movie,n=Number.parseInt(i.release_date);return i.genres&&(e=i.genres.map((function(e){return e.name})).join(" ")),t=i.overview?i.overview:"No overview found for this movie",a=i.poster_path?"https://image.tmdb.org/t/p/w300/".concat(i.poster_path):"https://rimatour.com/wp-content/uploads/2017/09/No-image-found.jpg",i?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(h.a,{}),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("button",{type:"button",onClick:this.handleGoBack,className:p.a.btn,children:"Go Back"}),Object(g.jsxs)("div",{className:p.a.movieDetails,children:[Object(g.jsx)("img",{src:a,className:p.a.poster,alt:i.title}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{className:p.a.name,children:[i.title,"(",n,")"]}),Object(g.jsxs)("p",{children:["User score: ",10*i.vote_average,"%"]}),Object(g.jsx)("h3",{children:"Overview"}),Object(g.jsx)("p",{children:t}),Object(g.jsx)("h3",{children:"Genres"}),Object(g.jsx)("p",{children:e})]})]}),Object(g.jsxs)("div",{className:p.a.container,children:[Object(g.jsx)("h2",{className:p.a.title,children:"Additional information"}),Object(g.jsxs)("ul",{className:p.a.linkBox,children:[Object(g.jsx)("li",{children:Object(g.jsx)(r.c,{exact:!0,to:{pathname:"/movies/".concat(i.id,"/cast"),state:{from:this.props.location}},className:p.a.link,activeClassName:p.a.activeLink,children:"Cast"})}),Object(g.jsx)("li",{children:Object(g.jsx)(r.c,{exact:!0,to:{pathname:"/movies/".concat(i.id,"/reviews"),state:{from:this.props.location}},className:p.a.link,activeClassName:p.a.activeLink,children:"Reviews"})})]})]})]})]}):Object(g.jsx)(l.a,{})}}]),a}(o.Component)},64:function(e,t,a){"use strict";var i=a(15);a.d(t,"a",(function(){return i.a}))},65:function(e,t,a){"use strict";var i=a(14),n=a(66),c=a.n(n),s=new function e(){var t=this;Object(i.a)(this,e),this.baseURL="https://api.themoviedb.org/3/",this.key="4b09b9f11ab38c2c9b3fb8d82d1b956b",this.language="en-US",this.fetchPopularMovies=function(){return t.get("trending/movie/day?api_key=".concat(t.key,"&adult=false"))},this.fetchMoviesWithQuery=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t.get("search/movie?api_key=".concat(t.key,"&language=").concat(t.language,"&query=").concat(e,"&page=").concat(a,"&include_adult=false"))},this.fetchMovieDetails=function(e){return t.get("movie/".concat(e,"?api_key=").concat(t.key,"&language=").concat(t.language))},this.fetchMovieCast=function(e){return t.get("movie/".concat(e,"/credits?api_key=").concat(t.key,"&language=").concat(t.language))},this.fetchMovieReviews=function(e){return t.get("movie/".concat(e,"/reviews?api_key=").concat(t.key,"&language=").concat(t.language))},this.get=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return c.a.get("".concat(t.baseURL).concat(e)).then((function(e){return e.data}))}};t.a=s},67:function(e,t,a){e.exports={navigationLinkContainer:"Header_navigationLinkContainer__1X1eq",navigationLink:"Header_navigationLink__ZobDm",navigationLinkActive:"Header_navigationLinkActive__3hfUh"}},68:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a(0);var i=a(9),n=a(67),c=a.n(n),s=a(2),o=function(){return Object(s.jsxs)("div",{className:c.a.navigationLinkContainer,children:[Object(s.jsx)(i.c,{exact:!0,to:"/",className:c.a.navigationLink,activeClassName:c.a.navigationLinkActive,children:"Home"}),Object(s.jsx)(i.c,{to:"/movies",className:c.a.navigationLink,activeClassName:c.a.navigationLinkActive,children:"Movies"})]})}},97:function(e,t,a){e.exports={btn:"MovieDetailsPage_btn__ZKEjK",movieDetails:"MovieDetailsPage_movieDetails__3AfvI",poster:"MovieDetailsPage_poster__1GuOT",name:"MovieDetailsPage_name__1xR7c",container:"MovieDetailsPage_container__14xx-",title:"MovieDetailsPage_title__nMAQj",linkBox:"MovieDetailsPage_linkBox__V9kpV",link:"MovieDetailsPage_link__3JUmJ",activeLink:"MovieDetailsPage_activeLink__1ZLlA"}}}]);
//# sourceMappingURL=4.6e7493d4.chunk.js.map