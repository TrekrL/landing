import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ToastContainer, toast } from 'react-toastify';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

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
					<ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="light"
					/>
					{children}
				</div>
			</body>
		</html>
	);
}
