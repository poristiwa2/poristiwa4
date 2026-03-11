import { categories } from '../data/mockData';

interface StaticPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

function PageWrapper({ title, children, onNavigate }: StaticPageProps & { title: string; children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10">
      <nav className="flex items-center gap-2 mb-6 text-sm">
        <button onClick={() => onNavigate('home')} className="text-gray-400 hover:text-brand">Beranda</button>
        <span className="text-gray-300">/</span>
        <span className="text-gray-600 font-medium">{title}</span>
      </nav>
      <h1 className="text-2xl md:text-3xl font-extrabold text-navy mb-6 font-serif">{title}</h1>
      {children}
    </div>
  );
}

export function AboutPage({ onNavigate }: StaticPageProps) {
  return (
    <PageWrapper title="Tentang Poristiwa" onNavigate={onNavigate}>
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-navy to-navy-light rounded-xl p-6 md:p-8 text-white mb-8">
          <h2 className="text-xl md:text-2xl font-extrabold mb-3 text-white">Misi Kami</h2>
          <p className="text-gray-200 leading-relaxed">
            Poristiwa hadir sebagai portal berita digital yang berkomitmen menyajikan informasi terkini, akurat, dan berimbang untuk masyarakat Indonesia. 
            Kami percaya bahwa akses terhadap informasi berkualitas adalah hak setiap warga negara.
          </p>
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Poristiwa.my.id</strong> didirikan dengan visi menjadi portal berita terdepan yang mengutamakan integritas jurnalistik dan kepercayaan pembaca. 
          Kami mengkurasi berita dari berbagai sumber tepercaya Indonesia untuk memberikan perspektif yang komprehensif kepada pembaca.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nama "Poristiwa" terinspirasi dari kata "peristiwa" — karena kami percaya setiap peristiwa memiliki cerita yang layak diceritakan dengan jujur dan bertanggung jawab. 
          Tim redaksi kami bekerja 24/7 untuk memastikan setiap berita yang kami sajikan telah melalui proses verifikasi yang ketat.
        </p>
        
        <h3 className="text-xl font-bold text-navy mt-8 mb-4">Nilai-Nilai Kami</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-8">
          {[
            { title: 'Akurasi', desc: 'Setiap berita diverifikasi melalui minimal dua sumber independen sebelum dipublikasikan.', icon: '✓' },
            { title: 'Independen', desc: 'Redaksi kami bebas dari kepentingan politik dan komersial dalam pemberitaan.', icon: '⚖' },
            { title: 'Transparan', desc: 'Kami selalu mencantumkan sumber berita dan terbuka terhadap koreksi.', icon: '🔍' },
            { title: 'Bertanggung Jawab', desc: 'Kami mematuhi Kode Etik Jurnalistik dan Pedoman Media Siber.', icon: '📋' },
          ].map(v => (
            <div key={v.title} className="bg-white rounded-lg border border-gray-100 p-4">
              <div className="text-2xl mb-2">{v.icon}</div>
              <h4 className="font-bold text-navy mb-1">{v.title}</h4>
              <p className="text-sm text-gray-500">{v.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-navy mt-8 mb-4">Keanggotaan & Sertifikasi</h3>
        <ul className="text-gray-700 space-y-2 mb-6">
          <li>• Terdaftar di Dewan Pers Indonesia</li>
          <li>• Mematuhi Kode Etik Jurnalistik Indonesia</li>
          <li>• Mengikuti Pedoman Pemberitaan Media Siber</li>
          <li>• Berkomitmen pada prinsip jurnalisme yang bertanggung jawab</li>
        </ul>
      </div>
    </PageWrapper>
  );
}

export function RedaksiPage({ onNavigate }: StaticPageProps) {
  const team = [
    { name: 'Andi Prasetyo', role: 'Pemimpin Redaksi', desc: 'Jurnalis senior dengan 15 tahun pengalaman di media nasional.' },
    { name: 'Siti Nurhaliza', role: 'Wakil Pemimpin Redaksi', desc: 'Mantan koresponden internasional dengan spesialisasi politik dan ekonomi.' },
    { name: 'Budi Hartanto', role: 'Redaktur Pelaksana', desc: 'Pakar media digital dengan pengalaman di berbagai redaksi besar.' },
    { name: 'Ratna Dewi', role: 'Koordinator Liputan', desc: 'Spesialis jurnalisme investigasi dan data.' },
    { name: 'Fajar Ramadhan', role: 'Editor Teknologi & Sains', desc: 'Lulusan S2 Teknik Informatika dengan passion di tech journalism.' },
    { name: 'Diana Putri', role: 'Editor Gaya Hidup & Budaya', desc: 'Content strategist berpengalaman 8 tahun di media lifestyle.' },
  ];

  return (
    <PageWrapper title="Dewan Redaksi" onNavigate={onNavigate}>
      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
        Dewan Redaksi Poristiwa terdiri dari profesional media berpengalaman yang berkomitmen pada jurnalisme berkualitas tinggi.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {team.map(member => (
          <div key={member.name} className="bg-white rounded-xl border border-gray-100 p-5 flex gap-4 items-start">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand to-red-400 flex items-center justify-center text-white font-bold text-lg shrink-0">
              {member.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-navy">{member.name}</h3>
              <p className="text-sm text-brand font-medium">{member.role}</p>
              <p className="text-sm text-gray-500 mt-1">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

export function ContactPage({ onNavigate }: StaticPageProps) {
  return (
    <PageWrapper title="Hubungi Kami" onNavigate={onNavigate}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Kami senang mendengar dari Anda. Kirimkan pertanyaan, masukan, atau informasi melalui formulir di bawah ini atau hubungi kami melalui kontak yang tersedia.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-brand mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h4 className="font-semibold text-navy text-sm">Email</h4>
                <p className="text-sm text-gray-500">redaksi@poristiwa.my.id</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-brand mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h4 className="font-semibold text-navy text-sm">Alamat Redaksi</h4>
                <p className="text-sm text-gray-500">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-100 rounded-xl">
            <h4 className="font-bold text-yellow-800 text-sm mb-1">📢 Kirim Informasi / Laporan</h4>
            <p className="text-xs text-yellow-700">
              Punya informasi berita atau ingin melaporkan kesalahan? Hubungi redaksi kami di <span className="font-semibold">tips@poristiwa.my.id</span>
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="font-bold text-navy mb-4">Kirim Pesan</h3>
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand" placeholder="Nama lengkap" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand" placeholder="email@contoh.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand bg-white">
                <option>Pertanyaan Umum</option>
                <option>Laporan Koreksi</option>
                <option>Kerja Sama</option>
                <option>Kirim Informasi</option>
                <option>Lainnya</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
              <textarea rows={4} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand resize-none" placeholder="Tulis pesan Anda..." />
            </div>
            <button type="submit" className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-2.5 rounded-lg transition text-sm">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}

export function PrivacyPage({ onNavigate }: StaticPageProps) {
  return (
    <PageWrapper title="Kebijakan Privasi" onNavigate={onNavigate}>
      <div className="prose max-w-none text-gray-700">
        <p className="text-sm text-gray-400 mb-6">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        
        <h3 className="text-lg font-bold text-navy">1. Informasi yang Kami Kumpulkan</h3>
        <p className="mb-4">Poristiwa.my.id mengumpulkan informasi yang Anda berikan secara sukarela, seperti nama dan alamat email saat berlangganan newsletter atau menghubungi kami. Kami juga mengumpulkan data teknis secara otomatis seperti alamat IP, jenis browser, dan halaman yang dikunjungi untuk meningkatkan layanan.</p>
        
        <h3 className="text-lg font-bold text-navy">2. Penggunaan Informasi</h3>
        <p className="mb-4">Informasi yang dikumpulkan digunakan untuk menyediakan dan meningkatkan layanan, mengirimkan newsletter (jika berlangganan), merespons pertanyaan, dan menganalisis tren penggunaan situs.</p>
        
        <h3 className="text-lg font-bold text-navy">3. Cookie dan Teknologi Pelacakan</h3>
        <p className="mb-4">Kami menggunakan cookie dan teknologi serupa untuk meningkatkan pengalaman pengguna, menganalisis trafik, dan menampilkan iklan yang relevan. Anda dapat mengatur preferensi cookie melalui pengaturan browser.</p>
        
        <h3 className="text-lg font-bold text-navy">4. Iklan Pihak Ketiga</h3>
        <p className="mb-4">Situs kami menampilkan iklan dari jaringan periklanan pihak ketiga. Penyedia iklan ini mungkin menggunakan cookie untuk menampilkan iklan berdasarkan kunjungan Anda ke situs ini dan situs lainnya.</p>
        
        <h3 className="text-lg font-bold text-navy">5. Keamanan Data</h3>
        <p className="mb-4">Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda dari akses tidak sah, perubahan, atau penghapusan.</p>
        
        <h3 className="text-lg font-bold text-navy">6. Hak Pengguna</h3>
        <p className="mb-4">Anda memiliki hak untuk mengakses, memperbarui, atau menghapus informasi pribadi Anda. Hubungi kami di privasi@poristiwa.my.id untuk permintaan terkait data pribadi.</p>
        
        <h3 className="text-lg font-bold text-navy">7. Perubahan Kebijakan</h3>
        <p className="mb-4">Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan dipublikasikan di halaman ini dengan tanggal pembaruan terbaru.</p>
      </div>
    </PageWrapper>
  );
}

export function PedomanPage({ onNavigate }: StaticPageProps) {
  return (
    <PageWrapper title="Pedoman Media Siber" onNavigate={onNavigate}>
      <div className="prose max-w-none text-gray-700">
        <p className="mb-4">Poristiwa.my.id berkomitmen untuk mematuhi Pedoman Pemberitaan Media Siber yang ditetapkan oleh Dewan Pers Indonesia.</p>
        
        <h3 className="text-lg font-bold text-navy">Verifikasi dan Keberimbangan</h3>
        <p className="mb-4">Setiap berita yang dipublikasikan telah melalui proses verifikasi. Kami mengutamakan keberimbangan dalam pemberitaan dengan menyajikan berbagai sudut pandang yang relevan.</p>
        
        <h3 className="text-lg font-bold text-navy">Hak Jawab</h3>
        <p className="mb-4">Pihak yang merasa dirugikan oleh pemberitaan di Poristiwa berhak mengajukan hak jawab. Permintaan hak jawab dapat dikirimkan ke redaksi@poristiwa.my.id dan akan diproses dalam waktu maksimal 2x24 jam.</p>
        
        <h3 className="text-lg font-bold text-navy">Ralat dan Koreksi</h3>
        <p className="mb-4">Apabila terdapat kesalahan dalam pemberitaan, kami akan segera melakukan koreksi dan mencantumkan keterangan ralat pada berita yang bersangkutan.</p>
        
        <h3 className="text-lg font-bold text-navy">Pencantuman Sumber</h3>
        <p className="mb-4">Kami selalu mencantumkan sumber berita dan memberikan atribusi yang tepat kepada pemilik konten asli. Setiap kutipan dan referensi disertai dengan informasi sumber yang jelas.</p>
        
        <h3 className="text-lg font-bold text-navy">Perlindungan Privasi</h3>
        <p className="mb-4">Kami menghormati privasi narasumber dan subjek berita sesuai dengan ketentuan yang berlaku dalam Kode Etik Jurnalistik.</p>
      </div>
    </PageWrapper>
  );
}

export function SitemapPage({ onNavigate }: StaticPageProps) {
  return (
    <PageWrapper title="Peta Situs" onNavigate={onNavigate}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-navy mb-3 text-lg">Halaman Utama</h3>
          <ul className="space-y-2">
            <li><button onClick={() => onNavigate('home')} className="text-brand hover:underline text-sm">Beranda</button></li>
            <li><button onClick={() => onNavigate('tentang')} className="text-brand hover:underline text-sm">Tentang Kami</button></li>
            <li><button onClick={() => onNavigate('redaksi')} className="text-brand hover:underline text-sm">Dewan Redaksi</button></li>
            <li><button onClick={() => onNavigate('kontak')} className="text-brand hover:underline text-sm">Hubungi Kami</button></li>
            <li><button onClick={() => onNavigate('privasi')} className="text-brand hover:underline text-sm">Kebijakan Privasi</button></li>
            <li><button onClick={() => onNavigate('pedoman')} className="text-brand hover:underline text-sm">Pedoman Media Siber</button></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-navy mb-3 text-lg">Kategori Berita</h3>
          <ul className="space-y-2">
            {categories.map(cat => (
              <li key={cat.id}>
                <button
                  onClick={() => onNavigate('category', { slug: cat.slug })}
                  className="text-brand hover:underline text-sm flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-navy mb-3 text-lg">Informasi</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>RSS Feed tersedia untuk semua kategori</li>
            <li>Sitemap XML: /sitemap.xml</li>
            <li>Format berita sesuai standar Google News</li>
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}
