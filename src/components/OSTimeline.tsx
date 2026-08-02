import React, { useState } from 'react';
import { Terminal, Cpu, ChevronRight } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

interface ExperienceEntry {
  id: string;
  pid: string;
  role: string;
  company: string;
  location: string;
  period: string;
  status: 'CURRENT PROCESS' | 'DEPLOYED' | 'SUCCESS';
  statusColor: string;
  summary: string;
  highlights: string[];
  techStack: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'exp-mentozy',
    pid: 'PID_001',
    role: 'Founder & Full-Stack Architect',
    company: 'Mentozy | EdTech Platform (Beta)',
    location: 'India',
    period: '2024 — PRESENT',
    status: 'CURRENT PROCESS',
    statusColor: '#8FAF90',
    summary: 'Building and scaling one of India\'s fastest-growing edtech startups. Engineered WebRTC video sessions, "Sanjaya" AI mentor bot, and Razorpay financial KYC integration.',
    highlights: [
      'Engineered custom WebRTC solution for low-latency, high-quality video mentor sessions.',
      'Developed and integrated AI assistant bot "Sanjaya" as a playful yet professional mentor guide.',
      'Integrated Razorpay payment gateway for secure transactions, managing KYC and financial dashboards.',
      'Scaling the platform in beta while iterating on real-time student and mentor feedback.',
    ],
    techStack: ['React.js', 'Node.js', 'WebRTC', 'Gemini API', 'Razorpay', 'PostgreSQL', 'Supabase'],
  },
  {
    id: 'exp-honeygpt',
    pid: 'PID_002',
    role: 'Product Lead & AI Engineer',
    company: 'HoneyGPT | AI Conversation Platform',
    location: 'Global SaaS',
    period: '2025',
    status: 'DEPLOYED',
    statusColor: '#F5C84C',
    summary: 'Designed an intelligent conversation platform offering multimodal image generation, code assistance, web search, and specialized AI workflows.',
    highlights: [
      'Integrated Gemini API and Chatbase for multi-agent assistant workflows.',
      'Designed accessible, premium SaaS interface with Google OAuth and session management.',
      'Built image generation and code synthesis pipelines.',
    ],
    techStack: ['React.js', 'TypeScript', 'Gemini API', 'Google AI Studio', 'Cloudflare R2', 'Tailwind CSS'],
  },
  {
    id: 'exp-ignite',
    pid: 'PID_003',
    role: 'Global Hackathon Organizer & Lead',
    company: 'Ignite Hack 2.0 | Innovation Event',
    location: 'Global',
    period: '2024–2025',
    status: 'SUCCESS',
    statusColor: '#6FA8DC',
    summary: 'Organized and managed a global developer innovation hackathon reaching over 1,000+ registrations and high-profile technical judge coordination.',
    highlights: [
      'Reached 1,000+ developer registrations globally across multiple tracks.',
      'Facilitated real-time dashboard updates and demographic data management.',
      'Coordinated with high-profile industry judges and technical associates.',
    ],
    techStack: ['Event Infrastructure', 'Dashboard Systems', 'Community Leadership', 'Data Management'],
  },
  {
    id: 'exp-ingres',
    pid: 'PID_004',
    role: 'Team Leader',
    company: 'INGRES-AI | Multilingual Farmer Chatbot',
    location: 'India',
    period: '2024',
    status: 'DEPLOYED',
    statusColor: '#8FAF90',
    summary: 'Led the development of an AI-powered multilingual chatbot assisting farmers with groundwater information, government schemes, and document management.',
    highlights: [
      'Led product planning, AI integration, team coordination, and UI architecture.',
      'Integrated groundwater information databases and intelligent recommendation logic.',
    ],
    techStack: ['Python', 'Gemini API', 'Node.js', 'Multilingual AI', 'UI Planning'],
  },
  {
    id: 'exp-council',
    pid: 'PID_005',
    role: 'Student Council President & Tech Lead',
    company: 'Student Council & Tech Communities',
    location: 'Campus / Regional',
    period: '2023 — PRESENT',
    status: 'SUCCESS',
    statusColor: '#E06C75',
    summary: 'Served as Student Council President, Technical Team Leader, Community Administrator, and Student Mentor.',
    highlights: [
      'Led technical teams from concept to deployment.',
      'Mentored junior developers and organized technical workshops.',
    ],
    techStack: ['Leadership', 'Technical Mentorship', 'Community Building', 'Product Vision'],
  },
];

export const OSTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('exp-mentozy');

  return (
    <section id="experience" style={{ padding: '8rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
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
          <Terminal size={14} color="#6FA8DC" />
          <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            CAREER & LEADERSHIP PROCESS TREE
          </span>
        </div>

        <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', marginBottom: '1rem' }}>
          Interactive Career OS Kernel Logs
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
          Real-world startup leadership, AI chatbot projects, and global hackathon events.
        </p>
      </div>

      {/* OS Timeline Container */}
      <div
        className="workspace-card"
        style={{
          borderRadius: 'var(--radius-lg)',
          backgroundColor: '#1E1E24',
          color: '#E4E4E7',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
        }}
      >
        {/* OS Header Bar */}
        <div
          style={{
            padding: '1.2rem 1.8rem',
            backgroundColor: '#141417',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Cpu size={18} color="#F5C84C" />
            <span className="mono" style={{ fontSize: '0.85rem', color: '#F5C84C', fontWeight: 600 }}>
              BHASKARUNI_HARSHITA_OS // CAREER_PROCESSES
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span className="mono" style={{ fontSize: '0.78rem', color: '#8FAF90' }}>
              ● ACTIVE PROJECTS: 5
            </span>
            <span className="mono" style={{ fontSize: '0.78rem', color: '#A1A1AA' }}>
              HACKATHON REGISTRATIONS: 1,000+
            </span>
          </div>
        </div>

        {/* Process Tree List */}
        <div style={{ padding: '2.5rem' }}>
          {experiences.map((exp, i) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div key={exp.id} style={{ position: 'relative', marginBottom: i === experiences.length - 1 ? 0 : '2.5rem' }}>
                {i < experiences.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '23px',
                      top: '48px',
                      width: '2px',
                      height: 'calc(100% + 12px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    }}
                  />
                )}

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: exp.statusColor,
                      color: '#18181B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      flexShrink: 0,
                      zIndex: 2,
                      boxShadow: `0 0 16px ${exp.statusColor}66`,
                    }}
                  >
                    <Terminal size={20} />
                  </div>

                  <div
                    style={{
                      flex: 1,
                      backgroundColor: '#27272A',
                      borderRadius: 'var(--radius-md)',
                      border: isExpanded ? `1px solid ${exp.statusColor}` : '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '1.8rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onClick={() => {
                      setExpandedId(isExpanded ? '' : exp.id);
                      playClickSound('medium');
                    }}
                    onMouseEnter={playHoverSound}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.8rem' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.4rem' }}>
                          <span className="mono" style={{ fontSize: '0.78rem', color: exp.statusColor, fontWeight: 700 }}>
                            {exp.pid}
                          </span>
                          <span style={{ fontSize: '0.75rem', color: '#A1A1AA' }}>•</span>
                          <span className="mono" style={{ fontSize: '0.78rem', color: '#A1A1AA' }}>
                            {exp.period}
                          </span>
                        </div>
                        <h3 style={{ fontSize: '1.6rem', color: '#FFF', lineHeight: 1.2 }}>{exp.role}</h3>
                        <p style={{ fontSize: '1.05rem', color: '#D4D4D8', fontWeight: 500 }}>{exp.company} — {exp.location}</p>
                      </div>

                      <div
                        style={{
                          padding: '0.35rem 0.8rem',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: 'rgba(255, 255, 255, 0.06)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          fontSize: '0.75rem',
                          color: exp.statusColor,
                          fontWeight: 700,
                        }}
                        className="mono"
                      >
                        ● {exp.status}
                      </div>
                    </div>

                    <p style={{ fontSize: '0.98rem', color: '#A1A1AA', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                      {exp.summary}
                    </p>

                    {isExpanded && (
                      <div style={{ paddingTop: '1.2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        <h4 className="mono" style={{ fontSize: '0.78rem', color: '#F5C84C', marginBottom: '0.8rem' }}>
                          PROJECT HIGHLIGHTS & OUTCOMES
                        </h4>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                          {exp.highlights.map((hl, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.9rem', color: '#E4E4E7' }}>
                              <ChevronRight size={16} color={exp.statusColor} style={{ flexShrink: 0, marginTop: '3px' }} />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {exp.techStack.map(t => (
                            <span
                              key={t}
                              style={{
                                padding: '0.25rem 0.65rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                color: '#D4D4D8',
                                fontFamily: 'var(--font-mono)',
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
