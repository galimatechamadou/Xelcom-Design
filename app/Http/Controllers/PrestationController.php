<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PrestationController extends Controller
{
public function afficher(){
    return view('/prestation/afficher');
}    
}
