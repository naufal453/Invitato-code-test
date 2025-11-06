interface InitialPageProps {
  images: string[];
  currentIndex: number;
  onOpenClick: () => void;
}

export default function InitialPage({ images, currentIndex, onOpenClick }: InitialPageProps) {
  return (
    <div className="absolute inset-0">
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
      <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
        <p className="text-center text-4xl font-[family-name:var(--font-playfair)] whitespace-nowrap">
          TIFFANY & JARED
        </p>
        <p className="text-center italic text-2xl font-[family-name:var(--font-playfair)]">
          #TImetoshaRE
        </p>
        <button
          onClick={onOpenClick}
          className="bg-white/100 hover:bg-white/50 text-black font-bold py-2 px-4 mt-4"
        >
          Open
        </button>
      </div>
    </div>
  );
}
