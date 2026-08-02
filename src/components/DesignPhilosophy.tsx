import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Quote, BookOpen } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export const DesignPhilosophy: React.FC = () => {
  return (
    <section
      id="philosophy"
      style={{
        padding: '9rem 1.5rem',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Magazine Issue Tag */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '4rem',
            borderBottom: '1px solid var(--border-medium)',
            paddingBottom: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <BookOpen size={16} color="#8FAF90" />
            <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              EDITORIAL MANIFESTO — ISSUE NO. 04
            </span>
          </div>

          <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
            HARSHITA BHASKARUNI // ESSAYS ON CRAFT
          </span>
        </div>

        {/* Giant Pull Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '1000px', margin: '0 auto 6rem auto', textAlign: 'center' }}
        >
          <Quote size={48} color="#F5C84C" style={{ opacity: 0.5, marginBottom: '1.5rem' }} />
          <h2
            style={{
              fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)',
              lineHeight: 1.08,
              fontFamily: 'var(--font-serif)',
              letterSpacing: '-0.02em',
              marginBottom: '2rem',
            }}
          >
            "Code is design executed; <br />
            design is <span className="highlight-yellow">code envisioned</span>."
          </h2>

          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto' }}>
            Software is at its best when the boundary between human intent and machine execution melts into quiet delight.
          </p>
        </motion.div>

        {/* Editorial 3-Column Magazine Spread Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {/* Column 1 */}
          <div
            className="workspace-card"
            style={{
              padding: '2.5rem',
              backgroundColor: 'var(--bg-primary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
            }}
            onMouseEnter={playHoverSound}
          >
            <span className="mono" style={{ fontSize: '0.78rem', color: '#F5C84C', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
              PRINCIPLE 01
            </span>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
              Craft Over Speed
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Shortcuts in visual hierarchy or architectural integrity accumulate as expensive debt. Building software with quiet craftsmanship creates enduring momentum that users feel in every interaction.
            </p>
          </div>

          {/* Column 2 */}
          <div
            className="workspace-card"
            style={{
              padding: '2.5rem',
              backgroundColor: 'var(--bg-primary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
            }}
            onMouseEnter={playHoverSound}
          >
            <span className="mono" style={{ fontSize: '0.78rem', color: '#8FAF90', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
              PRINCIPLE 02
            </span>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
              Zero Friction Flow
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              When a user interacts with a digital desk, latency and visual stutter break thought flow. We engineer sub-16ms response times so ideas turn into products at the speed of human thought.
            </p>
          </div>

          {/* Column 3 */}
          <div
            className="workspace-card"
            style={{
              padding: '2.5rem',
              backgroundColor: 'var(--bg-primary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
            }}
            onMouseEnter={playHoverSound}
          >
            <span className="mono" style={{ fontSize: '0.78rem', color: '#6FA8DC', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
              PRINCIPLE 03
            </span>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
              End-to-End Synergy
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              The best products are built when the person designing the interaction understands the underlying memory buffer and database index. Design and engineering are two sides of the same coin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
