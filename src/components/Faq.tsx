import { faqList } from '@/utils/faq.data';
import Accordion from '@/components/Accordion';

const Faq = () => {
	return (
		<section id="faq" className="flex w-full flex-col items-center px-2.5">
			<div className="section-wrapper mt-hero flex flex-col items-center gap-8">
				<div className="flex flex-col items-center gap-4">
					<h2 className="text-center text-[40px] font-semibold text-custom-white">
						Frequently asked questions
					</h2>
					<p className="text-center text-28 font-medium text-custom-gray">
						Everything you need to know about the product and billing
					</p>
				</div>
				<div className="flex w-full max-w-954 flex-col items-center">
					{faqList.map(({ question, answer }, index) => {
						return <Accordion question={question} answer={answer} key={index} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Faq;
