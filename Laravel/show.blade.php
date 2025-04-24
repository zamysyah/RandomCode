@extends('layouts.master')
@section('content')
<div class="container mt-5 mb-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card border-0 shadow-sm rounded">
                    <div class="card-body">
                        <img src="{{ asset('storage/artikels/'.$artikel->gambar) }}" class="w-100 rounded">
                        <hr>
                        <h4>{{ $artikel->judul }}</h4>
                        <p class="tmt-3">
                            {!! $artikel->deskripsi !!}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endsection
