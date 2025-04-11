import{p as c,v as J,q as Q,c as V,o as C,j as s,ae as I,af as L,t as k,ah as E,ad as H,ag as F,G as K}from"./chunks/framework.BZdfrRur.js";import{s as R}from"./chunks/visual.DiLKMx0U.js";const W={class:"hsAV-visu"},X={class:"hsAV-visu_option"},Y={class:"hsAV-visu_option_array_control"},Z={class:"hsAV-visu_option_array_control-length"},q=["disabled"],S={class:"hsAV-visu_option_array_control-interval"},ee=["disabled"],te={class:"hsAV-visu_option_array_control-button"},ae=["disabled"],le=["disabled"],se={key:0,class:"text"},ne={key:1,class:"text"},re={class:"hsAV-visu_option_array_value"},oe={__name:"merge_sort",setup(T){const _=c(),l=c(),b=c(1e3),h=c(new Array),f=c(!1),x=c(!1);let r=new Array,p=new Array,o=new Array,d=0,P=0,g=0;J(()=>{window.addEventListener("resize",()=>{$()})}),Q(l,()=>{l.value>500?l.value=500:l.value<0||typeof l.value!="number"?l.value=0:l.value&&typeof l.value=="number"&&z(l.value)});const G=()=>{N(),v()},j=async()=>{if(f.value=!0,x.value=!0,r.length>=2){o=new Array(r.length);for(let e=0;e<r.length;e++)o[e]={index:e,value:p[e]};console.log(o.concat()),o=await M(o.concat(),0,o.length),B(),D(),v()}v(),f.value=!1,x.value=!1},z=e=>{l.value=e,$(),N(),v()},$=()=>{d=_.value.getBoundingClientRect().width/l.value,P=_.value.getBoundingClientRect().height},N=()=>{g=0,h.value=new Array(l.value),p=new Array(l.value),r=new Array(l.value);for(let e=0;e<h.value.length;e++)h.value[e]=Math.round(Math.random()*1e3),h.value[e]>g&&(g=h.value[e]),p[e]=h.value[e],r[e]=e},B=()=>{for(let e=0;e<o.length;e++)r[o[e].index]=e},D=()=>{for(let e=0;e<r.length;e++)h.value[r[e]]=p[e]},v=(e=[{index:-1,color:"red"}])=>{E(H("div",{class:"hsAV-visu_visual-box"},Array.from(p).map((t,n)=>{for(let i=0;i<e.length;i++)if(e[i].index===r[n])return H("div",{class:"bar",style:{left:`${d*r[n]+1}px`,width:`${d-2>0?d-2:d}px`,height:`${(P-2)*(t/g)}px`,backgroundColor:e[i].color?e[i].color:"null"}});return H("div",{class:"bar",style:{left:`${d*r[n]+1}px`,width:`${d-2>0?d-2:d}px`,height:`${(P-2)*(t/g)}px`}})})),_.value)};async function M(e,t,n){let i=n-t,y=new Array(i>=0?i:0);if(i<=1)return e;{B(),D(),v(Array.from(o).map((a,m)=>{for(let u=0;u<e.length;u++){if(a.index===e[0].index)return{index:m,color:"#98fb98"};if(a.index===e[u].index)return{index:m,color:"#ffff20"}}}).filter(a=>a)),await R(b.value);let A=new Array(0),w=new Array(0);for(let a=1;a<i;a++)e[a].value>e[0].value?w.push(e[a]):A.push(e[a]);y=A.concat(e[0]).concat(w);for(let a=t;a<n;a++)o[a]=y[a-t];B(),D(),v(Array.from(o).map((a,m)=>{for(let u=0;u<y.length;u++){if(a.index===e[0].index)return{index:m,color:"#98fb98"};if(a.index===y[u].index)return{index:m,color:"#ffff20"}}}).filter(a=>a)),await R(b.value+600);let O=await M(A,t,t+A.length),U=await M(w,n-w.length,n);return O.concat(e[0]).concat(U)}}return(e,t)=>(C(),V("div",W,[s("div",{class:"hsAV-visu_visual",ref_key:"visualDiv",ref:_},null,512),s("div",X,[s("div",Y,[s("div",Z,[t[2]||(t[2]=s("span",{class:"text"},"数组长度",-1)),I(s("input",{type:"number","onUpdate:modelValue":t[0]||(t[0]=n=>l.value=n),disabled:f.value,min:"0",max:"500",placeholder:"0 - 500"},null,8,q),[[L,l.value]])]),s("div",S,[t[3]||(t[3]=s("span",{class:"text"},"动画间隔",-1)),I(s("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=n=>b.value=n),disabled:f.value,min:"0",max:"1000",placeholder:"1000"},null,8,ee),[[L,b.value]])]),s("div",te,[s("button",{class:"reassign",disabled:f.value,onClick:G},t[4]||(t[4]=[s("div",{class:"text"},"重新赋值",-1)]),8,ae),s("button",{class:"start",disabled:x.value,onClick:j},[x.value?(C(),V("div",se,"运行中")):(C(),V("div",ne,"开始"))],8,le)])]),s("div",re,[t[5]||(t[5]=s("div",{class:"text"},"数组：",-1)),s("div",null,k(h.value),1)])])]))}},ue=JSON.parse('{"title":"归并排序 Merge Sort","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/sort/merge_sort.md","filePath":"algorithm/sort/merge_sort.md"}'),ie={name:"algorithm/sort/merge_sort.md"},ve=Object.assign(ie,{setup(T){return(_,l)=>(C(),V("div",null,[l[0]||(l[0]=F('<h1 id="归并排序-merge-sort" tabindex="-1">归并排序 Merge Sort <a class="header-anchor" href="#归并排序-merge-sort" aria-label="Permalink to &quot;归并排序 Merge Sort&quot;">​</a></h1><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><p>归并排序（Merge Sort）是一种分治法的排序算法，属于比较排序，是一种效率较高且稳定的排序方法。它的核心思想是将数组分成两部分，分别进行排序，然后将排序好的两部分合并。</p><p>其具体步骤如下：</p><ol><li>分解：将待排序数组递归地分割成两个子数组，直到每个子数组只有一个元素。</li><li>排序与合并：按照从小到大的顺序，逐步将两个有序的子数组合并成一个较大的有序数组。</li><li>重复这个过程，直到所有子数组合并为一个有序数组。</li></ol><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>有一组无序数组：</p><table tabindex="0"><thead><tr><th>6</th><th>2</th><th>4</th><th>1</th><th>9</th><th>0</th><th>3</th></tr></thead></table><p>此时数组为：</p><table tabindex="0"><thead><tr><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>6</th><th>9</th></tr></thead></table><p>排序完成。</p><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="c" tabindex="-1">C++ <a class="header-anchor" href="#c" aria-label="Permalink to &quot;C++&quot;">​</a></h3><h2 id="可视化" tabindex="-1">可视化 <a class="header-anchor" href="#可视化" aria-label="Permalink to &quot;可视化&quot;">​</a></h2>',14)),K(oe)]))}});export{ue as __pageData,ve as default};
