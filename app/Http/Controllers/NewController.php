<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewController extends Controller
{
    public function new()
    {
       
        return response()->json([ 'msg' => 'The post successfully added']);
    }

    public function create_tag(){
    	return "it s working";
    }
}
