import React from 'react';
import NavBar from '@/components/NavBar';

interface DrawerProps {
	isOpen: boolean;
	setIsOpen: () => void;
}

const Drawer = ({ isOpen, setIsOpen }: DrawerProps) => {
	return (
		<div
			className={
				' fixed inset-0 z-10 transform overflow-hidden bg-custom-grayish-blue bg-opacity-25 ease-in-out' +
				(isOpen
					? ' translate-x-0 opacity-100 transition-opacity duration-500 '
					: ' translate-x-full opacity-0 transition-all delay-500  ')
			}
		>
			<div
				className={
					' delay-400 absolute right-0 h-full w-screen max-w-sm transform bg-custom-grayish-blue shadow-xl transition-all duration-500 ease-in-out  ' +
					(isOpen ? ' translate-x-0 ' : ' translate-x-full ')
				}
			>
				<div className="flex flex-row-reverse px-2.5 py-4" onClick={setIsOpen}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
						<path
							fillRule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<nav
					className="relative flex h-full w-screen max-w-sm flex-col items-center justify-center gap-4 pb-10"
					onClick={setIsOpen}
				>
					<NavBar />
				</nav>
			</div>
			<div className=" h-full w-screen cursor-pointer " onClick={setIsOpen}></div>
		</div>
	);
};

export default Drawer;
