// src/pages/ThankYouPage.jsx

function ThankYouPage({ order, onBackToHome }) {
    const amount = order?.amount || 0;
  
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        {/* HEADER SIMPLE */}
        <header className="border-b border-slate-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-0 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center text-xs font-semibold text-white">
                C
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-tight">ClickClick Store</p>
                <p className="text-[11px] text-slate-500">
                  Terima kasih sudah berbelanja
                </p>
              </div>
            </div>
          </div>
        </header>
  
        {/* MAIN */}
        <main className="max-w-3xl mx-auto px-4 lg:px-0 py-10">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm px-6 py-8 space-y-6">
            {/* Icon & Title */}
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  Pembayaran berhasil 🎉
                </h1>
                <p className="text-sm text-slate-600 mt-1">
                  Terima kasih, <span className="font-medium">{order?.customerName || "Customer"}</span>. 
                  Pesananmu sudah kami terima dan akan segera diproses.
                </p>
              </div>
            </div>
  
            {/* ORDER INFO */}
            <div className="grid gap-6 sm:grid-cols-2 text-sm">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Ringkasan pesanan
                </p>
                <div className="space-y-1 text-slate-700">
                  <p>
                    <span className="text-slate-500">Nomor pesanan:</span>{" "}
                    <span className="font-medium">{order?.orderId}</span>
                  </p>
                  <p>
                    <span className="text-slate-500">Total pembayaran:</span>{" "}
                    <span className="font-semibold">
                      Rp {amount.toLocaleString("id-ID")}
                    </span>
                  </p>
                  {order?.paymentType && (
                    <p>
                      <span className="text-slate-500">Metode:</span>{" "}
                      <span className="font-medium">{order.paymentType}</span>
                    </p>
                  )}
                  {order?.transactionTime && (
                    <p>
                      <span className="text-slate-500">Waktu transaksi:</span>{" "}
                      <span className="font-medium">{order.transactionTime}</span>
                    </p>
                  )}
                </div>
              </div>
  
              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Detail kontak
                </p>
                <div className="space-y-1 text-slate-700">
                  {order?.customerName && (
                    <p className="font-medium">{order.customerName}</p>
                  )}
                  {order?.email && (
                    <p className="text-slate-600">{order.email}</p>
                  )}
                  {order?.address && (
                    <p className="text-slate-600 text-sm whitespace-pre-line">
                      {order.address}
                    </p>
                  )}
                </div>
              </div>
            </div>
  
            {/* INFO BAWAH */}
            <p className="text-xs text-slate-500">
              Bukti & detail transaksi juga akan tercatat di dashboard Midtrans kamu. 
              Jika ada kendala, kamu dapat menghubungi tim ClickClick dengan menyertakan nomor pesanan di atas.
            </p>
  
            {/* BUTTON */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={onBackToHome}
                className="text-xs sm:text-sm text-slate-600 hover:text-slate-900"
              >
                ← Kembali ke halaman produk
              </button>
  
              <button
                type="button"
                onClick={onBackToHome}
                className="inline-flex justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-black transition"
              >
                Lanjut jelajahi produk lain
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  export default ThankYouPage;
  