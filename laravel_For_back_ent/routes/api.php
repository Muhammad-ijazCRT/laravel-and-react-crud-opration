<?php

use App\Http\Controllers\studentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('', [studentController::class, 'index'])->name('index');
Route::get('/create', [studentController::class, 'create'])->name('create');

Route::post('/create', [studentController::class, 'store']);

Route::get('show/{id}', [studentController::class, 'show'])->name('edit');
Route::post('show/{id}', [studentController::class, 'update'])->name('update');
// Route::post('/update/{id}', [studentController::class, 'update'])->name('update');
