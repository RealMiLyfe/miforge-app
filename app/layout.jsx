import './globals.css'

export const metadata = {
  title: 'MiForge × MiLyfe | AI Bookkeeping Powered by $MLY',
  description: 'Automated AI bookkeeping, real-time daily reports, and 100% matched community credits.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
