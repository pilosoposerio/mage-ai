"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5703],{44162:function(n,e,t){t.d(e,{HC:function(){return g},Kf:function(){return s},Nk:function(){return p},gE:function(){return m},jv:function(){return h},nz:function(){return f},oh:function(){return d},qn:function(){return l},t1:function(){return b},y9:function(){return v}});var r=t(9518),o=t(23831),i=t(73942),c=t(86422),u=t(49125),a=t(90880),d=68;function l(n,e){var t=(e.theme.borders||o.Z.borders).light,r=(e.theme.monotone||o.Z.monotone).grey500,i=e||{},u=i.isSelected,a=i.theme;return u?t=(a.content||o.Z.content).active:c.tf.TRANSFORMER===n?(t=(a.accent||o.Z.accent).purple,r=(a.accent||o.Z.accent).purpleLight):c.tf.DATA_EXPORTER===n?(t=(a.accent||o.Z.accent).yellow,r=(a.accent||o.Z.accent).yellowLight):c.tf.DATA_LOADER===n?(t=(a.accent||o.Z.accent).blue,r=(a.accent||o.Z.accent).blueLight):c.tf.SCRATCHPAD===n?(t=(a.content||o.Z.content).default,r=(a.accent||o.Z.accent).contentDefaultTransparent):c.tf.SENSOR===n?(t=(a.accent||o.Z.accent).pink,r=(a.accent||o.Z.accent).pinkLight):c.tf.DBT===n&&(t=(a.accent||o.Z.accent).dbt,r=(a.accent||o.Z.accent).dbtLight),{accent:t,accentLight:r}}var s=(0,r.css)([""," "," "," "," "," "," ",""],(0,a.eR)(),(function(n){return!n.selected&&!n.hasError&&"\n    border-color: ".concat(l(n.blockType,n).accentLight,";\n  ")}),(function(n){return n.selected&&!n.hasError&&"\n    border-color: ".concat(l(n.blockType,n).accent,";\n  ")}),(function(n){return!n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.accent||o.Z.accent).negativeTransparent,";\n  ")}),(function(n){return n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.borders||o.Z.borders).danger,";\n  ")}),(function(n){return n.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(n){return n.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),p=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],i.n_),f=r.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-1"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding:","px;position:sticky;top:-5px;z-index:5;"," ",""],s,i.n_,i.n_,i.M8,i.mP,i.M8,i.mP,i.M8,i.mP,u.iI,(function(n){return"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n  ")}),(function(n){return n.selected&&"\n    z-index: 11;\n  "})),h=r.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-2"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding-bottom:","px;padding-top:","px;position:relative;"," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],s,i.M8,i.mP,i.M8,i.mP,u.iI,u.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).codeTextarea,";\n  ")}),(function(n){return!n.hasOutput&&"\n    border-bottom-left-radius: ".concat(i.n_,"px;\n    border-bottom-right-radius: ").concat(i.n_,"px;\n    border-bottom-style: ").concat(i.M8,";\n    border-bottom-width: ").concat(i.mP,"px;\n  ")})),m=r.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-3"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:10;bottom:","px;&:hover{.block-divider-inner{","}}"],2*u.iI,.75*u.iI,(function(n){return"\n        background-color: ".concat((n.theme.text||o.Z.text).fileBrowser,";\n      ")})),b=r.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-4"})(["height 1px;width:100%;position:absolute;z-index:-1;top:","px;"],1.5*u.iI),v=r.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-5"})(["margin-bottom:","px;padding-bottom:","px;padding-left:","px;",""],u.cd*u.iI,u.iI,d,(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||o.Z.borders).medium,";\n  ")})),g=r.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-6"})(["bottom:","px;left:","px;position:absolute;"],1*u.iI,d)},86532:function(n,e,t){t.d(e,{Z:function(){return Q}});var r=t(77555),o=t(82394),i=t(12757),c=t(77837),u=t(38860),a=t.n(u),d=t(51774),l=t.n(d),s=t(9518),p=t(4804),f=t(82684),h=t(83455),m=t(86422),b=t(67971),v=t(16634),g=t(86673),x=t(54283),y=t(19711),k=t(23831),A=t(10503),R=t(49125),E=(R.iI,[m.tf.DATA_EXPORTER,m.tf.SENSOR]),T=t(73942),w=t(37391),C=s.default.div.withConfig({displayName:"indexstyle__GraphContainerStyle",componentId:"sc-bc2ei5-0"})(["div:only-child{","}",""],w.w5,(function(n){return n.height&&"\n    height: ".concat(n.height,"px;\n  ")})),Z=s.default.div.withConfig({displayName:"indexstyle__NodeStyle",componentId:"sc-bc2ei5-1"})(["border-radius:","px;border:1px solid transparent;min-width:fit-content;"," "," "," ",""],T.BG,(function(n){return n.selected&&"\n    border-color: ".concat((n.theme.content||k.Z.content).active,";\n  ")}),(function(n){return n.backgroundColor&&"\n    background-color: ".concat(n.backgroundColor,";\n  ")}),(function(n){return(n.isCancelled||n.disabled)&&"\n    // opacity doesn\u2019t work on Safari\n    border-color: ".concat((n.theme.content||k.Z.content).active,";\n    border-style: dashed;\n    cursor: not-allowed;\n  ")}),(function(n){return n.disabled&&"\n    &:hover {\n      cursor: not-allowed;\n    }\n  "})),O=s.default.div.withConfig({displayName:"indexstyle__RuntimeStyle",componentId:"sc-bc2ei5-2"})(["margin-right:","px;padding:12px 4px;height:100%;width:50px;background:rgba(0,0,0,0.2);background-blend-mode:soft-light;"],2*R.iI),j=t(44162),D=t(5679),P=function(n){var e=n/1e3,t=4-Math.floor(e).toString().length,r=(0,D.QV)(e,t>=0?t:0),o="s";return r>1e3&&(r=(0,D.QV)(r/60,0),o="m"),"".concat(r).concat(o)},S=t(28598);var _=function(n){var e=n.block,t=n.children,r=n.disabled,o=n.hasFailed,i=n.isCancelled,c=n.isInProgress,u=n.isQueued,a=n.isSuccessful,d=(n.onClick,n.runtime),l=n.selected,p=(0,f.useContext)(s.ThemeContext),h=e.type,m=e.uuid,T=!(c||u||o||a||i),w=a&&!(c||u),C=o&&!(c||u),D="";return T?D="No status":w?D="Successful execution":C?D="Failed execution":c?D="Currently executiing":i&&(D="Cancelled execution"),(0,S.jsx)(Z,{backgroundColor:(0,j.qn)(h,{theme:p}).accent,disabled:r,isCancelled:i,selected:l,children:(0,S.jsxs)(b.Z,{alignItems:"center",children:[d&&(0,S.jsx)(O,{backgroundColor:(0,j.qn)(h,{theme:p}).accent,children:(0,S.jsx)(b.Z,{justifyContent:"center",children:(0,S.jsx)(y.ZP,{inverted:E.includes(h),xsmall:!0,children:P(d)})})}),!d&&(0,S.jsx)(g.Z,{ml:2}),(0,S.jsxs)(b.Z,{alignItems:"center",justifyContent:"center",style:{height:2*R.iI,width:2*R.iI},title:D,children:[c&&(0,S.jsx)(x.Z,{color:(p||k.Z).content.active,small:!0}),w&&(0,S.jsx)(A.Jr,{size:2*R.iI,success:!0}),C&&(0,S.jsx)(A.x8,{danger:!0,size:1.5*R.iI}),T&&(0,S.jsx)(v.Z,{borderSize:1,size:1*R.iI})]}),(0,S.jsx)(g.Z,{ml:1}),(0,S.jsx)(b.Z,{alignItems:"center",justifyContent:"center",style:{padding:"8px 0",height:"100%"},children:(0,S.jsx)(y.ZP,{inverted:E.includes(h),monospace:!0,small:!0,children:t})})]})},m)},I=t(31866),N=t(98781),B=t(41374),L=t(66050),M=t(24224),H=t(25958),F=t(96510);function z(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function X(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?z(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var G=l()((0,c.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2018)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Canvas);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}),U=l()((0,c.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2018)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Node);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}),V=l()((0,c.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2018)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Edge);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}});l()((0,c.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2018)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.MarkerArrow);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}),l()((0,c.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2018)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Port);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}});var Q=function(n){var e=n.blockRefs,t=n.blockStatus,o=n.editingBlock,c=n.fetchPipeline,u=n.height,a=n.heightOffset,d=void 0===a?10*R.iI:a,l=n.noStatus,v=n.pipeline,x=n.runningBlocks,k=void 0===x?[]:x,A=n.selectedBlock,E=n.setEditingBlock,T=n.setErrors,w=n.setSelectedBlock,Z=(0,f.useContext)(s.ThemeContext),O=(null===o||void 0===o?void 0:o.upstreamBlocks)||{},D=O.block,P=O.values,z=void 0===P?[]:P,Q=(0,f.useMemo)((function(){return z.length}),[z]),q=(0,f.useMemo)((function(){var n;return(null===v||void 0===v||null===(n=v.blocks)||void 0===n?void 0:n.filter((function(n){var e=n.type;return m.tf.SCRATCHPAD!==e})))||[]}),[null===v||void 0===v?void 0:v.blocks]),W=(0,f.useMemo)((function(){return(0,M.HK)(q,(function(n){return n.uuid}))}),[q]),Y=((0,f.useMemo)((function(){return(0,M.HK)(z,(function(n){return n.uuid}))}),[z]),(0,f.useMemo)((function(){return(0,M.HK)(k,(function(n){return n.uuid}))}),[k])),K=(0,h.Db)(B.ZP.blocks.pipelines.useUpdate(null===v||void 0===v?void 0:v.uuid,encodeURIComponent(null===D||void 0===D?void 0:D.uuid)),{onSuccess:function(n){return(0,F.wD)(n,{callback:function(){E({upstreamBlocks:null}),null===c||void 0===c||c()},onErrorCallback:function(n,e){return null===T||void 0===T?void 0:T({errors:e,response:n})}})}}),$=(0,i.Z)(K,2),J=$[0],nn=$[1].isLoading,en=(0,f.useCallback)((function(n){var t=n.type,r=n.uuid;if(null===w||void 0===w||w(n),null!==e&&void 0!==e&&e.current){var o,i=e.current["".concat(t,"s/").concat(r,".py")];null===i||void 0===i||null===(o=i.current)||void 0===o||o.scrollIntoView()}}),[e,w]),tn=(0,f.useCallback)((function(n){E((function(e){var t=e.upstreamBlocks.values||[],r=t.findIndex((function(e){var t=e.uuid;return n.uuid===t}));return X(X({},e),{},{upstreamBlocks:X(X({},e.upstreamBlocks),{},{values:r>=0?(0,M.oM)(t,r):t.concat(n)})})}))}),[E]),rn=(0,f.useMemo)((function(){var n={};return q.forEach((function(e){e.upstream_blocks.forEach((function(t){n[t]||(n[t]=[]),n[t].push(e)}))})),n}),[q]),on=(0,f.useCallback)((function(n){var e;if(N.q.INTEGRATION===(null===v||void 0===v?void 0:v.type)&&m.tf.TRANSFORMER!==n.type){var t,r={};if(m.t6.YAML===n.language&&(r=(0,p.Qc)(n.content)),m.tf.DATA_LOADER===n.type)e="Source: ".concat(null===(t=r)||void 0===t?void 0:t.source);else if(m.tf.DATA_EXPORTER===n.type){var o;e="Destination: ".concat(null===(o=r)||void 0===o?void 0:o.destination)}}else m.tf.DBT===n.type&&(e=(0,H.$)(n));return e||(e=n.uuid),e}),[v]),cn=(0,f.useMemo)((function(){var n=[],e=[];return q.forEach((function(o){var i,c=on(o),u=o.upstream_blocks,a=void 0===u?[]:u,d=o.uuid,l=rn[d],s=[];l&&s.push.apply(s,(0,r.Z)(l.map((function(n){return{height:10,id:"".concat(d,"-").concat(n.uuid,"-from"),side:"SOUTH",width:10}})))),null===a||void 0===a||a.forEach((function(n){s.push({height:10,id:"".concat(n,"-").concat(d,"-to"),side:"NORTH",width:10}),e.push({from:n,fromPort:"".concat(n,"-").concat(d,"-from"),id:"".concat(n,"-").concat(d),to:d,toPort:"".concat(n,"-").concat(d,"-to")})})),n.push({data:{block:o},height:37,id:d,ports:s,width:c.length*R.KF+5*R.iI+((null===D||void 0===D?void 0:D.uuid)===o.uuid?19*R.KF:0)+(null!==t&&void 0!==t&&null!==(i=t[o.uuid])&&void 0!==i&&i.runtime?50:0)})})),{edges:e,nodes:n}}),[D,t,q,v]),un=cn.edges,an=cn.nodes,dn=(0,f.useCallback)((function(n){if(l)return{};if(t){var e=t[n.uuid]||{},r=e.status,o=e.runtime;return{hasFailed:L.V.FAILED===r,isCancelled:L.V.CANCELLED===r,isInProgress:L.V.RUNNING===r,isQueued:L.V.INITIAL===r,isSuccessful:L.V.COMPLETED===r,runtime:o}}var i;return{hasFailed:m.DA.FAILED===n.status,isInProgress:Y[n.uuid],isQueued:Y[n.uuid]&&(null===(i=k[0])||void 0===i?void 0:i.uuid)!==n.uuid,isSuccessful:m.DA.EXECUTED===n.status}}),[Y,t]);return(0,S.jsxs)(S.Fragment,{children:[D&&(0,S.jsxs)(g.Z,{my:3,px:R.cd,children:[(0,S.jsxs)(g.Z,{mb:R.cd,children:[(0,S.jsxs)(y.ZP,{children:["Select parent block(s) for ",(0,S.jsx)(y.ZP,{color:(0,j.qn)(D.type,{theme:Z}).accent,inline:!0,monospace:!0,children:D.uuid}),":"]}),(0,S.jsx)(g.Z,{mt:1,children:z.map((function(n,e){var t,r=n.uuid;return(0,S.jsxs)(y.ZP,{color:(0,j.qn)(null===(t=W[r])||void 0===t?void 0:t.type,{theme:Z}).accent,inline:!0,monospace:!0,children:[r,Q>=2&&e<=Q-2?(0,S.jsx)(y.ZP,{inline:!0,children:",\xa0"}):null]},r)}))})]}),(0,S.jsxs)(b.Z,{alignItems:"center",children:[(0,S.jsx)(I.ZP,{compact:!0,inline:!0,loading:nn,onClick:function(){return J({block:X(X({},D),{},{upstream_blocks:z.map((function(n){return n.uuid}))})})},uuid:"DependencyGraph/save_parents",children:"Save dependencies"}),(0,S.jsx)(g.Z,{ml:1}),(0,S.jsx)(I.ZP,{compact:!0,inline:!0,noBackground:!0,onClick:function(){return E({upstreamBlocks:null})},uuid:"DependencyGraph/cancel_save_parents",children:"Cancel"})]})]}),(0,S.jsx)(C,{height:u-d,children:(0,S.jsx)(G,{arrow:null,disabled:!1,edge:function(n){var e,t=W[n.source];return(0,S.jsx)(V,X(X({},n),{},{style:{stroke:null===(e=(0,j.qn)(null===t||void 0===t?void 0:t.type,{theme:Z}))||void 0===e?void 0:e.accent}}))},edges:un,fit:!0,node:function(n){return(0,S.jsx)(U,X(X({},n),{},{linkable:!1,onClick:function(n,e){var t=e.data.block;(null===D||void 0===D?void 0:D.uuid)===t.uuid||(D?tn(t):en(t))},port:null,style:{fill:"transparent",stroke:"transparent",strokeWidth:0},children:function(n){var e=n.node.data.block,t=dn(e);return(0,S.jsx)("foreignObject",{height:n.height,style:{pointerEvents:"none"},width:n.width,x:0,y:0,children:(0,S.jsxs)(_,X(X({block:e,disabled:(null===D||void 0===D?void 0:D.uuid)===e.uuid,selected:D?!!(0,M.sE)(z,(function(n){return n.uuid===e.uuid})):(null===A||void 0===A?void 0:A.uuid)===e.uuid},t),{},{children:[on(e),(null===D||void 0===D?void 0:D.uuid)===e.uuid&&" (currently editing)"]}),e.uuid)})}}))},nodes:an,zoomable:!0})})]})}},17903:function(n,e,t){t.d(e,{Z:function(){return R}});var r=t(82394),o=t(12691),i=t.n(o),c=t(82684),u=t(67971),a=t(10919),d=t(86673),l=t(19711),s=t(46261),p=t(9518),f=t(23831),h=t(49125),m=p.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-0"})(["contain:size;width:100%;",""],(function(n){return n.columnBorders&&"\n    border-collapse: separate;\n  "})),b=p.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-1"})(["",""],(function(n){return!n.noHover&&"\n    &:hover {\n      background: ".concat((n.theme.interactive||f.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),v=(0,p.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(n){return!n.alignTop&&"\n    vertical-align: middle;\n  "}),(function(n){return n.alignTop&&"\n    vertical-align: top;\n  "}),(function(n){return!n.noBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||f.Z.borders).light,";\n  ")}),(function(n){return n.compact&&"\n    padding: ".concat(h.iI/2,"px ").concat(h.iI,"px;\n  ")}),(function(n){return!n.compact&&"\n    padding: ".concat(h.iI,"px ").concat(2*h.iI,"px;\n  ")}),(function(n){return n.maxWidth&&"\n    max-width: ".concat(n.maxWidth,";\n  ")})),g=p.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-2"})([""," "," "," ",""],v,(function(n){return n.columnBorders&&"\n    border: 1px solid ".concat((n.theme.borders||f.Z.borders).light,";\n    border-right: none;\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||f.Z.borders).light,";\n  ")}),(function(n){return n.sticky&&"\n    background-color: ".concat((n.theme||f.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    top: 0;\n\n    &:first-child {\n      left: 0;\n      z-index: 2;\n    }\n  ")})),x=p.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-3"})([""," "," "," "," "," ",""],v,(function(n){return n.columnBorders&&"\n    border-left: 1px solid ".concat((n.theme.borders||f.Z.borders).light,";\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||f.Z.borders).light,";\n  ")}),(function(n){return n.stickyFirstColumn&&"\n    background-color: ".concat((n.theme||f.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    left: 0;\n  ")}),(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||f.Z.interactive).activeBorder,";\n  ")}),(function(n){return n.wrapColumns&&"\n    white-space: break-spaces;\n  "})),y=t(28598);function k(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function A(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?k(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var R=function(n){var e=n.alignTop,t=n.buildLinkProps,r=n.columnBorders,o=n.columnFlex,p=n.columnMaxWidth,f=n.columns,h=void 0===f?[]:f,v=n.compact,k=n.isSelectedRow,R=n.noBorder,E=n.noHeader,T=n.onClickRow,w=n.rows,C=n.stickyFirstColumn,Z=n.stickyHeader,O=n.uuid,j=n.wrapColumns,D=(0,c.useMemo)((function(){return o.reduce((function(n,e){return n+(e||0)}),0)}),o),P=(0,c.useCallback)((function(n){if(o[n]){var e=Math.round(o[n]/D*100);return"".concat(e,"%")}return null}),[]),S=(0,c.useMemo)((function(){return null===w||void 0===w?void 0:w.map((function(n,o){var c=null===t||void 0===t?void 0:t(o),u=n.map((function(t,i){return(0,y.jsx)(x,{alignTop:e,columnBorders:r,compact:v,last:i===n.length-1,maxWidth:null===p||void 0===p?void 0:p(i),noBorder:R,selected:null===k||void 0===k?void 0:k(o),stickyFirstColumn:C&&0===i,width:P(i),wrapColumns:j,children:t},"".concat(O,"-row-").concat(o,"-cell-").concat(i))})),d=(0,y.jsx)(b,{noHover:!(c||T),onClick:T?function(){return T(o)}:null,children:u},"".concat(O,"-row-").concat(o));return c?(0,y.jsx)(i(),A(A({},c),{},{passHref:!0,children:(0,y.jsx)(a.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:d})})):d}))}),[e,t,P,p,h,v,k,R,T,w]);return(0,y.jsxs)(m,{columnBorders:r,children:[(null===h||void 0===h?void 0:h.length)>=1&&!E&&(0,y.jsx)(b,{noHover:!0,children:h.map((function(n,e){return(0,y.jsx)(g,{columnBorders:r,compact:v,last:e===h.length-1,noBorder:R,sticky:Z,children:(0,y.jsxs)(u.Z,{alignItems:"center",children:[(0,y.jsx)(l.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:n.label?n.label():n.uuid}),n.tooltipMessage&&(0,y.jsx)(d.Z,{ml:"4px",children:(0,y.jsx)(s.Z,{appearBefore:!0,label:(0,y.jsx)(l.ZP,{leftAligned:!0,children:n.tooltipMessage}),lightBackground:!0,primary:!0})})]})},"".concat(O,"-col-").concat(n.uuid,"-").concat(e))}))}),S]})}},66050:function(n,e,t){var r;t.d(e,{V:function(){return r}}),function(n){n.CANCELLED="cancelled",n.COMPLETED="completed",n.FAILED="failed",n.INITIAL="initial",n.RUNNING="running"}(r||(r={}))},86422:function(n,e,t){t.d(e,{$W:function(){return s},DA:function(){return l},HX:function(){return h},J8:function(){return f},Qj:function(){return m},Ut:function(){return x},V4:function(){return g},VZ:function(){return p},dO:function(){return d},f2:function(){return v},iZ:function(){return b},t6:function(){return c},tf:function(){return a}});var r,o,i,c,u=t(82394);!function(n){n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(c||(c={}));var a,d=(r={},(0,u.Z)(r,c.PYTHON,"PY"),(0,u.Z)(r,c.R,"R"),(0,u.Z)(r,c.SQL,"SQL"),(0,u.Z)(r,c.YAML,"YAML"),r);!function(n){n.CHART="chart",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.TRANSFORMER="transformer"}(a||(a={}));var l,s=[a.CHART,a.DATA_EXPORTER,a.DATA_LOADER,a.SCRATCHPAD,a.SENSOR,a.TRANSFORMER],p=[a.DATA_EXPORTER,a.DATA_LOADER],f=[a.DATA_EXPORTER,a.DATA_LOADER,a.TRANSFORMER],h=[a.DATA_EXPORTER,a.DATA_LOADER,a.DBT,a.TRANSFORMER],m=[a.CHART,a.SCRATCHPAD,a.SENSOR],b=[a.SCRATCHPAD];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(l||(l={}));var v=[a.DATA_EXPORTER,a.TRANSFORMER],g=(o={},(0,u.Z)(o,a.DATA_EXPORTER,"Data exporter"),(0,u.Z)(o,a.DATA_LOADER,"Data loader"),(0,u.Z)(o,a.SCRATCHPAD,"Scratchpad"),(0,u.Z)(o,a.SENSOR,"Sensor"),(0,u.Z)(o,a.TRANSFORMER,"Transformer"),o),x=[a.DATA_LOADER,a.TRANSFORMER,a.DATA_EXPORTER];i={},(0,u.Z)(i,a.DATA_EXPORTER,"DE"),(0,u.Z)(i,a.DATA_LOADER,"DL"),(0,u.Z)(i,a.SCRATCHPAD,"SP"),(0,u.Z)(i,a.SENSOR,"SR"),(0,u.Z)(i,a.TRANSFORMER,"TF")},25958:function(n,e,t){function r(n){var e,t=null===n||void 0===n||null===(e=n.configuration)||void 0===e?void 0:e.file_path;if(t){var r=t.split("/"),o=r[r.length-1].split(".");return o.pop(),o.join(".")}}t.d(e,{$:function(){return r}})}}]);