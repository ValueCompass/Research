import{d as w,u as a,b as M}from"./el-radio-group-B2pssnbq.js";import{_ as S,H as g,N as c,al as k,X as R,I as U,Q as j,ar as D,T as V}from"./common-BloaLxzF.js";import{N as h,P as y,r as I,s as $,J as H,y as K,f as l,z,C as b,o as T,j as J,w as _,c as F,n as Y,t as B,k as P,i as q,ac as G}from"./index-B73o2Y6U.js";const Q=h({inheritAttrs:!1});function W(t,r,n,o,d,i){return y(t.$slots,"default")}var X=S(Q,[["render",W],["__file","collection.vue"]]);const Z=h({name:"ElCollectionItem",inheritAttrs:!1});function x(t,r,n,o,d,i){return y(t.$slots,"default")}var ee=S(Z,[["render",x],["__file","collection-item.vue"]]);const te="data-el-collection-item",oe=t=>{const r=`El${t}Collection`,n=`${r}Item`,o=Symbol(r),d=Symbol(n),i={...X,name:r,setup(){const v=I(null),f=new Map;$(o,{itemMap:f,getItems:()=>{const p=l(v);if(!p)return[];const s=Array.from(p.querySelectorAll(`[${te}]`));return[...f.values()].sort((C,E)=>s.indexOf(C.ref)-s.indexOf(E.ref))},collectionRef:v})}},m={...ee,name:n,setup(v,{attrs:f}){const u=I(null),p=H(o,void 0);$(d,{collectionItemRef:u}),K(()=>{const s=l(u);s&&p.itemMap.set(s,{ref:s,...f})}),z(()=>{const s=l(u);p.itemMap.delete(s)})}};return{COLLECTION_INJECTION_KEY:o,COLLECTION_ITEM_INJECTION_KEY:d,ElCollection:i,ElCollectionItem:m}},N=g({trigger:w.trigger,effect:{...a.effect,default:"light"},type:{type:c(String)},placement:{type:c(String),default:"bottom"},popperOptions:{type:c(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:c([Number,String]),default:0},maxHeight:{type:c([Number,String]),default:""},popperClass:{type:String,default:""},disabled:Boolean,role:{type:String,default:"menu"},buttonProps:{type:c(Object)},teleported:a.teleported});g({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:k}});g({onKeydown:{type:c(Function)}});oe("Dropdown");const re=g({trigger:w.trigger,placement:N.placement,disabled:w.disabled,visible:a.visible,transition:a.transition,popperOptions:N.popperOptions,tabindex:N.tabindex,content:a.content,popperStyle:a.popperStyle,popperClass:a.popperClass,enterable:{...a.enterable,default:!0},effect:{...a.effect,default:"light"},teleported:a.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),ne={"update:visible":t=>R(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},se="onUpdate:visible",ae=h({name:"ElPopover"}),le=h({...ae,props:re,emits:ne,setup(t,{expose:r,emit:n}){const o=t,d=b(()=>o[se]),i=U("popover"),m=I(),v=b(()=>{var e;return(e=l(m))==null?void 0:e.popperRef}),f=b(()=>[{width:j(o.width)},o.popperStyle]),u=b(()=>[i.b(),o.popperClass,{[i.m("plain")]:!!o.content}]),p=b(()=>o.transition===`${i.namespace.value}-fade-in-linear`),s=()=>{var e;(e=m.value)==null||e.hide()},O=()=>{n("before-enter")},C=()=>{n("before-leave")},E=()=>{n("after-enter")},L=()=>{n("update:visible",!1),n("after-leave")};return r({popperRef:v,hide:s}),(e,fe)=>(T(),J(l(M),G({ref_key:"tooltipRef",ref:m},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":l(u),"popper-style":l(f),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":l(p),"onUpdate:visible":l(d),onBeforeShow:O,onBeforeHide:C,onShow:E,onHide:L}),{content:_(()=>[e.title?(T(),F("div",{key:0,class:Y(l(i).e("title")),role:"title"},B(e.title),3)):P("v-if",!0),y(e.$slots,"default",{},()=>[q(B(e.content),1)])]),default:_(()=>[e.$slots.reference?y(e.$slots,"reference",{key:0}):P("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var ie=S(le,[["__file","popover.vue"]]);const A=(t,r)=>{const n=r.arg||r.value,o=n==null?void 0:n.popperRef;o&&(o.triggerRef=t)};var pe={mounted(t,r){A(t,r)},updated(t,r){A(t,r)}};const ce="popover",de=D(pe,ce),be=V(ie,{directive:de});export{be as E,de as a};
