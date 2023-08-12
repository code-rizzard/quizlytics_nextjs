const Header = () => {
  return (
    <header
    className="w-full h-[10vh] shadow-md"
    >
        <nav
        className="px-6 py-3 w-full h-full flex flex-row justify-between items-center"
        >
            <h2
            className="text-xl font-extrabold text-primary-dark"
            >Quizlytics</h2>
            <button type="button"
            className="text-primary hover:text-primary-dark sm:hidden"
            >
                burger
            </button>
        </nav>
    </header>
  )
}

export default Header