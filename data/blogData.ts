export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	author: string;
	date: string;
	category: string;
	image: string;
}

export const blogPosts: BlogPost[] = [
	{
		slug: 'benefits-of-acupuncture-for-stress',
		title: 'Finding Balance: The Benefits of Acupuncture for Stress',
		excerpt:
			'Discover how ancient acupuncture techniques can help regulate your nervous system and bring calm to your chaotic modern life.',
		content: `
      <p>In our fast-paced modern world, stress has become a constant companion for many. From work deadlines to family responsibilities, the pressure can feel overwhelming. Traditional Chinese Medicine (TCM) offers a time-tested solution: acupuncture.</p>
      
      <h3>How Acupuncture Combats Stress</h3>
      <p>Acupuncture works by stimulating specific points on the body, known as acupoints. This stimulation triggers the release of endorphins, the body's natural painkillers and mood elevators. It also helps to regulate the autonomic nervous system, shifting the body from a "fight or flight" sympathetic state to a "rest and digest" parasympathetic state.</p>
      
      <h3>The Science Behind the Calm</h3>
      <p>Research suggests that acupuncture can lower cortisol levels, the primary stress hormone. By restoring balance to the body's energy flow, or Qi, acupuncture addresses the root cause of stress rather than just masking the symptoms.</p>
      
      <h3>What to Expect During a Session</h3>
      <p>A typical session involves the insertion of fine, sterile needles into specific points. Most patients feel little to no pain, often describing a sensation of heaviness or warmth. Many even fall asleep during treatment due to the deep state of relaxation achieved.</p>
      
      <p>If you're looking for a natural, drug-free way to manage stress and anxiety, acupuncture might be the key to unlocking a more balanced, peaceful you.</p>
    `,
		author: 'Dr. Semira',
		date: 'October 15, 2024',
		category: 'Acupuncture',
		image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop',
	},
	{
		slug: 'understanding-cupping-therapy',
		title: 'Demystifying Cupping Therapy: More Than Just Marks',
		excerpt:
			'Cupping therapy has gained popularity among athletes and celebrities, but what exactly does it do? Learn about the deep healing benefits of this ancient practice.',
		content: `
      <p>You may have seen the circular marks on the backs of Olympic swimmers or Hollywood stars. These marks are the tell-tale signs of cupping therapy, an ancient healing modality that has found its way into modern wellness routines.</p>
      
      <h3>What is Cupping?</h3>
      <p>Cupping involves placing glass, bamboo, or plastic cups on the skin and creating a vacuum seal. This suction draws fluid into the treated area, expanding the tiny blood vessels (capillaries) under the skin. The body treats the treated area like an injury, sending more blood to the area to stimulate the natural healing process.</p>
      
      <h3>Benefits Beyond the Surface</h3>
      <ul>
        <li><strong>Pain Relief:</strong> Cupping is excellent for relieving back and neck pain, stiff muscles, and anxiety.</li>
        <li><strong>Improved Circulation:</strong> The suction helps loosen muscles and encourage blood flow.</li>
        <li><strong>Detoxification:</strong> It is believed to help remove toxins and promote the flow of lymphatic fluid.</li>
      </ul>
      
      <h3>Does it Hurt?</h3>
      <p>While the marks may look painful, the treatment itself is generally not. Most people describe a sensation of pressure or a "reverse massage" feeling. The marks are not bruises in the traditional sense and usually fade within a few days to a week.</p>
    `,
		author: 'Dr. Semira',
		date: 'November 2, 2024',
		category: 'Wellness',
		image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=600&fit=crop',
	},
	{
		slug: 'seasonal-eating-tcm',
		title: 'Eating with the Seasons: A TCM Guide to Nutrition',
		excerpt:
			'Aligning your diet with the changing seasons is a core principle of TCM. Find out how to nourish your body appropriately throughout the year.',
		content: `
      <p>In Traditional Chinese Medicine, food is medicine. But it's not just about <em>what</em> you eat, but <em>when</em> you eat it. Eating in harmony with the seasons is essential for maintaining health and preventing illness.</p>
      
      <h3>Spring: Liver & Wood Element</h3>
      <p>Spring is a time of renewal. It's associated with the Liver and the Wood element. Focus on fresh greens, sprouts, and sour foods to support liver detoxification and energy flow.</p>
      
      <h3>Summer: Heart & Fire Element</h3>
      <p>The heat of summer corresponds to the Heart and Fire element. Cooling foods like cucumber, watermelon, and light stir-fries are beneficial. However, TCM advises against too much raw or ice-cold food, which can dampen digestion.</p>
      
      <h3>Autumn: Lung & Metal Element</h3>
      <p>As the air cools, we move into the Metal element, associated with the Lungs. Pungent foods like garlic, ginger, and onions help protect the body from colds and flus. Moistening foods like pears and honey are also great for dry skin and throats.</p>
      
      <h3>Winter: Kidney & Water Element</h3>
      <p>Winter is a time for rest and conservation, linked to the Kidneys. Warm, hearty soups, stews, roasted root vegetables, and kidney beans nourish the body's deep energy reserves.</p>
    `,
		author: 'Dr. Semira',
		date: 'December 10, 2024',
		category: 'Nutrition',
		image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
	},
	{
		slug: 'intro-to-herbal-medicine',
		title: 'Nature’s Pharmacy: An Introduction to Herbal Medicine',
		excerpt:
			'Explore the power of plants. Herbal medicine uses custom formulas to address the root cause of ailments and restore systemic balance.',
		content: `
      <p>Herbal medicine is one of the pillars of Traditional Chinese Medicine. Unlike Western pharmacology, which often isolates active ingredients, TCM uses whole plants—roots, leaves, flowers, and stems—combined in complex formulas.</p>
      
      <h3>Customized for You</h3>
      <p>No two herbal prescriptions are exactly alike. A formula is tailored to the individual's specific constitution and current health condition. For example, two people with a headache might receive completely different herbal blends depending on the underlying cause (e.g., stress vs. sinus congestion).</p>
      
      <h3>Types of Herbs</h3>
      <p>TCM utilizes thousands of medicinal substances. Common herbs include:</p>
      <ul>
        <li><strong>Ginseng (Ren Shen):</strong> Known for boosting energy and vitality.</li>
        <li><strong>Astragalus (Huang Qi):</strong> Used to strengthen the immune system.</li>
        <li><strong>Ginger (Sheng Jiang):</strong> Warms the body and aids digestion.</li>
        <li><strong>Goji Berries (Gou Qi Zi):</strong> Nourishes the blood and supports eye health.</li>
      </ul>
      
      <p>Herbal medicine is a powerful way to support your body's natural healing abilities gently and effectively.</p>
    `,
		author: 'Dr. Semira',
		date: 'January 5, 2025',
		category: 'Herbal Medicine',
		image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&h=600&fit=crop',
	},
	{
		slug: 'gua-sha-for-facial-rejuvenation',
		title: 'Glow from Within: Gua Sha for Facial Rejuvenation',
		excerpt:
			'Unlock the secret to radiant skin with Gua Sha. This gentle massage technique enhances circulation and promotes natural collagen production.',
		content: `
      <p>Forget expensive creams and invasive procedures. The secret to a youthful glow might just be a simple stone tool. Facial Gua Sha is taking the beauty world by storm, but its roots go back heavily in TCM.</p>
      
      <h3>The "Natural Facelift"</h3>
      <p>Facial Gua Sha involves using a jade or rose quartz tool to gently stroke the face and neck. This action:</p>
      <ul>
        <li>Boosts lymphatic drainage, reducing puffiness.</li>
        <li>Increases blood circulation, bringing oxygen and nutrients to skin cells.</li>
        <li>Relieves muscle tension in the jaw and brow, which can cause wrinkles.</li>
        <li>Stimulates collagen production for firmer skin.</li>
      </ul>
      
      <h3>A Ritual of Self-Care</h3>
      <p>Beyond the physical benefits, facial Gua Sha is a meditative practice. Taking five minutes a day to connect with yourself and care for your skin can be incredibly grounding and stress-relieving.</p>
    `,
		author: 'Dr. Semira',
		date: 'January 20, 2025',
		category: 'Wellness',
		image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop',
	},
];
