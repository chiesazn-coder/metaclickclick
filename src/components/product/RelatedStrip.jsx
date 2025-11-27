// src/components/product/RelatedStrip.jsx
import { useRef } from "react";

function RelatedStrip({ related }) {
  if (!related || related.length === 0) return null;

  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 280; // kira-kira lebar 1 card + gap
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-14">
      {/* Title */}
      <h2 className="text-center text-2xl font-semibold text-slate-900 mb-10">
        Mungkin kamu juga suka
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* LEFT BUTTON */}
        <button
          type="button"
          onClick={() => handleScroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-gray-700 text-white items-center justify-center shadow-md hover:bg-blue-700 transition"
        >
          ‹
        </button>

        {/* Scroll wrapper */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto px-4 scrollbar-hide snap-x snap-mandatory"
        >
          {related.map((item) => (
            <div
              key={item.id}
              className="min-w-[260px] max-w-[260px] bg-white rounded-3xl border border-slate-200 shadow-sm p-6 snap-start flex-shrink-0"
            >
              {/* Image */}
              <div className="w-full aspect-square overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <p className="text-center text-slate-900 font-medium mb-1">
                {item.name}
              </p>

              {/* Price */}
              <p className="text-center text-slate-700 text-sm">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button
          type="button"
          onClick={() => handleScroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-10 w-10 rounded-full bg-gray-700 text-white items-center justify-center shadow-md hover:bg-blue-700 transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default RelatedStrip;
