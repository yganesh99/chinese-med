'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Sections';
import { blogPosts, BlogPost } from '@/data/blogData';

export default function BlogPage() {
	const [activeSection, setActiveSection] = useState('blog');
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('All');

	const categories = [
		'All',
		...Array.from(new Set(blogPosts.map((post) => post.category))),
	];

	const filteredPosts = blogPosts.filter((post) => {
		const matchesSearch =
			post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesCategory =
			selectedCategory === 'All' || post.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	return (
		<main className='min-h-screen bg-background'>
			<Navigation
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>

			{/* Hero Section */}
			<section className='pt-32 pb-16 px-4 bg-primary text-white text-center rounded-b-[3rem] layer-shadow'>
				<div className='max-w-4xl mx-auto'>
					<h1 className='text-4xl md:text-6xl font-bold font-serif mb-6'>
						Health & Wellness Journal
					</h1>
					<p className='text-lg md:text-xl text-white/90 max-w-2xl mx-auto'>
						Insights, tips, and wisdom from the world of Traditional
						Chinese Medicine to support your journey to balance.
					</p>
				</div>
			</section>

			{/* Search & Filter Section */}
			<section className='py-12 px-4 max-w-7xl mx-auto'>
				<div className='flex flex-col md:flex-row justify-between items-center gap-6 mb-12'>
					{/* Search Bar */}
					<div className='w-full md:w-1/3 relative'>
						<input
							type='text'
							placeholder='Search articles...'
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className='w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm'
						/>
						<svg
							className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
							/>
						</svg>
					</div>

					{/* Category Filter */}
					<div className='flex flex-wrap justify-center gap-2'>
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
									selectedCategory === category
										? 'bg-primary text-white shadow-md transform -translate-y-0.5'
										: 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
								}`}
							>
								{category}
							</button>
						))}
					</div>
				</div>

				{/* Blog Grid */}
				{filteredPosts.length > 0 ? (
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{filteredPosts.map((post) => (
							<Link
								href={`/blog/${post.slug}`}
								key={post.slug}
								className='group'
							>
								<article className='bg-card rounded-3xl overflow-hidden layer-shadow h-full flex flex-col transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl'>
									<div className='relative h-64 overflow-hidden'>
										<Image
											src={post.image}
											alt={post.title}
											fill
											className='object-cover transition-transform duration-700 group-hover:scale-105'
										/>
										<div className='absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide layer-shadow'>
											{post.category}
										</div>
									</div>
									<div className='p-6 flex-grow flex flex-col'>
										<div className='text-sm text-gray-400 mb-3 flex items-center space-x-2'>
											<span>{post.date}</span>
											<span>•</span>
											<span>{post.author}</span>
										</div>
										<h2 className='text-xl font-bold text-primary mb-3 font-serif line-clamp-2'>
											{post.title}
										</h2>
										<p className='text-gray-600 mb-4 line-clamp-3 flex-grow'>
											{post.excerpt}
										</p>
										<div className='flex items-center text-accent font-semibold text-sm uppercase tracking-wide group-hover:underline'>
											Read Article
											<svg
												className='w-4 h-4 ml-1 transition-transform group-hover:translate-x-1'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='M17 8l4 4m0 0l-4 4m4-4H3'
												/>
											</svg>
										</div>
									</div>
								</article>
							</Link>
						))}
					</div>
				) : (
					<div className='text-center py-20'>
						<h3 className='text-2xl font-bold text-gray-400'>
							No articles found.
						</h3>
						<p className='text-gray-500 mt-2'>
							Try adjusting your search or category filter.
						</p>
						<button
							onClick={() => {
								setSearchQuery('');
								setSelectedCategory('All');
							}}
							className='mt-6 text-primary font-semibold hover:underline'
						>
							Clear all filters
						</button>
					</div>
				)}
			</section>

			<Footer />
		</main>
	);
}
