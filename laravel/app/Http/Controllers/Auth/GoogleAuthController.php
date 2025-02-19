<?php
namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class GoogleAuthController extends Controller
{
    public function handleGoogleLogin(Request $request)
{
    $accessToken = $request->input('access_token');

   
    $googleUser = Http::withHeaders([
        'Authorization' => "Bearer {$accessToken}",
    ])->get('https://www.googleapis.com/oauth2/v3/userinfo')->json();

    if (!isset($googleUser['email'])) {
        return response()->json(['message' => 'Invalid token'], 401);
    }


    $user = User::updateOrCreate(
        ['email' => $googleUser['email']],
        [
            'name' => $googleUser['name'],
            'google_id' => $googleUser['sub'],
            'avatar' => $googleUser['picture'],
            'password' => bcrypt(uniqid()),
        ]
    );


    $token = $user->createToken('google-token')->plainTextToken;

    return response()->json([
        'user' => $user,
        'token' => $token,
   ]);
 }





 }
