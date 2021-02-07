(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{45:function(e,t,n){e.exports={container:"Container_container__3i19u"}},53:function(e,t,n){},79:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(19),o=n.n(a),i=(n(53),n(2)),u=n(45),s=n.n(u),l=n(1);var b=function(e){var t=e.children;return Object(l.jsx)("div",{className:s.a.container,children:t})},j=n(13),d=n.n(j),f=n(18),O=n(12),h=n.n(O),p=n(4),g=Object(p.b)("contacts/fetchContactRequest"),x=Object(p.b)("contacts/fetchContactSuccsess"),m=Object(p.b)("contacts/fetchContactError"),v=Object(p.b)("contacts/addContactRequest"),y=Object(p.b)("contacts/addContactSuccsess"),k=Object(p.b)("contacts/addContactError"),w=Object(p.b)("contacts/deleteContactRequest"),C=Object(p.b)("contacts/deleteContactSuccsess"),S=Object(p.b)("contacts/deleteContactError"),L=Object(p.b)("contacts/changeFilter");h.a.defaults.baseURL="http://localhost:4040";var I=function(e,t){return function(n){var c={name:e,number:t};n(v()),h.a.post("/contacts",c).then((function(e){var t=e.data;return n(y(t))})).catch((function(e){return n(k(e))}))}},R=function(e){return function(t){t(w()),h.a.delete("/contacts/".concat(e)).then((function(){return t(C(e))})).catch((function(e){return t(S(e))}))}},E=function(){return function(){var e=Object(f.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g()),e.prev=1,e.next=4,h.a.get("/contacts");case 4:n=e.sent,c=n.data,t(x(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(m(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},W=n(26),z=function(e){return e.contacts.items},U=function(e){return e.contacts.filter},D=Object(W.a)([z,U],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){var t=e.name;return t&&t.toLowerCase().includes(n)}))}));function F(){var e=Object(i.c)(D),t=Object(i.b)();return Object(l.jsx)("ul",{children:e.map((function(e){var n=e.id,c=e.name,r=e.number;return Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{children:c}),Object(l.jsx)("p",{children:r}),Object(l.jsx)("button",{type:"button",onClick:function(){return function(e){return t(R(e))}(n)},children:"Delete"})]},n)}))})}var A=n(16),B=n(22);var N,P,T,q=function(){var e=Object(i.c)(z),t=Object(i.b)(),n=Object(c.useState)(""),r=Object(A.a)(n,2),a=r[0],o=r[1],u=Object(c.useState)(""),s=Object(A.a)(u,2),b=s[0],j=s[1],d=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":o(c);break;case"number":j(c);break;default:return}},f=function(){o(""),j("")};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("form",{onSubmit:function(n){n.preventDefault(),!function(t){return e.find((function(e){return e.name&&e.name.toLowerCase()===t.toLowerCase()}))}(a)?!function(t){return e.find((function(e){return e.number===t}))}(b)?!function(e,t){return""===e.trim()||""===t.trim()}(a,b)?!function(e){return!/\d{3}[-]\d{2}[-]\d{2}/g.test(e)}(b)?t(I(a,b)):B.a.error(" Enter the correct phone number"):B.a.info(" Enter the correct name and number"):Object(B.a)(" ".concat(b," is already in use")):Object(B.a)("".concat(a," is already in use")),f()},children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("label",{children:["Name",Object(l.jsx)("input",{type:"text",name:"name",value:a,onChange:d,placeholder:"Andrey Kovsh"})]}),Object(l.jsxs)("label",{children:["Phone number",Object(l.jsx)("input",{type:"text",name:"number",value:b,onChange:d,placeholder:"817-18-41"})]}),Object(l.jsx)("button",{type:"submit",children:"Add contact"})]})})})},_=function(){var e=Object(i.c)(U),t=Object(i.b)();return Object(l.jsxs)("label",{children:["Find contacts by name",Object(l.jsx)("input",{type:"text",value:e,onChange:function(e){return t(L(e.target.value))}})]})},H=n(5),J=n(28),K=n(7),M=Object(p.d)([],(N={},Object(H.a)(N,x,(function(e,t){return t.payload})),Object(H.a)(N,y,(function(e,t){var n=t.payload;return[].concat(Object(J.a)(e),[n])})),Object(H.a)(N,C,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),N)),V=Object(p.d)(!1,(P={},Object(H.a)(P,g,(function(){return!0})),Object(H.a)(P,x,(function(){return!1})),Object(H.a)(P,m,(function(){return!1})),Object(H.a)(P,v,(function(){return!0})),Object(H.a)(P,y,(function(){return!1})),Object(H.a)(P,k,(function(){return!1})),Object(H.a)(P,w,(function(){return!0})),Object(H.a)(P,C,(function(){return!1})),Object(H.a)(P,S,(function(){return!1})),P)),G=Object(p.d)("",Object(H.a)({},L,(function(e,t){return t.payload}))),Q=Object(p.d)(null,(T={},Object(H.a)(T,m,(function(e,t){return t.payload})),Object(H.a)(T,g,(function(){return null})),Object(H.a)(T,v,(function(){return null})),Object(H.a)(T,w,(function(){return null})),Object(H.a)(T,S,(function(e,t){return t.payload})),Object(H.a)(T,k,(function(e,t){return t.payload})),T)),X=Object(K.c)({items:M,filter:G,loading:V,error:Q});function Y(){var e=Object(i.b)();return Object(c.useEffect)((function(){return e(E())}),[e]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Phonebook"}),Object(l.jsx)(q,{}),Object(l.jsx)("h2",{children:"Contacts"}),Object(l.jsx)(_,{}),Object(l.jsx)(F,{})]})}var Z={container:{minHeight:"calc(100vh - 50px)",display:"flex",alignItems:"center",justifyContent:"center"},title:{fontWeight:500,fontSize:48,textAlign:"center"}},$=function(){return Object(l.jsx)("div",{style:Z.container,children:Object(l.jsx)("h1",{style:Z.title,children:Object(l.jsx)("p",{children:"Welcome to our Phonebook!"})})})};h.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var ee,te=function(e){h.a.defaults.headers.common.Authorization="Bearer ".concat(e)},ne=function(){h.a.defaults.headers.common.Authorization=""},ce={register:Object(p.c)("/users/signup",function(){var e=Object(f.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/users/signup",t);case 3:return n=e.sent,c=n.data,te(c.token),e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),logIn:Object(p.c)("auth/login",function(){var e=Object(f.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/users/login",t);case 3:return n=e.sent,c=n.data,te(c.token),e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),logOut:Object(p.c)("auth/logout",Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("users/logout");case 3:ne(),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))),fetchCurrentUser:Object(p.c)("auth/refresh",function(){var e=Object(f.a)(d.a.mark((function e(t,n){var c,r,a,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n.getState(),null!==(r=c.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return te(r),e.prev=5,e.next=8,h.a.get("users/current");case 8:return a=e.sent,o=a.data,e.abrupt("return",o);case 13:e.prev=13,e.t0=e.catch(5);case 15:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}())},re={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUserName:function(e){return e.auth.user.name},getIsFetchingCurrent:function(e){return e.auth.isFetchingCurrentUser}},ae=Object(p.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:(ee={},Object(H.a)(ee,ce.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(H.a)(ee,ce.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(H.a)(ee,ce.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(H.a)(ee,ce.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0})),ee)}).reducer,oe={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15},section:{border:" 2px solid white",padding:30},button:{fontSize:15,fontWeight:700,borderRadius:10,padding:10,background:"white"}};function ie(){var e=Object(i.b)(),t=Object(c.useState)(""),n=Object(A.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(""),u=Object(A.a)(o,2),s=u[0],b=u[1],j=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"email":return a(c);case"password":return b(c);default:return}};return Object(l.jsxs)("div",{style:oe.section,children:[Object(l.jsx)("h1",{children:"Log in"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(ce.logIn({email:r,password:s})),a(""),b("")},style:oe.form,autoComplete:"off",children:[Object(l.jsxs)("label",{style:oe.label,children:["E-mail",Object(l.jsx)("input",{type:"email",name:"email",value:r,onChange:j})]}),Object(l.jsxs)("label",{style:oe.label,children:["Password",Object(l.jsx)("input",{type:"password",name:"password",value:s,onChange:j})]}),Object(l.jsx)("button",{type:"submit",style:oe.button,children:"Log in"})]})]})}var ue={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15},section:{border:" 2px solid white",padding:30},button:{fontSize:15,fontWeight:700,borderRadius:10,padding:10,background:"white"}};function se(){var e=Object(i.b)(),t=Object(c.useState)(""),n=Object(A.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(""),u=Object(A.a)(o,2),s=u[0],b=u[1],j=Object(c.useState)(""),d=Object(A.a)(j,2),f=d[0],O=d[1],h=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":return a(c);case"email":return b(c);case"password":return O(c);default:return}};return Object(l.jsxs)("div",{style:ue.section,children:[Object(l.jsx)("h1",{children:"Create account"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(ce.register({name:r,email:s,password:f})),a(""),b(""),O("")},style:ue.form,autoComplete:"on",children:[Object(l.jsxs)("label",{style:ue.label,children:["Name",Object(l.jsx)("input",{type:"text",name:"name",value:r,onChange:h})]}),Object(l.jsxs)("label",{style:ue.label,children:["E-mail",Object(l.jsx)("input",{type:"email",name:"email",value:s,onChange:h})]}),Object(l.jsxs)("label",{style:ue.label,children:["Password",Object(l.jsx)("input",{type:"password",name:"password",value:f,onChange:h})]}),Object(l.jsx)("button",{type:"submit",style:ue.button,children:"Sign up"})]})]})}var le=n(15),be={link:{fontSize:"20px",display:"inline-block",textDecoration:"none",marginLeft:25,padding:12,fontWeight:700,color:"orangered"},activeLink:{color:"rgb(10, 210, 10)"}},je=function(){return Object(l.jsxs)("nav",{children:[Object(l.jsx)(le.b,{to:"/",exact:!0,style:be.link,activeStyle:be.activeLink,children:"Homepage"}),Object(l.jsx)(le.b,{to:"/contacts",exact:!0,style:be.link,activeStyle:be.activeLink,children:"Contacts"})]})},de={container:{display:"flex",alignItems:"center",marginRight:25},name:{fontWeight:700,marginRight:15,color:"rgb(10, 210, 10)"},button:{fontSize:20,fontWeight:700,borderRadius:5,padding:10,backgroundColor:"white"}};function fe(){var e=Object(i.b)(),t=Object(i.c)(re.getUserName);return Object(l.jsxs)("div",{style:de.container,children:[Object(l.jsxs)("span",{style:de.name,children:["Welcome, ",t]}),Object(l.jsx)("button",{type:"button",style:de.button,onClick:function(){return e(ce.logOut())},children:"Log out"})]})}var Oe={link:{display:"inline-block",textDecoration:"none",padding:12,marginRight:20,fontSize:20,fontWeight:700,color:"orangered"},activeLink:{color:"rgb(10, 210, 10)"}};function he(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(le.b,{to:"/register",exact:!0,style:Oe.link,activeStyle:Oe.activeLink,children:"Sign up"}),Object(l.jsx)(le.b,{to:"/login",exact:!0,style:Oe.link,activeStyle:Oe.activeLink,children:"Log in"})]})}var pe={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"2px solid orangered"}};function ge(){var e=Object(i.c)(re.getIsLoggedIn);return Object(l.jsxs)("header",{style:pe.header,children:[Object(l.jsx)(je,{}),e?Object(l.jsx)(fe,{}):Object(l.jsx)(he,{})]})}var xe=n(6),me=n(21),ve=n(29);function ye(e){var t=e.children,n=e.redirectTo,c=void 0===n?"/":n,r=Object(ve.a)(e,["children","redirectTo"]),a=Object(i.c)(re.getIsLoggedIn);return Object(l.jsx)(xe.b,Object(me.a)(Object(me.a)({},r),{},{children:a?t:Object(l.jsx)(xe.a,{to:c})}))}function ke(e){var t=e.children,n=e.restricted,c=void 0!==n&&n,r=e.redirectTo,a=void 0===r?"/":r,o=Object(ve.a)(e,["children","restricted","redirectTo"]),u=Object(i.c)(re.getIsLoggedIn)&&c;return Object(l.jsx)(xe.b,Object(me.a)(Object(me.a)({},o),{},{children:u?Object(l.jsx)(xe.a,{to:a}):t}))}n(79);function we(){var e=Object(i.b)(),t=Object(i.c)(re.getIsFetchingCurrent);return Object(c.useEffect)((function(){e(ce.fetchCurrentUser())}),[e]),!t&&Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(b,{children:[Object(l.jsx)(ge,{}),Object(l.jsxs)(xe.d,{children:[Object(l.jsx)(ke,{exact:!0,path:"/",children:Object(l.jsx)($,{})}),Object(l.jsx)(ke,{exact:!0,path:"/register",restricted:!0,children:Object(l.jsx)(se,{})}),Object(l.jsx)(ke,{exact:!0,path:"/login",restricted:!0,children:Object(l.jsx)(ie,{})}),Object(l.jsx)(ye,{children:Object(l.jsx)(Y,{path:"/contacts"})})]})]})})}var Ce=n(46),Se=n(47),Le=n.n(Se),Ie=n(17),Re=n(48),Ee=n.n(Re),We=[].concat(Object(J.a)(Object(p.f)({serializableCheck:{ignoredActions:[Ie.a,Ie.f,Ie.b,Ie.c,Ie.d,Ie.e]}})),[Le.a]),ze={key:"auth",storage:Ee.a,whitelist:["token"]},Ue=Object(p.a)({reducer:{auth:Object(Ie.g)(ze,ae),contacts:X},middleware:We,devTools:!1}),De=Object(Ie.h)(Ue);o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(i.a,{store:Ue,children:Object(l.jsx)(Ce.a,{loading:null,persistor:De,children:Object(l.jsx)(le.a,{children:Object(l.jsx)(we,{})})})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.6b00b83e.chunk.js.map