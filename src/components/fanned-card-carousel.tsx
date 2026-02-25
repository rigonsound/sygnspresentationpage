import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TarotCard {
  name: string;
  image: string | null;
}

interface FannedCardCarouselProps {
  cards: TarotCard[];
  onCardSelect?: (card: TarotCard) => void;
  selectedCards?: string[];
}

export function FannedCardCarousel({
  cards,
  onCardSelect,
  selectedCards = [],
}: FannedCardCarouselProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const totalCards = cards.length;
  const arcDeg = 80;
  const startAngle = -arcDeg / 2;
  const step = totalCards > 1 ? arcDeg / (totalCards - 1) : 0;

  return (
    <div className="relative w-full flex items-end justify-center" style={{ height: 'clamp(320px, 50vw, 520px)' }}>
      {/* The fan origin point sits at the bottom center */}
      <div className="relative" style={{ width: 0, height: 0 }}>
        <AnimatePresence>
          {cards.map((card, i) => {
            const angle = startAngle + i * step;
            const isHovered = hoveredIndex === i;
            const isSelected = selectedCards.includes(card.name);
            const centerIndex = (totalCards - 1) / 2;
            const distFromCenter = Math.abs(i - centerIndex);
            const zIndex = isHovered ? 100 : totalCards - Math.round(distFromCenter);

            return (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, rotate: 0 }}
                animate={{
                  opacity: 1,
                  rotate: angle,
                  y: isHovered ? -30 : 0,
                }}
                transition={{
                  opacity: { duration: 0.4, delay: i * 0.03 },
                  rotate: { duration: 0.6, delay: i * 0.03, ease: 'easeOut' },
                  y: { duration: 0.2 },
                }}
                className="absolute cursor-pointer"
                style={{
                  width: 'clamp(60px, 9vw, 100px)',
                  aspectRatio: '2 / 3',
                  bottom: 0,
                  left: '50%',
                  marginLeft: 'calc(clamp(60px, 9vw, 100px) / -2)',
                  transformOrigin: 'center calc(100% + clamp(160px, 25vw, 300px))',
                  zIndex,
                  filter: isSelected ? 'brightness(0.4)' : 'none',
                }}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => {
                  if (onCardSelect && !isSelected) {
                    onCardSelect(card);
                  }
                }}
              >
                <div
                  className="w-full h-full rounded-sm overflow-hidden"
                  style={{
                    boxShadow: isHovered
                      ? '0 8px 30px rgba(0,0,0,0.8), 0 0 15px rgba(198,163,74,0.15)'
                      : '0 2px 10px rgba(0,0,0,0.6)',
                    border: isHovered
                      ? '1px solid rgba(198,163,74,0.3)'
                      : '1px solid rgba(255,255,255,0.08)',
                    transition: 'box-shadow 0.2s, border 0.2s',
                  }}
                >
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #1a1a1a 0%, #050505 100%)',
                        border: '1px solid rgba(198,163,74,0.2)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: 'clamp(5px, 0.8vw, 8px)',
                          color: 'rgba(198,163,74,0.5)',
                          fontFamily: 'Cinzel, serif',
                          textAlign: 'center',
                          padding: '4px',
                        }}
                      >
                        {card.name}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
