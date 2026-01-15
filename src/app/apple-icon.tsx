import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000',
          borderRadius: '100px',
        }}
      >
        <svg width="100" height="80" viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 5 V35 H17"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="square"
            fill="none"
          />
          <path
            d="M27 5 L39 5 L33 35 Z"
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
