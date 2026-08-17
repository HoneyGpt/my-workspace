import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { GrainOverlay } from './components/GrainOverlay';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveDesk } from './components/InteractiveDesk';
import { PopcornTV } from './components/PopcornTV';
import { ProjectsCanvas } from './components/ProjectsCanvas';
import { VisualTimeline } from './components/VisualTimeline';
import { SkillsConstellation } from './components/SkillsConstellation';
import { OSTimeline } from './components/OSTimeline';
import { DesignPhilosophy } from './components/DesignPhilosophy';
import { NotebookContact } from './components/NotebookContact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Paper Grain Overlay */}
      <GrainOverlay />

      {/* Dynamic Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Living Workspace / Digital Desk */}
        <InteractiveDesk />

        {/* 3. Projects & Work Archive (Organized by Product Design, Brand + Popcorn TV, Web, Experiments) */}
        <ProjectsCanvas />

        {/* 4. About Me Visual Timeline */}
        <VisualTimeline />

        {/* 6. Interactive Skills Constellation Star Graph */}
        <SkillsConstellation />

        {/* 7. Career OS Timeline */}
        <OSTimeline />

        {/* 8. Design Philosophy Magazine Spread */}
        <DesignPhilosophy />

        {/* 9. Lined Notebook Contact Form */}
        <NotebookContact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
