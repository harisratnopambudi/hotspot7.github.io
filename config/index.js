const configData = {
	creator: {
		/* 
			jangan hapus dan edit data creator
		*/

		name: "Erik Sanjaya",
		whatsapp: "https://wa.me/6289517000409",
		website: "https://eriksanjaya.com",
		youtube: "https://www.youtube.com/channel/UC1jSKHbhMg3JDZ-vFcXHTjQ"

		/*
			dilarang membajak template.
		*/
	},

	/* jangan hapus dan edit data creator di atas ya. */

	/*
		Panduan lihat di sini:
		https://eriksanjaya.com/hotspot-7/guide.html

		Tema lihat di sini:
		https://eriksanjaya.com/hotspot-7/theme.html

	*/

	/* Template Hotspot 7 */

	/* jangan menghapus PETIK DUA dan KOMA */

	lisensi: "U2FsdGVkX1/noNltFgCVy4QdcTlqKPqsyJxvYpZuTNkx5W1rQm8Dl6ts4UrnuFN+", /* PETIK DUA JANGAN DIENTER KE BAWAH */

	/* 
		status: 1 ( artinya aktif )
		status: 0 ( tidak aktif )
	*/
	
	/* 
		kami hanya menyediakan
		ganti warna :
			background: "#453C67",
			bgOpacity: "rgba(0, 0, 0, 0.6)",
			dan
			form_input

		jangan tanya cara ganti warna selain itu, gak ada fiturnya.

		kode warna ambil di sini:
			https://colorhunt.co/
	*/

	/* STYLE */

	background: "#424874",
	bgOpacity: "rgba(0, 0, 0, 0.2)", /* cukup ubah bagian akhir, 0.1 sampai 0.9 */

	form_input: {
		/*
			contoh rgba
				background: rgba(255, 255, 255, 0.1)

			contoh hexa
				background: '#f6f7f8'
		*/
		background: 'rgba(255, 255, 255, 0.1)',
		color: '#f6f7f8' /* warna teks */
	},
	
	/* END STYLE */


	wifi_logo: {
		status: 0, /* 0 atau 1, ubah 1 untuk pakai logo sendiri */
		url: "./public/img/logo.png", /* copy logo kamu ke folder public/img */
		width: 	'24', /* 1-12, 14, 16, 20, 24, 26, 28, 32, full */
		height: '24', /* 1-12, 14, 16, 20, 24, 26, 28, 32, full */
		align: 'left', /* left, center */
	},

	wifi: {
		status: 1, /* 0 atau 1 */
		nama: "Ashraf Hotspot",
		slogan: "Internet Murah, Cepat, dan Unlimited.",
	},

	kontak: {
		deskripsi: `<strong>Ashraf Hotspot</strong> adalah usaha jasa Internet Service Provider di Perumahan Fortuna Campakasari Purwakarta.`,
		hp: "0877-8447-7751",
		email: "ashrafhotspot@gmail.net",
		alamat: "Perum Fortuna Campakasari Blok M4 Kel. Campakasari Kec. Campaka Kab. Purwakarta",
	},

	prayTimes: { /* sesuaikan waktu sholat */
		/*
			Dapatkan Latitude dan Longitude di sini.
			https://eriksanjaya.com/app/koordinat.html

			jika muncul pop up, klik Allow

			aktifkan GPS terlebih dahulu, jika via smartphone.
		*/
		
		latitude: -6.5187722,
		longitude: 107.4841496,
		gmt: 7, /* wib = 7, wita = 8, wit = 9 */
		hijriahNama: 1, /* 0 atau 1 */
		hijriahTambah: -1, /* menambah atau mengurangi tanggal hijriah, cth. -2 (mengurangi tgl hijriah sekarang dengan 2) */
		method: "Egypt", /* MWL, ISNA, MF, Egypt, Makkah, Karachi, Tehran, Jafari, JAKIM */
		adjust: { // menyesuaikan jadwal sholat (tambah / kurangi)
			subuh: -1,
			dzuhur: 1,
			ashar: 1,
			maghrib: 2,
			isya: 3,
		},
	},

	countdown_ramadhan: {
		text_days: 'Hari',
		text_hours: 'Jam',
		text_minutes: 'Menit',
		text_seconds: 'Detik',
		text_to_ramadhan: 'lagi menuju Ramadhan',
		text_ramadhan_month: 'Marhaban Ya Ramadhan',
	},

	fitur: { /* 0 atau 1 ( aktif dan non aktifkan fitur ) */
		header: 1, /* logo, nama wifi & slogan */
		tgl_masehi: 1,
		tgl_hijriah: 1,
		countdown_ramadhan: 1,
		jam: 1,
		jadwal_sholat: 1,
		trial: 1, /* login trial */
		login_qrcode: 1, /* login via qrcode */
		paket: 1, /* paket internet */
		produk: 0, /* produk slide di halaman login / home */
	},

	menu: {
		status: 1, /* 0 atau 1 */
		data: [
			{
				icon: './public/icon/home.svg',
				nama: 'Home',
				link: 'login',
				status: 1, /* 0 atau 1 */
			},
			{
				icon: './public/icon/info.svg',
				nama: 'Info',
				link: 'info',
				status: 1, /* 0 atau 1 */
			},
			{
				icon: './public/icon/produk.svg',
				nama: 'Produk',
				link: 'produk',
				status: 0, /* 0 atau 1 - non aktikan menu produk jadikan 0 */
			},
			{
				icon: './public/icon/card.svg',
				nama: 'Bayar',
				link: 'bayar',
				status: 1, /* 0 atau 1 */
			},
			{
				icon: './public/icon/user-circle.svg',
				nama: 'Kontak',
				link: 'kontak',
				status: 1, /* 0 atau 1 */
			}
		]
	},

	label: { /* ubah nama label */
		produk: "yuk order",
		produk_lihat: "lihat semua",
		kembali: "kembali",
		info: 'informasi',
		kontak: 'kontak',
		paket: 'paket',
		login_as: 'Login',
		login: 'Masuk',
		logout: 'Keluar',
		free_trial: 'Coba Gratis Disini',
		login_qrcode: 'Login Qrcode',
		pembayaran: 'Pembayaran',
	},

	slide: {
		delay: 5000, /* 5000 = 5 detik, satuan millisecond */
		control: 0, /* 0 atau 1 - jadikan 1 untuk menampilkan control slides*/
		data: [
			/*
				contoh jika pakai gambar sendiri.
				copy gambar kamu ke folder public/img/namafile.png

				penulisan file url jadi seperti ini:

				file: "./public/img/namafile.png",
			*/
			
			{
				file: "./public/img/slide4.png"
			},
			{
				file: "https://eriiksanjaya.github.io/public/img/musim-hujan-1.png"
			},
			{
				file: "./public/img/slide2.png"
			},
			{
				file: "./public/img/slide3.png"
			},
		]
	},

	/*
		default: 0 (artinya form login voucer yang muncul pertama kali)
		default: 1 (artinya form login member yang muncul pertama kali)

		option: 1 ( ada pilihan opsi login, voucher atau member )

		value: "default" (artinya teks mengikuti keyboard)
		value: "toUpperCase" (teks huruf besar semua)
		value: "toLowerCase" (teks huruf kecil semua)
	*/
	login: {
		default: 0, /* 0 = voucher atau 1 = member */
		option: 1, /* 0  atau 1 */
		voucher: {
			value: "toLowerCase", /* default / toUpperCase / toLowerCase */
		},
		member: {
			value: "toLowerCase", /* default / toUpperCase / toLowerCase */
		}
	},

	paket: {
		kolom: 2, /* 1, 2, 3, 4 */
		data: [ /* kode warna ambil di sini https://colorhunt.co */
			{
				waktu: "🎫12 Jam",
				harga: "Rp 2.000",
				warna: "#3b82f6",
			},
			{
				waktu: "🎫24 Jam",
				harga: "Rp 3.000",
				warna: "#facc15",
			},
			{
				waktu: "🎫2 Hari",
				harga: "Rp 5.000",
				warna: "#10b981",
			},
			{
				waktu: "🎫7 Hari",
				harga: "Rp 15.000",
				warna: "#ef4444",
			},
			{
				waktu: "✨🎫VIP 30 Hari✨", 
				harga: "Rp 50.000",
				warna: "#B9E0FF",
			},
		],
	},
	

	info: {
		data: [
			{
				foto: "./public/icon/user-circle.svg",
				nama: "Admin",
				waktu: "17 Desember 2022 00:49",
				konten: `Hallo, untuk cek masa aktif voucher bisa disini ya <a href="http://ashrafhotspot.net/status">http://ashrafhotspot.net/status</a>.`,
			},
			{
				foto: "./public/icon/user-circle.svg",
				nama: "Admin",
				waktu: "11 Desember 2022 11:27",
				konten: `Mohon maaf atas ketidaknyamanannya, jika ada petir server Wifi kami matikan ya.`,
			},
			{
				foto: "./public/icon/user-circle.svg",
				nama: "Admin",
				waktu: "11 Desember 2022 10:21",
				konten: 
				`Hallo, untuk pembelian voucher wifi tidak perlu datang kerumah ya. Cukup chat admin saja via WhatsApp dan kami menerima pembayaran via transfer e-wallet ataupun transfer bank.
				`,
			},
		],
	},

	
	produk: {
		pemesanan: { // ganti no wa di bawah
			status: 1, /* 0 atau 1 - untuk non aktifkan tombol order jadikan 0 */
			label: 'Order Lewat Sini',
			link: `https://wa.me/6287784477751?text=Halo%2C+mau+pesan+dong.`,
		},
		kolom: 2, /* 1, 2, 3*/
        slide: 6, /* idealnya 1 sampai 6 - di halaman home, paling bawah */
        data: [ /* nama file produk jangan dispasi, cth. mie-goreng.png */
			/*
				contoh jika pakai gambar sendiri.
				copy gambar kamu ke folder public/img/namafile.png

				penulisan image url jadi seperti ini:

				image: "./public/img/namafile.png",
			*/
			
			{
				image: "./public/img/voucher.png",
				nama: "Voucher 12 Jam",
				harga: "Rp2.000",
			},
			{
				image: "./public/img/voucher.png",
				nama: "Voucher 24 jam",
				harga: "Rp3.000",
			},
			{
				image: "./public/img/voucher.png",
				nama: "Voucher 2 Hari",
				harga: "Rp5.000",
			},
			{
				image: "./public/img/voucher.png",
				nama: "Voucher 7 Hari",
				harga: "Rp15.000",
			},
			{
				image: "./public/img/voucher.png",
				nama: "Voucher 30 Hari",
				harga: "Rp50.000",
			},
			{
				image: "./public/img/voucher.png",
				nama: "Voucher 30 Hari 3 Device",
				harga: "Rp65.000",
			},
        ]
    },

	scan: {
		kolom: 1, /* 1, 2, 3 */
		data: [
			/*
				contoh jika pakai gambar sendiri.
				copy gambar kamu ke folder public/img/namafile.png

				penulisan image url jadi seperti ini:

				image: "./public/img/namafile.png",
			*/

			{				
				image: "./public/img/qris.png",
				nama: "QRIS ASHRAFHOTSPOT.NET",
			},
		],
	},

	expired_user: {
		/*
			ingin menampilkan expired user Mikhmon di status.html ?
			ubah status jadi 1
		*/

		status: 1, /* 0 atau 1 */
		session_name: `AshrafHotspot`, /* Session Name dapat dilihat di Session Settings (Settings->Session Settings). */
		url: `http://ashrafhotspot.mra.my.id/status/status.php?name=`, /* sesuaikan dengan ip mikhmon kamu */

		/*
			cukup 3 di atas yang diubah, seharusnya sudah muncul expired usernya.
			kalau gak muncul, jangan tanya saya.
			saya hanya nyediain FITUR.

			baca di sini :
			https://laksa19.github.io/?mikhmon/v3/tutorial

			Menampilkan Expired User di Laman Status Hotspot (status.html).
			- Server Mikhmon harus dalam keadaan aktif.
			- Perhatikan protocol yang digunakan https / http.
			- Untuk server local yang menggunakan PC atau Android biasanya menggunakan protocol http.
		*/

		background: 1,
		/* 
			kenapa background di isi 1,
			karena teks expired bawaan Mikhmon nya hitam,
			
			kalau gak mau pake background jadiin 0 aja,

			edit file status/status.php di Mikhmon kamu,

			tambahkan style color: #e2e8f0;

			jangan tanya saya, file status.php nya di mana?
			saya gak tahu, bukan saya yang pasang.

			cukup tambahkan style color: #e2e8f0;
			
			contoh:

			body {
				font-family: "Helvetica", arial, sans-serif;
				font-size: 15px;
				margin:0px;
				color: #e2e8f0;
			}
		
		*/
	
	},
	
}
