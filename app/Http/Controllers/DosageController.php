<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Dosage as DosageResource;

use Illuminate\Support\Collection;
use Ahsan\Neo4j\Facade\Cypher;

use Illuminate\Pagination\LengthAwarePaginator;

use Maatwebsite\Excel\Facades\Excel as Gexcel;

use App\Imports\Excel;
use App\Exports\DosageExport;

use App\GeneLib;
use App\Jira;

/**
*
* @category   Web
* @package    Search
* @author     P. Weller <pweller1@geisinger.edu>
* @author     S. Goehringer <scottg@creationproject.com>
* @copyright  2019 ClinGen
* @license    http://www.php.net/license/3_01.txt  PHP License 3.01
* @version    Release: @package_version@
* @link       http://pear.php.net/package/PackageName
* @see        NetOther, Net_Sample::Net_Sample()
* @since      Class available since Release 1.2.0
* @deprecated
*
* */
class DosageController extends Controller
{
	/**
	* Create a new controller instance.
	*
	* @return void
	*/
	public function __construct()
	{
		//$this->middleware('auth');
	}
	
	
    /**
     * Display a listing of curated genes with a dosage sensitivity.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $page = 1, $psize = 100)
    {
        
        // process request args
		foreach ($request->only(['page', 'sort', 'search', 'direction']) as $key => $value)
			$$key = $value;

		$display_tabs = collect([
			'active' => "dosage",
			'query' => "",
			'counts' => [
				'dosage' => "1434",
				'gene_disease' => "500",
				'actionability' => "270",
				'variant_path' => "300"
			]
		]);
		
		/*$results = GeneLib::dosageList(['page' => $page - 1,
										'pagesize' => $psize,
										'sort' => $sort ?? 'GENE_LABEL',
										'direction' => $direction ?? 'ASC',
										'search' => '',
										'curated' => true ]);

		if ($results === null)
		{
			die(print_r(GeneLib::getError()));
		}*/

		// customize the pagination.
		//$records = new LengthAwarePaginator($records, 1500, $psize, $page);
		//$records->withPath('genes');
	
		//$records = new LengthAwarePaginator($results->collection, $results->count, $psize, $page);
		//$records->withPath('gene-dosage');

		//return view('gene-dosage.index', compact('display_tabs', 'records'))
		//			->with('count', $results->count);;

		return view('gene-dosage.index', compact('display_tabs'))
		//				->with('count', $results->count)
						->with('apiurl', '/api/dosage')
						->with('pagesize', $psize)
						->with('page', $page);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id = '')
    {
		$display_tabs = collect([
				'active'                            => "gene",
				'query'                             => "BRCA2",
				'counts'    => [
					'dosage'                        => "1434",
					'gene_disease'                  => "500",
					'actionability'                 => "270",
					'variant_path'                  => "300"
				]
		]);
	
		$record = GeneLib::dosageDetail([ 
			'gene' => $id,
			'curations' => true,
			'action_scores' => true,
			'validity' => true,
			'dosage' => true
		]);

		if ($record === null)
		{
			die(print_r(GeneLib::getError()));
		}

		// since we don't run through resources, we add some helpers here for now.  To be eventually
		// moved back into the library
		$record->haplo_assertion = GeneLib::haploAssertionString($record->has_dosage_haplo);
        $record->triplo_assertion = GeneLib::triploAssertionString($record->has_dosage_triplo);
        $record->report = env('CG_URL_CURATIONS_DOSAGE', '#') . $record->symbol . '&subject=';
		$record->date = $record->displayDate($record->dosage_report_date);
			
		// some data just to test the ideogram and sequence viewer
		$record->chromosome = '22';
		$record->start_location="43088121";
		$record->stop_location="43117307";
		$record->GRCh38_loc = 'chr22: 42,692,115-42,721,301';
		$record->seqID = 'NC_000022.10';
		$record->sv_start = '43085202.3';
		$record->sv_stop = '43120225.7';
		$record->loc = 'chr22: 43,088,121-43,117,307';
		$record->GRCh38_seqID = 'NC_000022.11';
		$record->GRCh38_sv_start = '42689196.3';
		$record->GRCh38_sv_stop = '42724219.7';
//dd($record);
		return view('gene-dosage.show', compact('display_tabs', 'record'));
	}
	

	/**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function download(Request $request)
    {
		return Gexcel::download(new DosageExport, 'Clingen-Dosage-Sensitivity.csv');
    }

}
