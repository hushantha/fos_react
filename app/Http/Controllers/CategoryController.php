<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CategoryController extends Controller
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
        $categories = Category::where('is_active', 1)->select('id', 'name')->get();
        return Inertia::render('Category/AddCategory', ['addonCategories'=> $categories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            DB::beginTransaction();

            $addon = new Category();
            $addon->name = $request->name;
            $addon->slug = $request->slug;
            $addon->is_active = $request->status;
            $addon->save();


            DB::commit();
            return redirect(route('category.add'));

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
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $category = Category::find($id);
        $categories = Category::where('is_active', 1)->select('id', 'name')->get();
        return Inertia::render('Category/EditCategory', ['category' => $category, 'categories'=> $categories]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        try {
            DB::beginTransaction();

            $addon = Category::find($request->id);
            $addon->name = $request->name;
            $addon->slug = $request->slug;
            $addon->is_active = $request->status;
            $addon->save();


            DB::commit();
            return redirect(route('category.edit', $request->id));

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
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        //
    }
}
