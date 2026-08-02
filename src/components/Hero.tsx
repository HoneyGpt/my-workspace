import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Terminal, Layers, Activity, Cpu } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';
import { playClickSound, playHoverSound } from '../utils/audio';

export const Hero: React.FC = () => {
  const [activeWidget, setActiveWidget] = useState<'mentozy' | 'honeygpt' | 'ignite'>('mentozy');

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '9rem',
        paddingBottom: '5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      <HeroCanvas />

      <div
        style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Sub-header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.45rem 1rem',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-full)',
            marginBottom: '2rem',
          }}
        >
          <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            Bhaskaruni Lakshmi Harshita — Founder, AI Builder & Developer
          </span>
        </motion.div>

        {/* Huge Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '1020px' }}
        >
          <h1
            style={{
              fontSize: 'clamp(3.2rem, 7.8vw, 6.8rem)',
              lineHeight: 1.02,
              letterSpacing: '-0.025em',
              marginBottom: '1.8rem',
            }}
          >
            My ideas <br className="desktop-only" />
            become <span className="highlight-yellow">products</span>.
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)',
              color: 'var(--text-secondary)',
              maxWidth: '740px',
              lineHeight: 1.5,
              fontWeight: 400,
              marginBottom: '2.8rem',
            }}
          >
            Creative Full-Stack Developer, AI Product Builder, and Student Entrepreneur.
            Architecting modern web applications, WebRTC edtech platforms, intelligent AI chatbots, and scalable software solutions from concept to cloud deployment.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
            <a
              href="#workspace"
              className="btn-primary"
              onClick={() => playClickSound('high')}
              onMouseEnter={playHoverSound}
            >
              Explore Living Workspace
              <ArrowDownRight size={18} />
            </a>

            <a
              href="#projects"
              className="btn-secondary"
              onClick={() => playClickSound('medium')}
              onMouseEnter={playHoverSound}
            >
              View Startups & Projects
            </a>
          </div>
        </motion.div>

        {/* Digital Desk Widgets featuring Real Startups */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: '5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Widget 1: Mentozy EdTech */}
          <div
            className="workspace-card"
            style={{
              padding: '1.5rem',
              cursor: 'pointer',
              borderColor: activeWidget === 'mentozy' ? 'var(--accent-primary)' : 'var(--border-light)',
            }}
            onClick={() => {
              setActiveWidget('mentozy');
              playClickSound('medium');
            }}
            onMouseEnter={playHoverSound}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Layers size={18} color="#F5C84C" />
                <span className="mono" style={{ fontSize: '0.82rem', fontWeight: 600 }}>Mentozy EdTech Platform</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#8FAF90', fontWeight: 600 }}>BETA STARTUP</span>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Custom WebRTC video sessions, Razorpay payment gateway & "Sanjaya" AI mentor bot.
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 0.8rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#F5C84C' }} />
              <span>Status: Fast-Growing EdTech Beta</span>
            </div>
          </div>

          {/* Widget 2: HoneyGPT AI Assistant */}
          <div
            className="workspace-card"
            style={{
              padding: '1.5rem',
              cursor: 'pointer',
              borderColor: activeWidget === 'honeygpt' ? 'var(--accent-support)' : 'var(--border-light)',
            }}
            onClick={() => {
              setActiveWidget('honeygpt');
              playClickSound('medium');
            }}
            onMouseEnter={playHoverSound}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Terminal size={18} color="#6FA8DC" />
                <span className="mono" style={{ fontSize: '0.82rem', fontWeight: 600 }}>HoneyGPT AI Engine</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#6FA8DC', fontWeight: 600 }}>AI AGENT PLATFORM</span>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Image generation, code assistance, specialized AI agents & Gemini API integration.
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 0.8rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <Cpu size={14} color="#6FA8DC" />
              <span>Stack: Gemini API + React + Node</span>
            </div>
          </div>

          {/* Widget 3: Ignite Hack 2.0 */}
          <div
            className="workspace-card"
            style={{
              padding: '1.5rem',
              cursor: 'pointer',
              borderColor: activeWidget === 'ignite' ? 'var(--accent-secondary)' : 'var(--border-light)',
            }}
            onClick={() => {
              setActiveWidget('ignite');
              playClickSound('medium');
            }}
            onMouseEnter={playHoverSound}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Activity size={18} color="#8FAF90" />
                <span className="mono" style={{ fontSize: '0.82rem', fontWeight: 600 }}>Ignite Hack 2.0</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#8FAF90', fontWeight: 600 }}>GLOBAL EVENT</span>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Organized global developer innovation event reaching over 1,000+ registrations.
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.6rem 0.8rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span>Registrations</span>
              <span style={{ fontWeight: 700, color: '#8FAF90' }}>1,000+ Developers</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          textAlign: 'center',
          marginTop: '3rem',
          color: 'var(--text-tertiary)',
          fontSize: '0.78rem',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.08em',
        }}
      >
        SCROLL TO EXPLORE WORKSPACE ↓
      </motion.div>
    </section>
  );
};
