export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
  desc: string;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  source: string;
  sourceUrl: string;
  author: string;
  date: string;
  gradient: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
  breaking?: boolean;
}

export const categories: Category[] = [
  { id: 'terkini', name: 'Terkini', slug: 'terkini', color: '#dc2626', desc: 'Berita terbaru dan terhangat' },
  { id: 'politik', name: 'Politik', slug: 'politik', color: '#1d4ed8', desc: 'Berita politik nasional' },
  { id: 'ekonomi', name: 'Ekonomi', slug: 'ekonomi', color: '#059669', desc: 'Berita ekonomi dan bisnis' },
  { id: 'teknologi', name: 'Teknologi', slug: 'teknologi', color: '#7c3aed', desc: 'Inovasi dan teknologi' },
  { id: 'olahraga', name: 'Olahraga', slug: 'olahraga', color: '#d97706', desc: 'Berita olahraga' },
  { id: 'hiburan', name: 'Hiburan', slug: 'hiburan', color: '#db2777', desc: 'Dunia hiburan dan selebriti' },
  { id: 'dunia', name: 'Dunia', slug: 'dunia', color: '#0891b2', desc: 'Berita internasional' },
  { id: 'gayahidup', name: 'Gaya Hidup', slug: 'gaya-hidup', color: '#65a30d', desc: 'Tren gaya hidup' },
  { id: 'kesehatan', name: 'Kesehatan', slug: 'kesehatan', color: '#0d9488', desc: 'Info kesehatan' },
  { id: 'otomotif', name: 'Otomotif', slug: 'otomotif', color: '#ea580c', desc: 'Berita otomotif' },
];

const H = 3600000;
const M = 60000;
const N = Date.now();

export const articles: Article[] = [
  {
    id: 1, slug: 'presiden-prabowo-komitmen-pembangunan-indonesia-timur',
    title: 'Presiden Prabowo Tegaskan Komitmen Pemerataan Pembangunan di Indonesia Timur',
    excerpt: 'Dalam kunjungan kerja ke Papua, Presiden Prabowo menegaskan program prioritas pemerintah untuk mempercepat pembangunan infrastruktur.',
    body: [
      'Presiden Prabowo Subianto menegaskan komitmen pemerintah untuk mempercepat pemerataan pembangunan di wilayah Indonesia Timur.',
      'Dalam sambutannya di hadapan para kepala daerah se-Papua, Presiden Prabowo menyatakan bahwa pembangunan infrastruktur di wilayah timur menjadi salah satu program prioritas utama.',
      'Pemerintah mengalokasikan anggaran sebesar Rp 150 triliun untuk program percepatan pembangunan di Papua dan wilayah timur lainnya.',
      'Selain infrastruktur fisik, pemerintah juga berkomitmen meningkatkan kualitas sumber daya manusia melalui program beasiswa.',
    ],
    category: 'politik', source: 'Antara News', sourceUrl: 'https://www.antaranews.com',
    author: 'Fadhil Rahman', date: new Date(N - 2 * H).toISOString(),
    gradient: 'gradient-1', readTime: 4, tags: ['presiden', 'papua', 'pembangunan'],
    featured: true, breaking: true,
  },
  {
    id: 2, slug: 'bank-indonesia-pertahankan-suku-bunga',
    title: 'Bank Indonesia Pertahankan Suku Bunga Acuan di Level 5,75 Persen',
    excerpt: 'Rapat Dewan Gubernur BI memutuskan untuk mempertahankan suku bunga acuan demi menjaga stabilitas rupiah.',
    body: [
      'Bank Indonesia memutuskan untuk mempertahankan suku bunga acuan BI-7 Day Reverse Repo Rate di level 5,75 persen.',
      'Gubernur BI Perry Warjiyo menjelaskan keputusan ini sejalan dengan upaya menjaga stabilitas nilai tukar rupiah.',
      'BI mencatat perekonomian domestik tetap tumbuh positif ditopang oleh konsumsi rumah tangga dan investasi.',
      'Inflasi terkendali pada level 2,3 persen year-on-year, masih berada dalam koridor sasaran bank sentral.',
    ],
    category: 'ekonomi', source: 'CNBC Indonesia', sourceUrl: 'https://www.cnbcindonesia.com',
    author: 'Sari Wulandari', date: new Date(N - 3 * H).toISOString(),
    gradient: 'gradient-2', readTime: 5, tags: ['bank indonesia', 'suku bunga', 'rupiah'],
    featured: true,
  },
  {
    id: 3, slug: 'timnas-indonesia-u23-lolos-perempat-final',
    title: 'Timnas Indonesia U-23 Lolos ke Perempat Final Piala Asia',
    excerpt: 'Garuda Muda memastikan langkah ke babak perempat final setelah menang dramatis lewat adu penalti.',
    body: [
      'Timnas Indonesia U-23 berhasil melangkah ke babak perempat final Piala Asia U-23 setelah memenangkan laga dramatis.',
      'Gol Indonesia dicetak oleh Hokky Caraka pada menit ke-67 melalui sundulan keras dari tendangan sudut.',
      'Kiper Ernando Ari tampil gemilang dengan menggagalkan dua tendangan penalti lawan.',
      'Pelatih Shin Tae-yong mengapresiasi perjuangan seluruh pemain dan menegaskan timnya siap menghadapi lawan berikutnya.',
    ],
    category: 'olahraga', source: 'Tribunnews', sourceUrl: 'https://www.tribunnews.com',
    author: 'Rendra Mahardika', date: new Date(N - 1 * H).toISOString(),
    gradient: 'gradient-3', readTime: 3, tags: ['timnas', 'sepak bola', 'piala asia'],
    featured: true, breaking: true,
  },
  {
    id: 4, slug: 'startup-agritech-raih-pendanaan-seri-b',
    title: 'Startup Agritech Indonesia Raih Pendanaan Seri B Senilai Rp 500 Miliar',
    excerpt: 'Platform agritech asal Bandung mendapat suntikan dana segar dari konsorsium investor regional.',
    body: [
      'Sebuah startup agritech asal Bandung berhasil mengantongi pendanaan Seri B senilai Rp 500 miliar.',
      'Pendanaan ini akan digunakan untuk memperluas operasi ke Vietnam, Thailand, dan Filipina.',
      'Teknologi mereka telah membantu lebih dari 500.000 petani meningkatkan hasil panen hingga 40 persen.',
      'Indonesia menjadi salah satu pasar agritech terbesar di Asia Tenggara.',
    ],
    category: 'teknologi', source: 'CNBC Indonesia', sourceUrl: 'https://www.cnbcindonesia.com',
    author: 'Dimas Prasetyo', date: new Date(N - 4 * H).toISOString(),
    gradient: 'gradient-4', readTime: 4, tags: ['startup', 'agritech', 'pendanaan'],
  },
  {
    id: 5, slug: 'film-indonesia-festival-cannes-2025',
    title: 'Film Karya Sineas Muda Indonesia Masuk Seleksi Resmi Festival Cannes 2025',
    excerpt: 'Sebuah karya film independen dari sutradara berusia 28 tahun asal Yogyakarta berhasil menembus seleksi bergengsi.',
    body: [
      'Film independen karya sutradara muda Indonesia berhasil masuk dalam seleksi resmi Festival Film Cannes 2025.',
      'Film ini mengangkat tema tentang seorang wanita Jawa yang kembali ke kampung halamannya.',
      'Film ini diproduksi dengan anggaran minim menggunakan aktor-aktor lokal non-profesional.',
      'Indonesia semakin menunjukkan eksistensinya di kancah perfilman internasional.',
    ],
    category: 'hiburan', source: 'Republika', sourceUrl: 'https://www.republika.co.id',
    author: 'Anisa Rahma', date: new Date(N - 5 * H).toISOString(),
    gradient: 'gradient-5', readTime: 3, tags: ['film', 'cannes', 'sineas'],
  },
  {
    id: 6, slug: 'pbb-serukan-gencatan-senjata-timur-tengah',
    title: 'PBB Serukan Gencatan Senjata Segera di Zona Konflik Timur Tengah',
    excerpt: 'Sekretaris Jenderal PBB mendesak semua pihak untuk menghentikan kekerasan dan membuka akses kemanusiaan.',
    body: [
      'Sekretaris Jenderal PBB mendesak gencatan senjata segera di zona konflik Timur Tengah.',
      'Situasi kemanusiaan di lapangan sangat memprihatinkan dengan ribuan warga sipil membutuhkan bantuan darurat.',
      'Dewan Keamanan PBB dijadwalkan menggelar sidang darurat untuk membahas resolusi gencatan senjata.',
      'Indonesia sebagai anggota tidak tetap DK PBB terus mendorong upaya diplomatik untuk perdamaian.',
    ],
    category: 'dunia', source: 'BBC Indonesia', sourceUrl: 'https://www.bbc.com/indonesia',
    author: 'Ahmad Fauzi', date: new Date(N - 6 * H).toISOString(),
    gradient: 'gradient-6', readTime: 4, tags: ['pbb', 'timur tengah', 'konflik'],
  },
  {
    id: 7, slug: 'kemenkes-vaksinasi-fase-tiga',
    title: 'Kemenkes Luncurkan Program Vaksinasi Nasional Fase Tiga untuk 50 Juta Warga',
    excerpt: 'Program vaksinasi terbaru menargetkan 50 juta warga di daerah terpencil dengan vaksin generasi baru.',
    body: [
      'Kementerian Kesehatan resmi meluncurkan Program Vaksinasi Nasional Fase Tiga.',
      'Program ini menggunakan vaksin generasi terbaru dengan efektivitas lebih tinggi.',
      'Vaksinasi dilakukan melalui 10.000 pos kesehatan yang tersebar di 34 provinsi.',
      'Pemerintah juga menggandeng organisasi masyarakat dan relawan untuk distribusi.',
    ],
    category: 'kesehatan', source: 'Antara News', sourceUrl: 'https://www.antaranews.com',
    author: 'Dr. Putri Amelia', date: new Date(N - 7 * H).toISOString(),
    gradient: 'gradient-7', readTime: 4, tags: ['vaksinasi', 'kemenkes', 'kesehatan'],
  },
  {
    id: 8, slug: 'mobil-listrik-indonesia-siap-ekspor-asean',
    title: 'Mobil Listrik Buatan Indonesia Siap Ekspor ke Pasar ASEAN',
    excerpt: 'Produsen otomotif nasional mengumumkan kesiapan mengekspor mobil listrik pertama buatan Indonesia.',
    body: [
      'Indonesia siap memasuki pasar ekspor kendaraan listrik dengan mobil bernama Nusantara EV.',
      'Mobil ini dilengkapi teknologi fast charging yang memungkinkan pengisian cepat dalam 30 menit.',
      'Menteri Perindustrian menyampaikan apresiasi atas pencapaian industri otomotif nasional.',
      'Harga dibanderol mulai Rp 300 jutaan, menjadikannya salah satu mobil listrik termurah di ASEAN.',
    ],
    category: 'otomotif', source: 'SindoNews', sourceUrl: 'https://www.sindonews.com',
    author: 'Hendra Wijaya', date: new Date(N - 8 * H).toISOString(),
    gradient: 'gradient-8', readTime: 4, tags: ['mobil listrik', 'ekspor', 'otomotif'],
  },
  {
    id: 9, slug: 'tren-wisata-berkelanjutan-milenial',
    title: 'Tren Wisata Berkelanjutan Meningkat Tajam di Kalangan Milenial dan Gen Z',
    excerpt: 'Survei terbaru menunjukkan 78 persen wisatawan muda Indonesia memilih destinasi wisata berkelanjutan.',
    body: [
      'Tren wisata berkelanjutan mengalami peningkatan signifikan di kalangan generasi muda Indonesia.',
      'Wisatawan muda cenderung memilih akomodasi ramah lingkungan dan kegiatan konservasi.',
      'Destinasi seperti Labuan Bajo, Raja Ampat, dan Tana Toraja telah mengembangkan program wisata berkelanjutan.',
      'Pemerintah melalui Kemenparekraf mendorong pengembangan desa wisata berbasis komunitas.',
    ],
    category: 'gayahidup', source: 'VIVA', sourceUrl: 'https://www.viva.co.id',
    author: 'Nadia Sasmita', date: new Date(N - 9 * H).toISOString(),
    gradient: 'gradient-1', readTime: 4, tags: ['wisata', 'berkelanjutan', 'milenial'],
  },
  {
    id: 10, slug: 'dpr-sahkan-ruu-ketahanan-energi',
    title: 'DPR Sahkan RUU Ketahanan Energi Nasional dalam Rapat Paripurna',
    excerpt: 'Undang-undang baru ini mengatur transisi energi Indonesia dari fosil ke energi terbarukan.',
    body: [
      'DPR RI resmi mengesahkan RUU tentang Ketahanan Energi Nasional dalam rapat paripurna.',
      'UU baru ini menetapkan target bauran energi terbarukan sebesar 23 persen pada 2025.',
      'UU juga mengatur insentif fiskal bagi pengembang energi terbarukan.',
      'Ketua DPR menyatakan pengesahan ini merupakan langkah bersejarah bagi kedaulatan energi Indonesia.',
    ],
    category: 'politik', source: 'Okezone', sourceUrl: 'https://www.okezone.com',
    author: 'Bayu Pratama', date: new Date(N - 10 * H).toISOString(),
    gradient: 'gradient-2', readTime: 5, tags: ['DPR', 'energi', 'undang-undang'],
  },
  {
    id: 11, slug: 'rupiah-menguat-di-tengah-ketidakpastian',
    title: 'Rupiah Menguat Tipis di Tengah Ketidakpastian Pasar Global',
    excerpt: 'Nilai tukar rupiah terhadap dolar AS menguat 0,3 persen ditopang oleh data ekspor yang positif.',
    body: [
      'Nilai tukar rupiah terhadap dolar AS menguat tipis 0,3 persen ke level Rp 15.450 per dolar.',
      'BPS melaporkan ekspor Indonesia mencapai US$23,5 miliar, naik 8,7 persen year-on-year.',
      'Analis menilai penguatan rupiah didukung oleh kebijakan BI yang menjaga suku bunga.',
      'Pelaku pasar tetap memantau perkembangan kebijakan moneter The Fed.',
    ],
    category: 'ekonomi', source: 'CNBC Indonesia', sourceUrl: 'https://www.cnbcindonesia.com',
    author: 'Rizal Firmansyah', date: new Date(N - 11 * H).toISOString(),
    gradient: 'gradient-3', readTime: 4, tags: ['rupiah', 'dolar', 'ekspor'],
  },
  {
    id: 12, slug: 'google-buka-pusat-ai-jakarta',
    title: 'Google Resmi Buka Pusat Riset AI Pertama di Asia Tenggara di Jakarta',
    excerpt: 'Pusat riset baru ini akan fokus pada pengembangan AI untuk bahasa-bahasa Asia Tenggara.',
    body: [
      'Google resmi membuka pusat riset kecerdasan buatan pertamanya di Asia Tenggara, berlokasi di Jakarta.',
      'Pusat riset ini akan fokus pada pengembangan model bahasa untuk bahasa-bahasa Asia Tenggara.',
      'Sebanyak 200 peneliti dan insinyur akan bergabung dalam dua tahun pertama operasional.',
      'Google juga mengumumkan program beasiswa untuk 1.000 mahasiswa Indonesia di bidang AI.',
    ],
    category: 'teknologi', source: 'BBC Indonesia', sourceUrl: 'https://www.bbc.com/indonesia',
    author: 'Dr. Budi Hartono', date: new Date(N - 12 * H).toISOString(),
    gradient: 'gradient-4', readTime: 4, tags: ['google', 'AI', 'riset', 'jakarta'],
  },
  {
    id: 13, slug: 'gempa-54-sr-sulawesi-selatan',
    title: 'Gempa 5,4 SR Guncang Sulawesi Selatan, Warga Diminta Tetap Waspada',
    excerpt: 'BMKG mencatat gempa tektonik 5,4 SR mengguncang wilayah Sulawesi Selatan tanpa potensi tsunami.',
    body: [
      'Gempa bumi tektonik 5,4 SR mengguncang wilayah Sulawesi Selatan pada pukul 14.23 WITA.',
      'BMKG menyatakan gempa tidak berpotensi tsunami. Pusat gempa di kedalaman 25 km.',
      'BMKG mengimbau warga tetap tenang dan waspada terhadap kemungkinan gempa susulan.',
      'Gempa terjadi akibat aktivitas tektonik di zona subduksi Sulawesi.',
    ],
    category: 'terkini', source: 'Antara News', sourceUrl: 'https://www.antaranews.com',
    author: 'Wahyu Hidayat', date: new Date(N - 45 * M).toISOString(),
    gradient: 'gradient-1', readTime: 3, tags: ['gempa', 'sulawesi', 'BMKG'],
    breaking: true,
  },
  {
    id: 14, slug: 'kereta-cepat-surabaya-malang',
    title: 'Groundbreaking Proyek Kereta Cepat Surabaya-Malang Resmi Dimulai',
    excerpt: 'Proyek kereta cepat kedua di Indonesia akan menghubungkan dua kota besar Jawa Timur.',
    body: [
      'Pemerintah resmi memulai groundbreaking proyek kereta cepat Surabaya-Malang.',
      'Kereta cepat ini mampu menempuh jarak 90 km dalam waktu hanya 25 menit.',
      'Proyek senilai Rp 45 triliun ini direncanakan selesai dalam empat tahun.',
      'Pembangunan akan menciptakan lapangan kerja bagi lebih dari 20.000 pekerja.',
    ],
    category: 'terkini', source: 'Tribunnews', sourceUrl: 'https://www.tribunnews.com',
    author: 'Agus Setiawan', date: new Date(N - 30 * M).toISOString(),
    gradient: 'gradient-8', readTime: 4, tags: ['kereta cepat', 'surabaya', 'malang'],
    breaking: true,
  },
  {
    id: 15, slug: 'badminton-indonesia-all-england',
    title: 'Indonesia Kuasai Podium All England Open dengan Tiga Gelar Sekaligus',
    excerpt: 'Pasukan Merah Putih tampil dominan menyabet gelar ganda putra, ganda putri, dan ganda campuran.',
    body: [
      'Tim bulu tangkis Indonesia mencatatkan prestasi membanggakan di All England Open dengan tiga gelar juara.',
      'Indonesia menyabet gelar di nomor ganda putra, ganda putri, dan ganda campuran.',
      'Ketua PBSI mengapresiasi pencapaian luar biasa ini dan optimistis menjelang Olimpiade.',
      'Kemenangan ini menjadi yang terbanyak bagi Indonesia di All England sejak era 1990-an.',
    ],
    category: 'olahraga', source: 'VIVA', sourceUrl: 'https://www.viva.co.id',
    author: 'Faisal Akbar', date: new Date(N - 18 * H).toISOString(),
    gradient: 'gradient-7', readTime: 3, tags: ['bulu tangkis', 'All England', 'PBSI'],
  },
  {
    id: 16, slug: 'series-indonesia-trending-netflix',
    title: 'Series Indonesia Menduduki Trending Nomor 1 di Netflix Global',
    excerpt: 'Series thriller Indonesia berhasil menempati posisi pertama trending Netflix di lebih dari 40 negara.',
    body: [
      'Sebuah series thriller Indonesia berhasil menduduki posisi nomor 1 trending Netflix secara global.',
      'Series 8 episode ini mengangkat cerita konspirasi dengan unsur mitologi lokal Jawa.',
      'Netflix mengonfirmasi series ini telah ditonton lebih dari 50 juta jam dalam minggu pertama.',
      'Ini menjadikannya series berbahasa non-Inggris terpopuler di Netflix tahun ini.',
    ],
    category: 'hiburan', source: 'VIVA', sourceUrl: 'https://www.viva.co.id',
    author: 'Citra Dewi', date: new Date(N - 23 * H).toISOString(),
    gradient: 'gradient-2', readTime: 3, tags: ['Netflix', 'series', 'trending'],
  },
  {
    id: 17, slug: 'ktt-asean-perdagangan-digital',
    title: 'KTT ASEAN Hasilkan Kesepakatan Bersejarah Soal Perdagangan Digital',
    excerpt: 'Pemimpin 10 negara ASEAN menyepakati kerangka kerja perdagangan digital bersama.',
    body: [
      'KTT ASEAN ke-44 menghasilkan kesepakatan bersejarah terkait kerangka kerja perdagangan digital bersama.',
      'Presiden Indonesia mengusulkan pembentukan pusat riset AI ASEAN yang berbasis di Jakarta.',
      'KTT juga membahas isu keamanan siber regional dan pembentukan satuan tugas bersama.',
      'Sepuluh negara ASEAN berkomitmen mencapai target netralitas karbon pada 2050.',
    ],
    category: 'dunia', source: 'VOA Indonesia', sourceUrl: 'https://www.voaindonesia.com',
    author: 'Surya Dharma', date: new Date(N - 14 * H).toISOString(),
    gradient: 'gradient-5', readTime: 5, tags: ['ASEAN', 'KTT', 'ekonomi digital'],
  },
  {
    id: 18, slug: 'cuaca-ekstrem-potensi-banjir',
    title: 'BMKG Peringatkan Cuaca Ekstrem di Sejumlah Daerah, Potensi Banjir Tinggi',
    excerpt: 'BMKG mengeluarkan peringatan dini cuaca ekstrem untuk Jawa, Kalimantan, dan Sulawesi.',
    body: [
      'BMKG mengeluarkan peringatan dini terkait potensi cuaca ekstrem di beberapa wilayah Indonesia.',
      'Wilayah yang perlu waspada meliputi Jawa, Kalimantan Selatan, dan Sulawesi Selatan.',
      'Cuaca ekstrem dipicu oleh fenomena La Nina yang masih berlangsung.',
      'BNPB telah menyiapkan personel dan logistik bantuan di titik-titik rawan bencana.',
    ],
    category: 'terkini', source: 'SindoNews', sourceUrl: 'https://www.sindonews.com',
    author: 'Rahmat Hidayat', date: new Date(N - 90 * M).toISOString(),
    gradient: 'gradient-3', readTime: 3, tags: ['cuaca', 'BMKG', 'banjir'],
    breaking: true,
  },
  {
    id: 19, slug: 'riset-ai-indonesia-top-10-global',
    title: 'Riset AI Indonesia Masuk 10 Besar Dunia Berkat Kolaborasi Kampus dan Industri',
    excerpt: 'Publikasi ilmiah Indonesia di bidang kecerdasan buatan melonjak 250 persen dalam tiga tahun terakhir.',
    body: [
      'Indonesia berhasil menembus peringkat 10 besar dunia dalam volume publikasi ilmiah bidang AI.',
      'Lonjakan ini didorong oleh kolaborasi intensif antara universitas dan perusahaan teknologi.',
      'Fokus riset AI Indonesia adalah penerapan untuk pertanian presisi yang mendapat pengakuan internasional.',
      'Pemerintah mengalokasikan Rp 2 triliun untuk pengembangan AI nasional dalam APBN tahun ini.',
    ],
    category: 'teknologi', source: 'BBC Indonesia', sourceUrl: 'https://www.bbc.com/indonesia',
    author: 'Dr. Budi Hartono', date: new Date(N - 20 * H).toISOString(),
    gradient: 'gradient-8', readTime: 5, tags: ['AI', 'riset', 'universitas'],
  },
  {
    id: 20, slug: 'inflasi-juni-terkendali-pangan-stabil',
    title: 'Inflasi Juni 2025 Terkendali di 2,1 Persen, Harga Pangan Stabil',
    excerpt: 'BPS mencatat inflasi bulan Juni berada pada level 2,1 persen year-on-year.',
    body: [
      'BPS melaporkan inflasi Indonesia pada Juni 2025 tercatat 2,1 persen secara tahunan.',
      'Inflasi rendah didukung stabilitas harga bahan pangan pokok.',
      'Inflasi inti terjaga di level 1,8 persen, menunjukkan daya beli masyarakat terkendali.',
      'Ekonom menilai rendahnya inflasi memberikan ruang bagi BI untuk melonggarkan kebijakan moneter.',
    ],
    category: 'ekonomi', source: 'Okezone', sourceUrl: 'https://www.okezone.com',
    author: 'Linda Paramita', date: new Date(N - 22 * H).toISOString(),
    gradient: 'gradient-6', readTime: 4, tags: ['inflasi', 'BPS', 'pangan'],
  },
];

export function getByCategory(slug: string): Article[] {
  if (slug === 'terkini') return [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const cat = categories.find(c => c.slug === slug);
  if (!cat) return [];
  return articles.filter(a => a.category === cat.id);
}

export function getBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getRelated(article: Article, limit = 4): Article[] {
  return articles.filter(a => a.id !== article.id && a.category === article.category).slice(0, limit);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.excerpt.toLowerCase().includes(q) ||
    a.tags.some(t => t.toLowerCase().includes(q))
  );
}

export function timeAgo(d: string): string {
  const diff = Date.now() - new Date(d).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return 'Baru saja';
  if (m < 60) return m + ' menit lalu';
  const h = Math.floor(m / 60);
  if (h < 24) return h + ' jam lalu';
  const dy = Math.floor(h / 24);
  if (dy < 7) return dy + ' hari lalu';
  return new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function formatDate(d: string): string {
  return new Date(d).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

export function todayStr(): string {
  return new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}
