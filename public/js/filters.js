!function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=45)}({45:function(e,t,o){e.exports=o(46)},46:function(e,t){var o=[];function a(){alert("creating badgessss"),$(".filter-container").html("");var e=$(".advanced-filter");console.log(e);var t=e.filter((function(e){return $(this).hasClass("fa-toggle-on")}));if(t.length)t.each((function(){var e=$(this),t=$('<span class="badge action-hi-badge bg-primary mr-1">'+e.data("badge")+"</span>");$(".filter-container").append(t)}));else{var o=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(o)}}$((function(){a()})),$(".action-show-genes").on("click",(function(){var e=[];$(this).hasClass("btn-success")?($(this).removeClass("btn-success").addClass("btn-default active"),$(this).html("<b>Genes: Off</b>")):(e.push(0),e.push(3),$(this).addClass("btn-success").removeClass("btn-default active"),$(this).html("<b>Genes: On</b>")),$(".action-show-regions").hasClass("btn-success")&&e.push(1),f("geneswitch","type",e),r($table)})),$(".action-show-regions").on("click",(function(){var e=[];$(".action-show-genes").hasClass("btn-success")&&(e.push(0),e.push(3)),$(this).hasClass("btn-success")?($(this).removeClass("btn-success").addClass("btn-default active"),$(this).html("<b>Regions: Off</b>")):(e.push(1),$(this).addClass("btn-success").removeClass("btn-default active"),$(this).html("<b>Regions: On</b>")),f("geneswitch","type",e),r($table)})),$(".action-show-hiknown").on("click",(function(){$(this).hasClass("fa-toggle-off")?(f("haplo","haplo_assertion","3 (Sufficient Evidence)"),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-hiknown-text").html("On")):(c("haplo"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-hiknown-text").html("Off")),r($table)})),$(".action-show-tsknown").on("click",(function(){$(this).hasClass("fa-toggle-off")?(f("triplo","triplo_assertion","3 (Sufficient Evidence)"),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-tsknown-text").html("On")):(c("triplo"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-tsknown-text").html("Off")),r($table)})),$(".action-show-hitsknown").on("click",(function(){$(this).hasClass("fa-toggle-off")?(f("hits",["haplo_assertion","triplo_assertion"],["3 (Sufficient Evidence)","3 (Sufficient Evidence)"]),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-hitsknown-text").html("On")):(c("hits"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-hitsknown-text").html("Off")),r($table)})),$(".action-show-protein").on("click",(function(){$(this).hasClass("fa-toggle-off")?(f("protein","locus","protein-coding gene"),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-protein-text").html("On")):(c("protein"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-protein-text").html("Off")),r($table)})),$(".action-show-pseudogenes").on("click",(function(){if($(this).hasClass("fa-toggle-on")){if(f("pseudogene","@filter",i),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-pseudogenes-text").html("Off"),$(".action-pseudogenes-badge").remove(),""==$(".filter-container").html()){var e=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(e)}}else c("pseudogene"),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-pseudogenes-text").html("On");r($table)})),$(".action-show-completed").on("click",(function(){$(this).hasClass("fa-toggle-off")?(f("complete","@filter",l),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-completed-text").html("On")):(c("complete"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-completed-text").html("Off"),$(".action-completed-badge").remove()),r($table)})),$(".action-show-new").on("click",(function(){$(this).hasClass("fa-toggle-off")?(f("history",["thr","hhr"],[1,1]),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-new-text").html("On")):(c("history"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-new-text").html("Off"),$(".action-new-badge").remove()),r($table)}));var n=(new Date).getTime()-7776e6;function s(e,t){return Date.parse(e.rawdate)>n}function l(e,t){return"Complete"===e.workflow}function i(e,t){return 0==e.type||1==e.type}function f(e,t,a){var n={name:e,column:t,value:a,active:!0};c(e),o.push(n),console.log(o)}function c(e){var t=o.findIndex((function(t){return t.name==e}));-1!=t&&o.splice(t,1)}function r(e){e.bootstrapTable("filterBy",{},{filterAlgorithm:g}),a()}function g(e,t){for(var a=!0,n=0;n<o.length;n++){var s=o[n];if(Array.isArray(s.column)){a=!1;for(var l=0;l<s.column.length&&!0!==(a=e[s.column[l]]==s.value[l]);l++);if(!1===a)break}else if("@"==s.column.charAt(0)){if(!1===(a=s.value(e,t)))break}else if(!1===(a=Array.isArray(s.value)?-1!=s.value.indexOf(e[s.column]):e[s.column]==s.value))break}return a}$(".action-show-recent").on("click",(function(){if($(this).hasClass("fa-toggle-off")){f("recent","@filter",s),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-recent-text").html("On"),$(".action-af-badge").remove();var e=$('<span class="badge action-nine-badge bg-primary">Recently Reviewed</span>');$(".filter-container").append(e)}else if(c("recent"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-recent-text").html("Off"),$(".action-nine-badge").remove(),""==$(".filter-container").html()){e=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(e)}r($table)})),$(".action-show-acmg59").on("click",(function(){if($(this).hasClass("fa-toggle-off")){f("acmg59","acmg59",!0),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-acmg59-text").html("On"),$(".action-af-badge").remove();var e=$('<span class="badge action-acmg-badge bg-primary mr-1">ACMG SF v3.1</span>');$(".filter-container").append(e)}else if(c("acmg59"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-acmg59-text").html("Off"),$(".action-acmg-badge").remove(),""==$(".filter-container").html()){e=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(e)}r($table)})),$(".action-show-follow").on("click",(function(){if($(this).hasClass("fa-toggle-off")){f("follow","followed",!0),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-follow-text").html("On"),$(".action-af-badge").remove();var e=$('<span class="badge action-follow-badge bg-primary mr-1">Followed</span>');$(".filter-container").append(e)}else if(c("follow"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-follow-text").html("Off"),$(".action-follow-badge").remove(),""==$(".filter-container").html()){e=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(e)}r($table)}))}});