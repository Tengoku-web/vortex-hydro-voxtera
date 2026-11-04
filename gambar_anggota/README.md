# Panduan foto kartu struktur tim Vortex Hydro

Bagian Struktur Tim menggunakan satu dek horizontal dengan delapan kartu: kartu pertama adalah Ketua Tim, diikuti tujuh ketua divisi (CO). Geser dek dengan drag mouse di desktop atau swipe di layar sentuh. Tekan kartu Ketua Tim untuk melihat foto, sekretaris, dan bendahara. Tekan kartu CO untuk melihat deskripsi singkat draf, foto ketua, serta foto dan nama anggota divisi. Kartu hanya menampilkan gambar; teks alternatif dan label tombol tetap mendukung pembaca layar.

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

## Folder dan nama foto CO

Simpan satu foto CO di folder divisinya. Gunakan format `.jpg` atau `.png` dan nama file huruf kecil tanpa NIM; ubah spasi, titik, apostrof, dan tanda baca menjadi tanda hubung.

| Divisi | Folder | Nama CO | Contoh nama file |
|---|---|---|---|
| Modeling | `modeling/` | Kristoforus Rizkiano Tembang Langit | `kristoforus-rizkiano-tembang-langit.jpg` |
| Mat Model | `mat-model/` | Muhammad Alfian Firmansyah | `muhammad-alfian-firmansyah.jpg` |
| Software | `software/` | Fattar Davino Aulia Rahman | `fattar-davino-aulia-rahman.jpg` |
| Electrical | `electrical/` | Muhammad Nur Faizin | `muhammad-nur-faizin.jpg` |
| Mekanikal | `mekanikal/` | M. Salman Alfarizi Ramadani | `m-salman-alfarizi-ramadani.jpg` |
| Perlengkapan | `perlengkapan/` | Handhika Hidayatullah | `handhika-hidayatullah.jpg` |
| PDD | `pdd/` | Mohammad Miftah Yusron Hana'i | `mohammad-miftah-yusron-hana-i.jpg` |

Utamakan gambar potret dengan wajah berada di tengah; kartu menggunakan rasio 4:5 dan memotong gambar agar memenuhi kartu. Gunakan foto yang pantas dan memiliki izin untuk digunakan. Optimalkan ukuran file untuk web.

## Foto anggota

Simpan foto anggota di folder divisi yang sama dengan CO. Gunakan aturan nama file yang sama seperti di atas: nama lengkap yang dinormalisasi menjadi huruf kecil dengan tanda hubung, tanpa NIM. Semua nama berikut berasal dari roster di `script.js`.

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

`placeholder-card.svg` dipakai untuk foto CO, sedangkan `placeholder-avatar.svg` dipakai untuk foto anggota yang belum tersedia. Jangan menimpa atau menghapus placeholder tersebut. Foto tidak perlu diberi teks atau diubah menjadi avatar.

Situs statis tidak dapat memindai isi folder dengan sendirinya. Setelah menambahkan foto CO atau anggota, agent perlu mendaftarkan nama ekstensi di objek `TEAM_PHOTO_FORMATS` pada `script.js`. Kuncinya adalah `folder/nama-file-tanpa-ekstensi`, nilainya `jpg` atau `png`:

```js
const TEAM_PHOTO_FORMATS = {
  'pengurus/mochammad-ardiansyah-tri-wicaksono': 'jpg',
  'software/fattar-davino-aulia-rahman': 'jpg',
  'modeling/kristoforus-rizkiano-tembang-langit': 'png',
  'electrical/muhammad-farrel-caesar': 'jpg'
};
```

Helper gambar akan memilih foto berdasarkan divisi dan nama orang. Jika foto tidak tersedia, anggota menggunakan `placeholder-avatar.svg`; jika foto yang didaftarkan gagal dimuat, gambar kembali ke placeholder yang sesuai. Data Ketua Tim, sekretaris, dan bendahara dikelola di `TEAM_MANAGEMENT`; Ketua Tim adalah satu-satunya pengurus yang menjadi kartu di dek utama, sedangkan pengurus lainnya ditampilkan sebagai anggota pada detailnya. Deskripsi singkat divisi dan daftar anggota dikelola di `TEAM_LEADERS` dalam `script.js`. Saat memperbarui data, pertahankan nama sumber roster, perbarui dokumentasi ini, dan jangan tampilkan NIM.

## Struktur folder lainnya

Folder lama `Modelling/` dan `PDD/` dipertahankan agar berkas yang sudah ada tidak hilang. Untuk foto baru, gunakan nama folder huruf kecil yang tercantum pada tabel.
