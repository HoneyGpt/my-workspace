import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tv, Power, Volume2, VolumeX, Sliders, Sun, Moon, RefreshCw, X, Radio, BookOpen } from 'lucide-react';
import { playClickSound, playHoverSound, playTvPowerSound, playTvStaticSound, playVolumeBeepSound, playPopcornSound } from '../utils/audio';
import { MagazineBook } from './MagazineBook';


export interface ChannelItem {
  id: number;
  numberStr: string;
  title: string;
  category: string;
  type: 'image' | 'video' | 'devmode' | 'nosignal';
  description: string;
  imageSrc?: string;
  videoSrc?: string;
}

export const popcornChannels: ChannelItem[] = [
  {
    id: 1,
    numberStr: '01',
    title: 'Designing Digital Experiences',
    category: 'Editorial UI & 3D Art',
    type: 'image',
    imageSrc: '/popcorn/channel1_editorial.jpg',
    description: 'Immersive digital experience blending high-craft typography, 3D floating minerals, and lavender gradients.',
  },
  {
    id: 2,
    numberStr: '02',
    title: 'Study Materials & Categories',
    category: 'Mentozy Admin Mode UI',
    type: 'image',
    imageSrc: '/popcorn/channel2_studymaterials.png',
    description: 'Unified material distribution system with syllabus, presentations, handouts, recordings, and search.',
  },
  {
    id: 3,
    numberStr: '03',
    title: 'Announcements Publisher',
    category: 'Mentozy Admin Mode UI',
    type: 'image',
    imageSrc: '/popcorn/channel3_announcements.png',
    description: 'Create, schedule, and broadcast announcements to students with live publishing controls.',
  },
  {
    id: 4,
    numberStr: '04',
    title: 'Students Directory & Performance',
    category: 'Mentozy Admin Mode UI',
    type: 'image',
    imageSrc: '/popcorn/channel4_students.png',
    description: 'Comprehensive student roster with grade tags, performance metrics, and active status tracking.',
  },
  {
    id: 5,
    numberStr: '05',
    title: 'Institute Overview & Task Creator',
    category: 'Mentozy Admin Dashboard',
    type: 'image',
    imageSrc: '/popcorn/channel5_dashboard.png',
    description: 'Krishnaite Global Academy administrative dashboard with student counts, task creator, and revenue metrics.',
  },
  {
    id: 6,
    numberStr: '06',
    title: 'Personal Notes & Study Agendas',
    category: 'Mentozy Workspace Mode',
    type: 'image',
    imageSrc: '/popcorn/channel6_notes.png',
    description: 'Keep track of learning notes, lecture outlines, and study agendas with category filters and pinned note cards.',
  },
  {
    id: 7,
    numberStr: '07',
    title: 'NexLab IDE Sandbox',
    category: 'Integrated Web Code Studio',
    type: 'image',
    imageSrc: '/popcorn/channel7_ide.png',
    description: 'Full-featured web IDE with HTML/CSS live preview window, code explorer, terminal shell, and task verifier.',
  },
  {
    id: 8,
    numberStr: '08',
    title: 'Student Workspace Dashboard',
    category: 'Mentozy Student Portal',
    type: 'image',
    imageSrc: '/popcorn/channel8_studentdashboard.png',
    description: 'Active task spaces, peer Slack integration, resource pin boards, and community bulletin updates.',
  },
  {
    id: 9,
    numberStr: '09',
    title: 'My Org Courses & Track Progress',
    category: 'Mentozy Academy Portal',
    type: 'image',
    imageSrc: '/popcorn/channel9_courses.png',
    description: 'Manage and continue enrolled learning tracks (Zero-Trust Architecture, Full-Stack AI) with progress tracking.',
  },
  {
    id: 10,
    numberStr: '10',
    title: 'Learn Easier. Teach Faster. Grow Together.',
    category: 'Mentozy Community Landing',
    type: 'image',
    imageSrc: '/popcorn/channel10_landing.png',
    description: 'Bold, high-impact wireframe landing page connecting active learners with global mentors.',
  },
  {
    id: 11,
    numberStr: '11',
    title: 'Get in Touch — Contact',
    category: 'Krishnaite Enterprise Portal',
    type: 'image',
    imageSrc: '/popcorn/channel11_krishnaite_contact.png',
    description: 'Minimalist warm ivory contact interface for strategic advisory services and collaboration exchanges.',
  },
  {
    id: 12,
    numberStr: '12',
    title: 'Clarity Built Through Structure',
    category: 'Krishnaite Knowledge Library',
    type: 'image',
    imageSrc: '/popcorn/channel12_krishnaite_clarity.png',
    description: '"Clarity is not found in noise. It is built through structure." Minimalist ocean line art quote layout.',
  },
  {
    id: 13,
    numberStr: '13',
    title: 'K-R-I-S-H-N-A Strategic Framework',
    category: 'Krishnaite Strategic Reasoning',
    type: 'image',
    imageSrc: '/popcorn/channel13_krishnaite_framework.png',
    description: 'Strategic thinking, ethical reasoning, and 7-stage execution framework cards.',
  },
  {
    id: 14,
    numberStr: '14',
    title: 'Solve with Strategy. Act with Purpose.',
    category: 'Krishnaite Hero Landing',
    type: 'image',
    imageSrc: '/popcorn/channel14_krishnaite_landing.png',
    description: 'High-craft editorial hero featuring hand-drawn sailing ship illustration on warm ivory canvas.',
  },

  // LIVE VIDEO BROADCAST CHANNELS
  {
    id: 16,
    numberStr: 'L1',
    title: 'Live Stream: Initial Scene MVP',
    category: '● LIVE VIDEO BROADCAST 01',
    type: 'video',
    videoSrc: '/popcorn/live_video1.mp4',
    description: 'Live broadcast video of Initial Scene MVP product walkthrough.',
  },
  {
    id: 17,
    numberStr: 'L2',
    title: 'Live Stream: Realistic Chocolate Ad',
    category: '● LIVE VIDEO BROADCAST 02',
    type: 'video',
    videoSrc: '/popcorn/live_video2.mp4',
    description: 'Live broadcast video of Realistic Chocolate Commercial render.',
  },
  {
    id: 18,
    numberStr: 'L3',
    title: 'Live Stream: Screen Recording MVP',
    category: '● LIVE VIDEO BROADCAST 03',
    type: 'video',
    videoSrc: '/popcorn/live_video3.mp4',
    description: 'Live broadcast video of interactive product screen recording.',
  },

  {
    id: 15,
    numberStr: '15',
    title: 'Developer Mode (Git Shell)',
    category: 'Secret Channel // Kernel Stats',
    type: 'devmode',
    description: 'Live git commit logs, deployment history, funny commit messages, and repository diagnostics.',
  },
  {
    id: 0,
    numberStr: '00',
    title: 'No Signal // Between Ideas',
    category: 'Secret Channel // Standby',
    type: 'nosignal',
    description: 'No signal detected. Tuning frequency...',
  },
];

const liveVideoIds = [16, 17, 18];

const founderCoffeeStories = [
  "Shipped at 2:43 AM. 🚀",
  "One more feature before sleep...",
  "Deploy first. Sleep later.",
  "It worked on localhost! ☕",
  "Coffee > Bugs.",
  "Ideas become products here.",
  "WebRTC engine compiled on 3rd cup.",
  "Late night design review session.",
  "Refactored state machine at dawn.",
];

const gitCommits = [
  { hash: 'e1092a1', msg: 'feat: add Live TV Video channels & Live button video cycle', time: '1 min ago' },
  { hash: 'f9912bc', msg: 'feat: restore all 14 Popcorn TV design channels on remote', time: '12 mins ago' },
  { hash: 'a8f912c', msg: 'feat: add Founder Coffee Cup asset with steam & 5-sip easter egg', time: '25 mins ago' },
];

interface PoppingKernel {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
  toasted: boolean;
}

export const PopcornTV: React.FC = () => {
  // TV Power & Channel States
  const [isTvOn, setIsTvOn] = useState<boolean>(true);
  const [activeChannelId, setActiveChannelId] = useState<number>(1);
  const [isStaticFlashing, setIsStaticFlashing] = useState<boolean>(false);
  const [isStartupSequence, setIsStartupSequence] = useState<boolean>(false);
  const [currentLiveIndex, setCurrentLiveIndex] = useState<number>(0);

  // Audio & Volume States
  const [volume, setVolume] = useState<number>(75);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showVolumeOverlay, setShowVolumeOverlay] = useState<boolean>(false);

  // TV Settings Menu Modal State
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [brightness, setBrightness] = useState<number>(100);
  const [contrast, setContrast] = useState<number>(100);
  const [scanlinesEnabled, setScanlinesEnabled] = useState<boolean>(true);
  const [ambientGlowEnabled, setAmbientGlowEnabled] = useState<boolean>(true);

  // Environment States (Lamp, Coffee Cup, Kettle, Popcorn)
  const [isLampOn, setIsLampOn] = useState<boolean>(true);

  // Founder's Coffee Cup State
  const [coffeeSipCount, setCoffeeSipCount] = useState<number>(0);
  const [coffeeStoryIndex, setCoffeeStoryIndex] = useState<number>(0);
  const [showCoffeeTooltip, setShowCoffeeTooltip] = useState<boolean>(false);
  const [isHoveringCup, setIsHoveringCup] = useState<boolean>(false);

  // Kettle "Coffee Butler" Animation & Pouring State
  const [isPouring, setIsPouring] = useState<boolean>(false);
  const [pourCount, setPourCount] = useState<number>(0);
  const [kettleTooltip, setKettleTooltip] = useState<string | null>(null);
  const [isHoveringKettle, setIsHoveringKettle] = useState<boolean>(false);

  // Popcorn Bowl State
  const [popCount, setPopCount] = useState<number>(0);
  const [popcornAchievementUnlocked, setPopcornAchievementUnlocked] = useState<boolean>(false);
  const [poppingKernels, setPoppingKernels] = useState<PoppingKernel[]>([]);
  const [isHoveringBowl, setIsHoveringBowl] = useState<boolean>(false);

  // Magazine Book Modal State
  const [isMagazineOpen, setIsMagazineOpen] = useState<boolean>(false);
  const [isHoveringMagazine, setIsHoveringMagazine] = useState<boolean>(false);

  const activeChannel = popcornChannels.find(c => c.id === activeChannelId) || popcornChannels[0];
  const isCupEmpty = coffeeSipCount >= 5;

  const toggleTvPower = () => {
    if (!isTvOn) {
      playTvPowerSound();
      setIsStartupSequence(true);
      setIsTvOn(true);

      setTimeout(() => {
        playTvStaticSound();
        setIsStaticFlashing(true);
      }, 400);

      setTimeout(() => {
        setIsStaticFlashing(false);
        setIsStartupSequence(false);
      }, 1000);
    } else {
      playTvPowerSound();
      setIsTvOn(false);
      setIsMenuOpen(false);
    }
  };

  const switchChannel = (chId: number) => {
    if (!isTvOn) {
      toggleTvPower();
    }
    if (chId === activeChannelId && !isStaticFlashing) return;

    playClickSound('high');
    playTvStaticSound();
    setIsStaticFlashing(true);
    setActiveChannelId(chId);

    if (chId === 0) {
      setTimeout(() => {
        switchChannel(1);
      }, 3200);
    }

    setTimeout(() => {
      setIsStaticFlashing(false);
    }, 300);
  };

  // LIVE TV BUTTON CYCLE FUNCTION
  const handleLiveTvClick = () => {
    const nextIdx = (currentLiveIndex + 1) % liveVideoIds.length;
    setCurrentLiveIndex(nextIdx);
    switchChannel(liveVideoIds[nextIdx]);
  };

  const handleVolumeUp = () => {
    if (!isTvOn) return;
    const next = Math.min(100, volume + 10);
    setVolume(next);
    setIsMuted(false);
    playVolumeBeepSound();
    setShowVolumeOverlay(true);
    setTimeout(() => setShowVolumeOverlay(false), 2000);
  };

  const handleVolumeDown = () => {
    if (!isTvOn) return;
    const next = Math.max(0, volume - 10);
    setVolume(next);
    playVolumeBeepSound();
    setShowVolumeOverlay(true);
    setTimeout(() => setShowVolumeOverlay(false), 2000);
  };

  const handleCoffeeCupClick = () => {
    if (isPouring) return;
    playClickSound('medium');
    const nextSips = coffeeSipCount + 1;
    setCoffeeSipCount(nextSips);

    if (nextSips >= 5) {
      setShowCoffeeTooltip(true);
      setTimeout(() => setShowCoffeeTooltip(false), 3500);
    } else {
      setCoffeeStoryIndex((prev) => (prev + 1) % founderCoffeeStories.length);
      setShowCoffeeTooltip(true);
      setTimeout(() => setShowCoffeeTooltip(false), 3500);
    }
  };

  const handleKettleClick = () => {
    if (isPouring) return;

    if (!isCupEmpty) {
      playClickSound('low');
      const msg = coffeeSipCount === 0 ? 'Finish your coffee first.' : 'I think that\'s enough coffee ☕';
      setKettleTooltip(msg);
      setTimeout(() => setKettleTooltip(null), 2500);
      return;
    }

    playClickSound('high');
    setIsPouring(true);
    setKettleTooltip('Refilling fresh espresso...');

    setTimeout(() => {
      setCoffeeSipCount(0);
      const nextPours = pourCount + 1;
      setPourCount(nextPours);

      if (nextPours === 5) {
        setKettleTooltip('Phew! Freshly brewed whistle ☕');
      } else {
        setKettleTooltip('Coffee refilled! Enjoy ☕');
      }

      setTimeout(() => {
        setIsPouring(false);
        setKettleTooltip(null);
      }, 1200);
    }, 2800);
  };

  const handlePopcornClick = () => {
    playPopcornSound();
    const nextCount = popCount + 1;
    setPopCount(nextCount);

    if (nextCount >= 20 && !popcornAchievementUnlocked) {
      setPopcornAchievementUnlocked(true);
    }

    const isShower = nextCount % 10 === 0;
    const kernelCountToSpawn = isShower ? 5 : 1;

    const newKernels: PoppingKernel[] = Array.from({ length: kernelCountToSpawn }).map((_, idx) => ({
      id: Date.now() + idx,
      x: (Math.random() - 0.5) * 60,
      y: -(120 + Math.random() * 60),
      rotation: Math.random() * 360,
      size: 16 + Math.random() * 8,
      toasted: Math.random() < 0.15,
    }));

    setPoppingKernels(prev => [...prev, ...newKernels]);

    setTimeout(() => {
      setPoppingKernels(prev => prev.filter(k => !newKernels.some(nk => nk.id === k.id)));
    }, 1200);
  };

  return (
    <section
      id="popcorn"
      style={{
        padding: '8rem 1.5rem',
        maxWidth: '1420px',
        margin: '0 auto',
        position: 'relative',
        transition: 'background-color 0.5s ease',
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.45rem 1rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-light)',
            marginBottom: '1.2rem',
          }}
        >
          <Tv size={15} color="#F5C84C" />
          <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            POPCORN TV // COZY INTERACTIVE STUDIO
          </span>
        </div>

        <h2 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
          Popcorn TV Playground
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
          Use the remote control to switch channels (01–14) or press the <strong>LIVE TV</strong> button to stream videos.
        </p>
      </div>

      {/* 20 POP CORN ACHIEVEMENT BADGE UNLOCKED */}
      <AnimatePresence>
        {popcornAchievementUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              maxWidth: '460px',
              margin: '0 auto 2rem auto',
              padding: '0.9rem 1.4rem',
              backgroundColor: '#F5C84C',
              color: '#262626',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontWeight: 700,
              fontSize: '0.9rem',
              boxShadow: '0 8px 24px rgba(245, 200, 76, 0.4)',
              border: '2px solid #262626',
              zIndex: 100,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span>ACHIEVEMENT UNLOCKED: Certified Snack Designer 🍿</span>
            </div>
            <button
              onClick={() => setPopcornAchievementUnlocked(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#262626' }}
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN COZY ROOM ENVIRONMENT */}
      <div
        style={{
          position: 'relative',
          padding: '3rem 2rem 5rem 2rem',
          backgroundColor: isLampOn ? 'var(--bg-secondary)' : '#121214',
          borderRadius: '32px',
          border: '1px solid var(--border-medium)',
          boxShadow: isLampOn ? 'var(--shadow-lg)' : '0 30px 90px rgba(0, 0, 0, 0.6)',
          transition: 'all 0.5s ease',
        }}
      >
        {/* SMALL PAPER NOTE BEHIND TV WITH TIPS */}
        <div
          style={{
            position: 'absolute',
            top: '-24px',
            right: '340px',
            backgroundColor: '#FAF8F3',
            color: '#262626',
            padding: '0.65rem 1.2rem',
            borderRadius: '12px',
            border: '1px dashed var(--border-medium)',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            transform: 'rotate(-2deg)',
            zIndex: 4,
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#EF4444' }} />
          <span>TIPS: Click LIVE button on remote again to switch video broadcasts!</span>
        </div>

        {/* TOP ACCESSORIES: TABLE LAMP & MAGAZINE TOGGLE */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <button
              onClick={() => { setIsLampOn(!isLampOn); playClickSound('medium'); }}
              onMouseEnter={playHoverSound}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-medium)',
                backgroundColor: isLampOn ? '#F5C84C' : 'rgba(255, 255, 255, 0.1)',
                color: isLampOn ? '#262626' : '#FAF8F3',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {isLampOn ? <Sun size={15} /> : <Moon size={15} />}
              <span>{isLampOn ? 'Warm Table Lamp ON' : 'Cinema Dark Mode'}</span>
            </button>

            <button
              onClick={() => { setIsMagazineOpen(!isMagazineOpen); playClickSound('medium'); }}
              onMouseEnter={playHoverSound}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                border: isMagazineOpen ? '1px solid #8FAF90' : '1px solid rgba(143, 175, 144, 0.4)',
                backgroundColor: isMagazineOpen ? '#8FAF90' : 'rgba(143, 175, 144, 0.18)',
                color: isMagazineOpen ? '#18181B' : '#8FAF90',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isMagazineOpen ? '0 0 14px rgba(143, 175, 144, 0.5)' : 'none',
              }}
              title="Click to toggle Editorial Magazine Book"
            >
              <BookOpen size={15} />
              <span>{isMagazineOpen ? 'Close Magazine' : '📖 Magazine Book'}</span>
            </button>
          </div>

          <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
            LIVING ENTERTAINMENT CORNER
          </span>
        </div>

        {/* MAIN STUDIO GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) 320px',
            gap: '2.5rem',
            alignItems: 'start',
            position: 'relative',
          }}
          className="popcorn-studio-grid"
        >
          {/* POPCORN BOWL ASSET */}
          <div
            onClick={handlePopcornClick}
            onMouseEnter={() => { setIsHoveringBowl(true); playHoverSound(); }}
            onMouseLeave={() => setIsHoveringBowl(false)}
            title="Click to pop handcrafted popcorn!"
            style={{
              position: 'absolute',
              bottom: '-35px',
              left: '-25px',
              zIndex: 10,
              cursor: 'pointer',
              transform: isHoveringBowl
                ? 'rotate(-10deg) scale(1.05) translateY(-4px)'
                : 'rotate(-14deg) scale(1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              filter: isHoveringBowl
                ? 'drop-shadow(0 16px 28px rgba(245, 200, 76, 0.45))'
                : 'drop-shadow(0 12px 20px rgba(0, 0, 0, 0.3))',
            }}
          >
            <AnimatePresence>
              {poppingKernels.map(k => (
                <motion.div
                  key={k.id}
                  initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  animate={{ opacity: 0, x: k.x, y: k.y, rotate: k.rotation }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '40px',
                    width: k.size,
                    height: k.size,
                    borderRadius: '50%',
                    backgroundColor: k.toasted ? '#C78B48' : '#FFF6DA',
                    border: '1.5px solid #262626',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                    zIndex: 80,
                    pointerEvents: 'none',
                  }}
                />
              ))}
            </AnimatePresence>

            <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="60" cy="92" rx="42" ry="6" fill="rgba(0, 0, 0, 0.25)" />
              <path d="M15 35 C15 35 22 88 60 88 C98 88 105 35 105 35 Z" fill="#F7F2E9" stroke="#262626" strokeWidth="2.5" />
              <path d="M15 35 C35 44 85 44 105 35 C95 78 78 86 60 86 C42 86 25 78 15 35 Z" fill="#FCFAF6" opacity="0.8" />
              <path d="M21 56 C40 63 80 63 99 56" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" />
              <text x="60" y="74" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="var(--font-mono)" letterSpacing="2" fill="rgba(38, 38, 38, 0.35)">
                POPCORN
              </text>
              <g id="kernels">
                <circle cx="32" cy="28" r="11" fill="#FFF6DA" stroke="#262626" strokeWidth="1.5" />
                <circle cx="34" cy="26" r="4" fill="#FFFDF5" />
                <circle cx="48" cy="22" r="13" fill="#FFF6DA" stroke="#262626" strokeWidth="1.5" />
                <path d="M42 16 C45 14 52 14 55 18" stroke="#C78B48" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="64" cy="24" r="14" fill="#FFF6DA" stroke="#262626" strokeWidth="1.5" />
                <circle cx="66" cy="22" r="5" fill="#FFFDF5" />
                <circle cx="80" cy="27" r="11" fill="#FFF6DA" stroke="#262626" strokeWidth="1.5" />
                <circle cx="94" cy="33" r="10" fill="#FFF6DA" stroke="#262626" strokeWidth="1.5" />
                <circle cx="95" cy="34" r="3" fill="#C78B48" />
              </g>
              <ellipse cx="60" cy="33" rx="45" ry="6" fill="none" stroke="#262626" strokeWidth="2" />
            </svg>
          </div>

          {/* FOUNDER'S CERAMIC COFFEE CUP */}
          <div
            onClick={handleCoffeeCupClick}
            onMouseEnter={() => { setIsHoveringCup(true); playHoverSound(); }}
            onMouseLeave={() => setIsHoveringCup(false)}
            title="Click coffee cup for late-night builder quotes!"
            style={{
              position: 'absolute',
              bottom: '-38px',
              right: '365px',
              zIndex: 10,
              cursor: 'pointer',
              transform: isHoveringCup
                ? 'rotate(14deg) scale(1.05) translateY(-4px)'
                : 'rotate(12deg) scale(1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              filter: isHoveringCup
                ? 'drop-shadow(0 14px 22px rgba(143, 175, 144, 0.45))'
                : 'drop-shadow(0 10px 18px rgba(0, 0, 0, 0.28))',
            }}
          >
            <AnimatePresence>
              {showCoffeeTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.85 }}
                  animate={{ opacity: 1, y: -15, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.85 }}
                  style={{
                    position: 'absolute',
                    top: '-45px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#262626',
                    color: '#FAF8F3',
                    padding: '0.45rem 0.9rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
                    zIndex: 90,
                    pointerEvents: 'none',
                  }}
                >
                  {isCupEmpty ? 'Need a refill ☕' : founderCoffeeStories[coffeeStoryIndex]}
                </motion.div>
              )}
            </AnimatePresence>

            {isTvOn && !isCupEmpty && (
              <div style={{ position: 'absolute', top: '-18px', left: '26px', display: 'flex', gap: '5px', pointerEvents: 'none' }}>
                <motion.div
                  animate={{ y: [-2, -14, -2], opacity: [0.2, 0.7, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ width: 3, height: 16, backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 2, filter: 'blur(1.5px)' }}
                />
                <motion.div
                  animate={{ y: [-2, -18, -2], opacity: [0.3, 0.8, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: 0.4, ease: 'easeInOut' }}
                  style={{ width: 4, height: 20, backgroundColor: 'rgba(255, 255, 255, 0.65)', borderRadius: 2, filter: 'blur(1.5px)' }}
                />
              </div>
            )}

            <svg width="78" height="88" viewBox="0 0 78 88" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="38" cy="80" rx="30" ry="5" fill="rgba(0, 0, 0, 0.25)" />
              <rect x="18" y="70" width="38" height="8" rx="2" fill="#D6C4B0" stroke="#262626" strokeWidth="1.5" />
              <path d="M54 28 C68 28 72 52 54 58" fill="none" stroke="#F8F4EC" strokeWidth="7" strokeLinecap="round" />
              <path d="M54 28 C68 28 72 52 54 58" fill="none" stroke="#262626" strokeWidth="2" strokeLinecap="round" />
              <path d="M14 20 L18 72 C18 72 20 76 38 76 C56 76 58 72 58 72 L62 20 Z" fill="#F8F4EC" stroke="#262626" strokeWidth="2" />
              <text x="38" y="66" textAnchor="middle" fontSize="5" fontWeight="800" fontFamily="var(--font-mono)" letterSpacing="1.5" fill="rgba(38, 38, 38, 0.3)">
                BUILD.
              </text>
              <ellipse cx="38" cy="20" rx="24" ry="7" fill="#FEFCF8" stroke="#262626" strokeWidth="2" />
              {!isCupEmpty ? (
                <g>
                  <ellipse cx="38" cy="21" rx="21" ry="5.5" fill="#3B2314" />
                  <ellipse cx="44" cy="20" rx="8" ry="2" fill="rgba(255, 255, 255, 0.25)" />
                  <circle cx="24" cy="22" r="1" fill="#D4AF37" />
                  <circle cx="27" cy="20" r="1.5" fill="#D4AF37" />
                </g>
              ) : (
                <ellipse cx="38" cy="23" rx="18" ry="4.5" fill="#543A29" opacity="0.4" />
              )}
              <path d="M22 17 C25 16 30 16 32 17" stroke="#3B2314" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
            </svg>
          </div>

          {/* SCANDINAVIAN GOOSENECK KETTLE */}
          <motion.div
            onClick={handleKettleClick}
            onMouseEnter={() => { setIsHoveringKettle(true); playHoverSound(); }}
            onMouseLeave={() => setIsHoveringKettle(false)}
            animate={
              isPouring
                ? {
                    x: [0, -60, -60, 0],
                    y: [0, -45, -45, 0],
                    rotate: [0, -45, -45, 0],
                  }
                : { x: 0, y: 0, rotate: 0 }
            }
            transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
            title="Click Gooseneck Kettle to refill coffee!"
            style={{
              position: 'absolute',
              bottom: '-45px',
              right: '460px',
              zIndex: isPouring ? 25 : 8,
              cursor: 'pointer',
              filter: isHoveringKettle
                ? 'drop-shadow(0 14px 24px rgba(111, 168, 220, 0.45))'
                : 'drop-shadow(0 10px 18px rgba(0, 0, 0, 0.3))',
            }}
          >
            <AnimatePresence>
              {kettleTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.85 }}
                  animate={{ opacity: 1, y: -15, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.85 }}
                  style={{
                    position: 'absolute',
                    top: '-45px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#262626',
                    color: '#FAF8F3',
                    padding: '0.45rem 0.9rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
                    zIndex: 95,
                    pointerEvents: 'none',
                  }}
                >
                  {kettleTooltip}
                </motion.div>
              )}
            </AnimatePresence>

            {isPouring && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 50 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ delay: 0.5, duration: 1.8 }}
                style={{
                  position: 'absolute',
                  top: '28px',
                  right: '-18px',
                  width: '3.5px',
                  backgroundColor: '#3B2314',
                  borderRadius: '2px',
                  boxShadow: '0 0 6px rgba(59, 35, 20, 0.8)',
                  zIndex: 30,
                  pointerEvents: 'none',
                }}
              />
            )}

            <svg width="105" height="100" viewBox="0 0 105 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="52" cy="92" rx="38" ry="6" fill="rgba(0, 0, 0, 0.28)" />
              <rect x="22" y="82" width="60" height="7" rx="2.5" fill="#2B2B30" stroke="#262626" strokeWidth="1.5" />
              <path d="M26 32 C10 32 6 72 26 78" fill="none" stroke="#6B4423" strokeWidth="7" strokeLinecap="round" />
              <path d="M26 32 C10 32 6 72 26 78" fill="none" stroke="#262626" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M74 65 C88 65 98 42 94 28" fill="none" stroke="#C0C4CC" strokeWidth="5" strokeLinecap="round" />
              <path d="M74 65 C88 65 98 42 94 28" fill="none" stroke="#262626" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M26 36 C26 36 30 84 52 84 C74 84 78 36 78 36 Z" fill="url(#brushed_steel_gradient)" stroke="#262626" strokeWidth="2.2" />
              <circle cx="52" cy="25" r="4.5" fill="#6B4423" stroke="#262626" strokeWidth="1.5" />
              <ellipse cx="52" cy="35" rx="26" ry="5" fill="#E5E7EB" stroke="#262626" strokeWidth="2" />
              <defs>
                <linearGradient id="brushed_steel_gradient" x1="26" y1="36" x2="78" y2="84" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#F3F4F6" />
                  <stop offset="40%" stopColor="#D1D5DB" />
                  <stop offset="70%" stopColor="#9CA3AF" />
                  <stop offset="100%" stopColor="#E5E7EB" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* PHYSICAL INTERACTIVE MAGAZINE BOOK STACK ASSET NEAR TV */}
          <motion.div
            onClick={() => { setIsMagazineOpen(!isMagazineOpen); playClickSound('high'); }}
            onMouseEnter={() => { setIsHoveringMagazine(true); playHoverSound(); }}
            onMouseLeave={() => setIsHoveringMagazine(false)}
            title="Click to open Magazine Book!"
            style={{
              position: 'absolute',
              bottom: '-38px',
              left: '115px',
              zIndex: 12,
              cursor: 'pointer',
              transform: isHoveringMagazine
                ? 'rotate(-4deg) scale(1.08) translateY(-5px)'
                : 'rotate(-2deg) scale(1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              filter: isHoveringMagazine
                ? 'drop-shadow(0 14px 24px rgba(245, 200, 76, 0.5))'
                : 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))',
            }}
          >
            <AnimatePresence>
              {isHoveringMagazine && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.85 }}
                  animate={{ opacity: 1, y: -15, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.85 }}
                  style={{
                    position: 'absolute',
                    top: '-42px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#F5C84C',
                    color: '#18181B',
                    padding: '0.4rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                    zIndex: 90,
                    pointerEvents: 'none',
                  }}
                >
                  📖 Click to Open Magazine Book!
                </motion.div>
              )}
            </AnimatePresence>

            <svg width="86" height="64" viewBox="0 0 86 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="43" cy="58" rx="38" ry="5" fill="rgba(0, 0, 0, 0.28)" />
              {/* Bottom Magazine */}
              <rect x="8" y="38" width="70" height="14" rx="3" fill="#27272A" stroke="#18181B" strokeWidth="1.5" />
              <rect x="74" y="41" width="3" height="8" rx="1" fill="#E4E4E7" />
              {/* Middle Magazine */}
              <rect x="12" y="24" width="66" height="15" rx="3" fill="#8FAF90" stroke="#18181B" strokeWidth="1.5" />
              <text x="45" y="34" textAnchor="middle" fontSize="5.5" fontWeight="800" fontFamily="var(--font-mono)" fill="#18181B">
                CRAFT VOL. 1
              </text>
              {/* Top Magazine */}
              <rect x="6" y="10" width="68" height="16" rx="3" fill="#F5C84C" stroke="#18181B" strokeWidth="1.8" />
              <text x="40" y="21" textAnchor="middle" fontSize="6" fontWeight="900" fontFamily="var(--font-mono)" fill="#18181B" letterSpacing="0.5">
                MAGAZINE
              </text>
              <path d="M12 10 L12 26" stroke="#18181B" strokeWidth="2" />
              <circle cx="66" cy="18" r="3" fill="#18181B" />
            </svg>
          </motion.div>

          {/* LEFT: THE CRT TV SCREEN UNIT */}
          <div
            className="workspace-card"
            style={{
              backgroundColor: '#1C1C20',
              borderRadius: '28px',
              padding: '1.8rem',
              border: '2px solid rgba(255, 255, 255, 0.12)',
              boxShadow: ambientGlowEnabled && isTvOn ? '0 0 80px rgba(245, 200, 76, 0.18)' : '0 30px 80px rgba(0, 0, 0, 0.4)',
              position: 'relative',
              zIndex: 2,
              filter: `brightness(${brightness}%) contrast(${contrast}%)`,
              transition: 'all 0.3s ease',
            }}
          >
            {/* TV Top Bezel Frame */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.2rem',
                paddingBottom: '0.8rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: isTvOn ? '#10B981' : '#EF4444',
                    boxShadow: isTvOn ? '0 0 12px #10B981' : '0 0 6px #EF4444',
                    transition: 'all 0.3s ease',
                  }}
                />
                <span className="mono" style={{ fontSize: '0.8rem', color: '#E4E4E7', fontWeight: 700, letterSpacing: '0.08em' }}>
                  HARSHITA VISION // 4K TV STUDIO
                </span>
              </div>

              <button
                onClick={toggleTvPower}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  backgroundColor: isTvOn ? '#EF4444' : '#10B981',
                  color: '#FFF',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                {isTvOn ? 'POWER OFF' : 'POWER ON'}
              </button>
            </div>

            {/* CRT DISPLAY CANVAS */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9.5',
                backgroundColor: isTvOn ? '#09090B' : '#000000',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.85)',
              }}
            >
              {/* Glass Reflection */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '45%',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)',
                  pointerEvents: 'none',
                  zIndex: 30,
                }}
              />

              {/* CRT Scanlines */}
              {scanlinesEnabled && isTvOn && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
                    backgroundSize: '100% 4px',
                    pointerEvents: 'none',
                    zIndex: 28,
                    opacity: 0.6,
                  }}
                />
              )}

              {/* TV Startup Bloom */}
              {isStartupSequence && (
                <motion.div
                  initial={{ opacity: 1, scaleY: 0.02 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#FAF8F3',
                    zIndex: 45,
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* Static Burst */}
              {isStaticFlashing && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'repeating-linear-gradient(0deg, #000, #000 2px, #fff 3px, #fff 3px)',
                    opacity: 0.8,
                    zIndex: 40,
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* Volume Bar Overlay */}
              <AnimatePresence>
                {showVolumeOverlay && isTvOn && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      position: 'absolute',
                      top: '1.2rem',
                      right: '1.2rem',
                      zIndex: 35,
                      backgroundColor: 'rgba(0, 0, 0, 0.85)',
                      padding: '0.6rem 1rem',
                      borderRadius: '8px',
                      color: '#FFF',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                    }}
                  >
                    <Volume2 size={16} color="#F5C84C" />
                    <span>VOL {isMuted ? 'MUTED' : `${volume}%`}</span>
                    <div style={{ width: '80px', height: '6px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: isMuted ? '0%' : `${volume}%`, height: '100%', backgroundColor: '#F5C84C' }} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* TV OFF STATE */}
              {!isTvOn ? (
                <div
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#52525B',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <Power size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                  <span style={{ fontSize: '0.9rem' }}>TV STANDBY — PRESS POWER BUTTON TO START</span>
                </div>
              ) : (
                /* TV ON DISPLAY */
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                  {/* On-Screen OSD Banner */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.2rem',
                      left: '1.2rem',
                      zIndex: 25,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.5rem 1rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.78)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFF',
                    }}
                  >
                    <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#F5C84C', fontFamily: 'var(--font-mono)' }}>
                      CH {activeChannel.numberStr}
                    </span>
                    <div style={{ height: '14px', width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.1 }}>{activeChannel.title}</div>
                      <div style={{ fontSize: '0.72rem', color: '#A1A1AA' }}>{activeChannel.category}</div>
                    </div>
                  </div>

                  {/* SETTINGS MENU OVERLAY */}
                  {isMenuOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(20, 20, 24, 0.95)',
                        backdropFilter: 'blur(12px)',
                        zIndex: 38,
                        padding: '2.5rem',
                        color: '#FFF',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.8rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <Sliders size={18} color="#F5C84C" />
                            <span className="mono" style={{ fontSize: '1rem', fontWeight: 700 }}>CRT SETTINGS PANEL</span>
                          </div>
                          <button onClick={() => setIsMenuOpen(false)} style={{ background: 'none', border: 'none', color: '#FFF', cursor: 'pointer' }}>
                            <X size={20} />
                          </button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                          <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>BRIGHTNESS: {brightness}%</label>
                            <input
                              type="range"
                              min={50}
                              max={150}
                              value={brightness}
                              onChange={e => setBrightness(Number(e.target.value))}
                              style={{ width: '100%' }}
                            />
                          </div>

                          <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>CONTRAST: {contrast}%</label>
                            <input
                              type="range"
                              min={50}
                              max={150}
                              value={contrast}
                              onChange={e => setContrast(Number(e.target.value))}
                              style={{ width: '100%' }}
                            />
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <button
                              onClick={() => setScanlinesEnabled(!scanlinesEnabled)}
                              style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '6px',
                                border: 'none',
                                backgroundColor: scanlinesEnabled ? '#F5C84C' : 'rgba(255,255,255,0.1)',
                                color: scanlinesEnabled ? '#262626' : '#FFF',
                                fontWeight: 700,
                                cursor: 'pointer',
                              }}
                            >
                              CRT Scanlines: {scanlinesEnabled ? 'ENABLED' : 'OFF'}
                            </button>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <button
                              onClick={() => setAmbientGlowEnabled(!ambientGlowEnabled)}
                              style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '6px',
                                border: 'none',
                                backgroundColor: ambientGlowEnabled ? '#8FAF90' : 'rgba(255,255,255,0.1)',
                                color: ambientGlowEnabled ? '#262626' : '#FFF',
                                fontWeight: 700,
                                cursor: 'pointer',
                              }}
                            >
                              Ambient TV Light Spill: {ambientGlowEnabled ? 'ENABLED' : 'OFF'}
                            </button>
                          </div>
                        </div>
                      </div>

                      <button onClick={() => setIsMenuOpen(false)} className="btn-primary" style={{ alignSelf: 'flex-end' }}>
                        Apply Settings
                      </button>
                    </div>
                  )}

                  {/* ACTIVE CHANNEL RENDERER (IMAGE VS VIDEO STREAM VS DEV MODE) */}
                  {activeChannel.type === 'video' && activeChannel.videoSrc ? (
                    /* LIVE VIDEO PLAYER STREAM WITH INSTANT RESUME & GPU ACCELERATION */
                    <div
                      style={{ width: '100%', height: '100%', backgroundColor: '#000', position: 'relative', cursor: 'pointer' }}
                      onClick={(e) => {
                        const vid = e.currentTarget.querySelector('video');
                        if (vid) {
                          if (vid.paused) vid.play().catch(() => {});
                          else vid.pause();
                        }
                      }}
                      title="Click TV screen to toggle Video Play / Pause"
                    >
                      <video
                        key={activeChannel.videoSrc}
                        src={activeChannel.videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        controls={false}
                        disablePictureInPicture
                        onLoadedData={(e) => {
                          e.currentTarget.play().catch(() => {});
                        }}
                        onWaiting={(e) => {
                          // Auto resume if buffering gets stuck
                          setTimeout(() => {
                            e.currentTarget.play().catch(() => {});
                          }, 200);
                        }}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          willChange: 'transform',
                          transform: 'translateZ(0)',
                        }}
                      />
                    </div>
                  ) : activeChannel.imageSrc ? (
                    /* HIGH-RES DESIGN IMAGE */
                    <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
                      <img src={activeChannel.imageSrc} alt={activeChannel.title} style={{ width: '100%', height: 'auto', minHeight: '100%', objectFit: 'contain', backgroundColor: '#000' }} />
                    </div>
                  ) : activeChannel.type === 'devmode' ? (
                    /* SECRET CHANNEL 15: DEV MODE */
                    <div style={{ backgroundColor: '#18181C', color: '#34D399', padding: '2rem', height: '100%', fontFamily: 'var(--font-mono)', overflowY: 'auto' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.8rem' }}>
                        <span style={{ fontWeight: 700, color: '#F5C84C' }}>HARSHITA_DEV_MODE // KERNEL LOGS</span>
                        <span>STATUS: DEPLOYED ⚡</span>
                      </div>

                      <h3 style={{ fontSize: '1.2rem', color: '#FFF', marginBottom: '1rem' }}>Recent Git Commit History</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                        {gitCommits.map(c => (
                          <div key={c.hash} style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '0.8rem', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#A1A1AA', marginBottom: '0.3rem' }}>
                              <span style={{ color: '#F5C84C' }}>commit {c.hash}</span>
                              <span>{c.time}</span>
                            </div>
                            <div style={{ fontSize: '0.85rem', color: '#E4E4E7' }}>{c.msg}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : activeChannel.type === 'nosignal' ? (
                    /* SECRET CHANNEL 0: NO SIGNAL */
                    <div style={{ height: '100%', backgroundColor: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#F5C84C', fontFamily: 'var(--font-mono)', textAlign: 'center', padding: '2rem' }}>
                      <RefreshCw size={36} className="spin" style={{ marginBottom: '1rem' }} />
                      <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>NO SIGNAL DETECTED</h2>
                      <p style={{ color: '#A1A1AA', fontSize: '0.95rem' }}>"Looks like you're between ideas. Auto returning in 3 seconds..."</p>
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            {/* TV Bottom Controls Bar */}
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#A1A1AA' }} className="mono">
              <span>CH {activeChannel.numberStr} // {activeChannel.title}</span>
              <span>BRIGHTNESS: {brightness}% | CRT SCANLINES: {scanlinesEnabled ? 'ON' : 'OFF'}</span>
            </div>
          </div>

          {/* RIGHT: REALISTIC REMOTE CONTROL WITH LIVE TV BUTTON & ALL 14 CHANNELS */}
          <div
            className="workspace-card"
            style={{
              backgroundColor: '#27272A',
              color: '#F4F4F5',
              borderRadius: '24px',
              padding: '1.8rem 1.2rem',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
              position: 'relative',
              zIndex: 2,
              fontFamily: 'var(--font-sans)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '1rem', paddingBottom: '0.6rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <span className="mono" style={{ fontSize: '0.7rem', color: '#A1A1AA', letterSpacing: '0.1em' }}>
                HARSHITA REMOTE // IR-RETRO
              </span>
            </div>

            {/* Remote Power & LIVE TV Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
              <button
                onClick={toggleTvPower}
                onMouseEnter={playHoverSound}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  backgroundColor: isTvOn ? '#EF4444' : '#3F3F46',
                  color: '#FFF',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: isTvOn ? '0 0 12px rgba(239, 68, 68, 0.5)' : 'none',
                  fontFamily: 'var(--font-sans)',
                }}
                title="Power TV"
              >
                <Power size={18} />
              </button>

              {/* DEDICATED LIVE TV STREAM BUTTON */}
              <button
                onClick={handleLiveTvClick}
                onMouseEnter={playHoverSound}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  backgroundColor: '#EF4444',
                  color: '#FFF',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 0 12px rgba(239, 68, 68, 0.5)',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.04em',
                }}
                title="Click to cycle Live Video Broadcasts!"
              >
                <Radio size={14} className="spin" />
                <span>LIVE TV ({currentLiveIndex + 1}/3)</span>
              </button>

              <button
                onClick={() => { setIsMenuOpen(!isMenuOpen); playClickSound('medium'); }}
                onMouseEnter={playHoverSound}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backgroundColor: isMenuOpen ? '#F5C84C' : 'transparent',
                  color: isMenuOpen ? '#262626' : '#FFF',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.04em',
                }}
              >
                MENU
              </button>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.2rem' }}>
              <button
                onClick={handleVolumeDown}
                onMouseEnter={playHoverSound}
                style={{
                  flex: 1,
                  padding: '0.55rem',
                  borderRadius: '10px',
                  backgroundColor: '#3F3F46',
                  color: '#FFF',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.04em',
                }}
              >
                VOL -
              </button>
              <button
                onClick={handleVolumeUp}
                onMouseEnter={playHoverSound}
                style={{
                  flex: 1,
                  padding: '0.55rem',
                  borderRadius: '10px',
                  backgroundColor: '#3F3F46',
                  color: '#FFF',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.04em',
                }}
              >
                VOL +
              </button>
            </div>

            {/* Remote Keypad (01 to 14 + CH 15 Dev Mode + CH 00 No Signal) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
              {popcornChannels.map(ch => (
                <button
                  key={ch.id}
                  onClick={() => switchChannel(ch.id)}
                  onMouseEnter={playHoverSound}
                  style={{
                    padding: '0.65rem 0',
                    borderRadius: '10px',
                    backgroundColor: activeChannelId === ch.id && isTvOn ? '#F5C84C' : '#3F3F46',
                    color: activeChannelId === ch.id && isTvOn ? '#262626' : '#FFF',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: activeChannelId === ch.id && isTvOn ? '0 0 10px rgba(245, 200, 76, 0.4)' : 'none',
                  }}
                >
                  {ch.numberStr}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* EDITORIAL MAGAZINE BOOK INTERACTIVE MODAL */}
      <MagazineBook isOpen={isMagazineOpen} onClose={() => setIsMagazineOpen(false)} />
    </section>
  );
};
