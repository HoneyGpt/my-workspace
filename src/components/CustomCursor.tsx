import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate custom cursor on fine pointers (desktops)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      const { clientX: x, clientY: y } = e;
      setPosition({ x, y });

      setTrail(prev => [{ x, y }, ...prev.slice(0, 5)]);

      // Check if target or parent is clickable
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest('a, button, [role="button"], input, textarea, select, .interactive');
      setIsHovered(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Ring Cursor */}
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: isHovered ? 48 : isClicking ? 14 : 24,
          height: isHovered ? 48 : isClicking ? 14 : 24,
          borderRadius: '50%',
          border: isHovered ? '1.5px solid #F5C84C' : '1px solid rgba(38, 38, 38, 0.4)',
          backgroundColor: isHovered ? 'rgba(245, 200, 76, 0.12)' : 'transparent',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease',
          backdropFilter: isHovered ? 'blur(1px)' : 'none',
        }}
      />

      {/* Center Dot */}
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: 4,
          height: 4,
          borderRadius: '50%',
          backgroundColor: isHovered ? '#F5C84C' : '#262626',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 10000,
          transition: 'background-color 0.2s ease',
        }}
      />

      {/* Trailing Particle Dots */}
      {trail.map((pt, i) => (
        <div
          key={i}
          style={{
            position: 'fixed',
            top: pt.y,
            left: pt.x,
            width: Math.max(1, 3 - i * 0.4),
            height: Math.max(1, 3 - i * 0.4),
            borderRadius: '50%',
            backgroundColor: i % 2 === 0 ? 'rgba(143, 175, 144, 0.4)' : 'rgba(245, 200, 76, 0.4)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 9998 - i,
            opacity: (1 - i / trail.length) * 0.5,
          }}
        />
      ))}
    </>
  );
};
