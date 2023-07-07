"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1005],{85019:function(e,n,t){var r=t(21831),i=t(82394),o=t(12691),c=t.n(o),d=t(82684),l=t(34376),a=t(57639),u=t(34744),s=t(93461),f=t(67971),h=t(882),p=t(11135),g=t(86673),m=t(19711),v=t(46261),b=t(10503),x=t(72454),y=t(99994),w=t(49125),j=t(28598);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Z=3*w.iI,I=[{id:"main",items:[{Icon:b.G6,id:"overview",label:function(){return"Overview"},linkProps:{href:"/overview"}},{Icon:b.vd,id:"pipelines",label:function(){return"Pipelines"},linkProps:{href:"/pipelines"}},{Icon:b.Bf,id:"triggers",label:function(){return"Triggers"},linkProps:{href:"/triggers"}},{Icon:b.Pf,id:"pipeline-runs",label:function(){return"Pipelines runs"},linkProps:{href:"/pipeline-runs"}}]},{id:"misc",items:[{Icon:b.$l,id:"files",label:function(){return"Files"},linkProps:{href:"/files"}},{Icon:b.Pt,id:"version-control",label:function(){return"Version control (beta)"},linkProps:{href:"/version-control"}},{Icon:b.oI,id:"terminal",label:function(){return"Terminal"},linkProps:{href:"/terminal"}},{Icon:b.Zr,id:"settings",label:function(){return"Settings"},linkProps:{href:"/settings"}}]}];n.Z=function(e){var n=e.aligned,t=e.navigationItems,i=e.showMore,o=e.visible,b=(0,l.useRouter)().pathname,k=(0,d.useCallback)((function(e,t){var r,d,l,a=e.Icon,u=e.IconSelected,k=e.disabled,I=e.id,P=e.isSelected,C=e.label,_=e.linkProps,S=e.onClick,E=P?P(b,e):!!b.match(new RegExp("^/".concat(I,"[/]*"))),M=E&&u?u:a,N=null===C||void 0===C?void 0:C(),z={primary:!M,selected:i&&E,showMore:i,withGradient:u};E&&u?(d=(0,j.jsx)("div",{style:{height:Z,width:Z},children:(0,j.jsx)(M,{muted:!0,size:Z})}),(i||o)&&(d=(0,j.jsx)(x.E7,O(O({},z),{},{children:(0,j.jsx)(M,{muted:!0,size:Z})}))),r=(0,j.jsx)(h.Z,{backgroundGradient:y.yr,backgroundPanel:!0,basic:!0,borderWidth:2,disabled:k,linkProps:_,onClick:S,paddingUnits:1,children:d}),i&&(r=d)):(!E||E&&!u)&&(d=(0,j.jsx)(x.E7,O(O({},z),{},{children:M?(0,j.jsx)(M,{muted:!E,size:Z}):(0,j.jsx)(m.ZP,{children:"Edit"})})),r=(0,j.jsx)(p.ZP,{disabled:k,inline:!0,linkProps:_,noHoverUnderline:!0,noPadding:!0,onClick:S,primary:E,sameColorAsText:!0,uuid:"VerticalNavigation/".concat(I),children:d}),i&&(r=d)),l="right"===n?(0,j.jsxs)(f.Z,{alignItems:"center",fullWidth:!0,justifyContent:"flex-end",children:[(0,j.jsx)(s.Z,{flex:1,justifyContent:"flex-end",children:(0,j.jsx)(m.ZP,{noWrapping:!0,children:N})}),(0,j.jsx)(g.Z,{mr:2}),d]}):(0,j.jsxs)(f.Z,{alignItems:"center",children:[d,(0,j.jsx)(g.Z,{mr:2}),(0,j.jsx)(s.Z,{flex:1,children:(0,j.jsx)(m.ZP,{noWrapping:!0,children:N})})]});var B,D=(0,j.jsx)(x.J8,{href:"#",onClick:S,selected:E,children:l});return _&&(D=(0,j.jsx)(c(),O(O({},_),{},{passHref:!0,children:D}))),"right"===n&&(r=(0,j.jsx)(f.Z,{alignItems:"center",fullWidth:!0,justifyContent:"flex-end",children:r})),B=o?D:i?r:(0,j.jsx)(v.Z,{appearBefore:"right"===n,height:5*w.iI,label:N,size:null,widthFitContent:!0,children:r}),(0,j.jsx)(g.Z,{mt:i&&o?0:t>=1?w.cd:0,children:B},"button-".concat(I))}),[n,b,i,o]),P=(0,d.useMemo)((function(){var e=[];return(t||I).forEach((function(n,t){var i=n.id,c=n.items;(null===c||void 0===c?void 0:c.length)>=1?(t>=1&&e.push((0,j.jsx)(g.Z,{my:o?w.cd:w.cd+1,children:(0,j.jsx)(u.Z,{light:!0})},i)),e.push.apply(e,(0,r.Z)(c.map((function(e,n){return k(e,n)}))))):e.push(k(n,t))})),e}),[k,t,o]);return(0,j.jsx)(a.Z,{children:P})}},72454:function(e,n,t){t.d(n,{E7:function(){return b},HS:function(){return v},Hn:function(){return y},J8:function(){return x},Nk:function(){return p},k1:function(){return h},lm:function(){return m}});var r=t(82684),i=t(38626),o=t(86673),c=t(23831),d=t(73942),l=t(3055),a=t(49125),u=t(37391),s=t(90880),f=t(28598),h=a.cd*a.iI+5*a.iI+a.cd*a.iI+1,p=i.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-ecogjt-0"})(["display:flex;flex-direction:row;height:calc(100vh - ","px);position:fixed;top:","px;width:100%;",""],l.Mz,l.Mz,(function(e){return"\n    background-color: ".concat((e.theme.background||c.Z.background).page,";\n  ")})),g=i.default.div.withConfig({displayName:"indexstyle__VerticalNavigationStyleComponent",componentId:"sc-ecogjt-1"})(["height:100%;"," "," "," @keyframes animate-in{0%{width:","px;}100%{width:","px;}}"," ",""],(function(e){return"\n    background-color: ".concat((e.theme.background||c.Z.background).panel,";\n  ")}),(function(e){return!e.borderless&&"right"!==e.aligned&&"\n    border-right: 1px solid ".concat((e.theme.borders||c.Z.borders).medium,";\n  ")}),(function(e){return!e.borderless&&"right"===e.aligned&&"\n    border-left: 1px solid ".concat((e.theme.borders||c.Z.borders).medium,";\n  ")}),21*a.iI,34*a.iI,(function(e){return e.showMore&&e.visible&&"\n    &:hover {\n      animation: animate-in 100ms linear forwards;\n      position: fixed;\n      z-index: 100;\n    }\n  "}),(function(e){return e.showMore&&e.visible&&"right"===e.aligned&&"\n    &:hover {\n      right: 0;\n      top: ".concat(l.Mz,"px;\n    }\n  ")}));function m(e){var n=e.aligned,t=e.borderless,i=e.children,c=e.showMore,d=(0,r.useRef)(null),l=(0,r.useState)(!1),u=l[0],s=l[1];return(0,f.jsx)(g,{aligned:n,borderless:t&&!u,onMouseEnter:c?function(){clearTimeout(d.current),d.current=setTimeout((function(){s(!0)}),300)}:null,onMouseLeave:c?function(){clearTimeout(d.current),s(!1)}:null,showMore:c,visible:u,children:(0,f.jsx)(o.Z,{px:c&&u?0:a.cd,py:c&&u?1:a.cd,children:r.cloneElement(i,{showMore:c,visible:u})})})}var v=i.default.div.withConfig({displayName:"indexstyle__SubheaderStyle",componentId:"sc-ecogjt-2"})(["padding:","px;position:sticky;top:0;width:100%;z-index:3;",""],a.cd*a.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||c.Z.background).page,";\n    border-bottom: 1px solid ").concat((e.theme.borders||c.Z.borders).medium,";\n  ")})),b=(i.default.div.withConfig({displayName:"indexstyle__ContentStyle",componentId:"sc-ecogjt-3"})([""," overflow:auto;",""],u.w5,(function(e){return"\n    height: calc(100vh - ".concat(l.Mz+(e.heightOffset||0),"px);\n  ")})),i.default.div.withConfig({displayName:"indexstyle__NavigationItemStyle",componentId:"sc-ecogjt-4"})(["align-items:center;border-radius:","px;display:flex;height:","px;justify-content:center;padding:","px;width:","px;"," "," "," ",""],d.n_,5*a.iI,a.iI,5*a.iI,(function(e){return e.primary&&"\n    ".concat((0,s.eR)(),"\n    background: ").concat((e.theme||c.Z).chart.backgroundPrimary,";\n    border: 1px solid ").concat((e.theme||c.Z).feature.active,";\n\n    &:hover {\n      background-color: ").concat((e.theme||c.Z).interactive.linkSecondary,";\n    }\n  ")}),(function(e){return e.selected&&!e.withGradient&&"\n    background-color: ".concat((e.theme.interactive||c.Z.interactive).linkPrimary,";\n  ")}),(function(e){return e.selected&&e.withGradient&&"\n    background-color: ".concat((e.theme.background||c.Z.background).codeTextarea,";\n  ")}),(function(e){return!e.selected&&e.showMore&&"\n    background-color: ".concat((e.theme.interactive||c.Z.interactive).defaultBackground,";\n  ")}))),x=i.default.a.withConfig({displayName:"indexstyle__NavigationLinkStyle",componentId:"sc-ecogjt-5"})([""," display:block;padding:","px ","px;"," ",""],(0,s.eR)(),1*a.iI,a.iI*a.cd,(function(e){return!e.selected&&"\n    &:hover {\n      background-color: ".concat((e.theme.interactive||c.Z.interactive).hoverBackground,";\n    }\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||c.Z.interactive).linkPrimaryHover,";\n  ")})),y=i.default.div.withConfig({displayName:"indexstyle__ImageStyle",componentId:"sc-ecogjt-6"})(["background-position:0 0;background-repeat:no-repeat;background-size:contain;height:","px;width:","px;"," ",""],12*a.iI,12*a.iI,(function(e){return"\n    background-image: url(".concat(e.imageUrl,");\n  ")}),(function(e){return e.size&&"\n    height: ".concat(e.size,"px;\n    width: ").concat(e.size,"px;\n  ")}))},82386:function(e,n,t){t.d(n,{E$:function(){return C},MK:function(){return b},MP:function(){return Z},Md:function(){return u},OM:function(){return m},Ru:function(){return I},S9:function(){return B},VW:function(){return h},W7:function(){return j},Wi:function(){return g},YJ:function(){return O},Zj:function(){return M},Zt:function(){return a},aH:function(){return E},bC:function(){return N},dN:function(){return s},ff:function(){return P},l8:function(){return p},lU:function(){return z},rS:function(){return S},uX:function(){return v},v7:function(){return _},ve:function(){return f},ym:function(){return k}});var r=t(38626),i=t(23831),o=t(73942),c=t(3055),d=t(49125),l=t(37391),a=64*d.iI,u=30*d.iI,s=21.25*d.iI,f=35*d.iI,h=.5*d.iI,p=13*d.iI,g=3*d.cd*d.iI,m=6*d.iI,v=2*d.cd*3*d.iI,b=(r.default.div.withConfig({displayName:"indexstyle__HeaderStyle",componentId:"sc-1lxpneo-0"})(["position:fixed;z-index:3;"," "," ",""],(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme.monotone||i.Z.monotone).grey200,";\n  ")}),(function(e){return!e.beforeVisible&&"\n    width: 100%;\n  "}),(function(e){return e.beforeVisible&&"\n    left: ".concat(f,"px;\n    width: calc(100% - ").concat(f,"px);\n  ")})),r.default.div.withConfig({displayName:"indexstyle__NewHeaderStyle",componentId:"sc-1lxpneo-1"})(["height:","px;position:fixed;top:0;width:100%;z-index:4;"],c.Mz)),x=(r.default.div.withConfig({displayName:"indexstyle__TabStyle",componentId:"sc-1lxpneo-2"})(["border-top-left-radius:","px;border-top-right-radius:","px;padding:","px ","px;position:relative;top:1px;"," "," ",""],o.n_,o.n_,1*d.iI,2*d.iI,(function(e){return"\n    border-left: 1px solid ".concat((e.theme.monotone||i.Z.monotone).grey200,";\n    border-right: 1px solid ").concat((e.theme.monotone||i.Z.monotone).grey200,";\n    border-top: 1px solid ").concat((e.theme.monotone||i.Z.monotone).grey200,";\n  ")}),(function(e){return!e.first&&"\n    margin-left: ".concat(1*d.iI,"px;\n  ")}),(function(e){return e.selected&&"\n    border-bottom: 1px solid ".concat((e.theme.monotone||i.Z.monotone).white,";\n  ")})),(0,r.css)(["position:fixed;z-index:2;",""],(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).panel,";\n    height: calc(100% - ").concat("undefined"===typeof e.heightOffset?v:e.heightOffset,"px);\n    top: ").concat("undefined"===typeof e.heightOffset?v:e.heightOffset,"px;\n  ")}))),y=(0,r.css)([""," height:100%;overflow:auto;position:relative;z-index:2;",""],l.w5,(function(e){return e.verticalOffset&&"\n    height: calc(100% - ".concat(e.verticalOffset,"px);\n    top: ").concat(e.verticalOffset,"px;\n  ")})),w=(0,r.css)(["height:calc(100% + ","px);position:absolute;top:-","px;width:","px;z-index:6;&:hover{","}"," ",""],g,g,h,(function(e){return!e.disabled&&"\n      border-color: ".concat((e.theme.text||i.Z.text).fileBrowser," !important;\n    ")}),(function(e){return!e.disabled&&"\n    cursor: col-resize;\n  "}),(function(e){return e.active&&!e.disabled&&"\n    border-color: ".concat((e.theme.text||i.Z.text).fileBrowser," !important;\n  ")})),j=r.default.div.withConfig({displayName:"indexstyle__AsideHeaderStyle",componentId:"sc-1lxpneo-3"})(["border-bottom:1px solid transparent;height:","px;position:fixed;top:","px;z-index:4;"," "," ",""],m,g,(0,l.y$)(),(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).panel,";\n  ")}),(function(e){return!e.visible&&"\n    border-left: 1px solid transparent;\n    border-right: 1px solid transparent;\n    border-bottom-color: ".concat((e.theme.borders||i.Z.borders).medium," !important;\n  ")})),k=r.default.div.withConfig({displayName:"indexstyle__AsideHeaderInnerStyle",componentId:"sc-1lxpneo-4"})(["display:flex;flex:1;overflow:auto;padding:0 ","px;"," ",""],2*d.iI,(0,l.y$)(),(function(e){return e.noPadding&&"\n    padding: 0;\n  "})),O=r.default.div.withConfig({displayName:"indexstyle__AsideSubheaderStyle",componentId:"sc-1lxpneo-5"})(["border-bottom:1px solid transparent;height:","px;overflow-x:auto;position:absolute;top:","px;"," "," ",""],g,g,(0,l.y$)(),(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).table,";\n  ")}),(function(e){return!e.visible&&"\n    border-color: ".concat((e.theme.borders||i.Z.borders).medium," !important;\n  ")})),Z=r.default.aside.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-1lxpneo-6"})([""," left:0;"],x),I=r.default.div.withConfig({displayName:"indexstyle__BeforeInnerStyle",componentId:"sc-1lxpneo-7"})([""," overflow:hidden;&:hover{overflow:auto;}"],y),P=r.default.aside.withConfig({displayName:"indexstyle__AfterStyle",componentId:"sc-1lxpneo-8"})([""," right:0;"],x),C=r.default.div.withConfig({displayName:"indexstyle__AfterInnerStyle",componentId:"sc-1lxpneo-9"})([""," ",""],y,(function(e){return e.overflow&&"\n    overflow: ".concat(e.overflow,";\n  ")})),_=r.default.div.withConfig({displayName:"indexstyle__DraggableStyle",componentId:"sc-1lxpneo-10"})([""," "," ",""],w,(function(e){return"undefined"!==typeof e.left&&"\n    border-left: 1px solid ".concat((e.theme.borders||i.Z.borders).medium,";\n    left: ").concat(e.left,"px;\n  ")}),(function(e){return"undefined"!==typeof e.right&&"\n    border-right: 1px solid ".concat((e.theme.borders||i.Z.borders).medium,";\n    right: ").concat(e.right,"px;\n  ")})),S=r.default.div.withConfig({displayName:"indexstyle__MainWrapper",componentId:"sc-1lxpneo-11"})(["height:100%;position:fixed;z-index:1;",""],(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).codeArea,";\n  ")})),E=r.default.div.withConfig({displayName:"indexstyle__MainContentStyle",componentId:"sc-1lxpneo-12"})(["position:fixed;z-index:2;",""],(function(e){return"\n    height: calc(100% - ".concat(e.headerOffset||0,"px);\n    top: ").concat(e.headerOffset||0,"px;\n  ")})),M=r.default.div.withConfig({displayName:"indexstyle__MainContentInnerStyle",componentId:"sc-1lxpneo-13"})([""," height:100%;overflow:auto;"],l.w5),N=r.default.div.withConfig({displayName:"indexstyle__NavigationStyle",componentId:"sc-1lxpneo-14"})(["position:relative;"]),z=r.default.div.withConfig({displayName:"indexstyle__NavigationInnerStyle",componentId:"sc-1lxpneo-15"})(["height:100%;position:fixed;z-index:6;"," ",""],(function(e){return"left"===e.aligned&&"\n    border-right: 1px solid ".concat((e.theme.borders||i.Z.borders).medium,";\n    left: 0;\n  ")}),(function(e){return"right"===e.aligned&&"\n    border-left: 1px solid ".concat((e.theme.borders||i.Z.borders).medium,";\n    right: 0;\n  ")})),B=r.default.div.withConfig({displayName:"indexstyle__NavigationContainerStyle",componentId:"sc-1lxpneo-16"})([""," overflow:auto;position:absolute;width:fit-content;"," "," "," ",""],l.w5,(function(e){return"\n    height: calc(100vh - ".concat(e.heightOffset,"px);\n  ")}),(function(e){return e.fullWidth&&"\n    width: calc(100% - ".concat(e.widthOffset||0,"px);\n  ")}),(function(e){return e.widthOffset&&"left"===e.aligned&&"\n    left: ".concat(e.widthOffset,"px;\n  ")}),(function(e){return e.widthOffset&&"right"===e.aligned&&"\n    right: ".concat(e.widthOffset,"px;\n  ")}))},32063:function(e,n,t){var r=t(82684),i=t(1887),o=t.n(i),c=t(60328),d=t(57639),l=t(93461),a=t(67971),u=t(86673),s=t(46261),f=t(85019),h=t(82386),p=t(10503),g=t(91427),m=t(49125),v=t(72454),b=t(24141),x=t(28598);n.Z=function(e){var n=e.after,t=e.afterHeader,i=e.afterHeightOffset,y=e.afterHidden,w=e.afterMousedownActive,j=e.afterNavigationItems,k=e.afterOverflow,O=e.afterSubheader,Z=e.afterWidth,I=void 0===Z?0:Z,P=e.before,C=e.beforeHeader,_=e.beforeHeightOffset,S=e.beforeHidden,E=e.beforeMousedownActive,M=e.beforeNavigationItems,N=e.beforeWidth,z=void 0===N?0:N,B=e.children,D=e.header,W=e.headerOffset,H=void 0===W?0:W,A=e.hideAfterCompletely,R=e.leftOffset,F=void 0===R?0:R,L=e.mainContainerHeader,T=e.mainContainerRef,U=e.navigationShowMore,V=e.setAfterHidden,G=e.setAfterMousedownActive,$=e.setAfterWidth,X=e.setBeforeHidden,q=e.setBeforeMousedownActive,J=e.setBeforeWidth,Y=(e.uuid,(0,b.i)().width),K=(0,r.useRef)(null),Q=(0,r.useRef)(null),ee=(0,r.useRef)(null),ne=(0,r.useRef)(null),te=(0,r.useCallback)((function(){var e=!y;null===V||void 0===V||V(e),(0,g.t8)(g.zg,e)}),[y,V]),re=(0,r.useCallback)((function(){var e=!S;X(e),(0,g.t8)(g.Uu,e)}),[S,X]);(0,r.useEffect)((function(){var e,n,t,r,i=function(e){var n,t;((null===ee||void 0===ee||null===(n=ee.current)||void 0===n||null===(t=n.getBoundingClientRect)||void 0===t?void 0:t.call(n))||{}).x;if(Y){var r=e.x;r+h.l8>Y-I&&(r=Y-I-h.l8),r-=2*F,J(Math.max(r,h.dN))}},o=function(e){var n,t;e.offsetX>=e.target.offsetWidth-h.VW&&e.offsetX<=e.target.offsetWidth+h.VW&&(null===q||void 0===q||q(!0),e.preventDefault(),null===(n=document)||void 0===n||null===(t=n.addEventListener)||void 0===t||t.call(n,"mousemove",i,!1))},c=function(){var e,n;null===q||void 0===q||q(!1),null===(e=document)||void 0===e||null===(n=e.removeEventListener)||void 0===n||n.call(e,"mousemove",i,!1)};return null===ne||void 0===ne||null===(e=ne.current)||void 0===e||null===(n=e.addEventListener)||void 0===n||n.call(e,"mousedown",o,!1),null===(t=document)||void 0===t||null===(r=t.addEventListener)||void 0===r||r.call(t,"mouseup",c,!1),function(){var e,n,t,r;null===ne||void 0===ne||null===(e=ne.current)||void 0===e||null===(n=e.removeEventListener)||void 0===n||n.call(e,"mousedown",o,!1),null===(t=document)||void 0===t||null===(r=t.removeEventListener)||void 0===r||r.call(t,"mouseup",c,!1),c()}}),[I,S,F,ee,ne,q,J,Y]),(0,r.useEffect)((function(){var e,n,t,r,i=function(e){var n,t;((null===K||void 0===K||null===(n=K.current)||void 0===n||null===(t=n.getBoundingClientRect)||void 0===t?void 0:t.call(n))||{}).x;if(Y){var r=Y-e.x;r+h.l8>Y-z&&(r=Y-z-h.l8),$(Math.max(r,h.Md))}},o=function(e){var n,t;e.offsetX>=-1*h.VW&&e.offsetX<=h.VW&&(null===G||void 0===G||G(!0),e.preventDefault(),null===(n=document)||void 0===n||null===(t=n.addEventListener)||void 0===t||t.call(n,"mousemove",i,!1))},c=function(){var e,n;null===G||void 0===G||G(!1),null===(e=document)||void 0===e||null===(n=e.removeEventListener)||void 0===n||n.call(e,"mousemove",i,!1)};return null===Q||void 0===Q||null===(e=Q.current)||void 0===e||null===(n=e.addEventListener)||void 0===n||n.call(e,"mousedown",o,!1),null===(t=document)||void 0===t||null===(r=t.addEventListener)||void 0===r||r.call(t,"mouseup",c,!1),function(){var e,n,t,r;null===Q||void 0===Q||null===(e=Q.current)||void 0===e||null===(n=e.removeEventListener)||void 0===n||n.call(e,"mousedown",o,!1),null===(t=document)||void 0===t||null===(r=t.removeEventListener)||void 0===r||r.call(t,"mouseup",c,!1),c()}}),[y,z,K,Q,G,$,Y]);var ie=A&&y,oe=ie?0:y?4*m.iI:I,ce=S?4*m.iI:z,de="calc(100% - ".concat(ce+oe+F,"px)"),le=(0,r.useMemo)((function(){return(null===j||void 0===j?void 0:j.length)>=1}),[j]),ae=(0,r.useMemo)((function(){return(0,x.jsxs)(x.Fragment,{children:[V&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.W7,{style:{width:le?oe-(v.k1-1):oe},visible:y,children:(0,x.jsxs)(a.Z,{alignItems:"center",fullHeight:!0,fullWidth:!0,children:[(0,x.jsxs)(l.Z,{children:[(0,x.jsx)(u.Z,{pl:y?1:2}),(0,x.jsxs)(c.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return te()},children:[y&&(0,x.jsx)(p.s$,{neutral:!0,size:2*m.iI}),!y&&(0,x.jsx)(p._Q,{neutral:!0,size:2*m.iI})]})]}),!y&&t]})}),!y&&O&&(0,x.jsx)(h.YJ,{style:{width:le?oe-(v.k1+1):oe},visible:y,children:O})]}),(0,x.jsx)(h.E$,{noScrollbarTrackBackground:!0,overflow:k,ref:K,verticalOffset:t?O?h.Wi+i:i:null,children:!y&&n})]})}),[n,t,i,y,k,O,oe,le,K,V,te]),ue=(0,r.useMemo)((function(){return(null===M||void 0===M?void 0:M.length)>=1}),[M]),se=(0,r.useMemo)((function(){return(0,x.jsxs)(x.Fragment,{children:[X&&(0,x.jsx)(h.W7,{style:{overflow:S?"visible":"hidden",width:ue?ce-(v.k1+2):ce},visible:S,children:(0,x.jsxs)(a.Z,{alignItems:"center",fullHeight:!0,fullWidth:!0,justifyContent:"space-between",children:[(0,x.jsxs)(h.ym,{noPadding:!0,children:[(0,x.jsx)(u.Z,{pl:S?1:0}),!S&&C]}),(0,x.jsxs)(l.Z,{children:[(0,x.jsx)(s.Z,{appearAbove:!S,appearBefore:!S,block:!0,label:S?"Show sidebar":"Hide sidebar",size:null,widthFitContent:!0,children:(0,x.jsxs)(c.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return re()},children:[S&&(0,x.jsx)(p._Q,{neutral:!0,size:2*m.iI}),!S&&(0,x.jsx)(p.s$,{neutral:!0,size:2*m.iI})]})},S?"before-is-hidden":"before-is-visible"),(0,x.jsx)(u.Z,{pr:S?1:2})]})]})}),(0,x.jsx)(h.Ru,{noScrollbarTrackBackground:!0,ref:ee,verticalOffset:C?_:null,children:!S&&P})]})}),[P,C,_,S,ce,ue,ee,X,re]);return(0,x.jsxs)(d.Z,{children:[(w&&!y||E&&!S)&&(0,x.jsx)(o(),{children:(0,x.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n                body {\n                  cursor: col-resize;\n                }\n              "}})}),D&&(0,x.jsx)(h.MK,{children:D}),P&&(0,x.jsxs)(h.MP,{heightOffset:_,style:{left:F,width:ce},children:[(0,x.jsx)(h.v7,{active:E,disabled:S,ref:ne,right:0}),ue&&(0,x.jsxs)(h.bC,{children:[!S&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.lU,{aligned:"left",children:(0,x.jsx)(v.lm,{aligned:"left",borderless:!0,showMore:U,children:(0,x.jsx)(f.Z,{aligned:"left",navigationItems:M})})}),(0,x.jsx)(h.S9,{aligned:"left",fullWidth:!0,heightOffset:_,widthOffset:v.k1+1,children:se})]}),S&&se]}),!ue&&se]}),(0,x.jsxs)(h.rS,{style:{left:ce+F,width:de},children:[L,(0,x.jsx)(h.aH,{headerOffset:(L?h.uX:h.Wi)+H,style:{width:de},children:(0,x.jsx)(h.Zj,{noScrollbarTrackBackground:!0,ref:T,children:B})})]}),n&&!ie&&(0,x.jsxs)(h.ff,{heightOffset:i,style:{width:oe},children:[(0,x.jsx)(h.v7,{active:w,disabled:y,left:0,ref:Q}),le&&(0,x.jsxs)(h.bC,{children:[!y&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.lU,{aligned:"right",children:(0,x.jsx)(v.lm,{aligned:"right",borderless:!0,showMore:U,children:(0,x.jsx)(f.Z,{aligned:"right",navigationItems:j})})}),(0,x.jsx)(h.S9,{aligned:"right",fullWidth:!0,heightOffset:i,widthOffset:v.k1+1,children:ae})]}),y&&ae]}),!le&&ae]})]})}},41788:function(e,n,t){t.d(n,{Z:function(){return P}});var r=t(77837),i=t(26304),o=t(62243),c=t(29385),d=t(80022),l=t(99177),a=t(93189),u=t(15544),s=t(82394),f=t(38860),h=t.n(f),p=t(82684),g=t(56663),m=t.n(g),v=t(35490),b=t(55361),x=t(30332),y=t(9736),w=t(59e3),j=t(28598),k=["auth"];function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function I(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,u.Z)(e);if(n){var i=(0,u.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,a.Z)(this,t)}}function P(e){return function(n){(0,l.Z)(a,n);var t=I(a);function a(){var e;(0,o.Z)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),(0,s.Z)((0,d.Z)(e),"state",{auth:new v.Z(e.props.token)}),e}return(0,c.Z)(a,[{key:"componentDidMount",value:function(){this.setState({auth:new v.Z(this.props.token)})}},{key:"render",value:function(){var n=this.props,t=(n.auth,(0,i.Z)(n,k));return(0,j.jsx)(e,Z({auth:this.state.auth},t))}}],[{key:"getInitialProps",value:function(){var n=(0,r.Z)(h().mark((function n(t){var r,i,o,c,d,l,a,u,s;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=m()(t),i=(0,y.ex)(t),o=i.id,c=r[b.Mv],d=r[x.qt],l=new v.Z(c),a=Z(Z({},t),{},{auth:l,currentGroupId:o,theme:d}),(0,y.YB)(t)&&l.isExpired&&(console.log("OAuth token has expired."),u=Z(Z({},t.query),{},{redirect_url:t.asPath}),(0,w.nL)("/sign-in?".concat((0,w.uM)(u)),t.res)),!e.getInitialProps){n.next=12;break}return n.next=10,e.getInitialProps(a);case 10:return s=n.sent,n.abrupt("return",Z(Z({},s),{},{auth:l,currentGroupId:o,theme:d}));case 12:return n.abrupt("return",a);case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}]),a}(p.Component)}},882:function(e,n,t){var r=t(82394),i=t(26304),o=t(38626),c=t(60328),d=t(23831),l=t(73942),a=t(99994),u=t(49125),s=t(28598),f=["backgroundGradient","backgroundPanel","borderWidth","children","compact","paddingUnits","paddingUnitsHorizontal","paddingUnitsVertical"];function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=o.default.div.withConfig({displayName:"GradientButton__ButtonContentStyle",componentId:"sc-1gzx4r1-0"})(["border-radius:","px;height:fit-content;"," ",""],l.n_,(function(e){return!e.backgroundPanel&&"\n    background-color: ".concat((e.theme.background||d.Z.background).page,";\n  ")}),(function(e){return e.backgroundPanel&&"\n    background-color: ".concat((e.theme.background||d.Z.background).panel,";\n  ")}));n.Z=function(e){var n=e.backgroundGradient,t=void 0===n?a.TD:n,r=e.backgroundPanel,o=e.borderWidth,d=void 0===o?1:o,l=e.children,h=e.compact,m=e.paddingUnits,v=e.paddingUnitsHorizontal,b=void 0===v?1.5:v,x=e.paddingUnitsVertical,y=void 0===x?1.25:x,w=(0,i.Z)(e,f),j=b,k=y;return m&&(j=m,k=m),h&&(j*=.75,k*=.75),(0,s.jsx)(c.Z,p(p({},w),{},{backgroundGradient:t,noPadding:!0,padding:"".concat(d,"px"),pointerEventsEnabled:!0,children:(0,s.jsx)(g,{backgroundPanel:r,children:(0,s.jsx)("div",{style:{paddingBottom:k*u.iI-d,paddingLeft:j*u.iI-d,paddingRight:j*u.iI-d,paddingTop:k*u.iI-d},children:l})})}))}},34744:function(e,n,t){var r=t(82394),i=t(26304),o=(t(82684),t(38626)),c=t(86673),d=t(23831),l=t(49125),a=t(28598),u=["short"];function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h=o.default.div.withConfig({displayName:"Divider__DividerContainerStyle",componentId:"sc-1m7lqco-0"})([""," ",""],(function(e){return e.short&&"\n    width: ".concat(21*l.iI,"px;\n  ")}),(function(e){return!e.short&&"\n    width: 100%;\n  "})),p=o.default.div.withConfig({displayName:"Divider__DividerStyle",componentId:"sc-1m7lqco-1"})(["height:1px;"," "," "," "," "," ",""],(function(e){return!(e.light||e.medium)&&"\n    background-color: ".concat((e.theme.monotone||d.Z.monotone).grey200,";\n  ")}),(function(e){return e.muted&&"\n    background-color: ".concat((e.theme.monotone||d.Z.monotone).grey500,";\n  ")}),(function(e){return e.light&&"\n    background-color: ".concat((e.theme.borders||d.Z.borders).light,";\n  ")}),(function(e){return e.medium&&"\n    background-color: ".concat((e.theme.borders||d.Z.borders).medium,";\n  ")}),(function(e){return e.prominent&&"\n    background-color: ".concat((e.theme.monotone||d.Z.monotone).grey300,";\n  ")}),(function(e){return e.black&&"\n    background-color: ".concat((e.theme.monotone||d.Z.monotone).black,";\n  ")})),g=function(e){var n=e.short,t=(0,i.Z)(e,u);return(0,a.jsx)(h,{short:n,children:(0,a.jsx)(c.Z,f(f({},t),{},{children:(0,a.jsx)(p,f({},t))}))})};g.defaultProps={short:!1},n.Z=g},99994:function(e,n,t){t.d(n,{eW:function(){return a},TD:function(){return d},yr:function(){return l}});var r=t(73899),i="#FF144D",o="#DEBB92",c="#2A60FE",d=("linear-gradient(90deg, ".concat(o,", ").concat("#CBFE00",")"),"linear-gradient(90deg, ".concat(i,", #C86DD7)")),l=("linear-gradient(90deg, ".concat("#95ECE2",", ").concat(c,")"),"linear-gradient(90deg, ".concat("#9B6CA7",", ").concat(o,")"),"linear-gradient(90deg, ".concat("#C72400",", ").concat(o,")"),"linear-gradient(100.38deg, ".concat(i," 41.11%, #FF9559 86.99%)"),"linear-gradient(100.38deg, ".concat("#6B50D7"," 41.11%, #677FFF 86.99%)"),"linear-gradient(100.38deg, ".concat(c," 41.11%, #B880FF 86.99%)"),"linear-gradient(90deg, ".concat(r.t4," 20.13%, #2AB2FE)")),a="linear-gradient(90deg, ".concat(r.Ck," 0%, ").concat(r.t4," 53.13%, ").concat(r.X_," 100%)")},66166:function(e,n,t){var r=t(82684);n.Z=function(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=e}),[e]),n.current}}}]);