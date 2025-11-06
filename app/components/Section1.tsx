interface Section1Props {
  images: string[];
  currentIndex: number;
  showFirstSection: boolean;
  onBackClick: () => void;
  onScrollClick: () => void;
}

export default function Section1({ images, currentIndex, showFirstSection, onBackClick, onScrollClick }: Section1Props) {
  return (
    <div className="min-h-screen relative">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-white/15"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div
        className={`absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-4 transition-all duration-1000 px-8 ${
          showFirstSection ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <p className="text-center text-sm font-bold tracking-widest uppercase mb-4">
          WEDDING ANNOUNCEMENT
        </p>
        <h1 className="text-center text-6xl font-[family-name:var(--font-playfair)] leading-tight">
          TIFFANY & JARED
        </h1>
        <p className="text-center italic text-3xl font-[family-name:var(--font-playfair)]">
          #TImetoshaRE
        </p>
      </div>
      <button
        onClick={onBackClick}
        className="absolute top-8 left-8 text-white py-2 px-4 mt-4 flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
        BACK
      </button>
      <button
        onClick={onScrollClick}
        className="absolute bottom-8 right-8 z-30 text-white p-3 rounded-full flex items-center gap-2"
      >
        <p>SCROLL</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </div>
  );
}
