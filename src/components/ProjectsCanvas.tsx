import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Tv, Layers, Palette, Globe, Sparkles } from 'lucide-react';
import { ProjectModal, ProjectData } from './ProjectModal';
import { PopcornTV } from './PopcornTV';
import { playClickSound, playHoverSound } from '../utils/audio';

export interface CategorySection {
  id: string;
  name: string;
  subcategories: string[];
  description: string;
  icon: React.ElementType;
}

export const projectCategories: CategorySection[] = [
  {
    id: 'product-design',
    name: 'Product Design',
    subcategories: ['UI/UX', 'dashboards', 'mobile', 'web apps'],
    description: 'User-centered product design, design systems, interactive dashboards, and mobile applications.',
    icon: Layers,
  },
  {
    id: 'brand',
    name: 'Brand',
    subcategories: ['logos', 'identity', 'typography', 'visual systems'],
    description: 'Visual identity, typography systems, and interactive media concepts including Popcorn TV Studio.',
    icon: Palette,
  },
  {
    id: 'web',
    name: 'Web',
    subcategories: ['landing pages', 'marketing websites', 'responsive design'],
    description: 'High-craft responsive web experiences, marketing sites, and digital platforms.',
    icon: Globe,
  },
  {
    id: 'experiments',
    name: 'Experiments',
    subcategories: ['AI-generated concepts', '3D', 'experimental interfaces'],
    description: 'Cutting-edge exploratory projects, AI workflows, 3D graphics, and prototype concepts.',
    icon: Sparkles,
  },
];

export const projectsList: (ProjectData & { categoryId: string })[] = [
  {
    id: 'mentozy',
    categoryId: 'product-design',
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
    liveLinks: [
      { label: 'Mentozy App', url: 'https://mentozy.app/' }
    ],
    githubLinks: [
      { label: 'Mentora Organization', url: 'https://github.com/Mentora-Educational-Platform' }
    ]
  },
  {
    id: 'focus',
    categoryId: 'product-design',
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
    liveLinks: [
      { label: 'Focus Web', url: 'https://focus.mentozy.app/' }
    ],
    githubLinks: [
      { label: 'Focus Repo', url: 'https://github.com/HoneyGpt/Focus' }
    ]
  },
  {
    id: 'krishnaite',
    categoryId: 'web',
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
    liveLinks: [
      { label: 'Krishnaite Portal', url: 'https://www.krishnaite.dev/' },
      { label: 'Academy', url: 'https://academy.krishnaite.dev/' },
      { label: 'KGA', url: 'https://kga.krishnaite.dev/' }
    ]
  },
  {
    id: 'krishna-mentozy',
    categoryId: 'web',
    title: 'Krishna Mentozy Portal',
    subtitle: 'Interactive Spiritual & Philosophical Web Platform',
    category: 'Web Platform',
    year: '2025',
    role: 'Full-Stack Developer & UX Designer',
    tagline: 'Refined web experience presenting sacred texts, interactive shloka explorations, and reflective philosophical guides.',
    accentColor: '#EAB308',
    bgGradient: 'linear-gradient(135deg, #2D2305 0%, #151002 100%)',
    overview: 'Krishna Mentozy is a dedicated web portal translating timeless spiritual wisdom into clean, contemporary web interfaces.',
    rationale: 'Creating accessible, beautiful digital spaces for spiritual study and personal reflection.',
    challenges: ['Designing elegant typography hierarchies for bilingual scripture translations.'],
    solutions: ['Custom serif fonts paired with high-contrast warm ivory aesthetic tokens.'],
    impact: [{ label: 'Platform Focus', value: 'Wisdom & Philosophy' }],
    stack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'Krishna Mentozy Portal',
      heroSubtitle: 'Spiritual wisdom and philosophical learning.',
      features: ['Shloka Explorer', 'Reflective Guides', 'Audio Chants'],
    },
    codeSnippet: `// Shloka Translation Parser\nexport function formatShloka(sanskrit: string, translation: string) {\n  return { sanskrit, translation };\n}`,
    liveLinks: [{ label: 'Krishna Mentozy App', url: 'https://krishna.mentozy.app/' }]
  },
  {
    id: 'blook-mentozy',
    categoryId: 'web',
    title: 'Blook Mentozy Workspace',
    subtitle: 'Interactive EdTech Gamified Learning Hub',
    category: 'Interactive Web App',
    year: '2025',
    role: 'Frontend Architect',
    tagline: 'Gamified learning platform with interactive flashcard sets, study rooms, and live student challenges.',
    accentColor: '#A855F7',
    bgGradient: 'linear-gradient(135deg, #230F38 0%, #0E0518 100%)',
    overview: 'Blook Mentozy merges game mechanics with curriculum flashcards to make study sessions engaging for learners.',
    rationale: 'Boosting retention through gamified active-recall quizzes and visual rewards.',
    challenges: ['Synchronizing live leaderboard states across classroom sessions.'],
    solutions: ['Real-time WebSocket event listeners with instant score updates.'],
    impact: [{ label: 'Engagement', value: 'Gamified Study' }],
    stack: ['React.js', 'WebSockets', 'Tailwind CSS', 'Node.js'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'Blook Mentozy Studio',
      heroSubtitle: 'Gamified study rooms and flashcard arenas.',
      features: ['Flashcard Quiz', 'Live Leaderboard', 'Badges'],
    },
    codeSnippet: `// Blook Score Counter\nexport function calculatePoints(timeMs: number, correct: boolean): number {\n  return correct ? Math.max(100, 1000 - Math.floor(timeMs / 10)) : 0;\n}`,
    liveLinks: [{ label: 'Blook Mentozy App', url: 'https://blook.mentozy.app/' }]
  },
  {
    id: 'swamiyesaranuayyappa',
    categoryId: 'web',
    title: 'Swamiye Saranam Ayyappa',
    subtitle: 'Devotional Cultural & Community Portal',
    category: 'Cultural Web Portal',
    year: '2024',
    role: 'Web Designer & Developer',
    tagline: 'Dedicated cultural portal for Lord Ayyappa devotees featuring pilgrimage guides, audio bhajans, and ritual schedules.',
    accentColor: '#F97316',
    bgGradient: 'linear-gradient(135deg, #2B160A 0%, #150A04 100%)',
    overview: 'A community digital hub providing Sabarimala pilgrimage information, devotional songs, and daily ritual details.',
    rationale: 'Empowering pilgrimage preparation with intuitive digital resources.',
    challenges: ['Delivering fast media streaming for devotional audio tracks.'],
    solutions: ['Netlify CDN edge distribution with HTML5 audio controls.'],
    impact: [{ label: 'Audience', value: 'Devotee Community' }],
    stack: ['HTML5/CSS3', 'JavaScript', 'Netlify', 'Web Audio'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'Swamiye Saranam Ayyappa Portal',
      heroSubtitle: 'Pilgrimage guides, devotional songs, and updates.',
      features: ['Bhajan Player', 'Pilgrimage Steps', 'Daily Rituals'],
    },
    codeSnippet: `// Audio Player Handler\nexport function playBhajan(audioSrc: string) {\n  const audio = new Audio(audioSrc);\n  audio.play();\n}`,
    liveLinks: [{ label: 'Ayyappa Devotional Portal', url: 'https://swamiyesaranuayyappa.netlify.app/' }]
  },
  {
    id: 'sudharshan-mentozy',
    categoryId: 'web',
    title: 'Sudharshan Mentozy Platform',
    subtitle: 'Advanced Academic & Technical Learning System',
    category: 'Academic Web App',
    year: '2025',
    role: 'Full-Stack Developer',
    tagline: 'Technical learning platform offering structured engineering courses, lab exercises, and assignment verification.',
    accentColor: '#3B82F6',
    bgGradient: 'linear-gradient(135deg, #0F1E36 0%, #060D19 100%)',
    overview: 'Sudharshan Mentozy delivers high-grade technical education tools for engineering and computer science students.',
    rationale: 'Structuring complex engineering syllabi into actionable modular tracks.',
    challenges: ['Rendering mathematical equations and code blocks smoothly.'],
    solutions: ['KaTeX LaTeX engine integration with Prism.js syntax highlighting.'],
    impact: [{ label: 'Target', value: 'Engineering Students' }],
    stack: ['React.js', 'LaTeX / KaTeX', 'Node.js', 'Vercel'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'Sudharshan Technical Academy',
      heroSubtitle: 'Engineering modules and interactive lab exercises.',
      features: ['Course Tracks', 'LaTeX Renderer', 'Code Exercises'],
    },
    codeSnippet: `// KaTeX Math Renderer\nexport const renderMath = (latex: string) => katex.renderToString(latex);`,
    liveLinks: [{ label: 'Sudharshan Mentozy Portal', url: 'https://sudharshan.mentozy.app/' }]
  },
  {
    id: 'sahasha-power-systems',
    categoryId: 'web',
    title: 'Sahasha Power Systems',
    subtitle: 'Industrial Energy & Power Engineering Website',
    category: 'Corporate & Industrial Web',
    year: '2024',
    role: 'Lead Web Developer & Designer',
    tagline: 'Professional corporate website for Sahasha Power Systems highlighting industrial transformers, power solutions, and client projects.',
    accentColor: '#10B981',
    bgGradient: 'linear-gradient(135deg, #0A241B 0%, #04120D 100%)',
    overview: 'A corporate web platform built for an industrial power engineering enterprise to showcase technical specifications and product lines.',
    rationale: 'Establishing a strong corporate web presence for industrial B2B clients.',
    challenges: ['Showcasing heavy technical specifications in clean responsive tables.'],
    solutions: ['Custom CSS Grid data tables with downloadable spec sheets.'],
    impact: [{ label: 'Industry Focus', value: 'Industrial Power' }],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Netlify'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'Sahasha Power Systems Enterprise',
      heroSubtitle: 'Industrial power transformers and energy solutions.',
      features: ['Product Specs Matrix', 'Client Showcase', 'Inquiry Form'],
    },
    codeSnippet: `// Product Spec Table Filter\nexport function filterSpecs(category: string) { return category; }`,
    liveLinks: [{ label: 'Sahasha Power Systems Site', url: 'https://sahashapowersystems.netlify.app/' }]
  },
  {
    id: 'honeygpt',
    categoryId: 'experiments',
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
    id: 'lume',
    categoryId: 'experiments',
    title: 'Lume Interface Concept',
    subtitle: 'Minimalist Luminous Web Concept',
    category: 'Experimental Interface',
    year: '2025',
    role: 'UX Architect & Creative Technologist',
    tagline: 'Luminous ambient aesthetic concept focusing on light interactions and minimal spatial design.',
    accentColor: '#4DEEEA',
    bgGradient: 'linear-gradient(135deg, #0D1F2D 0%, #050E17 100%)',
    overview: 'Lume explores ambient lighting effects and soft chromatic gradients in web interfaces, redefining digital depth.',
    rationale: 'Exploring how subtle glow effects and micro-interactions enhance focus without cluttering user workflows.',
    challenges: ['Optimizing CSS backdrop filters for 60fps animations.'],
    solutions: ['Hardware-accelerated CSS layers and custom GPU shaders.'],
    impact: [{ label: 'Performance', value: '60 FPS Glow' }],
    stack: ['React', 'Tailwind CSS', 'Vercel', 'Framer Motion'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'Lume Ambient Experience',
      heroSubtitle: 'Soft chromatic light and spatial design.',
      features: ['Ambient Lighting', 'Glassmorphism', 'Spatial Layout'],
    },
    codeSnippet: `// Lume Ambient Lighting Controller\nexport const lumeGlow = '0 0 40px rgba(77, 238, 234, 0.3)';`,
    liveLinks: [{ label: 'Lume App', url: 'https://lume-teal.vercel.app/' }]
  },
  {
    id: 'joguard',
    categoryId: 'experiments',
    title: 'JOguard Security AI',
    subtitle: 'Automated Vulnerability & Code Audit System',
    category: 'AI Security Tool',
    year: '2025',
    role: 'Lead Developer & Security Researcher',
    tagline: 'AI-driven code security scanner preventing secret leaks and enforcing security best practices.',
    accentColor: '#EF4444',
    bgGradient: 'linear-gradient(135deg, #2D0F0F 0%, #170505 100%)',
    overview: 'JOguard continuously audits source code repositories for security flaws, hardcoded credentials, and unsafe dependencies.',
    rationale: 'Preventing security incidents early in development cycles with automated intelligence.',
    challenges: ['Reducing false positive flags in complex static analysis.'],
    solutions: ['Custom AST parsing paired with LLM context validation.'],
    impact: [{ label: 'Scan Engine', value: 'AST + AI' }],
    stack: ['TypeScript', 'Node.js', 'Security AI', 'GitHub API'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'JOguard Code Security Guard',
      heroSubtitle: 'Automated secret detection and SAST audit scanner.',
      features: ['Secret Detection', 'AST Analysis', 'PR Bot Feedback'],
    },
    codeSnippet: `// JOguard Vulnerability Scanner\nexport function auditToken(token: string): boolean {\n  return /sk_live_[0-9a-zA-Z]{24}/.test(token);\n}`,
    githubLinks: [{ label: 'JOguard GitHub Repo', url: 'https://github.com/HoneyGpt/JOguard' }]
  },
  {
    id: 'ignite-hack',
    categoryId: 'experiments',
    title: 'Ignite Hack 2.0',
    subtitle: 'Hackathon Innovation Platform',
    category: 'Web App & Community',
    year: '2025',
    role: 'Full-Stack Developer & Organizer',
    tagline: 'Interactive platform managing submissions, live leaderboards, and judge scoring for Ignite Hack 2.0.',
    accentColor: '#F97316',
    bgGradient: 'linear-gradient(135deg, #2B170A 0%, #150A04 100%)',
    overview: 'Ignite Hack 2.0 powered hundreds of student developer submissions with live real-time scoreboards and mentor rooms.',
    rationale: 'Seamless hackathon management for fast-paced developer events.',
    challenges: ['Handling simultaneous traffic spikes during deadline submissions.'],
    solutions: ['Serverless Vercel edge deployment with instant cache invalidation.'],
    impact: [{ label: 'Submissions', value: '100+ Projects' }],
    stack: ['Next.js', 'Vercel', 'Tailwind CSS', 'Firebase'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'Ignite Hack 2.0 Arena',
      heroSubtitle: 'Real-time hackathon management portal.',
      features: ['Live Leaderboard', 'Judge Scoring', 'Project Directory'],
    },
    codeSnippet: `// Ignite Score Engine\nexport function calculateTotalScore(scores: number[]): number {\n  return scores.reduce((a, b) => a + b, 0);\n}`,
    liveLinks: [{ label: 'Ignite Hack Platform', url: 'https://ignite-hack-2-0.vercel.app/' }]
  },
  {
    id: 'smart-news-gpt',
    categoryId: 'experiments',
    title: 'Smart News GPT',
    subtitle: 'AI News Summarizer & Audio Digest',
    category: 'AI Media & News',
    year: '2025',
    role: 'Product Creator & AI Developer',
    tagline: 'Aggregating global headlines into bite-sized executive summaries with AI-generated audio overviews.',
    accentColor: '#3B82F6',
    bgGradient: 'linear-gradient(135deg, #0F1E36 0%, #060D19 100%)',
    overview: 'Smart News GPT synthesizes complex news articles into transparent 60-second audio digests and key takeaway bullet points.',
    rationale: 'Overcoming news fatigue with noise-free, factual AI summaries.',
    challenges: ['Fetching live RSS feeds and generating real-time summaries under 2s.'],
    solutions: ['Parallelized API calls to Gemini fast inference endpoint.'],
    impact: [{ label: 'Digest Speed', value: 'Instant Summaries' }],
    stack: ['React', 'Gemini API', 'Vercel', 'Web Audio API'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'Smart News GPT Digest',
      heroSubtitle: 'Bite-sized executive news powered by AI.',
      features: ['Executive Summaries', 'Audio Briefing', 'Category Filtering'],
    },
    codeSnippet: `// Smart News Prompt Generator\nexport const newsSummaryPrompt = (article: string) => \`Summarize in 3 bullet points: \${article}\`;`,
    liveLinks: [{ label: 'Smart News GPT App', url: 'https://smart-news-gpt.vercel.app/' }]
  },
  {
    id: 'cyber-search',
    categoryId: 'experiments',
    title: 'Cyber Search Platform',
    subtitle: 'Futuristic Sci-Fi Search Interface',
    category: 'Experimental Interface & Design',
    year: '2025',
    role: 'UI Designer & Web Engineer',
    tagline: 'Cyberpunk-themed high-speed web search interface with glowing HUD elements and terminal styling.',
    accentColor: '#10B981',
    bgGradient: 'linear-gradient(135deg, #0A241B 0%, #04120D 100%)',
    overview: 'Cyber Search reimagines traditional search engines into an interactive sci-fi HUD console experience.',
    rationale: 'Exploring stylized non-traditional UI aesthetics for power users.',
    challenges: ['Designing retro CRT scanning effects without affecting readability.'],
    solutions: ['Custom CSS scanlines overlay and high-contrast typography.'],
    impact: [{ label: 'UI Aesthetic', value: 'Cyberpunk HUD' }],
    stack: ['React', 'Tailwind CSS', 'Vercel', 'Web Audio'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'Cyber Search Console v2.0',
      heroSubtitle: 'Sci-fi search matrix and terminal interface.',
      features: ['Terminal Command Line', 'HUD Glow Elements', 'Sound FX'],
    },
    codeSnippet: `// Cyber Scanline Overlay\nexport const scanlineStyle = { background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)' };`,
    liveLinks: [{ label: 'Cyber Search Live', url: 'https://cyber-search-roan.vercel.app/' }]
  },
  {
    id: 'chess-engine',
    categoryId: 'experiments',
    title: 'Minimalist Web Chess',
    subtitle: 'Interactive Browser Chess & AI Engine',
    category: 'Gaming & Algorithms',
    year: '2024',
    role: 'Game Engineer & Designer',
    tagline: 'Clean web chess engine featuring smooth piece drag-and-drop mechanics and move evaluation.',
    accentColor: '#A855F7',
    bgGradient: 'linear-gradient(135deg, #220F38 0%, #0E0518 100%)',
    overview: 'Minimalist chess application built for focused practice, custom board themes, and move history analysis.',
    rationale: 'Stripping away distraction from online chess interfaces to emphasize strategic focus.',
    challenges: ['Validating chess move logic, castling, and en passant in real time.'],
    solutions: ['Integrated Chess.js move validator with custom canvas UI.'],
    impact: [{ label: 'Move Accuracy', value: 'FIDE Compliant' }],
    stack: ['React', 'Chess.js', 'Vercel', 'CSS Grid'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'Minimalist Web Chess Studio',
      heroSubtitle: 'Distraction-free board and tactical practice.',
      features: ['Drag & Drop Pieces', 'Move Analysis', 'Theme Customizer'],
    },
    codeSnippet: `// Chess Move Execution\nexport function makeMove(game: any, move: any) {\n  return game.move(move);\n}`,
    liveLinks: [{ label: 'Web Chess App', url: 'https://chess-tan-beta.vercel.app/' }]
  },
  {
    id: 'game-2048',
    categoryId: 'experiments',
    title: '2048 Modern Arcade Edition',
    subtitle: 'Classic Tile Puzzle with Haptic Micro-Animations',
    category: 'Web Game',
    year: '2024',
    role: 'Frontend Developer',
    tagline: 'Reimagining the iconic 2048 sliding tile puzzle with sleek glassmorphism themes and tactile audio.',
    accentColor: '#F59E0B',
    bgGradient: 'linear-gradient(135deg, #2D1D05 0%, #150D02 100%)',
    overview: 'A high-craft web edition of 2048 designed for smooth mobile touch gestures and desktop arrow keys.',
    rationale: 'Perfecting micro-animations and spatial tile sliding performance.',
    challenges: ['Ensuring 60fps sliding tile merge animations across all mobile browsers.'],
    solutions: ['Framer Motion layout animations with hardware-backed transforms.'],
    impact: [{ label: 'Frame Rate', value: 'Smooth 60 FPS' }],
    stack: ['React', 'Framer Motion', 'Vercel', 'Web Audio API'],
    mockupType: 'mobile',
    mockupContent: {
      heroTitle: '2048 Glass Edition',
      heroSubtitle: 'Tactile sliding tile puzzle experience.',
      features: ['Touch Swipe Support', 'Score Persistence', 'Retro Sound FX'],
    },
    codeSnippet: `// 2048 Tile Merging Algorithm\nexport function mergeLine(line: number[]): number[] {\n  // Slide & combine equal adjacent numbers\n  return line;\n}`,
    liveLinks: [{ label: 'Play 2048 Arcade', url: 'https://2048-123-6cvv.vercel.app/' }]
  },
  {
    id: 'tap-note',
    categoryId: 'experiments',
    title: 'Tap Note Quick Workspace',
    subtitle: 'Instant Scratchpad & Markdown Editor',
    category: 'Productivity Tool',
    year: '2024',
    role: 'UX Designer & Engineer',
    tagline: 'Zero-friction web scratchpad allowing creators to capture thoughts instantly with local autosave.',
    accentColor: '#14B8A6',
    bgGradient: 'linear-gradient(135deg, #092826 0%, #031312 100%)',
    overview: 'Tap Note eliminates loading screens to provide an instant, clean canvas for thoughts, code snippets, and draft ideas.',
    rationale: 'Speed is everything when capturing spontaneous ideas.',
    challenges: ['Instant instant-on load time under 100 milliseconds.'],
    solutions: ['Vanilla state persistence with IndexedDB local caching.'],
    impact: [{ label: 'Load Time', value: '< 100ms Load' }],
    stack: ['React', 'TypeScript', 'IndexedDB', 'Vercel'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'Tap Note Instant Scratchpad',
      heroSubtitle: 'Capture thoughts instantly with auto-markdown formatting.',
      features: ['Instant Auto-Save', 'Markdown Preview', 'Clean Canvas'],
    },
    codeSnippet: `// Tap Note Autosave Trigger\nexport const autoSaveNote = (text: string) => localStorage.setItem('tap_note', text);`,
    liveLinks: [{ label: 'Tap Note Scratchpad', url: 'https://tap-note.vercel.app/' }]
  },
  {
    id: 'e-product-catalog',
    categoryId: 'experiments',
    title: 'E-Product E-Commerce Catalog',
    subtitle: 'Interactive Product Matrix & Filter Engine',
    category: 'Web App & E-Commerce',
    year: '2024',
    role: 'Frontend Architect',
    tagline: 'High-performance interactive e-commerce product catalog with instant category filtering and cart preview.',
    accentColor: '#EC4899',
    bgGradient: 'linear-gradient(135deg, #2D0F1E 0%, #16060E 100%)',
    overview: 'A modern e-commerce storefront prototype focusing on fast filter interactions and visual product showcases.',
    rationale: 'Demonstrating responsive cart management and dynamic product catalog state.',
    challenges: ['Maintaining instant filter response across multi-attribute product matrices.'],
    solutions: ['Client-side memoized filter indexes.'],
    impact: [{ label: 'Filter Speed', value: 'Zero Latency' }],
    stack: ['React', 'Netlify', 'CSS Grid', 'State Hooks'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'E-Product Showcase Catalog',
      heroSubtitle: 'Fast product discovery matrix.',
      features: ['Instant Filtering', 'Cart State', 'Responsive Cards'],
    },
    codeSnippet: `// E-Commerce Product Filter\nexport function filterProducts(items: any[], category: string) {\n  return items.filter(item => item.category === category);\n}`,
    liveLinks: [{ label: 'E-Product Catalog', url: 'https://eproductcatalog.netlify.app/' }]
  },
  {
    id: 'honey-shop',
    categoryId: 'experiments',
    title: 'Honey Shop Digital Storefront',
    subtitle: 'Sleek E-Commerce Shopping Experience',
    category: 'E-Commerce Prototype',
    year: '2024',
    role: 'UI Designer & Web Developer',
    tagline: 'Charming shopping experience featuring warm aesthetics, product galleries, and instant checkout flows.',
    accentColor: '#EAB308',
    bgGradient: 'linear-gradient(135deg, #2B2106 0%, #140F02 100%)',
    overview: 'Honey Shop provides a boutique storefront UX designed with amber color palettes and intuitive shopping carts.',
    rationale: 'Creating delight in online retail through micro-interactions and warm branding.',
    challenges: ['Designing fluid shopping cart sidebars and checkout transition animations.'],
    solutions: ['Framer Motion drawer states and responsive cart management.'],
    impact: [{ label: 'UX Aesthetic', value: 'Warm Boutique' }],
    stack: ['React', 'Tailwind CSS', 'Vercel', 'Framer Motion'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'Honey Shop Boutique Storefront',
      heroSubtitle: 'Delightful digital shopping experience.',
      features: ['Interactive Cart Drawer', 'Product Gallery', 'Checkout Mock'],
    },
    codeSnippet: `// Honey Shop Cart Drawer Handler\nexport function toggleCart(isOpen: boolean) { return !isOpen; }`,
    liveLinks: [{ label: 'Honey Shop Store', url: 'https://honey-shop-six.vercel.app/' }]
  },
  {
    id: 'my-safe-haven',
    categoryId: 'experiments',
    title: 'My Safe Haven Wellness Hub',
    subtitle: 'Mindfulness & Mental Health Digital Sanctuary',
    category: 'Health & Wellness',
    year: '2024',
    role: 'Creator & UI Designer',
    tagline: 'A soothing digital sanctuary offering calming audio soundscapes, guided breathing exercises, and reflection prompts.',
    accentColor: '#06B6D4',
    bgGradient: 'linear-gradient(135deg, #07262D 0%, #031317 100%)',
    overview: 'My Safe Haven provides a gentle space for stress relief, featuring soothing ambient visualizers and meditation tools.',
    rationale: 'Promoting digital well-being through peaceful interface design.',
    challenges: ['Crafting relaxing audio-visual synchronization without sensory overload.'],
    solutions: ['Soft pastel color tokens paired with atmospheric audio loops.'],
    impact: [{ label: 'Focus', value: 'Mental Wellness' }],
    stack: ['React', 'Web Audio API', 'Vercel', 'CSS Motion'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'My Safe Haven Sanctuary',
      heroSubtitle: 'Calming tools for stress relief and reflection.',
      features: ['Breathing Pacer', 'Ambient Soundscapes', 'Daily Prompts'],
    },
    codeSnippet: `// Breathing Pacer Cycle (4-7-8 Technique)\nexport const BREATH_CYCLE = { inhale: 4, hold: 7, exhale: 8 };`,
    liveLinks: [{ label: 'My Safe Haven Portal', url: 'https://my-safe-haven.vercel.app/' }]
  },
  {
    id: 'cali-cut',
    categoryId: 'experiments',
    title: 'Cali Cut Barbering Studio',
    subtitle: 'Modern Salon Booking & Portfolio Platform',
    category: 'Local Business & Web App',
    year: '2024',
    role: 'Frontend Developer & UI Designer',
    tagline: 'Contemporary barbering studio website with service menus, haircut style gallery, and instant appointment booking.',
    accentColor: '#D97706',
    bgGradient: 'linear-gradient(135deg, #2B1605 0%, #150A02 100%)',
    overview: 'Cali Cut elevates local business web presence with sleek dark-mode aesthetics and appointment scheduling.',
    rationale: 'Empowering local service brands with modern digital experiences.',
    challenges: ['Designing intuitive mobile booking flows for on-the-go clients.'],
    solutions: ['Mobile-first step form wizard with date-time slot selector.'],
    impact: [{ label: 'Conversion', value: 'Streamlined Booking' }],
    stack: ['React', 'Tailwind CSS', 'Vercel', 'Lucide Icons'],
    mockupType: 'mobile',
    mockupContent: {
      heroTitle: 'Cali Cut Barbering Experience',
      heroSubtitle: 'Style gallery and instant online booking.',
      features: ['Style Gallery', 'Service Menu', 'Slot Booking Wizard'],
    },
    codeSnippet: `// Cali Cut Slot Selector\nexport function selectSlot(date: string, time: string) { return { date, time }; }`,
    liveLinks: [{ label: 'Cali Cut Studio', url: 'https://cali-cut.vercel.app/' }]
  },
  {
    id: 'happy-diwali',
    categoryId: 'experiments',
    title: 'Happy Diwali Interactive Greeting',
    subtitle: 'Digital Light Festival & Particle Fireworks Experience',
    category: 'Interactive Web Art',
    year: '2024',
    role: 'Creative Developer',
    tagline: 'Interactive festive greeting featuring glowing diya candles, particle fireworks, and personalized message creation.',
    accentColor: '#F43F5E',
    bgGradient: 'linear-gradient(135deg, #2D0813 0%, #160409 100%)',
    overview: 'Happy Diwali brings the festival of lights into the browser with interactive particle dynamics and celebratory audio.',
    rationale: 'Creating heartwarming shareable web art for cultural celebrations.',
    challenges: ['Optimizing HTML5 canvas fireworks particles for mobile devices.'],
    solutions: ['Custom object pooling particle engine.'],
    impact: [{ label: 'Interactive Art', value: 'HTML5 Canvas Lights' }],
    stack: ['HTML5 Canvas', 'JavaScript', 'Vercel', 'Web Audio API'],
    mockupType: 'desktop',
    mockupContent: {
      heroTitle: 'Diwali Festival of Lights',
      heroSubtitle: 'Interactive fireworks and digital diya lighting.',
      features: ['Particle Fireworks', 'Diya Lighting', 'Custom Greeting Card'],
    },
    codeSnippet: `// Diya Flame Particle Simulation\nexport function updateParticle(p: any) { p.y -= p.speed; p.alpha -= 0.01; }`,
    liveLinks: [{ label: 'Diwali Light Experience', url: 'https://happy-diwali-gules.vercel.app/' }]
  },
];

export const ProjectsCanvas: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" style={{ padding: '8rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Section Header */}
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
            CURATED PORTFOLIO & WORK ARCHIVE
          </span>
        </div>

        <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', maxWidth: '850px', marginBottom: '1.2rem' }}>
          Organized for full range visibility.
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '680px' }}>
          Explore design work, brand identity, web platforms, and experimental concepts engineered with precision.
        </p>
      </div>

      {/* Category Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
        {projectCategories.map(cat => {
          const categoryProjects = projectsList.filter(p => p.categoryId === cat.id);
          const IconComponent = cat.icon;
          const isBrandSection = cat.id === 'brand';

          return (
            <div
              key={cat.id}
              id={cat.id}
              style={{
                paddingTop: '2rem',
                borderTop: '1px dashed var(--border-light)',
              }}
            >
              {/* Category Title & Tags */}
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <IconComponent size={20} />
                  </div>
                  <h3 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                    {cat.name}
                  </h3>
                </div>

                {/* Subcategory Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {cat.subcategories.map(sub => (
                    <span
                      key={sub}
                      className="mono"
                      style={{
                        padding: '0.3rem 0.75rem',
                        backgroundColor: 'var(--bg-secondary)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-light)',
                      }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>

                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                  {cat.description}
                </p>
              </div>

              {/* Special rendering for Brand section to include Popcorn TV */}
              {isBrandSection && (
                <div style={{ marginBottom: '3rem' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--accent-warm)', fontWeight: 600 }}>
                      ★ BRAND FEATURE: INTERACTIVE POPCORN TV STUDIO
                    </span>
                  </div>
                  <PopcornTV />
                </div>
              )}

              {/* Category Projects Grid */}
              {categoryProjects.length > 0 ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
                  {categoryProjects.map((project, index) => (
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
                          <h4 style={{ fontSize: '1.8rem', color: '#FFF', fontFamily: 'var(--font-serif)', lineHeight: 1.1 }}>
                            {project.title}
                          </h4>
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
              ) : (
                !isBrandSection && (
                  <div
                    style={{
                      padding: '2.5rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px dashed var(--border-light)',
                      textAlign: 'center',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <p style={{ fontStyle: 'italic', fontSize: '0.95rem' }}>
                      Items for this section ready to be populated.
                    </p>
                  </div>
                )
              )}
            </div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

