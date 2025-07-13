import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const SwiperCustom = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayInterval = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    autoPlayInterval.current = setInterval(() => {
      if (!isAnimating && !isModalOpen) {
        handleNext();
      }
    }, 5000);

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [currentIndex, isAnimating, isModalOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative w-full h-full overflow-hidden rounded-xl group">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((url, index) => (
            <div key={index} className="w-full flex-shrink-0 aspect-video">
              <div
                onClick={() => openModal(index)}
                className="relative w-full h-full rounded-xl overflow-hidden bg-black/20 cursor-zoom-in"
              >
                <img
                  src={url}
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 w-full h-full bg-black/0 md:bg-black/0 md:group-hover:bg-black/40 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-2 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V6a2 2 0 0 1 2-2h2m8 0h2a2 2 0 0 1 2 2v2m0 8v2a2 2 0 0 1-2 2h-2m-8 0H6a2 2 0 0 1-2-2v-2" />
                  </svg>
                  <span className="text-white text-lg font-semibold drop-shadow-lg">View photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-1 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-1 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn">
          <div ref={modalRef} className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-black/80 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            <img
              src={images[currentIndex]}
              alt={`${title} - Full Image ${currentIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SwiperCustom;
