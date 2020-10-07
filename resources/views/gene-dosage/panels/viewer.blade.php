<h4>Genomic View</h4>

<div id="g_view">

@if (!empty($record->GRCh38_loc))
  <div class="seqview_head">
    <span class="assembly_select">Select assembly: </span>
    <select id="g_view_menu" name="seqviewermenu">
      <option name="accession" value="?embedded=true&appname=isca_public&assm_context=GCF_000001405.25&id={{ $record->seqID }}&from={{ $record->sv_start }}&to={{ $record->sv_stop }}&tracks=[key:sequence_track][key:gene_model_track,name:NCBI,display_name:NCBI%20Genes,annots:Unnamed,Options:ShowAll][key:dbvar_track,name:dbVar_nstd45,display_name:ISCA%20Curated%20Regions,annots:NA000002000.2,rendering:Default]" selected="selected">GRCh37/hg19 {{ $record->loc }}</option>
      <option name="accession" value="?embedded=true&appname=isca_public&assm_context=GCF_000001405.36&id={{ $record->GRCh38_seqID }}&from={{ $record->GRCh38_sv_start }}&to={{ $record->GRCh38_sv_stop }}&tracks=[key:sequence_track][key:gene_model_track,name:NCBI,display_name:NCBI%20Genes,annots:Unnamed,Options:ShowAll][key:dbvar_track,name:dbVar_nstd45,display_name:ISCA%20Curated%20Regions,annots:NA000002000.3,rendering:Default]">GRCh38/hg38 {{ $record->GRCh38_loc }}</option>
    </select>
    <span class="seqviewer-comment">
      <span> (<a href="https://www.ncbi.nlm.nih.gov/nuccore/{{ $record->seqID }}" target="_blank">{{ $record->seqID }}</a>) </span>
      <span class="hide"> (<a href="https://www.ncbi.nlm.nih.gov/nuccore/{{ $record->GRCh38_seqID }}" target="_blank">{{ $record->GRCh38_seqID }}</a>)</span>
    </span>
  </div>
  <div id="sv1" class="SeqViewerApp">
    <a href='?embedded=true&appname=isca_public&assm_context=GCF_000001405.25&id={{ $record->seqID }}&from={{ $record->sv_start }}&to={{ $record->sv_stop }}&tracks=[key:sequence_track][key:gene_model_track,name:NCBI,display_name:NCBI%20Genes,annots:Unnamed,Options:ShowAll][key:dbvar_track,name:dbVar_nstd45,display_name:ISCA%20Curated%20Regions,annots:NA000002000.2,rendering:Default]'></a>
  </div> 
@else
  <p id="gen_head"><span class="strong">GRCh37/hg19</span> {{ $record->loc }} (<a href="https://www.ncbi.nlm.nih.gov/nuccore/{{ $record->seqID }}" target="_blank">{{ $record->seqID }})</a></p>
  <div id="sv1" class="SeqViewerApp">
    <a href='?embedded=true&appname=isca_public&assm_context=GCF_000001405.25&id={{ $record->seqID }}&from={{ $record->sv_start }}&to={{ $record->sv_stop }}&tracks=[key:sequence_track][key:gene_model_track,name:NCBI,display_name:NCBI%20Genes,annots:Unnamed,Options:ShowAll][key:dbvar_track,name:dbVar_nstd45,display_name:ISCA%20Curated%20Regions,annots:NA000002000.2,rendering:Default]'></a>
  </div>
@endif

</div>