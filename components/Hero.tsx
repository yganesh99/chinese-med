'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
	return (
		<section
			id='home'
			className='relative min-h-screen flex items-center overflow-hidden'
		>
			{/* Gradient Overlay */}
			<div className='absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-light/85 to-secondary/80'></div>

			{/* Decorative Background Blobs */}
			<div className='absolute inset-0 opacity-10'>
				<div className='absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse'></div>
				<div
					className='absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse'
					style={{ animationDelay: '1s' }}
				></div>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Left Content */}
					<div className='slide-up text-white'>
						{/* <div className='inline-block mb-4'>
							<span className='bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium'>
								✨ 2,500+ Years of Healing Wisdom
							</span>
						</div> */}

						<h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
							Modern care meets
							<br />
							<span className='font-serif block mt-2'>
								Traditional Healing
							</span>
						</h1>

						<p className='text-xl md:text-2xl mb-8 leading-relaxed text-white/90 max-w-xl'>
							At AcuWise, we combine modern evidence - based
							approaches with traditional Chinese medicine to
							provide personalised care. Our focus is helping you
							manage chronic and acute pain, restore balance
							stress relief, women’s health/fertility and regain
							control of your body.
						</p>

						<div className='flex flex-col sm:flex-row gap-4'>
							<Link href='/contact'>
								<button className='bg-white text-primary hover:bg-gray-50 font-bold py-4 px-8 rounded-full uppercase text-sm tracking-wide transition-all duration-300 hover:shadow-2xl hover:-translate-y-1'>
									Book Consultation
								</button>
							</Link>
							<button className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-4 px-8 rounded-full uppercase text-sm tracking-wide transition-all duration-300'>
								Learn More
							</button>
						</div>

						{/* Stats */}
						{/* <div className='grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20'>
							<div>
								<div className='text-4xl font-bold mb-1'>
									15+
								</div>
								<div className='text-white/80 text-sm'>
									Years Experience
								</div>
							</div>
							<div>
								<div className='text-4xl font-bold mb-1'>
									5000+
								</div>
								<div className='text-white/80 text-sm'>
									Happy Patients
								</div>
							</div>
							<div>
								<div className='text-4xl font-bold mb-1'>
									98%
								</div>
								<div className='text-white/80 text-sm'>
									Success Rate
								</div>
							</div>
						</div> */}
					</div>

					{/* Right Image */}
					<div className='relative fade-in'>
						<div className='relative layer-shadow-lg rounded-3xl overflow-hidden group'>
							<div className='relative h-[600px] w-full'>
								<Image
									src='/hero-img.jpeg'
									alt='Traditional Chinese Medicine'
									fill
									className='object-cover transition-transform duration-700 group-hover:scale-105'
									priority
								/>
							</div>
							<div className='absolute bottom-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-8'>
								<p className='text-white/90 text-sm mt-1'>
									Dr. Semira(TCM)
								</p>
							</div>
						</div>

						{/* Decorative Elements */}
						<div className='absolute -top-6 -right-6 w-28 h-28 bg-accent rounded-full layer-shadow opacity-90 animate-pulse'></div>
						<div
							className='absolute -bottom-6 -left-6 w-36 h-36 bg-secondary rounded-full layer-shadow opacity-80 animate-pulse'
							style={{ animationDelay: '0.5s' }}
						></div>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
				<svg
					className='w-6 h-6 text-white'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M19 14l-7 7m0 0l-7-7m7 7V3'
					/>
				</svg>
			</div>
		</section>
	);
}
