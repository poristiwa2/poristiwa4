import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { PopunderAd } from './components/AdSlot';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import SearchPage from './pages/SearchPage';
import { AboutPage, RedaksiPage, ContactPage, PrivacyPage, PedomanPage, SitemapPage } from './pages/StaticPages';

interface RouteState {
  page: string;
  params: Record<string, string>;
}

function parseHash(hash: string): RouteState {
  const clean = hash.replace(/^#\/?/, '');
  if (!clean) return { page: 'home', params: {} };

  const parts = clean.split('/');
  const page = parts[0];

  if (page === 'kategori' && parts[1]) return { page: 'category', params: { slug: parts[1] } };
  if (page === 'artikel' && parts[1]) return { page: 'article', params: { slug: parts[1] } };
  if (page === 'cari') {
    const q = new URLSearchParams(clean.split('?')[1] || '').get('q') || parts[1] || '';
    return { page: 'search', params: { q } };
  }

  return { page, params: {} };
}

function buildHash(page: string, params?: Record<string, string>): string {
  switch (page) {
    case 'home': return '#/';
    case 'category': return `#/kategori/${params?.slug || ''}`;
    case 'article': return `#/artikel/${params?.slug || ''}`;
    case 'search': return `#/cari/${params?.q || ''}`;
    case 'tentang': return '#/tentang';
    case 'redaksi': return '#/redaksi';
    case 'kontak': return '#/kontak';
    case 'privasi': return '#/privasi';
    case 'pedoman': return '#/pedoman';
    case 'sitemap': return '#/peta-situs';
    default: return '#/';
  }
}

export default function App() {
  const [route, setRoute] = useState<RouteState>(() => parseHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((page: string, params?: Record<string, string>) => {
    const hash = buildHash(page, params);
    window.location.hash = hash;
  }, []);

  const currentPageKey = route.page === 'category' ? `category-${route.params.slug}` : route.page;

  const renderPage = () => {
    switch (route.page) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'category':
        return <CategoryPage slug={route.params.slug} onNavigate={navigate} />;
      case 'article':
        return <ArticlePage slug={route.params.slug} onNavigate={navigate} />;
      case 'search':
        return <SearchPage query={route.params.q || ''} onNavigate={navigate} />;
      case 'tentang':
        return <AboutPage onNavigate={navigate} />;
      case 'redaksi':
        return <RedaksiPage onNavigate={navigate} />;
      case 'kontak':
        return <ContactPage onNavigate={navigate} />;
      case 'privasi':
        return <PrivacyPage onNavigate={navigate} />;
      case 'pedoman':
        return <PedomanPage onNavigate={navigate} />;
      case 'sitemap':
      case 'peta-situs':
        return <SitemapPage onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PopunderAd />
      <Header onNavigate={navigate} currentPage={currentPageKey} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />

      {/* Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-area-bottom">
        <div className="flex items-center justify-around h-14">
          <button
            onClick={() => navigate('home')}
            className={`flex flex-col items-center justify-center gap-0.5 w-16 py-1 ${route.page === 'home' ? 'text-brand' : 'text-gray-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-[10px] font-medium">Beranda</span>
          </button>
          <button
            onClick={() => navigate('category', { slug: 'terkini' })}
            className={`flex flex-col items-center justify-center gap-0.5 w-16 py-1 ${route.page === 'category' && route.params.slug === 'terkini' ? 'text-brand' : 'text-gray-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-[10px] font-medium">Terkini</span>
          </button>
          <button
            onClick={() => navigate('category', { slug: 'teknologi' })}
            className={`flex flex-col items-center justify-center gap-0.5 w-16 py-1 ${route.page === 'category' && route.params.slug === 'teknologi' ? 'text-brand' : 'text-gray-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-[10px] font-medium">Tekno</span>
          </button>
          <button
            onClick={() => navigate('category', { slug: 'olahraga' })}
            className={`flex flex-col items-center justify-center gap-0.5 w-16 py-1 ${route.page === 'category' && route.params.slug === 'olahraga' ? 'text-brand' : 'text-gray-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[10px] font-medium">Sport</span>
          </button>
          <button
            onClick={() => navigate('tentang')}
            className={`flex flex-col items-center justify-center gap-0.5 w-16 py-1 ${route.page === 'tentang' ? 'text-brand' : 'text-gray-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[10px] font-medium">Info</span>
          </button>
        </div>
      </nav>

      {/* Bottom padding for mobile nav */}
      <div className="md:hidden h-14" />
    </div>
  );
}
