"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-full bg-secondary/10 dark:bg-white/10 text-foreground transition-colors w-10 h-10 flex items-center justify-center">
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  const toggleTheme = async (e: React.MouseEvent) => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      
      document.documentElement.animate(
        {
          clipPath: resolvedTheme === "dark" ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 700,
          easing: "ease-in-out",
          pseudoElement: resolvedTheme === "dark" ? "::view-transition-old(root)" : "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 dark:bg-white/10 dark:hover:bg-white/20 text-foreground transition-all flex items-center justify-center shadow-inner hover:shadow-md relative overflow-hidden"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun size={18} className="text-amber-400" />
      ) : (
        <Moon size={18} className="text-indigo-600" />
      )}
    </button>
  );
}
