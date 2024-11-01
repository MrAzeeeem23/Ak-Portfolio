import useDarkMode from "./DarkMode.jsx";

export default function DarkModeToggle() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="rounded text-2xl">
      {isDarkMode ? <i class="bi bi-brightness-high-fill"></i> : <i class="bi bi-moon-stars-fill"></i>}
    </button>
  );
}
