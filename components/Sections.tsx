'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Custom hook for scroll reveal
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

// Services Component
export function Services() {
	const [ref1, isVisible1] = useScrollReveal();
	const [ref2, isVisible2] = useScrollReveal();

	const services = [
		{
			title: 'Acupuncture',
			chinese: '针灸',
			description:
				'Ancient needle therapy that stimulates specific points on the body to restore energy flow, alleviate pain, and promote natural healing. Effective for chronic pain, stress, and various health conditions.',
			image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=400&fit=crop',
			benefits: [
				'Pain Relief',
				'Stress Reduction',
				'Improved Sleep',
				'Enhanced Immunity',
			],
		},
		{
			title: 'Herbal Medicine',
			chinese: '中药',
			description:
				'Carefully formulated herbal remedies using premium organic ingredients. Each prescription is customized to your unique constitution and health needs.',
			image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=500&h=400&fit=crop',
			benefits: [
				'Natural Healing',
				'Holistic Balance',
				'Customized Care',
				'Long-term Wellness',
			],
		},
		{
			title: 'Tui Na Massage',
			chinese: '推拿',
			description:
				'Therapeutic Chinese massage combining acupressure, manipulation, and stretching to improve circulation, release tension, and harmonize energy pathways.',
			image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500&h=400&fit=crop',
			benefits: [
				'Muscle Relaxation',
				'Improved Circulation',
				'Energy Balance',
				'Flexibility',
			],
		},
		{
			title: 'Dietary Therapy',
			chinese: '食疗',
			description:
				'Personalized nutritional guidance based on TCM principles. Learn how to nourish your body with foods that support your constitution and promote vitality.',
			image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=400&fit=crop',
			benefits: [
				'Digestive Health',
				'Energy Boost',
				'Disease Prevention',
				'Optimal Nutrition',
			],
		},
	];

	return (
		<section
			id='services'
			className='py-24 bg-gradient-to-b from-background to-white'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div
					ref={ref1}
					className={`text-center mb-16 scroll-reveal ${
						isVisible1 ? 'revealed' : ''
					}`}
				>
					<div className='inline-block mb-4'>
						<span className='bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide'>
							Services
						</span>
					</div>
					<h2 className='text-5xl md:text-6xl font-bold text-foreground mb-6'>
						Comprehensive{' '}
						<span className='gradient-text'>TCM Treatments</span>
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						Traditional Chinese Medicine treatments tailored to your
						unique needs
					</p>
				</div>

				<div className='grid md:grid-cols-2 gap-8'>
					{services.map((service, index) => (
						<div
							key={index}
							ref={ref2}
							className={`group bg-card layer-shadow rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl scroll-reveal ${
								isVisible2 ? 'revealed' : ''
							}`}
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							<div className='relative h-64 overflow-hidden'>
								<div className='relative h-full w-full'>
									<Image
										src={service.image}
										alt={service.title}
										fill
										className='object-cover transition-transform duration-700 group-hover:scale-110'
									/>
								</div>
								<div className='absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full layer-shadow'>
									<span className='text-2xl font-serif font-bold text-primary'>
										{service.chinese}
									</span>
								</div>
								<div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
							</div>
							<div className='p-8'>
								<h3 className='text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors'>
									{service.title}
								</h3>
								<p className='text-gray-600 mb-6 leading-relaxed'>
									{service.description}
								</p>
								<div className='grid grid-cols-2 gap-3 mb-6'>
									{service.benefits.map((benefit, idx) => (
										<div
											key={idx}
											className='flex items-center space-x-2'
										>
											<div className='w-2 h-2 bg-primary rounded-full'></div>
											<span className='text-sm text-gray-700'>
												{benefit}
											</span>
										</div>
									))}
								</div>
								<button className='text-primary font-semibold uppercase text-sm tracking-wide hover:text-primary-dark transition-colors group-hover:translate-x-2 inline-flex items-center'>
									Learn More
									<svg
										className='w-4 h-4 ml-2'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M9 5l7 7-7 7'
										/>
									</svg>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

// Philosophy Component
export function Philosophy() {
	const [ref, isVisible] = useScrollReveal();

	const principles = [
		{
			icon: '☯️',
			title: 'Balance & Harmony',
			description:
				'Restoring the natural equilibrium of Yin and Yang, allowing your body to heal itself through balanced energy flow.',
		},
		{
			icon: '🌿',
			title: 'Natural Healing',
			description:
				'Harnessing the power of nature using organic herbs, gentle techniques, and time-tested wisdom passed through generations.',
		},
		{
			icon: '👤',
			title: 'Holistic Approach',
			description:
				'Treating the whole person - body, mind, and spirit - addressing root causes rather than just symptoms.',
		},
		{
			icon: '🎯',
			title: 'Personalized Care',
			description:
				'Creating customized treatment plans based on your specific constitution, lifestyle, and health goals.',
		},
	];

	return (
		<section
			id='philosophy'
			className='py-24 bg-gradient-to-b from-white to-primary/5'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-16 items-center'>
					<div
						ref={ref}
						className={`scroll-reveal ${
							isVisible ? 'revealed' : ''
						} order-2 lg:order-1`}
					>
						<div className='relative'>
							<div className='absolute -top-8 -left-8 w-32 h-32 bg-secondary rounded-full opacity-20 blur-3xl'></div>
							<div className='relative h-[600px] w-full rounded-3xl overflow-hidden layer-shadow-lg'>
								<Image
									src='https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&h=900&fit=crop'
									alt='TCM Philosophy'
									fill
									className='object-cover'
								/>
							</div>
							<div className='absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl layer-shadow'>
								<p className='text-xl font-semibold text-foreground font-serif mb-2'>
									天人合一
								</p>
								<p className='text-gray-600'>
									Unity of Heaven and Humanity
								</p>
							</div>
						</div>
					</div>

					<div className='order-1 lg:order-2'>
						<div className='inline-block mb-4'>
							<span className='bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide'>
								My Philosophy
							</span>
						</div>
						<h2 className='text-5xl md:text-6xl font-bold text-foreground mb-6'>
							Ancient Wisdom,{' '}
							<span className='gradient-text'>Modern Care</span>
						</h2>
						<p className='text-xl text-gray-700 mb-8 leading-relaxed'>
							Traditional Chinese Medicine is built on the
							foundation of balance, harmony, and interconnection.
							With over 2,500 years of wisdom, I provide holistic
							care that addresses not just symptoms, but the root
							cause of imbalance.
						</p>

						<div className='space-y-6'>
							{principles.map((principle, index) => (
								<div
									key={index}
									className='bg-card layer-shadow p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
								>
									<div className='flex items-start space-x-4'>
										<div className='text-5xl flex-shrink-0'>
											{principle.icon}
										</div>
										<div>
											<h3 className='text-xl font-bold text-foreground mb-2'>
												{principle.title}
											</h3>
											<p className='text-gray-600 leading-relaxed'>
												{principle.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

// Testimonials Component
export function Testimonials() {
	const [ref, isVisible] = useScrollReveal();

	const testimonials = [
		{
			name: 'Sarah Mitchell',
			condition: 'Chronic Back Pain',
			text: "After years of conventional treatment with no relief, I found healing through acupuncture here. The personalized care and deep understanding have transformed my life. I'm now pain-free and more energetic than ever.",
			rating: 5,
			image: 'https://i.pravatar.cc/150?img=1',
		},
		{
			name: 'James Chen',
			condition: 'Stress & Anxiety',
			text: 'The holistic approach to my anxiety has been life-changing. The herbal remedies combined with acupuncture have helped me find balance without pharmaceuticals. I feel like myself again.',
			rating: 5,
			image: 'https://i.pravatar.cc/150?img=13',
		},
		{
			name: 'Emily Rodriguez',
			condition: 'Digestive Issues',
			text: 'I was skeptical at first, but the dietary therapy and herbal treatments have completely resolved my digestive problems. The practitioners here truly understand the connection between food and health.',
			rating: 5,
			image: 'https://i.pravatar.cc/150?img=5',
		},
		{
			name: 'Michael Thompson',
			condition: 'Sports Injury Recovery',
			text: "As an athlete, recovery is crucial. The Tui Na massage and acupuncture have accelerated my healing process significantly. I've recommended this clinic to my entire team.",
			rating: 5,
			image: 'https://i.pravatar.cc/150?img=12',
		},
	];

	return (
		<section
			id='testimonials'
			className='py-24 bg-gradient-to-b from-primary/5 to-white'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div
					ref={ref}
					className={`text-center mb-16 scroll-reveal ${
						isVisible ? 'revealed' : ''
					}`}
				>
					<div className='inline-block mb-4'>
						<span className='bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide'>
							Testimonials
						</span>
					</div>
					<h2 className='text-5xl md:text-6xl font-bold text-foreground mb-6'>
						Patient{' '}
						<span className='gradient-text'>Success Stories</span>
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						Real experiences from real people who found healing and
						wellness
					</p>
				</div>

				<div className='grid md:grid-cols-2 gap-8'>
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className='bg-white/50 backdrop-blur-sm layer-shadow-lg rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-card'
						>
							<div className='flex items-center mb-6'>
								<div className='relative w-16 h-16 rounded-full overflow-hidden layer-shadow mr-4'>
									<Image
										src={testimonial.image}
										alt={testimonial.name}
										fill
										className='object-cover'
									/>
								</div>
								<div>
									<h3 className='text-xl font-bold text-foreground'>
										{testimonial.name}
									</h3>
									<p className='text-sm text-primary font-medium'>
										{testimonial.condition}
									</p>
								</div>
							</div>
							<div className='flex mb-4'>
								{[...Array(testimonial.rating)].map((_, i) => (
									<svg
										key={i}
										className='w-5 h-5 text-accent fill-current'
										viewBox='0 0 20 20'
									>
										<path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
									</svg>
								))}
							</div>
							<p className='text-gray-700 leading-relaxed italic'>
								&ldquo;{testimonial.text}&rdquo;
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

// Contact Component
export function Contact() {
	const [ref, isVisible] = useScrollReveal();

	return (
		<section
			id='contact'
			className='py-24 bg-gradient-to-b from-white to-primary/10'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-16'>
					<div
						ref={ref}
						className={`scroll-reveal ${
							isVisible ? 'revealed' : ''
						}`}
					>
						<div className='inline-block mb-4'>
							<span className='bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide'>
								Contact
							</span>
						</div>
						<h2 className='text-5xl md:text-6xl font-bold text-foreground mb-6'>
							Empowering Your Body{' '}
							<span className='gradient-text'>
								Restoring Your Balance
							</span>
						</h2>
						<p className='text-xl text-gray-700 mb-12 leading-relaxed'>
							Take the first step towards balanced health and
							vitality. Schedule a consultation to discover how
							Traditional Chinese Medicine can transform your
							wellbeing.
						</p>

						<div className='space-y-8'>
							<div className='flex items-start space-x-4'>
								<div className='w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 layer-shadow'>
									<svg
										className='w-7 h-7 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
										/>
									</svg>
								</div>
								<div>
									<h3 className='font-bold text-foreground text-lg mb-1'>
										Location
									</h3>
									<p className='text-gray-600'>
										123 Wellness Street
										<br />
										Melbourne, VIC 3000
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-4'>
								<div className='w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0 layer-shadow'>
									<svg
										className='w-7 h-7 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
										/>
									</svg>
								</div>
								<div>
									<h3 className='font-bold text-foreground text-lg mb-1'>
										Phone
									</h3>
									<p className='text-gray-600'>
										(03) 1234 5678
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-4'>
								<div className='w-14 h-14 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0 layer-shadow'>
									<svg
										className='w-7 h-7 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
								</div>
								<div>
									<h3 className='font-bold text-foreground text-lg mb-1'>
										Hours
									</h3>
									<p className='text-gray-600'>
										Mon - Fri: 9:00 AM - 7:00 PM
										<br />
										Sat: 9:00 AM - 5:00 PM
										<br />
										Sun: Closed
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='bg-card layer-shadow-lg rounded-3xl p-8 md:p-10'>
						<h3 className='text-3xl font-bold text-foreground mb-8'>
							Book Your Consultation
						</h3>
						<form className='space-y-6'>
							<div>
								<label className='block text-sm font-semibold text-gray-700 mb-2'>
									Full Name
								</label>
								<input
									type='text'
									className='w-full px-4 py-3.5 rounded-xl layer-inset border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all'
									placeholder='John Smith'
								/>
							</div>
							<div>
								<label className='block text-sm font-semibold text-gray-700 mb-2'>
									Email Address
								</label>
								<input
									type='email'
									className='w-full px-4 py-3.5 rounded-xl layer-inset border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all'
									placeholder='john@example.com'
								/>
							</div>
							<div>
								<label className='block text-sm font-semibold text-gray-700 mb-2'>
									Phone Number
								</label>
								<input
									type='tel'
									className='w-full px-4 py-3.5 rounded-xl layer-inset border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all'
									placeholder='(03) 1234 5678'
								/>
							</div>
							<div>
								<label className='block text-sm font-semibold text-gray-700 mb-2'>
									Service of Interest
								</label>
								<select className='w-full px-4 py-3.5 rounded-xl layer-inset border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all'>
									<option>Acupuncture</option>
									<option>Herbal Medicine</option>
									<option>Tui Na Massage</option>
									<option>Dietary Therapy</option>
									<option>General Consultation</option>
								</select>
							</div>
							<div>
								<label className='block text-sm font-semibold text-gray-700 mb-2'>
									Message
								</label>
								<textarea
									rows={4}
									className='w-full px-4 py-3.5 rounded-xl layer-inset border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none'
									placeholder='Tell me about your health concerns...'
								></textarea>
							</div>
							<button
								type='submit'
								className='w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl uppercase text-sm tracking-wide transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
							>
								Submit Request
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

// Footer Component
export function Footer() {
	return (
		<footer className='bg-primary text-white py-16'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid md:grid-cols-4 gap-10 mb-12'>
					<div>
						<div className='flex items-center space-x-3 mb-4'>
							<div className='relative h-10 w-10 overflow-hidden rounded-full border border-white/20'>
								<Image
									src='/logo.jpg'
									alt='AcuWise Chinese Medicine'
									fill
									className='object-cover'
								/>
							</div>
							<div className='flex flex-col'>
								<span className='text-xl font-bold font-serif leading-none text-white'>
									AcuWise
								</span>
								<span className='text-[10px] tracking-widest uppercase text-white/70'>
									Chinese Medicine
								</span>
							</div>
						</div>
						<p className='text-gray-400 text-sm leading-relaxed'>
							Providing high-quality, local, organic supplements,
							vitamins and homeopathic remedies to empower health
							and wellbeing.
						</p>
					</div>

					<div>
						<h4 className='font-bold text-lg mb-4'>Quick Links</h4>
						<ul className='space-y-3 text-sm text-gray-400'>
							<li>
								<a
									href='#home'
									className='hover:text-primary transition-colors'
								>
									Home
								</a>
							</li>
							<li>
								<a
									href='#services'
									className='hover:text-primary transition-colors'
								>
									Services
								</a>
							</li>
							<li>
								<a
									href='#philosophy'
									className='hover:text-primary transition-colors'
								>
									Philosophy
								</a>
							</li>
							<li>
								<a
									href='#testimonials'
									className='hover:text-primary transition-colors'
								>
									Testimonials
								</a>
							</li>
							<li>
								<a
									href='#contact'
									className='hover:text-primary transition-colors'
								>
									Contact
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='font-bold text-lg mb-4'>Services</h4>
						<ul className='space-y-3 text-sm text-gray-400'>
							<li>Acupuncture</li>
							<li>Herbal Medicine</li>
							<li>Tui Na Massage</li>
							<li>Dietary Therapy</li>
							<li>Cupping Therapy</li>
						</ul>
					</div>

					<div>
						<h4 className='font-bold text-lg mb-4'>Connect</h4>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='w-11 h-11 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors hover:-translate-y-1 duration-300'
							>
								<span className='sr-only'>Facebook</span>
								<svg
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
								</svg>
							</a>
							<a
								href='#'
								className='w-11 h-11 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors hover:-translate-y-1 duration-300'
							>
								<span className='sr-only'>Instagram</span>
								<svg
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z'></path>
									<path d='M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z'></path>
									<circle
										cx='18.406'
										cy='5.594'
										r='1.44'
									></circle>
								</svg>
							</a>
							<a
								href='#'
								className='w-11 h-11 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors hover:-translate-y-1 duration-300'
							>
								<span className='sr-only'>LinkedIn</span>
								<svg
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'></path>
								</svg>
							</a>
						</div>
					</div>
				</div>

				<div className='border-t border-gray-700 pt-8 text-center text-sm text-gray-400'>
					<p>
						&copy; 2025 Accuwise Chinese Medicine. All rights
						reserved. | Privacy Policy | Terms of Service
					</p>
				</div>
			</div>
		</footer>
	);
}
