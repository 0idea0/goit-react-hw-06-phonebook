(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{53:function(e,t,n){e.exports={formBtn:"ContactForm_formBtn__1V2bg"}},55:function(e,t,n){e.exports={ContactList:"ContactList_ContactList__2bP7O"}},56:function(e,t,n){e.exports={ContainerWrapper:"Container_ContainerWrapper__1DxN3"}},74:function(e,t,n){},75:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),i=(n(74),n(75),n(12)),l=n(36),b=n.n(l),u=n(27),s=n(23),d=Object(s.b)("contacts/add",(function(e,t){return{payload:{id:b.a.generate(),name:e,number:t}}})),j=Object(s.b)("phonebook/delete"),h=Object(s.b)("phonebook/changeFilter"),m=n(53),O=n.n(m),p=n(124),f=n(2),x=function(e){var t=e.title,n=e.onChange,a=e.value,r=e.nameInputId;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("label",{htmlFor:r,children:Object(f.jsx)(p.a,{id:"outlined-basic",label:"Name",variant:"outlined",value:a,onChange:n,type:"text",name:t,placeholder:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})})})},C=function(e){var t=e.title,n=e.onChange,a=e.value;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("label",{htmlFor:"",children:Object(f.jsx)(p.a,{id:"outlined-basic",label:"Number",variant:"outlined",value:a,onChange:n,type:"text",name:t,placeholder:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})})})},v=n(125);var g=Object(u.b)((function(e){return e.contacts.phonebookContacts}),(function(e){return{onSubmit:function(t,n){return e(d(t,n))}}}))((function(e){e.phonebookContacts;var t=e.onSubmit,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),s=u[0],d=u[1],j=b.a.generate(),h=b.a.generate(),m=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":d(a);break;default:return}};return Object(f.jsxs)("form",{className:O.a.ContactFormWrapper,onSubmit:function(e){e.preventDefault(),t(c,s),o(""),d("")},children:[Object(f.jsx)(x,{nameInputId:j,title:"name",value:c,onChange:m,className:"FormName"}),Object(f.jsx)(C,{numberInputId:h,title:"number",value:s,onChange:m,className:"FormNumber"}),Object(f.jsx)("p",{children:Object(f.jsx)(v.a,{variant:"outlined",type:"submit",children:"Send"})})]})})),k=n(55),F=n.n(k),A=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},y=Object(u.b)((function(e){var t=e.contacts,n=t.phonebookContacts,a=t.phonebookFilter;return{contacts:A(n,a)}}),(function(e){return{deleteContact:function(t){return e(j(t))}}}))((function(e){var t=e.contacts,n=e.deleteContact;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{className:F.a.ContactList,children:t&&t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(f.jsxs)("li",{children:[a," ",r,"\u2002",Object(f.jsx)(v.a,{variant:"outlined",type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})})})),z=n(56),N=n.n(z),Z=function(e){var t=e.children;return Object(f.jsx)("div",{className:N.a.ContainerWrapper,children:t})},_=Object(u.b)((function(e){return{filter:e.contacts.filter}}),(function(e){return{changeFilter:function(t){return e(h(t))}}}))((function(e){var t=e.filter,n=e.changeFilter;return Object(f.jsx)("form",{action:"",children:Object(f.jsx)("label",{htmlFor:"",children:Object(f.jsx)(p.a,{label:"Find contacts by name...",variant:"standard",placeholder:"Find contacts by name...",onChange:function(e){return n(e.currentTarget.value)},type:"text",name:"name",id:"standard-basic",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."})})})}));var w,I=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(Z,{className:"App",children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(g,{}),Object(f.jsx)("h2",{children:"Contacts:"}),Object(f.jsx)(_,{}),Object(f.jsx)(y,{})]})})},S=n(15),B=n(57),L=n.n(B),J=n(25),M=n(58),W=n.n(M),D=n(4),$=n(18),q=Object(s.c)([],(w={},Object(D.a)(w,d,(function(e,t){var n=t.payload;return[].concat(Object(S.a)(e),[n])})),Object(D.a)(w,j,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),w)),P=Object(s.c)("",Object(D.a)({},h,(function(e,t){return t.payload}))),T=Object($.b)({phonebookContacts:q,phonebookFilter:P}),E={key:"contacts",storage:W.a,blacklist:["filter"]},V=[].concat(Object(S.a)(Object(s.d)({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}})),[L.a]),G=Object(s.a)({reducer:{contacts:Object(J.g)(E,T)},middleware:V,devTools:!1}),H={store:G,persistor:Object(J.h)(G)};o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(u.a,{store:H.store,children:Object(f.jsx)(I,{})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.239b8c7f.chunk.js.map