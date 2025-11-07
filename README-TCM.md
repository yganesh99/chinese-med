# 自然 TCM Clinic - Traditional Chinese Medicine Website

A modern, elegant Next.js website for a Traditional Chinese Medicine clinic featuring refined design, smooth animations, and comprehensive service information.

## 🎨 Design Features

### Color Palette
- **Primary**: #7BA591 (Calming Jade Green) - More refined than the original #B2C8BA
- **Primary Dark**: #6A9380
- **Primary Light**: #A3C4B5
- **Secondary**: #A9CAD9 (Soft Blue)
- **Accent**: #D4A574 (Warm Gold)
- **Background**: #F4F8F7 (Light Mint)

### Typography
- **Primary Font**: Poppins (300, 400, 500, 600, 700, 800)
- **Chinese Font**: Noto Serif SC (400, 600, 700)

### Design Elements
- **Non-flat, layered design** with multi-level shadows
- **Smooth scroll-reveal animations** using Intersection Observer
- **Gradient text effects** for headings
- **Hover lift effects** with scale transformations
- **Backdrop blur effects** for modern glassmorphism
- **Rounded corners** (2xl, 3xl) for cards and buttons
- **Responsive design** with mobile-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd tcm-clinic

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## 📂 Project Structure

```
tcm-clinic/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx             # Main page with all sections
│   └── globals.css          # Global styles and animations
├── components/
│   ├── Navigation.tsx       # Sticky navigation with scroll detection
│   ├── Hero.tsx            # Hero section with gradient overlay
│   └── Sections.tsx        # Services, Philosophy, Testimonials, Contact, Footer
├── public/                 # Static assets
└── next.config.ts          # Next.js configuration
```

## 🎭 Components

### Navigation
- Sticky navigation with blur effect on scroll
- Active section highlighting
- Mobile-responsive hamburger menu
- Smooth scroll to sections

### Hero
- Full-screen hero with gradient overlay
- Animated background blobs
- Statistics section
- Call-to-action buttons

### Services
- 4 service cards with:
  - Acupuncture (针灸)
  - Herbal Medicine (中药)
  - Tui Na Massage (推拿)
  - Dietary Therapy (食疗)
- Hover effects with image zoom
- Scroll-reveal animations

### Philosophy
- Split layout with image and content
- 4 core principles with icons
- Chinese character overlay on image

### Testimonials
- Patient success stories
- 5-star rating display
- Avatar images
- Responsive grid layout

### Contact
- Contact information with icons
- Booking form with styled inputs
- Location, phone, and hours

### Footer
- Four-column layout
- Quick links and services
- Social media icons
- Copyright information

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: #7BA591;        /* Main brand color */
  --primary-dark: #6A9380;   /* Darker shade for hovers */
  --primary-light: #A3C4B5;  /* Lighter shade */
  --secondary: #A9CAD9;      /* Secondary accent */
  --accent: #D4A574;         /* Highlight color */
}
```

### Updating Content
Modify the data arrays in component files:
- Services: `components/Sections.tsx` - `services` array
- Philosophy: `components/Sections.tsx` - `principles` array
- Testimonials: `components/Sections.tsx` - `testimonials` array

### Adding Images
Place images in the `public` folder and update image paths, or use external URLs with proper configuration in `next.config.ts`.

## 🔧 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Poppins & Noto Serif SC
- **React Hooks** - useState, useEffect, useRef
- **Intersection Observer API** - Scroll animations

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML elements
- Alt text for all images
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast text

## 📄 License

This project is created for demonstration purposes.

## 🙏 Credits

- Images from [Unsplash](https://unsplash.com)
- Avatars from [Pravatar](https://i.pravatar.cc)
- Fonts from [Google Fonts](https://fonts.google.com)

---

Built with ❤️ using Next.js and Tailwind CSS
