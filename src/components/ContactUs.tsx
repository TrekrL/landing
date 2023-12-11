'use client';
import { FormEvent, useState } from 'react';
import { notifyHelper } from '@/utils/notifyHelper';

const ContactUs = () => {
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const { errorToast, successToast } = notifyHelper();

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			const formData = new FormData();
			formData.append('email', email);
			formData.append('message', message);

			await fetch('/api/post', {
				method: 'POST',
				body: formData,
			});
			setEmail('');
			setMessage('');
			successToast('Your message has been sent, we will contact you soon.');
		} catch (error) {
			console.error('Error submitting form:', error);
			errorToast('Something went wrong, please try again or try later.');
		}
	};

	return (
		<section id="contact" className="flex w-full flex-col items-center px-2.5">
			<div className="section-wrapper mt-12 flex w-full flex-col items-center gap-14 rounded-[20px] bg-custom-grayish-blue px-8 py-14">
				<div className="flex flex-col items-center gap-2">
					<h3 className="text-2xl font-semibold text-custom-white">Still have questions?</h3>
					<p className="text-xl font-medium text-custom-gray">
						Can’t find the answer you’re looking for? Please contact our friendly team.
					</p>
				</div>
				<form className="flex w-full max-w-470 flex-col gap-10" onSubmit={onSubmit}>
					<div className="flex flex-col items-center gap-4">
						<div className="flex w-full flex-col gap-1.5">
							<label className="text-sm font-medium text-custom-gray" htmlFor="email">
								Email
							</label>
							<input
								className="w-full rounded-lg border-1 border-solid  border-custom-midnight-blue px-3.5 py-2.5"
								type="email"
								id="email"
								onChange={e => setEmail(e.target.value)}
								placeholder="example@mail.com"
								value={email}
								required
							/>
						</div>
						<div className="flex w-full flex-col gap-1.5">
							<label className="text-sm font-medium text-custom-gray" htmlFor="message">
								Question
							</label>
							<textarea
								className="h-full min-h-148 w-full max-w-442 rounded-lg border-1 border-solid border-custom-midnight-blue px-3.5 py-2.5"
								id="message"
								onChange={e => setMessage(e.target.value)}
								value={message}
								required
								placeholder="Type here any your questions..."
							/>
						</div>
					</div>
					<button className="rounded-md bg-custom-medium-blue px-4 py-4 font-medium" type="submit">
						Send
					</button>
				</form>
			</div>
		</section>
	);
};

export default ContactUs;
