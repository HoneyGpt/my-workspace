import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProjectModal, ProjectData } from './ProjectModal';
import { playClickSound, playHoverSound } from '../utils/audio';

export const projectsList: ProjectData[] = [
  {
    id: 'mentozy',
    title: 'Mentozy EdTech Platform',
    subtitle: 'India\'s Fastest-Growing Teaching & Mentorship Platform',
    category: 'EdTech Startup & WebRTC Engine',
    year: '2024–2026',
    role: 'Founder & Full-Stack Architect',
    tagline: 'Empowering mentors and students with real-time video sessions, AI mentor "Sanjaya", and Razorpay financial tools.',
    accentColor: '#F5C84C',
    bgGradient: 'linear-gradient(135deg, #262626 0%, #1A1A1A 100%)',
    overview: 'Mentozy is an edtech platform scaling as one of India\'s fastest-growing learning startups. Designed and engineered from the ground up to connect mentors and learners with high-quality video sessions, real-time feedback, and automated administrative tools.',
    rationale: 'Traditional edtech platforms suffer from high latency video calls and opaque financial tracking. Mentozy builds a custom WebRTC pipeline paired with an AI assistant bot "Sanjaya" to guide learners seamlessly.',
    challenges: [
      'Engineered custom WebRTC architecture for low-latency peer video streaming.',
      'Integrated AI mentor bot "Sanjaya" for playful yet professional student guidance.',
      'Seamless Razorpay payment gateway integration with KYC & financial dashboards.',
    ],
    solutions: [
      'Built responsive React + Node.js component architecture with Supabase session management.',
      'Implemented real-time feedback loops to iterate features rapidly during beta scaling.',
    ],
    impact: [
      { label: 'Platform Phase', value: 'Beta Scaling' },
      { label: 'Core AI Mentor', value: 'Sanjaya Bot' },
      { label: 'Video Tech', value: 'WebRTC' },
    ],
    stack: ['React.js', 'Node.js', 'WebRTC', 'Gemini API', 'Razorpay', 'PostgreSQL', 'Supabase'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'Mentozy Unified Learning Platform',
      heroSubtitle: 'Connecting mentors and learners with WebRTC video sessions and AI guide "Sanjaya".',
      features: ['WebRTC Video Sessions', 'Sanjaya AI Mentor Bot', 'Razorpay Financial Hub', 'Study Materials Vault'],
    },
    codeSnippet: `// Mentozy WebRTC Peer Connection Handler
export async function initializeWebRTCSession(peerId: string) {
  const pc = new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
  });
  
  pc.onicecandidate = (event) => {
    if (event.candidate) sendSignalToPeer(peerId, { candidate: event.candidate });
  };
  
  return pc;
}`,
  },
  {
    id: 'honeygpt',
    title: 'HoneyGPT AI Platform',
    subtitle: 'Intelligent AI Conversation & Multimodal Assistant',
    category: 'Artificial Intelligence & SaaS',
    year: '2025',
    role: 'Product Lead & AI Engineer',
    tagline: 'AI conversation platform providing image generation, code assistance, web search, and specialized agents.',
    accentColor: '#8FAF90',
    bgGradient: 'linear-gradient(135deg, #1C241E 0%, #111612 100%)',
    overview: 'HoneyGPT is an AI assistant platform built to empower creators with image synthesis, intelligent code writing, real-time web search, and specialized task agents in a modern SaaS interface.',
    rationale: 'AI tools often lack accessible design and unified multi-agent capabilities. HoneyGPT combines Gemini API integrations with robust user authentication and subscription management.',
    challenges: [
      'Orchestrating multi-agent prompts across Chatbase and Gemini API endpoints.',
      'Optimizing streaming token responses for responsive user interfaces.',
    ],
    solutions: [
      'Implemented component-based React architecture with Glassmorphism aesthetic tokens.',
      'Integrated Google OAuth session management and Cloudflare R2 file storage.',
    ],
    impact: [
      { label: 'Supported Capabilities', value: 'Multimodal AI' },
      { label: 'AI Engine', value: 'Gemini API' },
      { label: 'Authentication', value: 'Google OAuth' },
    ],
    stack: ['React.js', 'TypeScript', 'Gemini API', 'Google AI Studio', 'Tailwind CSS', 'Cloudflare R2'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'HoneyGPT Multimodal Studio',
      heroSubtitle: 'Image generation, code assistance, and specialized AI workflows.',
      features: ['Gemini API Integration', 'Code Assistance', 'Image Generation', 'Specialized AI Agents'],
    },
    codeSnippet: `// HoneyGPT Gemini Streaming Inference Stream
export async function streamHoneyGPTResponse(prompt: string) {
  const model = googleAI.getGenerativeModel({ model: "gemini-1.5-pro" });
  const result = await model.generateContentStream(prompt);
  return result.stream;
}`,
  },
  {
    id: 'krishnaite',
    title: 'Krishnaite Decision Platform',
    subtitle: 'Strategic Decision-Making & Ethical Clarity Framework',
    category: 'Framework & Educational Platform',
    year: '2024–2025',
    role: 'Creator & Platform Architect',
    tagline: 'Digital platform executing the "K-R-I-S-H-N-A" methodology for strategic wisdom and ethical clarity.',
    accentColor: '#6FA8DC',
    bgGradient: 'linear-gradient(135deg, #18222C 0%, #0D131A 100%)',
    overview: 'Krishnaite is an educational platform translating complex strategic dilemmas into structured decision frameworks based on the K-R-I-S-H-N-A methodology (Know, Review, Identify, Strategize, Harmonize, Navigate, Act).',
    rationale: 'In a noisy world, decision-makers lack clean, structured frameworks to navigate ethical and operational crossroads. Krishnaite provides minimalist educational resources and digital learning tools.',
    challenges: [
      'Designing clean, warm typography hierarchy without visual clutter.',
      'Creating interactive framework step guides for learners.',
    ],
    solutions: [
      'Crafted Warm Ivory line art canvas layouts with ocean sailing ship aesthetics.',
      'Built responsive framework card component grid.',
    ],
    impact: [
      { label: 'Methodology Stages', value: '7 Core Steps' },
      { label: 'Platform Aesthetic', value: 'Warm Ivory' },
      { label: 'Resource Library', value: 'Digital Learning' },
    ],
    stack: ['React.js', 'HTML5/CSS3', 'Typography', 'Figma', 'Vercel'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'Solve with Strategy. Act with Purpose.',
      heroSubtitle: 'Strategic wisdom and ethical clarity for real-life problems.',
      features: ['K-R-I-S-H-N-A Framework', 'Knowledge Library', 'Dilemma Submissions', 'Minimalist Line Art'],
    },
    codeSnippet: `// Krishnaite Framework Stage Validator
export const KRISHNA_STAGES = [
  { k: 'K', label: 'Know the real problem' },
  { k: 'R', label: 'Review all perspectives' },
  { k: 'I', label: 'Identify ethical impact' },
  { k: 'S', label: 'Strategize possible paths' },
  { k: 'H', label: 'Harmonize stakeholders' },
  { k: 'N', label: 'Navigate execution' },
  { k: 'A', label: 'Act with clarity' },
];`,
  },
  {
    id: 'focus',
    title: 'Focus Productivity App',
    subtitle: 'Distraction Management & Concentration Tracker',
    category: 'Productivity & Student Mobile App',
    year: '2024',
    role: 'Lead Developer & UX Designer',
    tagline: 'Helping students maintain study streaks, manage goals, and eliminate digital noise.',
    accentColor: '#E06C75',
    bgGradient: 'linear-gradient(135deg, #2B1D20 0%, #170E10 100%)',
    overview: 'Focus is a student productivity app designed to improve concentration, track study streaks, and manage daily goals through app locking, parent-child connectivity, and gamified achievement badges.',
    rationale: 'Digital distractions ruin student study flow. Focus turns distraction management into a rewarding, gamified streak system.',
    challenges: [
      'Implementing background app locking triggers and study timer persistence.',
      'Designing gamified badge mechanics to reward study consistency.',
    ],
    solutions: [
      'Built local storage goal tracking synced with Firebase realtime database.',
      'Designed playful glassmorphism badge cards.',
    ],
    impact: [
      { label: 'Core Focus', value: 'Streak Tracker' },
      { label: 'Gamification', value: 'Badge System' },
      { label: 'Target Audience', value: 'Student Learners' },
    ],
    stack: ['React Native / React', 'Firebase', 'CSS Animations', 'Tailwind CSS'],
    mockupType: 'mobile',
    mockupContent: {
      heroTitle: 'Focus Concentration Manager',
      heroSubtitle: 'App locking, goal tracking, and gamified study streaks.',
      features: ['App Locking', 'Study Streaks', 'Goal Tracker', 'Parent-Child Sync'],
    },
    codeSnippet: `// Focus Study Streak Counter
export function calculateStudyStreak(logs: StudySessionLog[]): number {
  let streak = 0;
  // Calculate consecutive active study days
  return streak;
}`,
  },
];

export const ProjectsCanvas: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" style={{ padding: '8rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Section Title */}
      <div style={{ marginBottom: '4rem' }}>
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
            STARTUPS & FEATURED PROJECTS
          </span>
        </div>

        <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', maxWidth: '800px', marginBottom: '1.2rem' }}>
          Every project is a solved problem.
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '640px' }}>
          Explore Harshita's real-world edtech startups, AI assistant platforms, and strategic decision systems.
        </p>
      </div>

      {/* Projects Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
        {projectsList.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="workspace-card"
            style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--bg-primary)',
            }}
            onClick={() => {
              setSelectedProject(project);
              playClickSound('high');
            }}
            onMouseEnter={playHoverSound}
          >
            {/* Top Visual Preview Box */}
            <div
              style={{
                height: '240px',
                background: project.bgGradient,
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.8rem',
                    backgroundColor: project.accentColor,
                    color: '#262626',
                    borderRadius: '999px',
                  }}
                  className="mono"
                >
                  {project.category}
                </span>

                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFF',
                  }}
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div>
                <span className="mono" style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', display: 'block', marginBottom: '0.3rem' }}>
                  {project.year}
                </span>
                <h3 style={{ fontSize: '1.8rem', color: '#FFF', fontFamily: 'var(--font-serif)', lineHeight: 1.1 }}>
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Bottom Details Box */}
            <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {project.tagline}
              </p>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.stack.slice(0, 4).map(tech => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.25rem 0.65rem',
                        backgroundColor: 'var(--bg-secondary)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  <span>Open Immersive Case Study</span>
                  <ArrowUpRight size={16} color={project.accentColor} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
