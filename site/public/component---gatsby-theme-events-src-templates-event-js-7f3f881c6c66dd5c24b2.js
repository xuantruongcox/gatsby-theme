"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[443],{6902:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(7378),r=n(9032);const l=function(e,t){let{day:n=!0,month:a=!0,year:r=!0}=void 0===t?{}:t;return e.toLocaleDateString("en-US",{day:n?"numeric":void 0,month:a?"long":void 0,year:r?"numeric":void 0})},c=e=>{let{startDate:t,endDate:n}=e;const r=new Date(t),c=new Date(n),i=r.toDateString()===c.toDateString();return a.createElement(a.Fragment,null,a.createElement("time",{dateTime:r.toISOString()},l(r,{year:i})),!i&&a.createElement(a.Fragment,null,"-",a.createElement("time",{dateTime:c.toISOString()},l(c,{month:r.getMonth()!==c.getMonth()}))))};var i=e=>{let{name:t,location:n,url:r,startDate:l,endDate:i}=e;return a.createElement("div",null,a.createElement("h2",null,t," (",n,")"),a.createElement("p",null,a.createElement(c,{startDate:l,endDate:i})),a.createElement("p",null,"Website: ",a.createElement("a",{href:r},r)))};var m=e=>{let{data:{event:t}}=e;return a.createElement(r.Z,null,a.createElement(i,t))}}}]);
//# sourceMappingURL=component---gatsby-theme-events-src-templates-event-js-7f3f881c6c66dd5c24b2.js.map