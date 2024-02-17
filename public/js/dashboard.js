!function(e){var t={};function a(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=43)}({43:function(e,t,a){e.exports=a(44)},44:function(e,t){$((function(){var e=$("#follow-table"),t=$("#table"),a=$("#gencon-table"),o=$("#disease-table");$("#startdate").datepicker({uiLibrary:"bootstrap",disableDates:function(e){return e>new Date(2021,3,7)}}),$("#stopdate").datepicker({uiLibrary:"bootstrap",disableDates:function(e){return e>new Date(2021,3,7)}}),$("#dashboard-logout").on("login",(function(e,t,a){window.location.reload()})),$(".action-new-region").on("click",(function(){$("#search_region_form")[0].reset(),$("#modalSearchRegion").modal("show")})),$(".action-new-gene").on("click",(function(){$("#search_form")[0].reset(),$("#modalSearchGene").modal("show")})),$(".action-new-disease").on("click",(function(){$("#search_disease_form")[0].reset(),$("#modalSearchDisease").modal("show")})),$(".action-new-report").on("click",(function(){$("#report-form")[0].reset(),$(".action-select-text").html("GRCh37"),$("#select-gchr").val("GRCh38"),$("#report_form input[name=ident]").val(""),i.tagsinput("removeAll"),$("#modalReport").modal("show")})),$("#report-view").on("click",".action-edit-report",(function(){var e=$(this).attr("data-uuid");$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});var t="/api/reports/"+e;$("#report-form")[0].reset(),$("#report_form input[name=ident]").val(""),i.tagsinput("removeAll"),$.get(t,(function(t){$("#edit-report-title").html("Edit User Report"),$("#report-form").find("[name='title']").val(t.fields.title),$("#report-form").find("[name='description']").val(t.fields.description),$("#report-form").find("[name='startdate']").val(t.fields.startdate),$("#report-form").find("[name='stopdate']").val(t.fields.stopdate),$("#report-form").find("[name='ident']").val(e),$("#report-form").find("[name='regions']").val(t.fields.regions),$("#report-form").find("[name='type']").val(t.fields.type),$(".action-select-text").html(t.fields.type),t.fields.genes.forEach((function(e){i.tagsinput("add",{hgncid:e.hgnc_id,short:e.name})})),$("#modalReport").modal("show")})).fail((function(e){swal({title:"Error",text:"An error occurred while retrieving report.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})}))})),$("#report_modal").on("click",".action-select-grch",(function(){var e=$(this).attr("data-uuid");$(".action-select-text").html(e),$("#select-gchr").val(e)})),$("#report-view").on("click",".action-share-report",(function(){$(this).attr("data-uuid"),$(this).closest("tr").attr("data-index"),$(this);swal("The ability to share a report with others is scheduled to be released later this year.  Thank-you for your patience.")})),$("#report-view").on("click",".action-unlock-report",(function(){var e=$(this).attr("data-uuid"),t=($(this).closest("tr").attr("data-index"),$(this));$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});$.post("/api/reports/unlock",{id:e,_token:"{{ csrf_token() }}"},(function(e){t.removeClass("action-unlock-report").addClass("action-lock-report").html('<i class="fas fa-unlock" style="color:lightgray"></i>'),t.attr("title","Lock Report")})).fail((function(e){swal({title:"Error",text:"An error occurred while unlocking the report.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})}))})),$("#report-view").on("click",".action-lock-report",(function(){var e=$(this).attr("data-uuid"),t=($(this).closest("tr").attr("data-index"),$(this));$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});$.post("/api/reports/lock",{id:e,_token:"{{ csrf_token() }}"},(function(e){t.removeClass("action-lock-report").addClass("action-unlock-report").html('<i class="fas fa-lock" style="color:red"></i>'),t.attr("title","Unlock Report")})).fail((function(e){swal({title:"Error",text:"An error occurred while locking the report.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})}))})),$("#report-view").on("click",".action-remove-report",(function(){var e=$(this).attr("data-uuid");$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}}),swal({title:"Are you sure?",text:"You will not be able to restore.",icon:"warning",buttons:!0,dangerMode:!0}).then((function(a){if(a){$.post("/api/reports/remove",{id:e,_token:"{{ csrf_token() }}"},(function(a){t.bootstrapTable("remove",{field:"ident",values:e});var o=t.bootstrapTable("getData").length;$("#custom-report-count").html(o)})).fail((function(e){swal({title:"Error",text:"An error occurred while unlocking the report.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})}))}}))})),$(".action-toggle-notifications").on("click",(function(){var e,t=$(".action-toggle-pause").hasClass("fa-toggle-on");$(this).hasClass("fa-toggle-off")?($(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),t?($(".action-notification-alert").removeClass("alert-danger").addClass("alert-warning"),$(".action-notification-text").html("PAUSED")):($(".action-notification-alert").removeClass("alert-danger").addClass("alert-info"),$(".action-notification-text").html("ON")),$(".action-toggle-notifications-text").html("On"),e=1):($(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),t?($(".action-notification-alert").removeClass("alert-warning").addClass("alert-danger"),$(".action-notification-text").html("OFF")):($(".action-notification-alert").removeClass("alert-info").addClass("alert-danger"),$(".action-notification-text").html("OFF")),$(".action-toggle-notifications-text").html("Off"),e=0),$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});$.post("/api/home/toggle",{value:e,_token:"{{ csrf_token() }}"},(function(e){})).fail((function(e){swal({title:"Error",text:"An error occurred while setting notifications.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})}))})),$(".action-toggle-pause").on("click",(function(){var e,t=$(".action-toggle-notifications").hasClass("fa-toggle-on");$(this).hasClass("fa-toggle-off")?($(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),t&&($(".action-notification-alert").removeClass("alert-info").addClass("alert-warning"),$(".action-notification-text").html("PAUSED")),e=1):($(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),t&&($(".action-notification-alert").removeClass("alert-warning").addClass("alert-info"),$(".action-notification-text").html("ON")),e=0),$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});$.post("/api/home/toggle-pause",{value:e,_token:"{{ csrf_token() }}"},(function(e){})).fail((function(e){swal({title:"Error",text:"An error occurred while pausing notifications.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})}))})),$(".action-edit-profile").on("click",(function(){$("#modalProfile").modal("show")})),$(".action-select-folder").on("click",(function(){var e=$(this).find(".caption").attr("data-type");$(".action-select-folder").removeClass("border"),$(this).addClass("border"),$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});var t="/api/home/reports/"+e;$.get(t,(function(t){$("#table").bootstrapTable("load",t.data),$("#table").bootstrapTable("resetSearch",""),1==e?$("#report-toolbar").html('Unless locked <i class="fas fa-lock" style="color:red"></i>, Notifications are deleted after 30 days'):$("#report-toolbar").html("")})).fail((function(e){swal({title:"Error",text:"An error occurred while selecting a folder.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})}))})),$(".action-edit-settings").on("click",(function(){$("#settings-tabs-global").trigger("click"),$("#modalSettings").modal("show")})),$("#collapseFollow").on("shown.bs.collapse",(function(){$("#collapseFollowIcon").addClass("fa-minus-square").removeClass("fa-plus-square")})),$("#collapseFollow").on("hidden.bs.collapse",(function(){$("#collapseFollowIcon").addClass("fa-plus-square").removeClass("fa-minus-square")})),$("#collapseReports").on("shown.bs.collapse",(function(){$("#collapseReportsIcon").addClass("fa-minus-square").removeClass("fa-plus-square")})),$("#collapseReports").on("hidden.bs.collapse",(function(){$("#collapseReportsIcon").addClass("fa-plus-square").removeClass("fa-minus-square")})),$("#collapseDiseases").on("shown.bs.collapse",(function(){$("#collapseDiseaseIcon").addClass("fa-minus-square").removeClass("fa-plus-square")})),$("#collapseDiseases").on("hidden.bs.collapse",(function(){$("#collapseDiseaseIcon").addClass("fa-plus-square").removeClass("fa-minus-square")})),$("#collapseGenCon").on("shown.bs.collapse",(function(){$("#collapseGenConIcon").addClass("fa-minus-square").removeClass("fa-plus-square")})),$("#collapseGenCon").on("hidden.bs.collapse",(function(){$("#collapseGenConIcon").addClass("fa-plus-square").removeClass("fa-minus-square")})),e.on("click",".action-follow-gene",(function(t){var a=this;swal({title:"Are you sure?",text:"Unfollowed genes or groups can always be refollowed later.",icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){if(t){var o=$(a).closest("tr").data("hgnc");$("#unfollow-gene-field").val(o),$("#unfollow_form").submit();var r=$(a).closest("tr").find("td:first-child").html();e.bootstrapTable("remove",{field:"symbol",values:r}),$(":checkbox[value="+o.substring(1)+"]").prop("checked",!1)}}))})),$("body").on("click",".dropdown-menu li a",(function(){var e=$(this).parents("ul").attr("data-parent");if(void 0!==e){var t=$("[data-attachedUl="+e+"]"),a=t.find(".selection").text();t.find(".selection").text($(this).text()),function(e,t,a){$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});$.post("/api/home/notify",{gene:e,old:t,new:a,_token:"{{ csrf_token() }}"},(function(e){})).fail((function(e){swal({title:"Error",text:"An error occurred while changing notifications.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})}))}(t.closest("tr").attr("data-hgnc"),a,$(this).text())}else $(this).parents(".btn-group").find(".selection").text($(this).attr("data-value"))})),$(document).click((function(e){$(".dropdown-menu[data-parent]").hide()})),$("#unfollow_form").validate({submitHandler:function(e){$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});var t=$(e).serialize();$.post("/api/genes/unfollow",t,(function(e){var t=e.gene;$.get("/api/home/follow/reload",(function(e){switch($("#follow-table").bootstrapTable("load",e.data),$("#follow-table").bootstrapTable("resetSearch",""),t){case"@AllActionability":$("#modalSettings").find('input[name="actionability_notify"]').prop("checked",!1);break;case"@AllValidity":$("#modalSettings").find('input[name="validity_notify"]').prop("checked",!1);break;case"@AllDosage":$("#modalSettings").find('input[name="dosage_notify"]').prop("checked",!1);break;case"*":$("#modalSettings").find('input[name="allgenes_notify"]').prop("checked",!1)}$("#modalSearchGene").modal("hide")})).fail((function(e){alert("Error reloading table")}))})).fail((function(e){swal({title:"Error",text:"An error occurred while unfollowing the item.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})})),$("#modalUnFollowGene").modal("hide")},rules:{email:{required:!0,email:!0,maxlength:80}},messages:{email:{required:"Please enter your email address",email:"Please enter a valid email address",maxlength:"Section names must be less than 80 characters"}},errorElement:"em",errorClass:"invalid-feedback",errorPlacement:function(e,t){e.addClass("invalid-feedback"),"checkbox"===t.prop("type")?e.insertAfter(t.parent("label")):e.insertAfter(t)},highlight:function(e,t,a){$(e).addClass("is-invalid").removeClass("is-valid")},unhighlight:function(e,t,a){$(e).addClass("is-valid").removeClass("is-invalid")}}),$("#follow_form").validate({submitHandler:function(e){$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});var t=$(e).serialize();$.post("/api/genes/follow",t,(function(e){var t=e.gene;$.get("/api/home/follow/reload",(function(e){switch($("#follow-table").bootstrapTable("load",e.data),$("#follow-table").bootstrapTable("resetSearch",""),t){case"@AllActionability":$("#modalSettings").find('input[name="actionability_notify"]').prop("checked",!0);break;case"@AllValidity":$("#modalSettings").find('input[name="validity_notify"]').prop("checked",!0);break;case"@AllDosage":$("#modalSettings").find('input[name="dosage_notify"]').prop("checked",!0);break;case"*":$("#modalSettings").find('input[name="allgenes_notify"]').prop("checked",!0)}$("#modalSearchGene").modal("hide")})).fail((function(e){alert("Error reloading table")}))})).fail((function(e){swal({title:"Error",text:"An error occurred while following a item.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})}))},rules:{email:{required:!0,email:!0,maxlength:80}},messages:{email:{required:"Please enter your email address",email:"Please enter a valid email address",maxlength:"Section names must be less than 80 characters"}},errorElement:"em",errorClass:"invalid-feedback",errorPlacement:function(e,t){e.addClass("invalid-feedback"),"checkbox"===t.prop("type")?e.insertAfter(t.parent("label")):e.insertAfter(t)},highlight:function(e,t,a){$(e).addClass("is-invalid").removeClass("is-valid")},unhighlight:function(e,t,a){$(e).addClass("is-valid").removeClass("is-invalid")}}),$("#follow_disease_form").validate({submitHandler:function(e){$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});var t=$(e).serialize();$.post("/api/conditions/follow",t,(function(e){e.gene;$.get("/api/home/follow/reload_disease",(function(e){$("#disease-table").bootstrapTable("load",e.data),$("#disease-table").bootstrapTable("resetSearch",""),$("#modalSearchDisease").modal("hide")})).fail((function(e){alert("Error reloading table")}))})).fail((function(e){swal({title:"Error",text:"An error occurred while following a item.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})}))},rules:{email:{required:!0,email:!0,maxlength:80}},messages:{email:{required:"Please enter your email address",email:"Please enter a valid email address",maxlength:"Section names must be less than 80 characters"}},errorElement:"em",errorClass:"invalid-feedback",errorPlacement:function(e,t){e.addClass("invalid-feedback"),"checkbox"===t.prop("type")?e.insertAfter(t.parent("label")):e.insertAfter(t)},highlight:function(e,t,a){$(e).addClass("is-invalid").removeClass("is-valid")},unhighlight:function(e,t,a){$(e).addClass("is-valid").removeClass("is-invalid")}}),$("#unfollow_disease_form").validate({submitHandler:function(e){$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});var t=$(e).serialize();$.post("/api/conditions/unfollow",t,(function(e){e.disease;$.get("/api/home/follow/reload_disease",(function(e){switch($("#disease-table").bootstrapTable("load",e.data),$("#disease-table").bootstrapTable("resetSearch",""),gene){case"@AllActionability":$("#modalSettings").find('input[name="actionability_notify"]').prop("checked",!1);break;case"@AllValidity":$("#modalSettings").find('input[name="validity_notify"]').prop("checked",!1);break;case"@AllDosage":$("#modalSettings").find('input[name="dosage_notify"]').prop("checked",!1);break;case"*":$("#modalSettings").find('input[name="allgenes_notify"]').prop("checked",!1)}$("#modalSearchDisease").modal("hide")})).fail((function(e){alert("Error reloading table")}))})).fail((function(e){swal({title:"Error",text:"An error occurred while unfollowing the item.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})})),$("#modalUnFollowGene").modal("hide")},rules:{email:{required:!0,email:!0,maxlength:80}},messages:{email:{required:"Please enter your email address",email:"Please enter a valid email address",maxlength:"Section names must be less than 80 characters"}},errorElement:"em",errorClass:"invalid-feedback",errorPlacement:function(e,t){e.addClass("invalid-feedback"),"checkbox"===t.prop("type")?e.insertAfter(t.parent("label")):e.insertAfter(t)},highlight:function(e,t,a){$(e).addClass("is-invalid").removeClass("is-valid")},unhighlight:function(e,t,a){$(e).addClass("is-valid").removeClass("is-invalid")}}),o.on("click",".action-follow-disease",(function(e){var t=this;swal({title:"Are you sure?",text:"Unfollowed diseases or groups can always be refollowed later.",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){if(e){var a=$(t).closest("tr").data("curie");$("#unfollow-disease-field").val(a),$("#unfollow_disease_form").submit();var r=$(t).closest("tr").find("td:first-child").html();o.bootstrapTable("remove",{field:"symbol",values:r}),$(":checkbox[value="+a.substring(1)+"]").prop("checked",!1)}}))})),$("#search_region_form").validate({submitHandler:function(e){$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});var t=$(e).serialize();$.post("/api/genes/follow",t,(function(e){var t=e.gene;$.get("/api/home/follow/reload",(function(e){switch($("#follow-table").bootstrapTable("load",e.data),$("#follow-table").bootstrapTable("resetSearch",""),t){case"@AllActionability":$("#modalSettings").find('input[name="actionability_notify"]').prop("checked",!0);break;case"@AllValidity":$("#modalSettings").find('input[name="validity_notify"]').prop("checked",!0);break;case"@AllDosage":$("#modalSettings").find('input[name="dosage_notify"]').prop("checked",!0);break;case"*":$("#modalSettings").find('input[name="allgenes_notify"]').prop("checked",!0)}$("#modalSearchRegion").modal("hide")})).fail((function(e){alert("Error reloading table")}))})).fail((function(e){swal({title:"Error",text:"An error occurred while following a item.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})}))},rules:{email:{required:!0,email:!0,maxlength:80}},messages:{email:{required:"Please enter your email address",email:"Please enter a valid email address",maxlength:"Section names must be less than 80 characters"}},errorElement:"em",errorClass:"invalid-feedback",errorPlacement:function(e,t){e.addClass("invalid-feedback"),"checkbox"===t.prop("type")?e.insertAfter(t.parent("label")):e.insertAfter(t)},highlight:function(e,t,a){$(e).addClass("is-invalid").removeClass("is-valid")},unhighlight:function(e,t,a){$(e).addClass("is-valid").removeClass("is-invalid")}}),$("#profile-form").validate({submitHandler:function(e){$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});var t=$(e).serialize();$.post("/dashboard/profile",t,(function(e){})).fail((function(e){swal({title:"Error",text:"An error occurred while changing an item.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})})),$("#modalProfile").modal("hide")},rules:{email:{required:!0,email:!0,maxlength:80}},messages:{email:{required:"Please enter your email address",email:"Please enter a valid email address",maxlength:"Section names must be less than 80 characters"}},errorElement:"em",errorClass:"invalid-feedback",errorPlacement:function(e,t){e.addClass("invalid-feedback"),"checkbox"===t.prop("type")?e.insertAfter(t.parent("label")):e.insertAfter(t)},highlight:function(e,t,a){$(e).addClass("is-invalid").removeClass("is-valid")},unhighlight:function(e,t,a){$(e).addClass("is-valid").removeClass("is-invalid")}}),$("#settings-form").validate({submitHandler:function(e){$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});var t=$(e).serialize();$.post("/dashboard/preferences",t,(function(e){})).fail((function(e){swal({title:"Error",text:"An error occurred while changing an item.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})})),$("#modalSettings").modal("hide")},rules:{email:{required:!0,email:!0,maxlength:80}},messages:{email:{required:"Please enter your email address",email:"Please enter a valid email address",maxlength:"Section names must be less than 80 characters"}},errorElement:"em",errorClass:"invalid-feedback",errorPlacement:function(e,t){e.addClass("invalid-feedback"),"checkbox"===t.prop("type")?e.insertAfter(t.parent("label")):e.insertAfter(t)},highlight:function(e,t,a){$(e).addClass("is-invalid").removeClass("is-valid")},unhighlight:function(e,t,a){$(e).addClass("is-valid").removeClass("is-invalid")}}),$("#report-form").validate({submitHandler:function(e){$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});var t=$(e).serialize();$.post("/dashboard/reports",t,(function(e){$.get("/api/home/reports/10",(function(e){$("#table").bootstrapTable("load",e.data),$("#table").bootstrapTable("resetSearch",""),$("#custom-report-count").html(e.data.length)})).fail((function(e){alert("Error reloading table")}))})).fail((function(e){swal({title:"Error",text:"An error occurred while updating the report.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})})),$("#modalReport").modal("hide")},rules:{email:{required:!0,email:!0,maxlength:80}},messages:{email:{required:"Please enter your email address",email:"Please enter a valid email address",maxlength:"Section names must be less than 80 characters"}},errorElement:"em",errorClass:"invalid-feedback",errorPlacement:function(e,t){e.addClass("invalid-feedback"),"checkbox"===t.prop("type")?e.insertAfter(t.parent("label")):e.insertAfter(t)},highlight:function(e,t,a){$(e).addClass("is-invalid").removeClass("is-valid")},unhighlight:function(e,t,a){$(e).addClass("is-valid").removeClass("is-invalid")}}),$(document).on("click",'.native-table [data-toggle="dropdown"]',(function(){if($buttonGroup=$(this).parent(),$buttonGroup.attr("data-attachedUl"))$ul=$("[data-parent="+$buttonGroup.attr("data-attachedUl")+"]");else{var e=+new Date;$ul=$(this).siblings("ul"),$ul.attr("data-parent",e),$buttonGroup.attr("data-attachedUl",e),$(window).resize((function(){$ul.css("display","none").data("top")}))}var t,a,o;$buttonGroup.hasClass("open")?(t=$(this).parent(),a=$ul,o=t.offset().top+t.outerHeight(),a.css("top",o+"px"),a.css("left",t.offset().left+"px"),a.css("position","absolute"),a.css("width",a.width()),a.css("heigt",a.height()),a.css("display","block"),a.appendTo("body")):$ul.css("display","none")}));new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("label"),queryTokenizer:Bloodhound.tokenizers.whitespace,remote:{url:window.burl,wildcard:"%QUERY"}});var r=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("label"),queryTokenizer:Bloodhound.tokenizers.whitespace,remote:{url:window.burl,wildcard:"%QUERY"}}),n=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("label"),queryTokenizer:Bloodhound.tokenizers.whitespace,remote:{url:window.dburl,wildcard:"%QUERY"}});$(".queryFindGene").typeahead(null,{name:"followtermGene",display:"label",source:r,limit:1/0,highlight:!0,hint:!1,autoselect:!0}).bind("typeahead:selected",(function(e,t){$("#follow-gene-field").val(t.hgncid),$("#follow_form").submit()})),$(".queryFindDisease").typeahead(null,{name:"followtermDisease",display:"label",source:n,limit:20,highlight:!0,hint:!1,autoselect:!0,templates:{empty:['<div class="tt-suggestion tt-selectable"><div class="list-group-item">Nothing found.</div></div>'],suggestion:function(e){return'<div class="ml-1 mr-1 row pl-2 tt-ui-row '+(e.curated?"tt-ui-curated-on":"")+'" style=" border-bottom:1px solid #ccc"><span class="col-sm-7 col-xs-7 pl-0 tt-ui-label">'+e.label+'<span class="tt-ui-alias"> '+e.alias+'</span></span><span class=" col-sm-3 col-xs-5 tt-ui-curie">  '+e.hgnc+"</span>"+(e.curated?'<span class="badge badge-success pull-right hidden-xs small mt-1 col-sm-2 tt-ui-curated">Curated </span>':"")+"</div>"}}}).bind("typeahead:selected",(function(e,t){$("#follow-disease-field").val(t.hgnc),$("#follow_disease_form").submit()}));var i=$("#selected-genes");i.tagsinput({tagClass:function(e){switch(e.curated){case!0:return"label label-primary";case!1:return"label label-default";case 2:return"label label-danger";default:return"label label-primary"}},itemValue:"hgncid",itemText:"short",typeaheadjs:{name:"followtermGene",displayKey:"short",limit:1/0,source:r}}),$(".action-gc-gene").on("click",(function(){$("#gc_search_form")[0].reset(),$("#modalSearchGenomeConnect").modal("show")})),$(".queryFindGenomeConnect").typeahead(null,{name:"followtermGene",display:"label",source:r,limit:1/0,highlight:!0,hint:!1,autoselect:!0}).bind("typeahead:selected",(function(e,t){$("#follow-gencon-field").val(t.hgncid),$("#follow_gencon_form").submit()})),$("#follow_gencon_form").validate({submitHandler:function(e){$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});var t=$(e).serialize();$.post("/api/gc/follow",t,(function(e){e.gene;$.get("/api/home/gc/reload",(function(e){$("#gencon-table").bootstrapTable("load",e.data),$("#gencon-table").bootstrapTable("resetSearch",""),$("#modalSearchGenomeConnect").modal("hide")})).fail((function(e){alert("Error reloading table")}))})).fail((function(e){swal({title:"Error",text:"An error occurred while following a item.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})}))},rules:{email:{required:!0,email:!0,maxlength:80}},messages:{email:{required:"Please enter your email address",email:"Please enter a valid email address",maxlength:"Section names must be less than 80 characters"}},errorElement:"em",errorClass:"invalid-feedback",errorPlacement:function(e,t){e.addClass("invalid-feedback"),"checkbox"===t.prop("type")?e.insertAfter(t.parent("label")):e.insertAfter(t)},highlight:function(e,t,a){$(e).addClass("is-invalid").removeClass("is-valid")},unhighlight:function(e,t,a){$(e).addClass("is-valid").removeClass("is-invalid")}}),$("#unfollow_gencon_form").validate({submitHandler:function(e){$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});var t=$(e).serialize();$.post("/api/gc/remove",t,(function(e){})).fail((function(e){swal({title:"Error",text:"An error occurred while unfollowing the item.  Please refresh the screen and try again.  If the error persists, contact Supprt.",icon:"error"})})),$("#modalUnFollowGenCon").modal("hide")},rules:{email:{required:!0,email:!0,maxlength:80}},messages:{email:{required:"Please enter your email address",email:"Please enter a valid email address",maxlength:"Section names must be less than 80 characters"}},errorElement:"em",errorClass:"invalid-feedback",errorPlacement:function(e,t){e.addClass("invalid-feedback"),"checkbox"===t.prop("type")?e.insertAfter(t.parent("label")):e.insertAfter(t)},highlight:function(e,t,a){$(e).addClass("is-invalid").removeClass("is-valid")},unhighlight:function(e,t,a){$(e).addClass("is-valid").removeClass("is-invalid")}}),a.on("click",".action-remove-gc",(function(e){var t=this;swal({title:"Are you sure?",text:"Removed genes can always be readded later.",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){if(e){var o=$(t).closest("tr").data("uniqueid");$("#unfollow-gencon-field").val(o),$("#unfollow_gencon_form").submit();var r=$(t).closest("tr").find("td:first-child").html();a.bootstrapTable("remove",{field:"symbol",values:r})}}))}));$(".action-dropzone").each((function(e,t){$.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}});new Dropzone(t,{url:"/kb/genomeconnect/upload",uploadMultiple:!1,addRemoveLinks:!1,createImageThumbnails:!1,disablePreviews:!0,clickable:".action-gc-file",acceptedFiles:"application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",init:function(){this.on("success",(function(e,t){t.gene;var a=t.errors,o=t.newcount;$.get("/api/home/gc/reload",(function(e){$("#gencon-table").bootstrapTable("load",e.data),$("#gencon-table").bootstrapTable("resetSearch",""),a.length>0?swal({title:"Spreadsheet Processed w/ Warnings",text:a.join(", "),icon:"warning",button:"OK"}):swal({title:"Spreadsheet Processed",text:o+" new gene(s) were added",icon:"success",button:"OK"})})).fail((function(e){alert("Error reloading table")}))})),this.on("addedfile",(function(e){}))},sending:function(e,t,a){a.append("_token",window.token)}})}))}))}});