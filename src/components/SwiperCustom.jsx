import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';

const SwiperCustom = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayInterval = useRef(null);
  const modalRef = useRef(null);

  // Auto play functionality
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

  // Close modal when clicking outside
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

  // Close modal with Escape key
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

  const handleDotClick = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative w-full h-full overflow-hidden rounded-xl group">
        {/* Eye Icon */}
        <button 
          onClick={openModal}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white flex items-center justify-center shadow-lg transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-purple-500/30"
          aria-label="View full image"
        >
          <Eye className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((url, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0 aspect-video"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/20">
                <img
                  src={url}
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-125 shadow-md' 
                  : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div 
            ref={modalRef}
            className="relative max-w-[90%] h-[90vh] rounded-xl overflow-hidden animate-scaleIn"
          >
            <button 
              onClick={closeModal}
              className="absolute top-3 right-3 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-black/70 hover:scale-110"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <img
              src={images[currentIndex]}
              alt={`${title} - Full Image ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SwiperCustom; 