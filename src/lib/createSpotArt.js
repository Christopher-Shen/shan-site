export function createSpotArt(title, city, palette) {
  const [start, end, accent] = palette;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 720">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${start}" />
          <stop offset="100%" stop-color="${end}" />
        </linearGradient>
        <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="1200" height="720" fill="url(#sky)" />
      <circle cx="930" cy="142" r="118" fill="#ffffff" fill-opacity="0.16" />
      <path d="M0 560C149 505 280 498 394 536C529 580 605 590 728 542C850 494 972 447 1200 487V720H0Z" fill="#0f5959" fill-opacity="0.22"/>
      <path d="M0 610C148 576 280 577 392 608C499 637 580 660 700 632C848 598 964 511 1200 560V720H0Z" fill="#f6efe4" fill-opacity="0.16"/>
      <rect x="84" y="92" width="400" height="112" rx="18" fill="#f6efe4" fill-opacity="0.12" stroke="#ffffff" stroke-opacity="0.22" />
      <text x="116" y="142" font-size="36" fill="#ffffff" font-family="Georgia, serif" font-weight="700">${escapeXml(
        title
      )}</text>
      <text x="116" y="182" font-size="22" fill="#f6efe4" font-family="Arial, sans-serif">${escapeXml(
        city
      )}</text>
      <rect x="84" y="506" width="1032" height="144" rx="28" fill="url(#glow)" stroke="#ffffff" stroke-opacity="0.18" />
      <path d="M234 474C308 286 396 188 497 188C601 188 676 286 737 474Z" fill="#f6efe4" fill-opacity="0.16" />
      <rect x="462" y="265" width="72" height="186" rx="14" fill="#ffffff" fill-opacity="0.22"/>
      <rect x="480" y="216" width="36" height="54" rx="10" fill="${accent}" fill-opacity="0.78"/>
      <rect x="364" y="454" width="268" height="32" rx="14" fill="#0b3737" fill-opacity="0.5"/>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeXml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
