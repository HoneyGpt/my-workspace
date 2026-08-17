import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Sparkles, Layers, Cpu, CheckCircle, BarChart3, Smartphone, Monitor } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export interface ProjectLink {
  label: string;
  url: string;
}

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
  liveLinks?: ProjectLink[];
  githubLinks?: ProjectLink[];
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
              gap: '1rem',
              flexWrap: 'wrap',
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

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              {/* Explore Live Links */}
              {project.liveLinks && project.liveLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClickSound('high')}
                  onMouseEnter={playHoverSound}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.45rem 0.95rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: project.accentColor,
                    color: '#262626',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease',
                  }}
                  className="mono"
                >
                  <ExternalLink size={14} />
                  Explore Live ({link.label})
                </a>
              ))}

              {/* GitHub Links */}
              {project.githubLinks && project.githubLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClickSound('medium')}
                  onMouseEnter={playHoverSound}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.45rem 0.95rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                  className="mono"
                >
                  <Github size={14} />
                  {link.label}
                </a>
              ))}

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
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.8rem' }}>
                    {project.rationale}
                  </p>

                  {/* Explore Live & Source Links */}
                  {((project.liveLinks && project.liveLinks.length > 0) || (project.githubLinks && project.githubLinks.length > 0)) && (
                    <div style={{ padding: '1.2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                      <h4 className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginBottom: '0.8rem' }}>
                        EXPLORE LIVE & SOURCE REPOSITORIES
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                        {project.liveLinks?.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => playClickSound('high')}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.4rem',
                              padding: '0.5rem 1rem',
                              borderRadius: 'var(--radius-full)',
                              backgroundColor: project.accentColor,
                              color: '#262626',
                              fontWeight: 700,
                              fontSize: '0.85rem',
                              textDecoration: 'none',
                            }}
                            className="mono"
                          >
                            <ExternalLink size={14} />
                            {link.label} — {link.url}
                          </a>
                        ))}
                        {project.githubLinks?.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => playClickSound('medium')}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.4rem',
                              padding: '0.5rem 1rem',
                              borderRadius: 'var(--radius-full)',
                              backgroundColor: 'var(--bg-primary)',
                              border: '1px solid var(--border-medium)',
                              color: 'var(--text-primary)',
                              fontWeight: 600,
                              fontSize: '0.85rem',
                              textDecoration: 'none',
                            }}
                            className="mono"
                          >
                            <Github size={14} />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.2rem' }}>Live Web Sandbox & Interactive View</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Interact directly with the live web deployment or toggle device frame sizing.
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
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

                    {project.liveLinks && project.liveLinks[0] && (
                      <a
                        href={project.liveLinks[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => playClickSound('high')}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          padding: '0.45rem 0.85rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: project.accentColor,
                          color: '#262626',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          marginLeft: '0.5rem',
                        }}
                        className="mono"
                      >
                        <ExternalLink size={13} /> Open Fullscreen
                      </a>
                    )}
                  </div>
                </div>

                {/* Live Interactive Iframe Frame */}
                <div
                  style={{
                    maxWidth: deviceView === 'mobile' ? '380px' : '100%',
                    margin: '0 auto',
                    backgroundColor: '#18181B',
                    borderRadius: deviceView === 'mobile' ? '28px' : '12px',
                    padding: deviceView === 'mobile' ? '12px' : '12px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                    transition: 'all 0.4s ease',
                  }}
                >
                  {/* Browser Window Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem', paddingBottom: '0.6rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#EF4444' }} />
                      <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                      <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10B981' }} />
                    </div>

                    <div
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        color: '#E4E4E7',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.3rem 0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <span style={{ color: '#10B981', fontSize: '0.7rem' }}>🔒</span>
                      {project.liveLinks && project.liveLinks[0] ? project.liveLinks[0].url : `https://${project.id}.dev`}
                    </div>
                  </div>

                  {/* Live Iframe Container */}
                  {project.liveLinks && project.liveLinks[0] ? (
                    <div style={{ position: 'relative', width: '100%', height: deviceView === 'mobile' ? '560px' : '520px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
                      <iframe
                        src={project.liveLinks[0].url}
                        title={`${project.title} Live Interactive View`}
                        style={{
                          width: '100%',
                          height: '100%',
                          border: 'none',
                        }}
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        backgroundColor: '#1E1E24',
                        color: '#FFFFFF',
                        borderRadius: '8px',
                        padding: '3rem 2rem',
                        height: deviceView === 'mobile' ? '450px' : '400px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                      }}
                    >
                      <h4 style={{ fontSize: '1.4rem', marginBottom: '0.6rem', fontFamily: 'var(--font-serif)' }}>
                        {project.title} Concept & Architecture
                      </h4>
                      <p style={{ color: '#A1A1AA', fontSize: '0.92rem', maxWidth: '440px', marginBottom: '1.5rem' }}>
                        {project.tagline}
                      </p>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {project.stack.map(tech => (
                          <span key={tech} className="mono" style={{ fontSize: '0.75rem', padding: '0.3rem 0.7rem', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '4px', color: '#E4E4E7' }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
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
