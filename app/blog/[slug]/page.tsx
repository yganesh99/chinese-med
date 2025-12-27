'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Sections';
import { blogPosts } from '@/data/blogData';

export default function BlogPostPage() {
	const params = useParams();
	const router = useRouter();
	const [activeSection, setActiveSection] = useState('blog');
	const [post, setPost] = useState<(typeof blogPosts)[0] | null>(null);

	useEffect(() => {
		if (params.slug) {
			const foundPost = blogPosts.find((p) => p.slug === params.slug);
			if (foundPost) {
				setPost(foundPost);
			} else {
				router.push('/blog'); // Redirect to blog index if not found
			}
		}
	}, [params.slug, router]);

	if (!post) {
		return (
			<div className='min-h-screen flex items-center justify-center bg-background'>
				<div className='animate-pulse flex flex-col items-center'>
					<div className='h-8 w-64 bg-gray-200 rounded mb-4'></div>
					<div className='h-4 w-48 bg-gray-200 rounded'></div>
				</div>
			</div>
		);
	}

	return (
		<main className='min-h-screen bg-background'>
			<Navigation
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>

			<article>
				{/* Hero Image */}
				<div className='relative h-[60vh] w-full'>
					<Image
						src={post.image}
						alt={post.title}
						fill
						className='object-cover'
						priority
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent'></div>
					<div className='absolute bottom-0 left-0 right-0 p-4 md:p-12 max-w-4xl mx-auto'>
						<div className='inline-block bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-4 shadow-lg'>
							{post.category}
						</div>
						<h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6 leading-tight shadow-black drop-shadow-lg'>
							{post.title}
						</h1>
						<div className='flex items-center space-x-4 text-white/90 text-sm md:text-base font-medium'>
							<div className='flex items-center'>
								<div className='w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-2 text-primary font-bold'>
									{post.author.charAt(0)}
								</div>
								<span>{post.author}</span>
							</div>
							<span className='opacity-50'>|</span>
							<span>{post.date}</span>
						</div>
					</div>
				</div>

				{/* Article Content */}
				<div className='max-w-3xl mx-auto px-4 py-16'>
					{/* Back Link */}
					<div className='mb-8'>
						<Link
							href='/blog'
							className='inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group'
						>
							<svg
								className='w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M15 19l-7-7 7-7'
								/>
							</svg>
							Back to Articles
						</Link>
					</div>

					<div
						className='prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-green max-w-none'
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>

					{/* Share/Tags (Optional Placeholder) */}
					<div className='mt-12 pt-8 border-t border-gray-200 flex justify-between items-center'>
						<span className='font-bold text-gray-700'>
							Share this article
						</span>
						<div className='flex space-x-4'>
							<span className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-colors'>
								<span className='sr-only'>Facebook</span>
								<svg
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
								</svg>
							</span>
							<span className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 cursor-pointer hover:bg-blue-100 hover:text-blue-400 transition-colors'>
								<span className='sr-only'>Twitter</span>
								<svg
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
								</svg>
							</span>
							<span className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 cursor-pointer hover:bg-pink-100 hover:text-pink-600 transition-colors'>
								<span className='sr-only'>Pinterest</span>
								<svg
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.852-2.433-4.587 0-3.725 2.705-7.161 7.807-7.161 4.102 0 7.295 2.923 7.295 6.843 0 4.085-2.575 7.373-6.148 7.373-1.2 0-2.333-.623-2.722-1.36l-.775 2.956c-.281 1.085-1.041 2.443-1.549 3.273 1.171.364 2.424.561 3.731.561 6.638 0 12.017-5.383 12.017-12.017C24.035 5.367 18.656 0 12.017 0z' />
								</svg>
							</span>
						</div>
					</div>
				</div>
			</article>

			<Footer />
		</main>
	);
}
