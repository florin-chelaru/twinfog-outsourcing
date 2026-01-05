import { useTheme } from '@mui/material'

export default function HeroVisual() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const strokeColor = isDark ? theme.palette.primary.light : theme.palette.primary.main
  return (
    <svg
      viewBox="0 0 600 300"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      style={{
        opacity: 0.2
      }}>
      <g
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        {/* Boxes */}
        <rect x="40" y="110" width="140" height="80" rx="10" />
        <rect x="230" y="110" width="140" height="80" rx="10" />
        <rect x="420" y="110" width="140" height="80" rx="10" />

        {/* Arrows */}
        <path d="M180 150 H230" />
        <path d="M370 150 H420" />

        {/* Arrow heads */}
        <path d="M220 145 L230 150 L220 155" />
        <path d="M410 145 L420 150 L410 155" />
      </g>
    </svg>
  )
}
