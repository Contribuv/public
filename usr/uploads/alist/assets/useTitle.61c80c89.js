import{J as c,an as u,u as f,a_ as r,D as l}from"./index.990867b1.js";import{u as o}from"./useT.e3a47100.js";let m=0;const s={},i=t=>{const e=(m++).toString(),a=[];for(const n in s)s[n]&&(a.push(n),s[n]=!1);s[e]=!0,typeof t=="function"?c(()=>{s[e]&&(document.title=t())}):document.title=t,u(()=>{delete s[e];for(const n in a)s[n]=!0})},g=()=>{const t=o(),{pathname:e}=f();i(()=>`${e()==="/"?t("manage.sidemenu.home"):r(e())} | ${l("site_title")}`)},h=t=>{const e=o();i(()=>`${e(t)} | ${e("manage.title")}`)};export{i as a,h as b,g as u};
