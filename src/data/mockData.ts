export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
  description: string;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  source: string;
  sourceUrl: string;
  author: string;
  publishedAt: string;
  gradient: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
  breaking?: boolean;
}

export const categories: Category[] = [
  { id: 'terkini', name: 'Terkini', slug: 'terkini', color: '#dc2626', description: 'Berita terbaru dan terhangat dari seluruh Indonesia' },
  { id: 'politik', name: 'Politik', slug: 'politik', color: '#1d4ed8', description: 'Berita politik nasional dan perkembangan pemerintahan' },
  { id: 'ekonomi', name: 'Ekonomi', slug: 'ekonomi', color: '#059669', description: 'Berita ekonomi, bisnis, dan keuangan terkini' },
  { id: 'teknologi', name: 'Teknologi', slug: 'teknologi', color: '#7c3aed', description: 'Inovasi teknologi dan transformasi digital' },
  { id: 'olahraga', name: 'Olahraga', slug: 'olahraga', color: '#d97706', description: 'Berita olahraga nasional dan internasional' },
  { id: 'hiburan', name: 'Hiburan', slug: 'hiburan', color: '#db2777', description: 'Dunia hiburan, selebriti, dan budaya pop' },
  { id: 'dunia', name: 'Dunia', slug: 'dunia', color: '#0891b2', description: 'Berita internasional dan isu-isu global' },
  { id: 'gayahidup', name: 'Gaya Hidup', slug: 'gaya-hidup', color: '#65a30d', description: 'Tren gaya hidup, travel, dan kuliner' },
  { id: 'kesehatan', name: 'Kesehatan', slug: 'kesehatan', color: '#0d9488', description: 'Informasi kesehatan dan tips hidup sehat' },
  { id: 'otomotif', name: 'Otomotif', slug: 'otomotif', color: '#ea580c', description: 'Berita otomotif dan kendaraan terbaru' },
];

const now = Date.now();
const hour = 3600000;
const minute = 60000;

export const articles: Article[] = [
  {
    id: 1,
    slug: 'presiden-prabowo-tegaskan-komitmen-pembangunan-indonesia-timur',
    title: 'Presiden Prabowo Tegaskan Komitmen Pemerataan Pembangunan di Indonesia Timur',
    excerpt: 'Dalam kunjungan kerja ke Papua, Presiden Prabowo menegaskan program prioritas pemerintah untuk mempercepat pembangunan infrastruktur di wilayah timur Indonesia.',
    content: [
      'Presiden Prabowo Subianto menegaskan komitmen pemerintah untuk mempercepat pemerataan pembangunan di wilayah Indonesia Timur. Hal ini disampaikan dalam kunjungan kerja ke Jayapura, Papua, Selasa.',
      'Dalam sambutannya di hadapan para kepala daerah se-Papua, Presiden Prabowo menyatakan bahwa pembangunan infrastruktur di wilayah timur menjadi salah satu program prioritas utama kabinet.',
      '"Kita tidak bisa terus membiarkan ketimpangan pembangunan antara barat dan timur. Seluruh rakyat Indonesia berhak mendapatkan akses yang sama terhadap infrastruktur, pendidikan, dan kesehatan," ujar Presiden.',
      'Pemerintah mengalokasikan anggaran sebesar Rp 150 triliun untuk program percepatan pembangunan di Papua dan wilayah timur lainnya pada tahun anggaran ini. Dana tersebut akan digunakan untuk pembangunan jalan, jembatan, bandara, serta fasilitas pendidikan dan kesehatan.',
      'Selain infrastruktur fisik, pemerintah juga berkomitmen untuk meningkatkan kualitas sumber daya manusia melalui program beasiswa dan pelatihan kerja bagi masyarakat Papua.'
    ],
    category: 'politik',
    source: 'Antara News',
    sourceUrl: 'https://www.antaranews.com',
    author: 'Fadhil Rahman',
    publishedAt: new Date(now - 2 * hour).toISOString(),
    gradient: 'gradient-1',
    readTime: 4,
    tags: ['presiden', 'papua', 'pembangunan', 'infrastruktur'],
    featured: true,
    breaking: true,
  },
  {
    id: 2,
    slug: 'bank-indonesia-pertahankan-suku-bunga-acuan',
    title: 'Bank Indonesia Pertahankan Suku Bunga Acuan di Level 5,75 Persen',
    excerpt: 'Rapat Dewan Gubernur Bank Indonesia memutuskan untuk mempertahankan suku bunga acuan BI Rate di level 5,75 persen demi menjaga stabilitas nilai tukar rupiah.',
    content: [
      'Bank Indonesia (BI) memutuskan untuk mempertahankan suku bunga acuan BI-7 Day Reverse Repo Rate (BI7DRR) di level 5,75 persen. Keputusan ini diambil dalam Rapat Dewan Gubernur (RDG) yang berlangsung selama dua hari.',
      'Gubernur BI Perry Warjiyo menjelaskan bahwa keputusan ini sejalan dengan upaya menjaga stabilitas nilai tukar rupiah di tengah ketidakpastian ekonomi global yang masih tinggi.',
      '"Kebijakan ini konsisten dengan upaya pengendalian inflasi agar tetap terjaga dalam sasaran 2,5 plus minus 1 persen untuk tahun ini," kata Perry dalam konferensi pers virtual.',
      'BI mencatat perekonomian domestik tetap tumbuh positif ditopang oleh konsumsi rumah tangga dan investasi. Pertumbuhan ekonomi diperkirakan berada di kisaran 5,0-5,4 persen.',
      'Sementara itu, inflasi terkendali pada level 2,3 persen year-on-year pada bulan terakhir, masih berada dalam koridor sasaran bank sentral.'
    ],
    category: 'ekonomi',
    source: 'CNBC Indonesia',
    sourceUrl: 'https://www.cnbcindonesia.com',
    author: 'Sari Wulandari',
    publishedAt: new Date(now - 3 * hour).toISOString(),
    gradient: 'gradient-2',
    readTime: 5,
    tags: ['bank indonesia', 'suku bunga', 'rupiah', 'ekonomi'],
    featured: true,
  },
  {
    id: 3,
    slug: 'timnas-indonesia-u23-lolos-perempat-final',
    title: 'Timnas Indonesia U-23 Lolos ke Perempat Final Piala Asia',
    excerpt: 'Garuda Muda memastikan langkah ke babak perempat final setelah menang dramatis lewat adu penalti melawan tuan rumah.',
    content: [
      'Timnas Indonesia U-23 berhasil melangkah ke babak perempat final Piala Asia U-23 setelah memenangkan laga dramatis melawan tim tuan rumah. Kemenangan diraih lewat adu penalti dengan skor 4-3 setelah laga berakhir imbang 1-1 dalam waktu normal.',
      'Gol Indonesia dicetak oleh penyerang muda berbakat Hokky Caraka pada menit ke-67 melalui sundulan keras dari tendangan sudut. Sementara tim tuan rumah menyamakan kedudukan melalui tendangan bebas di menit ke-82.',
      'Dalam adu penalti, kiper Timnas Ernando Ari Sutaryadi tampil gemilang dengan menggagalkan dua tendangan penalti lawan, menjadi pahlawan kemenangan Indonesia.',
      'Pelatih Shin Tae-yong mengapresiasi perjuangan seluruh pemain dan menegaskan timnya siap menghadapi lawan berikutnya di babak perempat final.',
      '"Ini adalah kemenangan untuk seluruh rakyat Indonesia. Kami akan terus berjuang untuk memberikan yang terbaik," ujar Shin Tae-yong usai pertandingan.'
    ],
    category: 'olahraga',
    source: 'Tribunnews',
    sourceUrl: 'https://www.tribunnews.com',
    author: 'Rendra Mahardika',
    publishedAt: new Date(now - 1 * hour).toISOString(),
    gradient: 'gradient-3',
    readTime: 3,
    tags: ['timnas', 'sepak bola', 'piala asia', 'u-23'],
    featured: true,
    breaking: true,
  },
  {
    id: 4,
    slug: 'startup-indonesia-raih-pendanaan-seri-b',
    title: 'Startup Indonesia Raih Pendanaan Seri B Senilai Rp 500 Miliar untuk Ekspansi Regional',
    excerpt: 'Platform agritech asal Bandung mendapat suntikan dana segar dari konsorsium investor regional untuk memperluas layanan ke Asia Tenggara.',
    content: [
      'Sebuah startup agritech asal Bandung berhasil mengantongi pendanaan Seri B senilai Rp 500 miliar (sekitar US$32 juta) dari konsorsium investor yang dipimpin oleh fund management regional terkemuka.',
      'Pendanaan ini akan digunakan untuk memperluas operasi ke negara-negara Asia Tenggara, khususnya Vietnam, Thailand, dan Filipina, serta mengembangkan teknologi kecerdasan buatan untuk optimalisasi pertanian.',
      'CEO startup tersebut mengatakan bahwa teknologi mereka telah membantu lebih dari 500.000 petani di Indonesia meningkatkan hasil panen hingga 40 persen melalui analisis data cuaca dan tanah.',
      'Platform ini menggunakan teknologi satelit dan sensor IoT untuk memberikan rekomendasi kepada petani tentang waktu tanam optimal, penggunaan pupuk, dan pengelolaan hama.',
      'Indonesia menjadi salah satu pasar agritech terbesar di Asia Tenggara dengan potensi pasar mencapai US$500 miliar pada 2030.'
    ],
    category: 'teknologi',
    source: 'CNBC Indonesia',
    sourceUrl: 'https://www.cnbcindonesia.com',
    author: 'Dimas Prasetyo',
    publishedAt: new Date(now - 4 * hour).toISOString(),
    gradient: 'gradient-4',
    readTime: 4,
    tags: ['startup', 'agritech', 'pendanaan', 'teknologi'],
  },
  {
    id: 5,
    slug: 'film-sineas-muda-indonesia-festival-cannes',
    title: 'Film Karya Sineas Muda Indonesia Masuk Seleksi Resmi Festival Cannes 2025',
    excerpt: 'Sebuah karya film independen dari sutradara berusia 28 tahun asal Yogyakarta berhasil menembus seleksi bergengsi festival film internasional.',
    content: [
      'Sebuah film independen berjudul "Tanah Rindu" karya sutradara muda Indonesia berhasil masuk dalam seleksi resmi Festival Film Cannes 2025, menjadi salah satu dari sedikit film Asia Tenggara yang terpilih tahun ini.',
      'Film ini mengangkat tema tentang seorang wanita Jawa yang kembali ke kampung halamannya setelah bertahun-tahun merantau, hanya untuk menemukan bahwa desa kelahirannya telah berubah drastis akibat proyek pembangunan.',
      'Sutradara film tersebut mengatakan merasa sangat terhormat filmnya bisa bersaing di panggung internasional. "Ini adalah cerita tentang identitas dan perubahan, tema yang universal tapi sangat Indonesia," ujarnya.',
      'Film ini diproduksi dengan anggaran minim menggunakan aktor-aktor lokal non-profesional, sebuah pendekatan yang justru dipuji kritikus sebagai kekuatan naratif film.',
      'Indonesia semakin menunjukkan eksistensinya di kancah perfilman internasional setelah beberapa tahun terakhir sejumlah film Indonesia berhasil meraih penghargaan di berbagai festival bergengsi dunia.'
    ],
    category: 'hiburan',
    source: 'Republika',
    sourceUrl: 'https://www.republika.co.id',
    author: 'Anisa Rahma',
    publishedAt: new Date(now - 5 * hour).toISOString(),
    gradient: 'gradient-5',
    readTime: 3,
    tags: ['film', 'cannes', 'sineas', 'festival'],
  },
  {
    id: 6,
    slug: 'pbb-serukan-gencatan-senjata-timur-tengah',
    title: 'PBB Serukan Gencatan Senjata Segera di Zona Konflik Timur Tengah',
    excerpt: 'Sekretaris Jenderal PBB mendesak semua pihak untuk menghentikan kekerasan dan membuka akses kemanusiaan di wilayah yang terdampak konflik.',
    content: [
      'Sekretaris Jenderal PBB mendesak gencatan senjata segera di zona konflik Timur Tengah, menyerukan kepada semua pihak yang bertikai untuk menghentikan kekerasan dan membuka koridor kemanusiaan.',
      'Dalam pernyataan resmi yang dirilis dari markas PBB di New York, Sekjen menyatakan keprihatinan mendalam atas meningkatnya korban sipil dalam beberapa pekan terakhir.',
      '"Situasi kemanusiaan di lapangan sangat memprihatinkan. Ribuan warga sipil membutuhkan bantuan darurat, termasuk makanan, air bersih, dan perawatan medis," tegasnya.',
      'Dewan Keamanan PBB dijadwalkan menggelar sidang darurat untuk membahas resolusi gencatan senjata. Namun, prospek kesepakatan masih belum pasti mengingat perbedaan posisi negara-negara anggota tetap.',
      'Indonesia sebagai anggota tidak tetap Dewan Keamanan PBB terus mendorong upaya diplomatik untuk mencapai perdamaian dan telah mengirimkan bantuan kemanusiaan senilai Rp 50 miliar.'
    ],
    category: 'dunia',
    source: 'BBC Indonesia',
    sourceUrl: 'https://www.bbc.com/indonesia',
    author: 'Ahmad Fauzi',
    publishedAt: new Date(now - 6 * hour).toISOString(),
    gradient: 'gradient-6',
    readTime: 4,
    tags: ['pbb', 'timur tengah', 'gencatan senjata', 'konflik'],
  },
  {
    id: 7,
    slug: 'kemenkes-luncurkan-vaksinasi-fase-tiga',
    title: 'Kemenkes Luncurkan Program Vaksinasi Nasional Fase Tiga untuk 50 Juta Warga',
    excerpt: 'Program vaksinasi terbaru menargetkan 50 juta warga di daerah terpencil dengan vaksin generasi baru yang lebih efektif.',
    content: [
      'Kementerian Kesehatan secara resmi meluncurkan Program Vaksinasi Nasional Fase Tiga yang menargetkan 50 juta warga di wilayah-wilayah terpencil di seluruh Indonesia.',
      'Menteri Kesehatan menjelaskan program ini menggunakan vaksin generasi terbaru yang memiliki efektivitas lebih tinggi dan efek samping yang lebih ringan dibandingkan vaksin sebelumnya.',
      '"Program ini merupakan bagian dari upaya kita untuk mencapai kekebalan komunitas yang merata di seluruh pelosok negeri," ujar Menkes dalam peluncuran program di Jakarta.',
      'Vaksinasi akan dilakukan melalui 10.000 pos kesehatan yang tersebar di 34 provinsi, dengan prioritas pada daerah yang sulit dijangkau dan memiliki cakupan vaksinasi rendah.',
      'Pemerintah juga menggandeng organisasi masyarakat dan relawan untuk memastikan distribusi vaksin berjalan lancar hingga ke desa-desa terpencil.'
    ],
    category: 'kesehatan',
    source: 'Antara News',
    sourceUrl: 'https://www.antaranews.com',
    author: 'Dr. Putri Amelia',
    publishedAt: new Date(now - 7 * hour).toISOString(),
    gradient: 'gradient-7',
    readTime: 4,
    tags: ['vaksinasi', 'kemenkes', 'kesehatan', 'program nasional'],
  },
  {
    id: 8,
    slug: 'mobil-listrik-buatan-indonesia-siap-ekspor',
    title: 'Mobil Listrik Buatan Indonesia Siap Ekspor ke Pasar ASEAN Mulai Kuartal III',
    excerpt: 'Produsen otomotif nasional mengumumkan kesiapan mengekspor mobil listrik pertama buatan Indonesia ke lima negara ASEAN.',
    content: [
      'Indonesia siap memasuki pasar ekspor kendaraan listrik setelah produsen otomotif nasional mengumumkan rencana pengiriman mobil listrik pertama buatan dalam negeri ke lima negara ASEAN mulai kuartal ketiga tahun ini.',
      'Mobil listrik yang diberi nama "Nusantara EV" ini memiliki jarak tempuh hingga 400 km sekali pengisian daya dan dilengkapi teknologi fast charging yang memungkinkan pengisian dari 0 hingga 80 persen dalam waktu 30 menit.',
      'Menteri Perindustrian menyampaikan apresiasi atas pencapaian industri otomotif nasional yang kini mampu bersaing di pasar internasional.',
      '"Ini adalah tonggak sejarah bagi industri otomotif Indonesia. Kita tidak hanya menjadi pasar, tapi juga produsen kendaraan listrik yang kompetitif," kata Menperin.',
      'Harga mobil listrik ini dibanderol mulai dari Rp 300 jutaan, menjadikannya salah satu mobil listrik termurah di kelasnya di kawasan ASEAN.'
    ],
    category: 'otomotif',
    source: 'SindoNews',
    sourceUrl: 'https://www.sindonews.com',
    author: 'Hendra Wijaya',
    publishedAt: new Date(now - 8 * hour).toISOString(),
    gradient: 'gradient-8',
    readTime: 4,
    tags: ['mobil listrik', 'ekspor', 'ASEAN', 'otomotif nasional'],
  },
  {
    id: 9,
    slug: 'tren-wisata-berkelanjutan-milenial-indonesia',
    title: 'Tren Wisata Berkelanjutan Meningkat Tajam di Kalangan Milenial dan Gen Z',
    excerpt: 'Survei terbaru menunjukkan 78 persen wisatawan muda Indonesia kini lebih memilih destinasi wisata yang menerapkan prinsip keberlanjutan.',
    content: [
      'Tren wisata berkelanjutan atau sustainable tourism mengalami peningkatan signifikan di kalangan generasi muda Indonesia. Survei terbaru dari lembaga riset pariwisata menunjukkan 78 persen wisatawan berusia 18-35 tahun kini mempertimbangkan aspek keberlanjutan saat memilih destinasi liburan.',
      'Wisatawan muda cenderung memilih akomodasi yang menerapkan praktik ramah lingkungan, menggunakan transportasi umum, dan berpartisipasi dalam kegiatan konservasi saat berlibur.',
      'Beberapa destinasi wisata di Indonesia seperti Labuan Bajo, Raja Ampat, dan Tana Toraja telah mengembangkan program wisata berkelanjutan yang mendapat respons positif dari wisatawan muda.',
      '"Generasi muda semakin sadar bahwa pilihan wisata mereka berdampak pada lingkungan. Ini tren yang sangat positif bagi industri pariwisata Indonesia," ujar pengamat pariwisata.',
      'Pemerintah melalui Kemenparekraf juga mendorong pengembangan desa wisata berbasis komunitas yang memberdayakan masyarakat lokal sekaligus menjaga kelestarian alam dan budaya.'
    ],
    category: 'gayahidup',
    source: 'VIVA',
    sourceUrl: 'https://www.viva.co.id',
    author: 'Nadia Sasmita',
    publishedAt: new Date(now - 9 * hour).toISOString(),
    gradient: 'gradient-9',
    readTime: 4,
    tags: ['wisata', 'berkelanjutan', 'milenial', 'gen z'],
  },
  {
    id: 10,
    slug: 'dpr-sahkan-ruu-ketahanan-energi-nasional',
    title: 'DPR Sahkan RUU Ketahanan Energi Nasional dalam Rapat Paripurna Bersejarah',
    excerpt: 'Undang-undang baru ini mengatur transisi energi Indonesia dari fosil ke energi terbarukan secara bertahap hingga 2045.',
    content: [
      'DPR RI secara resmi mengesahkan Rancangan Undang-Undang tentang Ketahanan Energi Nasional dalam rapat paripurna yang berlangsung hari ini. RUU ini mengatur kerangka hukum untuk transisi energi Indonesia dari bahan bakar fosil ke energi terbarukan.',
      'UU baru ini menetapkan target bauran energi terbarukan sebesar 23 persen pada 2025 dan minimal 31 persen pada 2030, sejalan dengan komitmen Indonesia dalam Perjanjian Paris tentang perubahan iklim.',
      'Ketua DPR menyatakan bahwa pengesahan UU ini merupakan langkah bersejarah bagi kedaulatan energi Indonesia.',
      '"Dengan UU ini, kita memiliki peta jalan yang jelas untuk membangun ketahanan energi nasional yang berkelanjutan dan ramah lingkungan," ujarnya.',
      'UU ini juga mengatur insentif fiskal bagi pengembang energi terbarukan, termasuk pembebasan pajak impor untuk peralatan pembangkit listrik tenaga surya dan angin selama periode transisi.'
    ],
    category: 'politik',
    source: 'Okezone',
    sourceUrl: 'https://www.okezone.com',
    author: 'Bayu Pratama',
    publishedAt: new Date(now - 10 * hour).toISOString(),
    gradient: 'gradient-10',
    readTime: 5,
    tags: ['DPR', 'energi', 'undang-undang', 'energi terbarukan'],
  },
  {
    id: 11,
    slug: 'rupiah-menguat-di-tengah-ketidakpastian-global',
    title: 'Rupiah Menguat Tipis di Tengah Ketidakpastian Pasar Global yang Masih Tinggi',
    excerpt: 'Nilai tukar rupiah terhadap dolar AS menguat 0,3 persen ditopang oleh sentimen positif dari data ekspor yang lebih baik dari perkiraan.',
    content: [
      'Nilai tukar rupiah terhadap dolar Amerika Serikat menguat tipis sebesar 0,3 persen ke level Rp 15.450 per dolar AS pada perdagangan hari ini. Penguatan ini ditopang sentimen positif dari data ekspor Indonesia yang melampaui ekspektasi pasar.',
      'Badan Pusat Statistik (BPS) melaporkan ekspor Indonesia pada bulan lalu mencapai US$23,5 miliar, naik 8,7 persen dibandingkan periode yang sama tahun sebelumnya.',
      'Analis pasar menilai penguatan rupiah juga didukung oleh kebijakan Bank Indonesia yang tetap mempertahankan suku bunga acuan di level tinggi untuk menjaga daya tarik aset keuangan domestik.',
      '"Prospek rupiah dalam jangka pendek masih cukup positif selama Bank Indonesia konsisten menjaga stabilitas nilai tukar," kata analis valas senior.',
      'Namun, pelaku pasar tetap memantau perkembangan kebijakan moneter The Fed yang diperkirakan akan mempertahankan suku bunga tinggi lebih lama dari yang diantisipasi sebelumnya.'
    ],
    category: 'ekonomi',
    source: 'CNBC Indonesia',
    sourceUrl: 'https://www.cnbcindonesia.com',
    author: 'Rizal Firmansyah',
    publishedAt: new Date(now - 11 * hour).toISOString(),
    gradient: 'gradient-1',
    readTime: 4,
    tags: ['rupiah', 'dolar', 'ekspor', 'pasar keuangan'],
  },
  {
    id: 12,
    slug: 'kemenkominfo-percepat-infrastruktur-digital-pedesaan',
    title: 'Kemenkominfo Percepat Pembangunan Infrastruktur Digital di 10.000 Desa Tertinggal',
    excerpt: 'Program digitalisasi pedesaan menargetkan penyediaan akses internet broadband bagi masyarakat di daerah 3T (tertinggal, terdepan, terluar).',
    content: [
      'Kementerian Komunikasi dan Informatika mempercepat pembangunan infrastruktur digital di 10.000 desa tertinggal melalui program USO (Universal Service Obligation) tahap terbaru.',
      'Program ini menargetkan penyediaan akses internet broadband dengan kecepatan minimal 10 Mbps bagi masyarakat di daerah 3T (tertinggal, terdepan, dan terluar).',
      'Menteri Kominfo menjelaskan bahwa konektivitas digital merupakan kunci untuk membuka akses pendidikan, kesehatan, dan ekonomi bagi masyarakat di daerah terpencil.',
      '"Dengan internet, petani di pelosok bisa mengakses informasi harga pasar secara real-time, anak-anak bisa belajar daring, dan pelaku UMKM bisa menjual produknya secara online," ujar Menkominfo.',
      'Pembangunan infrastruktur akan menggunakan kombinasi teknologi serat optik, VSAT, dan jaringan seluler untuk menjangkau wilayah-wilayah yang sulit diakses.'
    ],
    category: 'teknologi',
    source: 'Antara News',
    sourceUrl: 'https://www.antaranews.com',
    author: 'Eko Nugroho',
    publishedAt: new Date(now - 12 * hour).toISOString(),
    gradient: 'gradient-2',
    readTime: 4,
    tags: ['internet', 'desa', 'digitalisasi', 'infrastruktur'],
  },
  {
    id: 13,
    slug: 'konser-musik-nusantara-pecahkan-rekor-gbk',
    title: 'Festival Musik Nusantara Pecahkan Rekor Penonton di Gelora Bung Karno',
    excerpt: 'Lebih dari 80.000 penonton memadati GBK dalam gelaran festival musik terbesar sepanjang sejarah Indonesia.',
    content: [
      'Festival Musik Nusantara 2025 sukses memecahkan rekor penonton dengan lebih dari 80.000 orang memadati kompleks Gelora Bung Karno (GBK) Jakarta. Acara yang berlangsung selama tiga hari ini menampilkan lebih dari 50 musisi dan band dari berbagai genre.',
      'Acara puncak dimeriahkan oleh penampilan kolaborasi antar generasi musisi Indonesia yang membawakan lagu-lagu legendaris Nusantara dengan aransemen modern.',
      'Panitia mencatat tiket acara ini terjual habis dalam waktu kurang dari dua jam sejak dibuka penjualannya, menunjukkan antusiasme luar biasa dari masyarakat.',
      '"Ini bukti bahwa musik Indonesia memiliki kekuatan luar biasa untuk menyatukan bangsa. Kami sangat tersentuh dengan respons masyarakat," ujar ketua panitia.',
      'Festival ini juga menerapkan konsep ramah lingkungan dengan penggunaan panel surya untuk kebutuhan listrik panggung dan sistem pengelolaan sampah yang ketat.'
    ],
    category: 'hiburan',
    source: 'Tribunnews',
    sourceUrl: 'https://www.tribunnews.com',
    author: 'Maya Sari',
    publishedAt: new Date(now - 13 * hour).toISOString(),
    gradient: 'gradient-3',
    readTime: 3,
    tags: ['musik', 'festival', 'GBK', 'konser'],
  },
  {
    id: 14,
    slug: 'ktt-asean-hasilkan-kesepakatan-strategis',
    title: 'KTT ASEAN 2025 Hasilkan 12 Kesepakatan Strategis untuk Penguatan Ekonomi Regional',
    excerpt: 'Para pemimpin negara ASEAN menyepakati kerja sama baru di bidang ekonomi digital, ketahanan pangan, dan perubahan iklim.',
    content: [
      'KTT ASEAN 2025 yang berlangsung di Kuala Lumpur, Malaysia, berhasil menghasilkan 12 kesepakatan strategis yang bertujuan memperkuat kerja sama ekonomi dan keamanan regional.',
      'Kesepakatan tersebut mencakup pembentukan dana bersama untuk pengembangan ekonomi digital ASEAN senilai US$5 miliar, penguatan rantai pasok pangan regional, dan komitmen bersama untuk mencapai netralitas karbon pada 2050.',
      'Presiden Indonesia mengusulkan pembentukan pusat riset kecerdasan buatan ASEAN yang berbasis di Jakarta sebagai wadah kolaborasi pengembangan teknologi AI di kawasan.',
      '"ASEAN harus menjadi kekuatan ekonomi yang mandiri dan berdaya saing global. Kerja sama yang lebih erat antar negara anggota adalah kunci untuk mencapai hal tersebut," ujar Presiden.',
      'KTT juga membahas isu keamanan siber regional dan menyepakati pembentukan satuan tugas bersama untuk menangani ancaman siber lintas negara.'
    ],
    category: 'dunia',
    source: 'VOA Indonesia',
    sourceUrl: 'https://www.voaindonesia.com',
    author: 'Surya Dharma',
    publishedAt: new Date(now - 14 * hour).toISOString(),
    gradient: 'gradient-4',
    readTime: 5,
    tags: ['ASEAN', 'KTT', 'ekonomi digital', 'kerja sama regional'],
  },
  {
    id: 15,
    slug: 'peneliti-indonesia-temukan-obat-herbal-diabetes',
    title: 'Peneliti Indonesia Temukan Potensi Senyawa Herbal Baru untuk Penanganan Diabetes',
    excerpt: 'Tim peneliti dari universitas terkemuka berhasil mengisolasi senyawa aktif dari tanaman endemik Kalimantan yang berpotensi menurunkan kadar gula darah.',
    content: [
      'Tim peneliti dari sebuah universitas terkemuka di Indonesia berhasil menemukan senyawa aktif dari tanaman endemik Kalimantan yang menunjukkan potensi signifikan dalam menurunkan kadar gula darah pada uji laboratorium.',
      'Senyawa yang diberi nama "Kalimantanin" ini diisolasi dari akar tanaman yang telah lama digunakan masyarakat Dayak sebagai obat tradisional.',
      'Penelitian yang telah dipublikasikan dalam jurnal ilmiah internasional ini menunjukkan bahwa Kalimantanin mampu meningkatkan sensitivitas insulin hingga 60 persen pada model uji praklinis.',
      '"Ini adalah penemuan yang sangat menjanjikan. Namun, kami masih membutuhkan penelitian lebih lanjut termasuk uji klinis pada manusia sebelum bisa dikembangkan menjadi obat," kata ketua tim peneliti.',
      'Indonesia memiliki potensi besar dalam pengembangan obat berbasis bahan alami mengingat kekayaan biodiversitas yang dimiliki, dengan lebih dari 30.000 spesies tanaman obat yang telah teridentifikasi.'
    ],
    category: 'kesehatan',
    source: 'Republika',
    sourceUrl: 'https://www.republika.co.id',
    author: 'Prof. Irwan Santoso',
    publishedAt: new Date(now - 15 * hour).toISOString(),
    gradient: 'gradient-5',
    readTime: 5,
    tags: ['herbal', 'diabetes', 'penelitian', 'obat'],
  },
  {
    id: 16,
    slug: 'tips-mengelola-keuangan-generasi-z',
    title: 'Tips Cerdas Mengelola Keuangan untuk Generasi Z di Era Gig Economy',
    excerpt: 'Pakar keuangan bagikan strategi pengelolaan finansial yang relevan untuk anak muda yang mengandalkan penghasilan dari berbagai sumber.',
    content: [
      'Di era gig economy, semakin banyak generasi Z yang mengandalkan penghasilan dari berbagai sumber pekerjaan freelance dan proyek sampingan. Kondisi ini menuntut kemampuan pengelolaan keuangan yang berbeda dari generasi sebelumnya.',
      'Pakar keuangan menyarankan agar anak muda menerapkan sistem "multiple income streams" sambil tetap mengalokasikan minimal 20 persen penghasilan untuk tabungan dan investasi.',
      '"Kunci utamanya adalah konsistensi dan disiplin. Meskipun penghasilan tidak tetap, alokasi untuk tabungan darurat harus menjadi prioritas utama," ujar perencana keuangan bersertifikasi.',
      'Investasi di instrumen yang mudah diakses seperti reksa dana, emas digital, dan saham menjadi pilihan populer di kalangan anak muda dengan modal awal yang terjangkau mulai dari Rp 10.000.',
      'Selain menabung dan berinvestasi, generasi Z juga disarankan untuk memiliki asuransi kesehatan dan mempersiapkan dana pensiun sedini mungkin meskipun masih berusia muda.'
    ],
    category: 'gayahidup',
    source: 'Okezone',
    sourceUrl: 'https://www.okezone.com',
    author: 'Dewi Kartika',
    publishedAt: new Date(now - 16 * hour).toISOString(),
    gradient: 'gradient-6',
    readTime: 4,
    tags: ['keuangan', 'gen z', 'investasi', 'gig economy'],
  },
  {
    id: 17,
    slug: 'pemerintah-insentif-pajak-kendaraan-ramah-lingkungan',
    title: 'Pemerintah Perluas Insentif Pajak untuk Kendaraan Ramah Lingkungan',
    excerpt: 'Kebijakan baru memberikan pembebasan pajak PPnBM dan BBNKB untuk kendaraan listrik serta kendaraan hidrogen fuel cell.',
    content: [
      'Pemerintah Indonesia memperluas cakupan insentif pajak untuk kendaraan ramah lingkungan melalui peraturan terbaru yang ditandatangani oleh Menteri Keuangan.',
      'Kebijakan ini memberikan pembebasan Pajak Penjualan atas Barang Mewah (PPnBM) sebesar 100 persen dan Bea Balik Nama Kendaraan Bermotor (BBNKB) untuk kendaraan listrik murni dan kendaraan berbasis hidrogen fuel cell.',
      'Selain itu, pemerintah juga memberikan subsidi sebesar Rp 80 juta untuk pembelian mobil listrik dan Rp 7 juta untuk motor listrik bagi konsumen individu.',
      '"Kebijakan ini bertujuan mempercepat transisi ke transportasi bersih dan mendukung target penurunan emisi karbon nasional," ujar Menkeu dalam konferensi pers.',
      'Asosiasi Industri Otomotif Indonesia menyambut baik kebijakan ini dan memproyeksikan penjualan kendaraan listrik akan meningkat 300 persen pada tahun depan.'
    ],
    category: 'otomotif',
    source: 'SindoNews',
    sourceUrl: 'https://www.sindonews.com',
    author: 'Tommy Setiawan',
    publishedAt: new Date(now - 17 * hour).toISOString(),
    gradient: 'gradient-7',
    readTime: 4,
    tags: ['pajak', 'mobil listrik', 'insentif', 'pemerintah'],
  },
  {
    id: 18,
    slug: 'badminton-indonesia-kuasai-podium-all-england',
    title: 'Indonesia Kuasai Podium All England Open dengan Raih Tiga Gelar Sekaligus',
    excerpt: 'Pasukan Merah Putih tampil dominan di turnamen bulu tangkis tertua dengan menyabet gelar ganda putra, ganda putri, dan ganda campuran.',
    content: [
      'Tim bulu tangkis Indonesia mencatatkan prestasi membanggakan di All England Open dengan meraih tiga gelar juara dari lima nomor yang dipertandingkan.',
      'Indonesia menyabit gelar di nomor ganda putra, ganda putri, dan ganda campuran, menunjukkan dominasi di sektor ganda yang telah menjadi kekuatan tradisional bulu tangkis Indonesia.',
      'Ketua PBSI mengapresiasi pencapaian luar biasa ini dan menyatakan optimisme menjelang Olimpiade mendatang.',
      '"Hasil ini membuktikan bahwa regenerasi pemain Indonesia berjalan dengan sangat baik. Kami optimistis bisa bersaing di level tertinggi," ujar Ketua PBSI.',
      'Kemenangan ini juga menjadi yang terbanyak bagi Indonesia di All England dalam satu edisi turnamen sejak era keemasan tahun 1990-an.'
    ],
    category: 'olahraga',
    source: 'VIVA',
    sourceUrl: 'https://www.viva.co.id',
    author: 'Faisal Akbar',
    publishedAt: new Date(now - 18 * hour).toISOString(),
    gradient: 'gradient-8',
    readTime: 3,
    tags: ['bulu tangkis', 'All England', 'PBSI', 'ganda'],
  },
  {
    id: 19,
    slug: 'jokowi-resmikan-kereta-cepat-surabaya-malang',
    title: 'Groundbreaking Proyek Kereta Cepat Surabaya-Malang Resmi Dimulai',
    excerpt: 'Proyek kereta cepat kedua di Indonesia akan menghubungkan dua kota besar di Jawa Timur dengan waktu tempuh hanya 25 menit.',
    content: [
      'Pemerintah resmi memulai groundbreaking proyek kereta cepat Surabaya-Malang yang akan menjadi jalur kereta cepat kedua di Indonesia setelah Whoosh Jakarta-Bandung.',
      'Kereta cepat ini akan mampu menempuh jarak 90 km antara Surabaya dan Malang dalam waktu hanya 25 menit, dibandingkan waktu tempuh normal 2-3 jam menggunakan kendaraan bermotor.',
      'Proyek senilai Rp 45 triliun ini direncanakan selesai dalam waktu empat tahun dan diharapkan mampu mengangkut hingga 50.000 penumpang per hari.',
      'Gubernur Jawa Timur menyambut baik proyek ini karena akan mendorong pertumbuhan ekonomi di koridor Surabaya-Malang yang merupakan salah satu koridor ekonomi terpenting di Jawa Timur.',
      'Pembangunan juga akan menciptakan lapangan kerja bagi lebih dari 20.000 pekerja selama masa konstruksi.'
    ],
    category: 'terkini',
    source: 'Tribunnews',
    sourceUrl: 'https://www.tribunnews.com',
    author: 'Agus Setiawan',
    publishedAt: new Date(now - 30 * minute).toISOString(),
    gradient: 'gradient-9',
    readTime: 4,
    tags: ['kereta cepat', 'surabaya', 'malang', 'infrastruktur'],
    breaking: true,
  },
  {
    id: 20,
    slug: 'ai-indonesia-masuk-top-10-riset-global',
    title: 'Riset AI Indonesia Masuk 10 Besar Dunia Berkat Kolaborasi Kampus dan Industri',
    excerpt: 'Publikasi ilmiah Indonesia di bidang kecerdasan buatan melonjak 250 persen dalam tiga tahun terakhir berkat sinergi antara universitas dan sektor swasta.',
    content: [
      'Indonesia berhasil menembus peringkat 10 besar dunia dalam hal volume publikasi ilmiah di bidang kecerdasan buatan (AI), menurut laporan terbaru dari organisasi riset internasional.',
      'Lonjakan ini didorong oleh kolaborasi intensif antara universitas-universitas terkemuka Indonesia dengan perusahaan teknologi dalam proyek penelitian bersama.',
      'Salah satu fokus riset AI Indonesia yang mendapat pengakuan internasional adalah penerapan AI untuk pertanian presisi, yang sangat relevan dengan kebutuhan negara agraris seperti Indonesia.',
      '"Indonesia memiliki keunggulan unik dalam riset AI yang diterapkan untuk memecahkan masalah-masalah spesifik negara berkembang," ujar ketua asosiasi AI Indonesia.',
      'Pemerintah mengalokasikan dana riset senilai Rp 2 triliun untuk pengembangan AI nasional dalam APBN tahun ini, naik tiga kali lipat dibandingkan tahun sebelumnya.'
    ],
    category: 'teknologi',
    source: 'BBC Indonesia',
    sourceUrl: 'https://www.bbc.com/indonesia',
    author: 'Dr. Budi Hartono',
    publishedAt: new Date(now - 20 * hour).toISOString(),
    gradient: 'gradient-10',
    readTime: 5,
    tags: ['AI', 'riset', 'universitas', 'teknologi'],
  },
  {
    id: 21,
    slug: 'gempa-54-sr-guncang-sulawesi-selatan',
    title: 'Gempa 5,4 SR Guncang Sulawesi Selatan, Warga Diminta Tetap Waspada',
    excerpt: 'BMKG mencatat gempa bumi tektonik berkekuatan 5,4 pada skala Richter mengguncang wilayah Sulawesi Selatan tanpa menimbulkan tsunami.',
    content: [
      'Gempa bumi tektonik berkekuatan 5,4 pada skala Richter mengguncang wilayah Sulawesi Selatan pada pukul 14.23 WITA. Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) menyatakan gempa ini tidak berpotensi tsunami.',
      'Pusat gempa terletak pada koordinat 3,45° LS dan 120,12° BT, atau sekitar 45 km barat daya Kabupaten Luwu Utara, pada kedalaman 25 km.',
      'Guncangan gempa dirasakan oleh warga di beberapa kabupaten dan kota di Sulawesi Selatan. Sebagian warga keluar rumah karena panik, namun tidak ada laporan kerusakan bangunan atau korban jiwa.',
      'BMKG mengimbau warga untuk tetap tenang dan waspada terhadap kemungkinan gempa susulan. Masyarakat diharapkan mengikuti arahan dari pemerintah daerah dan BPBD setempat.',
      'Kepala BMKG menjelaskan bahwa gempa ini terjadi akibat aktivitas tektonik di zona subduksi Sulawesi dan merupakan hal yang normal mengingat posisi geologis wilayah tersebut.'
    ],
    category: 'terkini',
    source: 'Antara News',
    sourceUrl: 'https://www.antaranews.com',
    author: 'Wahyu Hidayat',
    publishedAt: new Date(now - 45 * minute).toISOString(),
    gradient: 'gradient-1',
    readTime: 3,
    tags: ['gempa', 'sulawesi', 'BMKG', 'bencana alam'],
    breaking: true,
  },
  {
    id: 22,
    slug: 'inflasi-juni-terkendali-harga-pangan-stabil',
    title: 'Inflasi Juni 2025 Terkendali di 2,1 Persen, Harga Pangan Relatif Stabil',
    excerpt: 'BPS mencatat inflasi bulan Juni berada pada level 2,1 persen year-on-year, lebih rendah dari konsensus pasar.',
    content: [
      'Badan Pusat Statistik (BPS) melaporkan inflasi Indonesia pada Juni 2025 tercatat sebesar 2,1 persen secara tahunan (year-on-year), lebih rendah dari konsensus pasar yang memperkirakan 2,4 persen.',
      'Kepala BPS menjelaskan bahwa terjaganya inflasi pada level rendah terutama didukung oleh stabilitas harga bahan pangan pokok, khususnya beras, telur, dan minyak goreng.',
      '"Kebijakan pemerintah dalam menjaga pasokan dan distribusi pangan berjalan efektif sehingga tidak terjadi gejolak harga yang berarti," kata Kepala BPS.',
      'Inflasi inti yang menggambarkan tekanan permintaan juga terjaga di level 1,8 persen, menunjukkan bahwa daya beli masyarakat masih dalam kondisi yang terkendali.',
      'Para ekonom menilai rendahnya inflasi memberikan ruang bagi Bank Indonesia untuk mempertimbangkan pelonggaran kebijakan moneter pada semester kedua tahun ini.'
    ],
    category: 'ekonomi',
    source: 'Okezone',
    sourceUrl: 'https://www.okezone.com',
    author: 'Linda Paramita',
    publishedAt: new Date(now - 22 * hour).toISOString(),
    gradient: 'gradient-2',
    readTime: 4,
    tags: ['inflasi', 'BPS', 'pangan', 'ekonomi'],
  },
  {
    id: 23,
    slug: 'series-indonesia-netflix-trending-global',
    title: 'Series Indonesia Menduduki Posisi Trending Nomor 1 di Netflix Global',
    excerpt: 'Sebuah series thriller Indonesia berhasil menempati posisi pertama trending Netflix di lebih dari 40 negara dalam minggu pertama penayangan.',
    content: [
      'Sebuah series thriller Indonesia berhasil mencatatkan prestasi membanggakan dengan menduduki posisi nomor 1 trending Netflix secara global di lebih dari 40 negara.',
      'Series berjudul 8 episode ini mengangkat cerita tentang konspirasi di balik peristiwa misterius di sebuah kota kecil di Jawa yang melibatkan unsur budaya dan mitologi lokal.',
      'Showrunner series ini menyatakan bangga bahwa cerita lokal Indonesia bisa diterima oleh penonton internasional.',
      '"Kami ingin menunjukkan bahwa Indonesia punya cerita yang kuat dan unik. Respons global ini membuktikan bahwa universal storytelling bisa datang dari mana saja," ungkapnya.',
      'Netflix mengonfirmasi bahwa series ini telah ditonton lebih dari 50 juta jam dalam minggu pertama penayangan, menjadikannya series berbahasa non-Inggris terpopuler di platform tersebut tahun ini.'
    ],
    category: 'hiburan',
    source: 'VIVA',
    sourceUrl: 'https://www.viva.co.id',
    author: 'Citra Dewi',
    publishedAt: new Date(now - 23 * hour).toISOString(),
    gradient: 'gradient-3',
    readTime: 3,
    tags: ['Netflix', 'series', 'thriller', 'trending'],
  },
  {
    id: 24,
    slug: 'indonesia-perkuat-kerjasama-pertahanan-australia',
    title: 'Indonesia dan Australia Perkuat Kerja Sama Pertahanan dan Keamanan Maritim',
    excerpt: 'Kedua negara menyepakati peningkatan patroli bersama di perairan perbatasan dan pertukaran informasi intelijen maritim.',
    content: [
      'Indonesia dan Australia menyepakati peningkatan kerja sama pertahanan dan keamanan maritim melalui penandatanganan nota kesepahaman bilateral di Canberra.',
      'Kesepakatan ini mencakup peningkatan frekuensi patroli bersama di perairan perbatasan, pertukaran informasi intelijen maritim, dan latihan militer gabungan yang lebih intensif.',
      'Menteri Pertahanan Indonesia menyatakan bahwa kerja sama ini penting untuk menjaga stabilitas keamanan di kawasan Indo-Pasifik.',
      '"Indonesia dan Australia memiliki kepentingan bersama dalam menjaga keamanan dan stabilitas maritim di kawasan. Kerja sama ini akan saling menguntungkan kedua negara," ujar Menhan.',
      'Kesepakatan juga mencakup program pelatihan dan pertukaran personel militer serta kerja sama dalam penanggulangan bencana alam dan misi kemanusiaan.'
    ],
    category: 'politik',
    source: 'VOA Indonesia',
    sourceUrl: 'https://www.voaindonesia.com',
    author: 'Kapten Andi Kurniawan',
    publishedAt: new Date(now - 24 * hour).toISOString(),
    gradient: 'gradient-4',
    readTime: 4,
    tags: ['pertahanan', 'Australia', 'maritim', 'kerja sama'],
  },
  {
    id: 25,
    slug: 'cuaca-ekstrem-sejumlah-daerah-banjir',
    title: 'BMKG Peringatkan Cuaca Ekstrem di Sejumlah Daerah, Potensi Banjir Tinggi',
    excerpt: 'Badan Meteorologi mengeluarkan peringatan dini cuaca ekstrem untuk wilayah Jawa, Kalimantan, dan Sulawesi dalam sepekan ke depan.',
    content: [
      'Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) mengeluarkan peringatan dini terkait potensi cuaca ekstrem di beberapa wilayah Indonesia dalam sepekan ke depan.',
      'Wilayah yang perlu waspada meliputi sebagian besar Pulau Jawa, Kalimantan Selatan, Kalimantan Timur, dan Sulawesi Selatan, dengan potensi hujan lebat disertai angin kencang dan petir.',
      'BMKG mengimbau masyarakat di wilayah rawan banjir dan longsor untuk meningkatkan kewaspadaan dan mempersiapkan langkah-langkah mitigasi.',
      'Kepala BMKG menjelaskan bahwa cuaca ekstrem ini dipicu oleh fenomena La Niña yang masih berlangsung dan meningkatnya kelembapan udara di atas rata-rata.',
      'BNPB menyatakan telah menyiapkan personel dan logistik bantuan di titik-titik rawan bencana untuk mengantisipasi dampak cuaca buruk.'
    ],
    category: 'terkini',
    source: 'SindoNews',
    sourceUrl: 'https://www.sindonews.com',
    author: 'Rahmat Hidayat',
    publishedAt: new Date(now - 1.5 * hour).toISOString(),
    gradient: 'gradient-5',
    readTime: 3,
    tags: ['cuaca', 'BMKG', 'banjir', 'peringatan dini'],
    breaking: true,
  },
];

export function getArticlesByCategory(slug: string): Article[] {
  if (slug === 'terkini') {
    return [...articles].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }
  return articles.filter(a => a.category === slug || categories.find(c => c.slug === slug)?.id === a.category);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(a => a.featured);
}

export function getBreakingNews(): Article[] {
  return articles.filter(a => a.breaking);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getRelatedArticles(article: Article, limit = 4): Article[] {
  return articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, limit);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.excerpt.toLowerCase().includes(q) ||
    a.tags.some(t => t.toLowerCase().includes(q))
  );
}

export function timeAgo(dateStr: string): string {
  const now2 = Date.now();
  const date = new Date(dateStr).getTime();
  const diff = now2 - date;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Baru saja';
  if (mins < 60) return `${mins} menit lalu`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} jam lalu`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days} hari lalu`;
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getTodayDate(): string {
  return new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
