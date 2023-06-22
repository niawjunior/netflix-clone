import './globals.css'
import localFont from 'next/font/local'


const netflixSans = localFont({
  src: [
    {
      path: './fonts/NetflixSans-Light.woff2',
      weight: '200',
      style: 'light',
    },
    {
      path: './fonts/NetflixSans-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NetflixSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NetflixSans-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
})

export const metadata = {
  title: 'Netflix',
  description: 'Netflix',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={netflixSans.className}>{children}</body>
    </html>
  )
}
