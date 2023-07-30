(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(5),s=(n(18),n(19),n(2)),r=(n(20),n(0)),i=function(){return Object(r.jsx)("h1",{className:"title",children:"Home Page"})},j=n(4),l=n(1);function o(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var b=n(6),d=n.n(b),h=(n(22),n(23),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})}),O=function(e){var t=e.person;return Object(r.jsx)(a.b,{to:"/people/".concat(t.slug),className:d()({"has-text-danger":"f"===t.sex}),children:t.name})},u=function(e){var t=e.people,n=e.isLoading,c=e.isError,a=Object(s.h)().selectedSlug,i=function(e,n){return t&&"f"===n?t.find((function(t){return t.name===e.motherName})):t&&"m"===n?t.find((function(t){return t.name===e.fatherName})):null};return Object(r.jsx)("div",{className:"block",children:Object(r.jsxs)("div",{className:"box table-container has-min-height",children:[n&&Object(r.jsx)(h,{}),c?Object(r.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}):Object(r.jsxs)(r.Fragment,{children:[!n&&0===(null===t||void 0===t?void 0:t.length)&&Object(r.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!n&&!(null===t||void 0===t||!t.length)&&Object(r.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Sex"}),Object(r.jsx)("th",{children:"Born"}),Object(r.jsx)("th",{children:"Died"}),Object(r.jsx)("th",{children:"Mother"}),Object(r.jsx)("th",{children:"Father"})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){var t=i(e,"f"),n=i(e,"m"),c=e.sex,s=e.born,j=e.died,l=e.slug,o=e.motherName,b=e.fatherName;return Object(r.jsxs)("tr",{"data-cy":"person",className:d()({"has-background-warning":l===a}),children:[Object(r.jsx)("td",{children:Object(r.jsx)(O,{person:e})}),Object(r.jsx)("td",{children:c}),Object(r.jsx)("td",{children:s}),Object(r.jsx)("td",{children:j}),t?Object(r.jsx)("td",{children:Object(r.jsx)(O,{person:t})}):Object(r.jsx)("td",{children:o||"-"}),n?Object(r.jsx)("td",{children:Object(r.jsx)(O,{person:n})}):Object(r.jsx)("td",{children:b||"-"})]},l)}))})]})]})]})})},x=function(){var e=Object(l.useState)(null),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(l.useState)(!1),s=Object(j.a)(a,2),i=s[0],b=s[1],d=Object(l.useState)(!1),h=Object(j.a)(d,2),O=h[0],x=h[1];return Object(l.useEffect)((function(){b(!0),o().then(c).catch((function(){x(!0)})).finally((function(){b(!1)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"People Page"}),Object(r.jsx)(u,{people:n,isLoading:i,isError:O})]})},m=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})},p=function(e){return e.Home="Home",e.PEOPLE="People",e}({}),f=function(e){var t=e.isActive;return d()("navbar-item",{"has-background-grey-lighter":t})},g=function(e){return{color:e.isActive?"red":""}},v=function(e){var t=e.page;return Object(r.jsx)(a.c,{to:t===p.Home?"/":"/".concat(t.toLowerCase()),className:f,style:g,children:t})},N=function(){return Object(r.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(v,{page:p.Home}),Object(r.jsx)(v,{page:p.PEOPLE})]})})})},y=function(){return Object(r.jsxs)("div",{"data-cy":"app",children:[Object(r.jsx)(N,{}),Object(r.jsx)("main",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(s.d,{children:[Object(r.jsx)(s.b,{path:"/",element:Object(r.jsx)(i,{})}),Object(r.jsx)(s.b,{path:"home",element:Object(r.jsx)(s.a,{to:"/",replace:!0})}),Object(r.jsxs)(s.b,{path:"people",children:[Object(r.jsx)(s.b,{index:!0,element:Object(r.jsx)(x,{})}),Object(r.jsx)(s.b,{path:":selectedSlug",element:Object(r.jsx)(x,{})})]}),Object(r.jsx)(s.b,{path:"*",element:Object(r.jsx)(m,{})})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(r.jsx)(a.a,{children:Object(r.jsx)(y,{})}))}},[[24,1,2]]]);
//# sourceMappingURL=main.c1f9ab4a.chunk.js.map