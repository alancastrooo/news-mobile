import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchArticleById } from "@/services/newsService";
import { NewsArticle } from "@/types/news";
import { formatRelativeTime } from "@/lib/dateUtils";
import { ArrowLeft, Clock, Share2, Bookmark } from "lucide-react";
import { Loader2 } from "lucide-react";

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetchArticleById(id).then((data) => {
      setArticle(data ?? null);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <p className="text-muted-foreground">Noticia no encontrada</p>
        <button onClick={() => navigate("/")} className="text-primary font-semibold text-sm">
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      {/* Hero image */}
      <div className="relative h-64">
        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-full bg-foreground/30 backdrop-blur-md flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-full bg-foreground/30 backdrop-blur-md flex items-center justify-center">
              <Bookmark className="w-4 h-4 text-primary-foreground" />
            </button>
            <button className="w-9 h-9 rounded-full bg-foreground/30 backdrop-blur-md flex items-center justify-center">
              <Share2 className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full news-gradient text-primary-foreground">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-lg mx-auto px-4 -mt-4 relative">
        <div className="bg-card rounded-t-2xl p-5 card-shadow">
          <h1 className="text-xl font-extrabold leading-tight text-card-foreground">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full news-gradient flex items-center justify-center">
                <span className="text-primary-foreground text-[9px] font-bold">
                  {article.author.charAt(0)}
                </span>
              </div>
              <span className="font-medium">{article.author}</span>
            </div>
            <span>•</span>
            <span>{formatRelativeTime(article.publishedAt)}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {article.readTime} min
            </span>
          </div>

          <p className="mt-4 text-sm font-medium text-card-foreground/80 leading-relaxed">
            {article.summary}
          </p>

          <div className="mt-4 text-sm text-card-foreground/70 leading-relaxed whitespace-pre-line">
            {article.content}
          </div>
        </div>
      </article>
    </div>
  );
}
