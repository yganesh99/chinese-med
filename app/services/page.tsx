'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { useState } from 'react';

export default function ServicesPage() {
	const [activeSection, setActiveSection] = useState('services');

	return (
		<main className='min-h-screen bg-background'>
			<Navigation
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
			{/* Hero Section */}
			<section className='relative h-[60vh] flex items-center justify-center overflow-hidden'>
				<div className='absolute inset-0 bg-primary/90 z-10'></div>
				<div className='absolute inset-0'>
					<Image
						src='https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=800&fit=crop'
						alt='Services Hero'
						fill
						className='object-cover'
					/>
				</div>
				<div className='relative z-20 text-center px-4'>
					<h1 className='text-5xl md:text-7xl font-bold text-white mb-6 font-serif'>
						Services
					</h1>
					<p className='text-xl text-white/90 max-w-2xl mx-auto'>
						Traditional healing modalities tailored to your unique
						needs
					</p>
				</div>
			</section>

			{/* Cupping Section */}
			<section
				id='cupping'
				className='py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'
			>
				<div className='grid md:grid-cols-2 gap-12 items-center'>
					<div className='grid grid-cols-2 gap-4 h-[500px]'>
						<div className='relative h-full rounded-3xl overflow-hidden layer-shadow group'>
							<Image
								src='/services/cupping-3.jpg'
								alt='Cupping Therapy Session'
								fill
								className='object-cover transition-transform duration-700 group-hover:scale-105'
							/>
						</div>
						<div className='flex flex-col gap-4 h-full'>
							<div className='relative h-1/2 rounded-3xl overflow-hidden layer-shadow group'>
								<Image
									src='/services/cupping-1.jpg'
									alt='Fire Cupping Technique'
									fill
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>
							</div>
							<div className='relative h-1/2 rounded-3xl overflow-hidden layer-shadow group'>
								<Image
									src='/services/cupping-2.jpg'
									alt='Cupping Treatment'
									fill
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>
							</div>
						</div>
					</div>
					<div>
						<div className='inline-block mb-4'>
							<span className='bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide'>
								Cupping Therapy
							</span>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold text-primary mb-6 font-serif'>
							How Cupping Works
						</h2>
						<p className='text-lg text-gray-700 mb-6 leading-relaxed'>
							Over life we are constantly using our muscles, our
							body is a machine that keeps us going and just like
							a car we need maintenance. Overuse of our muscles
							over time causes tight muscles which may lead to
							pain reduced mobility.
						</p>
						<p className='text-lg text-gray-700 mb-8 leading-relaxed'>
							Cupping increases local blood flow, loosens tight
							muscles, and helps release old stagnation. Many
							people may experience a deep sense of relaxation
							during and after treatment.
						</p>

						<div className='bg-card p-8 rounded-3xl layer-shadow'>
							<h3 className='text-xl font-bold text-primary mb-4'>
								Benefits of Cupping
							</h3>
							<ul className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
								{[
									'Muscle tension and stiffness',
									'Back, neck, and shoulder pain',
									'Sports recovery',
									'Stress and fatigue',
									'Headaches and migraines',
									'Poor circulation',
									'Detoxification support',
								].map((item, i) => (
									<li
										key={i}
										className='flex items-center space-x-2 text-gray-700'
									>
										<span className='w-2 h-2 bg-accent rounded-full'></span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Acupuncture Section */}
			<section
				id='acupuncture'
				className='py-20 bg-card'
			>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold text-primary mb-6 font-serif'>
							Acupuncture
						</h2>
						<p className='text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed'>
							Acupuncture is a core modality of Traditional
							Chinese Medicine (TCM) that uses fine, sterile
							needles to stimulate specific points on the body.
							This gentle technique helps restore the flow of Qi,
							balance internal systems, and support the body’s
							natural ability to heal. Each treatment is tailored
							to your individual needs based on a detailed TCM
							assessment.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						{/* Card 1 */}
						<div className='bg-white p-8 rounded-3xl layer-shadow hover:-translate-y-2 transition-transform duration-300'>
							<h3 className='text-2xl font-bold text-primary mb-4'>
								Chronic & Acute Pain Relief
							</h3>
							<p className='text-gray-600 mb-4 text-sm'>
								Acupuncture is widely used to address both
								long-standing and sudden pain by reducing
								inflammation, improving circulation, and
								relaxing tight muscles. By promoting the smooth
								flow of Qi and blood, acupuncture can help
								relieve:
							</p>
							<ul className='space-y-2'>
								{[
									'Back, neck, and shoulder pain',
									'Sciatica and nerve pain',
									'Jaw pain, TMJ',
									'Headaches and migraines',
									'Sports injuries and muscle strains',
								].map((item, i) => (
									<li
										key={i}
										className='flex items-start space-x-2 text-gray-700 text-sm'
									>
										<span className='w-1.5 h-1.5 bg-primary rounded-full mt-1.5'></span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Card 2 */}
						<div className='bg-white p-8 rounded-3xl layer-shadow hover:-translate-y-2 transition-transform duration-300'>
							<h3 className='text-2xl font-bold text-primary mb-4'>
								Women’s Health
							</h3>
							<p className='text-gray-600 mb-4 text-sm'>
								Acupuncture offers natural support for a wide
								range of women’s health concerns by regulating
								hormonal balance, improving circulation, and
								calming the nervous system. Treatment plans are
								individualized to address each stage of life.
							</p>
							<ul className='space-y-2'>
								{[
									'PMS and menstrual irregularities',
									'Hormonal imbalances',
									'Fertility support',
									'Pregnancy-related discomfort',
									'Perimenopause and menopause',
								].map((item, i) => (
									<li
										key={i}
										className='flex items-start space-x-2 text-gray-700 text-sm'
									>
										<span className='w-1.5 h-1.5 bg-primary rounded-full mt-1.5'></span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Card 3 */}
						<div className='bg-white p-8 rounded-3xl layer-shadow hover:-translate-y-2 transition-transform duration-300'>
							<h3 className='text-2xl font-bold text-primary mb-4'>
								Stress Relief & Emotional Well-Being
							</h3>
							<p className='text-gray-600 mb-4 text-sm'>
								Acupuncture has a calming effect on the mind and
								nervous system, making it a powerful therapy for
								stress management. By regulating the body’s
								stress response, treatments may help with:
							</p>
							<ul className='space-y-2'>
								{[
									'Anxiety and tension',
									'Insomnia and disrupted sleep',
									'Emotional overwhelm',
									'Fatigue and burnout',
								].map((item, i) => (
									<li
										key={i}
										className='flex items-start space-x-2 text-gray-700 text-sm'
									>
										<span className='w-1.5 h-1.5 bg-primary rounded-full mt-1.5'></span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 h-[500px] max-w-6xl mx-auto'>
						<div className='flex flex-col gap-4 h-full'>
							<div className='relative h-1/2 rounded-3xl overflow-hidden layer-shadow group'>
								<Image
									src='/services/acupuncture-2.jpg'
									alt='Acupuncture on Arm'
									fill
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>
							</div>
							<div className='relative h-1/2 rounded-3xl overflow-hidden layer-shadow group'>
								<Image
									src='/services/acupuncture-3.jpg'
									alt='Auriculotherapy'
									fill
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>
							</div>
						</div>
						<div className='relative h-full rounded-3xl overflow-hidden layer-shadow group'>
							<Image
								src='/services/acupuncture-1.jpg'
								alt='Facial Acupuncture'
								fill
								className='object-cover transition-transform duration-700 group-hover:scale-105'
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Gua Sha Section */}
			<section
				id='guasha'
				className='py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'
			>
				{/* Body & Neck */}
				<div className='grid md:grid-cols-2 gap-16 items-center mb-20'>
					<div className='order-2 md:order-1'>
						<div className='inline-block mb-4'>
							<span className='bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide'>
								Gua Sha Therapy
							</span>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold text-primary mb-6 font-serif'>
							Gua Sha – Body & Neck
						</h2>
						<p className='text-lg text-gray-700 mb-6 leading-relaxed'>
							Gua Sha is a traditional Chinese medicine (TCM)
							therapy that uses a smooth-edged tool to gently
							“scrape” the skin, promoting circulation, releasing
							muscle tension, and encouraging the movement of Qi
							and blood. While facial Gua Sha is primarily
							cosmetic, body and neck Gua Sha is a therapeutic
							treatment focused on relieving pain, stiffness, and
							stagnation.
						</p>
						<div className='bg-card p-8 rounded-3xl layer-shadow border-l-4 border-primary'>
							<h3 className='text-xl font-bold text-primary mb-4'>
								Benefits of Body & Neck Gua Sha
							</h3>
							<ul className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
								{[
									'Neck and shoulder stiffness',
									'Upper and lower back pain',
									'Muscle knots and chronic tension',
									'Limited range of motion',
									'Headaches from tension',
									'Postural strain',
									'Recovery from exertion',
								].map((item, i) => (
									<li
										key={i}
										className='flex items-center space-x-2 text-gray-700'
									>
										<span className='w-2 h-2 bg-accent rounded-full'></span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className='order-1 md:order-2 relative h-[500px] rounded-3xl overflow-hidden layer-shadow group'>
						<Image
							src='/services/guasha-1.jpg'
							alt='Gua Sha Body Therapy'
							fill
							className='object-cover transition-transform duration-700 group-hover:scale-105'
						/>
					</div>
				</div>

				{/* Cosmetic */}
				<div className='grid md:grid-cols-2 gap-16 items-center'>
					<div className='relative h-[500px] rounded-3xl overflow-hidden layer-shadow group'>
						<Image
							src='https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop'
							alt='Cosmetic Gua Sha'
							fill
							className='object-cover transition-transform duration-700 group-hover:scale-105'
						/>
					</div>
					<div>
						<h2 className='text-4xl md:text-5xl font-bold text-primary mb-6 font-serif'>
							Cosmetic Gua Sha
						</h2>
						<h3 className='text-2xl text-accent mb-4 font-serif italic'>
							Facial Massage
						</h3>
						<p className='text-lg text-gray-700 mb-6 leading-relaxed'>
							Cosmetic Gua Sha is a gentle, rejuvenating facial
							massage technique rooted in Traditional Chinese
							Medicine (TCM). Using a smooth, crystal stone gua
							sha the practitioner guides light, flowing strokes
							across the face to promote circulation, release
							facial tension, and support a naturally radiant
							complexion.
						</p>

						<div className='bg-card p-8 rounded-3xl layer-shadow'>
							<h3 className='text-xl font-bold text-primary mb-4'>
								Benefits of Cosmetic Gua Sha
							</h3>
							<ul className='space-y-4'>
								<li className='flex items-start space-x-3 text-gray-700'>
									<div className='w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs'>
										1
									</div>
									<span>
										Promotes microcirculation by up to{' '}
										<span className='font-bold text-primary'>
											400%
										</span>{' '}
										for 25 minutes after the treatment
									</span>
								</li>
								<li className='flex items-start space-x-3 text-gray-700'>
									<div className='w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs'>
										2
									</div>
									<span>
										Stimulates HO-1 hormone which produces
										antioxidant and anti-inflammatory
										molecules resulting in firmer skin and
										even skin tone.
									</span>
								</li>
								<li className='flex items-start space-x-3 text-gray-700'>
									<div className='w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs'>
										3
									</div>
									<span>
										Soothing, deeply relaxing, and ideal for
										naturally rejuvenating your face.
									</span>
								</li>
							</ul>
						</div>

						<div className='mt-8'>
							<Link href='/contact'>
								<button className='bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full uppercase text-sm tracking-wide transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
									Book A Session
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
