// src/components/product/ProductHero.jsx
import { useState } from "react";

function ProductHero({ product, quantity, onQuantityChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  const images = product.heroImages || [];

  const handleDecrease = () => {
    if (!onQuantityChange) return;
    onQuantityChange(quantity > 1 ? quantity - 1 : 1);
  };

  const handleIncrease = () => {
    if (!onQuantityChange) return;
    onQuantityChange(quantity + 1);
  };

  return (
    <section className="grid gap-10 lg:grid-cols-[1.1fr,1fr] items-start">
      {/* KIRI: CAROUSEL FOTO PRODUK */}
      <div className="space-y-3">
        <div className="w-full bg-white rounded-3xl shadow-sm overflow-hidden flex items-center justify-center aspect-[4/5]">
          {images[activeIndex] && (
            <img
              src={images[activeIndex]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        {images.length > 1 && (
          <div className="flex gap-3 justify-center">
            {images.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-16 w-16 rounded-2xl overflow-hidden border transition
                  ${
                    activeIndex === index
                      ? "border-blue-600"
                      : "border-slate-200 hover:border-slate-400"
                  }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* KANAN: BUY BOX / INFO PRODUK */}
      <div className="space-y-6">
        {/* Label + Title + Subtitle */}
        <div className="space-y-2">
          {product.label && (
            <p className="text-xs font-semibold tracking-wide text-orange-500 uppercase">
              {product.label}
            </p>
          )}

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            {product.name}
          </h1>

          {product.subtitle && (
            <p className="mt-2 text-sm text-slate-500 max-w-md">
              {product.subtitle}
            </p>
          )}
        </div>

        {/* Harga */}
        <div className="space-y-1">
          <p className="text-2xl font-semibold text-slate-900">
            {product.price}
          </p>
          {product.priceMonthly && (
            <p className="text-sm text-slate-500">{product.priceMonthly}</p>
          )}
        </div>

        {/* Qty */}
        <div className="pt-4 border-t border-slate-200 space-y-2">
          <p className="text-sm font-medium text-slate-900">Jumlah</p>
          <div className="inline-flex items-center rounded-full border border-slate-300 bg-white overflow-hidden">
            <button
              type="button"
              onClick={handleDecrease}
              className="h-10 w-10 flex items-center justify-center text-lg font-semibold hover:bg-slate-100"
            >
              –
            </button>
            <div className="w-12 text-center text-sm font-medium">
              {quantity}
            </div>
            <button
              type="button"
              onClick={handleIncrease}
              className="h-10 w-10 flex items-center justify-center text-lg font-semibold hover:bg-slate-100"
            >
              +
            </button>
          </div>
        </div>

        {/* Info bawah: Click & Pickup, Pengiriman, Accordion */}
        <div className="space-y-6 text-sm pt-2 border-t border-slate-200">
          {/* Click & Pickup */}
          <div>
            <p className="font-medium text-slate-900">Click &amp; Pickup</p>
            <button className="text-xs text-blue-600 hover:underline">
              Cek ketersediaan barang di toko
            </button>
          </div>

          {/* Pengiriman singkat */}
          <div>
            <p className="font-medium text-slate-900">Pengiriman</p>
            <p className="text-xs text-slate-500">
              Estimasi pengiriman akan ditampilkan saat checkout sesuai alamat
              kamu.
            </p>
          </div>

          {/* Pilihan pembayaran */}
          <div className="border-t border-slate-200 pt-1">
            <button
              type="button"
              onClick={() => setIsPaymentOpen((prev) => !prev)}
              className="flex w-full items-center justify-between py-3 text-left"
            >
              <span className="font-medium text-sm text-slate-900">
                Pilihan pembayaran
              </span>
              <span className="flex items-center gap-2 text-xs text-slate-500">
                {isPaymentOpen ? "Sembunyikan" : "Lihat semua"}
                <span
                  className={`transition-transform ${
                    isPaymentOpen ? "rotate-180" : ""
                  }`}
                >
                  ˅
                </span>
              </span>
            </button>
            {isPaymentOpen && (
              <p className="mt-1 text-xs text-slate-500">
                Cek semua pilihan pembayaran, termasuk cicilan dan paylater.
              </p>
            )}
          </div>

          {/* Layanan teknis */}
          <div className="border-t border-slate-200 pt-1">
            <button
              type="button"
              onClick={() => setIsServiceOpen((prev) => !prev)}
              className="flex w-full items-center justify-between py-3 text-left"
            >
              <span className="font-medium text-sm text-blue-600">
                Layanan teknis
              </span>
              <span
                className={`transition-transform text-xs text-slate-500 ${
                  isServiceOpen ? "rotate-180" : ""
                }`}
              >
                ˅
              </span>
            </button>
            {isServiceOpen && (
              <p className="mt-1 text-xs text-slate-500">
                Solusi praktis untuk perbaikan dan dukungan produk kamu.
              </p>
            )}
          </div>

          {/* Detail pengiriman */}
          <div className="border-t border-slate-200 pt-1">
            <button
              type="button"
              onClick={() => setIsShippingOpen((prev) => !prev)}
              className="flex w-full items-center justify-between py-3 text-left"
            >
              <span className="font-medium text-sm text-slate-900">
                Detail pengiriman
              </span>
              <span
                className={`transition-transform text-xs text-slate-500 ${
                  isShippingOpen ? "rotate-180" : ""
                }`}
              >
                ˅
              </span>
            </button>
            {isShippingOpen && (
              <p className="mt-1 text-xs text-slate-500">
                Gratis pengiriman ke area tertentu. Estimasi sampai 1–2 hari
                kerja.
              </p>
            )}
          </div>

          {/* Bagikan */}
          <div className="pt-2 border-t border-slate-200 space-y-2">
            <p className="text-xs font-medium text-slate-500">Bagikan</p>
            <div className="flex gap-2">
              {["X", "f", "ig", "in", "wa"].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="h-8 w-8 rounded-full border border-slate-300 flex items-center justify-center text-xs text-slate-600 hover:bg-slate-100"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductHero;
