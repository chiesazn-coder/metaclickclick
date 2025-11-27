// src/components/layout/StickyBar.jsx

function StickyBar({ product, quantity, onAddToCart}) {
    return (
      <>
        {/* Spacer supaya konten utama tidak ketutup sticky bar */}
        <div className="h-20 md:h-24" />
  
        <div className="fixed inset-x-0 bottom-0 border-t border-slate-200 bg-white/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Harga */}
            <div>
              <p className="text-base font-semibold text-slate-900">
                {product.price}
              </p>
              {product.priceMonthly && (
                <p className="text-xs text-slate-500">
                  {product.priceMonthly}
                </p>
              )}

            </div>
  
            {/* Tombol CTA */}
            <button
              type="button"
              onClick={() => onAddToCart?.(quantity)}
              className="w-full sm:w-auto rounded-full bg-slate-900 text-white font-semibold py-3 px-8 text-sm hover:bg-black transition"
            >
              Tambah ke keranjang
            </button>

          </div>
        </div>
      </>
    );
  }
  
  export default StickyBar;
  