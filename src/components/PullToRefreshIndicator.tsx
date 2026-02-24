import { Loader2 } from "lucide-react";

interface PullToRefreshIndicatorProps {
  pullDistance: number;
  isRefreshing: boolean;
}

export default function PullToRefreshIndicator({ pullDistance, isRefreshing }: PullToRefreshIndicatorProps) {
  if (pullDistance === 0 && !isRefreshing) return null;

  return (
    <div
      className="flex items-center justify-center overflow-hidden transition-all"
      style={{ height: isRefreshing ? 48 : pullDistance * 0.6 }}
    >
      <Loader2
        className={`w-5 h-5 text-primary ${isRefreshing ? "animate-spin" : ""}`}
        style={{
          opacity: Math.min(pullDistance / 80, 1),
          transform: `rotate(${pullDistance * 3}deg)`,
        }}
      />
    </div>
  );
}
