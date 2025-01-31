import { Roboto } from 'next/font/google'
import './globals.css'
const roboto = Roboto({ subsets: ['latin'] ,weight: ['400', '700']})

export const metadata = {
  title: 'Saurav Kumar',
  description: 'We Only Live Once ',
}

export default function RootLayout({
  children,
}
) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
