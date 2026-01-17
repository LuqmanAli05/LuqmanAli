import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 120,
  height: 120,
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
          background: '#000',
          borderRadius: '100%',
        }}
      >
        <svg width="70" height="60" viewBox="0 0 44 40" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 5 V35 H15"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="square"
            fill="none"
          />
          <path
            d="M25 5 L37 5 L31 35 Z"
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
