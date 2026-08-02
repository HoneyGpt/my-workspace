import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, X, ChevronLeft, ChevronRight, Sparkles, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export interface MagazinePage {
  pageNumber: number;
  title: string;
  subtitle?: string;
  category: string;
  imageSrc?: string;
  imageCaption?: string;
  contentType: 'cover' | 'editorial' | 'gallery' | 'showcase' | 'manifesto' | 'backcover';
  headline?: string;
  bodyText?: string;
  quote?: string;
  tags?: string[];
  specs?: { label: string; value: string }[];
}

export const defaultMagazinePages: MagazinePage[] = [
  {
    pageNumber: 1,
    title: 'LUMIÈRE SKIN SCIENCE',
    subtitle: 'EDITORIAL ISSUE NO. 01 — SCIENCE MEETS RADIANCE',
    category: 'EDITORIAL COVER',
    contentType: 'cover',
    imageSrc: '/magazine/page1_lumiere_brightening_serum.jpg',
    imageCaption: 'Figure 1.1: LUMIÈRE Brightening Serum — Niacinamide 10%, Vitamin C & Hyaluronic Acid',
    headline: 'REVEAL YOUR NATURAL GLOW',
    bodyText: 'Our advanced Brightening Serum is powered by clinically proven active ingredients that work in complete harmony with your skin to eliminate dark spots, boost luminescence, and deeply plump cell layers.',
    quote: '"Clinically Proven: 93% saw brighter, smoother skin in 4 weeks."',
    tags: ['Niacinamide 10%', 'Vitamin C', 'Hyaluronic Acid', 'Dermatologically Tested'],
    specs: [
      { label: 'CLINICAL RATING', value: '93% Brighter Tone' },
      { label: 'FORMULATION', value: 'Paraben & Cruelty Free' },
      { label: 'VOLUME', value: '30 ml e 1.01 fl. oz.' },
    ],
  },
  {
    pageNumber: 2,
    title: 'MIDNIGHT RENEWAL',
    subtitle: 'RETINOL NIGHT SERUM 0.3%',
    category: 'NOCTURNAL REPAIR',
    contentType: 'editorial',
    imageSrc: '/magazine/page2_lumora_midnight_renewal.jpg',
    imageCaption: 'Figure 1.2: LUMORA Midnight Renewal — Micro-encapsulated Retinol & Squalane Dropper',
    headline: 'OVERNIGHT CELLULAR RENEWAL',
    bodyText: 'Formulated with 0.3% pure micro-encapsulated Retinol, Squalane, Bakuchiol, and Centella Asiatica Extract. Designed to accelerate cellular turnover, diminish fine lines, and soothe night-time skin inflammation.',
    quote: '"Gentle, high-precision potency crafted in a frosted lavender glass dropper."',
    tags: ['0.3% Retinol', 'Squalane', 'Bakuchiol', 'Made in Korea'],
    specs: [
      { label: 'RECOMMENDED USE', value: 'Nightly (2-3 drops)' },
      { label: 'FINISH TYPE', value: 'Silky, Non-greasy' },
      { label: 'BOTTLING', value: 'UV-Protected Frosted Glass' },
    ],
  },
  {
    pageNumber: 3,
    title: 'BRAND IDENTITY & SYSTEM',
    subtitle: 'LUMORA — SCIENCE THAT FEELS HUMAN',
    category: 'DESIGN ARCHITECTURE',
    contentType: 'showcase',
    imageSrc: '/magazine/page3_lumora_brand_identity.jpg',
    imageCaption: 'Figure 2.1: Full Visual Brand System, Typography Hierarchy & Retail Display Architecture',
    headline: 'TACTILE PACKAGING & TYPOGRAPHY',
    bodyText: 'A cohesive luxury skincare system blending Playfair Display serif headlines with clean Montserrat technical specifications. Grounded in a warm ivory palette with subtle debossed logo stamps.',
    quote: '"Premium, Modern, Natural, Innovative, Refined, Calm & Confident."',
    tags: ['Brand Guidelines', 'Typography System', 'Color Palette', 'Retail Display'],
    specs: [
      { label: 'PALETTE', value: 'Warm Ivory, Soft Sand, Sage Green' },
      { label: 'TYPOGRAPHY', value: 'Playfair Display + Montserrat' },
      { label: 'PACKAGING', value: 'Soft-Touch Matte & Embossed' },
    ],
  },
  {
    pageNumber: 4,
    title: 'HYDRA VEIL ESSENCE',
    subtitle: 'DEEP HYDRATION ESSENCE 120ML',
    category: 'ESSENTIAL HYDRATION',
    contentType: 'gallery',
    imageSrc: '/magazine/page4_lumora_hydra_veil.jpg',
    imageCaption: 'Figure 2.2: LUMORA Hydra Veil Essence — Crystal Clear Reservoir with Champagne Pump',
    headline: 'WEIGHTLESS MOISTURE BARRIER',
    bodyText: 'A weightless hydration essence formulated to flood skin layers with instant moisture and prepare skin for deep serum absorption. Encased in a brushed champagne gold pump assembly.',
    quote: '"Quenches thirsty skin with zero sticky residue or shine."',
    tags: ['Deep Hydration', '120ml Reservoir', 'Seawater Minerals', 'Pre-Serum Step'],
    specs: [
      { label: 'KEY BENEFIT', value: 'Instant Barrier Prep' },
      { label: 'TEXTURE', value: 'Ultra-Light Fluid' },
      { label: 'VOLUME', value: '120 ml' },
    ],
  },
  {
    pageNumber: 5,
    title: 'BARRIER RESTORE CREAM',
    subtitle: 'CERAMIDE + PEPTIDE MOISTURIZER 50ML',
    category: 'BARRIER DEFENSE',
    contentType: 'showcase',
    imageSrc: '/magazine/page5_lumora_barrier_restore.jpg',
    imageCaption: 'Figure 3.1: LUMORA Barrier Restore Cream — Rich Ceramide Jar with Stamped Base Signature',
    headline: 'EPIDERMAL REPAIR & LIPID RECOVERY',
    bodyText: 'A velvety, rich moisture cream packed with multi-weight Ceramides, Peptides, and Centella Asiatica. Restores compromised skin barriers while locking in vital hydration for 24+ hours.',
    quote: '"Silky cream texture housed in a heavy-weight frosted glass jar with embossed metallic lid."',
    tags: ['Ceramides', 'Peptide Complex', 'Centella Extract', '24H Moisture'],
    specs: [
      { label: 'PRIMARY ACTION', value: 'Barrier Seal & Repair' },
      { label: 'CONTAINER', value: 'Heavy Glass Jar (50ml)' },
      { label: 'COMPATIBILITY', value: 'Sensitive & Dry Skin' },
    ],
  },
  {
    pageNumber: 6,
    title: 'GENTLE CLOUD CLEANSER',
    subtitle: 'AMINO ACID FACIAL CLEANSER 150ML',
    category: 'PURIFYING STEP',
    contentType: 'editorial',
    imageSrc: '/magazine/page6_lumora_gentle_cleanser.jpg',
    imageCaption: 'Figure 3.2: LUMORA Gentle Cloud Cleanser — Amino Acid Cream Formula & Matte Tube',
    headline: 'PILLOW-SOFT CLOUD FOAM',
    bodyText: 'A gentle, pH-balanced cream cleanser enriched with essential Amino Acids and Hyaluronic Acid. Gently melts impurities and daily residue without stripping essential moisture barriers.',
    quote: '"Creamy cloud lather that leaves skin refreshed, calm, and supple."',
    tags: ['Amino Acids', 'pH Balanced', 'Hyaluronic Acid', '150ml Tube'],
    specs: [
      { label: 'CLEANSING METHOD', value: 'Gentle Amino Lather' },
      { label: 'VOLUME', value: '150 ml e 5.07 fl. oz.' },
    ],
  },
  {
    pageNumber: 7,
    title: 'FOCUS — MASTER YOUR ATTENTION',
    subtitle: 'UI / UX DESIGN & PRODUCT SYSTEM',
    category: 'DIGITAL EXPERIENCE',
    contentType: 'showcase',
    imageSrc: '/magazine/page7_focus_app_ui.jpg',
    imageCaption: 'Figure 4.1: Focus Mobile App UI — Deep Study Sessions, App Blocking & Parent Insights',
    headline: 'STAY FOCUSED. WE HANDLE DISTRACTIONS.',
    bodyText: 'A modern mobile application designed to eliminate digital fatigue. Features Deep Study Sessions (24:59 Pomodoro Timer), strict App Blocking (YouTube, Instagram, TikTok), Parental Lock, and Live Insights.',
    quote: '"Deep study sessions, app blocking, parental insights & no-stop mode."',
    tags: ['iOS & Android', 'UI Design', 'Framer Motion', 'Productivity App'],
    specs: [
      { label: 'STREAK SYSTEM', value: '18 Days Active' },
      { label: 'BLOCKING ENGINE', value: 'Real-Time Distraction Shield' },
    ],
  },
  {
    pageNumber: 8,
    title: 'EYE RENEWAL GEL',
    subtitle: 'PEPTIDE + CAFFEINE COMPLEX 15ML',
    category: 'OCULAR TREATMENT',
    contentType: 'editorial',
    imageSrc: '/magazine/page8_lumora_eye_renewal_gel.jpg',
    imageCaption: 'Figure 4.2: LUMORA Eye Renewal Gel — Cooling Precision Tip & Gel Droplet Detail',
    headline: 'COOLING ILLUMINATING EYE THERAPY',
    bodyText: 'Formulated with a potent Peptide & Caffeine Complex to reduce puffiness, brighten dark under-eye circles, and smooth micro-creases. Features a cool-touch metallic pump tip.',
    quote: '"Cooling gel texture for instant awakening and fatigue relief."',
    tags: ['Peptide Complex', 'Caffeine 3%', 'Cooling Gel', '15ml Pump'],
    specs: [
      { label: 'TARGET AREA', value: 'Periorbital Contour' },
      { label: 'APPLICATOR', value: 'Cool-Touch Precision Pump' },
    ],
  },
  {
    pageNumber: 9,
    title: 'COLLEGE T-SHIRT COLLECTION',
    subtitle: 'FOCUS • DISCIPLINE • TIME • SUCCESS',
    category: 'APPAREL & MERCH',
    contentType: 'gallery',
    imageSrc: '/magazine/page9_focus_tshirt_collection.jpg',
    imageCaption: 'Figure 5.1: Focus College Merch — Oversized Heavyweight Cotton Graphic Tees',
    headline: 'OVERSIZED COLLEGE APPAREL DESIGN',
    bodyText: 'Heavyweight premium cotton T-shirts featuring bold typographic prints ("Focus On The Now, Create Your Future", "Block Distractions Build Future", "Stay Focused Every Minute Matters"), custom neck prints, and woven sleeve tags.',
    quote: '"Oversized modern college fit with high-density durable screen prints."',
    tags: ['Apparel Design', '100% Heavy Cotton', 'Typography', 'Merch Line'],
    specs: [
      { label: 'FIT TYPE', value: 'Oversized College Fit' },
      { label: 'COLORWAYS', value: 'Black, Cream, Purple, Navy' },
    ],
  },
  {
    pageNumber: 10,
    title: 'VITAMIN RADIANCE SERUM',
    subtitle: '15% STABILIZED VITAMIN C 30ML',
    category: 'BACK COVER SPREAD',
    contentType: 'backcover',
    imageSrc: '/magazine/page10_lumora_vitamin_radiance.jpg',
    imageCaption: 'Figure 5.2: LUMORA Vitamin Radiance Serum — Amber Glass Dropper & Outer Box Packaging',
    headline: 'GOLDEN HOUR ANTIOXIDANT SHIELD',
    bodyText: 'A high-potency antioxidant serum containing 15% Stabilized Vitamin C, Ferulic Acid, and Vitamin E. Neutralizes free radicals, brightens hyperpigmentation, and imparts a luminous golden hour glow.',
    quote: '"Science that feels human — Harshita Archive Volume 01 Complete."',
    tags: ['15% Vitamin C', 'Ferulic Acid', 'Vitamin E', 'Antioxidant Glow'],
    specs: [
      { label: 'POTENCY', value: '15% Stabilized Active' },
      { label: 'PUBLICATION', value: 'Issue No. 01 Complete' },
    ],
  },
];

interface MagazineBookProps {
  isOpen: boolean;
  onClose: () => void;
  pages?: MagazinePage[];
}

export const MagazineBook: React.FC<MagazineBookProps> = ({
  isOpen,
  onClose,
  pages = defaultMagazinePages,
}) => {
  const [spreadIndex, setSpreadIndex] = useState(0);
  const totalSpreads = Math.ceil(pages.length / 2);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' || e.key === 'PageDown') nextSpread();
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') prevSpread();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, spreadIndex]);

  if (!isOpen) return null;

  const leftPageIndex = spreadIndex * 2;
  const rightPageIndex = spreadIndex * 2 + 1;
  const leftPage = pages[leftPageIndex];
  const rightPage = pages[rightPageIndex];

  const nextSpread = () => {
    if (spreadIndex < totalSpreads - 1) {
      setSpreadIndex(prev => prev + 1);
      playClickSound('high');
    }
  };

  const prevSpread = () => {
    if (spreadIndex > 0) {
      setSpreadIndex(prev => prev - 1);
      playClickSound('low');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(10, 10, 14, 0.92)',
          backdropFilter: 'blur(20px)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '1.5rem',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        {/* TOP CONTROL PANEL */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '1rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#FAF8F3',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                backgroundColor: '#F5C84C',
                color: '#18181B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 14px rgba(245, 200, 76, 0.5)',
              }}
            >
              <BookOpen size={18} />
            </div>
            <div>
              <div className="mono" style={{ fontSize: '0.85rem', fontWeight: 800, color: '#F5C84C', letterSpacing: '0.08em' }}>
                LUMIÈRE, LUMORA & FOCUS // EDITORIAL ARCHIVE
              </div>
              <div style={{ fontSize: '0.75rem', color: '#A1A1AA' }}>
                Spread {spreadIndex + 1} of {totalSpreads} (Pages {leftPage ? leftPage.pageNumber : ''} - {rightPage ? rightPage.pageNumber : ''})
              </div>
            </div>
          </div>

          {/* SPREAD NAV CONTROLS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={prevSpread}
              disabled={spreadIndex === 0}
              onMouseEnter={playHoverSound}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backgroundColor: spreadIndex === 0 ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.12)',
                color: spreadIndex === 0 ? '#52525B' : '#FFF',
                cursor: spreadIndex === 0 ? 'not-allowed' : 'pointer',
                fontSize: '0.8rem',
                fontWeight: 600,
                fontFamily: 'var(--font-mono)',
              }}
            >
              <ChevronLeft size={16} /> PREV SPREAD
            </button>

            {/* Quick Spread Selector Dots */}
            <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
              {Array.from({ length: totalSpreads }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setSpreadIndex(idx); playClickSound('medium'); }}
                  style={{
                    width: idx === spreadIndex ? 22 : 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: idx === spreadIndex ? '#F5C84C' : 'rgba(255, 255, 255, 0.25)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  title={`Go to Spread ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSpread}
              disabled={spreadIndex === totalSpreads - 1}
              onMouseEnter={playHoverSound}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backgroundColor: spreadIndex === totalSpreads - 1 ? 'rgba(255, 255, 255, 0.04)' : '#F5C84C',
                color: spreadIndex === totalSpreads - 1 ? '#52525B' : '#18181B',
                cursor: spreadIndex === totalSpreads - 1 ? 'not-allowed' : 'pointer',
                fontSize: '0.8rem',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)',
              }}
            >
              NEXT SPREAD <ChevronRight size={16} />
            </button>
          </div>

          {/* CLOSE BUTTON */}
          <button
            onClick={() => { onClose(); playClickSound('low'); }}
            onMouseEnter={playHoverSound}
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            title="Close Magazine (Esc)"
          >
            <X size={20} />
          </button>
        </div>

        {/* MAIN MAGAZINE SPREAD CANVAS CONTAINER */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem 0',
            perspective: '1200px',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={spreadIndex}
              initial={{ opacity: 0, rotateY: -12, scale: 0.96 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: 12, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: '100%',
                maxWidth: '1260px',
                height: 'calc(100vh - 170px)',
                maxHeight: '760px',
                backgroundColor: '#FAF7F0',
                borderRadius: '16px',
                boxShadow: '0 30px 90px rgba(0, 0, 0, 0.7), inset 0 0 60px rgba(0,0,0,0.05)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.15)',
              }}
            >
              {/* CENTER SPINE CREASE SHADOW */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: '50%',
                  width: '30px',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(to right, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.02) 40%, rgba(0,0,0,0.02) 60%, rgba(0,0,0,0.18) 100%)',
                  zIndex: 20,
                  pointerEvents: 'none',
                }}
              />

              {/* LEFT PAGE */}
              <RenderPageContent page={leftPage} side="left" />

              {/* RIGHT PAGE */}
              <RenderPageContent page={rightPage} side="right" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM FOOTER */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '0.8rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            fontSize: '0.78rem',
            color: '#A1A1AA',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Sparkles size={14} color="#F5C84C" />
            <span>Use Left & Right Arrow keys or buttons to navigate 5 spreads (10 pages)</span>
          </div>

          <div style={{ color: '#8FAF90', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={14} />
            <span>10 High-Res Design & Product Spreads Active</span>
          </div>

          <div>
            HARSHITA EDITORIAL ARCHIVE // ISSUE NO. 01
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// RENDER INDIVIDUAL PAGE
const RenderPageContent: React.FC<{ page?: MagazinePage; side: 'left' | 'right'; sideProps?: any }> = ({ page, side }) => {
  if (!page) {
    return (
      <div style={{ padding: '3rem', backgroundColor: '#F4EFE6', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#A1A1AA', fontFamily: 'var(--font-mono)' }}>BLANK PAGE</span>
      </div>
    );
  }

  const isCover = page.contentType === 'cover';
  const isBackCover = page.contentType === 'backcover';

  return (
    <div
      style={{
        padding: isCover || isBackCover ? '2rem 2.4rem' : '2.2rem 2.6rem',
        height: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflowY: 'auto',
        backgroundColor: isCover ? '#1A1917' : isBackCover ? '#232220' : '#FAF7F0',
        color: isCover || isBackCover ? '#FAF8F3' : '#1C1C20',
        borderRight: side === 'left' ? '1px solid rgba(0,0,0,0.06)' : 'none',
      }}
    >
      {/* PAGE HEADER ROW */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: isCover || isBackCover ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,0,0,0.1)',
          paddingBottom: '0.5rem',
          marginBottom: '0.8rem',
        }}
      >
        <span className="mono" style={{ fontSize: '0.7rem', letterSpacing: '0.12em', opacity: 0.7 }}>
          {page.category}
        </span>
        <span className="mono" style={{ fontSize: '0.78rem', fontWeight: 800, color: isCover ? '#F5C84C' : '#8FAF90' }}>
          PAGE {page.pageNumber < 10 ? `0${page.pageNumber}` : page.pageNumber}
        </span>
      </div>

      {/* PAGE BODY CONTENT */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {/* Page Title & Subtitle */}
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isCover ? '2.1rem' : '1.65rem',
              lineHeight: 1.12,
              margin: '0 0 0.25rem 0',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            {page.title}
          </h2>
          {page.subtitle && (
            <div className="mono" style={{ fontSize: '0.73rem', color: isCover ? '#F5C84C' : '#6FA8DC', fontWeight: 700 }}>
              {page.subtitle}
            </div>
          )}
        </div>

        {/* HIGH-RES PRODUCT IMAGE CONTAINER */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: isCover ? '240px' : '210px',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: '#000',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
            border: isCover ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.15)',
          }}
        >
          {page.imageSrc ? (
            <img
              src={page.imageSrc}
              alt={page.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <ImageIcon size={32} opacity={0.4} />
              <div className="mono" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>IMAGE CONTAINER #{page.pageNumber}</div>
            </div>
          )}
        </div>

        {/* Pull Quote */}
        {page.quote && (
          <div
            style={{
              padding: '0.65rem 0.9rem',
              backgroundColor: isCover || isBackCover ? 'rgba(255,255,255,0.06)' : 'rgba(245, 200, 76, 0.12)',
              borderRadius: '8px',
              borderLeft: '4px solid #F5C84C',
              fontStyle: 'italic',
              fontFamily: 'var(--font-serif)',
              fontSize: '0.9rem',
              lineHeight: 1.35,
            }}
          >
            {page.quote}
          </div>
        )}

        {/* Headline & Body Text */}
        {page.headline && (
          <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0', fontFamily: 'var(--font-serif)' }}>
            {page.headline}
          </h3>
        )}

        {page.bodyText && (
          <p style={{ fontSize: '0.85rem', lineHeight: 1.5, opacity: 0.88, margin: 0 }}>
            {page.bodyText}
          </p>
        )}

        {/* Key Product Specifications */}
        {page.specs && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '0.4rem',
              backgroundColor: isCover || isBackCover ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
              padding: '0.55rem 0.75rem',
              borderRadius: '8px',
              border: isCover || isBackCover ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.06)',
            }}
          >
            {page.specs.map(s => (
              <div key={s.label}>
                <div className="mono" style={{ fontSize: '0.6rem', opacity: 0.6, letterSpacing: '0.05em' }}>{s.label}</div>
                <div style={{ fontSize: '0.74rem', fontWeight: 700 }}>{s.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        {page.tags && page.tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto' }}>
            {page.tags.map(t => (
              <span
                key={t}
                className="mono"
                style={{
                  fontSize: '0.64rem',
                  padding: '0.18rem 0.45rem',
                  borderRadius: '4px',
                  backgroundColor: isCover || isBackCover ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)',
                  fontWeight: 600,
                  opacity: 0.85,
                }}
              >
                #{t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* PAGE FOOTER ROW */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: isCover || isBackCover ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)',
          paddingTop: '0.5rem',
          marginTop: '0.8rem',
          fontSize: '0.7rem',
          fontFamily: 'var(--font-mono)',
          opacity: 0.6,
        }}
      >
        <span>HARSHITA EDITORIAL ARCHIVE</span>
        <span>ISSUE 01</span>
      </div>
    </div>
  );
};
