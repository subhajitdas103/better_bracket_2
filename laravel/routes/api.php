<?php
use App\Http\Controllers\Auth\GoogleAuthController;
<<<<<<< HEAD
use App\Http\Controllers\Auth\FacebookLoginController;
// Route::post('google-login', [GoogleAuthController::class, 'handleGoogleLogin']);
// Route::post('google-login', [GoogleAuthController::class, 'handleGoogleLogin'])->withoutMiddleware('auth:sanctum');
Route::post('google-login', [GoogleAuthController::class, 'handleGoogleLogin'])
    ->withoutMiddleware('auth:sanctum');

   
    Route::post('facebook-login', [FacebookLoginController::class, 'redirectToFacebook'])
    ->withoutMiddleware('auth:sanctum');

     Route::post('facebook-callback', [FacebookLoginController::class, 'handleFacebookCallback'])
    ->withoutMiddleware('auth:sanctum');


    
=======
use Illuminate\Support\Facades\Route;
  // Make sure to use the correct controller

// Route::post('google-login', [AuthController::class, 'handleGoogleLogin']);
Route::post('/google-login', [GoogleAuthController::class, 'handleGoogleLogin']);
// Route::get('/Students',[StudentController::class,'fetchStudentData']);
>>>>>>> parent of 1a36418 (up)
