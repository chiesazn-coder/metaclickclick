// src/components/product/ProductDetails.jsx

function ProductDetails({ product }) {
    return (
      <section className="border-t border-slate-200 pt-8 pb-20 space-y-10">
        {/* Ringkasan */}
        <div className="space-y-2">
          <p className="text-blue-600 text-sm font-semibold">Ringkasan</p>
  
          <h2 className="text-2xl font-semibold text-slate-900">Deskripsi</h2>
  
          <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
            {product.summary}
          </p>
        </div>
  
        {/* Fitur */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Fitur</h2>
  
          <ul className="list-disc pl-5 space-y-4 text-sm text-slate-700 leading-relaxed max-w-3xl">
            {product.features.map((item, idx) => (
              <li key={idx}>
                <span className="font-semibold">{item.title}</span>{" "}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Spesifikasi */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Spesifikasi</h2>
  
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 text-sm text-slate-700 max-w-4xl">
            {product.specs.map((spec, idx) => (
              <div key={idx}>
                <p className="font-medium">{spec.label}</p>
                <p>{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Isi kotak */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">Isi kotak</h2>
  
          <ul className="space-y-2 text-sm text-slate-700 max-w-4xl">
            {product.inTheBox.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
  
        {/* Garansi */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">Garansi</h2>
  
          <p className="text-sm text-slate-700 max-w-4xl">{product.warranty}</p>
        </div>
      </section>
    );
  }
  
  export default ProductDetails;
  