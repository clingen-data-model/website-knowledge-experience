!function(e){var a={};function t(o){if(a[o])return a[o].exports;var n=a[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=a,t.d=function(e,a,o){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(o,n,function(a){return e[a]}.bind(null,n));return o},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="/",t(t.s=45)}({45:function(e,a,t){e.exports=t(46)},46:function(e,a){var t=[];$(".action-show-genes").on("click",(function(){var e=[];$(this).hasClass("btn-success")?($(this).removeClass("btn-success").addClass("btn-default active"),$(this).html("<b>Genes: Off</b>")):(e.push(0),e.push(3),$(this).addClass("btn-success").removeClass("btn-default active"),$(this).html("<b>Genes: On</b>")),$(".action-show-regions").hasClass("btn-success")&&e.push(1),l("geneswitch","type",e),r($table)})),$(".action-show-regions").on("click",(function(){var e=[];$(".action-show-genes").hasClass("btn-success")&&(e.push(0),e.push(3)),$(this).hasClass("btn-success")?($(this).removeClass("btn-success").addClass("btn-default active"),$(this).html("<b>Regions: Off</b>")):(e.push(1),$(this).addClass("btn-success").removeClass("btn-default active"),$(this).html("<b>Regions: On</b>")),l("geneswitch","type",e),r($table)})),$(".action-show-hiknown").on("click",(function(){if($(this).hasClass("fa-toggle-off")){l("haplo","haplo_assertion","3 (Sufficient Evidence)"),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-hiknown-text").html("On"),$(".action-af-badge").remove();var e=$('<span class="badge action-hi-badge bg-primary mr-1">Known HI</span>');$(".filter-container").append(e)}else if(f("haplo"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-hiknown-text").html("Off"),$(".action-hi-badge").remove(),""==$(".filter-container").html()){e=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(e)}r($table)})),$(".action-show-tsknown").on("click",(function(){if($(this).hasClass("fa-toggle-off")){l("triplo","triplo_assertion","3 (Sufficient Evidence)"),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-tsknown-text").html("On"),$(".action-af-badge").remove();var e=$('<span class="badge action-ts-badge bg-primary mr-1">Known TS</span>');$(".filter-container").append(e)}else if(f("triplo"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-tsknown-text").html("Off"),$(".action-ts-badge").remove(),""==$(".filter-container").html()){e=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(e)}r($table)})),$(".action-show-hitsknown").on("click",(function(){if($(this).hasClass("fa-toggle-off")){l("hits",["haplo_assertion","triplo_assertion"],["3 (Sufficient Evidence)","3 (Sufficient Evidence)"]),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-hitsknown-text").html("On"),$(".action-af-badge").remove();var e=$('<span class="badge action-hits-badge bg-primary mr-1">Known HI or TS</span>');$(".filter-container").append(e)}else if(f("hits"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-hitsknown-text").html("Off"),$(".action-hits-badge").remove(),""==$(".filter-container").html()){e=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(e)}r($table)})),$(".action-show-protein").on("click",(function(){if($(this).hasClass("fa-toggle-off")){l("protein","locus","protein-coding gene"),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-protein-text").html("On"),$(".action-af-badge").remove();var e=$('<span class="badge action-pc-badge bg-primary mr-1">Protein Coding</span>');$(".filter-container").append(e)}else if(f("protein"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-protein-text").html("Off"),$(".action-pc-badge").remove(),""==$(".filter-container").html()){e=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(e)}r($table)})),$(".action-show-pseudogenes").on("click",(function(){$(this).hasClass("fa-toggle-on")?(l("pseudogene","@filter",i),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-pseudogenes-text").html("Off"),$(".action-af-badge").remove()):(f("pseudogene"),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-pseudogenes-text").html("On"),$(".action-pc-badge").remove(),$(".filter-container").html()),r($table)})),$(".action-show-completed").on("click",(function(){if($(this).hasClass("fa-toggle-off")){l("complete","@filter",s),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-completed-text").html("On"),$(".action-af-badge").remove();var e=$('<span class="badge action-pc-badge bg-primary mr-1"> Stuff </span>');$(".filter-container").append(e)}else if(f("complete"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-completed-text").html("Off"),$(".action-pc-badge").remove(),""==$(".filter-container").html()){e=$('<span class="badge action-af-badge">None Of That</span>');$(".filter-container").append(e)}r($table)})),$(".action-show-new").on("click",(function(){if($(this).hasClass("fa-toggle-off")){l("history",["thr","hhr"],[1,1]),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-new-text").html("On"),$(".action-af-badge").remove();var e=$('<span class="badge action-new-badge bg-primary mr-1">Score Change 365</span>');$(".filter-container").append(e)}else if(f("history"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-new-text").html("Off"),$(".action-new-badge").remove(),""==$(".filter-container").html()){e=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(e)}r($table)}));var o=(new Date).getTime()-7776e6;function n(e,a){return Date.parse(e.rawdate)>o}function s(e,a){return"Complete"===e.workflow}function i(e,a){return 0==e.type||1==e.type}function l(e,a,o){var n={name:e,column:a,value:o,active:!0};f(e),t.push(n),console.log(t)}function f(e){var a=t.findIndex((function(a){return a.name==e}));-1!=a&&t.splice(a,1)}function r(e){e.bootstrapTable("filterBy",{},{filterAlgorithm:c})}function c(e,a){for(var o=!0,n=0;n<t.length;n++){var s=t[n];if(Array.isArray(s.column)){o=!1;for(var i=0;i<s.column.length&&!0!==(o=e[s.column[i]]==s.value[i]);i++);if(!1===o)break}else if("@"==s.column.charAt(0)){if(!1===(o=s.value(e,a)))break}else if(!1===(o=Array.isArray(s.value)?-1!=s.value.indexOf(e[s.column]):e[s.column]==s.value))break}return o}$(".action-show-recent").on("click",(function(){if($(this).hasClass("fa-toggle-off")){l("recent","@filter",n),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-recent-text").html("On"),$(".action-af-badge").remove();var e=$('<span class="badge action-nine-badge bg-primary">Recently Reviewed</span>');$(".filter-container").append(e)}else if(f("recent"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-recent-text").html("Off"),$(".action-nine-badge").remove(),""==$(".filter-container").html()){e=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(e)}r($table)})),$(".action-show-acmg59").on("click",(function(){if($(this).hasClass("fa-toggle-off")){l("acmg59","acmg59",!0),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-acmg59-text").html("On"),$(".action-af-badge").remove();var e=$('<span class="badge action-acmg-badge bg-primary mr-1">ACMG SF v3.1</span>');$(".filter-container").append(e)}else if(f("acmg59"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-acmg59-text").html("Off"),$(".action-acmg-badge").remove(),""==$(".filter-container").html()){e=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(e)}r($table)})),$(".action-show-follow").on("click",(function(){if($(this).hasClass("fa-toggle-off")){l("follow","followed",!0),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-follow-text").html("On"),$(".action-af-badge").remove();var e=$('<span class="badge action-follow-badge bg-primary mr-1">Followed</span>');$(".filter-container").append(e)}else if(f("follow"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-follow-text").html("Off"),$(".action-follow-badge").remove(),""==$(".filter-container").html()){e=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(e)}r($table)}))}});