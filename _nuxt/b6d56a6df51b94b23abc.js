(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{610:function(t,e,r){"use strict";r(348);var n=r(216);e.a=Object(n.a)("layout")},625:function(t,e,r){"use strict";r(14),r(10),r(11);var n=r(1),o=(r(112),r(9),r(5),r(350),r(50),r(60),r(15)),c=r(99),l=r(132);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:d({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},633:function(t,e,r){"use strict";var n={name:[function(t){return!!t||"Name is required"}],email:[function(t){return!!t||"E-mail is required"},function(t){return/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(t)||"E-mail must be valid"}],password:[function(t){return!!t||"Password is required"}]},o={name:"SignupForm",data:function(){return{isValid:!1,formData:{name:null,email:null,password:null},rules:n}},props:{isLoading:{type:Boolean,default:!1}},methods:{submit:function(){if(!this.$refs.form.validate())return!1;this.$emit("submit",this.formData)}}},c=r(63),l=r(74),f=r.n(l),d=r(223),m=r(625),h=r(610),v=r(699),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}},model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[r("v-text-field",{ref:"name-input",attrs:{label:"Name",name:"name","prepend-icon":"mdi-account",type:"text",rules:t.rules.name,required:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),t._v(" "),r("v-text-field",{ref:"email-input",attrs:{label:"Email",name:"email","prepend-icon":"mdi-email",type:"text",rules:t.rules.email,required:""},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),t._v(" "),r("v-text-field",{ref:"password-input",attrs:{label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password",rules:t.rules.password,required:""},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}}),t._v(" "),r("v-layout",{attrs:{"justify-space-between":"","mt-4":""}},[r("v-btn",{attrs:{type:"submit",color:"primary",disabled:!t.isValid||t.isLoading,loading:t.isLoading,block:""}},[t._v("\n      Signup\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VBtn:d.a,VForm:m.a,VLayout:h.a,VTextField:v.a})},716:function(t,e,r){"use strict";r.r(e);r(14),r(10),r(9),r(5),r(11);var n=r(1),o=r(81),c=r(633);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=function(){return null},m=f({hasError:function(){return this.error.map((function(){return!0})).getOrElse(!1)},errorMessage:function(){return this.error.map((function(t){return t.message})).getOrElse(null)}},Object(o.d)("registration",["status"]),{},Object(o.c)("registration",["error","isLoading"])),h={status:function(data){var t=this;data.cata({NotAsked:d,Loading:d,Success:function(){return t.onSuccess()},Failure:d})}},v=f({onSuccess:function(){this.$router.push({name:"login"})}},Object(o.b)("registration",["submit","reset"]));function O(){var t=this;this.error.cata({Nothing:function(){return null},Just:function(){return t.reset()}})}e.default={name:"SignupPage",layout:"auth",components:{SignupForm:c.a},computed:m,watch:h,methods:v,mounted:O,beforeDestroy:O}}}]);