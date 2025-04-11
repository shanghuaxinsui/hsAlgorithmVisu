import{p as x,v as j,q as G,c as C,o as V,j as t,ae as q,af as N,t as z,C as O,ag as v,G as u,w as d,a as o}from"./chunks/framework.BZdfrRur.js";import{s as k,R as U}from"./chunks/visual.DiLKMx0U.js";const J={class:"hsAV-visu"},F={class:"hsAV-visu_option"},K={class:"hsAV-visu_option_array_control"},Q={class:"hsAV-visu_option_array_control-length"},W=["disabled"],X={class:"hsAV-visu_option_array_control-interval"},Y=["disabled"],Z={class:"hsAV-visu_option_array_control-button"},h=["disabled"],_=["disabled"],c={key:0,class:"text"},ll={key:1,class:"text"},tl={class:"hsAV-visu_option_array_value"},ol={__name:"shell_sort",setup(R){const T=x(),l=x(),f=x(200),b=x(new Array),A=x(!1),g=x(!1);let i=new Array,m=new Array,e=new Array,w=0,I=0,S=0;j(()=>{window.addEventListener("resize",()=>{D()})}),G(l,()=>{l.value>500?l.value=500:l.value<0||typeof l.value!="number"?l.value=0:l.value&&typeof l.value=="number"&&H(l.value)});const B=()=>{$(),p()},E=async()=>{if(A.value=!0,g.value=!0,i.length>=2){e=new Array(i.length);for(let n=0;n<i.length;n++)e[n]={index:n,value:m[n]};for(let n=Math.floor(e.length/2);n>0;n=Math.floor(n/2))for(let r=n;r<e.length;r++){let a=e[r],P=r;p([{index:r,color:"#98fb98"}]),await k(f.value);for(let s=r-n;s>=0&&e[s].value>a.value;s-=n)p([{index:r,color:"#98fb98"},{index:s,color:"#ffff20"}]),await k(f.value),P=s,e[s+n]=e[s];e[P]=a,M(),L(),p(Array.from(e.slice(0,r+1)).map((s,y)=>{if(y===P)return{index:y,color:"#98fb98"};if(y%n===r%n)return{index:y,color:"#ffff20"}}).filter(s=>s)),await k(f.value+600)}console.log(e)}p(),A.value=!1,g.value=!1},H=n=>{l.value=n,D(),$(),p()},D=()=>{w=T.value.getBoundingClientRect().width/l.value,I=T.value.getBoundingClientRect().height},$=()=>{S=0,b.value=new Array(l.value),m=new Array(l.value),i=new Array(l.value);for(let n=0;n<b.value.length;n++)b.value[n]=Math.round(Math.random()*1e3),b.value[n]>S&&(S=b.value[n]),m[n]=b.value[n],i[n]=n},M=()=>{for(let n=0;n<e.length;n++)i[e[n].index]=n},L=()=>{for(let n=0;n<i.length;n++)b.value[i[n]]=m[n]},p=(n=[{index:-1,color:"red"}])=>{U(m,i,w,I,S,n,T.value)};return(n,r)=>(V(),C("div",J,[t("div",{class:"hsAV-visu_visual",ref_key:"visualDiv",ref:T},null,512),t("div",F,[t("div",K,[t("div",Q,[r[2]||(r[2]=t("span",{class:"text"},"数组长度",-1)),q(t("input",{type:"number","onUpdate:modelValue":r[0]||(r[0]=a=>l.value=a),disabled:A.value,min:"0",max:"500",placeholder:"0 - 500"},null,8,W),[[N,l.value]])]),t("div",X,[r[3]||(r[3]=t("span",{class:"text"},"动画间隔",-1)),q(t("input",{type:"number","onUpdate:modelValue":r[1]||(r[1]=a=>f.value=a),disabled:A.value,min:"0",max:"1000",placeholder:"1000"},null,8,Y),[[N,f.value]])]),t("div",Z,[t("button",{class:"reassign",disabled:A.value,onClick:B},r[4]||(r[4]=[t("div",{class:"text"},"重新赋值",-1)]),8,h),t("button",{class:"start",disabled:g.value,onClick:E},[g.value?(V(),C("div",c,"运行中")):(V(),C("div",ll,"开始"))],8,_)])]),t("div",tl,[r[5]||(r[5]=t("div",{class:"text"},"数组：",-1)),t("div",null,z(b.value),1)])])]))}},fl={tabindex:"0"},ul={tabindex:"0"},dl={tabindex:"0"},nl={tabindex:"0"},rl={tabindex:"0"},el={tabindex:"0"},sl={tabindex:"0"},il={tabindex:"0"},bl={tabindex:"0"},vl={tabindex:"0"},pl={tabindex:"0"},al={tabindex:"0"},xl={tabindex:"0"},Tl={tabindex:"0"},Al={tabindex:"0"},ml={tabindex:"0"},gl={tabindex:"0"},Sl={tabindex:"0"},yl={tabindex:"0"},Cl={tabindex:"0"},Vl={tabindex:"0"},Il=JSON.parse('{"title":"希尔排序 Shell Sort","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/sort/shell_sort.md","filePath":"algorithm/sort/shell_sort.md"}'),Pl={name:"algorithm/sort/shell_sort.md"},Dl=Object.assign(Pl,{setup(R){return(T,l)=>{const f=O("font");return V(),C("div",null,[l[210]||(l[210]=v("",10)),t("table",fl,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[0]||(l[0]=[o("6")])),_:1})]),t("th",null,[u(f,{color:"#ffdab9"},{default:d(()=>l[1]||(l[1]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#6495ed"},{default:d(()=>l[2]||(l[2]=[o("4")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[3]||(l[3]=[o("11")])),_:1})]),t("th",null,[u(f,{color:"#ffd700"},{default:d(()=>l[4]||(l[4]=[o("9")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[5]||(l[5]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#ffdab9"},{default:d(()=>l[6]||(l[6]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#6495ed"},{default:d(()=>l[7]||(l[7]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#00ffff"},{default:d(()=>l[8]||(l[8]=[o("10")])),_:1})]),t("th",null,[u(f,{color:"#ffd700"},{default:d(()=>l[9]||(l[9]=[o("5")])),_:1})])])])]),l[211]||(l[211]=t("p",null,"从前往后对每个序列进行从后往前的插入排序：",-1)),l[212]||(l[212]=t("ol",null,[t("li",null,[t("code",null,"6"),o("比"),t("code",null,"0"),o("大，向后移位，已到达数组尽头，将"),t("code",null,"0"),o("插入")])],-1)),t("table",ul,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[10]||(l[10]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#ffdab9"},{default:d(()=>l[11]||(l[11]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#6495ed"},{default:d(()=>l[12]||(l[12]=[o("4")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[13]||(l[13]=[o("11")])),_:1})]),t("th",null,[u(f,{color:"#ffd700"},{default:d(()=>l[14]||(l[14]=[o("9")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[15]||(l[15]=[o("6")])),_:1})]),t("th",null,[u(f,{color:"#ffdab9"},{default:d(()=>l[16]||(l[16]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#6495ed"},{default:d(()=>l[17]||(l[17]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#00ffff"},{default:d(()=>l[18]||(l[18]=[o("10")])),_:1})]),t("th",null,[u(f,{color:"#ffd700"},{default:d(()=>l[19]||(l[19]=[o("5")])),_:1})])])])]),l[213]||(l[213]=t("ol",{start:"2"},[t("li",null,[t("code",null,"3"),o("比"),t("code",null,"2"),o("大，"),t("code",null,"3"),o("原位插入")])],-1)),t("table",dl,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[20]||(l[20]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#ffdab9"},{default:d(()=>l[21]||(l[21]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#6495ed"},{default:d(()=>l[22]||(l[22]=[o("4")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[23]||(l[23]=[o("11")])),_:1})]),t("th",null,[u(f,{color:"#ffd700"},{default:d(()=>l[24]||(l[24]=[o("9")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[25]||(l[25]=[o("6")])),_:1})]),t("th",null,[u(f,{color:"#ffdab9"},{default:d(()=>l[26]||(l[26]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#6495ed"},{default:d(()=>l[27]||(l[27]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#00ffff"},{default:d(()=>l[28]||(l[28]=[o("10")])),_:1})]),t("th",null,[u(f,{color:"#ffd700"},{default:d(()=>l[29]||(l[29]=[o("5")])),_:1})])])])]),l[214]||(l[214]=t("ol",{start:"3"},[t("li",null,[t("code",null,"4"),o("比"),t("code",null,"1"),o("大，向后移位，已到达数组尽头，将"),t("code",null,"1"),o("插入")])],-1)),t("table",nl,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[30]||(l[30]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#ffdab9"},{default:d(()=>l[31]||(l[31]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#6495ed"},{default:d(()=>l[32]||(l[32]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[33]||(l[33]=[o("11")])),_:1})]),t("th",null,[u(f,{color:"#ffd700"},{default:d(()=>l[34]||(l[34]=[o("9")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[35]||(l[35]=[o("6")])),_:1})]),t("th",null,[u(f,{color:"#ffdab9"},{default:d(()=>l[36]||(l[36]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#6495ed"},{default:d(()=>l[37]||(l[37]=[o("4")])),_:1})]),t("th",null,[u(f,{color:"#00ffff"},{default:d(()=>l[38]||(l[38]=[o("10")])),_:1})]),t("th",null,[u(f,{color:"#ffd700"},{default:d(()=>l[39]||(l[39]=[o("5")])),_:1})])])])]),l[215]||(l[215]=t("ol",{start:"4"},[t("li",null,[t("code",null,"11"),o("比"),t("code",null,"10"),o("大，向后移位，已到达数组尽头，将"),t("code",null,"10"),o("插入")])],-1)),t("table",rl,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[40]||(l[40]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#ffdab9"},{default:d(()=>l[41]||(l[41]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#6495ed"},{default:d(()=>l[42]||(l[42]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[43]||(l[43]=[o("10")])),_:1})]),t("th",null,[u(f,{color:"#ffd700"},{default:d(()=>l[44]||(l[44]=[o("9")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[45]||(l[45]=[o("6")])),_:1})]),t("th",null,[u(f,{color:"#ffdab9"},{default:d(()=>l[46]||(l[46]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#6495ed"},{default:d(()=>l[47]||(l[47]=[o("4")])),_:1})]),t("th",null,[u(f,{color:"#00ffff"},{default:d(()=>l[48]||(l[48]=[o("11")])),_:1})]),t("th",null,[u(f,{color:"#ffd700"},{default:d(()=>l[49]||(l[49]=[o("5")])),_:1})])])])]),l[216]||(l[216]=t("ol",{start:"5"},[t("li",null,[t("code",null,"9"),o("比"),t("code",null,"5"),o("大，向后移位，已到达数组尽头，将"),t("code",null,"5"),o("插入")])],-1)),t("table",el,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[50]||(l[50]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#ffdab9"},{default:d(()=>l[51]||(l[51]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#6495ed"},{default:d(()=>l[52]||(l[52]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[53]||(l[53]=[o("10")])),_:1})]),t("th",null,[u(f,{color:"#ffd700"},{default:d(()=>l[54]||(l[54]=[o("5")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[55]||(l[55]=[o("6")])),_:1})]),t("th",null,[u(f,{color:"#ffdab9"},{default:d(()=>l[56]||(l[56]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#6495ed"},{default:d(()=>l[57]||(l[57]=[o("4")])),_:1})]),t("th",null,[u(f,{color:"#00ffff"},{default:d(()=>l[58]||(l[58]=[o("11")])),_:1})]),t("th",null,[u(f,{color:"#ffd700"},{default:d(()=>l[59]||(l[59]=[o("9")])),_:1})])])])]),l[217]||(l[217]=v("",3)),t("table",sl,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[60]||(l[60]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[61]||(l[61]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[62]||(l[62]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[63]||(l[63]=[o("10")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[64]||(l[64]=[o("5")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[65]||(l[65]=[o("6")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[66]||(l[66]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[67]||(l[67]=[o("4")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[68]||(l[68]=[o("11")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[69]||(l[69]=[o("9")])),_:1})])])])]),l[218]||(l[218]=t("p",null,"从前往后对每个序列进行从后往前的插入排序：",-1)),l[219]||(l[219]=t("ol",null,[t("li",null,[t("code",null,"1"),o("比"),t("code",null,"0"),o("大，"),t("code",null,"1"),o("原位插入")])],-1)),t("table",il,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[70]||(l[70]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[71]||(l[71]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[72]||(l[72]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[73]||(l[73]=[o("10")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[74]||(l[74]=[o("5")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[75]||(l[75]=[o("6")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[76]||(l[76]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[77]||(l[77]=[o("4")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[78]||(l[78]=[o("11")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[79]||(l[79]=[o("9")])),_:1})])])])]),l[220]||(l[220]=t("ol",{start:"2"},[t("li",null,[t("code",null,"10"),o("比"),t("code",null,"2"),o("大，"),t("code",null,"10"),o("原位插入")])],-1)),t("table",bl,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[80]||(l[80]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[81]||(l[81]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[82]||(l[82]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[83]||(l[83]=[o("10")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[84]||(l[84]=[o("5")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[85]||(l[85]=[o("6")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[86]||(l[86]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[87]||(l[87]=[o("4")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[88]||(l[88]=[o("11")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[89]||(l[89]=[o("9")])),_:1})])])])]),l[221]||(l[221]=t("ol",{start:"3"},[t("li",null,[t("code",null,"5"),o("比"),t("code",null,"1"),o("大，"),t("code",null,"5"),o("原位插入")])],-1)),t("table",vl,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[90]||(l[90]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[91]||(l[91]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[92]||(l[92]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[93]||(l[93]=[o("10")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[94]||(l[94]=[o("5")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[95]||(l[95]=[o("6")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[96]||(l[96]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[97]||(l[97]=[o("4")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[98]||(l[98]=[o("11")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[99]||(l[99]=[o("9")])),_:1})])])])]),l[222]||(l[222]=t("ol",{start:"4"},[t("li",null,[t("code",null,"10"),o("比"),t("code",null,"6"),o("大，向后移位；"),t("code",null,"6"),o("比"),t("code",null,"2"),o("大，将"),t("code",null,"6"),o("插入")])],-1)),t("table",pl,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[100]||(l[100]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[101]||(l[101]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[102]||(l[102]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[103]||(l[103]=[o("6")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[104]||(l[104]=[o("5")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[105]||(l[105]=[o("10")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[106]||(l[106]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[107]||(l[107]=[o("4")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[108]||(l[108]=[o("11")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[109]||(l[109]=[o("9")])),_:1})])])])]),l[223]||(l[223]=t("ol",{start:"5"},[t("li",null,[t("code",null,"5"),o("比"),t("code",null,"3"),o("大，向后移位；"),t("code",null,"3"),o("比"),t("code",null,"1"),o("大，将"),t("code",null,"3"),o("插入")])],-1)),t("table",al,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[110]||(l[110]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[111]||(l[111]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[112]||(l[112]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[113]||(l[113]=[o("6")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[114]||(l[114]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[115]||(l[115]=[o("10")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[116]||(l[116]=[o("5")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[117]||(l[117]=[o("4")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[118]||(l[118]=[o("11")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[119]||(l[119]=[o("9")])),_:1})])])])]),l[224]||(l[224]=v("",6)),t("table",xl,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[120]||(l[120]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[121]||(l[121]=[o("2")])),_:1})]),l[122]||(l[122]=t("th",null,"1",-1)),l[123]||(l[123]=t("th",null,"6",-1)),l[124]||(l[124]=t("th",null,"3",-1)),l[125]||(l[125]=t("th",null,"10",-1)),l[126]||(l[126]=t("th",null,"5",-1)),l[127]||(l[127]=t("th",null,"4",-1)),l[128]||(l[128]=t("th",null,"11",-1)),l[129]||(l[129]=t("th",null,"9",-1))])])]),l[225]||(l[225]=t("ol",{start:"2"},[t("li",null,[t("code",null,"2"),o("比"),t("code",null,"1"),o("大，向后移位；"),t("code",null,"1"),o("比"),t("code",null,"0"),o("大，将"),t("code",null,"1"),o("插入")])],-1)),t("table",Tl,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[130]||(l[130]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[131]||(l[131]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[132]||(l[132]=[o("2")])),_:1})]),l[133]||(l[133]=t("th",null,"6",-1)),l[134]||(l[134]=t("th",null,"3",-1)),l[135]||(l[135]=t("th",null,"10",-1)),l[136]||(l[136]=t("th",null,"5",-1)),l[137]||(l[137]=t("th",null,"4",-1)),l[138]||(l[138]=t("th",null,"11",-1)),l[139]||(l[139]=t("th",null,"9",-1))])])]),l[226]||(l[226]=t("ol",{start:"3"},[t("li",null,[t("code",null,"6"),o("比"),t("code",null,"2"),o("大，"),t("code",null,"6"),o("原位插入")])],-1)),t("table",Al,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[140]||(l[140]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[141]||(l[141]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[142]||(l[142]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[143]||(l[143]=[o("6")])),_:1})]),l[144]||(l[144]=t("th",null,"3",-1)),l[145]||(l[145]=t("th",null,"10",-1)),l[146]||(l[146]=t("th",null,"5",-1)),l[147]||(l[147]=t("th",null,"4",-1)),l[148]||(l[148]=t("th",null,"11",-1)),l[149]||(l[149]=t("th",null,"9",-1))])])]),l[227]||(l[227]=t("ol",{start:"4"},[t("li",null,[t("code",null,"6"),o("比"),t("code",null,"3"),o("大，向后移位；"),t("code",null,"3"),o("比"),t("code",null,"2"),o("大，将"),t("code",null,"3"),o("插入")])],-1)),t("table",ml,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[150]||(l[150]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[151]||(l[151]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[152]||(l[152]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[153]||(l[153]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[154]||(l[154]=[o("6")])),_:1})]),l[155]||(l[155]=t("th",null,"10",-1)),l[156]||(l[156]=t("th",null,"5",-1)),l[157]||(l[157]=t("th",null,"4",-1)),l[158]||(l[158]=t("th",null,"11",-1)),l[159]||(l[159]=t("th",null,"9",-1))])])]),l[228]||(l[228]=t("ol",{start:"5"},[t("li",null,[t("code",null,"10"),o("比"),t("code",null,"6"),o("大，"),t("code",null,"10"),o("原位插入")])],-1)),t("table",gl,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[160]||(l[160]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[161]||(l[161]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[162]||(l[162]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[163]||(l[163]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[164]||(l[164]=[o("6")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[165]||(l[165]=[o("10")])),_:1})]),l[166]||(l[166]=t("th",null,"5",-1)),l[167]||(l[167]=t("th",null,"4",-1)),l[168]||(l[168]=t("th",null,"11",-1)),l[169]||(l[169]=t("th",null,"9",-1))])])]),l[229]||(l[229]=v("",1)),t("table",Sl,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[170]||(l[170]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[171]||(l[171]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[172]||(l[172]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[173]||(l[173]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[174]||(l[174]=[o("5")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[175]||(l[175]=[o("6")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[176]||(l[176]=[o("10")])),_:1})]),l[177]||(l[177]=t("th",null,"4",-1)),l[178]||(l[178]=t("th",null,"11",-1)),l[179]||(l[179]=t("th",null,"9",-1))])])]),l[230]||(l[230]=v("",1)),t("table",yl,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[180]||(l[180]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[181]||(l[181]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[182]||(l[182]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[183]||(l[183]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[184]||(l[184]=[o("4")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[185]||(l[185]=[o("5")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[186]||(l[186]=[o("6")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[187]||(l[187]=[o("10")])),_:1})]),l[188]||(l[188]=t("th",null,"11",-1)),l[189]||(l[189]=t("th",null,"9",-1))])])]),l[231]||(l[231]=t("ol",{start:"8"},[t("li",null,[t("code",null,"11"),o("比"),t("code",null,"10"),o("大，"),t("code",null,"11"),o("原位插入")])],-1)),t("table",Cl,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[190]||(l[190]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[191]||(l[191]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[192]||(l[192]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[193]||(l[193]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[194]||(l[194]=[o("4")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[195]||(l[195]=[o("5")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[196]||(l[196]=[o("6")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[197]||(l[197]=[o("10")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[198]||(l[198]=[o("11")])),_:1})]),l[199]||(l[199]=t("th",null,"9",-1))])])]),l[232]||(l[232]=v("",1)),t("table",Vl,[t("thead",null,[t("tr",null,[t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[200]||(l[200]=[o("0")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[201]||(l[201]=[o("1")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[202]||(l[202]=[o("2")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[203]||(l[203]=[o("3")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[204]||(l[204]=[o("4")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[205]||(l[205]=[o("5")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[206]||(l[206]=[o("6")])),_:1})]),t("th",null,[u(f,{color:"#00fff"},{default:d(()=>l[207]||(l[207]=[o("9")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[208]||(l[208]=[o("10")])),_:1})]),t("th",null,[u(f,{color:"#ff0000"},{default:d(()=>l[209]||(l[209]=[o("11")])),_:1})])])])]),l[233]||(l[233]=v("",5)),u(ol)])}}});export{Il as __pageData,Dl as default};
