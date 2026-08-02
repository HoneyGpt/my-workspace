import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Sparkles, Layers, Cpu, CheckCircle, BarChart3, Smartphone, Monitor } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  tagline: string;
  accentColor: string;
  bgGradient: string;
  overview: string;
  rationale: string;
  challenges: string[];
  solutions: string[];
  impact: { label: string; value: string }[];
  stack: string[];
  mockupType: 'desktop' | 'mobile';
  mockupContent: {
    heroTitle: string;
    heroSubtitle: string;
    features: string[];
  };
  codeSnippet: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'prototype' | 'code' | 'impact'>('overview');
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
        }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => { onClose(); playClickSound('low'); }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(38, 38, 38, 0.65)',
            backdropFilter: 'blur(12px)',
          }}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1100px',
            maxHeight: '90vh',
            backgroundColor: 'var(--bg-primary)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-medium)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1001,
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              padding: '1.5rem 2rem',
              backgroundColor: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.3rem' }}>
                <span className="mono" style={{ fontSize: '0.78rem', color: project.accentColor, fontWeight: 700 }}>
                  CASE STUDY — {project.category.toUpperCase()}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>•</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{project.year}</span>
              </div>
              <h2 style={{ fontSize: '1.8rem', lineHeight: 1.1 }}>{project.title}</h2>
            </div>

            <button
              onClick={() => { onClose(); playClickSound('medium'); }}
              onMouseEnter={playHoverSound}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid var(--border-medium)',
                backgroundColor: 'var(--bg-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Tabs */}
          <div
            style={{
              padding: '0.8rem 2rem',
              borderBottom: '1px solid var(--border-light)',
              backgroundColor: 'var(--bg-primary)',
              display: 'flex',
              gap: '1rem',
            }}
          >
            {[
              { id: 'overview', label: 'Rationale & Vision', icon: Layers },
              { id: 'prototype', label: 'Interactive Device Canvas', icon: Monitor },
              { id: 'code', label: 'Architecture & Code', icon: Cpu },
              { id: 'impact', label: 'Impact & Results', icon: BarChart3 },
            ].map(t => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => { setActiveTab(t.id as any); playClickSound('medium'); }}
                  onMouseEnter={playHoverSound}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1.1rem',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    backgroundColor: activeTab === t.id ? 'var(--text-primary)' : 'transparent',
                    color: activeTab === t.id ? 'var(--bg-primary)' : 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Icon size={15} />
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Modal Body Content */}
          <div style={{ padding: '2rem', overflowY: 'auto', flex: 1 }}>
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Vision & Core Concept</h3>
                  <p style={{ fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.8rem', color: 'var(--text-secondary)' }}>
                    {project.overview}
                  </p>

                  <h4 className="mono" style={{ fontSize: '0.82rem', marginBottom: '0.8rem', color: 'var(--text-tertiary)' }}>
                    DESIGN RATIONALE
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {project.rationale}
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '1.2rem' }}>Role & Technical Stack</h4>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.3rem' }}>
                      FOUNDER & LEAD ROLE
                    </span>
                    <span style={{ fontWeight: 600, fontSize: '1rem' }}>{project.role}</span>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.6rem' }}>
                      TECHNOLOGY ECOSYSTEM
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.stack.map(s => (
                        <span
                          key={s}
                          style={{
                            padding: '0.3rem 0.7rem',
                            backgroundColor: 'var(--bg-primary)',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.78rem',
                            border: '1px solid var(--border-light)',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '0.95rem', marginBottom: '0.8rem' }}>Key Challenges & Solutions</h4>
                    {project.challenges.map((c, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.6rem', fontSize: '0.88rem' }}>
                        <CheckCircle size={16} color={project.accentColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PROTOTYPE TAB */}
            {activeTab === 'prototype' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    Interactive live device preview simulator.
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => setDeviceView('desktop')}
                      style={{
                        padding: '0.4rem 0.8rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-medium)',
                        backgroundColor: deviceView === 'desktop' ? 'var(--text-primary)' : 'transparent',
                        color: deviceView === 'desktop' ? 'var(--bg-primary)' : 'var(--text-secondary)',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <Monitor size={14} /> Desktop
                    </button>
                    <button
                      onClick={() => setDeviceView('mobile')}
                      style={{
                        padding: '0.4rem 0.8rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-medium)',
                        backgroundColor: deviceView === 'mobile' ? 'var(--text-primary)' : 'transparent',
                        color: deviceView === 'mobile' ? 'var(--bg-primary)' : 'var(--text-secondary)',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <Smartphone size={14} /> Mobile
                    </button>
                  </div>
                </div>

                {/* Device Frame */}
                <div
                  style={{
                    maxWidth: deviceView === 'mobile' ? '360px' : '100%',
                    margin: '0 auto',
                    backgroundColor: '#18181B',
                    borderRadius: deviceView === 'mobile' ? '32px' : '16px',
                    padding: deviceView === 'mobile' ? '12px' : '16px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                    transition: 'all 0.4s ease',
                  }}
                >
                  {/* Browser Window Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#EF4444' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10B981' }} />
                    <div
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        borderRadius: '4px',
                        fontSize: '0.72rem',
                        color: '#A1A1AA',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem',
                      }}
                    >
                      https://{project.id}.harshitabhaskaruni.dev
                    </div>
                  </div>

                  {/* Device Content Canvas */}
                  <div
                    style={{
                      backgroundColor: project.bgGradient ? '#1E1E24' : '#FAFAFA',
                      color: '#262626',
                      borderRadius: '8px',
                      padding: '2.5rem 1.8rem',
                      minHeight: '360px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.3rem 0.8rem',
                        backgroundColor: project.accentColor,
                        color: '#262626',
                        borderRadius: '999px',
                        alignSelf: 'flex-start',
                        marginBottom: '1rem',
                      }}
                      className="mono"
                    >
                      PROTOTYPE RUNTIME v3
                    </span>
                    <h3 style={{ fontSize: '2rem', marginBottom: '0.8rem', color: '#FFFFFF', fontFamily: 'var(--font-serif)' }}>
                      {project.mockupContent.heroTitle}
                    </h3>
                    <p style={{ color: '#A1A1AA', fontSize: '0.95rem', marginBottom: '1.8rem', maxWidth: '500px' }}>
                      {project.mockupContent.heroSubtitle}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.8rem' }}>
                      {project.mockupContent.features.map((f, i) => (
                        <div
                          key={i}
                          style={{
                            padding: '0.8rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.06)',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: '#F4F4F5',
                            fontSize: '0.82rem',
                          }}
                        >
                          ✦ {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CODE TAB */}
            {activeTab === 'code' && (
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>System Architecture & Source Snippet</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Production code demonstrating state reconciliation and custom rendering engine logic.
                </p>
                <pre
                  style={{
                    backgroundColor: '#18181B',
                    color: '#E4E4E7',
                    padding: '1.8rem',
                    borderRadius: 'var(--radius-md)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    overflowX: 'auto',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            )}

            {/* IMPACT TAB */}
            {activeTab === 'impact' && (
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Quantifiable Product Results</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                  {project.impact.map((m, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '2rem 1.5rem',
                        backgroundColor: 'var(--bg-secondary)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '3rem',
                          fontWeight: 700,
                          color: project.accentColor,
                          fontFamily: 'var(--font-serif)',
                          lineHeight: 1,
                          marginBottom: '0.5rem',
                        }}
                      >
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
