# Panduan foto kartu struktur tim Vortex Hydro

Bagian Struktur Tim berupa carousel coverflow 3D dengan delapan kartu: kartu pertama adalah Ketua Tim, diikuti tujuh divisi. Kartu di tengah tampil berwarna dan besar, kartu di sampingnya abu-abu dan miring berperspektif. Geser dengan drag mouse atau swipe, pakai tombol panah, klik batang progres, scroll horizontal di trackpad, atau tombol panah keyboard (Home/End juga bisa). Klik kartu di samping untuk memindahkannya ke tengah. Kartu divisi menampilkan foto bersama di depan; sisi belakang menampilkan deskripsi dan daftar anggota, termasuk ketua divisi. Kartu Ketua Tim menampilkan foto ketua dan daftar sekretaris serta bendahara. Tombol putar balik di pojok kanan atas, tombol Esc, atau menggeser kartu akan mengembalikan kartu ke foto. Teks alternatif dan label tombol tetap mendukung pembaca layar, dan animasi dipersingkat untuk pengguna yang memilih "reduce motion".

Warna aksen tiap kartu (garis kecil di samping jabatan, batang progres, dan strip atas sisi belakang) diatur di objek `TEAM_ACCENT` pada `ui/script.js`, kuncinya sama dengan nama folder divisi.

Deskripsi divisi saat ini adalah draf awal, bukan uraian tugas resmi.

## Foto pengurus utama

Kartu di dek utama hanya memakai foto Ketua Tim. Foto sekretaris dan bendahara muncul sebagai anggota pada panel Ketua Tim. Simpan semua foto pengurus di folder `pengurus/`. Gunakan format `.jpg` atau `.png` dan aturan nama file yang sama seperti foto CO.

| Jabatan | Nama | Contoh nama file |
|---|---|---|
| Ketua Tim | Mochammad Ardiansyah Tri Wicaksono | `mochammad-ardiansyah-tri-wicaksono.jpg` |
| Sekretaris Tim 1 | Mohammad Miftah Yusron Hana'i | `mohammad-miftah-yusron-hana-i.jpg` |
| Sekretaris Tim 2 | Mohamad Supriyadi | `mohamad-supriyadi.jpg` |
| Bendahara Tim 1 | Khalidatul Aliyah Safitri | `khalidatul-aliyah-safitri.jpg` |
| Bendahara Tim 2 | Loudy Firza Aulia | `loudy-firza-aulia.jpg` |
| Bendahara Tim 3 | Maritza Aprilia Putri | `maritza-aprilia-putri.jpg` |

## Foto bersama divisi

Simpan foto bersama di folder divisi masing-masing dengan nama `foto-bersama.jpg` atau `foto-bersama.png`. Daftarkan ekstensi di objek `TEAM_GROUP_PHOTO_FORMATS` dalam `ui/script.js`, memakai nama folder sebagai kunci. Contoh:

```js
const TEAM_GROUP_PHOTO_FORMATS = {
  electrical: 'jpg',
  modeling: 'png'
};
```

Foto bersama belum tersedia di proyek saat ini, jadi kartu akan memakai `placeholder-card.svg` sampai fotonya ditambahkan dan didaftarkan. Jika foto yang didaftarkan gagal dimuat, kartu juga kembali ke placeholder. Pastikan semua orang di foto memiliki izin untuk ditampilkan.

## Foto CO dan anggota

Simpan foto ketua divisi dan anggota di folder divisi yang sama. Foto individu ditampilkan di daftar pada sisi belakang kartu. Gunakan format `.jpg` atau `.png` dan nama file huruf kecil tanpa NIM; ubah spasi, titik, apostrof, dan tanda baca menjadi tanda hubung.

| Divisi | Folder | Nama CO | Contoh nama file |
|---|---|---|---|
| Modeling | `modeling/` | Kristoforus Rizkiano Tembang Langit | `kristoforus-rizkiano-tembang-langit.jpg` |
| Mat Model | `mat-model/` | Muhammad Alfian Firmansyah | `muhammad-alfian-firmansyah.jpg` |
| Software | `software/` | Fattar Davino Aulia Rahman | `fattar-davino-aulia-rahman.jpg` |
| Electrical | `electrical/` | Muhammad Nur Faizin | `muhammad-nur-faizin.jpg` |
| Mekanikal | `mekanikal/` | M. Salman Alfarizi Ramadani | `m-salman-alfarizi-ramadani.jpg` |
| Perlengkapan | `perlengkapan/` | Handhika Hidayatullah | `handhika-hidayatullah.jpg` |
| PDD | `pdd/` | Mohammad Miftah Yusron Hana'i | `mohammad-miftah-yusron-hana-i.jpg` |

Pastikan semua anggota terlihat jelas di area tengah karena kartu memotong foto bersama ke rasio 4:5. Foto individu anggota ditampilkan sebagai avatar. Gunakan foto yang pantas dan memiliki izin untuk digunakan, serta optimalkan ukuran file untuk web.

## Foto anggota

Simpan foto anggota di folder divisi yang sama dengan CO. Gunakan aturan nama file yang sama seperti di atas: nama lengkap yang dinormalisasi menjadi huruf kecil dengan tanda hubung, tanpa NIM. Semua nama berikut berasal dari roster di `ui/script.js`.

| Folder | Anggota |
|---|---|
| `modeling/` | Muhammad Firdhie Andalas; M. Rangga Satria Noorfando; Rakha Aribawa Rahman; Lutfi Ahmad Suriyana |
| `mat-model/` | Muhammad Iqbal Maulana; Khalidatul Aliyah Safitri; Muhamad Ferly Farnando |
| `software/` | Muhamad Supriyadi; Muhammad Aryaputra Manda; M. Nauval Al-Ghafary Wardoyo; Haudh Al Maa'uun |
| `electrical/` | Muhammad Farrel Caesar; Mokhamad Rayhan Faturahman; Dava Maulana Yudha; Iltizamul Haqqi; Mexcelino Perwira Dirganesia; Mochammad Ardiansyah Tri Wicaksono |
| `mekanikal/` | Mukhamad Nur Alfan; Mohammad Miftah Yusron Hana'i; Febrian Patria Yoni; Muhammad Fadil; Mohamad Rizky Fadilah; Mohammad Hisyam Rifai |
| `perlengkapan/` | Loudy Firza Aulia; Keihan Daafa Parsya; Girendra Hangestubrata; Jalalludin Satriya Nayaka |
| `pdd/` | Legison Satria Manik Allo; Maritza Aprilia Putri |

Sebagai contoh, foto `Muhammad Farrel Caesar` dapat disimpan sebagai `electrical/muhammad-farrel-caesar.jpg`. Jika nama yang sama muncul di dua divisi, gunakan salinan di folder masing-masing.

## Placeholder dan pengaktifan foto

`placeholder-card.svg` dipakai jika foto bersama divisi belum tersedia, sedangkan `placeholder-avatar.svg` dipakai untuk foto individu yang belum tersedia. Jangan menimpa atau menghapus placeholder tersebut. Foto tidak perlu diberi teks atau diubah menjadi avatar.

Situs statis tidak dapat memindai isi folder dengan sendirinya. Setelah menambahkan foto individu anggota atau ketua divisi, daftarkan ekstensi di objek `TEAM_PHOTO_FORMATS` pada `ui/script.js`. Kuncinya adalah `folder/nama-file-tanpa-ekstensi`, nilainya `jpg` atau `png`:

```js
const TEAM_PHOTO_FORMATS = {
  'pengurus/mochammad-ardiansyah-tri-wicaksono': 'jpg',
  'software/fattar-davino-aulia-rahman': 'jpg',
  'modeling/kristoforus-rizkiano-tembang-langit': 'png',
  'electrical/muhammad-nur-faizin': 'jpg',
  'electrical/muhammad-farrel-caesar': 'jpg',
  'electrical/mokhamad-rayhan-faturahman': 'jpg'
};
```

Helper gambar memilih foto individu berdasarkan divisi dan nama orang. Jika foto individu tidak tersedia, daftar menggunakan `placeholder-avatar.svg`; jika foto yang didaftarkan gagal dimuat, gambar kembali ke placeholder. Jika placeholder-nya pun hilang, CSS menampilkan siluet bawaan sehingga kartu tidak pernah kosong atau menampilkan ikon gambar rusak. Data Ketua Tim, sekretaris, dan bendahara dikelola di `TEAM_MANAGEMENT`. Data ketua divisi dan anggota dikelola di `TEAM_LEADERS` dalam `ui/script.js`; ketua divisi otomatis ditampilkan sebagai baris pertama pada daftar divisinya. Saat memperbarui data, pertahankan nama sumber roster, perbarui dokumentasi ini, dan jangan tampilkan NIM.

## Struktur folder lainnya

Folder lama `Modelling/` dan `PDD/` dipertahankan agar berkas yang sudah ada tidak hilang. Untuk foto baru, gunakan nama folder huruf kecil yang tercantum pada tabel.