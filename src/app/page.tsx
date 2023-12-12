import Download from '@/components/Download';
import Faq from '@/components/Faq';
import ContactUs from '@/components/ContactUs';
import Planet from '@/components/Planet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			<Planet />
			<Header />
			<Download />
			<Faq />
			<ContactUs />
			<Footer />
		</>
	);
}
