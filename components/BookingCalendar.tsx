'use client';

import { useState } from 'react';

type ViewState = 'calendar' | 'time' | 'form' | 'success';

export default function BookingCalendar() {
	const [view, setView] = useState<ViewState>('calendar');
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [selectedTime, setSelectedTime] = useState<string | null>(null);
	const [currentMonth, setCurrentMonth] = useState(new Date());

	// Calendar Logic
	const getDaysInMonth = (date: Date) => {
		const year = date.getFullYear();
		const month = date.getMonth();
		const days = new Date(year, month + 1, 0).getDate();
		return Array.from(
			{ length: days },
			(_, i) => new Date(year, month, i + 1)
		);
	};

	const getFirstDayOfMonth = (date: Date) => {
		return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
	};

	const prevMonth = () => {
		setCurrentMonth(
			new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
		);
	};

	const nextMonth = () => {
		setCurrentMonth(
			new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
		);
	};

	const handleDateClick = (date: Date) => {
		// Prevent selecting past dates
		if (date < new Date(new Date().setHours(0, 0, 0, 0))) return;

		setSelectedDate(date);
		setView('time');
	};

	const handleTimeSelect = (time: string) => {
		setSelectedTime(time);
		setView('form');
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Simulate API call
		setTimeout(() => setView('success'), 1000);
	};

	// Mock Time Slots
	const timeSlots = [
		'09:00 AM',
		'10:00 AM',
		'11:00 AM',
		'01:00 PM',
		'02:00 PM',
		'03:00 PM',
		'04:00 PM',
	];

	const days = getDaysInMonth(currentMonth);
	const firstDay = getFirstDayOfMonth(currentMonth);
	const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	return (
		<div className='bg-white rounded-3xl p-6 md:p-8 layer-shadow-lg h-full'>
			{view === 'calendar' && (
				<div className='animate-fadeIn'>
					<div className='flex items-center justify-between mb-8'>
						<h3 className='text-2xl font-bold text-foreground'>
							{currentMonth.toLocaleString('default', {
								month: 'long',
								year: 'numeric',
							})}
						</h3>
						<div className='flex gap-2'>
							<button
								onClick={prevMonth}
								className='p-2 hover:bg-gray-100 rounded-full transition-colors'
							>
								<svg
									className='w-5 h-5 text-gray-600'
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
							</button>
							<button
								onClick={nextMonth}
								className='p-2 hover:bg-gray-100 rounded-full transition-colors'
							>
								<svg
									className='w-5 h-5 text-gray-600'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 5l7 7-7 7'
									/>
								</svg>
							</button>
						</div>
					</div>

					<div className='grid grid-cols-7 gap-2 text-center mb-4'>
						{weekDays.map((day) => (
							<div
								key={day}
								className='text-xs font-semibold text-gray-400 uppercase tracking-wider py-2'
							>
								{day}
							</div>
						))}
					</div>

					<div className='grid grid-cols-7 gap-2'>
						{Array(firstDay)
							.fill(null)
							.map((_, i) => (
								<div key={`empty-${i}`} />
							))}
						{days.map((date, i) => {
							const isToday =
								date.toDateString() ===
								new Date().toDateString();
							const isPast =
								date <
								new Date(new Date().setHours(0, 0, 0, 0));
							const isSelected =
								selectedDate?.toDateString() ===
								date.toDateString();

							return (
								<button
									key={i}
									disabled={isPast}
									onClick={() => handleDateClick(date)}
									className={`
										aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200
										${isSelected ? 'bg-primary text-white shadow-lg scale-110' : ''}
										${
											isToday && !isSelected
												? 'border-2 border-primary text-primary font-bold'
												: ''
										}
										${!isPast && !isSelected ? 'hover:bg-primary/10 hover:text-primary' : ''}
										${isPast ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700'}
									`}
								>
									{date.getDate()}
								</button>
							);
						})}
					</div>
					<p className='text-center text-gray-500 text-sm mt-8'>
						Select a date to check availability
					</p>
				</div>
			)}

			{view === 'time' && (
				<div className='animate-fadeIn h-full flex flex-col'>
					<button
						onClick={() => setView('calendar')}
						className='flex items-center text-gray-500 hover:text-primary mb-6 text-sm font-medium transition-colors'
					>
						<svg
							className='w-4 h-4 mr-1'
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
						Back to Calendar
					</button>

					<h3 className='text-2xl font-bold text-foreground mb-2'>
						Select Time
					</h3>
					<p className='text-gray-500 mb-8'>
						For{' '}
						{selectedDate?.toLocaleDateString('en-US', {
							weekday: 'long',
							month: 'long',
							day: 'numeric',
						})}
					</p>

					<div className='grid grid-cols-2 gap-4'>
						{timeSlots.map((time) => (
							<button
								key={time}
								onClick={() => handleTimeSelect(time)}
								className='py-3 px-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-200 text-gray-700 font-medium'
							>
								{time}
							</button>
						))}
					</div>
				</div>
			)}

			{view === 'form' && (
				<div className='animate-fadeIn h-full flex flex-col'>
					<button
						onClick={() => setView('time')}
						className='flex items-center text-gray-500 hover:text-primary mb-6 text-sm font-medium transition-colors'
					>
						<svg
							className='w-4 h-4 mr-1'
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
						Back to Times
					</button>

					<h3 className='text-2xl font-bold text-foreground mb-6'>
						Final Details
					</h3>

					<div className='bg-primary/5 rounded-xl p-4 mb-6 flex gap-4 items-center'>
						<div className='bg-white p-3 rounded-lg shadow-sm text-primary'>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
								/>
							</svg>
						</div>
						<div>
							<p className='text-sm font-semibold text-gray-900'>
								{selectedDate?.toLocaleDateString('en-US', {
									weekday: 'short',
									month: 'short',
									day: 'numeric',
								})}
							</p>
							<p className='text-sm text-gray-600'>
								{selectedTime}
							</p>
						</div>
					</div>

					<form
						onSubmit={handleSubmit}
						className='space-y-4'
					>
						<div>
							<label className='block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide'>
								Name
							</label>
							<input
								required
								type='text'
								className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all'
								placeholder='John Doe'
							/>
						</div>
						<div>
							<label className='block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide'>
								Email
							</label>
							<input
								required
								type='email'
								className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all'
								placeholder='john@example.com'
							/>
						</div>
						<div>
							<label className='block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide'>
								Phone
							</label>
							<input
								required
								type='tel'
								className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all'
								placeholder='(555) 123-4567'
							/>
						</div>
						<div>
							<label className='block text-sm font-semibold text-gray-700 mb-2'>
								Service of Interest
							</label>
							<select className='w-full px-4 py-3.5 rounded-xl layer-inset border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all'>
								<option>Acupuncture</option>
								<option>Herbal Medicine</option>
								<option>Tui Na Massage</option>
								<option>Dietary Therapy</option>
								<option>General Consultation</option>
							</select>
						</div>
						<div>
							<label className='block text-sm font-semibold text-gray-700 mb-2'>
								Message
							</label>
							<textarea
								rows={4}
								className='w-full px-4 py-3.5 rounded-xl layer-inset border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none'
								placeholder='Tell me about your health concerns...'
							></textarea>
						</div>

						<button
							type='submit'
							className='w-full bg-primary text-white font-bold py-4 rounded-xl mt-4 hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300'
						>
							Confirm Booking
						</button>
					</form>
				</div>
			)}

			{view === 'success' && (
				<div className='animate-fadeIn h-full flex flex-col items-center justify-center text-center py-10'>
					<div className='w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce'>
						<svg
							className='w-10 h-10'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={3}
								d='M5 13l4 4L19 7'
							/>
						</svg>
					</div>
					<h3 className='text-2xl font-bold text-foreground mb-4'>
						Booking Confirmed!
					</h3>
					<p className='text-gray-600 mb-8 max-w-xs'>
						We've sent a confirmation email to you. We look forward
						to seeing you on <br />
						<span className='font-semibold text-primary'>
							{selectedDate?.toLocaleDateString('en-US', {
								month: 'short',
								day: 'numeric',
							})}{' '}
							at {selectedTime}
						</span>
						.
					</p>
					<button
						onClick={() => {
							setView('calendar');
							setSelectedDate(null);
							setSelectedTime(null);
						}}
						className='text-primary font-semibold hover:text-primary-dark'
					>
						Book Another Appointment
					</button>
				</div>
			)}
		</div>
	);
}
