import { useState, useEffect, useCallback, Component } from 'react';
import type { ReactNode } from 'react';
import {
  articles, categories, getByCategory, getBySlug, getRelated,
  searchArticles, formatDate, todayStr
} from './data/mockData';
import AdSlot from './components/AdSlot';
import Card from './components/Card';

type Nav = (page: string, params?: Record<string, string>) => void;

/* Error Boundary */
class ErrorBoundary extends Component<{ children: ReactNode }, { error: string | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { error: error.message };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h1 style={{ color: '#dc2626' }}>Terjadi Kesalahan</h1>
          <p style={{ color: '#666' }}>{this.state.error}</p>
          <button onClick={() => { window.location.hash = '#/'; window.location.reload(); }}
            style={{ marginTop: 16, padding: '8px 24px', background: '#dc2626', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
            Kembali ke Beranda
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

/* Route parser */
function parseHash(h: string) {
  const c = h.replace(/^#\/?/, '');
  if (!c) return { page: 'home' as const, p: '' };
  const slash = c.indexOf('/');
  if (slash === -1) return { page: c, p: '' };
  return { page: c.substring(0, slash), p: c.substring(slash + 1) };
}

/* Section heading */
function SectionHead({ title, color, action, onAction }: { title: string; color?: string; action?: string; onAction?: () => void }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 flex items-center gap-2">
        <span className="w-1 h-6 rounded-full" style={{ backgroundColor: color || '#dc2626' }} />
        {title}
      </h2>
      {action && onAction && (
        <button onClick={onAction} className="text-sm text-red-600 font-semibold hover:underline">{action} &rarr;</button>
      )}
    </div>
  );
}

/* Header */
function Header({ nav, currentPage }: { nav: Nav; currentPage: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const breaking = articles.filter(a => a.breaking);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const doSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQ.trim();
    if (q) {
      nav('cari', { slug: encodeURIComponent(q) });
      setSearchOpen(false);
      setSearchQ('');
    }
  };

  const go = (page: string, params?: Record<string, string>) => {
    nav(page, params);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="bg-gray-900 text-white text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-8">
          <span>{todayStr()}</span>
          <div className="flex items-center gap-4">
            <button onClick={() => go('tentang')} className="hover:text-red-400 transition">Tentang</button>
            <button onClick={() => go('redaksi')} className="hover:text-red-400 transition">Redaksi</button>
            <button onClick={() => go('kontak')} className="hover:text-red-400 transition">Kontak</button>
          </div>
        </div>
      </div>
      <header className={"sticky top-0 z-50 transition-shadow duration-300 bg-white " + (scrolled ? "shadow-lg" : "shadow-sm")}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 -ml-2 text-gray-700" aria-label="Menu">
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
            <button onClick={() => go('home')} className="flex items-center gap-1.5">
              <div className="w-8 h-8 md:w-9 md:h-9 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg md:text-xl">P</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg md:text-xl font-black tracking-tight text-gray-900">PORI<span className="text-red-600">STIWA</span></span>
                <span className="text-[8px] md:text-[9px] text-gray-400 tracking-[0.2em] uppercase hidden sm:block">Portal Berita Terkini</span>
              </div>
            </button>
            <nav className="hidden md:flex items-center gap-1">
              {categories.slice(0, 8).map(cat => (
                <button key={cat.id} onClick={() => go('kategori', { slug: cat.slug })}
                  className={"px-2.5 py-1.5 text-sm font-medium transition rounded-md hover:bg-gray-50 " + (currentPage === 'kat-' + cat.slug ? "text-red-600" : "text-gray-700")}>
                  {cat.name}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              {searchOpen ? (
                <form onSubmit={doSearch} className="flex items-center">
                  <input type="text" value={searchQ} onChange={e => setSearchQ(e.target.value)} placeholder="Cari berita..."
                    className="w-40 md:w-56 px-3 py-1.5 text-sm border border-gray-200 rounded-l-lg focus:outline-none focus:border-red-500" autoFocus />
                  <button type="submit" className="px-3 py-1.5 bg-red-600 text-white rounded-r-lg text-sm">Cari</button>
                  <button type="button" onClick={() => { setSearchOpen(false); setSearchQ(''); }} className="ml-1 p-1.5 text-gray-400 text-lg">x</button>
                </form>
              ) : (
                <button onClick={() => setSearchOpen(true)} className="p-2 text-gray-600 hover:text-red-600 transition" aria-label="Cari">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
              )}
            </div>
          </div>
        </div>
        {breaking.length > 0 && (
          <div className="bg-red-600 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto flex items-center">
              <div className="bg-red-700 px-3 py-1.5 text-xs font-bold uppercase tracking-wider shrink-0 flex items-center gap-1.5">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />Breaking
              </div>
              <div className="overflow-hidden flex-1">
                <div className="ticker-animate flex whitespace-nowrap py-1.5">
                  {[...breaking, ...breaking].map((a, i) => (
                    <button key={String(a.id) + '-' + String(i)} onClick={() => go('artikel', { slug: a.slug })} className="text-xs font-medium mx-8 hover:underline cursor-pointer">{a.title}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl overflow-y-auto">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <span className="text-lg font-black text-gray-900">PORI<span className="text-red-600">STIWA</span></span>
              <button onClick={() => setMenuOpen(false)} className="p-1 text-gray-400 text-lg">x</button>
            </div>
            <nav className="py-2">
              <button onClick={() => go('home')} className="block w-full text-left px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 border-b border-gray-50">Beranda</button>
              {categories.map(cat => (
                <button key={cat.id} onClick={() => go('kategori', { slug: cat.slug })} className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 border-b border-gray-50">
                  <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: cat.color }} />{cat.name}
                </button>
              ))}
            </nav>
            <div className="p-4 border-t border-gray-100 space-y-2">
              <button onClick={() => go('tentang')} className="block text-sm text-gray-500 hover:text-red-600">Tentang Kami</button>
              <button onClick={() => go('redaksi')} className="block text-sm text-gray-500 hover:text-red-600">Redaksi</button>
              <button onClick={() => go('kontak')} className="block text-sm text-gray-500 hover:text-red-600">Kontak</button>
              <button onClick={() => go('privasi')} className="block text-sm text-gray-500 hover:text-red-600">Kebijakan Privasi</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* Footer */
function Footer({ nav }: { nav: Nav }) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <button onClick={() => nav('home')} className="flex items-center gap-1.5 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">P</span>
              </div>
              <span className="text-lg font-black tracking-tight text-white">PORI<span className="text-red-600">STIWA</span></span>
            </button>
            <p className="text-sm text-gray-400 leading-relaxed">Portal berita terkini, terpercaya, dan terlengkap. Menyajikan informasi dari berbagai sumber tepercaya Indonesia.</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Kategori</h4>
            <ul className="space-y-2">
              {categories.slice(0, 6).map(cat => (
                <li key={cat.id}><button onClick={() => nav('kategori', { slug: cat.slug })} className="text-sm text-gray-400 hover:text-white transition">{cat.name}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Lainnya</h4>
            <ul className="space-y-2">
              {categories.slice(6).map(cat => (
                <li key={cat.id}><button onClick={() => nav('kategori', { slug: cat.slug })} className="text-sm text-gray-400 hover:text-white transition">{cat.name}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Informasi</h4>
            <ul className="space-y-2">
              <li><button onClick={() => nav('tentang')} className="text-sm text-gray-400 hover:text-white transition">Tentang Kami</button></li>
              <li><button onClick={() => nav('redaksi')} className="text-sm text-gray-400 hover:text-white transition">Dewan Redaksi</button></li>
              <li><button onClick={() => nav('kontak')} className="text-sm text-gray-400 hover:text-white transition">Hubungi Kami</button></li>
              <li><button onClick={() => nav('privasi')} className="text-sm text-gray-400 hover:text-white transition">Kebijakan Privasi</button></li>
              <li><button onClick={() => nav('pedoman')} className="text-sm text-gray-400 hover:text-white transition">Pedoman Media Siber</button></li>
              <li><button onClick={() => nav('peta-situs')} className="text-sm text-gray-400 hover:text-white transition">Peta Situs</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">&copy; 2025 Poristiwa.my.id &mdash; Seluruh hak cipta dilindungi.</p>
          <p className="text-xs text-gray-500">Anggota Dewan Pers Indonesia</p>
        </div>
      </div>
    </footer>
  );
}

/* HOME */
function HomePage({ nav }: { nav: Nav }) {
  const featured = articles.filter(a => a.featured);
  const latest = articles.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const trending = articles.slice(0, 8);

  const catSections = ['politik', 'ekonomi', 'teknologi', 'olahraga'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {featured.length > 0 && (
        <section className="mb-8">
          <Card a={featured[0]} variant="hero" nav={nav} />
        </section>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <SectionHead title="Berita Terbaru" action="Lihat Semua" onAction={() => nav('kategori', { slug: 'terkini' })} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {latest.slice(0, 6).map(a => (
              <Card key={a.id} a={a} nav={nav} />
            ))}
          </div>
          <AdSlot zone="6851037" className="my-6" />
          {catSections.map(catId => {
            const cat = categories.find(c => c.id === catId);
            if (!cat) return null;
            const catArticles = articles.filter(a => a.category === catId).slice(0, 4);
            if (catArticles.length === 0) return null;
            return (
              <section key={catId} className="mb-8">
                <SectionHead title={cat.name} color={cat.color} action="Selengkapnya" onAction={() => nav('kategori', { slug: cat.slug })} />
                <div className="space-y-0">
                  {catArticles.map(a => (
                    <Card key={a.id} a={a} variant="horizontal" nav={nav} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        <aside className="space-y-6">
          <AdSlot zone="6850989" />
          <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <h3 className="text-lg font-extrabold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-red-600" />Trending
            </h3>
            {trending.slice(0, 5).map((a, i) => (
              <div key={a.id} className="group cursor-pointer flex gap-3 py-3 border-b border-gray-50 last:border-0" onClick={() => nav('artikel', { slug: a.slug })}>
                <span className="text-2xl font-black text-gray-200 w-8 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition line-clamp-2 leading-snug">{a.title}</h4>
              </div>
            ))}
          </div>
          <AdSlot zone="6851005" />
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 text-white">
            <h3 className="font-bold text-lg mb-2">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">Dapatkan berita terbaru langsung di inbox Anda.</p>
            <input type="email" placeholder="Email Anda" className="w-full px-3 py-2 rounded-lg text-sm text-gray-900 mb-2" />
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition text-sm">Berlangganan</button>
          </div>
          <AdSlot zone="6851061" />
        </aside>
      </div>
    </div>
  );
}

/* CATEGORY PAGE */
function CategoryPage({ slug, nav }: { slug: string; nav: Nav }) {
  const cat = categories.find(c => c.slug === slug);
  const catArticles = getByCategory(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-6">
        <button onClick={() => nav('home')} className="text-sm text-gray-400 hover:text-red-600">Beranda</button>
        <span className="text-gray-300 mx-2">/</span>
        <span className="text-sm text-gray-500">{cat ? cat.name : slug}</span>
      </div>
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">{cat ? cat.name : slug}</h1>
      {cat && <p className="text-gray-500 mb-6">{cat.desc}</p>}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {catArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {catArticles.map(a => (
                <Card key={a.id} a={a} nav={nav} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg font-bold text-gray-400 mb-2">Belum ada berita</p>
              <p className="text-sm text-gray-400">Berita untuk kategori ini segera hadir.</p>
            </div>
          )}
        </div>
        <aside className="space-y-6">
          <AdSlot zone="6850989" />
          <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Kategori Lain</h3>
            <div className="space-y-1">
              {categories.filter(c => c.slug !== slug).map(c => (
                <button key={c.id} onClick={() => nav('kategori', { slug: c.slug })}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-red-600 rounded-md transition">
                  <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: c.color }} />{c.name}
                </button>
              ))}
            </div>
          </div>
          <AdSlot zone="6851061" />
        </aside>
      </div>
    </div>
  );
}

/* ARTICLE PAGE */
function ArticlePage({ slug, nav }: { slug: string; nav: Nav }) {
  const a = getBySlug(slug);
  if (!a) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-400 mb-4">Artikel tidak ditemukan</h1>
        <button onClick={() => nav('home')} className="text-red-600 font-semibold hover:underline">Kembali ke Beranda</button>
      </div>
    );
  }

  const cat = categories.find(c => c.id === a.category);
  const related = getRelated(a);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-4 text-sm">
        <button onClick={() => nav('home')} className="text-gray-400 hover:text-red-600">Beranda</button>
        <span className="text-gray-300 mx-2">/</span>
        {cat && (
          <>
            <button onClick={() => nav('kategori', { slug: cat.slug })} className="hover:text-red-600" style={{ color: cat.color }}>{cat.name}</button>
            <span className="text-gray-300 mx-2">/</span>
          </>
        )}
        <span className="text-gray-400 line-clamp-1">{a.title.substring(0, 40)}...</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2">
          {cat && <span className="inline-block px-2.5 py-1 text-xs font-bold text-white rounded-md mb-3" style={{ backgroundColor: cat.color }}>{cat.name}</span>}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">{a.title}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm text-gray-500 border-b border-gray-100 pb-4">
            <span className="font-semibold text-gray-700">{a.author}</span>
            <span className="text-gray-300">|</span>
            <span>{formatDate(a.date)}</span>
            <span className="text-gray-300">|</span>
            <span>{a.readTime} menit baca</span>
          </div>
          <div className={a.gradient + " aspect-video rounded-xl mb-6 relative"}>
            <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded">Sumber: {a.source}</div>
          </div>
          <div className="mb-8">
            <p className="text-lg font-semibold text-gray-700 leading-relaxed mb-4">{a.excerpt}</p>
            {a.body.map((p, i) => (
              <div key={i}>
                <p className="text-gray-700 leading-relaxed mb-4">{p}</p>
                {i === 1 && <AdSlot zone="6851037" className="my-6" />}
              </div>
            ))}
          </div>
          <div className="bg-gray-50 rounded-xl p-4 mb-6 flex items-center gap-3">
            <span className="text-red-600 text-lg">&#128279;</span>
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-wider block">Sumber</span>
              <a href={a.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-red-600 hover:underline">{a.source}</a>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {a.tags.map(t => (
              <button key={t} onClick={() => nav('cari', { slug: encodeURIComponent(t) })} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full hover:bg-red-600 hover:text-white transition">#{t}</button>
            ))}
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-5 mb-8 flex gap-4 items-start">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-400 flex items-center justify-center text-white font-bold text-lg shrink-0">{a.author.charAt(0)}</div>
            <div>
              <h4 className="font-bold text-gray-900">{a.author}</h4>
              <p className="text-xs text-gray-400 mb-2">Kontributor &mdash; {a.source}</p>
              <p className="text-sm text-gray-500">Kontributor aktif yang fokus pada liputan {cat ? cat.name.toLowerCase() : 'berita'} dengan pengalaman jurnalisme profesional.</p>
            </div>
          </div>
          {related.length > 0 && (
            <section>
              <SectionHead title="Berita Terkait" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map(r => <Card key={r.id} a={r} nav={nav} />)}
              </div>
            </section>
          )}
        </article>
        <aside className="space-y-6">
          <AdSlot zone="6850989" />
          <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <h3 className="text-lg font-extrabold text-gray-900 mb-4">Berita Populer</h3>
            {articles.slice(0, 5).map(r => <Card key={r.id} a={r} variant="compact" nav={nav} />)}
          </div>
          <div className="sticky top-20 space-y-6">
            <AdSlot zone="6851005" />
            <AdSlot zone="6851061" />
          </div>
        </aside>
      </div>
    </div>
  );
}

/* SEARCH PAGE */
function SearchPage({ query, nav }: { query: string; nav: Nav }) {
  const results = searchArticles(query);
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10">
      <button onClick={() => nav('home')} className="text-sm text-gray-400 hover:text-red-600 mb-4 block">&#8592; Beranda</button>
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Hasil Pencarian</h1>
      <p className="text-gray-500 mb-6">{results.length} hasil untuk "{query}"</p>
      {results.length > 0 ? (
        results.map(a => <Card key={a.id} a={a} variant="horizontal" nav={nav} />)
      ) : (
        <div className="text-center py-16">
          <p className="text-lg font-bold text-gray-400 mb-2">Tidak ada hasil</p>
          <p className="text-sm text-gray-400">Coba kata kunci lain.</p>
        </div>
      )}
    </div>
  );
}

/* STATIC PAGES */
function StaticPage({ title, nav, children }: { title: string; nav: Nav; children: ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10">
      <button onClick={() => nav('home')} className="text-sm text-gray-400 hover:text-red-600 mb-4 block">&#8592; Beranda</button>
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">{title}</h1>
      {children}
    </div>
  );
}

function AboutPage({ nav }: { nav: Nav }) {
  return (
    <StaticPage title="Tentang Poristiwa" nav={nav}>
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 md:p-8 text-white mb-8">
        <h2 className="text-xl font-extrabold mb-3 text-white">Misi Kami</h2>
        <p className="text-gray-200 leading-relaxed">Poristiwa hadir sebagai portal berita digital yang berkomitmen menyajikan informasi terkini, akurat, dan berimbang untuk masyarakat Indonesia.</p>
      </div>
      <div className="text-gray-700 space-y-4">
        <p><strong>Poristiwa.my.id</strong> didirikan dengan visi menjadi portal berita terdepan yang mengutamakan integritas jurnalistik.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8">Nilai-Nilai Kami</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { t: 'Akurasi', d: 'Setiap berita diverifikasi melalui minimal dua sumber independen.' },
            { t: 'Independen', d: 'Redaksi bebas dari kepentingan politik dan komersial.' },
            { t: 'Transparan', d: 'Kami selalu mencantumkan sumber berita dan terbuka terhadap koreksi.' },
            { t: 'Bertanggung Jawab', d: 'Kami mematuhi Kode Etik Jurnalistik dan Pedoman Media Siber.' },
          ].map(v => (
            <div key={v.t} className="bg-white rounded-lg border border-gray-100 p-4">
              <h4 className="font-bold text-gray-900 mb-1">{v.t}</h4>
              <p className="text-sm text-gray-500">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </StaticPage>
  );
}

function RedaksiPage({ nav }: { nav: Nav }) {
  const team = [
    { name: 'Andi Prasetyo', role: 'Pemimpin Redaksi', desc: 'Jurnalis senior dengan 15 tahun pengalaman.' },
    { name: 'Siti Nurhaliza', role: 'Wakil Pemimpin Redaksi', desc: 'Mantan koresponden internasional.' },
    { name: 'Budi Hartanto', role: 'Redaktur Pelaksana', desc: 'Pakar media digital berpengalaman.' },
    { name: 'Ratna Dewi', role: 'Koordinator Liputan', desc: 'Spesialis jurnalisme investigasi.' },
    { name: 'Fajar Ramadhan', role: 'Editor Teknologi', desc: 'Tech journalist berpengalaman.' },
    { name: 'Diana Putri', role: 'Editor Gaya Hidup', desc: 'Content strategist 8 tahun.' },
  ];
  return (
    <StaticPage title="Dewan Redaksi" nav={nav}>
      <p className="text-gray-600 mb-8 text-lg">Dewan Redaksi Poristiwa terdiri dari profesional media berpengalaman.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {team.map(m => (
          <div key={m.name} className="bg-white rounded-xl border border-gray-100 p-5 flex gap-4 items-start">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-400 flex items-center justify-center text-white font-bold text-lg shrink-0">{m.name.charAt(0)}</div>
            <div>
              <h3 className="font-bold text-gray-900">{m.name}</h3>
              <p className="text-sm text-red-600 font-medium">{m.role}</p>
              <p className="text-sm text-gray-500 mt-1">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </StaticPage>
  );
}

function ContactPage({ nav }: { nav: Nav }) {
  return (
    <StaticPage title="Hubungi Kami" nav={nav}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600 mb-6">Kirimkan pertanyaan, masukan, atau informasi melalui formulir ini.</p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-red-600">&#9993;</span>
              <div><h4 className="font-semibold text-gray-900 text-sm">Email</h4><p className="text-sm text-gray-500">redaksi@poristiwa.my.id</p></div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-600">&#128205;</span>
              <div><h4 className="font-semibold text-gray-900 text-sm">Alamat Redaksi</h4><p className="text-sm text-gray-500">Jakarta, Indonesia</p></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="font-bold text-gray-900 mb-4">Kirim Pesan</h3>
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Nama</label><input type="text" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label><textarea rows={4} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500 resize-none" /></div>
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition text-sm">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </StaticPage>
  );
}

function PrivacyPage({ nav }: { nav: Nav }) {
  const sections = [
    ['1. Informasi yang Kami Kumpulkan', 'Kami mengumpulkan informasi yang Anda berikan sukarela seperti nama dan email saat berlangganan newsletter.'],
    ['2. Penggunaan Informasi', 'Informasi digunakan untuk meningkatkan layanan, mengirimkan newsletter, dan menganalisis tren penggunaan.'],
    ['3. Cookie', 'Kami menggunakan cookie untuk meningkatkan pengalaman pengguna dan menampilkan iklan yang relevan.'],
    ['4. Iklan Pihak Ketiga', 'Situs kami menampilkan iklan dari jaringan pihak ketiga yang mungkin menggunakan cookie.'],
    ['5. Keamanan Data', 'Kami menerapkan langkah keamanan yang wajar untuk melindungi informasi pribadi Anda.'],
    ['6. Hak Pengguna', 'Anda berhak mengakses, memperbarui, atau menghapus data pribadi Anda.'],
  ];
  return (
    <StaticPage title="Kebijakan Privasi" nav={nav}>
      <div className="text-gray-700 space-y-4">
        {sections.map(([t, d]) => (
          <div key={t}><h3 className="text-lg font-bold text-gray-900">{t}</h3><p>{d}</p></div>
        ))}
      </div>
    </StaticPage>
  );
}

function PedomanPage({ nav }: { nav: Nav }) {
  const sections = [
    ['Verifikasi dan Keberimbangan', 'Setiap berita melalui proses verifikasi. Kami mengutamakan keberimbangan dengan menyajikan berbagai sudut pandang.'],
    ['Hak Jawab', 'Pihak yang dirugikan berhak mengajukan hak jawab ke redaksi@poristiwa.my.id (diproses maks 2x24 jam).'],
    ['Ralat dan Koreksi', 'Kesalahan pemberitaan akan segera dikoreksi dan diberi keterangan ralat.'],
    ['Pencantuman Sumber', 'Kami selalu mencantumkan sumber berita dan memberikan atribusi yang tepat.'],
  ];
  return (
    <StaticPage title="Pedoman Media Siber" nav={nav}>
      <p className="text-gray-600 mb-6">Poristiwa.my.id berkomitmen mematuhi Pedoman Pemberitaan Media Siber yang ditetapkan Dewan Pers Indonesia.</p>
      <div className="text-gray-700 space-y-4">
        {sections.map(([t, d]) => (
          <div key={t}><h3 className="text-lg font-bold text-gray-900">{t}</h3><p>{d}</p></div>
        ))}
      </div>
    </StaticPage>
  );
}

function SitemapPage({ nav }: { nav: Nav }) {
  return (
    <StaticPage title="Peta Situs" nav={nav}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-gray-900 mb-3 text-lg">Halaman Utama</h3>
          <ul className="space-y-2">
            {[['Beranda', 'home'], ['Tentang', 'tentang'], ['Redaksi', 'redaksi'], ['Kontak', 'kontak'], ['Privasi', 'privasi'], ['Pedoman', 'pedoman']].map(([l, p]) => (
              <li key={p}><button onClick={() => nav(p)} className="text-red-600 hover:underline text-sm">{l}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-3 text-lg">Kategori</h3>
          <ul className="space-y-2">
            {categories.map(cat => (
              <li key={cat.id}><button onClick={() => nav('kategori', { slug: cat.slug })} className="text-red-600 hover:underline text-sm flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />{cat.name}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-3 text-lg">Informasi</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>RSS Feed tersedia</li>
            <li>Sitemap XML: /sitemap.xml</li>
            <li>Format berita standar Google News</li>
          </ul>
        </div>
      </div>
    </StaticPage>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• APP â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
export default function App() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));

  useEffect(() => {
    const fn = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', fn);
    return () => window.removeEventListener('hashchange', fn);
  }, []);

  const nav = useCallback<Nav>((page, params) => {
    let hash = '#/';
    if (page === 'kategori') hash = '#/kategori/' + (params?.slug || '');
    else if (page === 'artikel') hash = '#/artikel/' + (params?.slug || '');
    else if (page === 'cari') hash = '#/cari/' + (params?.slug || '');
    else if (page !== 'home') hash = '#/' + page;
    window.location.hash = hash;
  }, []);

  const renderPage = () => {
    const { page, p } = route;
    switch (page) {
      case 'home': return <HomePage nav={nav} />;
      case 'kategori': return <CategoryPage slug={p} nav={nav} />;
      case 'artikel': return <ArticlePage slug={p} nav={nav} />;
      case 'cari': return <SearchPage query={decodeURIComponent(p)} nav={nav} />;
      case 'tentang': return <AboutPage nav={nav} />;
      case 'redaksi': return <RedaksiPage nav={nav} />;
      case 'kontak': return <ContactPage nav={nav} />;
      case 'privasi': return <PrivacyPage nav={nav} />;
      case 'pedoman': return <PedomanPage nav={nav} />;
      case 'peta-situs': return <SitemapPage nav={nav} />;
      default: return <HomePage nav={nav} />;
    }
  };

  const pageKey = route.page + '-' + route.p;
  const currentNav = route.page === 'kategori' ? 'kat-' + route.p : route.page;

  const bottomItems = [
    { label: 'Beranda', page: 'home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { label: 'Terkini', page: 'kategori', slug: 'terkini', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { label: 'Tekno', page: 'kategori', slug: 'teknologi', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { label: 'Sport', page: 'kategori', slug: 'olahraga', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Info', page: 'tentang', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  ];

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header nav={nav} currentPage={currentNav} />
        <main className="flex-1" key={pageKey}>
          {renderPage()}
        </main>
        <Footer nav={nav} />
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-bottom">
          <div className="flex items-center justify-around h-14">
            {bottomItems.map(b => {
              const isActive = b.slug
                ? (route.page === 'kategori' && route.p === b.slug)
                : route.page === b.page;
              return (
                <button key={b.label}
                  onClick={() => nav(b.page, b.slug ? { slug: b.slug } : undefined)}
                  className={"flex flex-col items-center justify-center gap-0.5 w-16 py-1 " + (isActive ? "text-red-600" : "text-gray-400")}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={b.icon} />
                  </svg>
                  <span className="text-[10px] font-medium">{b.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
        <div className="md:hidden h-14" />
      </div>
    </ErrorBoundary>
  );
}
