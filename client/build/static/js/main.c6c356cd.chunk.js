(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,n){e.exports=n(68)},68:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",(function(){return j})),n.d(a,"handleToken",(function(){return O}));var r=n(0),c=n.n(r),l=n(13),u=n.n(l),o=n(32),i=n(33),s=n(38),m=n(37),p=n(15),f=n(2),h=n(8),d=n(35),y=n.n(d),E=n(12),v=n.n(E),b=n(18),g=n(19),k=n.n(g),j=function(){return function(){var e=Object(b.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/current_user");case 2:n=e.sent,t({type:"fetch_user",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.post("/api/stripe",e);case 2:a=t.sent,n({type:"fetch_user",payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(){var e=Object(h.c)();return c.a.createElement("div",null,c.a.createElement(y.a,{amount:500,token:function(t){e(O(t))},stripeKey:"pk_test_51H0QB5KmFTh89kC3kKj54MBegrBclhrUTW5Fj63n8opn0dnCn0uBBM1q8GWynutNhzRRryNaSr9xoqRrzx4OgJ7W00ByoOmy0A",name:"Emaily",description:"$5 for 5 email credits"},c.a.createElement("button",{className:"btn"},"Add credits")))},B=function(){var e=Object(h.d)((function(e){return e.auth}));return c.a.createElement("nav",null,c.a.createElement("div",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(p.b,{to:e?"/surveys":"/",className:"left brand-logo"},"Emaily"),c.a.createElement("ul",{className:"right"},function(){switch(e){case null:return;case!1:return c.a.createElement("li",null,c.a.createElement("a",{href:"/auth/google"},"Login With Google"));default:return[c.a.createElement("li",{key:"1"},c.a.createElement(x,null)),c.a.createElement("li",{style:{margin:"0 10px"},key:"3"},"Credits: ",e.credits),c.a.createElement("li",{key:"2"},c.a.createElement("a",{href:"/api/logout"},"Logout"))]}}()))))},w=function(){return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h1",null,"Emaily!"),"Collect feedbacks from your users!")},N=function(){return c.a.createElement("h2",null,"Dashboard")},_=function(){return c.a.createElement("h2",null,"SurveyNew")},C=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(p.a,null,c.a.createElement("div",null,c.a.createElement(B,null),c.a.createElement(f.a,{path:"/",exact:!0,component:w}),c.a.createElement(f.a,{path:"/surveys/new",component:_}),c.a.createElement(f.a,{path:"/surveys",exact:!0,component:N}))))}}]),n}(r.Component),W=Object(h.b)(null,a)(C),R=n(10),q=Object(R.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_user":return t.payload||!1;default:return e}}}),K=(n(67),n(36)),M=Object(R.d)(q,{},Object(R.a)(K.a));u.a.render(c.a.createElement(h.a,{store:M},c.a.createElement(W,null)),document.querySelector("#root")),console.log("Stripe key is","pk_test_51H0QB5KmFTh89kC3kKj54MBegrBclhrUTW5Fj63n8opn0dnCn0uBBM1q8GWynutNhzRRryNaSr9xoqRrzx4OgJ7W00ByoOmy0A"),console.log("Environment is","production")}},[[39,1,2]]]);
//# sourceMappingURL=main.c6c356cd.chunk.js.map