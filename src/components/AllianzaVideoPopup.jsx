import { useCallback, useEffect, useRef, useState } from 'react';
import './AllianzaVideoPopup.css';

const DAY = 86400000;
const isDismissed = (key, days) => {
  try {
    const t = Number(localStorage.getItem(key));
    return !!t && Date.now() - t < days * DAY;
  } catch {
    return false;
  }
};
const markDismissed = (key) => {
  try {
    localStorage.setItem(key, String(Date.now()));
  } catch {
    /* sin almacenamiento: no pasa nada */
  }
};

/**
 * Ventana flotante con el video de la alianza Don Valerio x Reemaq.
 * No invasiva: aparece en una esquina, no tapa la página, no bloquea el scroll,
 * tiene la X siempre visible y se muestra una sola vez cada `hideForDays` días.
 * Arranca sin sonido (los navegadores no permiten otra cosa); hay un botón para activarlo.
 * Al terminar el video muestra "Consultanos" y "Cerrar".
 */
export default function AllianzaVideoPopup({
  format = 'auto', // 'vertical' | 'horizontal' | 'auto' (horizontal en compu, vertical en celu)
  srcVertical = '/videos/alianza_vertical.mp4',
  srcHorizontal = '/videos/alianza_horizontal.mp4',
  posterVertical = '/videos/alianza_vertical_poster.jpg',
  posterHorizontal = '/videos/alianza_horizontal_poster.jpg',
  ctaHref = '/contacto', // poné acá el link de WhatsApp (https://wa.me/54...) o tu sección de contacto
  ctaLabel = 'Consultanos',
  delayMs = 5000,
  hideForDays = 30,
  storageKey = 'dv_alianza_reemaq',
  position = 'right', // 'right' | 'left' (por si el botón de WhatsApp ocupa la derecha)
  forceShow = false, // true para probar sin que recuerde que ya lo cerraste
}) {
  const [visible, setVisible] = useState(false);
  const [ended, setEnded] = useState(false);
  const [muted, setMuted] = useState(true);
  const [needsTap, setNeedsTap] = useState(false);
  const videoRef = useRef(null);

  const fmt =
    format === 'auto'
      ? typeof window !== 'undefined' && window.innerWidth >= 900
        ? 'horizontal'
        : 'vertical'
      : format;
  const src = fmt === 'vertical' ? srcVertical : srcHorizontal;
  const poster = fmt === 'vertical' ? posterVertical : posterHorizontal;

  useEffect(() => {
    if (!forceShow && isDismissed(storageKey, hideForDays)) return undefined;
    let dead = false;
    // Mientras espera el retardo, descarga el video en segundo plano para que arranque al instante
    const warm = fetch(src, { cache: 'force-cache' }).then((r) => r.blob()).catch(() => {});
    const wait = new Promise((r) => setTimeout(r, delayMs));
    const limit = new Promise((r) => setTimeout(r, delayMs + 6000));
    Promise.race([Promise.all([warm, wait]), limit]).then(() => {
      if (!dead) setVisible(true);
    });
    return () => {
      dead = true;
    };
  }, [src, delayMs, forceShow, hideForDays, storageKey]);

  const close = useCallback(() => {
    markDismissed(storageKey);
    videoRef.current?.pause();
    setVisible(false);
  }, [storageKey]);

  useEffect(() => {
    if (!visible) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [visible, close]);

  useEffect(() => {
    const v = videoRef.current;
    if (!visible || !v) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setNeedsTap(true);
      return;
    }
    v.play().catch(() => setNeedsTap(true));
  }, [visible]);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    setEnded(false);
    setNeedsTap(false);
    v.currentTime = ended ? 0 : v.currentTime;
    v.play().catch(() => setNeedsTap(true));
  };

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  if (!visible) return null;

  return (
    <aside
      className={`dv-alianza dv-alianza--${fmt} dv-alianza--${position}`}
      aria-label="Anuncio: nueva alianza entre Don Valerio y Reemaq"
    >
      <video
        ref={videoRef}
        className="dv-alianza__video"
        src={src}
        poster={poster}
        muted
        playsInline
        preload="auto"
        onEnded={() => setEnded(true)}
      />

      <button type="button" className="dv-alianza__btn dv-alianza__close" onClick={close} aria-label="Cerrar">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {!ended && !needsTap && (
        <button
          type="button"
          className="dv-alianza__btn dv-alianza__sound"
          onClick={toggleSound}
          aria-label={muted ? 'Activar sonido' : 'Silenciar'}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 9v6h4l5 4V5L8 9H4z" />
            {muted ? <path d="M17 9l4 6M21 9l-4 6" /> : <path d="M16.5 8.5a5 5 0 010 7" />}
          </svg>
        </button>
      )}

      {needsTap && !ended && (
        <button type="button" className="dv-alianza__tap" onClick={play} aria-label="Reproducir video">
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 4l14 8-14 8z" />
            </svg>
          </span>
        </button>
      )}

      {ended && (
        <div className="dv-alianza__end">
          <p className="dv-alianza__title">
            Don Valerio + <b>Reemaq</b>
          </p>
          <a className="dv-alianza__cta" href={ctaHref} onClick={() => markDismissed(storageKey)}>
            {ctaLabel}
          </a>
          <button type="button" className="dv-alianza__dismiss" onClick={close}>
            Cerrar
          </button>
          <button type="button" className="dv-alianza__again" onClick={play}>
            Ver de nuevo
          </button>
        </div>
      )}
    </aside>
  );
}
