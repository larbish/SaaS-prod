import{bR as d,bS as u,d as l,V as b,r as _,c as m,N as y,ab as f,U as C}from"./79p3Srze.js";function v(t={}){const{copy:c,isSupported:i}=d(),o=u();function r(e,n={},a={}){i&&c(e).then(()=>{!n.title&&!n.description||o.add({...n,...t})},function(p){o.add({...a,description:a.description||p.message,...t})})}return{copy:r}}const k=l({__name:"ProseCodeButton",props:{code:{type:String,required:!0}},setup(t){const c=t,i={icon:{copy:"i-heroicons-clipboard-document",copied:"i-heroicons-clipboard-document-check"}},{ui:o}=b("content.prose.code.button",void 0,i,void 0,!0),r=v({timeout:2e3}),e=_(o.value.icon.copy);function n(){r.copy(c.code,{title:"Copied to clipboard!"}),e.value=o.value.icon.copied,setTimeout(()=>{e.value=o.value.icon.copy},2e3)}return(a,p)=>{const s=C;return m(),y(s,{icon:f(e),color:"gray",variant:"link",size:"xs","aria-label":"Copy code to clipboard",tabindex:"-1",onClick:n},null,8,["icon"])}}});export{k as _};
