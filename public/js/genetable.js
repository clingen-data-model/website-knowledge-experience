function detailFormatter(t,a){return!1}function reportDetailFormatter(t,a,e){var n;return $.ajaxSetup({cache:!0,contentType:"application/x-www-form-urlencoded",processData:!0,headers:{"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.token,Authorization:"Bearer "+Cookies.get("clingen_dash_token")}}),$.ajax({url:"/api/home/rpex/"+a.ident,type:"get",dataType:"html",async:!1,success:function(t){n=t}}),n}function table_buttons(){return"undefined"!=typeof showadvanced&&showadvanced?{btnUsersAdd:{text:"Filters",icon:"glyphicon-tasks",event:function(){$("#modalFilter").modal("toggle")},attributes:{title:"Advanced Filters"}},btnAdd:{text:"Page Preferences",icon:"glyphicon-bookmark",event:function(){1!==window.auth?swal({title:"Page Preferences",text:"You must be logged in to manage page preferences."}):$("#modalBookmark").modal("toggle")},attributes:{title:"Page Preferences"}}}:"undefined"!=typeof bookmarksonly&&bookmarksonly?{btnUsersAdd:{text:"Page Preferences",icon:"glyphicon-bookmark",event:function(){1!==window.auth?swal({title:"Page Preferences",text:"You must be logged in to manage page preferemces."}):($("#modal-bookmark-status").html("&nbsp;"),$("#modal-new-bookmark").val(""),$("#bookmark-selected-preference").val(""),$("#modalBookmark").modal("toggle"))},attributes:{title:"Page Preferences"}}}:{}}function symbolFormatter(t,a){return 0==a.type||3==a.type?'<span onclick="event.stopPropagation();" ><a href="/kb/genes/'+a.hgnc_id+'"><b>'+a.symbol+"</b></a></span>":'<span onclick="event.stopPropagation();" ><a href="/kb/gene-dosage/region/'+a.hgnc_id+'"><b>'+a.symbol+"</b></a></span>"}function typeFormatter(t,a){return 0==a.type?{classes:"global_table_cell gene"}:3==a.type?{classes:"global_table_cell gene"}:{classes:"global_table_cell region"}}function nullFormatter(t,a){return 0==a.type?'<span title="Gene">G</span>':3==a.type?'<span title="Gene">P</span>':'<span title="Region">R</span>'}function geneFormatter(t,a){return'<a href="/kb/genes/'+a.hgnc_id+'"><b>'+a.symbol+"</b></a>"}function searchFormatter(t,a){return window.searchterm}function hgncFormatter(t,a){return 0==a.type||3==a.type?'<a href="/kb/gene-dosage/'+a.hgnc_id+'">'+a.hgnc_id+"</a>":'<a href="/kb/gene-dosage/region/'+a.hgnc_id+'">'+a.hgnc_id+"</a>"}function vcepFormatter(t,a){return null==t?"":'<a target="external" href="https://clinicalgenome.org/affiliation/'+t+'" class="badge-info badge pointer ml-2">VCEP <i class="fas fa-external-link-alt"></i></a>'}function diseaseFormatter(t,a){return'<span onclick="event.stopPropagation();"><a href="/kb/conditions/'+a.mondo+'">'+a.disease_name+'</a><div class="text-muted">'+a.mondo+"</div></span>"}function reportableFormatter(t,a){return a.reportable?'<span onclick="event.stopPropagation();"><i class="fas fa-check"></i></span>':""}function location01Formatter(t,a){if(null==a.location)return"";var e=a.location.trim();0===e.toLowerCase().indexOf("chr")&&(e=e.substring(3));var n=e.indexOf(":"),s=e.indexOf("-");return'<div class="position"><span aria-label="Chromosome" class="chr">'+e.substring(0,n)+'</span><span aria-label=" at " class="sr-only">:</span><span class="start">'+e.substring(n+1,s)+'</span><span aria-label=" to " class="sr-only">-</span><span class="end">'+e.substring(s+1)+"</span></div>"}function locationFormatter(t,a){if(null==a.grch37)return"";var e=a.grch37.trim();0===e.toLowerCase().indexOf("chr")&&(e=e.substring(3));var n=e.indexOf(":"),s=e.indexOf("-");return'<div class="position"><span aria-label="Chromosome" class="chr">'+e.substring(0,n)+'</span><span aria-label=" at " class="sr-only">:</span><span class="start">'+e.substring(n+1,s)+'</span><span aria-label=" to " class="sr-only">-</span><span class="end">'+e.substring(s+1)+"</span></div>"}function location38Formatter(t,a){if(null==a.grch38)return"";var e=a.grch38.trim();0===e.toLowerCase().indexOf("chr")&&(e=e.substring(3));var n=e.indexOf(":"),s=e.indexOf("-");return'<div class="position"><span aria-label="Chromosome" class="chr">'+e.substring(0,n)+'</span><span aria-label=" at " class="sr-only">:</span><span class="start">'+e.substring(n+1,s)+'</span><span aria-label=" to " class="sr-only">-</span><span class="end">'+e.substring(s+1)+"</span></div>"}function regionFormatter(t,a){return'<span onclick="event.stopPropagation();" ><a href="/kb/gene-dosage/region/'+a.key+'"><b>'+a.name+"</b></a></span>"}function notesFormatter(t,a){return a.has_comment?'<span data-toggle="tooltip" data-placement="top" title="This gene has ClinGen Comments.  Click to view."><i class="fas fa-comment-alt text-center"></i></span>':""}function pliFormatter(t,a){return null===a.pli?"&hyphen;":a.pli>=.9?'<span class="format-pli-high">'+a.pli+"</span>":'<span class="format-pli-low">'+a.pli+"</span>"}function hiFormatter(t,a){return null===a.hi?"&hyphen;":a.hi<=10?'<span class="format-hi-high">'+a.hi+"</span>":'<span class="format-hi-low">'+a.hi+"</span>"}function plofFormatter(t,a){return null===a.plof?"&hyphen;":a.plof<.6?'<span class="format-pli-high">'+a.plof+"</span>":'<span class="format-pli-low">'+a.plof+"</span>"}function haploFormatter(t,a){if(!1===a.haplo_assertion)return"";if("Not Yet Evaluated"==a.haplo_assertion)return'<span class="text-muted">Not Yet Evaluated</span>';var e=a.haplo_assertion;return null===a.haplo_history?e:'<span class="pointer text-danger" data-toggle="tooltip" data-placement="top" title="'+a.haplo_history+'"><b>'+e+'</b>  <i class="fas fa-comment"></i></span>'}function triploFormatter(t,a){if(!1===a.triplo_assertion)return"";if("Not Yet Evaluated"==a.triplo_assertion)return'<span class="text-muted">Not Yet Evaluated</span>';var e=a.triplo_assertion;return null===a.triplo_history?e:'<span class="pointer text-danger" data-toggle="tooltip" data-placement="top" title="'+a.triplo_history+'"><b>'+e+'</b>  <i class="fas fa-comment"></i></span>'}function omimFormatter(t,a){return a.omimlink?'<span onclick="event.stopPropagation();" ><a href="https://omim.org/entry/'+a.omimlink+'" > <span class="text-success"><i class="fas fa-check"></i></span></a></span>':""}function morbidFormatter(t,a){return"Yes"==a.morbid?'<span onclick="event.stopPropagation();" ><a href="https://omim.org/entry/'+a.omimlink+'" > <span class="text-success"><i class="fas fa-check"></i></span></a></span>':""}function reportFormatter(t,a){return 0==a.type||3==a.type?'<span onclick="event.stopPropagation();" ><a class="btn btn-xs btn-success btn-block btn-report" href="/kb/gene-dosage/'+a.hgnc_id+'"><i class="fas fa-file"></i>   '+a.date+"</a></span>":'<span onclick="event.stopPropagation();" ><a class="btn btn-xs btn-success btn-block btn-report" href="/kb/gene-dosage/region/'+a.hgnc_id+'"><i class="fas fa-file"></i>   '+a.date+"</a></span>"}function iscaFormatter(t,a){return 0==a.type||3==a.type?'<a href="/kb/gene-dosage/'+a.hgnc_id+'">'+a.isca+"</a>":1==a.type?'<a href="/kb/gene-dosage/region/'+a.isca+'">'+a.isca+"</a>":a.isca}function cellFormatter(t,a){return{classes:"global_table_cell"}}function noExpCellFormatter(t,a){return{classes:"global_table_cell no-expand"}}function headerStyle(t){return"undefined"!=typeof lightstyle&&lightstyle?{}:{classes:"bg-secondary text-light header_class"}}function affiliateFormatter(t,a){return'<a href="/kb/affiliate/'+a.agent+'">'+a.label+"</a>"}function badgeFormatter(t,a){var e="";return a.has_validity?e+='<img class="" src="/images/clinicalValidity-on.png" title="Gene-Disease Validity" style="width:30px">':e+='<img class="" src="/images/clinicalValidity-off.png" title="Gene-Disease Validity" style="width:30px">',a.has_dosage?e+='<img class="" src="/images/dosageSensitivity-on.png" title="Dosage Sensitivity" style="width:30px">':e+='<img class="" src="/images/dosageSensitivity-off.png" title="Dosage Sensitivity" style="width:30px">',a.has_actionability?e+='<img class="" src="/images/clinicalActionability-on.png" title="Clinical Actionability" style="width:30px">':e+='<img class="" src="/images/clinicalActionability-off.png" title="Clinical Actionability" style="width:30px">',a.has_variant?e+='<img class="" src="/images/variantPathogenicity-on.png" title="Variant Pathogenicity" style="width:30px">':e+='<img class="" src="/images/variantPathogenicity-off.png" title="Variant Pathogenicity" style="width:30px">',a.has_pharma?e+='<img class="" src="/images/Pharmacogenomics-on.png" title="Pharmacogenomics" style="width:30px">':e+='<img class="" src="/images/Pharmacogenomics-off.png" title="Pharmacogenomics" style="width:30px">',e}function singleBadgeFormatter(t,a){var e="";switch(a.curation){case"V":e+='<img class="" src="/images/clinicalValidity-on.png" title="Gene-Disease Validity" style="width:30px">Gene-Disease Validity';break;case"D":e+='<img class="" src="/images/dosageSensitivity-on.png" title="Dosage Sensitivity" style="width:30px">Dosage Sensitivity';break;case"A":e+='<img class="" src="/images/clinicalActionability-on.png" title="Clinical Actionability" style="width:30px">Actionability';break;case"R":e+='<img class="" src="/images/variantPathogenicity-on.png" title="Variant Pathogenicity" style="width:30px">Variant Pathogenicity'}return e}function ardiseaseFormatter(t,a){var e="";return t.forEach(function(t,a,n){e+='<div><a href="/kb/conditions/'+t.curie+'">'+t.label+'</a></div><div class="text-muted small">'+t.curie+"<br><br></div>",a<n.length-1&&(e+="<hr>")}),e}function adultFormatter(t,a){var e="";return t.forEach(function(t,a,n){null==t?(e+='<div><a class="btn btn-default btn-block text-left btn-classification-blank" href="#">&nbsp;<br><br><div class="text-muted small">&nbsp;</div></a></div>',a<n.length-1&&(e+="<hr>")):(e+='<div><a class="btn btn-default btn-block text-left btn-classification" href="'+t.source+'">'+t.classification,t.classification.length<30&&(e+="<br><br>"),e+='<div class="text-muted small">'+t.report_date+"</div></a></div>",a<n.length-1&&(e+="<hr>"))}),e}function pedFormatter(t,a){var e="";return t.forEach(function(t,a,n){null==t?(e+='<div><a class="btn btn-default btn-block text-left btn-classification-blank" href="#">&nbsp;<br><br><div class="text-muted small">&nbsp;</div></a></div>',a<n.length-1&&(e+="<hr>")):(e+='<div><a class="btn btn-default btn-block text-left  btn-classification" href="'+t.source+'">'+t.classification,t.classification.length<30&&(e+="<br><br>"),e+='<div class="text-muted small">'+t.report_date+"</div></a></div>",a<n.length-1&&(e+="<hr>"))}),e}function ashgncFormatter(t,a){return'<a href="/kb/genes/'+a.hgnc_id+'">'+a.hgnc_id+"</a>"}function asdiseaseFormatter(t,a){return'<a href="/kb/conditions/'+a.mondo+'">'+a.disease+"</a>"}function asmondoFormatter(t,a){return'<a href="/kb/conditions/'+a.mondo+'">'+a.mondo.replace("_",":")+"</a>"}function asbadgeFormatter(t,a){var e=a.classification;return"No Known Disease Relationship*"==a.classification&&(e="No Known Disease Relationship"),a.animal_model_only?'<a class="btn btn-default btn-block btn-classification" href="/kb/gene-validity/'+a.perm_id+'">'+e+'<div class="badge badge-warning">Animal Model Only</div></a>':'<a class="btn btn-default btn-block btn-classification" href="/kb/gene-validity/'+a.perm_id+'">'+e+"</a>"}function datebadgeFormatter(t,a){return'<a class="btn btn-xs btn-success btn-block btn-report" href="/kb/gene-validity/'+a.perm_id+'"><i class="glyphicon glyphicon-file"></i> '+a.released+"</a>"}function contributorbadgeFormatter(t,a){return a.contributor_type}function conditionFormatter(t,a){var e='<a href="/kb/conditions/'+a.curie+'"><strong>'+a.label+'</strong></a><div class="small text-dark">'+a.curie+" ";return 9==a.status&&(e+='<span class="badge bg-light text-muted border-1 text-normal small" title="MONARCH has deprecated this term">Obsolete Term</span>'),e+="</div>",null!=a.synonym&&(e+='<div class="text-sm text-muted">Synonym: '+a.synonym+"</div>"),e}function cbadgeFormatter(t,a){var e="";return a.has_validity?e+='<img class="" src="/images/clinicalValidity-on.png" title="Gene-Disease Validity" style="width:30px">':e+='<img class="" src="/images/clinicalValidity-off.png" title="Gene-Disease Validity" style="width:30px">',a.has_dosage?e+='<img class="" src="/images/dosageSensitivity-on.png" title="Dosage Sensitivity" style="width:30px">':e+='<img class="" src="/images/dosageSensitivity-off.png" title="Dosage Sensitivity" style="width:30px">',a.has_actionability?e+='<img class="" src="/images/clinicalActionability-on.png" title="Clinical Actionability" style="width:30px">':e+='<img class="" src="/images/clinicalActionability-off.png" title="Clinical Actionability" style="width:30px">',a.has_variant?e+='<img class="" src="/images/variantPathogenicity-on.png" title="Variant Pathogenicity" style="width:30px">':e+='<img class="" src="/images/variantPathogenicity-off.png" title="Variant Pathogenicity" style="width:30px">',a.has_pharma?e+='<img class="" src="/images/Pharmacogenomics-on.png" title="Pharmacogenomics" style="width:30px">':e+='<img class="" src="/images/Pharmacogenomics-off.png" title="Pharmacogenomics" style="width:30px">',e}function drsymbolFormatter(t,a){return'<a href="/kb/drugs/'+a.curie+'">RXNORM:'+a.curie+"</a>"}function drugFormatter(t,a){return'<a href="/kb/drugs/'+a.curie+'">'+a.label+"</a>"}function drPortalFormatter(t,a){return'<a target="external" href="https://bioportal.bioontology.org/ontologies/RXNORM?p=classes&conceptid='+a.curie+'" class="badge-info badge pointer ml-2">BioPortal <i class="fas fa-external-link-alt"></i></a>'}function drbadgeFormatter(t,a){var e="";return a.has_validity?e+='<img class="" src="/images/clinicalValidity-on.png" title="Gene-Disease Validity" style="width:30px">':e+='<img class="" src="/images/clinicalValidity-off.png" title="Gene-Disease Validity" style="width:30px">',a.has_dosage?e+='<img class="" src="/images/dosageSensitivity-on.png" title="Dosage Sensitivity" style="width:30px">':e+='<img class="" src="/images/dosageSensitivity-off.png" title="Dosage Sensitivity" style="width:30px">',a.has_actionability?e+='<img class="" src="/images/clinicalActionability-on.png" title="Clinical Actionability" style="width:30px">':e+='<img class="" src="/images/clinicalActionability-off.png" title="Clinical Actionability" style="width:30px">',a.has_variant?e+='<img class="" src="/images/variantPathogenicity-on.png" title="Variant Pathogenicity" style="width:30px">':e+='<img class="" src="/images/variantPathogenicity-off.png" title="Variant Pathogenicity" style="width:30px">',a.has_pharma?e+='<img class="" src="/images/Pharmacogenomics-on.png" title="Pharmacogenomics" style="width:30px">':e+='<img class="" src="/images/Pharmacogenomics-off.png" title="Pharmacogenomics" style="width:30px">',e}var terms={AD:"Autosomal Dominant",AR:"Autosomal Recessive",XL:"X-Linked",XLR:"X-linked recessive",MT:"Mitochondrial",SD:"Semidominant",Undetermined:"Undetermined MOI"};function moiFormatter(t,a){return'<span class="pointer" data-toggle="tooltip" data-placement="top" title="'+terms[a.moi]+'" ">'+a.moi+"</span>"}function hasvalidityFormatter(t,a){return null==a.has_validity?"":'<a class="btn btn-success btn-sm pb-0 pt-0" href="/kb/genes/'+a.hgnc_id+'"><i class="glyphicon glyphicon-file"></i> <span class="hidden-sm hidden-xs">Curated</span></a>'}function hasPharmaFormatter(t,a){return null==a.has_pharma?"":'<a class="btn btn-success btn-sm pb-0 pt-0" href="/kb/genes/'+a.hgnc_id+'"><i class="glyphicon glyphicon-file"></i>  <span class="hidden-sm hidden-xs">Curated</span></a>'}function hasVariantFormatter(t,a){return null==a.has_variant?"":'<a class="btn btn-success btn-sm pb-0 pt-0" href="https://erepo.clinicalgenome.org/evrepo/ui/classifications?matchMode=exact&gene='+a.symbol+'"><i class="glyphicon glyphicon-file"></i>  <span class="hidden-sm hidden-xs">Approved VCEP</span></a>'}function hasactionabilityFormatter(t,a){return null==a.has_actionability?"":'<a class="btn btn-success btn-sm pb-0 pt-0" href="/kb/genes/'+a.hgnc_id+'"><i class="glyphicon glyphicon-file"></i>  <span class="hidden-sm hidden-xs">Curated</span></a>'}function hasdosageFormatter(t,a){return null==a.has_dosage?"":'<a class="btn btn-success  btn-wrap btn-sm pb-0 pt-0" href="/kb/genes/'+a.hgnc_id+'"><i class="glyphicon glyphicon-file"></i> <span class="hidden-sm hidden-xs">Curated</span></a>'}function hashaploFormatter(t,a){return a.has_dosage_haplo?'<a class="btn btn-success  btn-wrap btn-sm pb-0 pt-0" href="/kb/gene-dosage/'+a.hgnc_id+'"><i class="glyphicon glyphicon-file"></i> <span class="hidden-sm hidden-xs">Curated</span></a>':""}function hastriploFormatter(t,a){return a.has_dosage_triplo?'<a class="btn btn-success  btn-wrap btn-report btn-sm pb-0 pt-0" href="/kb/gene-dosage/'+a.hgnc_id+'"><i class="glyphicon glyphicon-file"></i> <span class="hidden-sm hidden-xs"> Curated</span></a>':""}function region_listener(){$(".fixed-table-toolbar").on("click",".action-select-grch",function(){var t=$(this).attr("data-uuid");$(".action-select-text").html(t),$("#select-gchr").val(t)})}function cnvlocationFormatter(t,a){var e=a.location.trim();if(null==e)return"";0===e.toLowerCase().indexOf("chr")&&(e=e.substring(3));var n=e.indexOf(":"),s=e.indexOf("-");return'<div class="position"><span aria-label="Chromosome" class="chr">'+e.substring(0,n)+'</span><span aria-label=" at " class="sr-only">:</span><span class="start">'+e.substring(n+1,s)+'</span><span aria-label=" to " class="sr-only">-</span><span class="end">'+e.substring(s+1)+"</span></div>"}var score_assertion_strings={0:"No Evidence",1:"Little Evidence",2:"Emerging Evidence",3:"Sufficient Evidence",30:"Autosomal Recessive",40:"Dosage Sensitivity Unlikely","Not yet evaluated":""};function cnvhaploFormatter(t,a){return!1===a.haplo_assertion?"":"Not yet evaluated"==a.haplo_assertion?'<span class="text-muted">Not Yet Evaluated</span>':a.haplo_assertion+" ("+score_assertion_strings[a.haplo_assertion]+")"}function cnvtriploFormatter(t,a){return!1===a.triplo_assertion?"":"Not yet evaluated"==a.triplo_assertion?'<span class="text-muted">Not Yet Evaluated</span>':a.triplo_assertion+" ("+score_assertion_strings[a.triplo_assertion]+")"}function cnvreportFormatter(t,a){return""===a.rawdate?'<span onclick="event.stopPropagation();" ><a class="btn btn-xs btn-success btn-block btn-report" href="/kb/gene-dosage/region/'+a.key+'"><i class="fas fa-file"></i>  Under Review</a></span>':'<span onclick="event.stopPropagation();" ><a class="btn btn-xs btn-success btn-block btn-report" href="/kb/gene-dosage/region/'+a.key+'"><i class="fas fa-file"></i>   '+a.date+"</a></span>"}function acmsymbolFormatter(t,a){return'<a href="/kb/gene-dosage/'+a.hgnc_id+'"><b>'+a.gene+"</b></a>"}function acmglinkFormatter(t,a){var e="<span onclick='event.stopPropagation();'><a href='https://ncbi.nlm.nih.gov"+a.clinvar_link+"' target='_clinvar'><b>ClinVar <i class='fas fa-external-link-alt'></i></b></a><span>";return a.has_variant?e+="<div onclick='event.stopPropagation();'><a href='"+a.cspec_link+"' target='_cspec'><b>CSpec Registry <i class='fas fa-external-link-alt'></i></b></a></div>":e+='<div onclick="event.stopPropagation();">&nbsp;</div>',e}function acmomimFormatter(t,a){var e=a.omimgene.substring(a.omimgene.lastIndexOf("/")+1);return'<a href="'+a.omimgene+'">'+e+"</a>"}function acmomimsFormatter(t,a){var e="",n=a.omims.split(","),s=!1;return n.forEach(function(t){var a=t.trim();s&&(e+=", "),e+='<a href="https://omim.org/entry/'+a+'">'+a+"</a>",s=!0}),e}function acmpmidsFormatter(t,a){var e="",n=a.pmids.split(","),s=!1;return n.forEach(function(t){var a=t.trim();s&&(e+=", "),e+='<a href="https://ncbi.nlm.nih.gov/pubmed/'+a+'">'+a+"</a>",s=!0}),e}function acmhaploFormatter(t,a){return!1===a.haplo_assertion?"":score_assertion_strings[a.haplo_assertion]+" ("+a.haplo_assertion+")"}function acmtriploFormatter(t,a){return!1===a.triplo_assertion?"":score_assertion_strings[a.triplo_assertion]+" ("+a.triplo_assertion+")"}function acmreportFormatter(t,a){return'<a class="btn btn-block btn btn-default btn-xs" href="'+report+a.symbol+'"><i class="fas fa-file"></i>   '+a.date+"</a>"}function dsreportFormatter(t,a){var e="Awaiting Review"==a.workflow?"default":"success",n="";return 3==a.type&&(e="unreviewable",a.workflow="Not Reviewable",n="This gene will not be reviewed because it is a pseudogene"),0==a.type||3==a.type?null==a.hgnc_id?'<span onclick="event.stopPropagation();" ><a class="btn btn-xs btn-'+e+' btn-block" title="'+n+'" href="/kb/gene-dosage/'+a.isca+'"><i class="fas fa-file"></i>   '+a.workflow+"</a></span>":'<span onclick="event.stopPropagation();" ><a class="btn btn-xs btn-'+e+' btn-block" title="'+n+'" href="/kb/gene-dosage/'+a.hgnc_id+'"><i class="fas fa-file"></i>   '+a.workflow+"</a></span>":'<span onclick="event.stopPropagation();" ><a class="btn btn-xs btn-'+e+' btn-block" title="'+n+'" href="/kb/gene-dosage/region/'+a.isca+'"><i class="fas fa-file"></i>   '+a.workflow+"</a></span>"}function dssymbolFormatter(t,a){return 0==a.type||3==a.type?null==a.hgnc_id?'<span onclick="event.stopPropagation();" ><a href="/kb/genes/'+a.isca+'"><b>'+a.symbol+"</b></a></span>":'<span onclick="event.stopPropagation();" ><a href="/kb/genes/'+a.hgnc_id+'"><b>'+a.symbol+"</b></a></span>":'<span onclick="event.stopPropagation();" ><a href="/kb/gene-dosage/region/'+a.isca+'"><b>'+a.symbol+"</b></a></span>"}function relationFormatter(t,a){var e="";if(0==a.type?e+='<div class="global_table_cell font-weight-bold gene" title="Gene">G</div>':1==a.type?e+='<div class="global_table_cell font-weight-bold region" title="Region">R</div>':e+='<div class="global_table_cell font-weight-bold psuedogene" title="Pseudogene">P</div>',null===a.relationship)return e;var n=a.relationship.substring(0,1);return e+='<div class="global_table_cell font-weight-bold carryover mt-1 mb-1" title="'+a.relationship+'">'+n+"</div>"}function locationSorter(t,a){var e=t.match(/\d+|X|Y/g),n=a.match(/\d+|X|Y/g);return"X"==e[0]?e[0]=23:"Y"==e[0]?e[0]=24:e[0]=parseInt(e[0]),"X"==n[0]?n[0]=23:"Y"==n[0]?n[0]=24:n[0]=parseInt(n[0]),e[0]<n[0]?-1:e[0]>n[0]?1:(e[1]=parseInt(e[1]),n[1]=parseInt(n[1]),e[1]<n[1]?-1:e[1]>n[1]?1:(e[2]=parseInt(e[2]),n[2]=parseInt(n[2]),e[2]<n[2]?-1:1))}function referenceSorter(t,a){var e=0,n=0,s=t.match(/PMID:\s*(\d+)/);if(null===s)return 0;void 0!==s[1]&&(e=s[1]);var i=a.match(/PMID:\s*(\d+)/);return void 0!==i[1]&&(n=i[1]),e<n?-1:e>n?1:0}function ageSorter(t,a){var e=0,n=0,s=t.match(/(\d+)\s*(Years|Months|Weeks|Days)/);null!==s&&void 0!==s[1]&&(e=parseInt(s[1]),"Years"==s[2]?e*=365:"Months"==s[2]?e*=30:"Weeks"==s[2]&&(e*=7));var i=a.match(/(\d+)\s*(Years|Months|Weeks|Days)/);return null!==i&&void 0!==i[1]&&(n=parseInt(i[1]),"Years"==i[2]?n*=365:"Months"==i[2]?n*=30:"Weeks"==i[2]&&(n*=7)),e<n?-1:e>n?1:0}
