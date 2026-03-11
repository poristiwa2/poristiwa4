import { articles, categories, getFeaturedArticles } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';
import AdSlot from '../components/AdSlot';

interface HomePageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const featured = getFeaturedArticles();
  const latest = [...articles].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  const heroArticle = featured[0];
  const subFeatured = featured.slice(1, 3);
  const restArticles = latest.filter(a => !featured.includes(a));

  // Group articles by category
  const categoryArticles = categories.slice(0, 5).map(cat => ({
    category: cat,
    articles: articles.filter(a => a.category === cat.id).slice(0, 4),
  })).filter(g => g.articles.length > 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
      {/* Hero Section */}
      <section className="mb-6 md:mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {heroArticle && (
            <div className="lg:col-span-2">
              <ArticleCard article={heroArticle} variant="hero" onNavigate={onNavigate} />
            </div>
          )}
          <div className="flex flex-col gap-4">
            {subFeatured.map(a => (
              <ArticleCard key={a.id} article={a} variant="standard" onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Berita Terkini */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl md:text-2xl font-extrabold text-navy flex items-center gap-2">
                <span className="w-1 h-6 bg-brand rounded-full" />
                Berita Terkini
              </h2>
              <button
                onClick={() => onNavigate('category', { slug: 'terkini' })}
                className="text-sm text-brand font-semibold hover:underline"
              >
                Lihat Semua →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {latest.slice(0, 4).map(a => (
                <ArticleCard key={a.id} article={a} variant="standard" onNavigate={onNavigate} />
              ))}
            </div>
          </section>

          {/* In-feed Ad */}
          <AdSlot zone="6851037" type="inpage" className="mb-8" />

          {/* Category Sections */}
          {categoryArticles.map(({ category: cat, articles: catArticles }) => (
            <section key={cat.id} className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg md:text-xl font-extrabold text-navy flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full" style={{ backgroundColor: cat.color }} />
                  {cat.name}
                </h2>
                <button
                  onClick={() => onNavigate('category', { slug: cat.slug })}
                  className="text-sm font-semibold hover:underline"
                  style={{ color: cat.color }}
                >
                  Selengkapnya →
                </button>
              </div>
              <div className="space-y-0">
                {catArticles.slice(0, 1).map(a => (
                  <div key={a.id} className="mb-4">
                    <ArticleCard article={a} variant="standard" onNavigate={onNavigate} />
                  </div>
                ))}
                {catArticles.slice(1, 4).map(a => (
                  <ArticleCard key={a.id} article={a} variant="compact" onNavigate={onNavigate} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Trending */}
          <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <h3 className="text-lg font-extrabold text-navy mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Trending
            </h3>
            <div className="space-y-0">
              {latest.slice(0, 6).map((a, i) => (
                <div
                  key={a.id}
                  className="group cursor-pointer flex gap-3 py-3 border-b border-gray-50 last:border-0"
                  onClick={() => onNavigate('article', { slug: a.slug })}
                >
                  <span className="text-2xl font-black text-gray-200 group-hover:text-brand transition w-8 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-800 group-hover:text-brand transition line-clamp-2 leading-snug">
                      {a.title}
                    </h4>
                    <span className="text-xs text-gray-400 mt-1 block">{a.source}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Ad */}
          <AdSlot zone="6850989" type="banner" />

          {/* Kategori */}
          <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <h3 className="text-lg font-extrabold text-navy mb-4">Kategori</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => onNavigate('category', { slug: cat.slug })}
                  className="text-left px-3 py-2.5 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition text-sm font-medium text-gray-700 hover:text-brand flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Second sidebar ad */}
          <AdSlot zone="6851005" type="banner" />

          {/* Newsletter */}
          <div className="bg-gradient-to-br from-navy to-navy-light rounded-xl p-5 text-white">
            <h3 className="font-extrabold text-lg mb-2">Langganan Berita</h3>
            <p className="text-sm text-gray-300 mb-4">Dapatkan berita terkini langsung di inbox Anda setiap hari.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-brand"
              />
              <button className="px-4 py-2 bg-brand hover:bg-brand-dark rounded-lg text-sm font-semibold transition">
                Langganan
              </button>
            </div>
          </div>

          {/* Third sidebar ad */}
          <div className="sticky top-20">
            <AdSlot zone="6851061" type="banner" />
          </div>
        </aside>
      </div>

      {/* More News Grid */}
      <section className="mt-8 mb-4">
        <h2 className="text-xl md:text-2xl font-extrabold text-navy mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-brand rounded-full" />
          Berita Lainnya
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {restArticles.slice(0, 8).map(a => (
            <ArticleCard key={a.id} article={a} variant="standard" onNavigate={onNavigate} />
          ))}
        </div>
      </section>
    </div>
  );
}
