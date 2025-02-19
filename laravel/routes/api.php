
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\GoogleAuthController;
// Route::post('google-login', [GoogleAuthController::class, 'handleGoogleLogin']);
// Route::post('google-login', [GoogleAuthController::class, 'handleGoogleLogin'])->withoutMiddleware('auth:sanctum');
Route::post('google-login', [GoogleAuthController::class, 'handleGoogleLogin'])
    ->withoutMiddleware('auth:sanctum');

