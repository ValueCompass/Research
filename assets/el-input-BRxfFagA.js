import{am as Ue,C as d,L as ke,r as N,ad as Z,x as G,M as Ye,N as ee,o as v,c as x,P as O,ac as J,f as t,S as se,a0 as Xe,W as Qe,h as F,y as Ze,O as Ge,k as m,F as le,n as g,b as $,j as C,w as A,Q as X,d as Je,X as qe,$ as et,t as Q,I as tt,R as Ie}from"./index-DGqUrpBU.js";import{G as Fe,at,K as ot,H as $e,N as q,I as re,Y as nt,Q as st,_ as Ne,T as Ve,P as Ce,V as lt,al as Ee,O as rt,W as ie,$ as it,a3 as ut,a2 as ct,Z as dt,aj as pt,aI as ft,aJ as vt,ay as mt,R as ht,a0 as ze,a4 as gt,ag as yt}from"./common-CTQpywCP.js";const bt=()=>Fe&&/firefox/i.test(window.navigator.userAgent),Wt=(o="")=>o.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),Ut=o=>Ue(o),xt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),wt=o=>o,St=["class","style"],It=/^on[A-Z]/,Ct=(o={})=>{const{excludeListeners:p=!1,excludeKeys:u}=o,a=d(()=>((u==null?void 0:u.value)||[]).concat(St)),n=ke();return n?d(()=>{var i;return at(Object.entries((i=n.proxy)==null?void 0:i.$attrs).filter(([c])=>!a.value.includes(c)&&!(p&&It.test(c))))}):d(()=>({}))};function Et(o){const p=N();function u(){if(o.value==null)return;const{selectionStart:n,selectionEnd:i,value:c}=o.value;if(n==null||i==null)return;const y=c.slice(0,Math.max(0,n)),f=c.slice(Math.max(0,i));p.value={selectionStart:n,selectionEnd:i,value:c,beforeTxt:y,afterTxt:f}}function a(){if(o.value==null||p.value==null)return;const{value:n}=o.value,{beforeTxt:i,afterTxt:c,selectionStart:y}=p.value;if(i==null||c==null||y==null)return;let f=n.length;if(n.endsWith(c))f=n.length-c.length;else if(n.startsWith(i))f=i.length;else{const w=i[y-1],S=n.indexOf(w,y-1);S!==-1&&(f=S+1)}o.value.setSelectionRange(f,f)}return[u,a]}function zt(o,{afterFocus:p,beforeBlur:u,afterBlur:a}={}){const n=ke(),{emit:i}=n,c=Z(),y=N(!1),f=r=>{y.value||(y.value=!0,i("focus",r),p==null||p())},w=r=>{var V;Ye(u)&&u(r)||r.relatedTarget&&((V=c.value)!=null&&V.contains(r.relatedTarget))||(y.value=!1,i("blur",r),a==null||a())},S=()=>{var r;(r=o.value)==null||r.focus()};return G(c,r=>{r&&r.setAttribute("tabindex","-1")}),ot(c,"click",S),{wrapperRef:c,isFocused:y,handleFocus:f,handleBlur:w}}const Pt=$e({size:{type:q([Number,String])},color:{type:String}}),kt=ee({name:"ElIcon",inheritAttrs:!1}),Ft=ee({...kt,props:Pt,setup(o){const p=o,u=re("icon"),a=d(()=>{const{size:n,color:i}=p;return!n&&!i?{}:{fontSize:nt(n)?void 0:st(n),"--color":i}});return(n,i)=>(v(),x("i",J({class:t(u).b(),style:t(a)},n.$attrs),[O(n.$slots,"default")],16))}});var $t=Ne(Ft,[["__file","icon.vue"]]);const M=Ve($t);let b;const Nt=`
  height:0 !important;
  visibility:hidden !important;
  ${bt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Vt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Tt(o){const p=window.getComputedStyle(o),u=p.getPropertyValue("box-sizing"),a=Number.parseFloat(p.getPropertyValue("padding-bottom"))+Number.parseFloat(p.getPropertyValue("padding-top")),n=Number.parseFloat(p.getPropertyValue("border-bottom-width"))+Number.parseFloat(p.getPropertyValue("border-top-width"));return{contextStyle:Vt.map(c=>`${c}:${p.getPropertyValue(c)}`).join(";"),paddingSize:a,borderSize:n,boxSizing:u}}function Pe(o,p=1,u){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:n,borderSize:i,boxSizing:c,contextStyle:y}=Tt(o);b.setAttribute("style",`${y};${Nt}`),b.value=o.value||o.placeholder||"";let f=b.scrollHeight;const w={};c==="border-box"?f=f+i:c==="content-box"&&(f=f-n),b.value="";const S=b.scrollHeight-n;if(Ce(p)){let r=S*p;c==="border-box"&&(r=r+n+i),f=Math.max(r,f),w.minHeight=`${r}px`}if(Ce(u)){let r=S*u;c==="border-box"&&(r=r+n+i),f=Math.min(r,f)}return w.height=`${f}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,w}const Rt=$e({id:{type:String,default:void 0},size:lt,disabled:Boolean,modelValue:{type:q([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:q([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,clearable:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:Ee},prefixIcon:{type:Ee},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:q([Object,Array,String]),default:()=>wt({})},autofocus:Boolean,rows:{type:Number,default:2},...rt(["ariaLabel"])}),Bt={[ie]:o=>se(o),input:o=>se(o),change:o=>se(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Lt=["role"],At=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Mt=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus","rows"],Ot=ee({name:"ElInput",inheritAttrs:!1}),Ht=ee({...Ot,props:Rt,emits:Bt,setup(o,{expose:p,emit:u}){const a=o,n=Xe(),i=Qe(),c=d(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=n["aria-haspopup"],e["aria-owns"]=n["aria-owns"],e["aria-expanded"]=n["aria-expanded"]),e}),y=d(()=>[a.type==="textarea"?ce.b():l.b(),l.m(ue.value),l.is("disabled",z.value),l.is("exceed",Le.value),{[l.b("group")]:i.prepend||i.append,[l.m("prefix")]:i.prefix||a.prefixIcon,[l.m("suffix")]:i.suffix||a.suffixIcon||a.clearable||a.showPassword,[l.bm("suffix","password-clear")]:U.value&&ae.value,[l.b("hidden")]:a.type==="hidden"},n.class]),f=d(()=>[l.e("wrapper"),l.is("focus",j.value)]),w=Ct({excludeKeys:d(()=>Object.keys(c.value))}),{form:S,formItem:r}=it(),{inputId:V}=ut(a,{formItemContext:r}),ue=ct(),z=dt(),l=re("input"),ce=re("textarea"),H=Z(),I=Z(),te=N(!1),T=N(!1),D=N(!1),de=N(),K=Z(a.inputStyle),P=d(()=>H.value||I.value),{wrapperRef:Te,isFocused:j,handleFocus:_,handleBlur:W}=zt(P,{afterBlur(){var e;a.validateEvent&&((e=r==null?void 0:r.validate)==null||e.call(r,"blur").catch(s=>ze()))}}),pe=d(()=>{var e;return(e=S==null?void 0:S.statusIcon)!=null?e:!1}),R=d(()=>(r==null?void 0:r.validateState)||""),fe=d(()=>R.value&&pt[R.value]),Re=d(()=>D.value?ft:vt),Be=d(()=>[n.style]),ve=d(()=>[a.inputStyle,K.value,{resize:a.resize}]),E=d(()=>mt(a.modelValue)?"":String(a.modelValue)),U=d(()=>a.clearable&&!z.value&&!a.readonly&&!!E.value&&(j.value||te.value)),ae=d(()=>a.showPassword&&!z.value&&!a.readonly&&!!E.value&&(!!E.value||j.value)),k=d(()=>a.showWordLimit&&!!a.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),oe=d(()=>E.value.length),Le=d(()=>!!k.value&&oe.value>Number(a.maxlength)),Ae=d(()=>!!i.suffix||!!a.suffixIcon||U.value||a.showPassword||k.value||!!R.value&&pe.value),[Me,Oe]=Et(H);ht(I,e=>{if(He(),!k.value||a.resize!=="both")return;const s=e[0],{width:h}=s.contentRect;de.value={right:`calc(100% - ${h+15+6}px)`}});const B=()=>{const{type:e,autosize:s}=a;if(!(!Fe||e!=="textarea"||!I.value))if(s){const h=Ie(s)?s.minRows:void 0,Y=Ie(s)?s.maxRows:void 0,Se=Pe(I.value,h,Y);K.value={overflowY:"hidden",...Se},F(()=>{I.value.offsetHeight,K.value=Se})}else K.value={minHeight:Pe(I.value).minHeight}},He=(e=>{let s=!1;return()=>{var h;if(s||!a.autosize)return;((h=I.value)==null?void 0:h.offsetParent)===null||(e(),s=!0)}})(B),L=()=>{const e=P.value,s=a.formatter?a.formatter(E.value):E.value;!e||e.value===s||(e.value=s)},ne=async e=>{Me();let{value:s}=e.target;if(a.formatter&&(s=a.parser?a.parser(s):s),!T.value){if(s===E.value){L();return}u(ie,s),u("input",s),await F(),L(),Oe()}},me=e=>{u("change",e.target.value)},he=e=>{u("compositionstart",e),T.value=!0},ge=e=>{var s;u("compositionupdate",e);const h=(s=e.target)==null?void 0:s.value,Y=h[h.length-1]||"";T.value=!xt(Y)},ye=e=>{u("compositionend",e),T.value&&(T.value=!1,ne(e))},De=()=>{D.value=!D.value,be()},be=async()=>{var e;await F(),(e=P.value)==null||e.focus()},Ke=()=>{var e;return(e=P.value)==null?void 0:e.blur()},je=e=>{te.value=!1,u("mouseleave",e)},_e=e=>{te.value=!0,u("mouseenter",e)},xe=e=>{u("keydown",e)},We=()=>{var e;(e=P.value)==null||e.select()},we=()=>{u(ie,""),u("change",""),u("clear"),u("input","")};return G(()=>a.modelValue,()=>{var e;F(()=>B()),a.validateEvent&&((e=r==null?void 0:r.validate)==null||e.call(r,"change").catch(s=>ze()))}),G(E,()=>L()),G(()=>a.type,async()=>{await F(),L(),B()}),Ze(()=>{!a.formatter&&a.parser,L(),F(B)}),gt({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-input",ref:"https://element-plus.org/en-US/component/input.html"},d(()=>!!a.label)),p({input:H,textarea:I,ref:P,textareaStyle:ve,autosize:Ge(a,"autosize"),focus:be,blur:Ke,select:We,clear:we,resizeTextarea:B}),(e,s)=>(v(),x("div",J(t(c),{class:[t(y),{[t(l).bm("group","append")]:e.$slots.append,[t(l).bm("group","prepend")]:e.$slots.prepend}],style:t(Be),role:e.containerRole,onMouseenter:_e,onMouseleave:je}),[m(" input "),e.type!=="textarea"?(v(),x(le,{key:0},[m(" prepend slot "),e.$slots.prepend?(v(),x("div",{key:0,class:g(t(l).be("group","prepend"))},[O(e.$slots,"prepend")],2)):m("v-if",!0),$("div",{ref_key:"wrapperRef",ref:Te,class:g(t(f))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),x("span",{key:0,class:g(t(l).e("prefix"))},[$("span",{class:g(t(l).e("prefix-inner"))},[O(e.$slots,"prefix"),e.prefixIcon?(v(),C(t(M),{key:0,class:g(t(l).e("icon"))},{default:A(()=>[(v(),C(X(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),$("input",J({id:t(V),ref_key:"input",ref:H,class:t(l).e("inner")},t(w),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?D.value?"text":"password":e.type,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label||e.ariaLabel,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:he,onCompositionupdate:ge,onCompositionend:ye,onInput:ne,onFocus:s[0]||(s[0]=(...h)=>t(_)&&t(_)(...h)),onBlur:s[1]||(s[1]=(...h)=>t(W)&&t(W)(...h)),onChange:me,onKeydown:xe}),null,16,At),m(" suffix slot "),t(Ae)?(v(),x("span",{key:1,class:g(t(l).e("suffix"))},[$("span",{class:g(t(l).e("suffix-inner"))},[!t(U)||!t(ae)||!t(k)?(v(),x(le,{key:0},[O(e.$slots,"suffix"),e.suffixIcon?(v(),C(t(M),{key:0,class:g(t(l).e("icon"))},{default:A(()=>[(v(),C(X(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(U)?(v(),C(t(M),{key:1,class:g([t(l).e("icon"),t(l).e("clear")]),onMousedown:qe(t(et),["prevent"]),onClick:we},{default:A(()=>[Je(t(yt))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(ae)?(v(),C(t(M),{key:2,class:g([t(l).e("icon"),t(l).e("password")]),onClick:De},{default:A(()=>[(v(),C(X(t(Re))))]),_:1},8,["class"])):m("v-if",!0),t(k)?(v(),x("span",{key:3,class:g(t(l).e("count"))},[$("span",{class:g(t(l).e("count-inner"))},Q(t(oe))+" / "+Q(e.maxlength),3)],2)):m("v-if",!0),t(R)&&t(fe)&&t(pe)?(v(),C(t(M),{key:4,class:g([t(l).e("icon"),t(l).e("validateIcon"),t(l).is("loading",t(R)==="validating")])},{default:A(()=>[(v(),C(X(t(fe))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(v(),x("div",{key:1,class:g(t(l).be("group","append"))},[O(e.$slots,"append")],2)):m("v-if",!0)],64)):(v(),x(le,{key:1},[m(" textarea "),$("textarea",J({id:t(V),ref_key:"textarea",ref:I,class:[t(ce).e("inner"),t(l).is("focus",t(j))]},t(w),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ve),"aria-label":e.label||e.ariaLabel,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,rows:e.rows,onCompositionstart:he,onCompositionupdate:ge,onCompositionend:ye,onInput:ne,onFocus:s[2]||(s[2]=(...h)=>t(_)&&t(_)(...h)),onBlur:s[3]||(s[3]=(...h)=>t(W)&&t(W)(...h)),onChange:me,onKeydown:xe}),null,16,Mt),t(k)?(v(),x("span",{key:0,style:tt(de.value),class:g(t(l).e("count"))},Q(t(oe))+" / "+Q(e.maxlength),7)):m("v-if",!0)],64))],16,Lt))}});var Dt=Ne(Ht,[["__file","input.vue"]]);const Yt=Ve(Dt);export{M as E,Yt as a,Ut as c,Wt as e,xt as i,wt as m,zt as u};
