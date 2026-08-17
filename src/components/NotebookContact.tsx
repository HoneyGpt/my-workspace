import React from 'react';
import { Mail, MapPin, Github, Linkedin, Download, ArrowUpRight } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export const NotebookContact: React.FC = () => {
  return (
    <section id="contact" style={{ padding: '8rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
      <div
        className="workspace-card"
        style={{
          backgroundColor: '#FAF8F3',
          borderRadius: '24px',
          padding: '4rem 3rem',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
          backgroundImage: 'linear-gradient(rgba(38, 38, 38, 0.05) 1px, transparent 1px)',
          backgroundSize: '100% 2.2rem',
        }}
      >
        {/* Binder Holes Accent */}
        <div style={{ position: 'absolute', top: '2.5rem', left: '1.2rem', display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-medium)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
              }}
            />
          ))}
        </div>

        <div style={{ paddingLeft: '2rem' }}>
          {/* Header */}
          <div style={{ marginBottom: '3.5rem' }}>
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
                CONTACT & RECRUITER HUB
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
              Let's build something extraordinary together.
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '680px' }}>
              Bhaskaruni Lakshmi Harshita — Open for AI product collaborations, full-stack advisory, edtech ventures, and technical leadership roles.
            </p>
          </div>

          {/* Contact Details & Links Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {/* Download Resume Card */}
            <div
              style={{
                padding: '2.2rem',
                backgroundColor: 'var(--bg-primary)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-warm)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
                  CURRICULUM VITAE
                </span>
                <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', marginBottom: '0.6rem' }}>
                  Download Full Resume
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.8rem' }}>
                  Get detailed insight into Harshita's full-stack architecture experience, edtech startups, AI project deployments, and technical stack.
                </p>
              </div>

              <a
                href="/MY_RESUME_FINAL.pdf"
                download="Harshita_Bhaskaruni_Resume.pdf"
                onClick={() => playClickSound('high')}
                onMouseEnter={playHoverSound}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  padding: '0.9rem 1.6rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--text-primary)',
                  color: 'var(--bg-primary)',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease',
                }}
                className="mono"
              >
                <Download size={18} />
                Download Resume (PDF)
              </a>
            </div>

            {/* LinkedIn & GitHub Professional Profiles */}
            <div
              style={{
                padding: '2.2rem',
                backgroundColor: 'var(--bg-primary)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-support)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
                  PROFESSIONAL PROFILES
                </span>
                <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', marginBottom: '0.6rem' }}>
                  Connect & Explore Code
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Review active open-source projects, repository contributions, and network professionally.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                <a
                  href="https://github.com/HoneyGpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClickSound('medium')}
                  onMouseEnter={playHoverSound}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.8rem 1.2rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                  }}
                  className="mono"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Github size={18} />
                    <span>GitHub (@HoneyGpt)</span>
                  </div>
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="https://www.linkedin.com/in/harshitabhaskaruni1117/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClickSound('medium')}
                  onMouseEnter={playHoverSound}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.8rem 1.2rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)',
                    color: '#0A66C2',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                  }}
                  className="mono"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Linkedin size={18} />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Direct Contact Channels */}
            <div
              style={{
                padding: '2.2rem',
                backgroundColor: 'var(--bg-primary)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
                  DIRECT CHANNELS
                </span>
                <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', marginBottom: '0.6rem' }}>
                  Get in Touch
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Direct email communication and location details.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={18} color="var(--text-primary)" />
                  </div>
                  <div>
                    <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', display: 'block' }}>
                      DIRECT EMAIL
                    </span>
                    <a href="mailto:honeygpt111@gmail.com" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }}>
                      honeygpt111@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={18} color="var(--text-primary)" />
                  </div>
                  <div>
                    <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', display: 'block' }}>
                      LOCATION
                    </span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      India (IST / Remote Worldwide)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
