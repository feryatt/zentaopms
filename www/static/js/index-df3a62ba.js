var E=(u,a,s)=>new Promise((c,n)=>{var _=t=>{try{r(s.next(t))}catch(e){n(e)}},f=t=>{try{r(s.throw(t))}catch(e){n(e)}},r=t=>t.done?c(t.value):Promise.resolve(t.value).then(_,f);r((s=s.apply(u,a)).next())});import{M as F}from"./index-06dad4a8.js";import{_ as L,o as A}from"./index-c1887d5c.js";import{u as I,E as v}from"./chartEditStore-cb8a53b5.js";import{u as K,a as b}from"./chartLayoutStore-18c265de.js";import{j as O,d as R,v as M,a5 as N,R as H,am as V,r as D,o as h,m as g,z as l,F as $,A as z,e as o,f as d,w as m,p as S,t as B,ad as U,ck as j,c2 as G}from"./index.js";import{a as J,b as Y,l as q}from"./plugin-03c45b81.js";import{c as p}from"./index-ca74e0d8.js";import{f as k,b as w,m as P}from"./index-6c97350f.js";import"./icon-874ce556.js";import"./index-c1a6b718.js";import"./index-ef83a735.js";import"./index-9c7a0a65.js";import"./tables_list-16bd57ab.js";/* empty css                                                                */import"./SettingItemBox-172ee723.js";import"./CollapseItem-e85aa772.js";import"./useTargetData.hook-30f0f522.js";const Q={class:"go-content-charts-item-animation-patch"},W=["onDragstart","onDblclick"],X={class:"list-header"},Z={class:"list-center go-flex-center go-transition"},tt={class:"list-bottom"},et=R({__name:"index",props:{menuOptions:{type:Array,default:()=>[]}},setup(u){const a=I(),s=K(),c=M(),n=N(()=>s.getChartType),_=(t,e)=>{p(e.chartKey,k(e)),p(e.conKey,w(e)),t.dataTransfer.setData(j.DRAG_KEY,G(A(e,["image"]))),a.setEditCanvas(v.IS_CREATE,!0)},f=()=>{a.setEditCanvas(v.IS_CREATE,!1)},r=t=>E(this,null,function*(){try{J(),p(t.chartKey,k(t)),p(t.conKey,w(t));let e=yield P(t);a.addComponentList(e,!1,!0),a.setTargetSelectChart(e.id),Y()}catch(e){q(),window.$message.warning("\u56FE\u8868\u6B63\u5728\u7814\u53D1\u4E2D, \u656C\u8BF7\u671F\u5F85...")}});return H(()=>n.value,t=>{t===b.DOUBLE&&V(()=>{c.value.classList.add("miniAnimation")})}),(t,e)=>{const C=D("n-ellipsis"),x=D("n-text");return h(),g("div",Q,[l("div",{ref_key:"contentChartsItemBoxRef",ref:c,class:U(["go-content-charts-item-box",[d(n)===d(b).DOUBLE?"double":"single"]])},[(h(!0),g($,null,z(u.menuOptions,(i,T)=>(h(),g("div",{class:"item-box",key:T,draggable:"",onDragstart:y=>_(y,i),onDragend:f,onDblclick:y=>r(i)},[l("div",X,[o(d(F),{class:"list-header-control-btn",mini:!0,disabled:!0}),o(x,{class:"list-header-text",depth:"3"},{default:m(()=>[o(C,null,{default:m(()=>[S(B(i.title),1)]),_:2},1024)]),_:2},1024)]),l("div",Z,[o(d(L),{class:"list-img",chartConfig:i},null,8,["chartConfig"])]),l("div",tt,[o(x,{class:"list-bottom-text",depth:"3"},{default:m(()=>[o(C,{style:{"max-width":"90%"}},{default:m(()=>[S(B(i.title),1)]),_:2},1024)]),_:2},1024)])],40,W))),128))],2)])}}});var yt=O(et,[["__scopeId","data-v-3bb6960e"]]);export{yt as default};