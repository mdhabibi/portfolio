"use client";
import { useEffect, useRef, useState } from "react";

/** Subtle animated knowledge-graph motif for the hero. */
export function GraphCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const nodes = Array.from({ length: 46 }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00025, vy: (Math.random() - 0.5) * 0.00025,
      r: Math.random() * 1.6 + 0.8,
    }));
    const resize = () => {
      w = c.clientWidth; h = c.clientHeight;
      c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const draw = () => {
      const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#2dd4bf";
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > 1) n.vx *= -1;
        if (n.y < 0 || n.y > 1) n.vy *= -1;
      }
      ctx.strokeStyle = accent;
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = (a.x - b.x) * w, dy = (a.y - b.y) * h, d = Math.hypot(dx, dy);
          if (d < 150) {
            ctx.globalAlpha = (1 - d / 150) * 0.35; ctx.lineWidth = 0.7;
            ctx.beginPath(); ctx.moveTo(a.x * w, a.y * h); ctx.lineTo(b.x * w, b.y * h); ctx.stroke();
          }
        }
      ctx.fillStyle = accent; ctx.globalAlpha = 0.8;
      for (const n of nodes) { ctx.beginPath(); ctx.arc(n.x * w, n.y * h, n.r, 0, Math.PI * 2); ctx.fill(); }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} aria-hidden />;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    let t = "dark";
    try { t = localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"); } catch {}
    setTheme(t); document.documentElement.dataset.theme = t;
  }, []);
  const flip = () => {
    const t = theme === "dark" ? "light" : "dark";
    setTheme(t); document.documentElement.dataset.theme = t;
    try { localStorage.setItem("theme", t); } catch {}
  };
  return <button className="toggle" onClick={flip} aria-label="Toggle colour theme">{theme === "dark" ? "☀" : "☾"}</button>;
}
