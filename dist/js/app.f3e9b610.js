(function(e){function t(t){for(var r,s,o=t[0],l=t[1],c=t[2],p=0,u=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&u.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);v&&v(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},i=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var v=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:e.Drawer,callback:function(t){e.Drawer=t},expression:"Drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{link:""},on:{click:function(t){e.Comp="Percent"}}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-view-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Percent")])],1)],1),a("v-list-item",{attrs:{link:""},on:{click:function(t){e.Comp="Graph"}}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-percent")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Graph")])],1)],1),a("v-list-item",{attrs:{link:""},on:{click:function(t){e.Comp="Margin"}}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-currency-usd")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Margin")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:"","clipped-left":""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.Drawer=!e.Drawer}}}),a("v-toolbar-title",[e._v("Algebraic")]),a("v-spacer"),e._v(" $USD 1.00000 "),a("v-icon",[e._v("mdi-arrow-left-right")]),e._v(" $CAD "+e._s(e.Exchange.rates.CAD)+" ")],1),a("v-content",[a("transition",{attrs:{name:"slide-fade"}},[a("Percent",{directives:[{name:"show",rawName:"v-show",value:"Percent"===e.Comp,expression:"Comp === 'Percent'"}]})],1),a("transition",{attrs:{name:"slide-fade"}},[a("Graph",{directives:[{name:"show",rawName:"v-show",value:"Graph"===e.Comp,expression:"Comp === 'Graph'"}]})],1),a("transition",{attrs:{name:"slide-fade"}},[a("Margin",{directives:[{name:"show",rawName:"v-show",value:"Margin"===e.Comp,expression:"Comp === 'Margin'"}],attrs:{ratio:e.Exchange.rates.CAD}})],1)],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-sparkline",{attrs:{value:e.x,labels:e.y,type:e.ChartType,"label-size":3,gradient:["#1b5e20","#c8e6c9"],padding:6,radius:10,"line-width":1.5,smooth:!0,"auto-line-width":!0}})],1)],1)],1),a("v-row",{staticClass:"fill-height",attrs:{align:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{small:"",color:"green darken-4"},on:{click:e.AddChartData}},[e._v("Add Data")])],1),a("v-col",{attrs:{cols:"6"}},[a("span",{staticClass:"pr-5"},[e._v("Type")]),a("v-btn-toggle",{attrs:{mandatory:""},model:{value:e.ChartType,callback:function(t){e.ChartType=t},expression:"ChartType"}},[a("v-btn",{attrs:{small:"",text:"",value:"bar"}},[e._v("bar")]),a("v-btn",{attrs:{small:"",text:"",value:"trend"}},[e._v("trend")])],1)],1)],1),e._l(e.ChartData,(function(t,r){return a("v-row",{key:r},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("v-btn",{staticClass:"ma-5",attrs:{small:"",color:"red"},on:{click:function(t){return e.DeleteChartData(r)}}},[e._v(" Delete "),a("v-icon",{attrs:{right:""}},[e._v("mdi-delete")])],1)],1),a("v-col",{attrs:{cols:"5"}},[a("v-text-field",{attrs:{label:"Vertical Data",clearable:""},model:{value:t.Value,callback:function(a){e.$set(t,"Value",a)},expression:"Data.Value"}})],1),a("v-col",{attrs:{cols:"5"}},[a("v-text-field",{attrs:{label:"Horizontal Data",clearable:""},model:{value:t.Label,callback:function(a){e.$set(t,"Label",a)},expression:"Data.Label"}})],1)],1)],1)],1)],1)}))],2)},o=[],l=(a("99af"),a("caad"),a("d81d"),a("a434"),a("a9e3"),a("ac1f"),a("2532"),a("1276"),{name:"Graph",data:function(){return{ChartData:[{Label:"",Value:""}],ChartType:"trend"}},methods:{AddChartData:function(){this.ChartData.push({Label:"",Value:""})},DeleteChartData:function(e){this.ChartData.splice(e,1)}},computed:{x:function(){for(var e,t=[],a=0;a<this.ChartData.length;a++){var r=this.ChartData[a]["Value"];r&&r.includes(" ")?(e=r.split(" ").map(Number),0==t.length?t=e:t.concat(e)):r&&r.includes("\t")?(e=r.split("\t").map(Number),0==t.length?t=e:t.concat(e)):t.push(Number(r))}return t},y:function(){for(var e,t=[],a=0;a<this.ChartData.length;a++){var r=this.ChartData[a]["Label"];r&&r.includes(" ")?(e=r.split(" "),0==t.length?t=e:t.concat(e)):r&&r.includes("\t")?(e=r.split("\t"),0==t.length?t=e:t.concat(e)):t.push(r)}return t}}}),c=l,v=a("2877"),p=a("6544"),u=a.n(p),d=a("8336"),f=a("a609"),h=a("b0af"),C=a("62ad"),m=a("a523"),b=a("132d"),g=a("0fd9"),w=a("7f2e"),y=a("8654"),x=Object(v["a"])(c,s,o,!1,null,null,null),_=x.exports;u()(x,{VBtn:d["a"],VBtnToggle:f["a"],VCard:h["a"],VCol:C["a"],VContainer:m["a"],VIcon:b["a"],VRow:g["a"],VSparkline:w["a"],VTextField:y["a"]});var D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"This","single-line":"",solo:"",clearable:""},model:{value:e.Relative1,callback:function(t){e.Relative1=t},expression:"Relative1"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Relative to this","single-line":"",solo:"",clearable:""},model:{value:e.Relative2,callback:function(t){e.Relative2=t},expression:"Relative2"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-title",{staticClass:"display-1"},[e._v("Percentage")]),a("v-card-text",{staticClass:"display-2"},[e._v(e._s(e.result))])],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-title",{staticClass:"display-1"},[e._v("Difference")]),a("v-card-text",{staticClass:"display-2"},[e._v(e._s(e.diff))])],1)],1)],1)],1)},T=[],V=(a("b680"),{name:"Percent",data:function(){return{Relative1:null,Relative2:null}},computed:{result:function(){return null!=this.Relative1&&null!=this.Relative2?this.Relative1/this.Relative2>1?(this.Relative1/this.Relative2*100-100).toFixed(2)+"% Increase":Math.abs(this.Relative1/this.Relative2*100-100).toFixed(2)+"% Decrease":""},diff:function(){return null!=this.Relative1&&null!=this.Relative2?Math.abs(this.Relative1-this.Relative2):""}}}),P=V,k=a("99d9"),M=Object(v["a"])(P,D,T,!1,null,null,null),A=M.exports;u()(M,{VCard:h["a"],VCardText:k["a"],VCardTitle:k["b"],VCol:C["a"],VContainer:m["a"],VRow:g["a"],VTextField:y["a"]});var R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"text-center"},[e._v("Type")])]),a("v-btn-toggle",{attrs:{mandatory:""},model:{value:e.Type,callback:function(t){e.Type=t},expression:"Type"}},[a("v-btn",[e._v(" Margin ")]),a("v-btn",[e._v(" Price ")]),a("v-btn",[e._v(" Markup ")]),a("v-btn",[e._v(" Currency Conversion ")])],1)],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:0==e.Type,expression:"Type == 0"}],staticClass:"pt-5"},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"$ Cost",clearable:"",filled:""},model:{value:e.Margin.Cost,callback:function(t){e.$set(e.Margin,"Cost",t)},expression:"Margin.Cost"}}),a("v-text-field",{attrs:{label:"$ Price",clearable:"",filled:""},model:{value:e.Margin.Price,callback:function(t){e.$set(e.Margin,"Price",t)},expression:"Margin.Price"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-title",{staticClass:"display-1"},[e._v("Margin")]),a("v-card-text",{staticClass:"display-2"},[e._v(e._s(e.CompMargin))])],1)],1)],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:1==e.Type,expression:"Type == 1"}],staticClass:"pt-5"},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"$ Cost",clearable:"",filled:""},model:{value:e.Price.Cost,callback:function(t){e.$set(e.Price,"Cost",t)},expression:"Price.Cost"}}),a("v-text-field",{attrs:{label:"% Margin",clearable:"",filled:""},model:{value:e.Price.Margin,callback:function(t){e.$set(e.Price,"Margin",t)},expression:"Price.Margin"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-title",{staticClass:"display-1"},[e._v("Selling Price")]),a("v-card-text",{staticClass:"display-2"},[e._v(e._s(e.CompPrice))])],1)],1)],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:2==e.Type,expression:"Type == 2"}],staticClass:"pt-5"},[a("v-col",{attrs:{cols:"12"}})],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:3==e.Type,expression:"Type == 3"}],staticClass:"pt-5"},[a("v-btn-toggle",{attrs:{mandatory:""},model:{value:e.Conversion.Type,callback:function(t){e.$set(e.Conversion,"Type",t)},expression:"Conversion.Type"}},[a("v-btn",[e._v(" USD to CAD ")]),a("v-btn",[e._v(" CAD to USD ")])],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{directives:[{name:"show",rawName:"v-show",value:0==e.Conversion.Type,expression:"Conversion.Type == 0"}],attrs:{label:"$ USD",clearable:"",filled:""},model:{value:e.Conversion.USD,callback:function(t){e.$set(e.Conversion,"USD",t)},expression:"Conversion.USD"}}),a("v-text-field",{directives:[{name:"show",rawName:"v-show",value:1==e.Conversion.Type,expression:"Conversion.Type == 1"}],attrs:{label:"$ CAD",clearable:"",filled:""},model:{value:e.Conversion.CAD,callback:function(t){e.$set(e.Conversion,"CAD",t)},expression:"Conversion.CAD"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-title",{directives:[{name:"show",rawName:"v-show",value:0==e.Conversion.Type,expression:"Conversion.Type == 0"}],staticClass:"display-1"},[e._v("USD to CAD")]),a("v-card-title",{directives:[{name:"show",rawName:"v-show",value:1==e.Conversion.Type,expression:"Conversion.Type == 1"}],staticClass:"display-1"},[e._v("CAD to USD")]),a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:0==e.Conversion.Type,expression:"Conversion.Type == 0"}],staticClass:"display-2"},[e._v(e._s(e.CompConversion))]),a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:1==e.Conversion.Type,expression:"Conversion.Type == 1"}],staticClass:"display-2"},[e._v(e._s(e.CompConversion))])],1)],1)],1)],1)},$=[],S={name:"Margin",props:["ratio"],data:function(){return{Type:0,Margin:{Cost:"",Price:""},Price:{Cost:"",Margin:""},Conversion:{CAD:"",USD:"",Type:0}}},computed:{CompMargin:function(){return this.Margin.Price>0?((this.Margin.Price-this.Margin.Cost)/this.Margin.Price*100).toFixed(2)+"%":""},CompPrice:function(){return 1-this.Price.Margin/100>0?"$ "+(this.Price.Cost/(1-this.Price.Margin/100)).toFixed(2):""},CompConversion:function(){return 0==this.Conversion.Type?"$ "+(this.Conversion.USD*this.ratio).toFixed(2):"$ "+(this.Conversion.CAD/this.ratio).toFixed(2)}}},N=S,j=Object(v["a"])(N,R,$,!1,null,null,null),O=j.exports;u()(j,{VBtn:d["a"],VBtnToggle:f["a"],VCard:h["a"],VCardText:k["a"],VCardTitle:k["b"],VCol:C["a"],VContainer:m["a"],VRow:g["a"],VTextField:y["a"]});var U=a("bc3a"),E=a.n(U),F={name:"Algebraic",props:{source:String},components:{Percent:A,Graph:_,Margin:O},data:function(){return{Drawer:!1,Comp:"Percent",Exchange:{base:"",date:"",rates:{CAD:""}}}},created:function(){this.$vuetify.theme.dark=!0,this.GetExchangeRate()},methods:{GetExchangeRate:function(){var e=this;E.a.get("https://api.exchangeratesapi.io/latest?symbols=CAD&base=USD").then((function(t){e.Exchange=t.data}))}}},L=F,G=(a("aff7"),a("7496")),I=a("40dc"),B=a("5bc1"),z=a("a75b"),J=a("8860"),q=a("da13"),H=a("1800"),K=a("5d23"),Q=a("f774"),W=a("2fa4"),X=a("2a7f"),Y=Object(v["a"])(L,n,i,!1,null,"4d2ff703",null),Z=Y.exports;u()(Y,{VApp:G["a"],VAppBar:I["a"],VAppBarNavIcon:B["a"],VContent:z["a"],VIcon:b["a"],VList:J["a"],VListItem:q["a"],VListItemAction:H["a"],VListItemContent:K["a"],VListItemTitle:K["b"],VNavigationDrawer:Q["a"],VSpacer:W["a"],VToolbarTitle:X["a"]});var ee=a("f309");r["a"].use(ee["a"]);var te=new ee["a"]({}),ae=a("9483");Object(ae["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({vuetify:te,render:function(e){return e(Z)}}).$mount("#app")},"787b":function(e,t,a){},aff7:function(e,t,a){"use strict";var r=a("787b"),n=a.n(r);n.a}});
//# sourceMappingURL=app.f3e9b610.js.map