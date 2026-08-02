import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Clock } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export interface SkillNode {
  id: string;
  name: string;
  category: 'design' | 'frontend' | 'backend' | 'ai';
  xRatio: number;
  yRatio: number;
  radius: number;
  color: string;
  years: string;
  relatedSkills: string[];
  projects: string[];
  description: string;
  snippet: string;
}

export const skillsData: SkillNode[] = [
  {
    id: 'react',
    name: 'React.js & SPAs',
    category: 'frontend',
    xRatio: 0.22,
    yRatio: 0.32,
    radius: 14,
    color: '#6FA8DC',
    years: 'Core Mastery',
    relatedSkills: ['typescript', 'tailwind', 'threejs'],
    projects: ['Mentozy EdTech', 'HoneyGPT AI', 'Focus App'],
    description: 'Component-based architecture, SPA state management, custom hooks, and responsive design systems.',
    snippet: 'React.js Component Architecture',
  },
  {
    id: 'typescript',
    name: 'TypeScript & JavaScript',
    category: 'frontend',
    xRatio: 0.38,
    yRatio: 0.24,
    radius: 14,
    color: '#F5C84C',
    years: 'Core Mastery',
    relatedSkills: ['react', 'nodejs', 'gemini'],
    projects: ['Mentozy Platform', 'HoneyGPT Studio'],
    description: 'Strict type safety, ES6+ async workflows, REST API integrations, and robust client logic.',
    snippet: 'interface UserSession { id: string; role: string; }',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS & Animations',
    category: 'frontend',
    xRatio: 0.16,
    yRatio: 0.58,
    radius: 12,
    color: '#8FAF90',
    years: 'Core Mastery',
    relatedSkills: ['react', 'ui-ux'],
    projects: ['Mentozy Admin', 'HoneyGPT UI'],
    description: 'Utility-first styling, Glassmorphism design system tokens, and fluid responsive layouts.',
    snippet: 'backdrop-blur-md bg-white/70 border border-white/20',
  },
  {
    id: 'threejs',
    name: 'Three.js & Graphics',
    category: 'frontend',
    xRatio: 0.32,
    yRatio: 0.72,
    radius: 12,
    color: '#F5C84C',
    years: 'Core Mastery',
    relatedSkills: ['react', 'tailwind'],
    projects: ['Living Workspace Hero', 'Popcorn TV Studio'],
    description: '3D scene graphs, lighting, shaders, ambient shadows, and WebGL canvas interactions.',
    snippet: 'new THREE.WebGLRenderer({ antialias: true })',
  },
  {
    id: 'gemini',
    name: 'Gemini API & AI Studio',
    category: 'ai',
    xRatio: 0.55,
    yRatio: 0.30,
    radius: 15,
    color: '#F5C84C',
    years: 'Specialized',
    relatedSkills: ['typescript', 'prompt-eng', 'huggingface'],
    projects: ['HoneyGPT Engine', 'Sanjaya AI Bot', 'INGRES-AI'],
    description: 'Multimodal AI generation, streaming tokens, prompt engineering, Chatbase, and AI workflow design.',
    snippet: 'googleAI.getGenerativeModel({ model: "gemini-1.5-pro" })',
  },
  {
    id: 'prompt-eng',
    name: 'Prompt Engineering & Chatbots',
    category: 'ai',
    xRatio: 0.68,
    yRatio: 0.22,
    radius: 13,
    color: '#8FAF90',
    years: 'Specialized',
    relatedSkills: ['gemini', 'huggingface'],
    projects: ['Sanjaya AI Mentor (Mentozy)', 'INGRES-AI Multilingual Chatbot'],
    description: 'System prompt design, multi-agent orchestrations, context retention, and specialized AI personas.',
    snippet: 'System Prompt Persona // Sanjaya AI Guide',
  },
  {
    id: 'huggingface',
    name: 'Hugging Face & AI Tools',
    category: 'ai',
    xRatio: 0.82,
    yRatio: 0.34,
    radius: 12,
    color: '#6FA8DC',
    years: 'Specialized',
    relatedSkills: ['gemini', 'nodejs'],
    projects: ['HoneyGPT AI Studio', 'INGRES-AI Chatbot'],
    description: 'Open-source LLM inference endpoints, Chatbase agent integrations, and multimodal pipeline design.',
    snippet: 'Hugging Face Inference Endpoint API',
  },
  {
    id: 'nodejs',
    name: 'Node.js & Express REST APIs',
    category: 'backend',
    xRatio: 0.52,
    yRatio: 0.68,
    radius: 14,
    color: '#8FAF90',
    years: 'Core Mastery',
    relatedSkills: ['postgresql', 'supabase', 'firebase'],
    projects: ['Mentozy Backend', 'HoneyGPT Server'],
    description: 'Scalable REST APIs, session management, OAuth 2.0 authentication, and Cloudflare R2 file storage.',
    snippet: 'app.post("/api/v1/mentozy/webrtc", authMiddleware)',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL, Supabase & Firebase',
    category: 'backend',
    xRatio: 0.72,
    yRatio: 0.64,
    radius: 13,
    color: '#E06C75',
    years: 'Core Mastery',
    relatedSkills: ['nodejs', 'cloud'],
    projects: ['Mentozy Database', 'Focus App Sync'],
    description: 'Relational schema design, SQL queries, Supabase authentication, Google OAuth, and Firebase realtime sync.',
    snippet: 'SELECT * FROM student_sessions WHERE active = true',
  },
  {
    id: 'cloud',
    name: 'Vercel, Netlify & Cloudflare',
    category: 'backend',
    xRatio: 0.86,
    yRatio: 0.58,
    radius: 13,
    color: '#F5C84C',
    years: 'Core Mastery',
    relatedSkills: ['nodejs', 'postgresql'],
    projects: ['Mentozy Beta Deployments', 'HoneyGPT Cloud'],
    description: 'Cloud deployment, Cloudflare R2 storage, DNS configuration, and automated CI/CD pipelines.',
    snippet: 'Cloudflare R2 Bucket + Vercel Edge Serverless',
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Design & Figma',
    category: 'design',
    xRatio: 0.35,
    yRatio: 0.48,
    radius: 15,
    color: '#F5C84C',
    years: 'Core Mastery',
    relatedSkills: ['react', 'tailwind', 'mvp-strategy'],
    projects: ['Mentozy Platform UX', 'Krishnaite Branding', 'Focus App UI'],
    description: 'Figma wireframing, visual storytelling, user-centric design, and freemium/SaaS product UI planning.',
    snippet: 'Figma Design System Tokens & User Journeys',
  },
  {
    id: 'mvp-strategy',
    name: 'MVP & SaaS Product Strategy',
    category: 'design',
    xRatio: 0.18,
    yRatio: 0.82,
    radius: 14,
    color: '#8FAF90',
    years: 'Entrepreneurial',
    relatedSkills: ['ui-ux', 'react'],
    projects: ['Mentozy EdTech Startup', 'HoneyGPT SaaS', 'Krishnaite'],
    description: 'Startup product development, subscription models, landing page optimization, and technical writing.',
    snippet: '0-to-1 MVP Product Launch & Growth Architecture',
  },
];

export const SkillsConstellation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(skillsData[0]);
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'ai' | 'design'>('all');
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 900);
    let height = (canvas.height = 520);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = Math.max(440, Math.min(560, window.innerHeight * 0.55));
    };

    window.addEventListener('resize', handleResize);

    let time = 0;
    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      // Background grid
      ctx.strokeStyle = 'rgba(38, 38, 38, 0.04)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 80) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Draw connection lines
      skillsData.forEach(skill => {
        const sx = skill.xRatio * width;
        const sy = skill.yRatio * height;

        skill.relatedSkills.forEach(relId => {
          const relSkill = skillsData.find(s => s.id === relId);
          if (relSkill) {
            const rx = relSkill.xRatio * width;
            const ry = relSkill.yRatio * height;

            const isHighlighted =
              hoveredSkillId === skill.id ||
              hoveredSkillId === relSkill.id ||
              selectedSkill?.id === skill.id ||
              selectedSkill?.id === relSkill.id;

            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(rx, ry);
            ctx.strokeStyle = isHighlighted ? '#F5C84C' : 'rgba(38, 38, 38, 0.08)';
            ctx.lineWidth = isHighlighted ? 2 : 1;
            ctx.globalAlpha = isHighlighted ? 0.8 : 0.4;
            ctx.stroke();
          }
        });
      });

      // Draw Skill Stars (Nodes)
      skillsData.forEach(skill => {
        if (activeFilter !== 'all' && skill.category !== activeFilter) return;

        const sx = skill.xRatio * width;
        const sy = skill.yRatio * height;
        const isHovered = hoveredSkillId === skill.id;
        const isSelected = selectedSkill?.id === skill.id;

        const pulsingRadius = skill.radius + Math.sin(time + skill.xRatio * 10) * 1.5;

        if (isHovered || isSelected) {
          ctx.beginPath();
          ctx.arc(sx, sy, pulsingRadius + 12, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(245, 200, 76, 0.18)';
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(sx, sy, isSelected ? pulsingRadius + 4 : pulsingRadius, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? '#F5C84C' : skill.color;
        ctx.globalAlpha = 1.0;
        ctx.fill();

        ctx.strokeStyle = '#FAF8F3';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#262626';
        ctx.font = isSelected ? '600 13px "Plus Jakarta Sans"' : '500 12px "Plus Jakarta Sans"';
        ctx.fillText(skill.name, sx + skill.radius + 8, sy + 4);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [activeFilter, hoveredSkillId, selectedSkill]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    const width = canvas.width;
    const height = canvas.height;

    for (const skill of skillsData) {
      const sx = skill.xRatio * width;
      const sy = skill.yRatio * height;
      const dist = Math.sqrt((clickX - sx) ** 2 + (clickY - sy) ** 2);

      if (dist <= skill.radius + 15) {
        setSelectedSkill(skill);
        playClickSound('high');
        break;
      }
    }
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const width = canvas.width;
    const height = canvas.height;

    let foundId: string | null = null;
    for (const skill of skillsData) {
      const sx = skill.xRatio * width;
      const sy = skill.yRatio * height;
      const dist = Math.sqrt((mouseX - sx) ** 2 + (mouseY - sy) ** 2);

      if (dist <= skill.radius + 15) {
        foundId = skill.id;
        break;
      }
    }

    if (foundId !== hoveredSkillId) {
      setHoveredSkillId(foundId);
      if (foundId) playHoverSound();
    }
  };

  return (
    <section id="skills" style={{ padding: '8rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
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
          <Star size={14} color="#F5C84C" />
          <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            INTERACTIVE TECHNICAL SKILL CONSTELLATION
          </span>
        </div>

        <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', marginBottom: '1rem' }}>
          Every Skill is a Connected Star
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
          Click or hover on stars to inspect real-world projects, AI integrations, and stack nodes.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {(['all', 'frontend', 'backend', 'ai', 'design'] as const).map(cat => (
          <button
            key={cat}
            onClick={() => { setActiveFilter(cat); playClickSound('medium'); }}
            onMouseEnter={playHoverSound}
            style={{
              padding: '0.45rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-medium)',
              backgroundColor: activeFilter === cat ? 'var(--text-primary)' : 'var(--bg-primary)',
              color: activeFilter === cat ? 'var(--bg-primary)' : 'var(--text-secondary)',
              fontSize: '0.82rem',
              fontWeight: 500,
              cursor: 'pointer',
              textTransform: 'capitalize',
              transition: 'all 0.2s ease',
            }}
          >
            {cat === 'all' ? 'All Technical Stars' : cat === 'ai' ? 'AI & LLMs' : cat}
          </button>
        ))}
      </div>

      {/* Constellation Canvas + Detail Drawer Container */}
      <div
        className="workspace-card"
        style={{
          borderRadius: 'var(--radius-lg)',
          backgroundColor: 'var(--bg-primary)',
          border: '1px solid var(--border-medium)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        {/* Left: Interactive Canvas */}
        <div style={{ position: 'relative', width: '100%', borderRight: '1px solid var(--border-light)' }}>
          <canvas
            ref={canvasRef}
            onClick={handleCanvasClick}
            onMouseMove={handleCanvasMouseMove}
            style={{ width: '100%', height: '100%', minHeight: '450px', cursor: 'pointer' }}
          />
          <div style={{ position: 'absolute', bottom: '1rem', left: '1.5rem', fontSize: '0.75rem', color: 'var(--text-tertiary)' }} className="mono">
            ✦ CLICK STAR NODE TO INSPECT TECH DETAILS
          </div>
        </div>

        {/* Right: Selected Skill Drawer */}
        {selectedSkill && (
          <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'var(--bg-secondary)' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <span
                  style={{
                    padding: '0.35rem 0.85rem',
                    backgroundColor: selectedSkill.color,
                    color: selectedSkill.color === '#F5C84C' ? '#262626' : '#FAF8F3',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                  }}
                  className="mono"
                >
                  {selectedSkill.category.toUpperCase()}
                </span>
                <span className="mono" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={14} /> {selectedSkill.years}
                </span>
              </div>

              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: 1.1 }}>
                {selectedSkill.name}
              </h3>

              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                {selectedSkill.description}
              </p>

              {/* Code/Design Snippet Tag */}
              <div style={{ marginBottom: '2rem' }}>
                <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.4rem' }}>
                  TECHNICAL IMPLEMENTATION
                </span>
                <div
                  style={{
                    padding: '0.8rem 1rem',
                    backgroundColor: 'var(--bg-primary)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-light)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  <code>{selectedSkill.snippet}</code>
                </div>
              </div>

              {/* Featured Projects */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.6rem' }}>
                  SHIPPED IN PROJECTS
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedSkill.projects.map(p => (
                    <span
                      key={p}
                      style={{
                        padding: '0.35rem 0.75rem',
                        backgroundColor: 'var(--bg-primary)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        border: '1px solid var(--border-light)',
                      }}
                    >
                      ✦ {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Nodes */}
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
              <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.6rem' }}>
                CONNECTED ECOSYSTEM NODES
              </span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {selectedSkill.relatedSkills.map(relId => {
                  const rel = skillsData.find(s => s.id === relId);
                  if (!rel) return null;
                  return (
                    <button
                      key={relId}
                      onClick={() => { setSelectedSkill(rel); playClickSound('medium'); }}
                      style={{
                        padding: '0.3rem 0.7rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-medium)',
                        backgroundColor: 'transparent',
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                      }}
                    >
                      {rel.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
