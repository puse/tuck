(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{603:function(t,e,n){var content=n(620);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("26533eca",content,!0,{sourceMap:!1})},604:function(t,e,n){var content=n(622);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("47b84340",content,!0,{sourceMap:!1})},616:function(t){t.exports=JSON.parse('["Moscow","New York","Sydney"]')},617:function(t){t.exports=JSON.parse('[{"key":"temperature","icon":"temperature-celsius"},{"key":"humidity","icon":"water-percent"},{"key":"wind","icon":"wind-turbine"},{"key":"pressure","icon":"elevator-down"}]')},619:function(t,e,n){"use strict";var r=n(603);n.n(r).a},620:function(t,e,n){(e=n(19)(!1)).push([t.i,".clamp[data-v-8eda38fa]{width:220px}",""]),t.exports=e},621:function(t,e,n){"use strict";var r=n(604);n.n(r).a},622:function(t,e,n){(e=n(19)(!1)).push([t.i,".clamp[data-v-5ff64909]{width:220px}",""]),t.exports=e},628:function(t,e,n){"use strict";var r=n(655),o=n(347),map=n(700),c=n(702),l=n(724),m=n(728),f=n(729),d=n(703),v=n(704),h=n(705),O=n(706),y=m.a({representation:"date"}),w=f.a,_=o.a(map.a(y),c.a(["start","end"])),k=o.a(l.a({start:o.a(d.a,v.a),end:o.a(h.a,O.a)}),map.a(w)),j={name:"WeatherTimeRangeInput",props:{value:Object,scope:Object},data:function(){return{isActive:!1,tmpInput:null}},computed:{isoPair:{get:function(){return this.tmpInput||_(this.value)},set:function(input){return input.length<2?this.stash(input):this.update(input)}},isoMin:function(){return this.scope.map(r.a("min")).map(y).getOrElse(void 0)},isoMax:function(){return this.scope.map(r.a("max")).map(y).getOrElse(void 0)},inputValue:function(){return this.isoPair.join(" ~ ")}},methods:{stash:function(input){this.tmpInput=input},update:function(t){this.isActive=!1,this.stash(void 0),this.$emit("input",k(t))}}},x=(n(619),n(63)),V=n(74),S=n.n(V),I=n(718),P=n(643),L=n(699),component=Object(x.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"close-on-content-click":!1,"offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("div",{staticClass:"clamp"},[n("v-text-field",t._g({attrs:{value:t.inputValue,loading:t.scope.isLoading(),disabled:!t.scope.isSuccess(),readonly:"","prepend-inner-icon":"mdi-calendar"}},r))],1)]}}]),model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[t._v(" "),n("v-date-picker",{attrs:{min:t.isoMin,max:t.isoMax,range:""},model:{value:t.isoPair,callback:function(e){t.isoPair=e},expression:"isoPair"}})],1)}),[],!1,null,"8eda38fa",null);e.a=component.exports;S()(component,{VDatePicker:I.a,VMenu:P.a,VTextField:L.a})},629:function(t,e,n){"use strict";var r={name:"LocationInput",props:{value:String,options:Array},methods:{update:function(t){this.$emit("input",t),this.isActive=!1}}},o=(n(621),n(63)),c=n(74),l=n.n(c),m=n(719),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clamp"},[e("v-select",{attrs:{value:this.value,items:this.options,"prepend-inner-icon":"mdi-map","menu-props":"auto",label:"Select location","single-line":"",width:"200px"},on:{input:this.update}})],1)}),[],!1,null,"5ff64909",null);e.a=component.exports;l()(component,{VSelect:m.a})},630:function(t,e,n){"use strict";var r=n(69),o={name:"WeatherChart",props:{data:{type:Object,default:function(){return r.c.NotAsked}}}},c=n(63),l=n(74),m=n.n(l),f=n(727),d=n(707),v=n(726),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-skeleton-loader",{attrs:{loading:this.data.isLoading(),transition:"fade-transition",height:"100",type:"image"}},[this.data.isSuccess()?e("v-sparkline",{attrs:{value:this.data.value,height:"100",padding:"24","stroke-linecap":"round",smooth:""}}):e("v-alert",{attrs:{type:"warning"}},[this._v("\n    Not available\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports;m()(component,{VAlert:f.a,VSkeletonLoader:d.a,VSparkline:v.a})},631:function(t,e,n){"use strict";var r=n(717),o=n(69),c={name:"WeatherTimeline",props:{data:{type:Object,default:function(){return o.c.Loading}},metrics:{type:Array,default:function(){return[]}}},computed:{labelOf:function(){return function(t){var time=t.time;return r.a(time,"hh:mm, dd MMM")}}}},l=n(63),m=n(74),f=n.n(m),d=n(601),v=n(642),h=n(591),O=n(204),y=n(128),w=n(45),_=n(108),k=n(594),j=n(708),x=n(709),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data.isSuccess()?n("v-timeline",t._l(t.data.value,(function(e){return n("v-timeline-item",{key:Number(e.time),attrs:{right:"",small:""}},[n("v-chip",{attrs:{slot:"opposite",color:"primary",outlined:""},slot:"opposite"},[n("v-icon",{attrs:{left:"",small:""}},[t._v("\n        mdi-clock\n      ")]),t._v(" "),n("time",{attrs:{datetime:e.time.toISOString()}},[t._v("\n        "+t._s(t.labelOf(e))+"\n      ")])],1),t._v(" "),n("v-card",{attrs:{outlined:"",dense:""}},[n("v-row",t._l(t.metrics,(function(r){return n("v-col",{key:r.key},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-icon",[n("v-icon",[t._v(" mdi-"+t._s(r.icon)+" ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n                "+t._s(e.data[r.key])+"\n              ")]),t._v(" "),n("v-list-item-subtitle",[t._v("\n                "+t._s(r.key)+"\n              ")])],1)],1)],1)})),1)],1)],1)})),1):t._e()}),[],!1,null,null,null);e.a=component.exports;f()(component,{VCard:d.a,VChip:v.a,VCol:h.a,VIcon:O.a,VListItem:y.a,VListItemContent:w.a,VListItemIcon:_.a,VListItemSubtitle:w.b,VListItemTitle:w.c,VRow:k.a,VTimeline:j.a,VTimelineItem:x.a})},714:function(t,e,n){"use strict";n.r(e);n(14),n(10),n(9),n(5),n(11);var r=n(1),o=n(81),c=n(712),l=n(654),m=n(724),f=n(725),d=n(224),v=n(700),h=n(710),O=n(711),y=n(656),w=n(657),_=n(713),k=n(616),j=n(617),x=n(628),V=n(629),S=n(630),I=n(631);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function L(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var M=L({data:function(){return this.forecastOf(this.form.location)},timeScope:function(){var t=y.a,e=w.a;return this.data.map(l.a("time")).map(m.a({min:t,max:e}))},focusData:function(){var t=this;return this.data.map(f.a((function(e){var time=e.time;return _.a(time,t.form.timeRange)})))},seriesFor:function(){var t=this;return function(e){var n=d.a(["data",e,"value"]);return t.focusData.map(v.a(n))}}},Object(o.c)("weather",["forecastOf"])),A=L({update:function(t){this.ensureForecastOf(t)}},Object(o.b)("weather",["ensureForecastOf"]));e.default={name:"DashboardPage",data:function(){return{form:{timeRange:{start:h.a(),end:O.a()},location:c.a(k)},metrics:j,cityNames:k}},computed:M,methods:A,components:{TimeRangeInput:x.a,LocationInput:V.a,WeatherChart:S.a,WeatherTimeline:I.a},mounted:function(){this.ensureForecastOf(this.form.location)}}}}]);