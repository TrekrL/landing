import Image from 'next/image';

const Planet = () => (
	<Image
		className="-z-1 absolute right-[-272px] top-[-122px] min-w-400 opacity-40"
		src="/planet.png"
		alt="planet"
		width="910"
		height="910"
	/>
);

export default Planet;
