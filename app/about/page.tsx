'use client';

import Navigation from '@/components/Navigation';
import About from '@/components/About';
import { Footer } from '@/components/Sections';
import { useState } from 'react';

export default function AboutPage() {
	const [activeSection, setActiveSection] = useState('about');

	return (
		<main className='min-h-screen bg-background'>
			<Navigation
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
			<div className='pt-24'>
				<About />
			</div>
			<Footer />
		</main>
	);
}
