'use client';
import Image from 'next/image';
import { useState } from 'react';

type AccordingProps = {
	question: string;
	answer: string;
};
const Accordion = ({ question, answer }: AccordingProps) => {
	const [show, setShow] = useState<boolean>(false);

	const toggleAccordion = () => {
		setShow(show => !show);
	};
	return (
		<div className="flex w-full max-w-954 flex-row justify-between border-b-1 border-b-custom-midnight py-10 last:border-0">
			<div className="flex flex-col gap-3">
				<h3 className="text-xl font-medium text-custom-light-gray ">{question}</h3>
				<div
					className={`overflow-hidden transition-[max-height] duration-1000 ease-in  ${
						show ? 'max-h-44' : 'max-h-0'
					}`}
				>
					<p className="text-base font-normal text-custom-gray">{answer}</p>
				</div>
			</div>
			<div className="flex-32">
				<Image
					className={`cursor-pointer ${show && 'origin-center rotate-180'} transition-transform`}
					src="/arrow.svg"
					alt="arrow"
					width={32}
					height={32}
					onClick={toggleAccordion}
				/>
			</div>
		</div>
	);
};

export default Accordion;
