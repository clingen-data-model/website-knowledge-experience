@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
          <h1 class=" display-4 ">BRCA2 
              <a class="btn btn-default btn-sm pl-2 pr-2 pt-1 pb-1 text-10px" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <i class="far fa-chevron-circle-down"></i>Gene Facts 
              </a>
          </h1>
        </div>
        <div class="col-md-10">
            
            <div class="collapse" id="collapseExample">
                <div class="row">
                    <div class="col-sm-12  mt-0 pt-0 small">
                        <h4 class="border-bottom-1">Gene Facts</h4>

                        <dl class="dl-horizontal">
                          <dt>HGNC Symbol</dt>
                          <dd>BRCA2 (HGNC:1101)</dd>
                          <dt>HGNC Name</dt>
                          <dd>BRCA2 DNA repair associated</dd>
                          <dt>Gene type</dt>
                          <dd>protein-coding</dd>
                          <dt>Locus type</dt>
                          <dd>gene with protein product</dd>
                          <dt>Previous symbols</dt>
                          <dd>FANCD1, FACD, FANCD</dd>
                          <dt>Alias symbols</dt>
                          <dd>FAD, FAD1, BRCC2, XRCC11</dd>
                          <dt>Genomic Coordinate</dt>
                          <dd>
                            <table>
                                <tr>
                                    <td>GRCh37/hg19</td>
                                    <td>chr17: 41,196,312-41,277,500
                                        <a href="" class="badge-info badge pointer"><i class="fas fa-search"></i> ClinGen</a> 
                                        <a href="" class="badge-info badge pointer"><i class="fas fa-external-link"></i> NCBI</a> <a href="" class="badge-info badge pointer"><i class="fas fa-external-link"></i> Ensembl</a> <a href="" class="badge-info badge pointer"><i class="fas fa-external-link"></i> UCSC</span>
                                    </td>
                                </tr>  
                                <tr>
                                    <td class="pr-3">GRCh38/hg38</td>
                                    <td>chr17: 43,044,295-43,125,483
                                        <a href="" class="badge-info badge pointer"><i class="fas fa-search"></i> ClinGen</a> 
                                        <a href="" class="badge-info badge pointer"><i class="fas fa-external-link"></i> NCBI</a> <a href="" class="badge-info badge pointer"><i class="fas fa-external-link"></i> Ensembl</a> <a href="" class="badge-info badge pointer"><i class="fas fa-external-link"></i> UCSC</span>
                                    </td>
                                </tr> 
                            </table>
                          </dd>
                          <dt>Chromosomal location</dt>
                          <dd>13q13.1 <a href="" class="badge-info badge pointer"><i class="fas fa-search"></i> ClinGen</a> </dd>
                          <dt>Function</dt>
                          <dd>Involved in double-strand break repair and/or homologous recombination. Binds RAD51 and potentiates recombinational DNA repair by promoting assembly of RAD51 onto single-stranded DNA (ssDNA). Acts by targeting RAD51 to ssDNA over double-stranded DNA, enabling RAD51 to displace … Source: UniProt</dd>
                        </dl>
                    </div>
                </div>
            </div>

            <h2 class="h3 mb-0">ClinGen's Curations Summary Report</h2>

            <div class="card">
                <div class="card-body">
                    
                </div>
            </div>
        </div>
        @include('_partials.nav_side.gene',['navActive' => "show"])
    </div>
</div>
@endsection

@section('heading')
<div class="content ">
    <div class="section-heading-content">
    </div>
</div>
@endsection

@section('script_js')

@endsection