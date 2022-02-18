<?php

namespace App\Http\Controllers;

use App\Http\Requests\studentPostRequest;
use App\Models\student;
use Illuminate\Http\Request;
use Symfony\Component\Routing\Router;

class studentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $stu = student::all();
        // return view('index',['student' => $stu]);
        return $stu;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $stu = student::all();
        // return view('index', ['stu' => $stu]);
        return $stu;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $request->validate();
        $stu = new student;
        $stu->name = $request->name;
        $stu->email = $request->email;
        $stu->phone = $request->phone;
        $stu->save();
        // return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $stu = student::find($id);
        return $stu;
        // return view('edit', ['student'=>$stu]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $stu = student::find($id);
        $stu->name = $request->name;
        $stu->email = $request->email;
        $stu->phone = $request->phone;
        $stu->save();
        // return redirect()->route('create');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
