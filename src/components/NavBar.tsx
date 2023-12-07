import { NavLinks } from '@/core/types/navLinks.type';

const NavBar = () => {
	const navLinks: NavLinks[] = [
		{ link: 'Download', id: 'download' },
		{ link: 'FAQ', id: 'faq' },
		{ link: 'Contact Us', id: 'contact' },
		{ link: 'Privacy', id: 'privacy' },
	];

	return (
		<>
			{navLinks.map(({ link, id }) => {
				return (
					<a key={id} href={`#${id}`}>
						{link}
					</a>
				);
			})}
		</>
	);
};

export default NavBar;
