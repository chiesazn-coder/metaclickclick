// src/pages/ProductPage.jsx
import { useState } from "react";

import ProductHero from "../components/product/ProductHero";
import RelatedStrip from "../components/product/RelatedStrip";
import ProductDetails from "../components/product/ProductDetails";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import StickyBar from "../components/layout/StickyBar";
import CartDrawer from "../components/cart/CartDrawer";


function ProductPage({ product, onCheckout}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (qty) => {
    setCartCount(qty);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        <Header
          product={product}
          onCartClick={() => setIsCartOpen(true)}
          cartCount={cartCount}
        />

        <ProductHero
          product={product}
          quantity={quantity}
          onQuantityChange={setQuantity}
        />

        <RelatedStrip
          related={product.relatedProducts}
          activeSlug={product.slug}
        />

        <ProductDetails product={product} />

        <Footer />
      </main>

      <StickyBar
        product={product}
        quantity={quantity}
        onAddToCart={handleAddToCart}
      />

      {/* Cart drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        product={product}
        quantity={quantity}
        onCheckout={onCheckout}
      />

    </div>
  );
}

  
export default ProductPage;
