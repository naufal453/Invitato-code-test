interface Section2Props {
  images: string[];
  galleryIndex: number;
  isVisible: boolean;
  onBackClick: () => void;
  onNextImage: () => void;
  onPrevImage: () => void;
}

export default function Section2({ images, galleryIndex, isVisible, onBackClick, onNextImage, onPrevImage }: Section2Props) {
  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center p-8">
      <div className="absolute inset-0 bg-black"></div>
      <button
        onClick={onBackClick}
        className="absolute top-8 left-8 text-white py-2 px-4 mt-4 flex items-center gap-2 z-30"
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
      <div
        className={`relative z-20 w-full max-w-5xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <div className="flex flex-col items-center gap-4 mb-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase">
            DEAR MR-MRS-MS,<br />FAMILY & FRIENDS
          </p>
          <h1 className="text-center text-4xl font-[family-name:var(--font-playfair)] leading-tight">
            Welcome to<br />Tiffany & Jared's<br />Wedding Website
          </h1>
          <p className="text-center italic text-md mt-4 max-w-xl">
            Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.
          </p>
        </div>
        <div className="flex gap-4 overflow-hidden mb-8 items-center">
          {[0, 1, 2].map((offset) => {
            const index = (galleryIndex + offset) % images.length;
            const isCenter = offset === 1;
            return (
              <div
                key={offset}
                className={`flex-shrink-0 bg-cover bg-center transition-opacity duration-300 ${
                  isCenter ? 'w-2/5 aspect-[3/4] opacity-100' : 'w-1/4 aspect-[3/4] opacity-70'
                }`}
                style={{ backgroundImage: `url(${images[index]})` }}
              ></div>
            );
          })}
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={onPrevImage}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 transition-colors duration-300"
          >
            ←
          </button>
          <button
            onClick={onNextImage}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 transition-colors duration-300"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
