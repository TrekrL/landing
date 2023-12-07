'use client';
import { useState } from 'react';

import NavBar from '@/components/NavBar';
import Logo from '@/components/Logo';
import Drawer from '@/components/Drawer';
const Header = () => {
	const [state, setState] = useState<boolean>(false);

	const handleState = () => {
		setState(state => !state);
	};

	return (
		<header className="absolute flex w-full items-center justify-center px-2.5 py-4">
			<div className="flex w-full max-w-1440 justify-between gap-133 lg:justify-start">
				<Logo />
				<div className="h-8 w-8 lg:hidden">
					<button className="text-custom-white hover:text-custom-gray" onClick={handleState}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-8 w-8"
						>
							<path
								fillRule="evenodd"
								d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
				<nav className="hidden flex-row gap-[72px] text-lg text-custom-gray lg:flex">
					<NavBar />
				</nav>
				<Drawer setIsOpen={handleState} isOpen={state} />
			</div>
		</header>
	);
};
export default Header;
