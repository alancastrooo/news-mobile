import { NewsArticle } from "@/types/news";
import { formatRelativeTime } from "@/lib/dateUtils";
import { useNavigate } from "react-router-dom";

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/noticia/${article.id}`)}
      className="flex gap-3 w-full text-left p-3 rounded-xl bg-card card-shadow transition-all active:scale-[0.98]"
    >
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
        loading="lazy"
      />
      <div className="flex flex-col justify-between flex-1 min-w-0 py-0.5">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
            {article.category}
          </span>
          <h3 className="text-sm font-semibold leading-snug line-clamp-2 text-card-foreground mt-0.5">
            {article.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
          <span>{article.author}</span>
          <span>•</span>
          <span>{formatRelativeTime(article.publishedAt)}</span>
        </div>
      </div>
    </button>
  );
}
