import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '6px',
        }}
      >
        <svg width="26" height="18" viewBox="0 0 65 45" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 5 V35 H20"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="square"
            fill="none"
          />
          <path
            d="M30 5 L42 5 L36 35 Z"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinejoin="miter"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
