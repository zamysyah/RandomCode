@extends('layouts.master')
@section('content')
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div>
                    <h3 class="text-center my-4">Daftar Artikel Gamelab</h3>
                    <h5 class="text-center"><a href="https://gamelab.id">Gamelab Indonesia</a></h5>
                    <hr>
                </div>
                <div class="card border-0 shadow-sm rounded">
                    <div class="card-body">
                        {{-- // Menambah Tombol untuk tambah data dan juga fungsi route create --}}
                        <a href="{{ route('artikel.create') }}" class="btn btn-md btn-success mb-3">TAMBAH ARTIKEL</a>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Gambar</th>
                                    <th scope="col">Judul</th>
                                    <th scope="col">Deskripsi</th>
                                    {{-- // Menambah kolom untuk Aksi --}}
                                    <th scope="col">AKSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse ($artikels as $artikel)
                                    <tr>
                                        <td class="text-center">
                                            <img src="{{ asset('/storage/artikels/' . $artikel->gambar) }}" class="rounded"
                                                style="width: 50px">
                                        </td>
                                        <td>{{ $artikel->judul }}</td>
                                        <td>{!! $artikel->deskripsi !!}</td>
                                        <td class="text-center">
                                            <form class="d-flex justify-content-center align-item-center" onsubmit="return confirm('Apakah Anda Yakin ?');"
                                                action="{{ route('artikel.destroy', $artikel->id) }}" method="POST">
                                                <a href="{{ route('artikel.show', $artikel->id) }}"
                                                    class="btn btn-sm btn-dark me-1 p-2"><i class="bi bi-display"
                                                        style="color: white;"></i></a>
                                                <a href="{{ route('artikel.edit', $artikel->id) }}"
                                                    class="btn btn-sm btn-primary me-1 p-2"><i class="bi bi-pencil-square"
                                                        style="color: white;"></i></a>
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-sm btn-danger p-2"><i class="bi bi-trash"
                                                        style="color: white;"></i></button>
                                            </form>
                                        </td>
                                    </tr>
                                @empty
                                    <div class="alert alert-danger">
                                        Data artikel belum Tersedia.
                                    </div>
                                @endforelse
                            </tbody>
                        </table>
                        {{ $artikels->links() }}
                    </div>
                </div>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

        <script>
            //message with toastr
            @if (session()->has('success'))

                toastr.success('{{ session('success') }}', 'BERHASIL!');
            @elseif (session()->has('error'))

                toastr.error('{{ session('error') }}', 'GAGAL!');
            @endif
        </script>
    @endsection
