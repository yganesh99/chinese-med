import type { Metadata } from 'next';
import { Poppins, Noto_Serif_SC } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
	display: 'swap',
});

const notoSerifSC = Noto_Serif_SC({
	variable: '--font-noto-serif-sc',
	subsets: ['latin'],
	weight: ['400', '600', '700'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'AcuWise - Chinese Medicine',
	description:
		'Experience ancient healing wisdom for modern wellness. Traditional Chinese Medicine treatments including acupuncture, herbal medicine, and holistic care.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='scroll-smooth'
		>
			<body
				className={`${poppins.variable} ${notoSerifSC.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
