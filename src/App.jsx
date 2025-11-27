// src/App.jsx
import { useState } from "react";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import ThankYouPage from "./pages/ThankYouPage";
import { PRODUCTS } from "./data/products";

function App() {
  // 1. Ambil slug dari URL, contoh:
  // "/"      -> ""   -> jadi "t8d"
  // "/t3b"   -> "t3b"
  // "/m4"    -> "m4"
  const rawPath = window.location.pathname.replace(/^\/+/, ""); 
  const urlSlug = rawPath || "t8d";

  // 2. Cari produk berdasarkan slug, fallback ke t8d kalau nggak ketemu
  const initialProduct = PRODUCTS[urlSlug] || PRODUCTS.t8d;

  // 3. State halaman & order
  const [currentPage, setCurrentPage] = useState("product"); // 'product' | 'checkout' | 'thankyou'
  const [orderInfo, setOrderInfo] = useState({
    product: initialProduct,
    quantity: 1,
  });
  const [orderSummary, setOrderSummary] = useState(null);

  const handleGoToCheckout = (product, quantity) => {
    setOrderInfo({
      product: product || initialProduct,
      quantity: quantity || 1,
    });
    setCurrentPage("checkout");
  };

  const handleBackToProduct = () => {
    setCurrentPage("product");
  };

  const handlePaymentSuccess = (summary) => {
    setOrderSummary(summary);
    setCurrentPage("thankyou");
  };

  // Routing sederhana via state
  if (currentPage === "checkout") {
    return (
      <CheckoutPage
        product={orderInfo.product}
        quantity={orderInfo.quantity}
        onBack={handleBackToProduct}
        onPaymentSuccess={handlePaymentSuccess}
      />
    );
  }

  if (currentPage === "thankyou") {
    return (
      <ThankYouPage
        order={orderSummary}
        onBackToHome={handleBackToProduct}
      />
    );
  }

  // Default: halaman produk
  return (
    <ProductPage
      product={initialProduct}
      onCheckout={handleGoToCheckout}
    />
  );
}

export default App;
