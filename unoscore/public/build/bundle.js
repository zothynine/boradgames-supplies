var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function u(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t){return 0===Object.keys(t).length}function a(t,n){t.appendChild(n)}function r(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function p(){return t=" ",document.createTextNode(t);var t}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t,n,e){n in t?t[n]="boolean"==typeof t[n]&&""===e||e:f(t,n,e)}function h(t,n){t.value=null==n?"":n}function v(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function g(t){const n={};for(const e of t)n[e.name]=e.value;return n}let y;function $(t){y=t}const m=[],x=[],k=[],_=[],w=Promise.resolve();let E=!1;function L(t){k.push(t)}let M=!1;const T=new Set;function H(){if(!M){M=!0;do{for(let t=0;t<m.length;t+=1){const n=m[t];$(n),C(n.$$)}for($(null),m.length=0;x.length;)x.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];T.has(n)||(T.add(n),n())}k.length=0}while(m.length);for(;_.length;)_.pop()();E=!1,M=!1,T.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}const A=new Set;function z(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function S(t,n){-1===t.$$.dirty[0]&&(m.push(t),E||(E=!0,w.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(i,l,a,r,c,p,d,f=[-1]){const b=y;$(i);const h=i.$$={fragment:null,ctx:null,props:p,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(b?b.$$.context:l.context||[]),callbacks:e(),dirty:f,skip_bound:!1,root:l.target||b.$$.root};d&&d(h.root);let v=!1;if(h.ctx=a?a(i,l.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),v&&S(i,t)),n})):[],h.update(),v=!0,o(h.before_update),h.fragment=!!r&&r(h.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);h.fragment&&h.fragment.l(t),t.forEach(s)}else h.fragment&&h.fragment.c();l.intro&&((g=i.$$.fragment)&&g.i&&(A.delete(g),g.i(m))),function(t,e,i,l){const{fragment:a,on_mount:r,on_destroy:s,after_update:c}=t.$$;a&&a.m(e,i),l||L((()=>{const e=r.map(n).filter(u);s?s.push(...e):o(e),t.$$.on_mount=[]})),c.forEach(L)}(i,l.target,l.anchor,l.customElement),H()}var g,m;$(b)}let R;"function"==typeof HTMLElement&&(R=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(u);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function j(n){let e,u,i,l,b,v,g,y,$,m,x,k,_,w,E,L,M,T,H,C,A,z,S,O,R,j,N,P,B,D,F,G,I,J,K,Q,U,V,W,X,Y,Z,tt,nt,et,ot,ut,it,lt,at,rt,st,ct,pt,dt,ft,bt,ht;return{c(){e=c("div"),u=c("form"),i=c("fieldset"),l=c("input"),b=p(),v=c("input"),g=p(),y=c("input"),$=p(),m=c("input"),x=p(),k=c("input"),_=p(),w=c("input"),E=p(),L=c("input"),M=p(),T=c("input"),H=p(),C=c("input"),A=p(),z=c("input"),S=p(),O=c("input"),R=p(),j=c("input"),N=p(),P=c("input"),B=p(),D=c("input"),F=p(),G=c("input"),I=p(),J=c("input"),K=p(),Q=c("input"),U=p(),V=c("input"),W=p(),X=c("input"),Y=p(),Z=c("input"),tt=p(),nt=c("fieldset"),et=c("div"),et.innerHTML='<button type="button" value="1"><span>1</span></button> \n                <button type="button" value="2"><span>2</span></button> \n                <button type="button" value="3"><span>3</span></button> \n                <button type="button" value="4"><span>4</span></button> \n                <button type="button" value="5"><span>5</span></button>',ot=p(),ut=c("div"),it=c("button"),it.innerHTML="<span>6</span>",lt=p(),at=c("button"),at.innerHTML="<span>*</span>",rt=p(),st=c("button"),st.innerHTML="<span>-1</span>",ct=p(),pt=c("button"),pt.innerHTML="<span>+1</span>",dt=p(),ft=c("button"),ft.innerHTML="<span>R</span>",this.c=t,f(l,"type","text"),f(v,"type","text"),f(y,"type","text"),f(m,"type","text"),f(k,"type","text"),f(w,"type","text"),f(L,"type","text"),f(T,"type","text"),f(C,"type","text"),f(z,"type","text"),f(O,"type","text"),f(j,"type","text"),f(P,"type","text"),P.disabled=!0,f(D,"type","text"),D.disabled=!0,f(G,"type","text"),G.disabled=!0,f(J,"type","text"),J.disabled=!0,f(Q,"type","text"),Q.disabled=!0,f(V,"type","text"),V.disabled=!0,f(X,"type","text"),X.disabled=!0,f(Z,"type","text"),Z.disabled=!0,f(i,"class","chain"),f(it,"type","button"),it.value="6",f(at,"type","button"),at.value="*",f(st,"type","button"),st.value="delete",f(pt,"type","button"),pt.value="add",f(ft,"type","button"),f(nt,"class","buttons"),f(e,"class","card")},m(t,o){r(t,e,o),a(e,u),a(u,i),a(i,l),h(l,n[0][0]),a(i,b),a(i,v),h(v,n[0][1]),a(i,g),a(i,y),h(y,n[0][2]),a(i,$),a(i,m),h(m,n[0][3]),a(i,x),a(i,k),h(k,n[0][4]),a(i,_),a(i,w),h(w,n[0][5]),a(i,E),a(i,L),h(L,n[0][6]),a(i,M),a(i,T),h(T,n[0][7]),a(i,H),a(i,C),h(C,n[0][8]),a(i,A),a(i,z),h(z,n[0][9]),a(i,S),a(i,O),h(O,n[0][10]),a(i,R),a(i,j),h(j,n[0][11]),a(i,N),a(i,P),h(P,n[0][12]),a(i,B),a(i,D),h(D,n[0][13]),a(i,F),a(i,G),h(G,n[0][14]),a(i,I),a(i,J),h(J,n[0][15]),a(i,K),a(i,Q),h(Q,n[0][16]),a(i,U),a(i,V),h(V,n[0][17]),a(i,W),a(i,X),h(X,n[0][18]),a(i,Y),a(i,Z),h(Z,n[0][19]),a(u,tt),a(u,nt),a(nt,et),a(nt,ot),a(nt,ut),a(ut,it),a(ut,lt),a(ut,at),a(ut,rt),a(ut,st),a(ut,ct),a(ut,pt),a(ut,dt),a(ut,ft),bt||(ht=[d(l,"input",n[2]),d(v,"input",n[3]),d(y,"input",n[4]),d(m,"input",n[5]),d(k,"input",n[6]),d(w,"input",n[7]),d(L,"input",n[8]),d(T,"input",n[9]),d(C,"input",n[10]),d(z,"input",n[11]),d(O,"input",n[12]),d(j,"input",n[13]),d(P,"input",n[14]),d(D,"input",n[15]),d(G,"input",n[16]),d(J,"input",n[17]),d(Q,"input",n[18]),d(V,"input",n[19]),d(X,"input",n[20]),d(Z,"input",n[21]),d(ft,"click",q),d(nt,"click",n[1])],bt=!0)},p(t,[n]){1&n&&l.value!==t[0][0]&&h(l,t[0][0]),1&n&&v.value!==t[0][1]&&h(v,t[0][1]),1&n&&y.value!==t[0][2]&&h(y,t[0][2]),1&n&&m.value!==t[0][3]&&h(m,t[0][3]),1&n&&k.value!==t[0][4]&&h(k,t[0][4]),1&n&&w.value!==t[0][5]&&h(w,t[0][5]),1&n&&L.value!==t[0][6]&&h(L,t[0][6]),1&n&&T.value!==t[0][7]&&h(T,t[0][7]),1&n&&C.value!==t[0][8]&&h(C,t[0][8]),1&n&&z.value!==t[0][9]&&h(z,t[0][9]),1&n&&O.value!==t[0][10]&&h(O,t[0][10]),1&n&&j.value!==t[0][11]&&h(j,t[0][11]),1&n&&P.value!==t[0][12]&&h(P,t[0][12]),1&n&&D.value!==t[0][13]&&h(D,t[0][13]),1&n&&G.value!==t[0][14]&&h(G,t[0][14]),1&n&&J.value!==t[0][15]&&h(J,t[0][15]),1&n&&Q.value!==t[0][16]&&h(Q,t[0][16]),1&n&&V.value!==t[0][17]&&h(V,t[0][17]),1&n&&X.value!==t[0][18]&&h(X,t[0][18]),1&n&&Z.value!==t[0][19]&&h(Z,t[0][19])},i:t,o:t,d(t){t&&s(e),bt=!1,o(ht)}}}function q(){confirm("Really reset?")&&window.location.reload()}function N(t,n,e){const o=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];let u=0;return[o,function(t){const n=t.target.offsetParent,i=n.querySelectorAll(".chain input")[u],l=t?.target?.closest("button")?.value;if(l)switch(l){case"delete":0!==u&&(e(0,o[u-1]=null,o),u-=1);break;case"add":!function(t){if(!t)return;const n=t.querySelector("[disabled]");n&&n.removeAttribute("disabled")}(n);break;default:i&&!i.disabled&&function(t){e(0,o[u]=t,o),u++}(l)}},function(){o[0]=this.value,e(0,o)},function(){o[1]=this.value,e(0,o)},function(){o[2]=this.value,e(0,o)},function(){o[3]=this.value,e(0,o)},function(){o[4]=this.value,e(0,o)},function(){o[5]=this.value,e(0,o)},function(){o[6]=this.value,e(0,o)},function(){o[7]=this.value,e(0,o)},function(){o[8]=this.value,e(0,o)},function(){o[9]=this.value,e(0,o)},function(){o[10]=this.value,e(0,o)},function(){o[11]=this.value,e(0,o)},function(){o[12]=this.value,e(0,o)},function(){o[13]=this.value,e(0,o)},function(){o[14]=this.value,e(0,o)},function(){o[15]=this.value,e(0,o)},function(){o[16]=this.value,e(0,o)},function(){o[17]=this.value,e(0,o)},function(){o[18]=this.value,e(0,o)},function(){o[19]=this.value,e(0,o)}]}function P(n){let e,o,u,i,l,d,h,g,y,$;return{c(){e=c("main"),o=c("em"),o.textContent=`${B}`,u=p(),i=c("uno-card"),l=p(),d=c("uno-card"),h=p(),g=c("uno-card"),y=p(),$=c("uno-card"),f(o,"class","version svelte-nob158"),b(i,"color","blue"),v(i,"--card-color","blue"),b(i,"class","svelte-nob158"),b(d,"color","red"),v(d,"--card-color","red"),b(d,"class","svelte-nob158"),b(g,"color","orange"),v(g,"--card-color","orange"),b(g,"class","svelte-nob158"),b($,"color","green"),v($,"--card-color","green"),b($,"class","svelte-nob158"),f(e,"class","svelte-nob158")},m(t,n){r(t,e,n),a(e,o),a(e,u),a(e,i),a(e,l),a(e,d),a(e,h),a(e,g),a(e,y),a(e,$)},p:t,i:t,o:t,d(t){t&&s(e)}}}customElements.define("uno-card",class extends R{constructor(t){super(),this.shadowRoot.innerHTML='<style>.card{--bg-color:white;--border-radius:5px;--border:3px solid black;box-sizing:border-box;display:flex;flex-direction:column;height:100%;padding:16px 32px 32px;position:relative}fieldset{border:none;padding:0}fieldset+fieldset{padding-top:15px}.chain{--grid-template-units:calc(var(--width-basis, 25vw)/5 - 15px);align-self:center;display:grid;grid-template-columns:repeat(4, var(--grid-template-units));grid-template-rows:repeat(5, var(--grid-template-units));gap:10px;margin-top:10px\n    }input{background-color:var(--bg-color);border:var(--border);border-radius:var(--border-radius);box-sizing:border-box;text-align:center;font-size:2rem;padding:0;pointer-events:none}.buttons div{display:flex;flex-direction:row;gap:3px}.buttons div+div{margin-top:10px}button{background-color:var(--bg-color);border:var(--border);border-radius:var(--border-radius);display:block;flex-basis:50px;height:50px;margin:0}button span{font-size:2rem}button[value="*"]{background-color:white;color:black}button[value="*"] span{font-size:3.5rem}button[value="delete"],button[value="add"]{background-color:black;color:white}[disabled]{background-color:transparent;border-style:dashed}</style>',O(this,{target:this.shadowRoot,props:g(this.attributes),customElement:!0},N,j,i,{},null),t&&t.target&&r(t.target,this,t.anchor)}});const B="1.0.5";return new class extends class{$destroy(){z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),O(this,t,null,P,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
