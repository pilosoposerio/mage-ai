(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[244],{59739:function(e,n,t){"use strict";var i=t(56669);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,n,t,r,o,u){if(u!==i){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:r};return t.PropTypes=t,t}},47329:function(e,n,t){e.exports=t(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},27125:function(e,n,t){"use strict";var i=t(75582),r=t(82684),o=t(12691),u=t.n(o),c=t(34376),l=t.n(c),a=t(38626),s=t(83455),d=t(35490),p=t(66050),f=t(60328),v=t(16634),h=t(67971),b=t(10919),m=t(98781),g=t(86673),x=t(87815),j=t(19711),_=t(46261),y=t(82531),Z=t(73828),O=t(94353),P=t(10503),w=t(49125),k=t(44162),C=t(24224),S=t(96510),T=t(43482),R=t(28598);n.Z=function(e){var n=e.blockRuns,t=e.onClickRow,o=e.pipeline,c=e.selectedRun,I=e.setErrors,M=(0,r.useContext)(a.ThemeContext),E=(0,r.useState)(null),L=E[0],D=E[1],N=(0,r.useState)(null),H=N[0],V=N[1],A=o||{},U=A.uuid,Y=A.type,B=(0,r.useMemo)((function(){return o.blocks||[]}),[o]),F=(0,r.useMemo)((function(){return(0,C.HK)(B,(function(e){return e.uuid}))}),[B]),z=(0,r.useMemo)((function(){return m.qL.INTEGRATION===Y}),[Y]),W=(0,r.useMemo)((function(){return m.qL.PYTHON===Y}),[Y]),q=(0,r.useMemo)((function(){var e,n;return null===(e=new d.Z)||void 0===e||null===(n=e.decodedToken)||void 0===n?void 0:n.token}),[]),G=(0,s.Db)((function(e){var n=e.blockUUID,t=e.pipelineRunId;return y.ZP.block_outputs.pipelines.downloads.detailAsync(null===o||void 0===o?void 0:o.uuid,n,{pipeline_run_id:t,token:q},{onDownloadProgress:function(e){return D((Number((null===e||void 0===e?void 0:e.loaded)||0)/1e6).toFixed(3))},responseType:O.E.BLOB})}),{onSuccess:function(e){return(0,S.wD)(e,{callback:function(e){V(null),(0,T.uS)(e,"block_output.".concat(Z.Lu.CSV))},onErrorCallback:function(e,n){return null===I||void 0===I?void 0:I({errors:n,response:e})}})}}),Q=(0,i.Z)(G,2),K=Q[0],J=Q[1].isLoading,X=[{uuid:"Date"},{uuid:"Status"},{uuid:"Trigger"},{uuid:"Block"},{uuid:"Completed"},{uuid:"Logs"}];return W&&X.push({uuid:"Output"}),(0,R.jsx)(x.Z,{columnFlex:[null,1,3,2,null,null,null],columns:X,isSelectedRow:function(e){return n[e].id===(null===c||void 0===c?void 0:c.id)},onClickRow:t,rows:null===n||void 0===n?void 0:n.map((function(e){var n,t,i,r,o=e||{},c=o.block_uuid,a=o.completed_at,s=o.created_at,d=o.id,m=o.pipeline_run_id,x=o.pipeline_schedule_id,y=o.pipeline_schedule_name,Z=o.status,O=c,C=O.split(":"),S=H===d&&J;z&&(O=C[0],i=C[1],r=C[2]);var T=F[O];T||(T=F[C[0]]);var I=[(0,R.jsx)(j.ZP,{default:!0,monospace:!0,children:s},"".concat(d,"_created_at")),(0,R.jsx)(j.ZP,{danger:p.V.FAILED===Z,default:p.V.CANCELLED===Z,info:p.V.INITIAL===Z,monospace:!0,success:p.V.COMPLETED===Z,warning:p.V.RUNNING===Z,children:Z},"".concat(d,"_status")),(0,R.jsx)(u(),{as:"/pipelines/".concat(U,"/triggers/").concat(x),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,R.jsx)(b.Z,{bold:!0,sameColorAsText:!0,children:y})},"".concat(d,"_trigger")),(0,R.jsx)(u(),{as:"/pipelines/".concat(U,"/edit?block_uuid=").concat(O),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,R.jsxs)(b.Z,{bold:!0,sameColorAsText:!0,verticalAlignContent:!0,children:[(0,R.jsx)(v.Z,{color:(0,k.qn)(null===(n=T)||void 0===n?void 0:n.type,{blockColor:null===(t=T)||void 0===t?void 0:t.color,theme:M}).accent,size:1.5*w.iI,square:!0}),(0,R.jsx)(g.Z,{mr:1}),(0,R.jsxs)(j.ZP,{monospace:!0,children:[O,i&&": ",i&&(0,R.jsx)(j.ZP,{default:!0,inline:!0,monospace:!0,children:i}),r>=0&&": ",r>=0&&(0,R.jsx)(j.ZP,{default:!0,inline:!0,monospace:!0,children:r})]})]})},"".concat(d,"_block_uuid")),(0,R.jsx)(j.ZP,{default:!0,monospace:!0,children:a||"-"},"".concat(d,"_completed_at")),(0,R.jsx)(f.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return l().push("/pipelines/".concat(U,"/logs?block_run_id[]=").concat(d))},children:(0,R.jsx)(P.B4,{default:!0,size:2*w.iI})},"".concat(d,"_logs"))];return W&&I.push((0,R.jsx)(h.Z,{alignItems:"center",justifyContent:"center",children:(0,R.jsx)(_.Z,{appearBefore:!0,autoHide:!S,block:!0,forceVisible:S,label:S?"".concat(L||0,"mb downloaded..."):"Save block run output as CSV file",size:null,widthFitContent:!0,children:(0,R.jsx)(f.Z,{default:!0,disabled:!W||!(p.V.COMPLETED===Z)||J,iconOnly:!0,loading:S,noBackground:!0,onClick:function(){D(null),V(d),K({blockUUID:O,pipelineRunId:m})},children:(0,R.jsx)(P.vc,{default:!0,size:2*w.iI})})})},"".concat(d,"_save_output"))),I})),uuid:"block-runs"})}},43482:function(e,n,t){"use strict";t.d(n,{Dp:function(){return f},OF:function(){return v},Q9:function(){return b},Rt:function(){return s},h8:function(){return h},k1:function(){return d},uS:function(){return m}});var i=t(21831),r=t(82394),o=t(91427),u=t(24224),c=t(90211);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e){var n={},t={};return null===e||void 0===e||e.forEach((function(e){var i=e.content,r=e.outputs,o=e.type,u=e.uuid;(null===r||void 0===r?void 0:r.length)>=1&&(n[u]=r.map((function(e){var n=e||{},t=n.sample_data,i=n.shape,r=n.text_data,o=n.type;return t?{data:a({shape:i},t),type:o}:r&&(0,c.Pb)(r)?JSON.parse(r):r}))),t[o]||(t[o]={}),t[o][u]=i})),{content:t,messages:n}}function d(e,n,t){e.forEach((function(e){(0,o.t8)("".concat(t,"/").concat(e.uuid,"/codeCollapsed"),(0,o.Od)("".concat(n,"/").concat(e.uuid,"/codeCollapsed"))),(0,o.t8)("".concat(t,"/").concat(e.uuid,"/outputCollapsed"),(0,o.Od)("".concat(n,"/").concat(e.uuid,"/outputCollapsed")))}))}function p(e){return"".concat(e,"/").concat(o.kP)}function f(e){return(0,o.U2)(p(e),[])}function v(e,n){var t=f(e);t.includes(n)||(0,o.t8)(p(e),[].concat((0,i.Z)(t),[n]))}function h(e,n){var t=f(e).filter((function(e){return e!==n}));(0,o.t8)(p(e),t)}function b(e,n){var t=(0,u.HK)(n,(function(e){return e.uuid}));return e.map((function(e){return t[e]})).filter((function(e){return!!e}))}var m=function(e,n){var t=window.URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n,document.body.appendChild(i),i.click(),i.remove()}},56681:function(e,n,t){"use strict";t.d(n,{G7:function(){return y},ZP:function(){return Z},u$:function(){return x}});var i=t(75582),r=t(82394),o=t(26304),u=t(32316),c=t(22673),l=t(73752),a=t(86673),s=t(19711),d=t(87815),p=t(49125),f=t(19395),v=t(7715),h=t(28598),b=["height","heightOffset","pipeline","selectedRun","selectedTab","setSelectedTab"];function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x=76,j={uuid:"Run details"},_={uuid:"Dependency tree"},y=[_,j];function Z(e){var n=e.height,t=e.heightOffset,r=e.pipeline,m=e.selectedRun,Z=e.selectedTab,O=e.setSelectedTab,P=g({},(0,o.Z)(e,b));m?P.blockStatus=(0,f.IJ)(null===m||void 0===m?void 0:m.block_runs):P.noStatus=!0;var w=(0,v.Kn)(null===m||void 0===m?void 0:m.variables)?g({},null===m||void 0===m?void 0:m.variables):(null===m||void 0===m?void 0:m.variables)||{},k=null===m||void 0===m?void 0:m.event_variables;if(k&&(0,v.Kn)(k)&&!(0,v.Qr)(k))if((0,v.Kn)(w)&&w.hasOwnProperty("event")){var C=(0,v.Kn)(w.event)?w.event:{};w.event=g(g({},C),k)}else w.event=g({},k);var S=[];w&&JSON.stringify(w,null,2).split("\n").forEach((function(e){S.push("    ".concat(e))}));var T=m&&[["Run ID",null===m||void 0===m?void 0:m.id],["Variables",(0,h.jsx)(c.Z,{language:"json",small:!0,source:S.join("\n")},"variable_value")]],R=m&&(0,h.jsx)(a.Z,{pb:p.cd,px:p.cd,children:(0,h.jsx)(d.Z,{alignTop:!0,columnFlex:[null,1],columnMaxWidth:function(e){return 1===e?"100px":null},rows:T.map((function(e,n){var t=(0,i.Z)(e,2),r=t[0],o=t[1];return[(0,h.jsx)(s.ZP,{monospace:!0,muted:!0,children:r},"key_".concat(n)),(0,h.jsx)(s.ZP,{monospace:!0,textOverflow:!0,children:o},"val_".concat(n))]})),uuid:"LogDetail"})}),I=Z&&O;return(0,h.jsxs)(h.Fragment,{children:[I&&(0,h.jsx)(a.Z,{py:p.cd,children:(0,h.jsx)(u.Z,{onClickTab:O,selectedTabUUID:null===Z||void 0===Z?void 0:Z.uuid,tabs:y})}),(!I||_.uuid===(null===Z||void 0===Z?void 0:Z.uuid))&&(0,h.jsx)(l.Z,g(g({},P),{},{height:n,heightOffset:(t||0)+(I?x:0),pipeline:r})),j.uuid===(null===Z||void 0===Z?void 0:Z.uuid)&&R]})}},40030:function(e,n,t){"use strict";var i=t(38626),r=t(23831),o=i.default.div.withConfig({displayName:"PageSectionHeader",componentId:"sc-1wznrcv-0"})(["left:0;position:sticky;top:0;width:100%;z-index:2;",""],(function(e){return"\n    background-color: ".concat(e.backgroundColor||(e.theme.background||r.Z.background).page,";\n    border-bottom: 1px solid ").concat((e.theme.borders||r.Z.borders).medium,";\n  ")}));n.Z=o},73828:function(e,n,t){"use strict";t.d(n,{JD:function(){return b},Lu:function(){return o},PF:function(){return f},d2:function(){return p},dT:function(){return u},n6:function(){return a},nB:function(){return h},oy:function(){return v},xF:function(){return d}});var i,r,o,u,c=t(82394),l=t(86422);!function(e){e.CSV="csv",e.JSON="json",e.MD="md",e.PY="py",e.R="r",e.SQL="sql",e.TXT="txt",e.YAML="yaml",e.YML="yml"}(o||(o={})),function(e){e.INIT_PY="__init__.py",e.METADATA_YAML="metadata.yaml",e.REQS_TXT="requirements.txt"}(u||(u={}));var a=[o.PY,o.SQL],s=[o.JSON,o.MD,o.PY,o.R,o.SQL,o.TXT,o.YAML,o.YML],d=new RegExp(s.map((function(e){return".".concat(e,"$")})).join("|")),p=new RegExp(s.map((function(e){return".".concat(e,"$")})).join("|")),f="charts",v="pipelines",h=(i={},(0,c.Z)(i,o.MD,l.t6.MARKDOWN),(0,c.Z)(i,o.JSON,o.JSON),(0,c.Z)(i,o.PY,l.t6.PYTHON),(0,c.Z)(i,o.R,l.t6.R),(0,c.Z)(i,o.SQL,l.t6.SQL),(0,c.Z)(i,o.TXT,"text"),(0,c.Z)(i,o.YAML,l.t6.YAML),(0,c.Z)(i,o.YML,l.t6.YAML),i),b=(r={},(0,c.Z)(r,l.t6.MARKDOWN,o.MD),(0,c.Z)(r,l.t6.PYTHON,o.PY),(0,c.Z)(r,l.t6.R,o.R),(0,c.Z)(r,l.t6.SQL,o.SQL),(0,c.Z)(r,l.t6.YAML,o.YAML),(0,c.Z)(r,"text",o.TXT),r)},22673:function(e,n,t){"use strict";var i=t(82684),r=t(68792),o=t(31811),u=t(38626),c=t(65292),l=t(23831),a=t(2005),s=t(49125),d=t(28598);n.Z=function(e){var n=e.language,t=e.maxWidth,p=e.showLineNumbers,f=e.small,v=e.source,h=e.wrapLines,b=(0,i.useContext)(u.ThemeContext);function m(e){var i=e.value;return(0,d.jsx)(o.Z,{customStyle:{backgroundColor:(b.background||l.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:a.Vp,fontSize:f?12:14,marginBottom:0,marginTop:0,maxWidth:t,paddingBottom:2*s.iI,paddingTop:2*s.iI},language:n,lineNumberStyle:{color:(b.content||l.Z.content).muted},showLineNumbers:p,style:c._4,useInlineStyles:!0,wrapLines:h,children:i})}return(0,d.jsx)(r.D,{components:{code:function(e){var n=e.children;return(0,d.jsx)(m,{value:n})}},children:v})}},32316:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var i=t(82684),r=t(60328),o=t(67971),u=t(882),c=t(86673),l=t(19711),a=t(99994),s=t(38626),d=t(49125),p=t(37391),f=s.default.div.withConfig({displayName:"indexstyle__TabsContainerStyle",componentId:"sc-segf7l-0"})(["padding-left:","px;padding-right:","px;"," "," ",""],d.cd*d.iI,d.cd*d.iI,(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.allowScroll&&"\n    overflow: auto;\n  "}),p.w5),v=t(66653),h=t(28598);var b=function(e){var n=e.allowScroll,t=e.compact,s=e.contained,p=e.noPadding,b=e.onClickTab,m=e.regularSizeText,g=e.selectedTabUUID,x=e.small,j=e.tabs,_=(0,i.useMemo)((function(){var e=j.length,n=[];return j.forEach((function(i,s){var p=i.Icon,f=i.IconSelected,j=i.label,_=i.uuid,y=_===g,Z=y&&f||p,O=j?j():_,P=(0,h.jsxs)(o.Z,{alignItems:"center",children:[Z&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(Z,{default:!y,size:2*d.iI}),(0,h.jsx)(c.Z,{mr:1})]}),(0,h.jsx)(l.ZP,{bold:!0,default:!y,noWrapping:!0,small:!m,children:O})]});s>=1&&e>=2&&n.push((0,h.jsx)("div",{style:{marginLeft:1.5*d.iI}},"spacing-".concat(_))),y?n.push((0,h.jsx)(u.Z,{backgroundGradient:a.yr,backgroundPanel:!0,borderLess:!0,borderWidth:2,compact:t||x,onClick:function(e){(0,v.j)(e),b(i)},paddingUnitsHorizontal:1.75,paddingUnitsVertical:1.25,small:x,children:P},_)):n.push((0,h.jsx)("div",{style:{padding:2},children:(0,h.jsx)(r.Z,{borderLess:!0,compact:t||x,default:!0,onClick:function(e){(0,v.j)(e),b(i)},outline:!0,small:x,children:P})},"button-tab-".concat(_)))})),n}),[t,b,g,x,j]),y=(0,h.jsx)(o.Z,{alignItems:"center",children:_});return s?y:(0,h.jsx)(f,{allowScroll:n,noPadding:p,children:y})}},95820:function(e,n,t){"use strict";t.d(n,{i:function(){return s}});t(82684);var i=t(38626),r=(t(93461),t(67971),t(10919),t(86673),t(47329)),o=t.n(r);o().node,o().node,o().node.isRequired,o().bool,o().string.isRequired;t(19711);var u=t(31969),c=t(2005),l=t(49125),a=t(73942),s=(t(28598),"tab");i.default.div.withConfig({displayName:"Tabs__TabHeaderContainerStyle",componentId:"sc-rojme5-0"})(["",""],(function(e){return e.containerWidthPercentage&&"\n    width: ".concat(e.containerWidthPercentage,"%;\n  ")})),i.default.div.withConfig({displayName:"Tabs__TabHeader",componentId:"sc-rojme5-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;margin-right:","px;position:relative;z-index:2;"," "," ",""],a.BG,a.BG,6*l.iI,(function(e){return e.noBottomBorder&&"\n    border-bottom: none;\n  "}),(function(e){return e.active&&"\n    border-bottom: ".concat(l.cd,"px solid;\n    border-color: ").concat((e.theme.interactive||u.Z.interactive).linkPrimary,";\n  ")}),(function(e){return e.fullWidth&&"\n    width: 100%;\n  "})),i.default.div.withConfig({displayName:"Tabs__LinkStyle",componentId:"sc-rojme5-2"})(["align-items:center;display:flex;"," "," ",""],(function(e){return e.bold&&"\n    font-family: ".concat(c.nF,";\n  ")}),(function(e){return e.fullWidth&&"\n    justify-content: center;\n  "}),(function(e){return!e.disabled&&"\n    &:hover {\n      path {\n        fill: ".concat((e.theme.content||u.Z.interactive).linkPrimary," !important;\n      }\n    }\n  ")}))},77492:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return W}});var i=t(77837),r=t(75582),o=t(82394),u=t(38860),c=t.n(u),l=t(82684),a=t(83455),s=t(34376),d=t(28598);var p=function(e){var n=e.size;return(0,d.jsxs)("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.5 8.5H15.5V3.5H20.5V8.5ZM14 9V3C14 2.44772 14.4477 2 15 2H21C21.5523 2 22 2.44772 22 3V9C22 9.55229 21.5523 10 21 10H15C14.4477 10 14 9.55229 14 9ZM2 5V12.5V14V21.5C2 22.0523 2.44772 22.5 3 22.5H10.5H12H19.5C20.0523 22.5 20.5 22.0523 20.5 21.5V13.5C20.5 12.9477 20.0523 12.5 19.5 12.5H12V5C12 4.44772 11.5523 4 11 4H3C2.44772 4 2 4.44772 2 5ZM10.5 14V21H3.5V14H10.5ZM19 14V21H12V14H19ZM10.5 5.5V12.5H3.5V5.5H10.5Z",fill:"url(#paint0_linear_2842_55048)"}),(0,d.jsx)("defs",{children:(0,d.jsxs)("linearGradient",{id:"paint0_linear_2842_55048",x1:"2",y1:"12.25",x2:"22",y2:"12.25",gradientUnits:"userSpaceOnUse",children:[(0,d.jsx)("stop",{offset:"0.28125",stopColor:"#7D55EC"}),(0,d.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]})})]})},f=t(27125),v=t(60328),h=t(32316),b=t(67971),m=t(40030),g=t(51099);var x=function(e){var n=e.size;return(0,d.jsxs)("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("g",{clipPath:"url(#clip0_3007_70027)",children:(0,d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.75 6.6859C1.75 3.95988 3.95988 1.75 6.6859 1.75h.98788c-.23022.41608-.36128.89466-.36128 1.40385s.13106.98777.36128 1.40384h-.71224c-1.32761 0-2.40385 1.07624-2.40385 2.40385 0 1.32761 1.07624 2.40385 2.40385 2.40385H15.609c3.3916 0 6.141 2.74941 6.141 6.14101 0 3.3916-2.7494 6.141-6.141 6.141H9.55584c.23019-.416.36123-.8946.36123-1.4037 0-.5092-.13108-.9879-.36134-1.404H15.609c1.8409 0 3.3333-1.4923 3.3333-3.3333 0-1.8409-1.4924-3.3333-3.3333-3.3333H6.96154C4.08329 12.1731 1.75 9.83979 1.75 6.96154V6.6859zM10.2163.25H6.6859C3.13145.25.25 3.13145.25 6.6859v.27564c0 3.70666 3.00486 6.71156 6.71154 6.71156H15.609c1.0125 0 1.8333.8208 1.8333 1.8333s-.8208 1.8333-1.8333 1.8333H7.01282c-1.60375 0-2.90385 1.3001-2.90385 2.9039 0 1.3248.88713 2.4423 2.09974 2.7911.06039.0173.12158.0328.18352.0463.20007.0436.40785.0665.62099.0665l.02449-.0001H15.609c4.22 0 7.641-3.421 7.641-7.641 0-4.22-3.421-7.64101-7.641-7.64101H6.96154c-.49918 0-.90385-.40467-.90385-.90385 0-.49918.40467-.90385.90385-.90385h3.25636c1.6038 0 2.9039-1.30009 2.9039-2.90384 0-1.60375-1.3001-2.903849-2.9039-2.90385h-.0016zm0 4.30769c-.77528 0-1.4038-.62852-1.4038-1.40384 0-.77505.62808-1.4034 1.403-1.40385h.0017c.7749.00045 1.403.6288 1.403 1.40385 0 .77532-.6285 1.40384-1.4039 1.40384zM7.01282 21.6474c-.10108 0-.19967-.0106-.29469-.0309-.03025-.0065-.06014-.0139-.08963-.0223-.58829-.1673-1.01912-.7086-1.01912-1.3505 0-.7753.62852-1.4039 1.40384-1.4039s1.40385.6286 1.40385 1.4039c0 .7696-.61935 1.3946-1.38683 1.4037h-.01742z",fill:"url(#paint0_linear_3007_70027)"})}),(0,d.jsxs)("defs",{children:[(0,d.jsxs)("linearGradient",{id:"paint0_linear_3007_70027",x1:"11.75",y1:".250001",x2:"11.75",y2:"23.1475",gradientUnits:"userSpaceOnUse",children:[(0,d.jsx)("stop",{offset:".28125",stopColor:"#7D55EC"}),(0,d.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]}),(0,d.jsx)("clipPath",{id:"clip0_3007_70027",children:(0,d.jsx)("path",{fill:"#fff",transform:"matrix(0 1 1 0 0 0)",d:"M0 0h24v24H0z"})})]})]})},j=t(60547),_=t(47409),y=t(97496),Z=t(41788),O=t(55378),P=t(86673),w=t(54283),k=t(82531),C=t(56681),S=t(66166),T=t(10503),R=t(33766),I=t(59920),M=t(98781),E=t(66050),L=t(95820),D=t(49125),N=t(7715),H=t(96510),V=t(59e3);function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Y={Icon:T.Nt,IconSelected:x,label:function(){return"Pipeline runs"},uuid:"pipeline_runs"},B={Icon:T.Re,IconSelected:p,label:function(){return"Block runs"},uuid:"block_runs"},F=[Y,B];function z(e){var n,t,i=e.pipeline,o=(0,s.useRouter)(),u=(0,l.useState)(null),c=u[0],p=u[1],x=(0,l.useState)(Y),Z=x[0],T=x[1],A=(0,l.useState)(C.G7[0]),z=A[0],W=A[1],q=(0,l.useState)({}),G=q[0],Q=q[1],K=(0,l.useState)(null),J=K[0],X=K[1],$=(0,l.useMemo)((function(){return Y.uuid===(null===Z||void 0===Z?void 0:Z.uuid)}),[null===Z||void 0===Z?void 0:Z.uuid]),ee=i.uuid,ne=k.ZP.pipelines.detail(ee,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,te=(0,l.useMemo)((function(){return U(U({},null===ne||void 0===ne?void 0:ne.pipeline),{},{uuid:ee})}),[ne,ee]),ie=(0,l.useState)(),re=ie[0],oe=ie[1],ue=(0,V.iV)(),ce=(0,S.Z)(ue),le=null!==ue&&void 0!==ue&&ue.page?ue.page:0;(0,l.useEffect)((function(){var e=ue.pipeline_run_id,n=ue.status;if(!(0,N.Xy)(ue,ce)){var t=U(U({},ce),ue);e?t.pipeline_run_id=e:t.pipeline_uuid=ee,n?t.status=n:delete t.status,X(t),Q({})}}),[ee,ue,ce]);var ae={_limit:30,_offset:30*le,pipeline_uuid:ee},se=(0,N.gR)(U(U({},J),ae),[L.i,"page"]);$&&(se=(0,N.gR)(se,[R.O2]));var de=k.ZP.block_runs.list(se,{},{pauseFetch:!J}).data,pe=(0,l.useMemo)((function(){return(null===de||void 0===de?void 0:de.block_runs)||[]}),[de]),fe=U({},ae);null!==ue&&void 0!==ue&&ue.status&&(fe.status=ue.status),$||(fe=(0,N.gR)(fe,[R.O2]));var ve=k.ZP.pipeline_runs.list(fe,{refreshInterval:5e3}),he=ve.data,be=ve.mutate,me=(0,l.useMemo)((function(){return(null===he||void 0===he?void 0:he.pipeline_runs)||[]}),[he]),ge=(0,l.useMemo)((function(){var e,n;return $?(null===he||void 0===he||null===(e=he.metadata)||void 0===e?void 0:e.count)||[]:(null===de||void 0===de||null===(n=de.metadata)||void 0===n?void 0:n.count)||[]}),[null===de||void 0===de||null===(n=de.metadata)||void 0===n?void 0:n.count,null===he||void 0===he||null===(t=he.metadata)||void 0===t?void 0:t.count,$]),xe=(0,l.useMemo)((function(){return me.some((function(e){var n=e.status;return n===E.V.INITIAL||n===E.V.RUNNING}))}),[me]),je=(0,l.useMemo)((function(){return Object.values(G||{}).filter((function(e){return null!==e}))}),[G]),_e=(0,a.Db)(k.ZP.pipelines.useUpdate(ee),{onSuccess:function(e){return(0,H.wD)(e,{callback:function(){Q({}),be()},onErrorCallback:function(e,n){return p({errors:n,response:e})}})}}),ye=(0,r.Z)(_e,2),Ze=ye[0],Oe=ye[1].isLoading,Pe=(0,S.Z)(Z);(0,l.useEffect)((function(){var e=ue[L.i];e&&T(F.find((function(n){return n.uuid===e})))}),[ue,Z,Pe]);var we=(0,l.useMemo)((function(){return(0,d.jsx)(P.Z,{p:2,children:(0,d.jsx)(g.Z,{maxPages:9,onUpdate:function(e){var n=Number(e),t=U(U({},ue),{},{page:n>=0?n:0});o.push("/pipelines/[pipeline]/runs","/pipelines/".concat(ee,"/runs?").concat((0,V.uM)(t)))},page:Number(le),totalPages:Math.ceil(ge/30)})})}),[le,ee,ue,o,ge]),ke=(0,l.useMemo)((function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(y.Z,{allowBulkSelect:(null===te||void 0===te?void 0:te.type)!==M.qL.STREAMING,fetchPipelineRuns:be,onClickRow:function(e){return oe((function(n){var t=me[e];return(null===n||void 0===n?void 0:n.id)!==t.id?t:null}))},pipelineRuns:me,selectedRun:re,selectedRuns:G,setErrors:p,setSelectedRuns:Q}),we]})}),[be,we,null===te||void 0===te?void 0:te.type,me,re,G]),Ce=(0,l.useMemo)((function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f.Z,{blockRuns:pe,pipeline:te}),we]})}),[pe,we,te]);return(0,d.jsxs)(j.Z,{afterHidden:$&&!re,breadcrumbs:[{label:function(){return"Runs"}}],buildSidekick:$?function(e){return(0,C.ZP)(U(U({},e),{},{selectedRun:re,selectedTab:z,setSelectedTab:W}))}:function(e){return(0,C.ZP)(e)},errors:c,pageName:I.M.RUNS,pipeline:te,setErrors:p,title:function(e){var n=e.name;return"".concat(n," runs")},uuid:"".concat(I.M.RUNS,"_").concat(ee),children:[(0,d.jsx)(m.Z,{children:(0,d.jsx)(P.Z,{py:1,children:(0,d.jsxs)(b.Z,{alignItems:"center",children:[xe&&$&&(0,d.jsx)(P.Z,{pl:2,children:(0,d.jsx)(v.Z,{danger:!0,loading:Oe,onClick:function(){Ze({pipeline:{status:E.V.CANCELLED}})},outline:!0,children:"Cancel running pipeline runs"})}),je.length>0&&(0,d.jsx)(P.Z,{pl:2,children:(0,d.jsxs)(v.Z,{loading:Oe,onClick:function(){Ze({pipeline:{pipeline_runs:je,status:M.QK.RETRY}})},primary:!0,children:["Retry selected runs (",je.length,")"]})}),(0,d.jsx)(h.Z,{onClickTab:function(e){var n=e.uuid;X(null),(0,R.u7)({tab:n},{replaceParams:!0})},selectedTabUUID:null===Z||void 0===Z?void 0:Z.uuid,tabs:F}),$&&(0,d.jsxs)(O.Z,{compact:!0,defaultColor:!0,onChange:function(e){e.preventDefault(),"all"===e.target.value?(X(null),(0,R.u7)({tab:Y.uuid},{replaceParams:!0})):(0,R.u7)({page:0,status:e.target.value})},paddingRight:4*D.iI,placeholder:"Select run status",value:null===J||void 0===J?void 0:J.status,children:[(0,d.jsx)("option",{value:"all",children:"All statuses"},"all_statuses"),Object.values(E.V).map((function(e){return(0,d.jsx)("option",{value:e,children:_.Do[e]},e)}))]})]})})}),he||de?(0,d.jsxs)(d.Fragment,{children:[$&&ke,B.uuid===(null===Z||void 0===Z?void 0:Z.uuid)&&Ce]}):(0,d.jsx)(P.Z,{m:3,children:(0,d.jsx)(w.Z,{inverted:!0})})]})}z.getInitialProps=function(){var e=(0,i.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var W=(0,Z.Z)(z)},79897:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/runs",function(){return t(77492)}])}},function(e){e.O(0,[844,7607,4804,1774,9350,1424,1005,7815,547,3752,8312,9774,2888,179],(function(){return n=79897,e(e.s=n);var n}));var n=e.O();_N_E=n}]);