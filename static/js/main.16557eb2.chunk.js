(this["webpackJsonptoyshop-react"]=this["webpackJsonptoyshop-react"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(17),a=c.n(i),r=(c(24),c(25),c(4)),j=c(2),o=c(10),l=(c(26),c(0));var d=function(){var e=Object(j.g)();function t(t){return t===e.pathname}var c=Object(n.useState)(!0),s=Object(r.a)(c,2),i=s[0],a=s[1],d=function(){window.scrollY>50?a(!1):a(!0)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",d),function(){window.removeEventListener("scroll",d)}}),[]),Object(l.jsxs)("nav",{className:i?"bg-transparent":"bg-regular",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsxs)("i",{children:[Object(l.jsx)("span",{className:"highlighted",children:"toy"}),"Shop"]})}),Object(l.jsxs)("ul",{className:"nav-links",children:[Object(l.jsx)(o.b,{to:"/",className:"link-name",children:Object(l.jsx)("li",{className:t("/")?"active":"in-active",children:"Home"})}),Object(l.jsx)(o.b,{to:"/popular",className:"link-name",children:Object(l.jsx)("li",{className:t("/popular")?"active":"in-active",children:"Popular"})}),Object(l.jsx)(o.b,{to:"/upcoming",className:"link-name",children:Object(l.jsx)("li",{className:t("/upcoming")?"active":"in-active",children:"Upcoming"})}),Object(l.jsx)(o.b,{to:"/cart",className:"link-name",children:Object(l.jsx)("li",{className:t("/cart")?"active":"in-active",children:"Cart"})})]})]})},b=c(8),h=c.n(b),u=c(9);c(34);var O=function(e){var t=Object(j.f)();return Object(l.jsx)("div",{className:"card-container",children:e.list.map((function(e){return Object(l.jsxs)("div",{className:"card",onClick:function(){return c=e.itemId,void t.push("/product/".concat(c));var c},children:[Object(l.jsxs)("div",{className:"card-header",children:[Object(l.jsxs)("div",{className:"rating-container",children:[Object(l.jsx)("div",{className:"star",children:"\xa0"}),Object(l.jsx)("div",{className:"rating",children:e.item.ratings.avgStars})]}),Object(l.jsx)("div",{className:"ribbon-container",children:e.store?e.store.isNew?Object(l.jsx)("div",{children:"\xa0"}):Object(l.jsx)("div",{className:"ribbon",children:Object(l.jsx)("span",{children:"New"})}):Object(l.jsx)("div",{children:"\xa0"})})]}),Object(l.jsx)("img",{src:e.item.images.icon,alt:"Avatar",className:"card-img"}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsx)("h3",{children:Object(l.jsx)("b",{children:e.item.name})}),e.store?Object(l.jsxs)("p",{children:["$ ",e.store.cost," (USD)"]}):Object(l.jsxs)("p",{children:["$ ",e.item.cost," (USD)"]})]})]},e.itemId)}))})};function m(e,t){fetch(e).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return console.log(e)}))}c(35);var x=function(){return Object(l.jsx)("div",{className:"loader-container flex-container",children:Object(l.jsx)("div",{className:"loader"})})};var p=function(){Object(n.useEffect)((function(){d()}),[]);var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!1),a=Object(r.a)(i,2),j=a[0],o=a[1],d=function(){var e=Object(u.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(!0),m("https://fortnite-api.theapinetwork.com/store/get",(function(e){s(e.data.slice(0,50)),o(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{children:j?Object(l.jsx)(x,{}):c.length?Object(l.jsx)(O,{list:c}):Object(l.jsx)("h2",{children:"No products to show"})})};var f=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("h1",{children:["This page is under ",Object(l.jsx)("span",{style:{color:"yellow",fontSize:"3rem"},children:"construction!"})]})})};var v=function(){Object(n.useEffect)((function(){d()}),[]);var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!1),a=Object(r.a)(i,2),j=a[0],o=a[1],d=function(){var e=Object(u.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(!0),m("https://fortnite-api.theapinetwork.com/items/list",(function(e){s(e.data.slice(0,50)),o(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"main-container",children:j?Object(l.jsx)(x,{}):c.length?Object(l.jsx)(O,{list:c}):Object(l.jsx)("h2",{children:"No products to show"})})};var N=function(){Object(n.useEffect)((function(){d()}),[]);var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!1),a=Object(r.a)(i,2),j=a[0],o=a[1],d=function(){var e=Object(u.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(!0),m("https://fortnite-api.theapinetwork.com/upcoming/get",(function(e){s(e.data.slice(0,50)),o(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"main-container",children:j?Object(l.jsx)(x,{}):c.length?Object(l.jsx)(O,{list:c}):Object(l.jsx)("h2",{children:"No products to show"})})};c(36);var g=function(e){Object(n.useEffect)((function(){b()}),[]);var t=Object(n.useState)({}),c=Object(r.a)(t,2),s=c[0],i=c[1],a=Object(n.useState)(!1),j=Object(r.a)(a,2),o=j[0],d=j[1],b=function(){var t=Object(u.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d(!0),m("https://fortnite-api.theapinetwork.com/item/get?id=".concat(e.match.params.id),(function(e){i(e.data),d(!1)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(l.jsx)("div",{children:o?Object(l.jsx)(x,{}):s.item?Object(l.jsxs)("div",{className:"product-container flex-container",children:[Object(l.jsxs)("div",{className:"product-container-item",children:[Object(l.jsx)("h1",{className:"product-name",children:s.item.name}),Object(l.jsx)("img",{src:s.item.images.icon,alt:"Avatar",className:"product-img"}),Object(l.jsx)("h3",{children:Object(l.jsxs)("i",{children:['"',s.item.description,'..."']})})]}),Object(l.jsxs)("div",{className:"product-container-item",children:[Object(l.jsx)("div",{className:"flex-container",children:Object(l.jsxs)("table",{className:"product-info-table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Rating"}),Object(l.jsx)("th",{children:"Point"}),Object(l.jsx)("th",{children:"Vote"})]})}),Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:s.item.ratings.avgStars}),Object(l.jsx)("td",{children:s.item.ratings.totalPoints}),Object(l.jsx)("td",{children:s.item.ratings.numberVotes})]})})]})}),Object(l.jsxs)("div",{className:"tag-container flex-container",children:[Object(l.jsx)("div",{className:"tag",children:s.item.type}),Object(l.jsx)("div",{className:"tag",children:s.item.rarity}),s.itemSet.setName?Object(l.jsx)("div",{className:"tag",children:s.itemSet.setName}):Object(l.jsx)("div",{children:"\xa0"})]}),Object(l.jsx)("div",{className:"bottom-container flex-container",children:Object(l.jsxs)("div",{className:"bottom-wrapper flex-container",children:[Object(l.jsxs)("div",{className:"product-price",children:["$ ",s.item.cost," (USD)"]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"action-button",children:"ADD TO CART"})})]})})]})]}):Object(l.jsx)("div",{children:"No product to show"})})};var w=function(){return Object(l.jsx)(o.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/",exact:!0,component:p}),Object(l.jsx)(j.a,{path:"/cart",component:f}),Object(l.jsx)(j.a,{path:"/popular",component:v}),Object(l.jsx)(j.a,{path:"/upcoming",component:N}),Object(l.jsx)(j.a,{path:"/product/:id",component:g})]})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root")),S()}},[[37,1,2]]]);
//# sourceMappingURL=main.16557eb2.chunk.js.map