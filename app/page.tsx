'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import {
	Services,
	Philosophy,
	Testimonials,
	Footer,
} from '@/components/Sections';

export default function Home() {
	const [activeSection, setActiveSection] = useState('home');

	useEffect(() => {
		const handleScroll = () => {
			const sections = ['home', 'services', 'philosophy', 'testimonials'];
			const current = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});
			if (current) {
				setActiveSection(current);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='relative font-sans'>
			<Navigation
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
			<Hero />
			<Philosophy />
			{/* <Testimonials /> */}
			<Footer />
		</div>
	);
}
