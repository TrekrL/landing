import { NavLinks } from '@/core/types/navLinks.type';
import Link from 'next/link';

const NavBar = () => {
	const navLinks: NavLinks[] = [
		{ title: 'Download', id: 'download', link: '#download' },
		{ title: 'FAQ', id: 'faq', link: '#faq' },
		{ title: 'Contact Us', id: 'contact', link: '#contact' },
		{ title: 'Privacy', id: 'privacy', link: '/privacy' },
	];

	return (
		<>
			{navLinks.map(({ title, id, link }) => {
				return (
					<Link key={id} href={`${link}`}>
						{title}
					</Link>
				);
			})}
		</>
	);
};

export default NavBar;
