import { motion } from 'motion/react';
import { useState } from 'react';
const andromedaIcon = '/assets/c2c0ae075938ff819734b5e062585cd82da6f058.webp';
const dailyFocusIcon = '/assets/7112c14abe836080e0785793f72d1479aaba5bac.webp';
const echoIcon = '/assets/6012111e2b4552c79e2d037fcd56ff6b5b87d94a.webp';
const numbersIcon = '/assets/b9faebac3f7ff6c45bbd41e533190748f492b7b2.webp';
const oracleIcon = '/assets/b3cc679cd7a9df1556bc3a77abea365946f5be26.webp';
const starsIcon = '/assets/5b8c23e12d743c4c727a3822e076612f393a0399.webp';
const twoPathsIcon = '/assets/ef591ddbd26d1732d5a27cabfe5e2aa01246077e.webp';
const morpheusIcon = '/assets/700b5699d405c9c453430414d64de61d701fccc8.webp';
const zodiacIcon = '/assets/6fdb6bd1ac7932d08211efd297118efd67ee854f.webp';

interface Module {
  name: string;
  color: string;
  icon?: string;
  description: string;
}

const modules: Module[] = [
  { 
    name: 'Daily Focus', 
    color: '#60A5FA', 
    icon: dailyFocusIcon,
    description: 'Your numbers and zodiac are saved the first time you use the app. From there, SYGNS weaves together your dreams, journal entries, and Oracle reflections to highlight what deserves your attention today.'
  },
  { 
    name: 'The Oracle', 
    color: '#A78BFA', 
    icon: oracleIcon,
    description: 'A guided, tarot card based experience designed to help you pause, reflect, and choose your next step with clarity. Explore it three ways: Capsule, Deck, or Crossroads.'
  },
  { 
    name: 'Andromeda', 
    color: '#F472B6', 
    icon: andromedaIcon,
    description: 'A guided reflection space for complicated relationships. Romantic, platonic, familial, or somewhere in between. If something feels off but you can\'t quite name it, Andromeda helps you slow down and see the situation more clearly.'
  },
  { 
    name: 'Two Paths', 
    color: '#FB923C', 
    icon: twoPathsIcon,
    description: 'When you\'re wondering if you and someone else are truly meant to move forward together, this helps you see whether your paths actually align.'
  },
  { 
    name: 'Numbers', 
    color: '#4ADE80', 
    icon: numbersIcon,
    description: 'Uses your birth date and name to reveal the patterns that tend to repeat in your life. Less about prediction. More about recognizing the cycles you naturally create.'
  },
  { 
    name: 'Chinese Zodiac', 
    color: '#EF4444', 
    icon: zodiacIcon,
    description: 'Your Chinese zodiac sign reveals your instinctive approach to life; how you tend to handle conflict, ambition, and relationships.'
  },
  { 
    name: 'Stars', 
    color: '#818CF8', 
    icon: starsIcon,
    description: 'Your birth chart, read as a map of energy. Where things flow naturally, where resistance appears, and what you\'re built for.'
  },
  { 
    name: 'Echo Journaling', 
    color: '#2DD4BF', 
    icon: echoIcon,
    description: 'Your journal learns with you. Over time it notices patterns, connects ideas across entries, and surfaces insights when they matter most.'
  },
  { 
    name: 'Morpheus', 
    color: '#C084FC', 
    icon: morpheusIcon,
    description: 'A place to record and interpret your dreams. Each entry is saved with the date so you can revisit them and notice patterns as they unfold over time.'
  },
];

export function ModuleGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 w-full max-w-6xl mx-auto">
      {modules.map((module, index) => {
        const isActive = hoveredIndex === index || selectedIndex === index;
        return (
          <motion.div
            key={module.name}
            className="module-grid-item relative aspect-square flex flex-col items-center justify-center cursor-pointer gap-3"
            style={{
              background: isActive
                ? 'linear-gradient(135deg, rgba(25, 25, 25, 1) 0%, rgba(5, 5, 5, 1) 100%)'
                : 'linear-gradient(135deg, rgba(15, 15, 15, 1) 0%, rgba(0, 0, 0, 1) 100%)',
              transition: 'background 0.3s ease',
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {selectedIndex === index ? (
              // Description state - shows text instead of icon/name
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 py-4 flex flex-col items-center justify-center text-center h-full"
              >
                {/* Module name with accent color */}
                <h4
                  className="mb-3"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    letterSpacing: '0.05em',
                    color: module.color,
                  }}
                >
                  {module.name}
                </h4>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.7rem',
                    lineHeight: '1.5',
                    color: 'rgba(255, 255, 255, 0.75)',
                    letterSpacing: '0.01em',
                  }}
                >
                  {module.description}
                </p>
              </motion.div>
            ) : (
              // Default state - shows icon and module name
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center gap-3"
              >
                {/* Icon */}
                {module.icon && (
                  <img
                    src={module.icon}
                    alt=""
                    className="relative z-10 w-16 h-16"
                  />
                )}

                {/* Module name */}
                <span
                  className="relative z-10 text-white/90 tracking-wide text-center px-4"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  {module.name}
                </span>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
