<?php

use App\Http\Controllers\studentController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use App\Http\Controllers\UploadImageController;

// Route::get('', [studentController::class, 'index']);
// Route::post('', [studentController::class, 'store']);
