!function(e){var o={};function t(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=o,t.d=function(e,o,a){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(a,n,function(o){return e[o]}.bind(null,n));return a},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="/",t(t.s=45)}({45:function(e,o,t){e.exports=t(46)},46:function(e,o){var t=[];function a(){$(".filter-container").html("");var e=$(".advanced-filter").filter((function(e){return $(this).hasClass("fa-toggle-on")}));if(e.length)e.each((function(){var e=$(this),o=$('<span class="badge action-hi-badge bg-primary mr-1">'+e.data("badge")+"</span>");$(".filter-container").append(o)}));else{var o=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(o)}}function n(e,o){return"pseudogene"!=e.locus_type}$((function(){a()})),$(".action-show-dosage").on("click",(function(e){$(this).prop("checked")||(r("haplo"),$(".action-show-hiknown").removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-hiknown-text").html("Off"),r("triplo"),$(".action-show-tsknown").removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-tsknown-text").html("Off"),r("hits"),$(".action-show-hitsknown").removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-hitsknown-text").html("Off"),r("protein"),$(".action-show-protein").removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-protein-text").html("Off"),r("recent"),$(".action-show-recent").removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-recent-text").html("Off"),r("history"),$(".action-show-new").removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-recent-new").html("Off"),a())})),$(".action-show-genes").on("click",(function(){var e=[];if($(this).hasClass("btn"))return function(e){var o=[];e.hasClass("btn-success")?(e.removeClass("btn-success").addClass("btn-default"),e.html("<b>Genes: Off</b>")):(o.push(0),o.push(3),e.addClass("btn-success").removeClass("btn-default"),e.html("<b>Genes: On</b>")),$(".action-show-regions").hasClass("btn-success")&&o.push(1),c("geneswitch","type",o),h($table)}($(this));$(this).prop("checked")&&(e.push(0),e.push(3)),$(".action-show-regions").prop("checked")&&e.push(1),c("geneswitch","type",e),h($table)})),$(".action-show-regions").on("click",(function(){var e=[];if($(this).hasClass("btn"))return function(e){var o=[];$(".action-show-genes").hasClass("btn-success")&&(o.push(0),o.push(3)),e.hasClass("btn-success")?(e.removeClass("btn-success").addClass("btn-default"),e.html("<b>Regions: Off</b>")):(o.push(1),e.addClass("btn-success").removeClass("btn-default"),e.html("<b>Regions: On</b>")),c("geneswitch","type",o),h($table)}($(this));$(this).prop("checked")&&e.push(1),$(".action-show-genes").prop("checked")&&(e.push(0),e.push(3)),c("geneswitch","type",e),h($table)})),$(".action-show-overlap").on("click",(function(){var e=[];$(this).prop("checked")&&e.push("Overlap"),$(".action-show-contain").prop("checked")&&e.push("Contained"),c("container","relationship",e),h($table)})),$(".action-show-contain").on("click",(function(){var e=[];$(this).prop("checked")&&e.push("Contained"),$(".action-show-overlap").prop("checked")&&e.push("Overlap"),c("container","relationship",e),h($table)})),$(".action-show-psuedo").on("click",(function(){$(this).prop("checked")?r("pseudogene"):c("pseudogene","@filter",n),h($table)})),$(".action-show-contain").on("click",(function(){var e=[];$(this).prop("checked")&&e.push("Contained"),$(".action-show-overlap").prop("checked")&&e.push("Overlap"),c("geneswitch","relationship",e),h($table)})),$(".action-show-hiknown").on("click",(function(){$(this).hasClass("fa-toggle-off")?(c("haplo","haplo_assertion",3),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-hiknown-text").html("On")):(r("haplo"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-hiknown-text").html("Off")),h($table)})),$(".action-show-tsknown").on("click",(function(){$(this).hasClass("fa-toggle-off")?(c("triplo","triplo_assertion",3),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-tsknown-text").html("On")):(r("triplo"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-tsknown-text").html("Off")),h($table)})),$(".action-show-hitsknown").on("click",(function(){$(this).hasClass("fa-toggle-off")?(c("hits",["haplo_assertion","triplo_assertion"],[3,3]),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-hitsknown-text").html("On")):(r("hits"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-hitsknown-text").html("Off")),h($table)})),$(".action-show-protein").on("click",(function(){$(this).hasClass("fa-toggle-off")?(c("protein","locus","protein-coding gene"),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-protein-text").html("On")):(r("protein"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-protein-text").html("Off")),h($table)})),$(".action-show-pseudogenes").on("click",(function(){if($(this).hasClass("fa-toggle-on")){if(c("pseudogene","@filter",f),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-pseudogenes-text").html("Off"),$(".action-pseudogenes-badge").remove(),""==$(".filter-container").html()){var e=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(e)}}else r("pseudogene"),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-pseudogenes-text").html("On");h($table)})),$(".action-show-curated").on("click",(function(){$(this).hasClass("fa-toggle-off")?(c("curated","has_curations",!0),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-curated-text").html("On")):(r("curated"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show--text").html("Off")),h($table)})),$(".action-show-completed").on("click",(function(){$(this).hasClass("fa-toggle-off")?(c("complete","@filter",i),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-completed-text").html("On")):(r("complete"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-completed-text").html("Off"),$(".action-completed-badge").remove()),h($table)})),$(".action-show-new").on("click",(function(){$(this).hasClass("fa-toggle-off")?(c("history",["thr","hhr"],[1,1]),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-new-text").html("On")):(r("history"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-new-text").html("Off"),$(".action-new-badge").remove()),h($table)}));var s=(new Date).getTime()-7776e6;function l(e,o){return Date.parse(e.rawdate)>s}function i(e,o){return"Complete"===e.workflow}function f(e,o){return 0==e.type||1==e.type}function c(e,o,a){var n={name:e,column:o,value:a,active:!0};r(e),t.push(n)}function r(e){var o=t.findIndex((function(o){return o.name==e}));-1!=o&&t.splice(o,1)}function h(e){e.bootstrapTable("filterBy",{},{filterAlgorithm:g}),a()}function g(e,o){for(var a=!0,n=0;n<t.length;n++){var s=t[n];if(Array.isArray(s.column)){a=!1;for(var l=0;l<s.column.length&&!0!==(a=e[s.column[l]]==s.value[l]);l++);if(!1===a)break}else if("@"==s.column.charAt(0)){if(!1===(a=s.value(e,o)))break}else if(!1===(a=Array.isArray(s.value)?-1!=s.value.indexOf(e[s.column]):e[s.column]==s.value))break}return a}$(".action-show-recent").on("click",(function(){if($(this).hasClass("fa-toggle-off")){c("recent","@filter",l),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-recent-text").html("On"),$(".action-af-badge").remove();var e=$('<span class="badge action-nine-badge bg-primary">Recently Reviewed</span>');$(".filter-container").append(e)}else if(r("recent"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-recent-text").html("Off"),$(".action-nine-badge").remove(),""==$(".filter-container").html()){e=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(e)}h($table)})),$(".action-show-acmg59").on("click",(function(){if($(this).hasClass("fa-toggle-off")){c("acmg59","acmg59",!0),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-acmg59-text").html("On"),$(".action-af-badge").remove();var e=$('<span class="badge action-acmg-badge bg-primary mr-1">ACMG SF v3.2</span>');$(".filter-container").append(e)}else if(r("acmg59"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-acmg59-text").html("Off"),$(".action-acmg-badge").remove(),""==$(".filter-container").html()){e=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(e)}h($table)})),$(".action-show-follow").on("click",(function(){if($(this).hasClass("fa-toggle-off")){c("follow","followed",!0),$(this).removeClass("fa-toggle-off").addClass("fa-toggle-on"),$(".action-show-follow-text").html("On"),$(".action-af-badge").remove();var e=$('<span class="badge action-follow-badge bg-primary mr-1">Followed</span>');$(".filter-container").append(e)}else if(r("follow"),$(this).removeClass("fa-toggle-on").addClass("fa-toggle-off"),$(".action-show-follow-text").html("Off"),$(".action-follow-badge").remove(),""==$(".filter-container").html()){e=$('<span class="badge action-af-badge">None</span>');$(".filter-container").append(e)}h($table)}))}});