'use client';

import Navigation from '@/components/Navigation';
import { Contact, Footer } from '@/components/Sections';
import { useState } from 'react';

export default function ContactPage() {
	const [activeSection, setActiveSection] = useState('contact');

	return (
		<main className='min-h-screen bg-background'>
			<Navigation
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
			<div className='pt-24'>
				<Contact />
			</div>
			<Footer />
		</main>
	);
}
