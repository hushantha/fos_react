<?php

namespace App\Http\Controllers;

use App\Models\Addon;
use App\Models\AddonCategory;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class AddonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $addonCategories = AddonCategory::where('is_active', 1)->select('id', 'name')->get();
        return Inertia::render('Addon/AddAddon', ['addonCategories'=> $addonCategories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $request->validate([
        //     'name' => 'required',
        //     'slug' => 'required|unique:addons',
        //     'price' => 'required|numeric',
        //     'SpecialPrice' => 'required|numeric',
        // ]);

        try {
            DB::beginTransaction();

            $addon = new Addon();
            $addon->name = $request->addonName;
            $addon->slug = $request->slug;
            $addon->price = $request->price;
            $addon->special_price = $request->specialPrice;
            $addon->is_active = $request->status;
            $addon->addon_category_id = 1;
            $addon->save();


            DB::commit();
            return redirect(route('addons.add'));

        } catch (Exception $ex) {
            DB::rollBack();

            dd($ex);
            Log::error($ex);
            return abort(500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Addon  $addon
     * @return \Illuminate\Http\Response
     */
    public function show(Addon $addon)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Addon  $addon
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $addon = Addon::find($id);
        $addonCategories = AddonCategory::where('is_active', 1)->select('id', 'name')->get();
        return Inertia::render('Addon/EditAddon', ['addon'=>$addon, 'addonCategories'=> $addonCategories]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Addon  $addon
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
                $request->validate([
            // 'name' => 'required',
            'slug' => 'required|unique:addons,slug,'.$request->id,
            // 'price' => 'required|numeric',
            // 'SpecialPrice' => 'required|numeric',
        ]);
        try {
            DB::beginTransaction();

            $addon = Addon::find($request->id);
            $addon->name = $request->addonName;
            $addon->slug = $request->slug;
            $addon->price = $request->price;
            $addon->special_price = $request->specialPrice;
            $addon->is_active = $request->status;
            $addon->addon_category_id = 1;
            $addon->save();


            DB::commit();
            return redirect(route('addons.edit', $request->id));

        } catch (Exception $ex) {
            DB::rollBack();

            dd($ex);
            Log::error($ex);
            return abort(500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Addon  $addon
     * @return \Illuminate\Http\Response
     */
    public function destroy(Addon $addon)
    {
        //
    }
}
