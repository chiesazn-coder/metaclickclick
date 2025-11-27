function Header({ product, onCartClick, cartCount = 0 }) {
  const breadcrumbs = product.breadcrumbs || [];
  const lastIndex = breadcrumbs.length - 1;

  const hasItems = cartCount > 0;

  return (
    <header className="flex items-center justify-between border-b border-slate-200 pb-4">
      {/* Logo / Brand */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-sm font-semibold">
          C
        </div>
        <div>
          <p className="text-sm font-semibold leading-tight text-slate-900">
            ClickClick Store
          </p>
          <p className="text-xs text-slate-500 leading-tight">
            Official Product Page
          </p>
        </div>
      </div>

      {/* Right: Breadcrumb + Cart */}
      <div className="flex items-center gap-4">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav className="hidden sm:flex items-center gap-1 text-xs text-slate-500">
            {breadcrumbs.map((item, index) => {
              const isLast = index === lastIndex;

              return (
                <span key={index} className="flex items-center gap-1">
                  {index > 0 && <span>/</span>}
                  <span
                    className={
                      isLast
                        ? "text-slate-900 font-medium"
                        : "hover:text-slate-700 cursor-pointer"
                    }
                  >
                    {item}
                  </span>
                </span>
              );
            })}
          </nav>
        )}

        {/* Cart icon */}
        <button
          type="button"
          onClick={onCartClick}
          className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition"
          aria-label="Keranjang"
        >
          {/* SVG icon keranjang */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M6 6h15l-1.5 9h-12L5 3H2" />
            <circle cx="10.5" cy="19" r="1.3" />
            <circle cx="17.5" cy="19" r="1.3" />
          </svg>

          {/* Badge jumlah item (optional, nanti bisa kita sambung state beneran) */}
          {hasItems && (
            <span className="absolute -top-1.5 -right-1.5 min-w-[18px] px-1 rounded-full bg-red-500 text-[10px] font-semibold text-white text-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
