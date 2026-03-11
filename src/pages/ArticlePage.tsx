import { getArticleBySlug, getRelatedArticles, categories, formatDate } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';
import AdSlot from '../components/AdSlot';

interface ArticlePageProps {
  slug: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export default function ArticlePage({ slug, onNavigate }: ArticlePageProps) {
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-400 mb-4">Berita tidak ditemukan</h1>
        <button onClick={() => onNavigate('home')} className="text-brand font-semibold hover:underline">
          ← Kembali ke Beranda
        </button>
      </div>
    );
  }

  const cat = categories.find(c => c.id === article.category);
  const related = getRelatedArticles(article);

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 mb-4 text-sm">
        <button onClick={() => onNavigate('home')} className="text-gray-400 hover:text-brand">Beranda</button>
        <span className="text-gray-300">/</span>
        {cat && (
          <>
            <button
              onClick={() => onNavigate('category', { slug: cat.slug })}
              className="hover:text-brand font-medium"
              style={{ color: cat.color }}
            >
              {cat.name}
            </button>
            <span className="text-gray-300">/</span>
          </>
        )}
        <span className="text-gray-400 truncate max-w-xs">{article.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Article content */}
        <article className="lg:col-span-2">
          {/* Category badge */}
          {cat && (
            <button
              onClick={() => onNavigate('category', { slug: cat.slug })}
              className="inline-block px-3 py-1 text-xs font-bold text-white rounded-md mb-3"
              style={{ backgroundColor: cat.color }}
            >
              {cat.name}
            </button>
          )}

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy leading-tight mb-4 font-serif">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm text-gray-500 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-gray-700 block leading-tight">{article.author}</span>
                <span className="text-xs text-gray-400">Kontributor</span>
              </div>
            </div>
            <span className="text-gray-300">|</span>
            <span>{formatDate(article.publishedAt)}</span>
            <span className="text-gray-300">|</span>
            <span>{article.readTime} menit baca</span>
          </div>

          {/* Featured image */}
          <div className={`${article.gradient} aspect-[16/9] rounded-xl mb-6 relative`}>
            <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
              Sumber: {article.source}
            </div>
          </div>

          {/* Share buttons */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm font-semibold text-gray-500">Bagikan:</span>
            <button className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition" aria-label="Share Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition" aria-label="Share Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition" aria-label="Share WhatsApp">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </button>
            <button
              className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-gray-200 transition"
              aria-label="Copy link"
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </button>
          </div>

          {/* Article body */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg font-semibold text-gray-700 leading-relaxed mb-4">
              {article.excerpt}
            </p>
            {article.content.map((paragraph, i) => (
              <div key={i}>
                <p className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>
                {i === 1 && <AdSlot zone="6851037" type="inpage" className="my-6" />}
              </div>
            ))}
          </div>

          {/* Source */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6 flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-wider block">Sumber</span>
              <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand hover:underline">
                {article.source}
              </a>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map(tag => (
              <button
                key={tag}
                onClick={() => onNavigate('search', { q: tag })}
                className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full hover:bg-brand hover:text-white transition"
              >
                #{tag}
              </button>
            ))}
          </div>

          {/* Author box */}
          <div className="bg-white rounded-xl border border-gray-100 p-5 mb-8 flex gap-4 items-start">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
              <svg className="w-7 h-7 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-navy">{article.author}</h4>
              <p className="text-xs text-gray-400 mb-2">Kontributor — {article.source}</p>
              <p className="text-sm text-gray-500">Kontributor aktif yang fokus pada liputan {cat?.name.toLowerCase() || 'berita'} dengan pengalaman lebih dari 5 tahun di bidang jurnalisme.</p>
            </div>
          </div>

          {/* Related articles */}
          {related.length > 0 && (
            <section>
              <h3 className="text-xl font-extrabold text-navy mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-brand rounded-full" />
                Berita Terkait
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map(a => (
                  <ArticleCard key={a.id} article={a} variant="standard" onNavigate={onNavigate} />
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          <AdSlot zone="6850989" type="banner" />

          <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <h3 className="text-lg font-extrabold text-navy mb-4">Berita Populer</h3>
            {related.slice(0, 4).map(a => (
              <ArticleCard key={a.id} article={a} variant="compact" onNavigate={onNavigate} />
            ))}
          </div>

          <div className="sticky top-20 space-y-6">
            <AdSlot zone="6851005" type="banner" />
            <AdSlot zone="6851061" type="banner" />
          </div>
        </aside>
      </div>
    </div>
  );
}
