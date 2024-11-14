import{a as A,g as I,m as ne,b as re}from"./common-C8CFHUqV.js";import{E as ce,a as ie,b as ue,c as de,d as pe,e as ve}from"./el-select-BSiDl6zT.js";import{E as _e,a as he,b as me}from"./el-radio-group-CxQ-Fo6B.js";import{_ as be,r as u,a as fe,u as ye,o as s,c as d,b as l,d as n,w as r,n as ge,e as C,v as D,t as p,f as _,F as x,g as S,h as O,i as h,j as M,k as $,p as we,l as ke,m as Ce}from"./index-BcagFYxH.js";import"./el-input-DAkm5GJ-.js";const De=""+new URL("silver-medal-BT5qtGY6.png",import.meta.url).href,xe=""+new URL("gold-medal-D39iuvis.png",import.meta.url).href,Se=""+new URL("bronze-medal-DK1-n0yY.png",import.meta.url).href,f=L=>(we("data-v-41a58ab0"),L=L(),ke(),L),Le={class:"main-container",style:{padding:"0 70px"}},Ve=f(()=>l("div",{class:"des"},[l("h1",null,"Value Compass Leaderboard"),l("p",null,[h(" Welcome to a comprehensive LLM value assessment platform, distinguished by its interdisciplinary value perspectives and robust evaluation framework. "),l("br"),h(" With fine-grained value comparisons and illustrative examples, this platform empowers you to find the LLM that best aligns with your own values. ")]),l("h4",null,"Overall Rankings and Scores of LLMs")],-1)),Ee={class:"content"},He={class:"content-filter"},Fe={class:"panel-content"},Me=f(()=>l("div",{class:"title"},"Applied filters",-1)),Re={class:"panel-row"},Te=f(()=>l("div",{class:"filter-name"},"Measurement Date",-1)),Ue={class:"panel-tags"},je={class:"title"},Ne={class:"panel-row"},Ae=f(()=>l("div",{class:"filter-name"},"Schwartz Value Theory",-1)),Ie={class:"panel-tags"},Oe={class:"panel-row"},Be=f(()=>l("div",{class:"filter-name"},"Moral Foundation Theory",-1)),Pe={class:"panel-tags"},qe={class:"panel-row"},ze=f(()=>l("div",{class:"filter-name"},"Diverse Safety Risks",-1)),$e={class:"panel-tags"},Ge={class:"panel-row"},Ke=f(()=>l("div",{class:"filter-name"},"LLMs' Unique Values",-1)),We={class:"panel-tags"},Ye={class:"filter-table"},Je={key:0,style:{width:"1.9em"},src:De,alt:"silver medal"},Qe={key:1,style:{width:"1.9em"},src:xe,alt:"silver medal"},Xe={key:2,style:{width:"1.9em"},src:Se,alt:"silver medal"},Ze={key:3,class:"table-color"},el={class:"table-color"},ll={class:"table-color"},al={key:0,class:"type-icon"},ol={key:1,class:"type-close-icon"},tl={__name:"Leaderboard",setup(L){var R=null;u(null),u(null),u(null);let B=null;const G={multiple:!0},m=u([]),V=u(!1),b=u(null),P=u(0);let i=fe({});const k=[{value:0,label:"Universal"},{value:1,label:"Schwartz Value Theory",children:[{value:0,label:"Achievement"},{value:1,label:"Benevolence"},{value:2,label:"Conformity"},{value:3,label:"Hedonism"},{value:4,label:"Power"},{value:5,label:"Security"},{value:6,label:"Self-direction"},{value:7,label:"Stimulation"},{value:8,label:"Tradition"},{value:9,label:"Universalism"}]},{value:2,label:"Moral Foundation Theory",children:[{value:0,label:"Authority/Subversion"},{value:1,label:"Care/Harm"},{value:2,label:"Fairness/Cheating"},{value:3,label:"Loyalty/Betrayal"},{value:4,label:"Sanctity/Degradation"}]},{value:3,label:"Diverse Safety Risks",children:[{value:0,label:"Misinformation Harms"},{value:1,label:"Representation & Toxicity Harms"},{value:2,label:"Socioeconomic Harms"},{value:3,label:"Human Autonomy & Integrity Harms"},{value:4,label:"Malicious Use"},{value:5,label:"Information & Safety Harms"}]},{value:4,label:"LLMs' Unique Values",children:[{value:0,label:"User-Oriented"},{value:1,label:"Self-Competent"},{value:2,label:"Idealistic"},{value:3,label:"Social"},{value:4,label:"Ethical"},{value:5,label:"Professional"}]}],K=()=>{const t=[];for(let o=0;o<k[2].children.length;o++)t.push([2,o]);for(let o=0;o<k[3].children.length;o++)t.push([3,o]);return t},y=u("2024/7"),W=[{value:"2024/7",label:"2024/7"}],q=u([]),Y=u({}),J=u({}),Q=u({}),E=t=>A.get(t);(async()=>{try{A.all([E("./data/models_info.json"),E("./data/Schwartz_scores.json"),E("./data/Risk_scores.json"),E("./data/MFT_scores.json")]).then(A.spread(function(t,o,c,a){R=t.data.data,console.log(R),o.value=o.data.data,c.value=c.data.data,a.value=a.data.data;const v=I(o.value),U=I(c.value),j=I(a.value);B=ne(v,U,j);const z=[];F(K())}))}catch(t){console.error("Fetch error:",t)}})();const H=t=>{m.value=m.value.filter(o=>o[0]!==t.parent||o[1]!==t.key),F(m.value)},X=t=>{O(()=>{T()})},F=t=>{console.log(t),P.value=t.length,i={};const o=[];t.length>0&&t.forEach(a=>{i[a[0]]=i[a[0]]||[],(a[1]||a[1]==0)&&(i[a[0]].push({name:k[a[0]].children[a[1]].label,key:a[1],parent:a[0]}),o.push(k[a[0]].children[a[1]].label))});const c=[];R.forEach(a=>{const v=re(a.model,o,B);c.push({modelName:a.model,developer:a.developer,points:(v*100).toFixed(3),type:a.type,releaseDate:a["release date"].split(" ")[0]})}),c.sort((a,v)=>v.points-a.points),c.map((a,v)=>(a.place=v+1,a)),Y.value=Object.assign({},c[0]),J.value=Object.assign({},c[1]),Q.value=Object.assign({},c[2]),q.value=c,O(()=>{T()})},Z=()=>{m.value=[],F(m.value),O(()=>{T()})},ee=()=>{V.value=!V.value,b.value.style.maxHeight?b.value.style.maxHeight=null:b.value.style.maxHeight=b.value.scrollHeight+"px"},T=()=>{V.value&&(b.value.style.maxHeight=b.value.scrollHeight+"px")},le=ye(),ae=t=>{le.push({path:"/Analysis",query:{modelName:t}})},oe=(t,o,c)=>{console.log(t),ae(t.modelName)};return(t,o)=>{const c=_e,a=pe,v=he,U=ce,j=ie,g=ue,z=Ce,w=ve,te=me,se=de;return s(),d("div",null,[l("div",Le,[Ve,l("div",Ee,[l("div",He,[n(U,{modelValue:y.value,"onUpdate:modelValue":o[1]||(o[1]=e=>y.value=e),placeholder:"Measurement Date",onChange:X,style:{width:"200px"}},{default:r(()=>[n(v,{modelValue:y.value,"onUpdate:modelValue":o[0]||(o[0]=e=>y.value=e),style:{width:"100%"}},{default:r(()=>[(s(),d(x,null,S(W,e=>n(a,{key:e.value,label:e.label,value:e.value},{default:r(()=>[n(c,{value:e.value},{default:r(()=>[h(p(e.label),1)]),_:2},1032,["value"])]),_:2},1032,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),n(j,{class:"select",modelValue:m.value,"onUpdate:modelValue":o[2]||(o[2]=e=>m.value=e),options:k,props:G,style:{width:"240px"},"show-all-levels":!1,"collapse-tags":!0,onChange:F,placeholder:"Measurement Dimension"},null,8,["modelValue"]),l("span",{class:"filter-btn",onClick:Z},"Reset Filter"),l("span",{class:ge(["show-filter",{"is-show":V.value}]),onClick:ee},null,2)]),l("div",{class:"panel-box",ref_key:"panel",ref:b},[l("div",Fe,[Me,C(l("div",Re,[Te,l("div",Ue,[n(g,{type:"info",color:"rgba(255, 255, 255, 0.2)"},{default:r(()=>[h(p(y.value),1)]),_:1})])],512),[[D,y.value]]),l("div",je,"Measurement Dimension("+p(P.value)+")",1),C(l("div",Ne,[Ae,l("div",Ie,[(s(!0),d(x,null,S(_(i)[1],e=>(s(),M(g,{key:e.key,closable:"",type:"info",onClose:N=>H(e),color:"rgba(255, 255, 255, 0.2)"},{default:r(()=>[h(p(e.name),1)]),_:2},1032,["onClose"]))),128))])],512),[[D,_(i)[1]]]),C(l("div",Oe,[Be,l("div",Pe,[(s(!0),d(x,null,S(_(i)[2],e=>(s(),M(g,{key:e.key,closable:"",type:"info",onClose:N=>H(e),color:"rgba(255, 255, 255, 0.2)"},{default:r(()=>[h(p(e.name),1)]),_:2},1032,["onClose"]))),128))])],512),[[D,_(i)[2]]]),C(l("div",qe,[ze,l("div",$e,[(s(!0),d(x,null,S(_(i)[3],e=>(s(),M(g,{key:e.key,closable:"",type:"info",onClose:N=>H(e),color:"rgba(255, 255, 255, 0.2)"},{default:r(()=>[h(p(e.name),1)]),_:2},1032,["onClose"]))),128))])],512),[[D,_(i)[3]]]),C(l("div",Ge,[Ke,l("div",We,[(s(!0),d(x,null,S(_(i)[4],e=>(s(),M(g,{key:e.key,closable:"",type:"info",onClose:N=>H(e),color:"rgba(255, 255, 255, 0.2)"},{default:r(()=>[h(p(e.name),1)]),_:2},1032,["onClose"]))),128))])],512),[[D,_(i)[4]]])])],512),l("div",Ye,[n(se,{data:q.value,"default-sort":{prop:"place"},style:{width:"100%"},onRowClick:oe},{default:r(()=>[n(w,{prop:"place",label:"Place",sortable:"",width:"120"},{default:r(e=>[e.row.place==2?(s(),d("img",Je)):e.row.place==1?(s(),d("img",Qe)):e.row.place==3?(s(),d("img",Xe)):(s(),d("span",Ze,p(e.row.place),1)),n(z,{color:"#FFD000",class:"top-icon",name:"sort-e"})]),_:1}),n(w,{prop:"modelName",label:"Model Name",sortable:""},{default:r(e=>[l("span",el,p(e.row.modelName),1)]),_:1}),n(w,{prop:"developer",label:"Developer",sortable:""}),n(w,{prop:"points",label:"Points",sortable:""},{default:r(e=>[l("span",ll,p(e.row.points),1)]),_:1}),n(w,{label:"Type"},{default:r(e=>[n(te,{effect:"customized",content:e.row.type+" Source",placement:"top"},{default:r(()=>[e.row.type.toLowerCase()=="open"?(s(),d("span",al)):$("",!0),e.row.type.toLowerCase()=="close"?(s(),d("span",ol)):$("",!0)]),_:2},1032,["content"])]),_:1}),n(w,{prop:"releaseDate",label:"Release Date",sortable:""})]),_:1},8,["data"])])])])])}}},dl=be(tl,[["__scopeId","data-v-41a58ab0"]]);export{dl as default};
