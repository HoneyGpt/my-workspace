import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders, Code, Layout, Palette, Zap, Sparkles, CheckCircle2, Play } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export const InteractiveDesk: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ui' | 'code' | 'notes'>('ui');

  // Interactive UI Workbench State
  const [accentColor, setAccentColor] = useState('#F5C84C');
  const [radius, setRadius] = useState<'sm' | 'md' | 'full'>('md');
  const [layoutMode, setLayoutMode] = useState<'minimal' | 'dense' | 'editorial'>('editorial');
  const [copiedCode, setCopiedCode] = useState(false);

  // Interactive Code Workbench State
  const [selectedModule, setSelectedModule] = useState<'canvas' | 'state' | 'ai'>('canvas');

  const codeSnippets = {
    canvas: `// High-Performance Spatial Canvas Engine
export class WorkspaceCanvasEngine {
  private ctx: CanvasRenderingContext2D;
  private nodes: Map<string, CanvasNode> = new Map();

  public renderFrame(delta: number): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.nodes.forEach(node => {
      node.updatePosition(delta);
      node.draw(this.ctx);
    });
  }
}`,
    state: `// Reactive State Store with Zero-Copy Mutation
export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  activeProject: 'aura-os',
  canvasNodes: [],
  theme: 'warm-ivory',
  setActiveProject: (id) => set({ activeProject: id }),
}));`,
    ai: `// On-Device Generative Layout Inference
export async function generateProductLayout(prompt: string) {
  const model = await loadInferenceEngine('layout-v2');
  const tokens = await model.predict(prompt);
  return parseASTToReactTree(tokens);
}`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[selectedModule]);
    setCopiedCode(true);
    playClickSound('high');
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="workspace"
      style={{
        padding: '6rem 1.5rem',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Section Header */}
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
          <Sparkles size={14} color="#8FAF90" />
          <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            INTERACTIVE DIGITAL DESK
          </span>
        </div>

        <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', marginBottom: '1rem' }}>
          Explore the Evolving Desk
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Test Harshita's living component engine, inspect production system code, or explore founder design notes.
        </p>
      </div>

      {/* Main Workspace Container */}
      <div
        className="workspace-card"
        style={{
          background: 'var(--bg-primary)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-medium)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        {/* Workspace Toolbar */}
        <div
          style={{
            padding: '1.2rem 1.8rem',
            backgroundColor: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          {/* Left Window Dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#E06C75' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#E5C07B' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#98C379' }} />
            <span style={{ marginLeft: '0.8rem', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', opacity: 0.6 }}>
              harshita-desk://v2.4/living-workspace
            </span>
          </div>

          {/* Center Tabs */}
          <div style={{ display: 'flex', gap: '0.4rem', backgroundColor: 'var(--bg-primary)', padding: '0.25rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-light)' }}>
            <button
              onClick={() => { setActiveTab('ui'); playClickSound('medium'); }}
              onMouseEnter={playHoverSound}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: activeTab === 'ui' ? 'var(--text-primary)' : 'transparent',
                color: activeTab === 'ui' ? 'var(--bg-primary)' : 'var(--text-secondary)',
                fontSize: '0.84rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Layout size={15} />
              UI Design System
            </button>

            <button
              onClick={() => { setActiveTab('code'); playClickSound('medium'); }}
              onMouseEnter={playHoverSound}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: activeTab === 'code' ? 'var(--text-primary)' : 'transparent',
                color: activeTab === 'code' ? 'var(--bg-primary)' : 'var(--text-secondary)',
                fontSize: '0.84rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Code size={15} />
              Engine Architecture
            </button>

            <button
              onClick={() => { setActiveTab('notes'); playClickSound('medium'); }}
              onMouseEnter={playHoverSound}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: activeTab === 'notes' ? 'var(--text-primary)' : 'transparent',
                color: activeTab === 'notes' ? 'var(--bg-primary)' : 'var(--text-secondary)',
                fontSize: '0.84rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Sparkles size={15} />
              Founder Notes
            </button>
          </div>
        </div>

        {/* Tab Content Panes */}
        <div style={{ padding: '2.5rem' }}>
          <AnimatePresence mode="wait">
            {/* TAB 1: UI DESIGN SYSTEM WORKBENCH */}
            {activeTab === 'ui' && (
              <motion.div
                key="ui"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'start',
                }}
              >
                {/* Controls Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Design System Controls</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Adjust layout primitives and watch the live preview component adapt instantly.
                    </p>
                  </div>

                  {/* Accent Color Chooser */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '0.6rem' }} className="mono">
                      PRIMARY ACCENT TOKEN
                    </label>
                    <div style={{ display: 'flex', gap: '0.8rem' }}>
                      {[
                        { name: 'Golden Yellow', hex: '#F5C84C' },
                        { name: 'Muted Sage', hex: '#8FAF90' },
                        { name: 'Soft Blue', hex: '#6FA8DC' },
                        { name: 'Rich Charcoal', hex: '#262626' },
                      ].map(c => (
                        <button
                          key={c.hex}
                          onClick={() => { setAccentColor(c.hex); playClickSound('medium'); }}
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            backgroundColor: c.hex,
                            border: accentColor === c.hex ? '3px solid var(--text-primary)' : '2px solid transparent',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Corner Radius Controls */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '0.6rem' }} className="mono">
                      CORNER GEOMETRY
                    </label>
                    <div style={{ display: 'flex', gap: '0.6rem' }}>
                      {(['sm', 'md', 'full'] as const).map(r => (
                        <button
                          key={r}
                          onClick={() => { setRadius(r); playClickSound('medium'); }}
                          style={{
                            padding: '0.5rem 1rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-medium)',
                            backgroundColor: radius === r ? 'var(--bg-secondary)' : 'transparent',
                            fontWeight: radius === r ? 600 : 400,
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                          }}
                        >
                          Radius-{r.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Layout Density */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '0.6rem' }} className="mono">
                      EDITORIAL DENSITY
                    </label>
                    <div style={{ display: 'flex', gap: '0.6rem' }}>
                      {(['minimal', 'dense', 'editorial'] as const).map(m => (
                        <button
                          key={m}
                          onClick={() => { setLayoutMode(m); playClickSound('medium'); }}
                          style={{
                            padding: '0.5rem 1rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-medium)',
                            backgroundColor: layoutMode === m ? 'var(--bg-secondary)' : 'transparent',
                            fontWeight: layoutMode === m ? 600 : 400,
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            textTransform: 'capitalize',
                          }}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Output Canvas Component */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: layoutMode === 'dense' ? '1.5rem' : layoutMode === 'minimal' ? '2.5rem' : '3.5rem',
                    borderRadius: radius === 'sm' ? '8px' : radius === 'md' ? '18px' : '32px',
                    border: '1px solid var(--border-medium)',
                    boxShadow: 'var(--shadow-md)',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-block',
                      padding: '0.35rem 0.8rem',
                      backgroundColor: accentColor,
                      color: accentColor === '#262626' ? '#FAF8F3' : '#262626',
                      borderRadius: radius === 'sm' ? '4px' : radius === 'md' ? '8px' : '999px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      marginBottom: '1.2rem',
                    }}
                    className="mono"
                  >
                    AURA COMPONENT V2
                  </div>

                  <h3
                    style={{
                      fontSize: layoutMode === 'dense' ? '1.5rem' : '2.2rem',
                      marginBottom: '0.8rem',
                    }}
                  >
                    Spatial Product Interface
                  </h3>

                  <p style={{ fontSize: '0.95rem', marginBottom: '1.8rem', color: 'var(--text-secondary)' }}>
                    Crafted with extreme attention to micro-interaction response, tactile touch states, and visual harmony.
                  </p>

                  <div style={{ display: 'flex', gap: '0.8rem' }}>
                    <button
                      style={{
                        padding: '0.75rem 1.4rem',
                        backgroundColor: accentColor,
                        color: accentColor === '#262626' ? '#FAF8F3' : '#262626',
                        border: 'none',
                        borderRadius: radius === 'sm' ? '4px' : radius === 'md' ? '8px' : '999px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                      onClick={() => playClickSound('high')}
                    >
                      <Zap size={16} />
                      Launch Prototype
                    </button>

                    <button
                      style={{
                        padding: '0.75rem 1.4rem',
                        backgroundColor: 'transparent',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: radius === 'sm' ? '4px' : radius === 'md' ? '8px' : '999px',
                        fontWeight: 500,
                        cursor: 'pointer',
                      }}
                      onClick={() => playClickSound('medium')}
                    >
                      Inspect Specs
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: CODE & ENGINE ARCHITECTURE */}
            {activeTab === 'code' && (
              <motion.div
                key="code"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                  {(['canvas', 'state', 'ai'] as const).map(mod => (
                    <button
                      key={mod}
                      onClick={() => { setSelectedModule(mod); playClickSound('medium'); }}
                      style={{
                        padding: '0.6rem 1.2rem',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--border-light)',
                        backgroundColor: selectedModule === mod ? 'var(--text-primary)' : 'var(--bg-secondary)',
                        color: selectedModule === mod ? 'var(--bg-primary)' : 'var(--text-secondary)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {mod === 'canvas' ? 'Canvas Engine' : mod === 'state' ? 'State Manager' : 'Generative AI Layout'}
                    </button>
                  ))}

                  <button
                    onClick={handleCopyCode}
                    style={{
                      marginLeft: 'auto',
                      padding: '0.6rem 1.2rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-medium)',
                      backgroundColor: copiedCode ? '#8FAF90' : 'transparent',
                      color: copiedCode ? '#262626' : 'var(--text-primary)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    {copiedCode ? <CheckCircle2 size={16} /> : <Code size={16} />}
                    {copiedCode ? 'Copied Code!' : 'Copy Code'}
                  </button>
                </div>

                <pre
                  style={{
                    backgroundColor: '#1E1E1E',
                    color: '#D4D4D4',
                    padding: '1.8rem',
                    borderRadius: 'var(--radius-md)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    overflowX: 'auto',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <code>{codeSnippets[selectedModule]}</code>
                </pre>
              </motion.div>
            )}

            {/* TAB 3: FOUNDER DESIGN NOTES */}
            {activeTab === 'notes' && (
              <motion.div
                key="notes"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.8rem',
                }}
              >
                {[
                  {
                    num: '01',
                    title: 'Tactile Software',
                    text: 'Digital tools should respond with the physical weight and clarity of crafted woodworking tools. Every micro-interaction builds user trust.',
                    tag: 'CRAFT & FEEL',
                  },
                  {
                    num: '02',
                    title: 'Speed is a Feature',
                    text: 'Latency ruins flow. I design software architectures to render under 16ms so the boundary between thought and execution vanishes.',
                    tag: 'ENGINEERING',
                  },
                  {
                    num: '03',
                    title: 'Full-Stack Ownership',
                    text: 'Founders who understand both pixel-level visual hierarchy and database indexes build products that feel cohesive from end-to-end.',
                    tag: 'PRODUCT VISION',
                  },
                ].map((note, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '1.8rem',
                      backgroundColor: 'var(--bg-secondary)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span className="mono" style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-tertiary)' }}>
                        {note.num}
                      </span>
                      <span
                        className="mono"
                        style={{
                          fontSize: '0.7rem',
                          padding: '0.2rem 0.6rem',
                          backgroundColor: 'var(--bg-primary)',
                          borderRadius: 'var(--radius-full)',
                        }}
                      >
                        {note.tag}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.3rem', marginBottom: '0.6rem', fontFamily: 'var(--font-serif)' }}>
                      {note.title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {note.text}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
