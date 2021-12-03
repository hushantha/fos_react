<?php

use App\Http\Controllers\AddonCategoryController;
use App\Http\Controllers\AddonController;
use App\Http\Controllers\CategoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/addons/add', [AddonController::class, 'create'])->name('addons.add');
Route::post('/addons/store', [AddonController::class, 'store'])->name('addons.store');
Route::get('/addons/edit/{id}', [AddonController::class, 'edit'])->name('addons.edit');
Route::put('/addons/update', [AddonController::class, 'update'])->name('addons.update');

Route::get('/addons/category/add', [AddonCategoryController::class, 'create'])->name('addons.category.add');
Route::post('/addons/category/store', [AddonCategoryController::class, 'store'])->name('addons.category.store');
Route::get('/addons/category/edit/{id}', [AddonCategoryController::class, 'edit'])->name('addons.category.edit');
Route::put('/addons/category/update', [AddonCategoryController::class, 'update'])->name('addons.category.update');

Route::get('/category/add', [CategoryController::class, 'create'])->name('category.add');
Route::post('/category/store', [CategoryController::class, 'store'])->name('category.store');
Route::get('/category/edit/{id}', [CategoryController::class, 'edit'])->name('category.edit');
Route::put('/category/update', [CategoryController::class, 'update'])->name('category.update');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');
