"use client";

import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Get theme from localStorage
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-700 dark:text-gray-200 p-2 rounded-lg transition"
    >
      {theme === "light" ? (
        <BsMoon className="text-2xl" />
      ) : (
        <BsSun className="text-2xl" />
      )}
    </button>
  );
}
