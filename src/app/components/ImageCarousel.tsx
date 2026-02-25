import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const morpheusImg = '/assets/e21a027213d53d1b7d4af1ef6c6ddb1cd41f46b2.webp';
const twoPathsImg = '/assets/7e6d58da7cb735389dbcecdf91f13d0625a71d87.webp';
const echoImg = '/assets/6e53e5381f105010db751ad715cf3bfc01e3e079.webp';
const dashboardImg = '/assets/73cef9a166918161153be4bc9f36b7f04542d09e.webp';
const dailyFocusImg = '/assets/48b4079cd64b0d6bb49aa3e3b8f3c633d05898fb.webp';
const oracleCardImg = '/assets/e930f13464dbd5db146d0223b13c6fde6b60388b.webp';
const andromedaImg = '/assets/5c6aeb3b294899d4b6a6d4256a008bae4aa442fc.webp';
const theWeightImg = '/assets/59660b6a93dc8821bb498bd6f7f16d7c85a0e8d5.webp';
const theStarImg = '/assets/d32e7c771df94a1b72f52fe2a024ae6a24e43664.webp';
const theFoolImg = '/assets/5baa053141f50dca0cf3864020e9363eb5e2d514.webp';

const images = [
  morpheusImg,
  twoPathsImg,
  echoImg,
  dailyFocusImg,
  dashboardImg,
  oracleCardImg,
  andromedaImg,
  theWeightImg,
  theStarImg,
  theFoolImg,
];

export function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    startIndex: 4,
    slidesToScroll: 1,
    containScroll: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute -left-1 sm:left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/15 border border-white/30 active:bg-white/30 hover:bg-white/20 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute -right-1 sm:right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/15 border border-white/30 active:bg-white/30 hover:bg-white/20 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Carousel */}
      <div className="overflow-hidden mx-8 sm:mx-10" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-[0_0_90%] sm:flex-[0_0_33.333%] lg:flex-[0_0_20%] min-w-0 px-1.5 sm:px-2"
            >
              <div className="relative aspect-[9/19] overflow-hidden rounded-lg">
                <img
                  src={src}
                  alt={`SYGNS App Screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{
                    boxShadow: '0 0 40px rgba(198, 163, 74, 0.3)',
                    border: '1px solid rgba(198, 163, 74, 0.2)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
