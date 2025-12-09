import './globals.css'

export const metadata = {
  title: 'CVE-2025-66478 Test App',
  description: 'Test application for React2Shell vulnerability',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
