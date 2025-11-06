'use client';

import { useState, useEffect } from 'react';
import InitialPage from './components/InitialPage';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

export default function Page() {
  const images = [
    'https://invitato.net/test-product-engineer/static/3-8ac38da1cdc0fa503b46859811696a13.jpg',
    'https://invitato.net/test-product-engineer/static/4-3943e72cf6bb4fe685c5917ea1d1cac4.jpg',
    'https://invitato.net/test-product-engineer/static/2-9fafa4bf7091b5207804ffe51f518939.jpg',
    'https://invitato.net/test-product-engineer/static/5-ffa38a07e15195800fbcc590cb50b2d0.jpg',
    'https://invitato.net/test-product-engineer/static/1-2b43ea516254cdff99c88a7fce90ae98.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNewPage, setIsNewPage] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showFirstSection, setShowFirstSection] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (isNewPage) {
      setTimeout(() => setShowFirstSection(true), 100);
    } else {
      setShowFirstSection(false);
      setIsVisible(false);
    }
  }, [isNewPage]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.scroll-container');
      if (scrollContainer) {
        const scrollTop = scrollContainer.scrollTop;
        const windowHeight = window.innerHeight;
        if (scrollTop > windowHeight * 0.3) {
          setIsVisible(true);
        }
      }
    };

    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer && isNewPage) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [isNewPage]);

  const scrollToSection = () => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const nextImage = () => {
    setGalleryIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setGalleryIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="grid md:grid-cols-50 grid-cols-1 gap-0 h-screen">
      {/* ini kolom sebelah kiri */}
      <div className="hidden md:block md:col-span-31 bg-cover bg-center border-r-10 border-black/30 relative" style={{ backgroundImage: 'url(https://invitato.net/test-product-engineer/static/3-8ac38da1cdc0fa503b46859811696a13.jpg)' }}>
        <div className="absolute inset-0 bg-white/15"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className='relative z-10 p-10 flex flex-col gap-6'>
          <p className='text-white font-bold tracking-wider text-sm'>WEDDING ANNOUNCEMENT</p>
          <h1 className='text-white text-7xl font-[family-name:var(--font-playfair)] font-normal leading-tight'>
            TIFFANY &<br />JARED
          </h1>
          <p className='text-white italic text-base leading-relaxed max-w-2xl font-[family-name:var(--font-playfair)]'>
            "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada hujan yang menjadikannya tiada."<br />
            <span className='not-italic'>– Sapardi Djoko Damono</span>
          </p>
        </div>
      </div>

      {/* ini kolom sebelah kanan */}
      <div className="md:col-span-19 bg-black text-white p-4 relative overflow-hidden">
        <div className={`absolute inset-0 transition-transform duration-[800ms] ease-out ${isNewPage ? '-translate-y-full' : 'translate-y-0'}`}>
          <InitialPage 
            images={images} 
            currentIndex={currentIndex} 
            onOpenClick={() => setIsNewPage(true)} 
          />
        </div>

        <div className={`absolute inset-0 h-full overflow-y-scroll overflow-x-hidden z-20 transition-transform duration-[800ms] ease-out scroll-container ${isNewPage ? 'translate-y-0' : 'translate-y-full'}`}>
          <Section1
            images={images}
            currentIndex={currentIndex}
            showFirstSection={showFirstSection}
            onBackClick={() => setIsNewPage(false)}
            onScrollClick={scrollToSection}
          />

          <Section2
            images={images}
            galleryIndex={galleryIndex}
            isVisible={isVisible}
            onBackClick={scrollToTop}
            onNextImage={nextImage}
            onPrevImage={prevImage}
          />
        </div>
      </div>
    </div>
  );
}

