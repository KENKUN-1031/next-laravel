<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class testController extends Controller
{
    public function getData()
    {
        $data = [
            ['id' => 1, 'name' => 'Item1'],
            ['id' => 2, 'name' => 'Item2'],
            // DBからデータを送る時はModelを直接送ればいい
        ];

        return response()->json($data);
    }
}



// app/Http/Controllers/ApiDataController.php

//namespace App\Http\Controllers;
//
//use Illuminate\Http\Request;
//use App\Models\YourModel;
//
//class ApiDataController extends Controller
//{
//    public function getData()
//    {
//        $data = YourModel::all(); // あるいはデータベースから取得する他の方法を使ってください
//
//        return response()->json($data);
//    }
//}


