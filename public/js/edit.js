!function(e){var t={};function o(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=41)}({41:function(e,t,o){e.exports=o(42)},42:function(e,t){$("#modalSettings").on("change",".api-update",(function(e){$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});var t=new Object;t._token=window.token,t.name=$(this).attr("name"),"checkbox"==$(this).attr("type")?t.value=$(this).is(":checked")?"1":"0":t.value=$(this).val();$(this).attr("value");var o=$(this);$.post("/api/profile",t,(function(e){if("credentials"==e.field)$("#profile-credentials").html(e.value);else if("name"==e.field)$("#profile-name").html(e.value);else if("actionability_interest"==e.field)"1"==e.value?$("#profile-interest-actionability").show():$("#profile-interest-actionability").hide();else if("dosage_interest"==e.field)"1"==e.value?$("#profile-interest-dosage").show():$("#profile-interest-dosage").hide();else if("validity_interest"==e.field)"1"==e.value?$("#profile-interest-validity").show():$("#profile-interest-validity").hide();else if("validity_notify"==e.field){var t="/api/home/follow/reload";$.get(t,(function(e){$("#follow-table").bootstrapTable("load",e.data),$("#follow-table").bootstrapTable("resetSearch","")})).fail((function(e){alert("Error reloading table")}))}else if("dosage_notify"==e.field){t="/api/home/follow/reload";$.get(t,(function(e){$("#follow-table").bootstrapTable("load",e.data),$("#follow-table").bootstrapTable("resetSearch","")})).fail((function(e){alert("Error reloading table")}))}else if("actionability_notify"==e.field){t="/api/home/follow/reload";$.get(t,(function(e){$("#follow-table").bootstrapTable("load",e.data),$("#follow-table").bootstrapTable("resetSearch","")})).fail((function(e){alert("Error reloading table")}))}})).fail((function(e){o.val(o.attr("value")),swal({title:"Error!",text:"An error was encountered communicating with the server",icon:"warning",button:"OK"})}))})),$("#modalFollowEp").on("change",".api-update",(function(e){$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});var t=new Object;t._token=window.token,t.name=$(this).attr("name"),"checkbox"==$(this).attr("type")?(t.value=$(this).is(":checked")?"1":"0",t.ident=$(this).val()):t.value=$(this).val();$(this).attr("value");var o=$(this);$.post("/api/profile",t,(function(e){if("select[]"==e.field){$.get("/api/home/follow/reload",(function(e){$("#follow-table").bootstrapTable("load",e.data),$("#follow-table").bootstrapTable("resetSearch","")})).fail((function(e){alert("Error reloading table")}))}})).fail((function(e){o.val(o.attr("value")),swal({title:"Error!",text:"An error was encountered communicating with the server",icon:"warning",button:"OK"})}))}))}});