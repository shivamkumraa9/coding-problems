(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,a,t){e.exports=t(59)},59:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(29),l=t.n(o),s=t(5),c=t(4),m=t(1),i=t(6),u=t.n(i),d=r.a.createContext(),p=function(){var e=r.a.useContext(d),a=e.loggedin;e.setloggedin;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement(c.b,{to:"/",className:"navbar-brand"},"HackerCode"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/",className:"nav-link"},"Home")),a?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/profile",className:"nav-link"},"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/questions",className:"nav-link"},"Questions")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/logout",className:"nav-link"},"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/register",className:"nav-link"},"Register")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/login",className:"nav-link"},"Login")))))))},E=function(){return r.a.createElement("section",{id:"home"},r.a.createElement("h1",null,"Welcome To Home"))},b=t(3),g=function(){var e=r.a.useContext(d),a=e.loggedin,t=(e.setloggedin,r.a.useState(!1)),n=Object(s.a)(t,2),o=n[0],l=n[1],c=r.a.useState({}),i=Object(s.a)(c,2),p=(i[0],i[1],!1);if(r.a.useEffect((function(){return a&&u.a.post("/api/auth/profile/",{token:localStorage.getItem("token")}).then((function(e){p||l(e.data)})).catch((function(e){})),function(){p=!0}}),[]),!a)return r.a.createElement(m.a,{to:"/login"});return r.a.createElement("div",{className:"container text-center mt-5"},o?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,o.username),r.a.createElement("h2",null,o.email),o.is_active?o.is_cancel?r.a.createElement("button",{type:"button",onClick:function(e){u.a.post("/api/subscriptions/resume/",{token:localStorage.getItem("token")}).then((function(e){p||l(Object(b.a)(Object(b.a)({},o),{},{is_cancel:!1}))})).catch((function(e){}))},className:"btn btn-primary"},"Resume"):r.a.createElement("button",{type:"button",onClick:function(e){u.a.post("/api/subscriptions/cancel/",{token:localStorage.getItem("token")}).then((function(e){p||l(Object(b.a)(Object(b.a)({},o),{},{is_cancel:!0}))})).catch((function(e){}))},className:"btn btn-danger"},"Cancel"):r.a.createElement("button",{type:"button",onClick:function(e){},className:"btn btn-primary"},"Subscribe")):r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},f=t(13),v=t.n(f),h=t(15),N=t(11),w=function(){var e=r.a.useContext(d),a=e.loggedin,t=e.setloggedin,n=r.a.useState({email:"",password:"",error:!1}),o=Object(s.a)(n,2),l=o[0],c=o[1],i=r.a.useState(!1),p=Object(s.a)(i,2),E=p[0],g=p[1],f=function(e){c(Object(b.a)(Object(b.a)({},l),{},Object(N.a)({},e.target.name,e.target.value)))},w=function(){var e=Object(h.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),g(!0),u.a.post("http://localhost:8000/api/auth/login",{email:l.email,password:l.password}).then((function(e){e.data.okay?(localStorage.setItem("token",e.data.token),t(!0)):(c(Object(b.a)(Object(b.a)({},l),{},{error:!0})),g(!1))})).catch((function(e){g(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return a?r.a.createElement(m.a,{to:"/profile"}):r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Login Here"),l.error?r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Invalid Email/Password"):"",r.a.createElement("form",{onSubmit:w},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{name:"email",type:"email",onChange:f,required:!0,className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPass1"},"Password"),r.a.createElement("input",{name:"password",type:"password",onChange:f,required:!0,className:"form-control",id:"exampleInputPass1","aria-describedby":"emailHelp"})),E?r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))},k=function(){var e=r.a.useContext(d),a=e.loggedin,t=(e.setloggedin,r.a.useState({username:"",email:"",password1:"",password2:"",emailError:!1,password1Error:!1,emailmsg:"Email Already Exists",password1msg:"Password Did Not Match"})),n=Object(s.a)(t,2),o=n[0],l=n[1],c=r.a.useState(!1),i=Object(s.a)(c,2),p=i[0],E=i[1],g=r.a.useState(!1),f=Object(s.a)(g,2),w=f[0],k=f[1],y=function(e){var a;l(Object(b.a)(Object(b.a)({},o),{},(a={},Object(N.a)(a,e.target.name,e.target.value),Object(N.a)(a,e.target.name+"Error",!1),a)))},x=function(){var e=Object(h.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),o.password1.length>5?o.password1===o.password2?(E(!0),u.a.post("http://localhost:8000/api/auth/register",{username:o.username,email:o.email,password:o.password1}).then((function(e){e.data.okay?k(!0):(l(Object(b.a)(Object(b.a)({},o),{},{emailError:!0})),E(!1))})).catch((function(e){E(!1)}))):l(Object(b.a)(Object(b.a)({},o),{},{password1Error:!0,password2Error:!0,password1msg:"Password Did Not Match"})):l(Object(b.a)(Object(b.a)({},o),{},{password1Error:!0,password2Error:!0,password1msg:"Length should be atleast 6"}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return a?r.a.createElement(m.a,{to:"/profile"}):w?r.a.createElement(m.a,{to:"/login"}):r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Register Here"),r.a.createElement("form",{onSubmit:x},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputName1"},"Full Name"),r.a.createElement("input",{name:"username",type:"text",onChange:y,required:!0,className:"form-control",id:"exampleInputName1","aria-describedby":"emailHelp"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{name:"email",type:"email",onChange:y,required:!0,className:o.emailError?"form-control is-invalid":"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),r.a.createElement("div",{id:"validationServer03Feedback",className:"invalid-feedback"},o.emailmsg)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPass1"},"Password"),r.a.createElement("input",{name:"password1",type:"password",onChange:y,required:!0,className:o.password1Error?"form-control is-invalid":"form-control",id:"exampleInputPass1","aria-describedby":"emailHelp"}),r.a.createElement("div",{id:"validationServer03Feedback",className:"invalid-feedback"},o.password1msg)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPass2"},"Confirm Password"),r.a.createElement("input",{name:"password2",type:"password",onChange:y,required:!0,className:o.password1Error?"form-control is-invalid":"form-control",id:"exampleInputPass2","aria-describedby":"emailHelp"}),r.a.createElement("div",{id:"validationServer03Feedback",className:"invalid-feedback"},o.password1msg)),p?r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))},y=function(){var e=r.a.useContext(d),a=(e.loggedin,e.setloggedin);return r.a.useEffect((function(){a(!1),localStorage.setItem("token","")}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"You Have Been Logged Out"))},x=function(){var e=r.a.useContext(d),a=e.loggedin,t=(e.setloggedin,r.a.useState({load:!0,seemore:2,questions:[]})),n=Object(s.a)(t,2),o=n[0],l=n[1];r.a.useEffect((function(){return a&&u.a.post("/api/questions/questions/1",{token:localStorage.getItem("token")}).then((function(e){i||l({load:!1,seemore:o.seemore,questions:e.data.questions})})).catch((function(e){})),function(){i=!0}}),[]);var i=!1;return a?r.a.createElement("div",{className:"container text-center mt-5"},o.load?r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(r.a.Fragment,null,o.questions.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(c.b,{to:"/question/".concat(e.id_)},e.name),r.a.createElement("br",null))})),o.seemore?r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(e){u.a.post("/api/questions/questions/".concat(o.seemore),{token:localStorage.getItem("token")}).then((function(e){if(!i){var a=e.data.questions;if(a.length>0){var t=o.questions.concat(a);l({load:!1,seemore:o.seemore+1,questions:t})}else l({load:!1,seemore:0,questions:o.questions})}})).catch((function(e){}))}},"See More"):r.a.createElement("p",null,"No More Questions"))):r.a.createElement(m.a,{to:"/login"})},q=function(e){var a=r.a.useContext(d),t=a.loggedin,n=(a.setloggedin,r.a.useState({load:!0,question:!1})),o=Object(s.a)(n,2),l=o[0],c=o[1];r.a.useEffect((function(){return t&&u.a.post("/api/questions/question/".concat(e.match.params.id),{token:localStorage.getItem("token")}).then((function(e){i||c({load:!1,question:e.data})})).catch((function(e){})),function(){i=!0}}),[]);var i=!1;return t?r.a.createElement("div",{className:"container text-center mt-5"},l.load?r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,l.question.name),r.a.createElement("p",null,l.question.question),l.question.answer?r.a.createElement("p",null,l.question.answer):r.a.createElement("p",null,"Please Upgrade to see the answer"))):r.a.createElement(m.a,{to:"/login"})};var O=function(){var e=r.a.useState(!!localStorage.getItem("token")),a=Object(s.a)(e,2),t=a[0],n=a[1];return r.a.createElement(d.Provider,{value:{loggedin:t,setloggedin:n}},r.a.createElement(c.a,null,r.a.createElement(p,null),r.a.createElement(m.b,{path:"/",exact:!0,component:E}),r.a.createElement(m.b,{path:"/profile",component:g}),r.a.createElement(m.b,{path:"/login",component:w}),r.a.createElement(m.b,{path:"/register",component:k}),r.a.createElement(m.b,{path:"/questions",component:x}),r.a.createElement(m.b,{path:"/question/:id",component:q}),r.a.createElement(m.b,{path:"/logout",component:y})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.26370512.chunk.js.map