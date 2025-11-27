// src/data/products.js

// Import gambar T8D
import img1 from "../assets/t8d/product-1.png";
import img2 from "../assets/t8d/product-2.png";
import img3 from "../assets/t8d/product-3.png";

// Import gambar T3B (hero)
import t3bImg1 from "../assets/t3b/product-1.png";
import t3bImg2 from "../assets/t3b/product-2.png";
import t3bImg3 from "../assets/t3b/product-3.png";

import t1m_1 from "../assets/t1m/product-1.png";
import t1m_2 from "../assets/t1m/product-2.png";
import t1m_3 from "../assets/t1m/product-3.png";

import m4_1 from "../assets/m4/product-1.png";
import m4_2 from "../assets/m4/product-2.png";
import m4_3 from "../assets/m4/product-3.png";


// Import gambar produk lain (untuk related strip)
import prodM4 from "../assets/allprod/prod-m4.png";
import prodT3B from "../assets/allprod/prod-t3b.png";
import prodT1M from "../assets/allprod/prod-t1m.png";
import prodT8D from "../assets/allprod/prod-t8d.png";

export const PRODUCTS = {
  t8d: {
    slug: "t8d",
    label: "NEW",
    name: "CLICK CLICK T8D Selfie Screen Mirror Monitor Magnetic Magsafe Wireless and HD Quality for iPhone",
    price: "Rp 1.850.000",
    priceNumber: 1850000,
    priceMonthly: "atau Rp 000.000/bln untuk 12 bln*",
    subtitle: "Subjudul pendek yang menjelaskan manfaat utama produk.",

    heroImages: [img1, img2, img3],

    breadcrumbs: ["Home", "Displays", "CLICK CLICK T8D"],

    summary: `
      Model T8D adalah layar portabel mini berukuran 2.1 inci dengan panel IPS yang menghasilkan tampilan jernih dan detail.
      Didukung resolusi 480 × 480 piksel serta konektivitas WiFi 2.4G/5G, produk ini menjadi solusi praktis untuk kebutuhan monitoring,
      perekaman, hingga live streaming. Desain ringkas dengan pilihan warna menarik membuatnya cocok digunakan kapan saja dan di mana saja.
    `,

    features: [
      {
        title: "DESAIN MINI. BEBAS MEMBAWA KE MANA SAJA.",
        text: "Dirancang dengan bentuk kompak hanya 80 × 75 × 15 mm dan berat sekitar 100 g, membuatnya mudah dibawa dan digunakan di mana pun Anda butuh tampilan ekstra.",
      },
      {
        title: "LAYAR IPS TAJAM. WARNA LEBIH HIDUP.",
        text: "Layar 2.1 inci dengan resolusi 480 × 480 piksel menghadirkan detail jernih dengan gamut warna 70% NTSC dan kecerahan 300 cd/m².",
      },
      {
        title: "REFRESH RATE 60 HZ. GERAK LEBIH MULUS.",
        text: "Memberikan pengalaman visual yang halus dan responsif untuk pemantauan, notifikasi, atau tampilan widget favorit Anda.",
      },
      {
        title: "WI-FI 2.4G & 5G. TERHUBUNG LEBIH CEPAT.",
        text: "Dual-band Wi-Fi memastikan koneksi stabil dan cepat untuk berbagai kebutuhan tampilan.",
      },
      {
        title: "KONTROL LENGKAP DALAM SATU SENTUHAN.",
        text: "Tombol bawaan memungkinkan Anda mengatur proporsi layar, membalik tampilan, mengambil foto, hingga menyesuaikan tingkat kecerahan.",
      },
      {
        title: "BATERAI 1200 mAh. SIAP TEMANI AKTIVITAS.",
        text: "Memberikan waktu penggunaan hingga ±4 jam untuk presentasi, dekorasi meja, atau konten kreator.",
      },
      {
        title: "KOMPATIBILITAS LUAS. LEBIH FLEKSIBEL.",
        text: "Mendukung iOS 9+, Android 2.0+, HarmonyOS 3.0+, dan MagicOS 4.0+ tanpa konfigurasi rumit.",
      },
      {
        title: "GAYA MENARIK. WARNA MODERN.",
        text: "Hadir dengan warna Biru pilihan yang modern dan stylish.",
      },
    ],

    specs: [
      { label: "Layar", value: "2.1 inci (IPS), 60 Hz" },
      { label: "Resolusi", value: "480 × 480 piksel" },
      { label: "Kecerahan", value: "300 cd/m²" },
      { label: "Rasio Kontras", value: "300 cd/m²" },
      { label: "Rasio Aspek", value: "16:9" },
      { label: "Speaker", value: "Ya" },
      { label: "Gamut Warna", value: "16.7K (70% NTSC)" },
      { label: "Antarmuka", value: "1x Type-C (Power Supply 5V 1A)" },
    ],

    inTheBox: [
      "Clickclick T8D",
      "Kabel USB-C",
      "Buku manual dan dokumentasi",
      "Ring Magnet",
      "Remote Control",
    ],

    warranty: "Garansi Pabrik – 1 Bulan",
    
    relatedProducts: [
      { id: 1, name: "CLICK CLICK M4", image: prodM4, price: "Mulai dari Rp 1.990.000", slug: "m4" },
      { id: 2, name: "CLICK CLICK T3B", image: prodT3B, price: "Mulai dari Rp 1.650.000", slug: "t3b" },
      { id: 3, name: "CLICK CLICK T1M", image: prodT1M, price: "Mulai dari Rp 1.690.000", slug: "t1m" },
      { id: 4, name: "CLICK CLICK T8D", image: prodT8D, price: "Mulai dari Rp 1.850.000", slug: "t8d" },
    ],
  },

  t3b: {
    slug: "t3b",
    label: "NEW",
    name: "CLICK CLICK T3B Compact Display Monitor Wireless for Smartphone",
    shortName: "CLICK CLICK T3B Display",
    price: "Rp 1.650.000",
    priceNumber: 1650000,
    subtitle: "Layar mini praktis untuk monitoring konten dan tampilan tambahan di meja kerja atau setup kontenmu.",

    // hero images untuk halaman produk
    heroImages: [t3bImg1, t3bImg2, t3bImg3],

    // breadcrumb di header
    breadcrumbs: ["Home", "Displays", "CLICK CLICK T3B"],

    // ringkasan pendek
    summary: `
      CLICK CLICK T3B adalah layar portabel berukuran ringkas yang dirancang untuk membantu monitoring,
      preview konten, dan tampilan widget tambahan. Dengan koneksi yang praktis dan desain minimalis,
      T3B cocok untuk kreator konten, pekerja remote, maupun pengguna rumahan yang butuh tampilan ekstra.
    `,

    // fitur – silakan ganti wordingnya nanti
    features: [
      {
        title: "DESAIN RINGKAS UNTUK MEJA KERJA MODERN.",
        text: "Ukuran layar yang kompak membuat T3B mudah ditempatkan di samping monitor utama, di atas docking, atau di area kerja tanpa memakan banyak ruang.",
      },
      {
        title: "LAYAR JERNIH UNTUK PREVIEW KONTEN.",
        text: "Resolusi tajam dengan panel yang nyaman di mata, ideal untuk menampilkan preview video, live chat, dashboard, atau notifikasi penting.",
      },
      {
        title: "KONEKTIVITAS PRAKTIS.",
        text: "Mendukung koneksi sederhana sehingga kamu bisa fokus pada konten tanpa ribet pengaturan teknis yang panjang.",
      },
      {
        title: "COCOK UNTUK KREATOR & PEKERJA DIGITAL.",
        text: "Membantu kamu memantau komentar, live chat, timeline, atau panel editing tanpa perlu berpindah jendela terus-menerus.",
      },
      {
        title: "KONTROL DASAR LANGSUNG DI PERANGKAT.",
        text: "Tombol fisik memudahkan kamu mengatur kecerahan, tampilan, atau fungsi dasar tanpa harus membuka pengaturan tambahan.",
      },
      {
        title: "TAMPILAN ESTETIK DI MEJA KERJA.",
        text: "Desain minimalis dengan sentuhan modern membuat T3B terlihat rapi dan menyatu dengan setup meja kerja kekinian.",
      },
    ],

    // spesifikasi – silakan sesuaikan angka sesuai spek aslinya
    specs: [
      { label: "Layar", value: "2.1 inci (IPS), 60 Hz" },
      { label: "Resolusi", value: "480 × 480 piksel" },
      { label: "Kecerahan", value: "300 cd/m²" },
      { label: "Rasio Kontras", value: "1000:1 (typical)" },
      { label: "Rasio Aspek", value: "1:1" },
      { label: "Speaker", value: "Tidak / External audio" },
      { label: "Gamut Warna", value: "70% NTSC (approx.)" },
      { label: "Antarmuka", value: "1x Type-C (Video & Power)" },
    ],

    inTheBox: [
      "CLICK CLICK T3B",
      "Kabel USB-C",
      "Buku manual",
      "Stand / penyangga",
    ],

    warranty: "Garansi Resmi – 1 Bulan",

    // strip “Mungkin kamu juga suka” untuk halaman T3B
    relatedProducts: [
      { id: 1, name: "CLICK CLICK M4", image: prodM4, price: "Mulai dari Rp 1.990.000", slug: "m4" },
      { id: 2, name: "CLICK CLICK T1M", image: prodT1M, price: "Mulai dari Rp 1.690.000", slug: "t1m" },
      { id: 3, name: "CLICK CLICK T8D", image: prodT8D, price: "Mulai dari Rp 1.850.000", slug: "t8d" },
      { id: 4, name: "CLICK CLICK T3B", image: prodT3B, price: "Mulai dari Rp 1.650.000", slug: "t3b" },
    ],
  },

  t1m: {
    slug: "t1m",
    label: "NEW",
    name: "CLICK CLICK T1M Mini Frame Display Modern Desk Digital Frame HD Wireless iOS/Android",
    price: "Rp 1.690.000",
    priceNumber: 1690000,
    priceMonthly: "atau Rp 000.000/bln untuk 12 bln*",
    subtitle: "Display mini bergaya modern untuk tampilan foto, widget, dan notifikasi.",
  
    // Pakai gambar placeholder dulu (silakan ganti kalau sudah ada)
    heroImages: [t1m_1, t1m_2, t1m_3], 
  
    breadcrumbs: ["Home", "Displays", "CLICK CLICK T1M"],
  
    summary: `
      T1M adalah mini frame display modern berukuran ringkas dengan panel IPS yang jernih.
      Desain tipis dan elegan membuatnya cocok sebagai pajangan meja kerja, kamar, hingga setup konten.
      Mendukung konektivitas nirkabel untuk menampilkan foto, jam, notifikasi, dan widget favorit secara real time.
    `,
  
    features: [
      {
        title: "DESAIN ELEGAN UNTUK MEJA MODERN.",
        text: "Tampilan frame minimalis dengan bezel tipis yang cocok untuk ruang kerja dan dekorasi kamar.",
      },
      {
        title: "LAYAR IPS JERNIH.",
        text: "Memberikan visual yang tajam dan nyaman dengan warna natural berkat teknologi IPS.",
      },
      {
        title: "WI-FI TERINTEGRASI.",
        text: "Terkoneksi dengan WiFi untuk update foto otomatis, notifikasi, atau tampilan widget harian.",
      },
      {
        title: "STAND KOKOH.",
        text: "Dilengkapi dudukan stabil agar mudah diposisikan di meja atau rak.",
      },
      {
        title: "KONSUMSI DAYA RENDAH.",
        text: "Hemat daya dan aman digunakan dalam waktu lama.",
      },
      {
        title: "KOMPATIBILITAS LUAS.",
        text: "Mendukung iOS, Android, Windows, dan Mac dengan aplikasi pendamping.",
      },
    ],
  
    specs: [
      { label: "Layar", value: "IPS HD Display" },
      { label: "Resolusi", value: "480 × 480 piksel" },
      { label: "Koneksi", value: "Wi-Fi 2.4GHz" },
      { label: "Power", value: "USB-C 5V" },
      { label: "Berat", value: "±100g" },
      { label: "Bahan", value: "ABS + Acrylic" },
      { label: "Kompatibilitas", value: "iOS / Android / Windows / Mac" },
      { label: "Mode Tampilan", value: "Foto, Jam, Widget, Notifikasi" },
    ],
  
    inTheBox: [
      "Unit T1M",
      "Kabel USB-C",
      "Buku manual",
      "Stand Frame",
    ],
  
    warranty: "Garansi Pabrik – 1 Bulan",
  
    relatedProducts: [
      { id: 1, name: "CLICK CLICK M4", image: prodM4, price: "Mulai dari Rp 1.990.000", slug: "m4" },
      { id: 2, name: "CLICK CLICK T3B", image: prodT3B, price: "Mulai dari Rp 1.650.000", slug: "t3b" },
      { id: 3, name: "CLICK CLICK T1M", image: prodT1M, price: "Mulai dari Rp 1.690.000", slug: "t1m" },
      { id: 4, name: "CLICK CLICK T8D", image: prodT8D, price: "Mulai dari Rp 1.850.000", slug: "t8d" },
    ],
  },

  m4: {
    slug: "m4",
    label: "NEW",
    name: "CLICK CLICK M4 Smart Display Mini Monitor Wireless High-Definition Desk Companion",
    price: "Rp 1.990.000",
    priceNumber: 1990000,
    priceMonthly: "atau Rp 000.000/bln untuk 12 bln*",
  
    subtitle: "Smart mini display serbaguna untuk tampilan foto, widget, dan konten kreatif.",
  
    // sementara pakai prodM4 (satu gambar) sampai kamu punya banyak angle
    heroImages: [m4_1, m4_2, m4_3],
  
    breadcrumbs: ["Home", "Displays", "CLICK CLICK M4"],
  
    summary: `
      M4 adalah smart mini display beresolusi tinggi yang dirancang untuk menambah estetika dan fungsi
      pada meja kerja modern. Mendukung koneksi wireless, sehingga pengguna dapat menampilkan foto,
      notifikasi, jam, atau widget dengan mudah. Desainnya ringkas dan premium sehingga cocok untuk
      kreator, pekerja, ataupun pengguna harian yang ingin tampilan meja lebih hidup.
    `,
  
    features: [
      {
        title: "RESOLUSI TINGGI UNTUK VISUAL TAJAM.",
        text: "Panel HD memberikan tampilan foto dan video yang jernih dengan warna yang lebih akurat.",
      },
      {
        title: "KONEKSI WIRELESS STABIL.",
        text: "Mendukung Wi-Fi untuk menampilkan konten secara real time dari perangkat mobile.",
      },
      {
        title: "FRAME PREMIUM.",
        text: "Didesain dengan material berkualitas, memberikan kesan modern dan solid ketika ditaruh di meja.",
      },
      {
        title: "DUKUNGAN MULTI-WIDGET.",
        text: "Menampilkan jam, cuaca, notifikasi, animasi, countdown, dan banyak widget lainnya.",
      },
      {
        title: "HEMAT DAYA.",
        text: "Bisa menyala berjam-jam dengan konsumsi daya sangat rendah via USB-C.",
      },
      {
        title: "KOMPATIBILITAS LUAS.",
        text: "Terhubung dengan iOS, Android, Windows, dan Mac tanpa konfigurasi rumit.",
      },
    ],
  
    specs: [
      { label: "Layar", value: "IPS HD Display" },
      { label: "Resolusi", value: "720 × 720 piksel" },
      { label: "Koneksi", value: "Wi-Fi 2.4GHz" },
      { label: "Power", value: "USB-C 5V / 1A" },
      { label: "Berat", value: "±120g" },
      { label: "Material", value: "Aluminium + Acrylic" },
      { label: "Mode Tampilan", value: "Foto, Video, Widget, Notifikasi" },
      { label: "Kompatibilitas", value: "iOS / Android / Windows / Mac" },
    ],
  
    inTheBox: [
      "Unit M4",
      "Kabel USB-C",
      "Buku manual",
      "Stand Display",
    ],
  
    warranty: "Garansi Pabrik – 1 Bulan",
  
    relatedProducts: [
      { id: 1, name: "CLICK CLICK M4", image: prodM4, price: "Mulai dari Rp 1.990.000", slug: "m4" },
      { id: 2, name: "CLICK CLICK T3B", image: prodT3B, price: "Mulai dari Rp 1.650.000", slug: "t3b" },
      { id: 3, name: "CLICK CLICK T1M", image: prodT1M, price: "Mulai dari Rp 1.690.000", slug: "t1m" },
      { id: 4, name: "CLICK CLICK T8D", image: prodT8D, price: "Mulai dari Rp 1.850.000", slug: "t8d" },
    ],
  },
  
  

};
