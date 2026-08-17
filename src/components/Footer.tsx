import React from 'react';
import { Dribbble, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-light)',
        padding: '4rem 1.5rem 3rem 1.5rem',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700 }}>
              Bhaskaruni Lakshmi Harshita
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
            Creative Full-Stack Developer • AI Product Builder • Student Entrepreneur
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }} className="mono">
          <a href="#workspace" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
            Workspace
          </a>
          <a href="#projects" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
            Projects
          </a>
          <a
            href="https://github.com/HoneyGpt"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.82rem', color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}
          >
            GitHub <ArrowUpRight size={12} />
          </a>
          <a
            href="https://www.linkedin.com/in/harshitabhaskaruni1117/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.82rem', color: '#0A66C2', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}
          >
            LinkedIn <ArrowUpRight size={12} />
          </a>
        </div>

        <div style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)' }} className="mono">
          © {new Date().getFullYear()} Bhaskaruni Lakshmi Harshita. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
