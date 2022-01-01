@if ($validity_collection->isNotEmpty())
    @php global $currations_set; $currations_set = true; @endphp

    <h3  id="link-gene-validity" class=" mt-3 mb-0"><img src="/images/clinicalValidity-on.png" width="40" height="40" style="margin-top:-4px" class="hidden-sm hidden-xs"> Gene-Disease Validity</h3>
    <div class="card mb-3">
        <div class="card-body p-0 m-0">
            <table class="panel-body table mb-0">
                <thead class="thead-labels">
                    <tr>
                    <th class="col-sm-1 th-curation-group text-left">Gene</th>
                    <th class="col-sm-3 text-left"> Disease</th>
                    <th class="col-sm-1 text-left">MOI</th>
                    <th class="col-sm-2 text-left">Expert Panel</th>
                    <th class="col-sm-2  ">Classification</th>
                    <th class="col-sm-1 text-center">Report &amp; Date</th>
                    </tr>
                </thead>
                <tbody class="">

                @foreach($validity_collection as $validity)
                <tr>
                    <td class="">
                        <a href="{{ route('gene-show', $validity->gene->hgnc_id) }}">{{ $validity->gene->label }}</a>
                    </td>

                    <td class="">
                        {{ displayMondoLabel($record->label) }}
                        {!! displayMondoObsolete($record->label) !!}
                    </td>

                    <td class="">
                        {{ \App\GeneLib::validityMoiAbvrString($validity->assertion->mode_of_inheritance->website_display_label) }}
                        <span class="cursor-pointer" data-toggle="tooltip" data-placement="top" title="{{ \App\GeneLib::validityMoiString($validity->assertion->mode_of_inheritance->website_display_label) }} Mode Of Inheritance"><i class="fas fa-info-circle text-muted"></i></span>
                    </td>

                    <td class="text-left">
                        <a class="" href="https://clinicalgenome.org/affiliation/{{ App\Panel::gg_map_to_panel($validity->assertion->attributed_to->curie, true) }}">
                        {{ $validity->assertion->attributed_to->label }} GCEP
                        <i class="fas fa-external-link-alt ml-1"></i>
                        </a>
                        <div class="action-expand-curation" data-uuid="{{ $validity->assertion->curie }}" data-toggle="tooltip" data-placement="top" title="Click to view additional information" ><span class="text-muted"><i><small>show more  </small></i><i class="fas fa-caret-down text-muted"></i></span></div>
                    </td>

                    <td class="text-center">
                        <a class="btn btn-default btn-block text-left mb-2 btn-classification" href="/kb/gene-validity/{{ $validity->assertion->curie }}">
                        {{ \App\GeneLib::validityClassificationString($validity->assertion->classification->label) }}
                        </a>
                    </td>

                    <td class="text-center">
                        <a class="btn btn-xs btn-success btn-block btn-report" href="/kb/gene-validity/{{ $validity->assertion->curie }}"><i class="glyphicon glyphicon-file"></i> {{ $record->displayDate($validity->assertion->report_date) }}</a>
                    </td>
                </tr>
                <tr class="hide-element">
                    <td colspan="6" class="no-row-border">
                        <div class="row">
                            <div class="col-md-10">
                                <table class="table-sm m-0">
                                    <tr class="noborder no-row-border">
                                        <td valign="top" class=" small text-muted pr-2">Secondary Contributors: </td>
                                        <td class="small">{{ App\Validity::secondaryContributor($validity->assertion) }}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </td>
                </tr>
            @endforeach

            </tbody>
        </table>
    </div>
</div>
@endif
