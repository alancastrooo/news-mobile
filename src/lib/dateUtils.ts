import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

export function formatRelativeTime(dateString: string): string {
  return formatDistanceToNow(new Date(dateString), { addSuffix: true, locale: es });
}
