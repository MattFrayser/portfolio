import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Matthew Frayser Portfolio',
  icons: {
    icon: '/portfolio.png',
  },
  description: 'A portfolio showcasing my work and skills as a software engineer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        
        {children}
      </body>
    </html>
  );
}
