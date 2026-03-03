/* ===== ギャラリー画像: src と alt をここで差し替え ===== */
const images = [
  {
    src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&q=80",
    alt: "Local Sake Selection",
    caption: "Local Sake Selection",
    colSpan: "col-span-2 md:col-span-1",
    rowSpan: "row-span-2",
    height: "h-64 md:h-full",
  },
  {
    src: "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=400&q=80",
    alt: "居酒屋の食べ物",
    caption: "Izakaya Food",
    colSpan: "",
    rowSpan: "",
    height: "h-52",
  },
  {
    src: "https://images.unsplash.com/photo-1582872995063-1c3f4a48ae36?w=400&q=80",
    alt: "乾杯シーン",
    caption: "Kanpai!",
    colSpan: "",
    rowSpan: "",
    height: "h-52",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
    alt: "日本の食事",
    caption: "Japanese Cuisine",
    colSpan: "",
    rowSpan: "",
    height: "h-52",
  },
  {
    src: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80",
    alt: "居酒屋の夜景",
    caption: "Izakaya Night",
    colSpan: "",
    rowSpan: "",
    height: "h-52",
  },
  {
    src: "https://images.unsplash.com/photo-1517638851339-a711cfcf3279?w=400&q=80",
    alt: "日本の夜の街",
    caption: "Okayama Night",
    colSpan: "",
    rowSpan: "",
    height: "h-52",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* セクションヘッダー */}
        <div className="text-center mb-14 reveal">
          <p className="text-sake-gold text-xs font-bold tracking-[0.4em] uppercase mb-3">
            See the Vibes
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-5">
            The <span className="text-gold-gradient">Atmosphere</span>
          </h2>
          <div className="w-16 h-0.5 bg-sake-gold mx-auto" />
        </div>

        {/* ギャラリーグリッド */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`reveal relative overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl hover:shadow-stone-200 transition-all duration-300 ${img.colSpan} ${img.rowSpan} ${img.height}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* ホバー時オーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
