
export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <h1 className="text-4xl font-bold">Welcome to the Game App!</h1>
            <p className="mt-4 text-lg text-gray-600">
              This is a simple application to manage and play games.
            </p>
          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              Get started by exploring the app!
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="/tic-tac-toe"
                className="block rounded-lg border border-gray-200 p-4 text-center hover:bg-gray-100"
              >
                Play Tic Tac Toe
              </a>
            </div>
          </nav>
        </div>
      </div>
    </main>
  );
}
