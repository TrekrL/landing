import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Planet from '@/components/Planet';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Trekr',
	description: 'Keep tracking of your personal geographical achievements',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="relative flex h-full w-full flex-col items-center overflow-x-hidden">
					<Planet />
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
