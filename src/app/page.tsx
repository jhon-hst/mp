"use client";

import { useState } from "react";

const MAX_CLICKS = 2;               // clicks máximos antes de desactivar el overlay
const COOLDOWN_MS = 1 * 60 * 1000; // 5 min en ms para reiniciar el ciclo

// Lee el estado guardado en localStorage (clicks hechos + timestamp del ciclo)
function getClickData() {
  const raw = localStorage.getItem("click_data");
  if (!raw) return { count: 0, lastReset: Date.now() };
  return JSON.parse(raw) as { count: number; lastReset: number };
}

// Guarda el estado actualizado en localStorage
function saveClickData(data: { count: number; lastReset: number }) {
  localStorage.setItem("click_data", JSON.stringify(data));
}

// Decide si el overlay debe mostrarse al cargar la página
function shouldShowOverlay() {
  if (typeof window === "undefined") return false; // evita el error en build/SSR
  const data = getClickData();
  const now = Date.now();
  if (now - data.lastReset >= COOLDOWN_MS) return true;
  return data.count < MAX_CLICKS;
}

export default function Home() {
  // true = overlay activo, se inicializa leyendo localStorage
  const [overlayActive, setOverlayActive] = useState(() => shouldShowOverlay());

  const handleClick = () => {
    const data = getClickData();
    const now = Date.now();

    const isExpired = now - data.lastReset >= COOLDOWN_MS;

    // Si expiró → nuevo ciclo desde 1; si no → incrementa el contador
    const newData = isExpired
      ? { count: 1, lastReset: now }
      : { count: data.count + 1, lastReset: data.lastReset };

    saveClickData(newData);

    if (newData.count >= MAX_CLICKS) setOverlayActive(false); // desmonta el overlay

    window.open(window.location.href, "_blank")?.focus(); // abre pestaña actual con foco
    window.location.href = "https://www.profitablecpmratenetwork.com/nxx8gicy?key=3b50d548ca4ce7e24f7adfc782355fe7";       // redirige la pestaña actual
  };

  return (
    <div className="relative w-screen h-screen">
      {/* Iframe que ocupa toda la pantalla */}
      <iframe
        src="https://spankbang.com/"
        className="w-full h-full border-none"
        title="Página externa"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />

      {/* Overlay invisible encima del iframe — se desmonta al agotar los clicks */}
      {overlayActive && (
        <div className="absolute inset-0" onClick={handleClick} />
      )}
    </div>
  );
}