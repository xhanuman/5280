var ChatbotWidget=(()=>{var L=Object.defineProperty;var ye=Object.getOwnPropertyDescriptor;var be=Object.getOwnPropertyNames;var ke=Object.prototype.hasOwnProperty;var we=(t,e)=>{for(var o in e)L(t,o,{get:e[o],enumerable:!0})},Se=(t,e,o,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of be(e))!ke.call(t,n)&&n!==o&&L(t,n,{get:()=>e[n],enumerable:!(i=ye(e,n))||i.enumerable});return t};var $e=t=>Se(L({},"__esModule",{value:!0}),t);var Fe={};we(Fe,{default:()=>We});var U,m,oe,Ce,C,X,se,ie,ne,K,W,F,xe,P={},re=[],Me=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,V=Array.isArray;function w(t,e){for(var o in e)t[o]=e[o];return t}function J(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Q(t,e,o){var i,n,s,a={};for(s in e)s=="key"?i=e[s]:s=="ref"?n=e[s]:a[s]=e[s];if(arguments.length>2&&(a.children=arguments.length>3?U.call(arguments,2):o),typeof t=="function"&&t.defaultProps!=null)for(s in t.defaultProps)a[s]===void 0&&(a[s]=t.defaultProps[s]);return O(t,a,i,n,null)}function O(t,e,o,i,n){var s={type:t,props:e,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:n??++oe,__i:-1,__u:0};return n==null&&m.vnode!=null&&m.vnode(s),s}function N(t){return t.children}function M(t,e){this.props=t,this.context=e}function I(t,e){if(e==null)return t.__?I(t.__,t.__i+1):null;for(var o;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null)return o.__e;return typeof t.type=="function"?I(t):null}function ae(t){var e,o;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null){t.__e=t.__c.base=o.__e;break}return ae(t)}}function Z(t){(!t.__d&&(t.__d=!0)&&C.push(t)&&!B.__r++||X!=m.debounceRendering)&&((X=m.debounceRendering)||se)(B)}function B(){for(var t,e,o,i,n,s,a,c=1;C.length;)C.length>c&&C.sort(ie),t=C.shift(),c=C.length,t.__d&&(o=void 0,i=void 0,n=(i=(e=t).__v).__e,s=[],a=[],e.__P&&((o=w({},i)).__v=i.__v+1,m.vnode&&m.vnode(o),z(e.__P,o,i,e.__n,e.__P.namespaceURI,32&i.__u?[n]:null,s,n??I(i),!!(32&i.__u),a),o.__v=i.__v,o.__.__k[o.__i]=o,de(s,o,a),i.__e=i.__=null,o.__e!=n&&ae(o)));B.__r=0}function le(t,e,o,i,n,s,a,c,d,l,h){var r,p,_,v,b,y,f,g=i&&i.__k||re,S=e.length;for(d=Ie(o,e,g,d,S),r=0;r<S;r++)(_=o.__k[r])!=null&&(p=_.__i==-1?P:g[_.__i]||P,_.__i=r,y=z(t,_,p,n,s,a,c,d,l,h),v=_.__e,_.ref&&p.ref!=_.ref&&(p.ref&&Y(p.ref,null,_),h.push(_.ref,_.__c||v,_)),b==null&&v!=null&&(b=v),(f=!!(4&_.__u))||p.__k===_.__k?d=ce(_,d,t,f):typeof _.type=="function"&&y!==void 0?d=y:v&&(d=v.nextSibling),_.__u&=-7);return o.__e=b,d}function Ie(t,e,o,i,n){var s,a,c,d,l,h=o.length,r=h,p=0;for(t.__k=new Array(n),s=0;s<n;s++)(a=e[s])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=t.__k[s]=O(null,a,null,null,null):V(a)?a=t.__k[s]=O(N,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=t.__k[s]=O(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):t.__k[s]=a,d=s+p,a.__=t,a.__b=t.__b+1,c=null,(l=a.__i=Ae(a,o,d,r))!=-1&&(r--,(c=o[l])&&(c.__u|=2)),c==null||c.__v==null?(l==-1&&(n>h?p--:n<h&&p++),typeof a.type!="function"&&(a.__u|=4)):l!=d&&(l==d-1?p--:l==d+1?p++:(l>d?p--:p++,a.__u|=4))):t.__k[s]=null;if(r)for(s=0;s<h;s++)(c=o[s])!=null&&!(2&c.__u)&&(c.__e==i&&(i=I(c)),he(c,c));return i}function ce(t,e,o,i){var n,s;if(typeof t.type=="function"){for(n=t.__k,s=0;n&&s<n.length;s++)n[s]&&(n[s].__=t,e=ce(n[s],e,o,i));return e}t.__e!=e&&(i&&(e&&t.type&&!e.parentNode&&(e=I(t)),o.insertBefore(t.__e,e||null)),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Ae(t,e,o,i){var n,s,a,c=t.key,d=t.type,l=e[o],h=l!=null&&(2&l.__u)==0;if(l===null&&c==null||h&&c==l.key&&d==l.type)return o;if(i>(h?1:0)){for(n=o-1,s=o+1;n>=0||s<e.length;)if((l=e[a=n>=0?n--:s++])!=null&&!(2&l.__u)&&c==l.key&&d==l.type)return a}return-1}function ee(t,e,o){e[0]=="-"?t.setProperty(e,o??""):t[e]=o==null?"":typeof o!="number"||Me.test(e)?o:o+"px"}function D(t,e,o,i,n){var s,a;e:if(e=="style")if(typeof o=="string")t.style.cssText=o;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)o&&e in o||ee(t.style,e,"");if(o)for(e in o)i&&o[e]==i[e]||ee(t.style,e,o[e])}else if(e[0]=="o"&&e[1]=="n")s=e!=(e=e.replace(ne,"$1")),a=e.toLowerCase(),e=a in t||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+s]=o,o?i?o.u=i.u:(o.u=K,t.addEventListener(e,s?F:W,s)):t.removeEventListener(e,s?F:W,s);else{if(n=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=o??"";break e}catch{}typeof o=="function"||(o==null||o===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&o==1?"":o))}}function te(t){return function(e){if(this.l){var o=this.l[e.type+t];if(e.t==null)e.t=K++;else if(e.t<o.u)return;return o(m.event?m.event(e):e)}}}function z(t,e,o,i,n,s,a,c,d,l){var h,r,p,_,v,b,y,f,g,S,$,T,A,G,R,E,H,k=e.type;if(e.constructor!==void 0)return null;128&o.__u&&(d=!!(32&o.__u),s=[c=e.__e=o.__e]),(h=m.__b)&&h(e);e:if(typeof k=="function")try{if(f=e.props,g="prototype"in k&&k.prototype.render,S=(h=k.contextType)&&i[h.__c],$=h?S?S.props.value:h.__:i,o.__c?y=(r=e.__c=o.__c).__=r.__E:(g?e.__c=r=new k(f,$):(e.__c=r=new M(f,$),r.constructor=k,r.render=Pe),S&&S.sub(r),r.state||(r.state={}),r.__n=i,p=r.__d=!0,r.__h=[],r._sb=[]),g&&r.__s==null&&(r.__s=r.state),g&&k.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=w({},r.__s)),w(r.__s,k.getDerivedStateFromProps(f,r.__s))),_=r.props,v=r.state,r.__v=e,p)g&&k.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),g&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(g&&k.getDerivedStateFromProps==null&&f!==_&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(f,$),e.__v==o.__v||!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(f,r.__s,$)===!1){for(e.__v!=o.__v&&(r.props=f,r.state=r.__s,r.__d=!1),e.__e=o.__e,e.__k=o.__k,e.__k.some(function(x){x&&(x.__=e)}),T=0;T<r._sb.length;T++)r.__h.push(r._sb[T]);r._sb=[],r.__h.length&&a.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(f,r.__s,$),g&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(_,v,b)})}if(r.context=$,r.props=f,r.__P=t,r.__e=!1,A=m.__r,G=0,g){for(r.state=r.__s,r.__d=!1,A&&A(e),h=r.render(r.props,r.state,r.context),R=0;R<r._sb.length;R++)r.__h.push(r._sb[R]);r._sb=[]}else do r.__d=!1,A&&A(e),h=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++G<25);r.state=r.__s,r.getChildContext!=null&&(i=w(w({},i),r.getChildContext())),g&&!p&&r.getSnapshotBeforeUpdate!=null&&(b=r.getSnapshotBeforeUpdate(_,v)),E=h,h!=null&&h.type===N&&h.key==null&&(E=_e(h.props.children)),c=le(t,V(E)?E:[E],e,o,i,n,s,a,c,d,l),r.base=e.__e,e.__u&=-161,r.__h.length&&a.push(r),y&&(r.__E=r.__=null)}catch(x){if(e.__v=null,d||s!=null)if(x.then){for(e.__u|=d?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;s[s.indexOf(c)]=null,e.__e=c}else{for(H=s.length;H--;)J(s[H]);q(e)}else e.__e=o.__e,e.__k=o.__k,x.then||q(e);m.__e(x,e,o)}else s==null&&e.__v==o.__v?(e.__k=o.__k,e.__e=o.__e):c=e.__e=Ee(o.__e,e,o,i,n,s,a,d,l);return(h=m.diffed)&&h(e),128&e.__u?void 0:c}function q(t){t&&t.__c&&(t.__c.__e=!0),t&&t.__k&&t.__k.forEach(q)}function de(t,e,o){for(var i=0;i<o.length;i++)Y(o[i],o[++i],o[++i]);m.__c&&m.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(s){s.call(n)})}catch(s){m.__e(s,n.__v)}})}function _e(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:V(t)?t.map(_e):w({},t)}function Ee(t,e,o,i,n,s,a,c,d){var l,h,r,p,_,v,b,y=o.props||P,f=e.props,g=e.type;if(g=="svg"?n="http://www.w3.org/2000/svg":g=="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),s!=null){for(l=0;l<s.length;l++)if((_=s[l])&&"setAttribute"in _==!!g&&(g?_.localName==g:_.nodeType==3)){t=_,s[l]=null;break}}if(t==null){if(g==null)return document.createTextNode(f);t=document.createElementNS(n,g,f.is&&f),c&&(m.__m&&m.__m(e,s),c=!1),s=null}if(g==null)y===f||c&&t.data==f||(t.data=f);else{if(s=s&&U.call(t.childNodes),!c&&s!=null)for(y={},l=0;l<t.attributes.length;l++)y[(_=t.attributes[l]).name]=_.value;for(l in y)if(_=y[l],l!="children"){if(l=="dangerouslySetInnerHTML")r=_;else if(!(l in f)){if(l=="value"&&"defaultValue"in f||l=="checked"&&"defaultChecked"in f)continue;D(t,l,null,_,n)}}for(l in f)_=f[l],l=="children"?p=_:l=="dangerouslySetInnerHTML"?h=_:l=="value"?v=_:l=="checked"?b=_:c&&typeof _!="function"||y[l]===_||D(t,l,_,y[l],n);if(h)c||r&&(h.__html==r.__html||h.__html==t.innerHTML)||(t.innerHTML=h.__html),e.__k=[];else if(r&&(t.innerHTML=""),le(e.type=="template"?t.content:t,V(p)?p:[p],e,o,i,g=="foreignObject"?"http://www.w3.org/1999/xhtml":n,s,a,s?s[0]:o.__k&&I(o,0),c,d),s!=null)for(l=s.length;l--;)J(s[l]);c||(l="value",g=="progress"&&v==null?t.removeAttribute("value"):v!=null&&(v!==t[l]||g=="progress"&&!v||g=="option"&&v!=y[l])&&D(t,l,v,y[l],n),l="checked",b!=null&&b!=t[l]&&D(t,l,b,y[l],n))}return t}function Y(t,e,o){try{if(typeof t=="function"){var i=typeof t.__u=="function";i&&t.__u(),i&&e==null||(t.__u=t(e))}else t.current=e}catch(n){m.__e(n,o)}}function he(t,e,o){var i,n;if(m.unmount&&m.unmount(t),(i=t.ref)&&(i.current&&i.current!=t.__e||Y(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(s){m.__e(s,e)}i.base=i.__P=null}if(i=t.__k)for(n=0;n<i.length;n++)i[n]&&he(i[n],e,o||typeof t.type!="function");o||J(t.__e),t.__c=t.__=t.__e=void 0}function Pe(t,e,o){return this.constructor(t,o)}function ue(t,e,o){var i,n,s,a;e==document&&(e=document.documentElement),m.__&&m.__(t,e),n=(i=typeof o=="function")?null:o&&o.__k||e.__k,s=[],a=[],z(e,t=(!i&&o||e).__k=Q(N,null,[t]),n||P,P,e.namespaceURI,!i&&o?[o]:n?null:e.firstChild?U.call(e.childNodes):null,s,!i&&o?o:n?n.__e:e.firstChild,i,a),de(s,t,a)}U=re.slice,m={__e:function(t,e,o,i){for(var n,s,a;e=e.__;)if((n=e.__c)&&!n.__)try{if((s=n.constructor)&&s.getDerivedStateFromError!=null&&(n.setState(s.getDerivedStateFromError(t)),a=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t,i||{}),a=n.__d),a)return n.__E=n}catch(c){t=c}throw t}},oe=0,Ce=function(t){return t!=null&&t.constructor===void 0},M.prototype.setState=function(t,e){var o;o=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=w({},this.state),typeof t=="function"&&(t=t(w({},o),this.props)),t&&w(o,t),t!=null&&this.__v&&(e&&this._sb.push(e),Z(this))},M.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Z(this))},M.prototype.render=N,C=[],se=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ie=function(t,e){return t.__v.__b-e.__v.__b},B.__r=0,ne=/(PointerCapture)$|Capture$/i,K=0,W=te(!1),F=te(!0),xe=0;var ge=function(t,e,o,i){var n;e[0]=0;for(var s=1;s<e.length;s++){var a=e[s++],c=e[s]?(e[0]|=a?1:2,o[e[s++]]):e[++s];a===3?i[0]=c:a===4?i[1]=Object.assign(i[1]||{},c):a===5?(i[1]=i[1]||{})[e[++s]]=c:a===6?i[1][e[++s]]+=c+"":a?(n=t.apply(c,ge(t,c,o,["",null])),i.push(n),c[0]?e[0]|=2:(e[s-2]=0,e[s]=n)):i.push(c)}return i},pe=new Map;function fe(t){var e=pe.get(this);return e||(e=new Map,pe.set(this,e)),(e=ge(this,e.get(t)||(e.set(t,e=function(o){for(var i,n,s=1,a="",c="",d=[0],l=function(p){s===1&&(p||(a=a.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?d.push(0,p,a):s===3&&(p||a)?(d.push(3,p,a),s=2):s===2&&a==="..."&&p?d.push(4,p,0):s===2&&a&&!p?d.push(5,0,!0,a):s>=5&&((a||!p&&s===5)&&(d.push(s,0,a,n),s=6),p&&(d.push(s,p,0,n),s=6)),a=""},h=0;h<o.length;h++){h&&(s===1&&l(),l(h));for(var r=0;r<o[h].length;r++)i=o[h][r],s===1?i==="<"?(l(),d=[d],s=3):a+=i:s===4?a==="--"&&i===">"?(s=1,a=""):a=i+a[0]:c?i===c?c="":a+=i:i==='"'||i==="'"?c=i:i===">"?(l(),s=1):s&&(i==="="?(s=5,n=a,a=""):i==="/"&&(s<5||o[h][r+1]===">")?(l(),s===3&&(d=d[0]),s=d,(d=d[0]).push(2,0,s),s=0):i===" "||i==="	"||i===`
`||i==="\r"?(l(),s=2):a+=i),s===3&&a==="!--"&&(s=4,d=d[0])}return l(),d}(t)),e),arguments,[])).length>1?e:e[0]}var u=fe.bind(Q),Te="https://jovial-goat-211.convex.site/chat",Re="https://jovial-goat-211.convex.site/voice-chat",De="https://jovial-goat-211.convex.site/voicemail",Oe=60;function Be(){let t=["audio/webm;codecs=opus","audio/webm","audio/mp4","audio/ogg"];for(let e of t)if(typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))return e;return null}var Ue=()=>u`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,Ve=()=>u`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,Ne=()=>u`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor" opacity="0.15"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,me=()=>u`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>`,ve=()=>u`<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor"/></svg>`,je=()=>u`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;margin-right:4px;opacity:0.5"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>`,He=()=>u`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" opacity="0.2"/><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,Le=()=>u`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" opacity="0.15"/><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,j=class extends M{state={open:!1,messages:[{role:"bot",content:"\u{1F44B} Hi! I can answer questions about sprinkler systems in Denver. What can I help with?"}],input:"",loading:!1,sessionId:this.generateSessionId(),conversationHistory:[],error:null,recording:!1,recordingDuration:0,voicemailMode:!1,showVoicemailForm:!1,voicemailName:"",voicemailAddress:"",voicemailContactMethod:"",voicemailPhone:"",voicemailEmail:"",pendingAudioBase64:null,voiceSupported:typeof navigator<"u"&&!!navigator.mediaDevices,speakerOn:typeof localStorage<"u"&&localStorage.getItem("chatbot-speaker")!=="off"};_mediaRecorder=null;_audioChunks=[];_recordingTimer=null;_audioStream=null;_currentAudio=null;generateSessionId(){return`session_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}componentDidMount(){this.scrollToBottom(),typeof gtag<"u"&&gtag("event","chatbot_widget_loaded",{session_id:this.state.sessionId})}componentDidUpdate(e,o){o.messages.length!==this.state.messages.length&&this.scrollToBottom()}scrollToBottom(){this.messagesEnd&&this.messagesEnd.scrollIntoView({behavior:"smooth"})}async sendMessage(){if(!this.state.input.trim()||this.state.loading)return;let e=this.state.input.trim(),o=[...this.state.conversationHistory,{role:"user",content:e}].slice(-6);this.setState({messages:[...this.state.messages,{role:"user",content:e}],input:"",loading:!0,conversationHistory:o,error:null}),typeof gtag<"u"&&gtag("event","chatbot_message_sent",{message_length:e.length,session_id:this.state.sessionId});try{let i=await fetch(Te,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,session_id:this.state.sessionId,conversation_history:o,tts_enabled:this.state.speakerOn})});if(!i.ok)throw new Error(`Server error: ${i.status}`);let n=await i.json();if(n.error)throw new Error(n.error);let s={role:"bot",content:n.response},a=[...o,s].slice(-6);this.setState({messages:[...this.state.messages,s],conversationHistory:a,loading:!1}),n.audio_base64&&this.playAudio(n.audio_base64)}catch(i){console.error("Chat error:",i),this.setState({messages:[...this.state.messages,{role:"bot",content:"\u274C Sorry, something went wrong. Please try again or visit https://5280sprinklers.com/ to contact us directly."}],loading:!1,error:i.message}),typeof gtag<"u"&&gtag("event","chatbot_error",{error_message:i.message,session_id:this.state.sessionId})}}async startRecording(){if(this.state.recording||this.state.loading)return;let e=Be();if(!e){this.setState({messages:[...this.state.messages,{role:"bot",content:"Voice recording isn't available in your browser. You can still type your question."}]});return}try{let o=await navigator.mediaDevices.getUserMedia({audio:!0});this._audioStream=o,this._audioChunks=[];let i=new MediaRecorder(o,{mimeType:e});this._mediaRecorder=i,i.ondataavailable=n=>{n.data.size>0&&this._audioChunks.push(n.data)},i.onstop=()=>{let n=new Blob(this._audioChunks,{type:e});this.handleRecordingComplete(n)},i.start(250),this.setState({recording:!0,recordingDuration:0,error:null}),this._recordingTimer=setInterval(()=>{let n=this.state.recordingDuration+1;n>=Oe?this.stopRecording():this.setState({recordingDuration:n})},1e3)}catch(o){console.error("Microphone access error:",o),this.setState({messages:[...this.state.messages,{role:"bot",content:"Microphone access was denied. Please allow microphone access in your browser settings to use voice features."}]})}}stopRecording(){this._recordingTimer&&(clearInterval(this._recordingTimer),this._recordingTimer=null),this._mediaRecorder&&this._mediaRecorder.state!=="inactive"&&this._mediaRecorder.stop(),this._audioStream&&(this._audioStream.getTracks().forEach(e=>e.stop()),this._audioStream=null),this.setState({recording:!1})}toggleSpeaker(){let e=!this.state.speakerOn;this.setState({speakerOn:e}),typeof localStorage<"u"&&localStorage.setItem("chatbot-speaker",e?"on":"off"),e||(this._currentAudio&&(this._currentAudio.pause(),this._currentAudio=null),typeof speechSynthesis<"u"&&speechSynthesis.cancel())}playAudio(e){if(e)try{this._currentAudio&&this._currentAudio.pause();let o=new Audio(`data:audio/ogg;codecs=opus;base64,${e}`);this._currentAudio=o,o.play().catch(i=>{console.error("Audio playback failed:",i)})}catch(o){console.error("Audio playback error:",o)}}speakText(e){}convertBlobToBase64(e){return new Promise((o,i)=>{let n=new FileReader;n.onloadend=()=>{let a=n.result.split(",")[1];o(a)},n.onerror=i,n.readAsDataURL(e)})}async handleRecordingComplete(e){let o=await this.convertBlobToBase64(e);this.state.voicemailMode?this.setState({showVoicemailForm:!0,pendingAudioBase64:o}):await this.sendVoiceChat(o)}async sendVoiceChat(e){this.setState({loading:!0,error:null});try{let o=await fetch(Re,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({audio_base64:e,session_id:this.state.sessionId,conversation_history:this.state.conversationHistory,tts_enabled:!0})});if(!o.ok)throw new Error(`Server error: ${o.status}`);let i=await o.json();if(i.error)throw new Error(i.error);let n={role:"user",content:i.transcript,voice:!0},s={role:"bot",content:i.response},a=[...this.state.conversationHistory,{role:"user",content:i.transcript},s].slice(-6);this.setState({messages:[...this.state.messages,n,s],conversationHistory:a,loading:!1,speakerOn:!0}),i.audio_base64&&this.playAudio(i.audio_base64),typeof gtag<"u"&&gtag("event","chatbot_voice_message",{session_id:this.state.sessionId})}catch(o){console.error("Voice chat error:",o),this.setState({messages:[...this.state.messages,{role:"bot",content:"Couldn't process your voice message. Please try typing your question instead."}],loading:!1,error:o.message})}}async sendVoicemail(e,o){let i=[o];this.state.voicemailAddress&&i.push(`Address: ${this.state.voicemailAddress}`);let n=this.state.voicemailContactMethod;n==="text"?i.push(`Text: ${this.state.voicemailPhone}`):n==="email"&&i.push(`Email: ${this.state.voicemailEmail}`);let s=i.filter(Boolean).join(" | ");this.setState({loading:!0,showVoicemailForm:!1,pendingAudioBase64:null,error:null});try{let a=await fetch(De,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({audio_base64:e,session_id:this.state.sessionId,caller_name:s||void 0})});if(!a.ok)throw new Error(`Server error: ${a.status}`);let c=await a.json();this.setState({messages:[...this.state.messages,{role:"bot",content:"Your message has been sent! We'll review it and get back to you soon. In the meantime, feel free to ask any questions here."}],loading:!1,voicemailMode:!1,voicemailName:"",voicemailAddress:"",voicemailContactMethod:"",voicemailPhone:"",voicemailEmail:""}),typeof gtag<"u"&&gtag("event","chatbot_voicemail_sent",{session_id:this.state.sessionId})}catch(a){console.error("Voicemail error:",a),this.setState({messages:[...this.state.messages,{role:"bot",content:"Couldn't send your voicemail. Please try again or type your message instead."}],loading:!1,error:a.message})}}handleKeyPress(e){e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this.sendMessage())}linkify(e){let o=[],i=/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s]+)/g,n=0,s;for(;(s=i.exec(e))!==null;)s.index>n&&o.push(e.slice(n,s.index)),s[1]&&s[2]?o.push(u`<a href=${s[2]} target="_blank" rel="noopener noreferrer"><strong>${s[1]}</strong></a>`):s[3]?(o.push(" "),o.push(u`<a href=${s[3]} target="_blank" rel="noopener noreferrer">${s[3]}</a>`)):s[4]&&o.push(u`<a href=${s[4]} target="_blank" rel="noopener noreferrer">${s[4]}</a>`),n=s.index+s[0].length;return n<e.length&&o.push(e.slice(n)),o}toggleWidget(){let e=!this.state.open;this.setState({open:e}),typeof gtag<"u"&&gtag("event",e?"chatbot_opened":"chatbot_closed",{session_id:this.state.sessionId})}render(){return u`
      <div class="chatbot-container">
        ${this.state.open?u`
          <!-- Chat Window (open state) -->
          <div class="chatbot-window">
            <!-- Header -->
            <div class="chatbot-header">
              <span class="chatbot-title">5280 Sprinklers Chat</span>
              <div class="chatbot-header-actions">
                <button
                  class="chatbot-speaker-toggle ${this.state.speakerOn?"on":"off"}"
                  onClick=${()=>this.toggleSpeaker()}
                  aria-label=${this.state.speakerOn?"Turn off voice responses":"Turn on voice responses"}
                  title=${this.state.speakerOn?"Voice responses on":"Voice responses off"}
                >
                  ${this.state.speakerOn?u`<${He} />`:u`<${Le} />`}
                </button>
                <button
                  class="chatbot-close"
                  onClick=${()=>this.toggleWidget()}
                  aria-label="Close chat"
                  title="Close chat"
                >
                  <${Ve} />
                </button>
              </div>
            </div>

            <!-- Messages Container -->
            <div class="chatbot-messages">
              ${this.state.messages.map((e,o)=>u`
                <div key=${o} class="message message-${e.role}">
                  <div class="message-content">
                    ${e.voice?u`<${je} />`:""}${this.linkify(e.content)}
                  </div>
                </div>
              `)}

              ${this.state.loading&&u`
                <div class="message message-bot">
                  <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              `}

              <!-- Scroll anchor -->
              <div ref=${e=>{this.messagesEnd=e}} />
            </div>

            ${this.state.voicemailMode?u`
              <!-- ── VOICEMAIL MODE ── -->

              <!-- After recording: confirm & send form -->
              ${this.state.showVoicemailForm?u`
                <div class="voicemail-form">
                  <div class="voicemail-form-text">How should we get back to you?<br/><span class="voicemail-form-note">Note: Appointment bookings are made through our website only.</span></div>
                  <input
                    type="text"
                    placeholder="Your name *"
                    value=${this.state.voicemailName}
                    onInput=${e=>this.setState({voicemailName:e.target.value})}
                    class="voicemail-field"
                  />
                  <input
                    type="text"
                    placeholder="Service address *"
                    value=${this.state.voicemailAddress||""}
                    onInput=${e=>this.setState({voicemailAddress:e.target.value})}
                    class="voicemail-field"
                  />
                  <div class="voicemail-form-text voicemail-prefer-label">Preferred response method:</div>
                  <div class="voicemail-contact-options">
                    <button
                      class="voicemail-contact-opt ${this.state.voicemailContactMethod==="text"?"selected":""}"
                      onClick=${()=>this.setState({voicemailContactMethod:"text"})}
                    >Text</button>
                    <button
                      class="voicemail-contact-opt ${this.state.voicemailContactMethod==="email"?"selected":""}"
                      onClick=${()=>this.setState({voicemailContactMethod:"email"})}
                    >Email</button>
                  </div>
                  ${this.state.voicemailContactMethod==="text"?u`
                    <input
                      type="tel"
                      placeholder="Mobile number *"
                      value=${this.state.voicemailPhone||""}
                      onInput=${e=>this.setState({voicemailPhone:e.target.value})}
                      class="voicemail-field"
                    />
                  `:""}
                  ${this.state.voicemailContactMethod==="email"?u`
                    <input
                      type="email"
                      placeholder="Email address *"
                      value=${this.state.voicemailEmail||""}
                      onInput=${e=>this.setState({voicemailEmail:e.target.value})}
                      class="voicemail-field"
                    />
                  `:""}
                  <div class="voicemail-form-buttons">
                    <button class="voicemail-cancel" onClick=${()=>this.setState({showVoicemailForm:!1,pendingAudioBase64:null})}>Re-record</button>
                    <button
                      class="voicemail-send"
                      onClick=${()=>this.sendVoicemail(this.state.pendingAudioBase64,this.state.voicemailName)}
                      disabled=${!this.state.voicemailName.trim()||(this.state.voicemailAddress||"").trim().length<5||!this.state.voicemailContactMethod||this.state.voicemailContactMethod==="text"&&(this.state.voicemailPhone||"").replace(/\D/g,"").length<10||this.state.voicemailContactMethod==="email"&&!/^[^@]+@[^@]+\.[^@]+$/.test(this.state.voicemailEmail||"")}
                    >Send message</button>
                  </div>
                </div>

              <!-- While recording: show bar + stop -->
              `:this.state.recording?u`
                <div class="chatbot-recording-bar">
                  <span class="recording-dot"></span>
                  <span class="recording-time">${Math.floor(this.state.recordingDuration/60)}:${String(this.state.recordingDuration%60).padStart(2,"0")}</span>
                  <span class="recording-label">Recording your message...</span>
                  <span class="recording-spacer"></span>
                  <button
                    class="voicemail-stop-btn"
                    onClick=${()=>this.stopRecording()}
                  >
                    <${ve} /> Done
                  </button>
                </div>

              <!-- Idle: show record prompt -->
              `:u`
                <div class="voicemail-prompt">
                  <div class="voicemail-prompt-text">Leave us a voice message -- we'll ask for your details after!</div>
                  <button
                    class="voicemail-record-btn"
                    onClick=${()=>this.startRecording()}
                    disabled=${this.state.loading}
                  >
                    <${me} /> Record message
                  </button>
                </div>
              `}

              <!-- Cancel / back link -->
              ${!this.state.recording&&u`
                <div class="voicemail-toggle">
                  <button
                    class="voicemail-toggle-btn active"
                    onClick=${()=>this.setState({voicemailMode:!1,showVoicemailForm:!1,pendingAudioBase64:null})}
                    disabled=${this.state.loading}
                  >
                    Back to Q&A
                  </button>
                </div>
              `}

            `:u`
              <!-- ── Q&A MODE ── -->

              <!-- Recording bar (voice Q&A) -->
              ${this.state.recording&&u`
                <div class="chatbot-recording-bar">
                  <span class="recording-dot"></span>
                  <span class="recording-time">${Math.floor(this.state.recordingDuration/60)}:${String(this.state.recordingDuration%60).padStart(2,"0")}</span>
                  <span class="recording-label">Listening...</span>
                </div>
              `}

              <!-- Input Area -->
              <div class="chatbot-input">
                ${this.state.recording?u`
                  <div class="recording-spacer"></div>
                `:u`
                  <input
                    type="text"
                    placeholder="Ask a question..."
                    value=${this.state.input}
                    onInput=${e=>this.setState({input:e.target.value})}
                    onKeyPress=${e=>this.handleKeyPress(e)}
                    disabled=${this.state.loading}
                    aria-label="Type your question"
                  />
                  <button
                    onClick=${()=>this.sendMessage()}
                    disabled=${this.state.loading||!this.state.input.trim()}
                    aria-label="Send message"
                    title="Send"
                  >
                    ${this.state.loading?u`<span class="loading-dots">...</span>`:u`<${Ne} />`}
                  </button>
                `}
                ${this.state.voiceSupported&&u`
                  <button
                    class="chatbot-mic ${this.state.recording?"recording":""}"
                    onClick=${()=>this.state.recording?this.stopRecording():this.startRecording()}
                    disabled=${this.state.loading}
                    aria-label=${this.state.recording?"Stop recording":"Ask with voice"}
                  >
                    ${this.state.recording?u`<${ve} /><span class="mic-label">Stop</span>`:u`<${me} /><span class="mic-label">Voice</span>`}
                  </button>
                `}
              </div>

              <!-- Voicemail link -->
              ${!this.state.recording&&this.state.voiceSupported&&u`
                <div class="voicemail-toggle">
                  <button
                    class="voicemail-toggle-btn"
                    onClick=${()=>this.setState({voicemailMode:!0})}
                    disabled=${this.state.loading}
                  >
                    Or leave a voicemail
                  </button>
                </div>
              `}
            `}

            ${this.state.error&&u`
              <div class="chatbot-error">
                Error: ${this.state.error}
              </div>
            `}
          </div>
        `:u`
          <!-- Chat Bubble (closed state) -->
          <button
            class="chatbot-bubble"
            onClick=${()=>this.toggleWidget()}
            aria-label="Open chat"
            title="Chat with us about sprinkler systems"
          >
            <${Ue} />
          </button>
        `}
      </div>
    `}};if(typeof document<"u"){let t=document.getElementById("chatbot-root");t?ue(u`<${j} />`,t):console.error("Chatbot: #chatbot-root element not found")}var We=j;return $e(Fe);})();
