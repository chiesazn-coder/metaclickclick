// src/components/cart/CartDrawer.jsx

function CartDrawer({ isOpen, onClose, product, quantity, onCheckout }) {
    if (!isOpen) return null;
  
    const firstImage = product?.heroImages?.[0];
  
    return (
      <div className="fixed inset-0 z-40 flex justify-end">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={onClose}
        />
  
        {/* Drawer panel */}
        <aside className="relative h-full w-full max-w-sm bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
            <h2 className="text-base font-semibold text-slate-900">
              Keranjangmu
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-slate-700 text-xl leading-none"
              aria-label="Tutup keranjang"
            >
              ×
            </button>
          </div>
  
          {/* Content */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
            {/* Product summary */}
            {product && (
              <div className="flex gap-3">
                <div className="h-16 w-16 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                  {firstImage && (
                    <img
                      src={firstImage}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
  
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-slate-900">
                    {product.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    Jumlah: {quantity}
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    {product.price}
                  </p>
                </div>
              </div>
            )}
  
            {/* Info tambahan */}
            <div className="border-t border-slate-200 pt-4 space-y-2 text-xs text-slate-600">
              <p className="font-medium text-slate-900">
                Pilihan pembayaran favorit untuk produk ClickClick favoritmu
              </p>
              <p>
                Bunga 0% untuk pembayaran kartu kredit* dan opsi cicilan fleksibel
                melalui partner paylater pilihan.
              </p>
            </div>
          </div>
  
          {/* Footer actions */}
          <div className="border-t border-slate-200 px-5 py-4 space-y-3">
            <button
              type="button"
              className="w-full rounded-full border border-slate-300 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              Lihat keranjang (1)
            </button>
  
            <button
              onClick={() => {
                onClose();                // tutup drawer
                onCheckout(product, quantity); // pindah ke halaman checkout
              }}
              className="w-full bg-black text-white py-3 rounded-lg mt-4"
            >
              Checkout
            </button>
  
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-full py-2 text-xs font-medium text-blue-600 hover:bg-slate-50 transition"
            >
              Lanjut belanja
            </button>
          </div>
        </aside>
      </div>
    );
  }
  
  export default CartDrawer;
  