import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export const NotebookContact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound('high');
    setIsSubmitted(true);
  };

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
                CONTACT & COLLABORATION NOTEBOOK
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
              Let's build something extraordinary together.
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '680px' }}>
              Bhaskaruni Lakshmi Harshita — Open for AI product collaborations, full-stack advisory, edtech ventures, and technical leadership roles.
            </p>
          </div>

          {/* Form + Direct Details Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem' }}>
            {/* Left: Contact Form */}
            {isSubmitted ? (
              <div
                style={{
                  padding: '3rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  border: '1px solid var(--border-light)',
                }}
              >
                <CheckCircle2 size={48} color="#8FAF90" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '0.6rem' }}>
                  Note Received!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                  Thank you for reaching out. Harshita will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.4rem' }}>
                    YOUR NAME // SENDER
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Vance"
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-medium)',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div>
                  <label className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.4rem' }}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-medium)',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div>
                  <label className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.4rem' }}>
                    YOUR MESSAGE OR COLLABORATION IDEA
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your product vision or inquiry..."
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-medium)',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  onMouseEnter={playHoverSound}
                  style={{ width: 'fit-content', marginTop: '0.5rem' }}
                >
                  Send Letter Note
                  <Send size={16} />
                </button>
              </form>
            )}

            {/* Right: Direct Details */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>
                  Direct Contact & Profiles
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <Mail size={18} color="#F5C84C" />
                    <a
                      href="mailto:honeygpt111@gmail.com"
                      style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }}
                    >
                      honeygpt111@gmail.com
                    </a>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <MapPin size={18} color="#8FAF90" />
                    <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                      India (Available Globally for Remote Work)
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    padding: '1.5rem',
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <span className="mono" style={{ fontSize: '0.75rem', color: '#8FAF90', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
                    ● CURRENT AVAILABILITY
                  </span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Actively open for AI product advisory, full-stack web engineering, startup leadership, and technical speaking engagements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
