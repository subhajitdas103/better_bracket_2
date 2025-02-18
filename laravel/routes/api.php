<?php
use App\Http\Controllers\Auth\GoogleAuthController;
use Illuminate\Support\Facades\Route;
  // Make sure to use the correct controller

// Route::post('google-login', [AuthController::class, 'handleGoogleLogin']);
Route::post('/google-login', [GoogleAuthController::class, 'handleGoogleLogin']);
// Route::get('/Students',[StudentController::class,'fetchStudentData']);