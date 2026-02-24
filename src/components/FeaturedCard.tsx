import { NewsArticle } from "@/types/news";
import { formatRelativeTime } from "@/lib/dateUtils";
import { useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";

interface FeaturedCardProps {
  article: NewsArticle;
}

export default function FeaturedCard({ article }: FeaturedCardProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/noticia/${article.id}`)}
      className="relative w-full h-52 rounded-xl overflow-hidden group text-left"
    >
      <img
        src={article.imageUrl}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded news-gradient text-primary-foreground mb-2">
          {article.category}
        </span>
        <h3 className="text-primary-foreground font-bold text-sm leading-snug line-clamp-2">
          {article.title}
        </h3>
        <div className="flex items-center gap-2 mt-2 text-primary-foreground/70 text-[11px]">
          <span>{article.author}</span>
          <span>•</span>
          <Clock className="w-3 h-3" />
          <span>{article.readTime} min</span>
        </div>
      </div>
    </button>
  );
}
