# Dokumen Teknis Modul 1 — Lingkungan Pengembangan, Git, dan Lalu Lintas HTTP

**Nama/NIM** : Zakiati Latifa / 105224033   
**Repositori** : https://github.com/zakia04/105224033-Praktikum-Pemweb-Modul1.git

## 1. Lingkungan Pengembangan

Lingkungan pengembangan digunakan untuk membuat dan menjalankan aplikasi web menggunakan Next.js. Berdasarkan hasil verifikasi melalui terminal, perangkat yang terpasang adalah sebagai berikut.

| Komponen | Hasil Pengamatan |
|---|---|---|
| Sistem Operasi | Windows 11 Version 25H2  | 
| Node.js | `v26.10.0` | 
| npm | `11.19.1` | 
| Git | `2.55.0.windows.3` | 
| Visual Studio Code | `1.139.0` | 

### Bukti verifikasi versi

Perintah yang digunakan:

node -v
npm -v
git --version
```

Hasil yang diperoleh:

v26.10.0
11.19.1
git version 2.55.0.windows.3
```

![Hasil verifikasi Node.js, npm, dan Git](assets/01-versi-node-npm-git.png)


## 2. Alur Kerja Git

### 2.1 Status dan riwayat Git

Perintah yang digunakan dalam modul antara lain:

```bash
git status
git log --oneline
git log --oneline --graph
```

**Hasil pengamatan:**

PS C:\Users\User\OneDrive\Documents\KULIAH\semester 5\Prak PemWeb\PrakWeek1> git log --oneline --graph
* 19da6b5 (HEAD -> week1, origin/main, origin/HEAD) week 1
```

Riwayat commit digunakan untuk melihat perubahan yang telah dilakukan pada proyek. Setiap perubahan sebaiknya disimpan melalui commit dengan pesan yang menjelaskan perubahan tersebut.

### 2.2 Branch, merge, dan konflik

Pada praktikum, branch digunakan untuk mengembangkan perubahan tanpa langsung mengubah branch `main`. Merge digunakan untuk menggabungkan perubahan dari branch lain ke branch yang sedang digunakan.

**Branch yang digunakan:**

[week1]
```

**Konflik yang terjadi:**

Di awal pada branch main tidak ada falder docs/praktikum dan modul.md setelah kita buat branch baru yaitu "week 1" 
```

**Cara penyelesaian:**

Konflik diselesaikan dengan membuka berkas yang memiliki konflik, menentukan isi akhir yang akan dipertahankan, menghapus penanda konflik `<<<<<<<`, `=======`, dan `>>>>>>>`, kemudian menyimpan perubahan dan melakukan commit merge.

Contoh perintah penyelesaian:

```bash
git add .
git commit -m "merge: selesaikan konflik"
```

## 3. Pengamatan Lalu Lintas HTTP

Pengamatan lalu lintas HTTP dilakukan melalui **Chrome DevTools → Network** ketika aplikasi Next.js dijalankan pada `http://localhost:3000`.

Modul meminta pengamatan terhadap Request URL, Request Method, Status Code, Remote Address, serta header respons seperti `Content-Type` dan `Cache-Control`.

### 3.1 Hasil pengamatan Network

Berdasarkan tangkapan layar yang tersedia, permintaan utama menuju aplikasi lokal memperoleh:

| No | URL | Metode | Status | Tipe | Keterangan |
|---|---|---|---:|---|---|
| 1 | `http://localhost:3000/` | GET | 200 | document | Halaman utama berhasil dimuat |
| 2 | `http://localhost:3000/_next/...` | GET | 304 | stylesheet/script | Sumber daya tidak berubah dan dapat menggunakan cache |
| 3 | `http://localhost:3000/_next/...` | GET | 304 | script | Berkas JavaScript tidak berubah |
| 4 | `ws://localhost:3000/_next/hmr?...` | GET | 101 | websocket | Koneksi WebSocket untuk komunikasi HMR |

> Nama lengkap beberapa berkas `_next/...` tidak ditulis seluruhnya pada tabel karena URL pada tangkapan layar tampil terpotong. Data status dan tipe diambil dari Network panel.

### 3.2 Halaman utama localhost

Pada Network panel terlihat permintaan `localhost` dengan status **200** dan tipe **document**. Status 200 menunjukkan bahwa permintaan terhadap halaman berhasil.

![Network localhost](assets/02-network-localhost.png)

### 3.3 WebSocket dan status 101

Terdapat permintaan:

ws://localhost:3000/_next/hmr?id=...
```

dengan:

Request Method : GET
Status Code   : 101 Switching Protocols
```

Status `101 Switching Protocols` termasuk kelas 1xx. Pada pengamatan ini, status tersebut menunjukkan bahwa koneksi HTTP berhasil beralih ke protokol WebSocket. Koneksi ini berkaitan dengan **Hot Module Replacement (HMR)** pada lingkungan pengembangan Next.js.

### 3.4 Status 304 pada JavaScript/CSS

Pada Network panel juga terlihat beberapa sumber daya JavaScript dan stylesheet dengan status **304 Not Modified**.

Status 304 menunjukkan bahwa sumber daya tidak mengalami perubahan sejak versi yang sudah dimiliki browser, sehingga browser dapat menggunakan salinan cache yang telah divalidasi.

Contoh hasil pengamatan:

Status Code : 304 Not Modified
Type        : stylesheet / script
```

### 3.5 Ringkasan komponen HTTP yang diamati

| Komponen | Hasil |
|---|---|
| Request URL | `http://localhost:3000/` dan sumber daya `_next/...` |
| Request Method | GET |
| Status 200 | Halaman utama berhasil dimuat |
| Status 304 | Sumber daya tidak berubah dan cache dapat digunakan |
| Status 101 | Peralihan protokol ke WebSocket |
| WebSocket | Digunakan pada koneksi HMR lingkungan pengembangan |
| Tipe resource | document, stylesheet, script, websocket |

### 3.6 Analisis

Perbedaan status `200`, `304`, dan `101` menunjukkan bahwa tidak semua permintaan pada halaman memiliki fungsi yang sama. Permintaan dokumen utama memperoleh status `200` karena halaman berhasil diberikan oleh server. Sementara itu, beberapa aset JavaScript dan CSS memperoleh `304 Not Modified`, yang berkaitan dengan validasi cache. Permintaan HMR menggunakan WebSocket dan memperoleh `101 Switching Protocols` karena koneksi beralih dari HTTP ke WebSocket.

Pada praktikum lanjutan, hasil pemuatan dengan cache dan tanpa cache juga perlu dibandingkan. Bukti khusus untuk perbandingan tersebut belum tersedia pada data tangkapan layar yang diberikan.

### 3.7 Pengamatan menggunakan curl

Modul menggunakan perintah berikut:

```bash
curl -I http://localhost:3000
curl -I http://github.com
curl -v https://example.com
```

Pada Windows PowerShell, modul mengarahkan penggunaan `curl.exe`.

**Hasil pengamatan:**

```text
[curl -I http://localhost:3000]
/localhost:3000
HTTP/1.1 200 OK
Vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, Accept-Encoding
Link: </_next/static/media/797e433ab948586e-s.p.0r6juujl39pe6.woff2>; rel=preload; as="font"; crossorigin=""; type="font/woff2", </_next/static/media/caa3a2e1cccd8315-s.p.0wgildi0cnwt9.woff2>; rel=preload; as="font"; crossorigin=""; type="font/woff2"
Cache-Control: no-cache, must-revalidate
X-Powered-By: Next.js
Content-Type: text/html; charset=utf-8
Date: Mon, 28 Sep 2026 10:44:36 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[curl -I http://github.com]
/github.com
HTTP/1.1 301 Moved Permanently
Content-Length: 0
Location: https://github.com/

[curl -v https://example.com]
//example.com
* Host example.com:443 was resolved.
* IPv6: (none)
* IPv4: 172.66.147.243, 104.20.23.154
*   Trying 172.66.147.243:443...
* schannel: disabled automatic use of client certificate
* ALPN: curl offers http/1.1
* ALPN: server accepted http/1.1
* Established connection to example.com (172.66.147.243 port 443) from 192.168.0.59 port 56978 
* using HTTP/1.x
> GET / HTTP/1.1
> Host: example.com
> User-Agent: curl/8.21.0
> Accept: */*
> 
* Request completely sent off
* schannel: remote party requests renegotiation
* schannel: renegotiating SSL/TLS connection
* schannel: SSL/TLS connection renegotiated
< HTTP/1.1 200 OK
< Date: Mon, 28 Sep 2026 10:47:02 GMT
< Content-Type: text/html
< Transfer-Encoding: chunked
< Connection: keep-alive
< Server: cloudflare
< last-modified: Sat, 26 Sep 2026 09:09:07 GMT
< allow: GET, HEAD
< Accept-Ranges: bytes
< Age: 0
< cf-cache-status: HIT
< CF-RAY: a4222af1d8dace6f-SIN
```

`curl -I` menggunakan metode **HEAD**, sehingga output digunakan untuk melihat header respons tanpa mengambil body respons. Bukti output `curl` belum termasuk dalam tangkapan layar yang tersedia, sehingga bagian ini perlu dilengkapi dari terminal.

## 4. Kendala dan Penyelesaian

### 4.1 PowerShell memblokir npm

Saat menjalankan `npm`, PowerShell sempat menampilkan pesan:

```text
npm : File C:\Program Files
pm.ps1 cannot be loaded because running scripts is disabled on this system.
```

Masalah tersebut disebabkan oleh kebijakan eksekusi script PowerShell.

Penyelesaian yang digunakan dapat berupa:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Alternatifnya, dapat menggunakan Command Prompt atau Git Bash.

Setelah itu, verifikasi dilakukan kembali dengan:

```powershell
npm -v
```

dan diperoleh:

```text
11.19.1
```

Hal ini sesuai dengan troubleshooting pada modul yang menyebutkan bahwa masalah `running scripts is disabled on this system` dapat ditangani dengan `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`, Command Prompt, atau Git Bash.


## 5. Catatan Pemanfaatan AI

**Alat yang digunakan:** ChatGPT

**Bagian yang digunakan:**
- Membantu menyusun struktur Dokumen Teknis Modul 1 dalam format Markdown.
- Membantu merapikan hasil pengamatan dari tangkapan layar.
- Membantu menjelaskan makna status HTTP `200`, `304`, dan `101`.
- Membantu menyusun bagian kendala dan penyelesaian berdasarkan masalah PowerShell yang terjadi.

**Cara verifikasi:**
- Nilai `node -v`, `npm -v`, dan `git --version` diverifikasi berdasarkan keluaran terminal yang tersedia.
- Status HTTP dan jenis resource diverifikasi berdasarkan Chrome DevTools Network.
- Penjelasan struktur dokumen dicocokkan dengan kerangka Dokumen Teknis pada Modul 1.
- Data yang belum tersedia tidak dibuat-buat dan diberi tanda .
