import{u as $,_ as U}from"./CXG0rsJA.js";import{d as b,z as N,a7 as A,c as h,N as x,a1 as B,w as o,f as p,h as s,k as v,t as w,ab as t,P as S,U as V,V as z,W as y,e as C,n as f,O as g,g as P,aA as j,aB as O,r as D,G as I,am as K,aC as T,aD as E,ag as G,ap as L}from"./79p3Srze.js";const R={class:"hidden lg:flex items-center gap-0.5 ml-auto -my-1 flex-shrink-0"},W=b({__name:"ContentSearchButton",props:{label:{type:String,default:"Search..."}},setup(n){const i=N(),{toggleContentSearch:c}=A(),{metaSymbol:e}=$();return(l,a)=>{var d,_,m,k;const r=U,u=V;return h(),x(u,S({icon:t(i).ui.icons.search,label:n.label,truncate:""},n.label?(_=(d=l.$ui)==null?void 0:d.button)==null?void 0:_.input:(k=(m=l.$ui)==null?void 0:m.button)==null?void 0:k.secondary,{"aria-label":"Search",class:[!!n.label&&"flex-1"],onClick:t(c)}),B({_:2},[n.label?{name:"trailing",fn:o(()=>[p("div",R,[s(r,null,{default:o(()=>[v(w(t(e)),1)]),_:1}),s(r,null,{default:o(()=>[v(" K ")]),_:1})])]),key:"0"}:void 0]),1040,["icon","label","class","onClick"])}}}),q={class:"relative"},F=b({inheritAttrs:!1,__name:"Aside",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(n){const i={wrapper:"hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-8 lg:px-4 lg:-mx-4",top:{wrapper:"sticky -top-8 -mt-8 pointer-events-none z-[1]",header:"h-8 bg-background -mx-4 px-4",body:"bg-background relative pointer-events-auto flex -mx-4 px-4",footer:"h-8 bg-gradient-to-b from-background -mx-4 px-4"}},c=n,{ui:e,attrs:l}=z("aside",y(c,"ui"),i,y(c,"class"),!0);return(a,r)=>{const u=j;return h(),C("aside",S({class:t(e).wrapper},t(l)),[p("div",q,[a.$slots.top?(h(),C("div",{key:0,class:f(t(e).top.wrapper)},[p("div",{class:f(t(e).top.header)},null,2),p("div",{class:f(t(e).top.body)},[g(a.$slots,"top")],2),p("div",{class:f(t(e).top.footer)},null,2)],2)):P("",!0),g(a.$slots,"links",{},()=>[s(u,{links:n.links},null,8,["links"])]),g(a.$slots,"default"),g(a.$slots,"bottom")])],16)}}}),M=b({__name:"docs",setup(n){const i=O("navigation",D([])),c=I(()=>{var e;return((e=i.value.find(l=>l._path==="/docs"))==null?void 0:e.children)??[]});return(e,l)=>{const a=W,r=E,u=F,d=G,_=L,m=K;return h(),x(m,null,{default:o(()=>[s(_,null,{left:o(()=>[s(u,null,{top:o(()=>[s(a,{class:"rounded-md",size:"sm"})]),default:o(()=>[s(r,{links:("mapContentNavigation"in e?e.mapContentNavigation:t(T))(t(c))},null,8,["links"])]),_:1})]),default:o(()=>[s(d)]),_:1})]),_:1})}}});export{M as default};
