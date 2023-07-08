export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta></meta>
      <title>Monorepo Board</title>
      <body>{children}</body>
    </html>
  )
}
