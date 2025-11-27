// src/components/layout/Footer.jsx

function Footer() {
    return (
      <footer className="w-full border-t bg-white mt-10">
        {/* TOP GRID */}
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          
          {/* CUSTOMER CARE */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">CUSTOMER CARE</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-black">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-black">FAQ</a></li>
            </ul>
          </div>
  
          {/* ABOUT US */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">ABOUT US</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">Our Story</a></li>
              <li><a href="#" className="hover:text-black">Wholesale</a></li>
            </ul>
          </div>
  
          {/* HELP & LEGAL */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">HELP & LEGAL</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black">Terms of Service</a></li>
              <li><a href="#" className="hover:text-black">Contact Us</a></li>
            </ul>
          </div>
  
          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">FOLLOW US</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">Instagram</a></li>
              <li><a href="#" className="hover:text-black">TikTok</a></li>
              <li><a href="#" className="hover:text-black">Shopee</a></li>
            </ul>
          </div>
        </div>
  
        {/* CONTACT + PAYMENT + SHIPPING */}
        <div className="border-t">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-10 justify-between text-sm">
  
            {/* CONTACT */}
            <div className="max-w-md space-y-4 text-gray-700">
              <div className="space-y-1">
                <p>⏱ Jam 09:00 - 17:00 WIB</p>
                <p>
                  ✉️ Email:{" "}
                  <a href="mailto:customercare@clickclick.id" className="text-blue-600 hover:underline">
                    customercare@clickclick.id
                  </a>
                </p>
                <p>
                  💬 WhatsApp:{" "}
                  <a href="https://wa.me/6281234567890" className="text-blue-600 hover:underline">
                    0812 3456 7890
                  </a>
                </p>
              </div>
  
              <div className="space-y-1">
                <p className="font-semibold">Layanan Pengaduan Konsumen</p>
                <p>Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga</p>
                <p>Kementerian Perdagangan Republik Indonesia</p>
                <p className="mt-2">
                  WhatsApp Ditjen PKTN:{" "}
                  <span className="font-semibold">0853-1111-1010</span>
                </p>
              </div>
            </div>

            {/* SOCIAL + PAYMENT + SHIPPING */}
            <div className="flex-1 space-y-6">
              {/* Social */}
              <div className="flex justify-end">
                <div className="flex gap-3 text-gray-400">
                  {/* Instagram */}
                  <a
                    href="#"
                    className="hover:text-gray-800 transition-transform duration-150 hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a
                    href="#"
                    className="hover:text-gray-800 transition-transform duration-150 hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.5 2h2.2c.2 1 .6 2 1.3 2.8.8.9 1.9 1.3 3 1.4V9c-1.3 0-2.6-.4-3.8-1.1v6.3c0 2.5-1.7 4.7-4.1 5.2-2.9.6-5.6-1.5-5.6-4.4 0-2.3 1.7-4.2 4-4.4.5 0 1-.4 1-.9V7.3h3v2.5c-.8-.3-1.7-.9-2.3-1.7V2z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="#"
                    className="hover:text-gray-800 transition-transform duration-150 hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13 3h4V0h-4c-3.3 0-6 2.7-6 6v3H4v4h3v11h4V13h3l1-4h-4V6c0-1.1.9-2 2-2z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="#"
                    className="hover:text-gray-800 transition-transform duration-150 hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.5 6.5s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17.5 3 12 3 12 3h-.1s-5.5 0-8.6.2c-.5.1-1.4.1-2.1 1-.6.7-.8 2.3-.8 2.3S0 8.1 0 9.7v1.6c0 1.6.2 3.2.2 3.2s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1C6.5 18 12 18 12 18s5.5 0 8.6-.2c.5-.1 1.4-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.6.2-3.2V9.7c0-1.6-.2-3.2-.2-3.2zM9.6 14.3V7.7l6.3 3.3-6.3 3.3z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="#"
                    className="hover:text-gray-800 transition-transform duration-150 hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.04 2C6.58 2 2.14 6.44 2.14 11.9c0 2.09.68 4.04 1.82 5.62L2 22l4.63-1.88c1.51.83 3.26 1.31 5.1 1.31 5.46 0 9.9-4.44 9.9-9.9 0-5.46-4.44-9.9-9.9-9.9zm0 17.7c-1.56 0-3.02-.45-4.25-1.23l-.3-.18-2.75 1.12.82-2.68-.18-.28a8.06 8.06 0 01-1.47-4.62c0-4.43 3.6-8.03 8.03-8.03 4.43 0 8.03 3.6 8.03 8.03 0 4.43-3.6 8.03-8.03 8.03z" />
                  </svg>
                  </a>
                </div>
              </div>

              {/* Payment Methods */}
              <p className="font-semibold text-right text-gray-900">Metode Pembayaran</p>
              <div className="flex justify-end">
                <div className="grid grid-cols-4 gap-x-4 gap-y-3">
                  {['gopay', 'bni', 'bri', 'mandiri', 'permata', 'cimb'].map(payment => (
                    <div key={payment} className="w-16 h-8 flex items-center justify-center">
                      <img
                        src={new URL(`../../assets/payments/${payment}.png`, import.meta.url).href}
                        alt={payment}
                        className="max-h-4 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* SHIPPING METHODS */}
              <p className="font-semibold text-right text-gray-900">Jasa Pengiriman</p>
              <div className="flex justify-end">
                <div className="grid grid-cols-4 gap-x-4 gap-y-3 justify-end">
                  {['jne', 'jnt', 'pos','ninja'].map(courier => (
                    <div key={courier} className="w-16 h-8 flex items-center justify-center">
                      <img
                        src={new URL(`../../assets/delivery/${courier}.png`, import.meta.url).href}
                        alt={courier}
                        className="max-h-4 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
  
        {/* BOTTOM */}
        <div className="border-t py-4 text-xs text-gray-500 flex items-center justify-between px-6 max-w-7xl mx-auto">
          <p>© 2025 Clickclick, All rights reserved.</p>
          <p>Secured Checkout • Trusted Payments</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  