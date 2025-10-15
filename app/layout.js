import { Nunito, Lora } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
      <body className={`${nunito.variable} ${lora.variable} antialiased`}>

        {children}
      </body>
    </html>
  );
}
