import { motion } from 'motion/react';
import { Starfield } from './components/Starfield';
import { ModuleGrid } from './components/ModuleGrid';
import { PricingCards } from './components/PricingCards';
import { ImageCarousel } from './components/ImageCarousel';
import { ModuleIcons } from './components/ModuleIcons';
import { FannedCardCarousel } from '@/components/fanned-card-carousel';
const heroBanner = '/assets/541fa1380bfa098c484dd631a820d9439846629f.webp';
const deckImage = '/assets/7086af7a1cd7fbaa60dd649af91bc8dba0c82b0f.webp';

const tarotCards = [
  { name: 'The Fool', image: null },
  { name: 'The Magician', image: null },
  { name: 'The High Priestess', image: '/images/tarot/high-priestess.png' },
  { name: 'The Empress', image: '/images/tarot/empress.png' },
  { name: 'The Emperor', image: '/images/tarot/emperor.png' },
  { name: 'The Hierophant', image: '/images/tarot/hierophant.png' },
  { name: 'The Lovers', image: null },
  { name: 'The Chariot', image: null },
  { name: 'Strength', image: '/images/tarot/strength.png' },
  { name: 'The Hermit', image: null },
  { name: 'Wheel of Fortune', image: null },
  { name: 'Justice', image: '/images/tarot/justice.png' },
  { name: 'The Hanged Man', image: null },
  { name: 'Death', image: null },
  { name: 'Temperance', image: '/images/tarot/temperance.png' },
  { name: 'The Devil', image: null },
  { name: 'The Tower', image: '/images/tarot/tower.png' },
  { name: 'The Star', image: null },
  { name: 'The Moon', image: null },
  { name: 'The Sun', image: null },
  { name: 'Judgment', image: '/images/tarot/judgment.png' },
  { name: 'The World', image: '/images/tarot/world.png' },
];

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Starfield background */}
      <Starfield />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl"
          >
            {/* Logo */}
            <div className="mb-8 sm:mb-16">
              <img 
                src={heroBanner} 
                alt="SYGNS by Denmark+Winter"
                className="w-full max-w-2xl mx-auto px-4"
                style={{ opacity: 0.95 }}
              />
            </div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-6 sm:mb-12 px-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                lineHeight: '1.3',
                color: 'rgba(255, 255, 255, 0.95)',
                letterSpacing: '-0.02em',
              }}
            >
              A Symbolic Operating System
            </motion.h1>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-14"
            >
              {/* Apple App Store Button */}
              <button
                className="flex items-center gap-3 px-8 py-3 rounded-md transition-all duration-300 hover:bg-white/10 relative"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  fontFamily: 'Inter, sans-serif',
                  background: 'rgba(0, 0, 0, 0.4)',
                }}
              >
                <img src="/images/apple-logo.png" alt="Apple" className="w-7 h-7" />
                <div className="text-left">
                  <div
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 300,
                      color: 'rgba(255, 255, 255, 0.7)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Download on the
                  </div>
                  <div
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.95)',
                      letterSpacing: '-0.01em',
                      marginTop: '-2px',
                    }}
                  >
                    App Store
                  </div>
                </div>
              </button>

              {/* Google Play Button */}
              <button
                className="flex items-center gap-3 px-8 py-3 rounded-md transition-all duration-300 hover:bg-white/10 relative"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  fontFamily: 'Inter, sans-serif',
                  background: 'rgba(0, 0, 0, 0.4)',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#00D9FF"/>
                  <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#FFCE00"/>
                  <path d="M3.84 2.15C4.27 1.93 4.79 2.01 5.16 2.35L16.81 8.88L14.54 11.15L3.84 2.15Z" fill="#00F076"/>
                  <path d="M16.81 8.88L19.69 10.54C20.41 10.96 20.41 12.04 19.69 12.46L16.81 14.12L14.54 11.85L16.81 8.88Z" fill="#FF3E00"/>
                </svg>
                <div className="text-left">
                  <div
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 300,
                      color: 'rgba(255, 255, 255, 0.7)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    GET IT ON
                  </div>
                  <div
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.95)',
                      letterSpacing: '-0.01em',
                      marginTop: '-2px',
                    }}
                  >
                    Google Play
                  </div>
                </div>
              </button>
            </motion.div>

            {/* Module Icons */}
            <ModuleIcons />
          </motion.div>
        </section>

        {/* Section 2: What It Is */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-3xl"
          >
            {/* Body */}
            <div
              className="text-left"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(0.9375rem, 2.5vw, 1.125rem)',
                lineHeight: '1.9',
                color: 'rgba(255, 255, 255, 0.55)',
                letterSpacing: '0.02em',
              }}
            >
              {/* Intro */}
              <p className="mb-10" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                <strong style={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.95)' }}>SYGNS</strong> is a personal inner navigation app that integrates symbolic tools with memory to support <strong style={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.85)' }}>daily focus and direction</strong>. It helps you make sense of signals over time and decide what to focus on next.
              </p>

              {/* Editorial break */}
              <div className="my-12 space-y-1" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', lineHeight: '2.2' }}>
                <p>Most systems promise clarity</p>
                <p>by adding <strong style={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.85)' }}>more</strong>.</p>
                <p className="pt-4" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>More data.</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.4)' }}>More options.</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.4)' }}>More interpretation.</p>
              </div>

              <p className="my-12" style={{ fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 400, letterSpacing: '-0.01em' }}>
                SYGNS removes.
              </p>

              <p className="mb-12" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                It subtracts until the structure appears.
              </p>

              <div className="mb-12 space-y-1" style={{ color: 'rgba(255, 255, 255, 0.45)', fontStyle: 'italic' }}>
                <p>Not prophecy.</p>
                <p>Not therapy.</p>
              </div>

              <p className="mb-16" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                Simply <strong style={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.95)' }}>personalized observation</strong>. An analytical layer between instinct and action.
              </p>

              {/* Modules */}
              <div className="space-y-6">
                <p>
                  <strong style={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.95)' }}>Daily Focus</strong>
                  <br />
                  <span>Identifies what requires your attention right now.</span>
                </p>
                <p>
                  <strong style={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.95)' }}>Oracle</strong>
                  <br />
                  <span>Reveals the blind spots through tarot: both traditionally and in a completely modern way.</span>
                </p>
                <p>
                  <strong style={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.95)' }}>Andromeda</strong>
                  <br />
                  <span>Measures tension and alignment between people.</span>
                </p>
                <p>
                  <strong style={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.95)' }}>Crossroads</strong>
                  <br />
                  <span>Separates signal from emotional interference when you're feeling stuck.</span>
                </p>
                <p>
                  <strong style={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.95)' }}>Numbers</strong>
                  <br />
                  <span>Maps recurring life architecture.</span>
                </p>
                <p>
                  <strong style={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.95)' }}>Chinese Zodiac</strong>
                  <br />
                  <span>Defines behavioral defaults.</span>
                </p>
                <p>
                  <strong style={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.95)' }}>Stars</strong>
                  <br />
                  <span>Positions identity within larger archetypal systems.</span>
                </p>
                <p>
                  <strong style={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.95)' }}>Morpheus</strong>
                  <br />
                  <span>Translates subconscious imagery into usable insight by helping you interpret your dreams.</span>
                </p>
              </div>
            </div>

            {/* Image Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true, amount: 0.1 }}
              className="mt-12 sm:mt-20 w-full"
            >
              <ImageCarousel />
            </motion.div>
          </motion.div>
        </section>

        {/* Echo Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 sm:py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-4xl"
          >
            {/* Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
              className="mb-10"
            >
              <img
                src="/images/echo-banner.png"
                alt="Echo"
                className="w-full max-w-md mx-auto"
                style={{ opacity: 0.9 }}
              />
            </motion.div>

            {/* Echo Text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true, amount: 0.1 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(0.9375rem, 2.5vw, 1.125rem)',
                lineHeight: '1.9',
                letterSpacing: '0.02em',
              }}
            >
              <p className="mb-10" style={{ fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 400, letterSpacing: '-0.01em' }}>
                <strong style={{ fontWeight: 500 }}>Echo</strong> is the adaptive memory infrastructure.
              </p>

              <div className="mb-10 space-y-1" style={{ color: 'rgba(255, 255, 255, 0.55)' }}>
                <p>It tracks behavior.</p>
                <p>Learns rhythm.</p>
                <p>Recognizes recurrence.</p>
              </div>

              <p className="mb-10" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                Then it returns the signal at the <strong style={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.95)' }}>precise moment</strong> it matters.
              </p>

              <div className="mb-10 space-y-1" style={{ color: 'rgba(255, 255, 255, 0.45)', fontStyle: 'italic' }}>
                <p>Not reactive.</p>
                <p>Not random.</p>
              </div>

              <p className="mb-10" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 400 }}>
                Echo is what makes the system <strong style={{ fontWeight: 500 }}>aware</strong>.
              </p>

              <p className="mb-10" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                It is the layer that connects everything together.
              </p>

              <p style={{ color: 'rgba(255, 255, 255, 0.55)' }}>
                Give it <strong style={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.85)' }}>one week</strong>. That's all Echo needs to begin recognizing your patterns.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Section 3: Module Grid */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 sm:py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            className="w-full max-w-7xl"
          >
            {/* Title */}
            <h2
              className="mb-16 text-center px-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                lineHeight: '1.3',
                color: 'rgba(255, 255, 255, 0.95)',
                letterSpacing: '-0.02em',
              }}
            >
              All The <span style={{ fontFamily: 'Cinzel, serif' }}>{'Sygns\u2122'}</span> Modules
            </h2>

            <ModuleGrid />
          </motion.div>
        </section>

        {/* Section 4: How It Works */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 sm:py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-3xl"
          >
            {/* Headline */}
            <h2
              className="mb-12 px-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                lineHeight: '1.3',
                color: 'rgba(255, 255, 255, 0.95)',
                letterSpacing: '-0.02em',
              }}
            >
              Signal Over Noise
            </h2>

            {/* Body */}
            <div
              className="text-left"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(0.9375rem, 2.5vw, 1.125rem)',
                lineHeight: '1.9',
                color: 'rgba(255, 255, 255, 0.55)',
                letterSpacing: '0.02em',
              }}
            >
              <p className="mb-10" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                Most self-reflection tools ask for effort in visible ways. <strong style={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.9)' }}>Fill this out. Track that.</strong> Sit with your thoughts long enough to prove you're serious about them. Growth becomes something you perform. Insight becomes something you <strong style={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.9)' }}>maintain</strong>.
              </p>

              <p className="mb-12" style={{ fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 400, letterSpacing: '-0.01em' }}>
                SYGNS takes a quieter approach.
              </p>

              <p className="mb-10" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                You open it when something feels off, or when something feels important. You engage with what's relevant. Then you close it and get on with your day.
              </p>

              <div className="mb-10 space-y-1" style={{ color: 'rgba(255, 255, 255, 0.45)', fontStyle: 'italic' }}>
                <p>No streaks to protect.</p>
                <p>No reminders pulling at you.</p>
                <p>No gamified reward for showing up.</p>
              </div>

              <p className="mb-12" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 400 }}>
                The intelligence accumulates anyway.
              </p>

              <p className="mb-10" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                Over time, it begins to recognize the shape of your decision-making — what themes repeat, what tensions recur, what feels urgent but <strong style={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.85)' }}>rarely matters</strong>. It learns your timing. Your patterns. Your blind spots.
              </p>

              <p className="mb-10" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                Gradually, the noise around you loses authority.
              </p>

              <p className="mb-12 text-center" style={{ fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 400, letterSpacing: '-0.01em' }}>
                What remains is the <strong style={{ fontWeight: 500 }}>signal</strong>.
              </p>

              <p className="mb-10" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                With SYGNS, you are not being guided or controlled.
              </p>

              <p className="mb-12" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 400 }}>
                You are being <strong style={{ fontWeight: 500 }}>calibrated</strong>.
              </p>

              <p className="mb-10" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                And calibration changes what you choose next.
              </p>

              <p style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                Ultimately, you control your own destiny — but sometimes you need clarity on the <strong style={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.95)' }}>SYGNS</strong> to choose which path to take.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section 5: Get Your Deck */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 sm:py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-4xl"
          >
            {/* Headline */}
            <h2
              className="mb-8 px-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                lineHeight: '1.3',
                color: 'rgba(255, 255, 255, 0.95)',
                letterSpacing: '-0.02em',
              }}
            >
              Get Your Deck
            </h2>

            {/* Deck Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
              className="mb-10"
            >
              <img
                src={deckImage}
                alt="Oracle Tarot Re:Imagined"
                className="w-full max-w-2xl mx-auto"
                style={{ opacity: 0.9 }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true, amount: 0.1 }}
              className="mb-10"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: 'rgba(255, 255, 255, 0.7)',
                letterSpacing: '0.02em',
              }}
            >
              Get your Oracle Tarot Re:Imagined deck and unlock the full power of The Oracle.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <a
                href="https://denmarkandwinterstore.myshopify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 rounded-sm transition-all duration-300 hover:bg-[#C6A34A] hover:border-[#C6A34A] relative"
                style={{
                  border: '1px solid #C6A34A',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '0.875rem',
                  letterSpacing: '0.1em',
                  color: '#C6A34A',
                  background: 'transparent',
                  textDecoration: 'none',
                }}
              >
                <span className="relative z-10">GET YOUR DECK</span>
              </a>
            </motion.div>

            {/* Fanned Card Display */}
            <FannedCardCarousel cards={tarotCards} />
          </motion.div>
        </section>

        {/* Section 6: Pricing */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 sm:py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="w-full max-w-7xl"
          >
            {/* Headline */}
            <h2
              className="mb-16 text-center px-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                lineHeight: '1.3',
                color: 'rgba(255, 255, 255, 0.95)',
                letterSpacing: '-0.02em',
              }}
            >
              Activate Your System
            </h2>

            <PricingCards />
          </motion.div>
        </section>

        {/* Section 7: Final CTA */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 sm:py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-3xl"
          >
            {/* Headline */}
            <h2
              className="mb-12 px-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                lineHeight: '1.3',
                color: 'rgba(255, 255, 255, 0.95)',
                letterSpacing: '-0.02em',
              }}
            >
              The system is here
            </h2>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
              className="mb-16"
            >
              <img 
                src={heroBanner} 
                alt="SYGNS by Denmark+Winter"
                className="w-full max-w-md mx-auto"
                style={{ opacity: 0.95 }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Footer spacing */}
        <div className="h-32" />
      </div>
    </div>
  );
}
