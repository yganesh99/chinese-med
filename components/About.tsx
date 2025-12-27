'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// Custom hook for scroll reveal (reusing logic, ideally should be a shared hook)
function useScrollReveal() {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []);

	return [ref, isVisible] as const;
}

export default function About() {
	const [ref, isVisible] = useScrollReveal();

	return (
		<section
			id='about'
			className='py-24 bg-white'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-16 items-start'>
					{/* Content */}
					<div
						ref={ref}
						className={`scroll-reveal ${
							isVisible ? 'revealed' : ''
						}`}
					>
						<div className='inline-block mb-4'>
							<span className='bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide'>
								About Me
							</span>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold text-foreground mb-8 font-serif'>
							My Journey in{' '}
							<span className='gradient-text'>
								Traditional Medicine
							</span>
						</h2>

						<div className='space-y-6 text-gray-700 leading-relaxed text-lg'>
							<p>
								After completing my four-year Bachelor degree in
								Traditional Chinese Medicine in Australia, I
								undertook a clinical internship at Nanjing
								Hospital of Traditional Chinese Medicine,
								affiliated with Nanjing University of Chinese
								Medicine in China. This experience allowed me to
								work alongside senior Chinese medicine Doctors
								and deepen my understanding of classical theory
								applied in a modern hospital setting.
							</p>
							<p>
								In November 2025, I travelled to Beijing for
								further study, visiting Dongzhimen Hospital
								affiliated with Beijing University of Chinese
								Medicine and Dongfang Hospital Beijing
								University of Chinese Medicine.
							</p>
							<p>
								During this time, I also visited Beijing Zhoushi
								Shizhentang Pharmaceutical Co. Ltd Museum and
								Production Factory, gaining firsthand insight
								into the preparation, formulation, and quality
								control of traditional Chinese herbal medicines.
							</p>
							<p>
								During my Beijing visit, I was honoured to be
								invited by the World Federation of Chinese
								Medicine Societies to present a talk on being a
								practicing Chinese medicine doctor in Australia
								to a new cohort of inspiring Chinese medicine
								students in Papua New Guinea.
							</p>
						</div>

						<div className='mt-8 pt-8 border-t border-gray-100 flex items-center space-x-4'>
							<div className='flex -space-x-4'>
								{/* Decorative circular avatars or icons could go here if needed */}
							</div>
							<div className='text-sm font-medium text-primary'>
								Certified Practitioner
								<span className='block text-gray-400 font-normal'>
									Registered & Accredited
								</span>
							</div>
						</div>
					</div>

					{/* Image Grid */}
					<div className='grid grid-cols-2 gap-4'>
						<div className='space-y-4 pt-12'>
							<div className='relative h-64 rounded-2xl overflow-hidden layer-shadow transform hover:-translate-y-1 transition-transform duration-500'>
								<Image
									src='/about/image-1.jpg'
									alt='Clinical Internship'
									fill
									className='object-cover'
								/>
							</div>
							<div className='relative h-48 rounded-2xl overflow-hidden layer-shadow transform hover:-translate-y-1 transition-transform duration-500'>
								<Image
									src='/about/image-3.jpg'
									alt='Beijing Visit'
									fill
									className='object-cover'
								/>
							</div>
						</div>
						<div className='space-y-4'>
							<div className='relative h-[480px] rounded-2xl overflow-hidden layer-shadow transform hover:-translate-y-1 transition-transform duration-500'>
								<Image
									src='/about/image-2.jpg'
									alt='Presentation Talk'
									fill
									className='object-cover'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
