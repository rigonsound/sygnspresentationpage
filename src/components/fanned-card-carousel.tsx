import { motion } from 'motion/react';

interface TarotCard {
  name: string;
  image: string | null;
}

interface FannedCardCarouselProps {
  cards: TarotCard[];
}

export function FannedCardCarousel({ cards }: FannedCardCarouselProps) {
  const totalCards = cards.length;
  const totalArc = 90; // degrees of the full arc
  const startAngle = -totalArc / 2;
  const angleStep = totalCards > 1 ? totalArc / (totalCards - 1) : 0;
  const radius = 320; // translateY curve radius

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true, amount: 0.1 }}
      className="flex items-center justify-center py-16 sm:py-24 overflow-hidden"
    >
      <div
        className="relative"
        style={{
          width: '100%',
          height: 'clamp(280px, 40vw, 420px)',
        }}
      >
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            transformOrigin: 'center bottom',
            bottom: 0,
          }}
        >
          {cards.map((card, index) => {
            const angle = startAngle + index * angleStep;
            const normalizedAngle = Math.abs(angle) / (totalArc / 2);
            const yOffset = normalizedAngle * normalizedAngle * radius * 0.3;
            const cardWidth = 'clamp(50px, 8vw, 85px)';
            const cardHeight = 'clamp(75px, 12vw, 128px)';

            return (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 * index,
                }}
                viewport={{ once: true }}
                className="absolute"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  left: '50%',
                  bottom: 0,
                  transformOrigin: 'center bottom',
                  transform: `translateX(-50%) rotate(${angle}deg) translateY(-${yOffset}px)`,
                  zIndex: totalCards - Math.abs(Math.round(totalCards / 2) - index),
                }}
              >
                <motion.div
                  className="w-full h-full rounded-sm overflow-hidden cursor-default"
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.15,
                    zIndex: 50,
                    transition: { duration: 0.2 },
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
                        background: 'linear-gradient(135deg, rgba(20,20,20,1) 0%, rgba(5,5,5,1) 100%)',
                        border: '1px solid rgba(198, 163, 74, 0.2)',
                      }}
                    >
                      <div
                        className="text-center"
                        style={{
                          fontSize: 'clamp(4px, 0.7vw, 7px)',
                          color: 'rgba(198, 163, 74, 0.4)',
                          fontFamily: 'Cinzel, serif',
                          letterSpacing: '0.05em',
                          lineHeight: '1.3',
                          padding: '2px',
                        }}
                      >
                        {card.name}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
