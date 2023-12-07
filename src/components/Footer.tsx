import NavBar from '@/components/NavBar';
import Logo from '@/components/Logo';
const Footer = () => (
	<footer className="flex w-full items-center justify-center px-2.5 py-4">
		<div className="flex w-full max-w-1440 flex-col justify-start gap-4 pt-12 md:flex-row md:gap-133">
			<div className="flex justify-center md:justify-start">
				<Logo />
			</div>
			<nav className="flex flex-col items-center gap-4 text-lg text-custom-gray md:flex-row md:gap-72">
				<NavBar />
			</nav>
		</div>
	</footer>
);
export default Footer;
