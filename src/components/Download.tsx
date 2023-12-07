import Image from 'next/image';

const Download = () => {
	return (
		<section
			id="download"
			className="bg flex w-full flex-col items-center bg-hero-background bg-cover bg-no-repeat px-2.5 bg-blend-normal"
		>
			<div className="section-wrapper relative mt-hero flex flex-row gap-4">
				<div className="flex flex-col justify-center">
					<div className="max-w-[833px]">
						<h1 className="max-h-[127px] text-[104px] font-bold text-custom-white ">TREKR</h1>
						<p className="text-[32px] font-medium text-custom-gray">
							Keep tracking of your personal geographical achievements
						</p>
					</div>
					<div className="mt-[72px] flex flex-row gap-4">
						<a href="#">
							<Image
								className="cursor-pointer"
								src="/googlePlay.svg"
								alt="google pay"
								width="216"
								height="64"
							/>
						</a>
						<a href="#">
							<Image
								className="cursor-pointer"
								src="/appStore.svg"
								alt="app store"
								width="192"
								height="64"
							/>
						</a>
					</div>
				</div>
				<div className="hidden h-[658px] w-[305px] lg:block">
					<Image
						className="rounded-MOBILE border-5 border-solid border-custom-midnight-indigo"
						src="/phone.png"
						alt="phone"
						width={305}
						height={658}
					/>
				</div>
			</div>
		</section>
	);
};

export default Download;
