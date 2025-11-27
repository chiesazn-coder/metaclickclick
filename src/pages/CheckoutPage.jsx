// src/pages/CheckoutPage.jsx
import { useState } from "react";

function CheckoutPage({ product, quantity = 1, onBack, onPaymentSuccess }) {
  const safeQty = quantity || 1;
  const priceNumber = product?.priceNumber || 0;
  const total = priceNumber * safeQty;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!window.snap) {
      alert("Snap belum siap. Coba refresh halaman.");
      return;
    }
  
    try {
      const payload = {
        product_id: product.slug,
        qty: safeQty,
        customer: formData,
      };
  
      const res = await fetch("http://localhost:5000/api/create-transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (!res.ok) {
        console.error("Error response:", await res.text());
        alert("Gagal membuat transaksi. Coba lagi.");
        return;
      }
  
      const data = await res.json();
  
      window.snap.pay(data.token, {
        onSuccess: function (result) {
          console.log("SUCCESS", result);
  
          const summary = {
            orderId: result.order_id,
            amount: result.gross_amount,
            paymentType: result.payment_type,
            transactionTime: result.transaction_time,
            customerName: formData.fullName,
            email: formData.email,
            address: formData.address,
          };
  
          if (onPaymentSuccess) {
            onPaymentSuccess(summary);
          } else {
            alert("Pembayaran berhasil (sandbox) ✅");
          }
        },
        onPending: function (result) {
          console.log("PENDING", result);
          alert("Pembayaran pending. Silakan cek kembali.");
        },
        onError: function (result) {
          console.log("ERROR", result);
          alert("Terjadi error saat pembayaran.");
        },
        onClose: function () {
          console.log("Popup ditutup oleh user.");
        },
      });
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan jaringan. Coba lagi.");
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* TOP BAR / HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 lg:px-0 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center text-xs font-semibold text-white">
              C
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">ClickClick Store</p>
              <p className="text-[11px] text-slate-500">
                Checkout aman & terenkripsi
              </p>
            </div>
          </div>

          {/* Simple step indicator */}
          <div className="hidden sm:flex items-center text-xs text-slate-500">
            <span className="font-semibold text-slate-900">Informasi</span>
            <span className="mx-1">›</span>
            <span>Pengiriman</span>
            <span className="mx-1">›</span>
            <span>Pembayaran</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-4 lg:px-0 py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-[minmax(0,3fr),minmax(320px,2fr)] gap-8 lg:gap-10">
        {/* LEFT: FORM */}
        <section className="space-y-6">
          {/* Contact info */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm px-4 py-5 sm:px-6 sm:py-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-tight">
                Informasi kontak
              </h2>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Gunakan WhatsApp aktif untuk konfirmasi pesanan.
              </p>
            </div>

            <div className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700">
                  Nama lengkap
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10"
                  placeholder="Nama sesuai pengiriman"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10"
                  placeholder="08xxxxxxxxxx"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700">
                  Email (opsional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10"
                  placeholder="email@example.com"
                />
              </div>
            </div>
          </div>

          {/* Shipping address */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm px-4 py-5 sm:px-6 sm:py-6 space-y-4">
            <h2 className="text-sm font-semibold tracking-tight">
              Alamat pengiriman
            </h2>

            <div className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700">
                  Alamat lengkap
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10"
                  placeholder="Nama jalan, nomor rumah, RT/RW, kelurahan, kecamatan, kota, provinsi"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700">
                  Catatan untuk kurir (opsional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={2}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10"
                  placeholder="Patokan lokasi, jam kirim, dsb."
                />
              </div>
            </div>
          </div>

          {/* Bottom actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={onBack}
              className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 inline-flex items-center gap-1"
            >
              <span className="text-lg leading-none">‹</span>
              <span>Kembali ke keranjang</span>
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black transition"
            >
              Lanjutkan ke pembayaran
            </button>
          </div>
        </section>

        {/* RIGHT: ORDER SUMMARY */}
        <aside className="lg:pt-1">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm px-4 py-5 sm:px-6 sm:py-6 space-y-6 lg:sticky lg:top-6">
            <h2 className="text-sm font-semibold tracking-tight">
              Ringkasan pesanan
            </h2>

            {/* Product row */}
            {product && (
              <div className="flex items-center gap-3">
                <div className="relative h-16 w-16 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 flex-shrink-0">
                  {product.heroImages?.[0] && (
                    <img
                      src={product.heroImages[0]}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  )}
                  <span className="absolute -top-1.5 -right-1.5 min-w-[18px] rounded-full bg-slate-900 text-[10px] text-white text-center px-1 py-[1px]">
                    {safeQty}
                  </span>
                </div>

                <div className="flex-1 space-y-0.5">
                  <p className="text-xs font-medium leading-snug line-clamp-2">
                    {product.name}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Produk resmi ClickClick Store
                  </p>
                </div>

                <p className="text-sm font-semibold">
                  Rp {total.toLocaleString("id-ID")}
                </p>
              </div>
            )}

            <div className="border-t border-slate-200 pt-4 space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Subtotal</span>
                <span className="font-medium">
                  Rp {total.toLocaleString("id-ID")}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Pengiriman</span>
                <span className="text-slate-500 text-xs">
                  Dihitung pada langkah berikutnya
                </span>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Total
                </p>
                <p className="text-[11px] text-slate-500">Termasuk PPN bila berlaku</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500">IDR</p>
                <p className="text-lg font-semibold">
                  Rp {total.toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default CheckoutPage;
