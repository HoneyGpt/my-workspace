import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { playClickSound, setSoundEnabled } from '../utils/audio';

export const Navbar: React.FC = () => {
  const [audioActive, setAudioActive] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['workspace', 'popcorn', 'projects', 'timeline', 'skills', 'contact'];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const nextState = !audioActive;
    setAudioActive(nextState);
    setSoundEnabled(nextState);
    if (nextState) playClickSound('high');
  };

  const navItems = [
    { id: 'workspace', label: 'Workspace', href: '#workspace' },
    { id: 'popcorn', label: 'Popcorn 🍿', href: '#popcorn', isPill: true },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'timeline', label: 'Journey', href: '#timeline' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: '1.2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 2.4rem)',
        maxWidth: '1100px',
        zIndex: 100,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: scrolled ? '0.65rem 1.4rem' : '0.85rem 1.8rem',
          backgroundColor: scrolled ? 'rgba(250, 248, 243, 0.92)' : 'rgba(250, 248, 243, 0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-light)',
          boxShadow: scrolled ? '0 12px 36px rgba(38, 38, 38, 0.08)' : 'none',
        }}
      >
        {/* Left: Brand Monogram */}
        <a
          href="#"
          onClick={() => playClickSound('medium')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.7rem',
            textDecoration: 'none',
            color: 'var(--text-primary)',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.85rem',
              fontFamily: 'var(--font-serif)',
              flexShrink: 0,
            }}
          >
            HB
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 600, fontSize: '0.92rem', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
              Harshita Bhaskaruni
            </span>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)' }}>
              AI Product Builder & Developer
            </span>
          </div>
        </a>

        {/* Center: Nav Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.4rem',
          }}
          className="desktop-only"
        >
          {navItems.map(item => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => playClickSound('medium')}
                style={{
                  fontSize: '0.86rem',
                  color: item.isPill
                    ? '#262626'
                    : isActive
                    ? 'var(--text-primary)'
                    : 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontWeight: item.isPill || isActive ? 600 : 400,
                  padding: item.isPill ? '0.35rem 0.85rem' : '0.2rem 0.4rem',
                  backgroundColor: item.isPill ? 'var(--accent-primary)' : 'transparent',
                  borderRadius: item.isPill ? 'var(--radius-full)' : '0',
                  transition: 'all 0.2s ease',
                  opacity: isActive || item.isPill ? 1 : 0.8,
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Availability Badge & Sound Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.3rem 0.75rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-light)',
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#8FAF90',
                boxShadow: '0 0 6px rgba(143, 175, 144, 0.8)',
              }}
            />
            <span>Open for Projects</span>
          </div>

          <button
            onClick={toggleAudio}
            title={audioActive ? 'Mute micro-interactions' : 'Enable tactile sounds'}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              border: '1px solid var(--border-light)',
              backgroundColor: audioActive ? 'var(--bg-secondary)' : 'transparent',
              color: audioActive ? 'var(--text-primary)' : 'var(--text-tertiary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {audioActive ? <Volume2 size={15} /> : <VolumeX size={15} />}
          </button>
        </div>
      </div>
    </header>
  );
};
