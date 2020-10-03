(this.webpackJsonpsplat=this.webpackJsonpsplat||[]).push([[0],{26:function(e,t,n){e.exports=n(47)},31:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),u=n.n(l),o=(n(31),n(22)),c=n(4),i=n.n(c),s=n(9),m=n(10),d=n(5),p=n(1),b=n(23),h=n.n(b),v=n(16),f=n(24),g=n.n(f),E=function(){var e,t,n,l=null!==(e=null===(t=Object(d.useAuth)())||void 0===t||null===(n=t.userData)||void 0===n?void 0:n.access_token)&&void 0!==e?e:null,u=Object(a.useRef)(new h.a),c=Object(a.useRef)(),p=Object(a.useState)(null),b=Object(m.a)(p,2),f=b[0],g=b[1];u.current.setAccessToken(l);var E=Object(v.b)("current-playing",Object(s.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.current.getMyCurrentPlaybackState();case 2:return r=e.sent,e.abrupt("return",{album:null===(t=r.item)||void 0===t?void 0:t.album.id,song:null===(n=r.item)||void 0===n?void 0:n.id,pos:null===(a=r.item)||void 0===a?void 0:a.track_number});case 4:case"end":return e.stop()}}),e)}))),{refetchInterval:1e4,enabled:u.current.getAccessToken()}),k=E.data,O=E.error,j=Object(v.a)(function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a,r,l,c,s,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.current.getAlbumTracks(t,{limit:50,offset:1});case 2:n=e.sent,a=n.items.length,r=Object(o.a)(n.items.entries()),e.prev=5,r.s();case 7:if((l=r.n()).done){e.next=14;break}return c=Object(m.a)(l.value,2),s=c[0],d=c[1],g({i:s,of:a}),e.next=12,u.current.queue(d.uri);case 12:e.next=7;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),r.e(e.t0);case 19:return e.prev=19,r.f(),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[5,16,19,22]])})));return function(t){return e.apply(this,arguments)}}()),y=Object(m.a)(j,2),w=y[0],x=y[1];return Object(a.useEffect)((function(){Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.current!==(null===k||void 0===k?void 0:k.album)&&(null===k||void 0===k?void 0:k.album)&&1===(null===k||void 0===k?void 0:k.pos)&&w(null===k||void 0===k?void 0:k.album),c.current=null===k||void 0===k?void 0:k.album;case 2:case"end":return e.stop()}}),e)})))()}),[w,k]),r.a.createElement("div",null,r.a.createElement("h1",null,"Dashboard"),O?r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"ERROR: "),JSON.parse(O.response).error.message):r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"TODO: "),"put something status-y here"),x.isLoading&&r.a.createElement("p",null,"enqueueing songs (",r.a.createElement("code",null,null===f||void 0===f?void 0:f.i,"/",null===f||void 0===f?void 0:f.of),")"))},k=function(){var e=Object(d.useAuth)(),t=e.signIn,n=e.userData,a=Object(p.e)();return r.a.createElement("div",null,r.a.createElement(g.a,{href:"https://github.com/Briaoeuidhtns/splat",bannerColor:"#1DB954"}),r.a.createElement("h1",null,"Splat"),r.a.createElement("p",null,"Quick description or smth, warning about login redirect"),r.a.createElement("h2",null,"Known ",r.a.createElement("i",null,"FeAtUrEs")),r.a.createElement("ul",null,r.a.createElement("li",null,"If the first song is shorter than the poll time (10 seconds), the album may not get enqueued"),r.a.createElement("li",null,"On page reload songs get enqueued another time"),r.a.createElement("li",null,"Everything is done from the browser, so this site has to stay open."),r.a.createElement("li",null,"Token sometimes doesn't auto refresh, in case of errors close/open page"),r.a.createElement("li",null,"Having it open in multiple tabs is prob bad")),(null===n||void 0===n?void 0:n.access_token)?r.a.createElement("button",{onClick:function(){return a.push("/dashboard")}},"Go to app"):r.a.createElement("button",{onClick:function(){return t()}},"Log in to Spotify"))},O=function(e){var t=e.children,n=e.loginPage,a=Object(d.useAuth)(),l=a.userData,u=a.loading,o=Object(p.e)();return(null===l||void 0===l?void 0:l.access_token)||u||o.replace(n),u?null:r.a.createElement(r.a.Fragment,null,t)},j=function(){var e=Object(p.e)();return r.a.createElement("div",{className:"App"},r.a.createElement(d.AuthProvider,{userManager:new d.UserManager({authority:"https://accounts.spotify.com/",metadata:{authorization_endpoint:"https://accounts.spotify.com/authorize",token_endpoint:"https://accounts.spotify.com/api/token"},response_type:"code",client_id:"908eaf93b654400f95f7bb221967a65b",redirect_uri:"https://briaoeuidhtns.github.io/splat/auth",scope:"user-read-playback-state user-modify-playback-state"}),autoSignIn:!1,automaticSilentRenew:!0,onSignIn:function(t){return e.replace("/dashboard",t)}},r.a.createElement(p.a,{exact:!0,path:"/"},r.a.createElement(k,null)),r.a.createElement(p.a,{path:"/dashboard"},r.a.createElement(O,{loginPage:"/"},r.a.createElement(E,null)))))},y=n(12);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y.a,{basename:"/splat"},r.a.createElement(j,null))),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.3b61928f.chunk.js.map