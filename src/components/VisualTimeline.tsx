import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Rocket, Hammer, CheckCircle2, Users, Bot } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

interface TimelineStage {
  id: string;
  stage: string;
  roleTitle: string;
  years: string;
  icon: any;
  accent: string;
  headline: string;
  body: string;
  keyOutputs: string[];
}

export const visualStages: TimelineStage[] = [
  {
    id: 'fullstack-dev',
    stage: '01. FULL-STACK DEVELOPER',
    roleTitle: 'Frontend & System Developer',
    years: 'Continuous Mastery',
    icon: Code,
    accent: '#F5C84C',
    headline: 'Combining software engineering & exceptional UX.',
    body: 'Mastered React.js, TypeScript, Tailwind CSS, Three.js, Node.js, Express, and PostgreSQL. Experienced in leading projects from concept to cloud deployment.',
    keyOutputs: ['React & Component Architectures', 'Node.js & Supabase Backends', 'Glassmorphism & CSS Animations'],
  },
  {
    id: 'ai-builder',
    stage: '02. AI PRODUCT BUILDER',
    roleTitle: 'AI Workflow & Chatbot Architect',
    years: '2024 — Present',
    icon: Bot,
    accent: '#6FA8DC',
    headline: 'Integrating intelligence into human software.',
    body: 'Deep expertise in Gemini API, Google AI Studio, Chatbase, Hugging Face, and prompt engineering. Created Sanjaya AI mentor bot & INGRES-AI farmer chatbot.',
    keyOutputs: ['Sanjaya AI Mentor Bot (Mentozy)', 'HoneyGPT Multimodal Studio', 'INGRES-AI Multilingual Chatbot'],
  },
  {
    id: 'founder',
    stage: '03. STUDENT ENTREPRENEUR',
    roleTitle: 'Founder & Product Lead @ Mentozy',
    years: '2024 — Present',
    icon: Rocket,
    accent: '#8FAF90',
    headline: 'Building startups to solve real-world problems.',
    body: 'Scaling Mentozy as one of India\'s fastest-growing edtech startups. Engineered WebRTC video sessions, Razorpay payment gateway integration, and financial KYC dashboards.',
    keyOutputs: ['Mentozy EdTech Beta Startup', 'WebRTC Video Architecture', 'Razorpay Payment Gateway'],
  },
  {
    id: 'leader',
    stage: '04. HACKATHON & COMMUNITY LEAD',
    roleTitle: 'Student Council President & Event Lead',
    years: '2024 — Present',
    icon: Users,
    accent: '#E06C75',
    headline: 'Leading teams, hackathons, and student councils.',
    body: 'Student Council President, Technical Team Lead, and Organizer of Ignite Hack 2.0—reaching 1,000+ developer registrations and coordinating with technical judges.',
    keyOutputs: ['Ignite Hack 2.0 (1,000+ Registrations)', 'Student Council Presidency', 'Community Administration'],
  },
  {
    id: 'innovator',
    stage: '05. FUTURE INNOVATOR',
    roleTitle: 'Scalable Systems & AI Strategist',
    years: 'Next Horizon',
    icon: CheckCircle2,
    accent: '#F5C84C',
    headline: 'Exploring AI, Cybersecurity, Blockchain & Quantum Computing.',
    body: 'Driven by curiosity across frontier technologies—combining startup strategy, user-centric product planning, technical writing, and long-term value creation.',
    keyOutputs: ['Krishnaite Decision Methodology', 'Focus Productivity App', 'Frontier Tech Research'],
  },
];

export const VisualTimeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string>('fullstack-dev');

  return (
    <section id="timeline" style={{ padding: '8rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 5rem auto' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 0.9rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-light)',
            marginBottom: '1.2rem',
          }}
        >
          <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            CAREER & LEADERSHIP JOURNEY
          </span>
        </div>

        <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', marginBottom: '1rem' }}>
          Developer → AI Builder → Founder → Leader
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
          A visual progression of multidisciplinary growth unfolding stage by stage.
        </p>
      </div>

      {/* Timeline Navigation Ribbon */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '4rem',
          overflowX: 'auto',
          paddingBottom: '1rem',
        }}
      >
        {visualStages.map((st, i) => {
          const Icon = st.icon;
          const isCurrent = activeStage === st.id;

          return (
            <button
              key={st.id}
              onClick={() => {
                setActiveStage(st.id);
                playClickSound('medium');
              }}
              onMouseEnter={playHoverSound}
              style={{
                flex: 1,
                minWidth: '180px',
                padding: '1.2rem',
                borderRadius: 'var(--radius-md)',
                border: isCurrent ? `2px solid ${st.accent}` : '1px solid var(--border-light)',
                backgroundColor: isCurrent ? 'var(--bg-secondary)' : 'var(--bg-primary)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: isCurrent ? 'var(--shadow-md)' : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                <span className="mono" style={{ fontSize: '0.72rem', color: st.accent, fontWeight: 700 }}>
                  STAGE 0{i + 1}
                </span>
                <Icon size={18} color={st.accent} />
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                {st.roleTitle.split('@')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Display */}
      {visualStages.map(st => {
        if (st.id !== activeStage) return null;
        const Icon = st.icon;

        return (
          <motion.div
            key={st.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="workspace-card"
            style={{
              padding: '3.5rem 3rem',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--bg-primary)',
              border: `1px solid ${st.accent}`,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    backgroundColor: st.accent,
                    color: '#262626',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <span className="mono" style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>{st.years}</span>
                  <h3 style={{ fontSize: '1.8rem', lineHeight: 1.1 }}>{st.roleTitle}</h3>
                </div>
              </div>

              <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                "{st.headline}"
              </h4>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {st.body}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
              }}
            >
              <h5 className="mono" style={{ fontSize: '0.78rem', marginBottom: '1.2rem', color: 'var(--text-tertiary)' }}>
                MILESTONE ACHIEVEMENTS & OUTPUTS
              </h5>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {st.keyOutputs.map((output, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                    }}
                  >
                    <CheckCircle2 size={18} color={st.accent} />
                    <span>{output}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};
