import{aS as n,S as s}from"./index.js";const g=()=>{if(window.chartData)return window.chartData;const r=document.location.hash.split("/"),a=r&&r[r.length-1],t=n(s.GO_CHART_STORAGE_LIST);if(!!t){for(let o=0;o<t.length;o++)if(a.toString()===t[o].id)return t[o]}};export{g};