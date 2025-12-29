'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

interface NavigationProps {
	activeSection: string;
	setActiveSection: (section: string) => void;
}

export default function Navigation({
	activeSection,
	setActiveSection,
}: NavigationProps) {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = ['Home', 'About', 'Services', 'Blog', 'Contact'];

	const pathname = usePathname();
	const router = useRouter();

	const handleNavigation = (sectionId: string) => {
		if (sectionId === 'home') {
			if (pathname !== '/') {
				router.push('/');
			} else {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}
			return;
		}

		if (sectionId === 'services') {
			router.push('/services');
			return;
		}

		if (sectionId === 'about') {
			router.push('/about');
			return;
		}

		if (sectionId === 'blog') {
			router.push('/blog');
			return;
		}

		// For other sections (Philosophy, Testimonials)
		if (sectionId === 'contact') {
			router.push('/contact');
			return;
		}

		if (pathname !== '/') {
			router.push('/#' + sectionId);
		} else {
			const element = document.getElementById(sectionId);
			if (element) {
				const offset = 80;
				const elementPosition = element.getBoundingClientRect().top;
				const offsetPosition =
					elementPosition + window.pageYOffset - offset;
				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth',
				});
			}
		}
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary/95 ${
				scrolled
					? 'backdrop-blur-xl layer-shadow py-3 shadow-lg'
					: 'py-6'
			}`}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center'>
					<div
						className='flex items-center space-x-3 cursor-pointer group'
						onClick={() => handleNavigation('home')}
					>
						<div className='relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/20 transition-transform group-hover:scale-105'>
							<Image
								src='/logo.jpg'
								alt='AcuWise Chinese Medicine'
								fill
								className='object-cover'
							/>
						</div>
						<div className='flex flex-col'>
							<span className='text-lg font-bold font-serif leading-none text-white'>
								AcuWise
							</span>
							<span className='text-xs tracking-widest uppercase text-white/80'>
								Chinese Medicine
							</span>
						</div>
					</div>

					{/* Desktop Navigation */}
					<div className='hidden md:flex space-x-8'>
						{navItems.map((item) => (
							<button
								key={item}
								onClick={() => {
									const sectionId = item.toLowerCase();
									setActiveSection(sectionId);
									handleNavigation(sectionId);
								}}
								className={`font-medium transition-all duration-300 pb-1 ${
									activeSection === item.toLowerCase()
										? 'text-accent border-b-2 border-accent'
										: 'text-white/90 hover:text-white'
								}`}
							>
								{item}
							</button>
						))}
					</div>

					<div className='hidden md:block'>
						<Link href='/contact'>
							<button className='bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 px-6 rounded-full uppercase text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
								Book Now
							</button>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						className='md:hidden text-white hover:text-primary transition-colors'
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label='Toggle menu'
					>
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							{mobileMenuOpen ? (
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							) : (
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div className='md:hidden mt-4 pb-4 fade-in'>
						{navItems.map((item) => (
							<button
								key={item}
								onClick={() => {
									const sectionId = item.toLowerCase();
									setActiveSection(sectionId);
									setMobileMenuOpen(false);
									handleNavigation(sectionId);
								}}
								className='block w-full text-left py-3 px-4 text-white hover:bg-primary hover:text-white transition-colors rounded-lg mb-1'
							>
								{item}
							</button>
						))}
						<Link
							href='/contact'
							className='block mt-2'
						>
							<button className='w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-lg uppercase text-sm tracking-wide transition-colors'>
								Book Now
							</button>
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
}
