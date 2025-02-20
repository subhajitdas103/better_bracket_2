
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\GoogleAuthController;
use App\Http\Controllers\Auth\FacebookLoginController;
// Route::post('google-login', [GoogleAuthController::class, 'handleGoogleLogin']);
// Route::post('google-login', [GoogleAuthController::class, 'handleGoogleLogin'])->withoutMiddleware('auth:sanctum');
Route::post('google-login', [GoogleAuthController::class, 'handleGoogleLogin'])
    ->withoutMiddleware('auth:sanctum');

   
    Route::post('facebook-login', [FacebookLoginController::class, 'redirectToFacebook'])
    ->withoutMiddleware('auth:sanctum');

     Route::post('facebook-callback', [FacebookLoginController::class, 'handleFacebookCallback'])
    ->withoutMiddleware('auth:sanctum');


    