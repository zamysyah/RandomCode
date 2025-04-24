<?php

namespace App\Http\Controllers;

//import Model Artikel
use App\Models\Artikel;

//return type View
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ArtikelController extends Controller
{
    /**
     * index
     *
     * @return View
     */
    public function index(): View
    {
        //get artikels
        $artikels = Artikel::latest()->paginate(5);

        //render view with artikels
        return view('artikels.index', compact('artikels'));
    }

    public function create(): View
    {
        return view('artikels.create');
    }

    public function store(Request $request): RedirectResponse
    {
        //validate form
        $this->validate($request, [
            'gambar' => 'required|image|mimes:jpeg,jpg,png|max:2048',
            'judul' => 'required|min:5',
            'deskripsi' => 'required|min:10'
        ]);

        //upload image
        $gambar = $request->file('gambar');
        $gambar->storeAs('public/artikels', $gambar->hashName());

        //create artikel
        Artikel::create([
            'gambar' => $gambar->hashName(),
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi
        ]);

        //redirect to index
        return redirect()->route('artikel.index')->with(['success' => 'Data Berhasil Disimpan!']);
    }

    public function show(string $id): View
    {
        //get artikel by ID
        $artikel = Artikel::findOrFail($id);

        //render view with artikel
        return view('artikels.show', compact('artikel'));
    }

    public function edit(string $id): View
    {
        //get artikel by ID
        $artikel = Artikel::findOrFail($id);

        //render view with artikel
        return view('artikels.edit', compact('artikel'));
    }


    public function update(Request $request, $id): RedirectResponse
    {
        //validate form
        $this->validate($request, [
            'gambar' => 'image|mimes:jpeg,jpg,png|max:2048',
            'judul' => 'required|min:5',
            'deskripsi' => 'required|min:10'
        ]);

        //get artikel by ID
        $artikel = Artikel::findOrFail($id);

        //check if image is uploaded
        if ($request->hasFile('gambar')) {

            //upload new image
            $gambar = $request->file('gambar');
            $gambar->storeAs('public/artikels', $gambar->hashName());

            //delete old image
            Storage::delete('public/artikels/' . $artikel->gambar);

            //update post with new image
            $artikel->update([
                'gambar' => $gambar->hashName(),
                'judul' => $request->judul,
                'deskripsi' => $request->deskripsi
            ]);

        } else {

            //update artikel without image
            $artikel->update([
                'judul' => $request->judul,
                'deskripsi' => $request->deskripsi
            ]);
        }

        //redirect to index
        return redirect()->route('artikel.index')->with(['success' => 'Data Berhasil Diubah!']);
    }

    public function destroy($id): RedirectResponse
    {
        //get post by ID
        $artikel = Artikel::findOrFail($id);

        //delete image
        Storage::delete('public/artikels/' . $artikel->gambar);

        //delete post
        $artikel->delete();

        //redirect to index
        return redirect()->route('artikel.index')->with(['success' => 'Data Berhasil Dihapus!']);
    }
}

