import { useEffect, useState } from "react";

export function useNearSection(id: string, offset = 0) {
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNear(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: `${offset}px`,
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [id, offset]);

  return isNear;
}
