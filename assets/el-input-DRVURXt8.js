import{B as d,L as Pe,r as V,H as q,s as G,R as We,I as ee,o as v,c as x,M as O,ac as J,u as t,N as se,a0 as Xe,O as Ye,g as k,x as Ze,S as qe,j as m,F as le,n as g,b as N,i as C,w as A,U as Y,d as Ge,X as Je,$ as Qe,t as Z,K as et,V as Ie}from"./index-Bhyf431A.js";import{W as ke,at as tt,X as at,b as Ne,d as Q,u as re,i as ot,Z as nt,_ as Ve,w as $e,j as Ce,a0 as st,al as Ee,Y as lt,U as ie,a3 as rt,a7 as it,a6 as ut,a2 as ct,aj as dt,aD as pt,aE as ft,ay as vt,a as mt,a4 as ze,a8 as ht,ag as gt}from"./base-DPKDEEer.js";const yt=()=>ke&&/firefox/i.test(window.navigator.userAgent),bt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),xt=o=>o,wt=["class","style"],St=/^on[A-Z]/,It=(o={})=>{const{excludeListeners:p=!1,excludeKeys:u}=o,a=d(()=>((u==null?void 0:u.value)||[]).concat(wt)),n=Pe();return n?d(()=>{var i;return tt(Object.entries((i=n.proxy)==null?void 0:i.$attrs).filter(([c])=>!a.value.includes(c)&&!(p&&St.test(c))))}):d(()=>({}))};function Ct(o){const p=V();function u(){if(o.value==null)return;const{selectionStart:n,selectionEnd:i,value:c}=o.value;if(n==null||i==null)return;const y=c.slice(0,Math.max(0,n)),f=c.slice(Math.max(0,i));p.value={selectionStart:n,selectionEnd:i,value:c,beforeTxt:y,afterTxt:f}}function a(){if(o.value==null||p.value==null)return;const{value:n}=o.value,{beforeTxt:i,afterTxt:c,selectionStart:y}=p.value;if(i==null||c==null||y==null)return;let f=n.length;if(n.endsWith(c))f=n.length-c.length;else if(n.startsWith(i))f=i.length;else{const w=i[y-1],S=n.indexOf(w,y-1);S!==-1&&(f=S+1)}o.value.setSelectionRange(f,f)}return[u,a]}function Et(o,{afterFocus:p,beforeBlur:u,afterBlur:a}={}){const n=Pe(),{emit:i}=n,c=q(),y=V(!1),f=r=>{y.value||(y.value=!0,i("focus",r),p==null||p())},w=r=>{var $;We(u)&&u(r)||r.relatedTarget&&(($=c.value)!=null&&$.contains(r.relatedTarget))||(y.value=!1,i("blur",r),a==null||a())},S=()=>{var r;(r=o.value)==null||r.focus()};return G(c,r=>{r&&r.setAttribute("tabindex","-1")}),at(c,"click",S),{wrapperRef:c,isFocused:y,handleFocus:f,handleBlur:w}}const zt=Ne({size:{type:Q([Number,String])},color:{type:String}}),Ft=ee({name:"ElIcon",inheritAttrs:!1}),Pt=ee({...Ft,props:zt,setup(o){const p=o,u=re("icon"),a=d(()=>{const{size:n,color:i}=p;return!n&&!i?{}:{fontSize:ot(n)?void 0:nt(n),"--color":i}});return(n,i)=>(v(),x("i",J({class:t(u).b(),style:t(a)},n.$attrs),[O(n.$slots,"default")],16))}});var kt=Ve(Pt,[["__file","icon.vue"]]);const M=$e(kt);let b;const Nt=`
  height:0 !important;
  visibility:hidden !important;
  ${yt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Vt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function $t(o){const p=window.getComputedStyle(o),u=p.getPropertyValue("box-sizing"),a=Number.parseFloat(p.getPropertyValue("padding-bottom"))+Number.parseFloat(p.getPropertyValue("padding-top")),n=Number.parseFloat(p.getPropertyValue("border-bottom-width"))+Number.parseFloat(p.getPropertyValue("border-top-width"));return{contextStyle:Vt.map(c=>`${c}:${p.getPropertyValue(c)}`).join(";"),paddingSize:a,borderSize:n,boxSizing:u}}function Fe(o,p=1,u){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:n,borderSize:i,boxSizing:c,contextStyle:y}=$t(o);b.setAttribute("style",`${y};${Nt}`),b.value=o.value||o.placeholder||"";let f=b.scrollHeight;const w={};c==="border-box"?f=f+i:c==="content-box"&&(f=f-n),b.value="";const S=b.scrollHeight-n;if(Ce(p)){let r=S*p;c==="border-box"&&(r=r+n+i),f=Math.max(r,f),w.minHeight=`${r}px`}if(Ce(u)){let r=S*u;c==="border-box"&&(r=r+n+i),f=Math.min(r,f)}return w.height=`${f}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,w}const Tt=Ne({id:{type:String,default:void 0},size:st,disabled:Boolean,modelValue:{type:Q([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:Q([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,clearable:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:Ee},prefixIcon:{type:Ee},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:Q([Object,Array,String]),default:()=>xt({})},autofocus:Boolean,rows:{type:Number,default:2},...lt(["ariaLabel"])}),Rt={[ie]:o=>se(o),input:o=>se(o),change:o=>se(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Bt=["role"],Lt=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],At=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus","rows"],Mt=ee({name:"ElInput",inheritAttrs:!1}),Ot=ee({...Mt,props:Tt,emits:Rt,setup(o,{expose:p,emit:u}){const a=o,n=Xe(),i=Ye(),c=d(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=n["aria-haspopup"],e["aria-owns"]=n["aria-owns"],e["aria-expanded"]=n["aria-expanded"]),e}),y=d(()=>[a.type==="textarea"?ce.b():l.b(),l.m(ue.value),l.is("disabled",z.value),l.is("exceed",Le.value),{[l.b("group")]:i.prepend||i.append,[l.m("prefix")]:i.prefix||a.prefixIcon,[l.m("suffix")]:i.suffix||a.suffixIcon||a.clearable||a.showPassword,[l.bm("suffix","password-clear")]:W.value&&ae.value,[l.b("hidden")]:a.type==="hidden"},n.class]),f=d(()=>[l.e("wrapper"),l.is("focus",j.value)]),w=It({excludeKeys:d(()=>Object.keys(c.value))}),{form:S,formItem:r}=rt(),{inputId:$}=it(a,{formItemContext:r}),ue=ut(),z=ct(),l=re("input"),ce=re("textarea"),H=q(),I=q(),te=V(!1),T=V(!1),D=V(!1),de=V(),K=q(a.inputStyle),F=d(()=>H.value||I.value),{wrapperRef:Te,isFocused:j,handleFocus:U,handleBlur:_}=Et(F,{afterBlur(){var e;a.validateEvent&&((e=r==null?void 0:r.validate)==null||e.call(r,"blur").catch(s=>ze()))}}),pe=d(()=>{var e;return(e=S==null?void 0:S.statusIcon)!=null?e:!1}),R=d(()=>(r==null?void 0:r.validateState)||""),fe=d(()=>R.value&&dt[R.value]),Re=d(()=>D.value?pt:ft),Be=d(()=>[n.style]),ve=d(()=>[a.inputStyle,K.value,{resize:a.resize}]),E=d(()=>vt(a.modelValue)?"":String(a.modelValue)),W=d(()=>a.clearable&&!z.value&&!a.readonly&&!!E.value&&(j.value||te.value)),ae=d(()=>a.showPassword&&!z.value&&!a.readonly&&!!E.value&&(!!E.value||j.value)),P=d(()=>a.showWordLimit&&!!a.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),oe=d(()=>E.value.length),Le=d(()=>!!P.value&&oe.value>Number(a.maxlength)),Ae=d(()=>!!i.suffix||!!a.suffixIcon||W.value||a.showPassword||P.value||!!R.value&&pe.value),[Me,Oe]=Ct(H);mt(I,e=>{if(He(),!P.value||a.resize!=="both")return;const s=e[0],{width:h}=s.contentRect;de.value={right:`calc(100% - ${h+15+6}px)`}});const B=()=>{const{type:e,autosize:s}=a;if(!(!ke||e!=="textarea"||!I.value))if(s){const h=Ie(s)?s.minRows:void 0,X=Ie(s)?s.maxRows:void 0,Se=Fe(I.value,h,X);K.value={overflowY:"hidden",...Se},k(()=>{I.value.offsetHeight,K.value=Se})}else K.value={minHeight:Fe(I.value).minHeight}},He=(e=>{let s=!1;return()=>{var h;if(s||!a.autosize)return;((h=I.value)==null?void 0:h.offsetParent)===null||(e(),s=!0)}})(B),L=()=>{const e=F.value,s=a.formatter?a.formatter(E.value):E.value;!e||e.value===s||(e.value=s)},ne=async e=>{Me();let{value:s}=e.target;if(a.formatter&&(s=a.parser?a.parser(s):s),!T.value){if(s===E.value){L();return}u(ie,s),u("input",s),await k(),L(),Oe()}},me=e=>{u("change",e.target.value)},he=e=>{u("compositionstart",e),T.value=!0},ge=e=>{var s;u("compositionupdate",e);const h=(s=e.target)==null?void 0:s.value,X=h[h.length-1]||"";T.value=!bt(X)},ye=e=>{u("compositionend",e),T.value&&(T.value=!1,ne(e))},De=()=>{D.value=!D.value,be()},be=async()=>{var e;await k(),(e=F.value)==null||e.focus()},Ke=()=>{var e;return(e=F.value)==null?void 0:e.blur()},je=e=>{te.value=!1,u("mouseleave",e)},Ue=e=>{te.value=!0,u("mouseenter",e)},xe=e=>{u("keydown",e)},_e=()=>{var e;(e=F.value)==null||e.select()},we=()=>{u(ie,""),u("change",""),u("clear"),u("input","")};return G(()=>a.modelValue,()=>{var e;k(()=>B()),a.validateEvent&&((e=r==null?void 0:r.validate)==null||e.call(r,"change").catch(s=>ze()))}),G(E,()=>L()),G(()=>a.type,async()=>{await k(),L(),B()}),Ze(()=>{!a.formatter&&a.parser,L(),k(B)}),ht({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-input",ref:"https://element-plus.org/en-US/component/input.html"},d(()=>!!a.label)),p({input:H,textarea:I,ref:F,textareaStyle:ve,autosize:qe(a,"autosize"),focus:be,blur:Ke,select:_e,clear:we,resizeTextarea:B}),(e,s)=>(v(),x("div",J(t(c),{class:[t(y),{[t(l).bm("group","append")]:e.$slots.append,[t(l).bm("group","prepend")]:e.$slots.prepend}],style:t(Be),role:e.containerRole,onMouseenter:Ue,onMouseleave:je}),[m(" input "),e.type!=="textarea"?(v(),x(le,{key:0},[m(" prepend slot "),e.$slots.prepend?(v(),x("div",{key:0,class:g(t(l).be("group","prepend"))},[O(e.$slots,"prepend")],2)):m("v-if",!0),N("div",{ref_key:"wrapperRef",ref:Te,class:g(t(f))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),x("span",{key:0,class:g(t(l).e("prefix"))},[N("span",{class:g(t(l).e("prefix-inner"))},[O(e.$slots,"prefix"),e.prefixIcon?(v(),C(t(M),{key:0,class:g(t(l).e("icon"))},{default:A(()=>[(v(),C(Y(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),N("input",J({id:t($),ref_key:"input",ref:H,class:t(l).e("inner")},t(w),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?D.value?"text":"password":e.type,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label||e.ariaLabel,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:he,onCompositionupdate:ge,onCompositionend:ye,onInput:ne,onFocus:s[0]||(s[0]=(...h)=>t(U)&&t(U)(...h)),onBlur:s[1]||(s[1]=(...h)=>t(_)&&t(_)(...h)),onChange:me,onKeydown:xe}),null,16,Lt),m(" suffix slot "),t(Ae)?(v(),x("span",{key:1,class:g(t(l).e("suffix"))},[N("span",{class:g(t(l).e("suffix-inner"))},[!t(W)||!t(ae)||!t(P)?(v(),x(le,{key:0},[O(e.$slots,"suffix"),e.suffixIcon?(v(),C(t(M),{key:0,class:g(t(l).e("icon"))},{default:A(()=>[(v(),C(Y(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(W)?(v(),C(t(M),{key:1,class:g([t(l).e("icon"),t(l).e("clear")]),onMousedown:Je(t(Qe),["prevent"]),onClick:we},{default:A(()=>[Ge(t(gt))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(ae)?(v(),C(t(M),{key:2,class:g([t(l).e("icon"),t(l).e("password")]),onClick:De},{default:A(()=>[(v(),C(Y(t(Re))))]),_:1},8,["class"])):m("v-if",!0),t(P)?(v(),x("span",{key:3,class:g(t(l).e("count"))},[N("span",{class:g(t(l).e("count-inner"))},Z(t(oe))+" / "+Z(e.maxlength),3)],2)):m("v-if",!0),t(R)&&t(fe)&&t(pe)?(v(),C(t(M),{key:4,class:g([t(l).e("icon"),t(l).e("validateIcon"),t(l).is("loading",t(R)==="validating")])},{default:A(()=>[(v(),C(Y(t(fe))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(v(),x("div",{key:1,class:g(t(l).be("group","append"))},[O(e.$slots,"append")],2)):m("v-if",!0)],64)):(v(),x(le,{key:1},[m(" textarea "),N("textarea",J({id:t($),ref_key:"textarea",ref:I,class:[t(ce).e("inner"),t(l).is("focus",t(j))]},t(w),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ve),"aria-label":e.label||e.ariaLabel,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,rows:e.rows,onCompositionstart:he,onCompositionupdate:ge,onCompositionend:ye,onInput:ne,onFocus:s[2]||(s[2]=(...h)=>t(U)&&t(U)(...h)),onBlur:s[3]||(s[3]=(...h)=>t(_)&&t(_)(...h)),onChange:me,onKeydown:xe}),null,16,At),t(P)?(v(),x("span",{key:0,style:et(de.value),class:g(t(l).e("count"))},Z(t(oe))+" / "+Z(e.maxlength),7)):m("v-if",!0)],64))],16,Bt))}});var Ht=Ve(Ot,[["__file","input.vue"]]);const Ut=$e(Ht);export{M as E,Ut as a,bt as i,xt as m,Et as u};
