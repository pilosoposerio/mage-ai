(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5912],{44162:function(n,e,t){"use strict";t.d(e,{HC:function(){return R},Kf:function(){return s},Nk:function(){return p},PY:function(){return f},gE:function(){return b},jv:function(){return h},nz:function(){return m},oh:function(){return a},qn:function(){return l},t1:function(){return A},y9:function(){return v}});var r=t(38626),o=t(23831),i=t(86422),c=t(73942),u=t(49125),d=t(90880),a=68;function l(n,e){var t,r,c=((null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.borders)||o.Z.borders).light,u=((null===e||void 0===e||null===(r=e.theme)||void 0===r?void 0:r.monotone)||o.Z.monotone).grey500,d=e||{},a=d.blockColor,l=d.isSelected,s=d.theme;return l?c=(s||o.Z).content.active:i.tf.TRANSFORMER===n||a===i.Lq.PURPLE?(c=(s||o.Z).accent.purple,u=(s||o.Z).accent.purpleLight):i.tf.DATA_EXPORTER===n||a===i.Lq.YELLOW?(c=(s||o.Z).accent.yellow,u=(s||o.Z).accent.yellowLight):i.tf.DATA_LOADER===n||a===i.Lq.BLUE?(c=(s||o.Z).accent.blue,u=(s||o.Z).accent.blueLight):i.tf.MARKDOWN===n?(c=(s||o.Z).accent.sky,u=(s||o.Z).accent.skyLight):i.tf.SENSOR===n||a===i.Lq.PINK?(c=(s||o.Z).accent.pink,u=(s||o.Z).accent.pinkLight):i.tf.DBT===n?(c=(s||o.Z).accent.dbt,u=(s||o.Z).accent.dbtLight):i.tf.EXTENSION===n||a===i.Lq.TEAL?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).teal,u=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).tealLight):i.tf.CALLBACK===n?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).rose,u=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).roseLight):(i.tf.CONDITIONAL===n||i.tf.SCRATCHPAD===n||a===i.Lq.GREY||i.tf.CUSTOM===n&&!a)&&(c=(s||o.Z).content.default,u=(s||o.Z).accent.contentDefaultTransparent),{accent:c,accentLight:u}}var s=(0,r.css)([""," "," "," "," "," "," ",""],(0,d.eR)(),(function(n){return!n.selected&&!n.hasError&&"\n    border-color: ".concat(l(n.blockType,n).accentLight,";\n  ")}),(function(n){return n.selected&&!n.hasError&&"\n    border-color: ".concat(l(n.blockType,n).accent,";\n  ")}),(function(n){return!n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.accent||o.Z.accent).negativeTransparent,";\n  ")}),(function(n){return n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.borders||o.Z.borders).danger,";\n  ")}),(function(n){return n.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(n){return n.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),p=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),f=r.default.div.withConfig({displayName:"indexstyle__HiddenBlockContainerStyle",componentId:"sc-s5rj34-1"})([""," border-radius:","px;border-style:",";border-width:","px;",""],s,c.n_,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n\n    &:hover {\n      border-color: ").concat(l(n.blockType,n).accent,";\n    }\n  ")})),m=r.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-2"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding:","px;position:sticky;top:-5px;"," "," ",""],s,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,u.iI,(function(n){return"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n  ")}),(function(n){return n.bottomBorder&&"\n    border-bottom: ".concat(c.YF,"px ").concat(c.M8," ").concat((n.theme||o.Z).borders.medium2,";\n  ")}),(function(n){return n.zIndex&&"\n    z-index: ".concat(6+(n.zIndex||0),";\n  ")})),h=r.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-3"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding-bottom:","px;padding-top:","px;position:relative;"," "," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],s,c.M8,c.mP,c.M8,c.mP,u.iI,u.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).codeTextarea,";\n  ")}),(function(n){return n.lightBackground&&"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n  ")}),(function(n){return!n.hasOutput&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n  ")})),b=r.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-4"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;bottom:","px;&:hover{"," .block-divider-inner{","}}"],2*u.iI,.5*u.iI,(function(n){return n.additionalZIndex>0&&"\n      z-index: ".concat(8+n.additionalZIndex,";\n    ")}),(function(n){return"\n        background-color: ".concat((n.theme.text||o.Z.text).fileBrowser,";\n      ")})),A=r.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-5"})(["height 1px;width:100%;position:absolute;z-index:-1;top:","px;"],1.5*u.iI),v=r.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-6"})(["margin-bottom:","px;padding-bottom:","px;",""],1*u.iI,1*u.iI,(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||o.Z.borders).medium,";\n    padding-left: ").concat(n.normalPadding?u.iI:a,"px;\n  ")})),R=r.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-7"})(["bottom:","px;left:","px;position:absolute;"],1*u.iI,a)},43032:function(n,e,t){"use strict";t.d(e,{Cl:function(){return u},Nk:function(){return d},ZG:function(){return c}});var r=t(38626),o=t(23831),i=t(49125),c=1.5*i.iI,u=1*c+i.iI/2,d=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-uvd91-0"})([".row:hover{","}"],(function(n){return"\n      background-color: ".concat((n.theme.interactive||o.Z.interactive).hoverBackground,";\n    ")}))},87465:function(n,e,t){"use strict";t.d(e,{Z:function(){return b}});t(82684);var r=t(34376),o=t(87372),i=t(60547),c=t(86673),u=t(19711),d=t(2850),a=t(38626),l=t(23831),s=t(49125),p=a.default.div.withConfig({displayName:"indexstyle__LinkStyle",componentId:"sc-1in9sst-0"})(["padding:","px ","px;"," ",""],s.iI,s.tr,(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||l.Z.interactive).checked,";\n  ")}),(function(n){return!n.selected&&"\n    cursor: pointer;\n  "})),f=t(92953),m=t(59920),h=t(28598);var b=function(n){var e=n.breadcrumbs,t=n.children,a=n.errors,l=n.monitorType,b=n.pipeline,A=n.setErrors,v=n.subheader,R=(0,r.useRouter)();return(0,h.jsx)(i.Z,{before:(0,h.jsxs)(d.M,{children:[(0,h.jsx)(c.Z,{p:s.cd,children:(0,h.jsx)(o.Z,{level:4,muted:!0,children:"Insights"})}),(0,h.jsx)(p,{onClick:function(n){n.preventDefault(),R.push("/pipelines/[pipeline]/monitors","/pipelines/".concat(null===b||void 0===b?void 0:b.uuid,"/monitors"))},selected:f.a_.PIPELINE_RUNS==l,children:(0,h.jsx)(u.ZP,{children:"Pipeline runs"})}),(0,h.jsx)(p,{onClick:function(n){n.preventDefault(),R.push("/pipelines/[pipeline]/monitors/block-runs","/pipelines/".concat(null===b||void 0===b?void 0:b.uuid,"/monitors/block-runs"))},selected:f.a_.BLOCK_RUNS==l,children:(0,h.jsx)(u.ZP,{children:"Block runs"})}),(0,h.jsx)(p,{onClick:function(n){n.preventDefault(),R.push("/pipelines/[pipeline]/monitors/block-runtime","/pipelines/".concat(null===b||void 0===b?void 0:b.uuid,"/monitors/block-runtime"))},selected:f.a_.BLOCK_RUNTIME==l,children:(0,h.jsx)(u.ZP,{children:"Block runtime"})})]}),breadcrumbs:e,errors:a,pageName:m.M.MONITOR,pipeline:b,setErrors:A,subheader:v,uuid:"pipeline/monitor",children:t})}},2850:function(n,e,t){"use strict";t.d(e,{M:function(){return c},W:function(){return i}});var r=t(38626),o=t(3055),i=34*t(49125).iI,c=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);"],o.Mz)},86422:function(n,e,t){"use strict";t.d(e,{$W:function(){return m},DA:function(){return f},HX:function(){return A},J8:function(){return b},L8:function(){return c},Lq:function(){return s},M5:function(){return p},Qj:function(){return v},Ut:function(){return E},V4:function(){return T},VZ:function(){return h},dO:function(){return l},f2:function(){return O},iZ:function(){return R},t6:function(){return u},tf:function(){return a}});var r,o,i,c,u,d=t(82394);!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(c||(c={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(u||(u={}));var a,l=(r={},(0,d.Z)(r,u.MARKDOWN,"MD"),(0,d.Z)(r,u.PYTHON,"PY"),(0,d.Z)(r,u.R,"R"),(0,d.Z)(r,u.SQL,"SQL"),(0,d.Z)(r,u.YAML,"YAML"),r);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(a||(a={}));var s,p=[a.CALLBACK,a.CONDITIONAL,a.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(s||(s={}));var f,m=[a.CHART,a.CUSTOM,a.DATA_EXPORTER,a.DATA_LOADER,a.SCRATCHPAD,a.SENSOR,a.MARKDOWN,a.TRANSFORMER],h=[a.DATA_EXPORTER,a.DATA_LOADER],b=[a.DATA_EXPORTER,a.DATA_LOADER,a.TRANSFORMER],A=[a.DATA_EXPORTER,a.DATA_LOADER,a.DBT,a.TRANSFORMER],v=[a.CHART,a.SCRATCHPAD,a.SENSOR,a.MARKDOWN],R=[a.CALLBACK,a.CHART,a.EXTENSION,a.SCRATCHPAD,a.MARKDOWN];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(f||(f={}));var O=[a.CUSTOM,a.DATA_EXPORTER,a.DATA_LOADER,a.TRANSFORMER],T=(o={},(0,d.Z)(o,a.CALLBACK,"Callback"),(0,d.Z)(o,a.CUSTOM,"Custom"),(0,d.Z)(o,a.DATA_EXPORTER,"Data exporter"),(0,d.Z)(o,a.DATA_LOADER,"Data loader"),(0,d.Z)(o,a.EXTENSION,"Extension"),(0,d.Z)(o,a.SCRATCHPAD,"Scratchpad"),(0,d.Z)(o,a.SENSOR,"Sensor"),(0,d.Z)(o,a.MARKDOWN,"Markdown"),(0,d.Z)(o,a.TRANSFORMER,"Transformer"),o),E=[a.DATA_LOADER,a.TRANSFORMER,a.DATA_EXPORTER,a.SENSOR];i={},(0,d.Z)(i,a.DATA_EXPORTER,"DE"),(0,d.Z)(i,a.DATA_LOADER,"DL"),(0,d.Z)(i,a.SCRATCHPAD,"SP"),(0,d.Z)(i,a.SENSOR,"SR"),(0,d.Z)(i,a.MARKDOWN,"MD"),(0,d.Z)(i,a.TRANSFORMER,"TF")},50094:function(n,e,t){"use strict";t.r(e);var r=t(77837),o=t(75582),i=t(82394),c=t(38860),u=t.n(c),d=t(82684),a=t(92083),l=t.n(a),s=t(38626),p=t(21679),f=t(16634),m=t(67971),h=t(87372),b=t(87465),A=t(41788),v=t(55378),R=t(86673),O=t(82531),T=t(23831),E=t(92953),x=t(43032),_=t(44162),Z=t(42305),D=t(24224),g=t(28598);function C(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function y(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?C(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function N(n){var e=n.pipeline,t=(0,d.useContext)(s.ThemeContext),r=(0,d.useState)(null),c=r[0],u=r[1],a=e.uuid,A=O.ZP.pipelines.detail(a,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,C=(0,d.useMemo)((function(){return y(y({},null===A||void 0===A?void 0:A.pipeline),{},{uuid:a})}),[A,a]),N=O.ZP.pipeline_schedules.pipelines.list(a).data,L=(0,d.useMemo)((function(){return null===N||void 0===N?void 0:N.pipeline_schedules}),[N]),S=(0,d.useMemo)((function(){return(0,D.HK)(null===C||void 0===C?void 0:C.blocks,(function(n){return n.uuid}))||{}}),[C]),k={pipeline_uuid:a};(c||0===c)&&(k.pipeline_schedule_id=Number(c));var P=O.ZP.monitor_stats.detail("block_run_count",k),I=P.data,M=P.mutate,j=((null===I||void 0===I?void 0:I.monitor_stat)||{}).stats,w=(0,d.useMemo)((function(){return(0,Z.Y_)()}),[]),B=(0,d.useMemo)((function(){if(j)return Object.entries(j).reduce((function(n,e){var t=(0,o.Z)(e,2),r=t[0],c=t[1].data,u=w.map((function(n){return y({date:n},c[n]||{})}));return y(y({},n),{},(0,i.Z)({},r,u))}),{})}),[w,j]),H=(0,d.useMemo)((function(){var n=[];return n.push({bold:!0,label:function(){return"Monitors"}}),n}),[]);return(0,g.jsx)(b.Z,{breadcrumbs:H,monitorType:E.a_.BLOCK_RUNS,pipeline:C,subheader:(0,g.jsx)(m.Z,{children:(0,g.jsxs)(v.Z,{backgroundColor:T.Z.interactive.defaultBackground,label:"Trigger:",onChange:function(n){var e=n.target.value;"initial"!==e?(u(e),M(e)):(M(),u(null))},value:c||"initial",children:[(0,g.jsx)("option",{value:"initial",children:"All"}),L&&L.map((function(n){return(0,g.jsx)("option",{value:n.id,children:n.name},n.id)}))]})}),children:(0,g.jsx)(R.Z,{mx:2,children:B&&Object.entries(B).map((function(n){var e,r,i=(0,o.Z)(n,2),c=i[0],u=i[1];return(0,g.jsxs)(R.Z,{mt:3,children:[(0,g.jsxs)(m.Z,{alignItems:"center",children:[(0,g.jsx)(R.Z,{mx:1,children:(0,g.jsx)(f.Z,{color:(0,_.qn)(null===(e=S[c])||void 0===e?void 0:e.type,{blockColor:null===(r=S[c])||void 0===r?void 0:r.color,theme:t}).accent,size:x.ZG,square:!0})}),(0,g.jsx)(h.Z,{level:4,children:c})]}),(0,g.jsx)(R.Z,{mt:1,children:(0,g.jsx)(p.Z,{colors:E.NU,data:u,getXValue:function(n){return n.date},height:200,keys:E.hu,margin:{bottom:30,left:35,right:0,top:10},tooltipLeftOffset:E.CD,xLabelFormat:function(n){return l()(n).format("MMM DD")}})})]},c)}))})})}N.getInitialProps=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query.pipeline,n.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),e.default=(0,A.Z)(N)},83542:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/monitors/block-runs",function(){return t(50094)}])}},function(n){n.O(0,[844,7607,5896,2714,1424,1005,547,3431,9774,2888,179],(function(){return e=83542,n(n.s=e);var e}));var e=n.O();_N_E=e}]);