(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l="data:image/svg+xml,%3csvg%20width='40'%20height='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='%2300001A'%20fill-rule='evenodd'%3e%3cpath%20d='M0%200h40v3H0zM0%207h40v3H0zM0%2014h40v3H0z'/%3e%3cpath%20d='M0%200h40v3H0z'/%3e%3c/g%3e%3c/svg%3e",d="data:image/svg+xml,%3csvg%20width='32'%20height='31'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='%2300001A'%20fill-rule='evenodd'%3e%3cpath%20d='m2.919.297%2028.284%2028.284-2.122%202.122L.797%202.419z'/%3e%3cpath%20d='M.797%2028.581%2029.081.297l2.122%202.122L2.919%2030.703z'/%3e%3c/g%3e%3c/svg%3e",c=document.getElementById("button-menu"),n=document.getElementById("menu"),u=()=>{n.classList.contains("show")?(n.classList.remove("show"),c.src=l,document.body.classList.remove("open")):(n.classList.add("show"),c.src=d,document.body.classList.add("open"))};c.addEventListener("click",u);