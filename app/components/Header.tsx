import { Link, useLocation } from "react-router";

export function Header() {
  const location = useLocation();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              🎮 Game App 😎
            </Link>
          </div>
          <nav className="flex space-x-8">
            <Link
              to="/"
              className={navButtonStyle(location.pathname === "/")}
            >
              Home
            </Link>
            <Link
              to="/tic-tac-toe"
              className={navButtonStyle(location.pathname === "/tic-tac-toe")}
            >
              Tic Tac Toe
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function navButtonStyle(selected: boolean): string {
  const baseStyle =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const selectedStyle =
    "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
  const notSelectedStyle =
    "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800";

  return `${baseStyle} ${selected ? selectedStyle : notSelectedStyle}`;
}
