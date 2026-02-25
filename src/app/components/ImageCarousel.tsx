import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
  { src: morpheusImg, opacity: 1 },
  { src: twoPathsImg, opacity: 1 },
  { src: echoImg, opacity: 1 },
  { src: dailyFocusImg, opacity: 1 },
  { src: dashboardImg, opacity: 1 }, // Center - full opacity
  { src: oracleCardImg, opacity: 1 },
  { src: andromedaImg, opacity: 1 },
  { src: theWeightImg, opacity: 1 },
  { src: theStarImg, opacity: 1 },
  { src: theFoolImg, opacity: 1 },
];

export function ImageCarousel() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    initialSlide: 4, // Start with dashboard image centered
    autoplay: false,
    arrows: false,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          initialSlide: 4,
        },
      },
    ],
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Custom Navigation Buttons */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute -left-1 sm:left-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2 rounded-full bg-white/15 border border-white/30 active:bg-white/30 hover:bg-white/20 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute -right-1 sm:right-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2 rounded-full bg-white/15 border border-white/30 active:bg-white/30 hover:bg-white/20 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2 sm:px-3">
            <div className="relative aspect-[9/16] sm:aspect-[9/19] overflow-hidden rounded-lg max-h-[60vh] sm:max-h-none mx-auto">
              <img
                src={image.src}
                alt={`SYGNS App Screenshot ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
                style={{
                  opacity: image.opacity,
                  filter: image.opacity < 1 ? 'brightness(0.8)' : 'brightness(1)',
                }}
              />
              {/* Subtle border glow on center image */}
              {image.opacity === 1 && (
                <div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{
                    boxShadow: '0 0 40px rgba(198, 163, 74, 0.3)',
                    border: '1px solid rgba(198, 163, 74, 0.2)',
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
