'use client'
import '../styles/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <meta></meta>
      <title>Monorepo Board</title>
      <body>{children}</body>
    </html>
  )
}
