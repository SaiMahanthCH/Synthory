import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  // Form fields state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Spam protection honeypot

  // Form error and success state
  const [emailError, setEmailError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scheduler slot state
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [isMeetingBooked, setIsMeetingBooked] = useState(false);

  const dates = ['Tomorrow', 'Wednesday, Jun 17', 'Thursday, Jun 18', 'Friday, Jun 19'];
  const timeslots = ['09:00 AM EST', '11:30 AM EST', '02:00 PM EST', '04:30 PM EST'];

  const validateEmailFormat = (inputEmail: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(inputEmail);
  };

  const handleEmailBlur = () => {
    if (email && !validateEmailFormat(email)) {
      setEmailError('Please provide a valid email format (e.g. name@company.com)');
    } else {
      setEmailError('');
    }
  };

  const isFormValid = name.trim() !== '' && validateEmailFormat(email) && message.trim().length >= 10;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || honeypot) return; // Ignore if honeypot is filled

    setIsSubmitting(true);
    // Simulate premium ashync submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleBookMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTimeSlot) return;
    setIsMeetingBooked(true);
  };

  return (
    <div id="contact-page" className="w-full max-w-[800px] mx-auto px-6 py-12 flex flex-col gap-12">
      {/* Page Header */}
      <div id="contact-hero" className="flex flex-col items-center text-center gap-4 max-w-[600px] mx-auto py-8">
        <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
          Ecosystem Ingestion
        </span>
        <h1 className="font-display text-[42px] md:text-[50px] font-bold text-[#0a0a0a] tracking-tight">
          Let's Build Together
        </h1>
        <p className="font-sans text-[15px] text-[#888888] leading-relaxed">
          Submit your proposal or schedule an alignment call directly below. Our partners audit every inbound node.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {/* Form Container */}
        <div className="bg-white border border-slate-200/60 p-8 rounded-2xl shadow-sm">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="contact-form"
                id="contact-form-element"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                {/* Honeypot field for spam bots */}
                <input
                  type="text"
                  name="b_honeypot"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-name" className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sanskar Kolekar"
                    className="w-full border-b border-slate-250 focus:border-[#0a0a0a] outline-none py-3 text-[15px] font-sans transition-colors placeholder:text-slate-300"
                  />
                </div>

                {/* Email with real-time blur validation */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <label htmlFor="form-email" className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    {emailError && (
                      <span className="text-red-500 text-[11px] font-medium animate-pulse">{emailError}</span>
                    )}
                  </div>
                  <input
                    type="email"
                    id="form-email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError('');
                    }}
                    onBlur={handleEmailBlur}
                    placeholder="e.g. founder@mycompany.com"
                    className={`w-full border-b focus:border-[#0a0a0a] outline-none py-3 text-[15px] font-sans transition-colors placeholder:text-slate-300 ${
                      emailError ? 'border-red-400' : 'border-slate-250'
                    }`}
                  />
                </div>

                {/* Company (Optional) */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-company" className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Company Name / Project <span className="text-slate-400 italic font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="form-company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Varta Solutions"
                    className="w-full border-b border-slate-250 focus:border-[#0a0a0a] outline-none py-3 text-[15px] font-sans transition-colors placeholder:text-slate-300"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-message" className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your ecosystem project, timeline, and goals in detail..."
                    className="w-full border border-slate-200 focus:border-[#0a0a0a] outline-none p-4 text-[15px] font-sans transition-all placeholder:text-slate-300 rounded-lg bg-[#fafafa] resize-y min-h-[120px]"
                  />
                </div>

                {/* Submit button (Disabled until form is valid) */}
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-4 text-center text-xs font-bold uppercase tracking-widest rounded transition-all duration-200 cursor-pointer ${
                    isFormValid 
                      ? 'bg-[#0a0a0a] text-white hover:bg-slate-800' 
                      : 'bg-slate-100 text-slate-400 border border-slate-200/50 cursor-not-allowed'
                  }`}
                  style={{ borderRadius: '4px' }}
                >
                  {isSubmitting ? 'Transmitting proposal...' : 'Send Message'}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center gap-4 py-8"
              >
                <div className="p-3 bg-emerald-50 rounded-full text-emerald-500 border border-emerald-100 mb-2">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0a0a0a]">
                  Transmission Succeeded
                </h3>
                <p className="font-sans text-[15px] text-[#888888] max-w-[400px] leading-relaxed">
                  Thanks — we'll be in touch. One of our founding partners will review your data and trigger a callback within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setEmail('');
                    setCompany('');
                    setMessage('');
                  }}
                  className="text-xs font-bold text-[#0a0a0a] underline uppercase tracking-wider mt-4"
                >
                  Send another transmission
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Schedule a Meeting Section (Minimal styling - clean mockup in line with spec) */}
        <div id="schedule-meeting-section" className="border-t border-slate-150 pt-10 flex flex-col gap-6">
          <div className="flex flex-col gap-1.5 items-center text-center">
            <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
              SYNC ENGINE
            </span>
            <h2 className="font-display text-2xl font-bold text-[#0a0a0a]">
              Schedule a Meeting
            </h2>
            <p className="text-[13px] text-[#888888] max-w-[400px]">
              Direct connection with our partners. Choose an available slot inside our venture sync pipeline.
            </p>
          </div>

          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
            <AnimatePresence mode="wait">
              {!isMeetingBooked ? (
                <form id="meeting-form" onSubmit={handleBookMeeting} className="flex flex-col gap-6">
                  {/* Select active date */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Select Available Alignment Date
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {dates.map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setSelectedDate(d)}
                          className={`p-3 text-[12px] font-bold border transition-all text-center rounded-lg ${
                            selectedDate === d
                              ? 'border-[#0a0a0a] bg-slate-50 text-[#0a0a0a]'
                              : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50 text-slate-500'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select available timeslots */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Select Slot (30 Minute Duration)
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      {timeslots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`p-4 text-[13px] font-semibold border transition-all text-center rounded-lg ${
                            selectedTimeSlot === slot
                              ? 'border-[#0a0a0a] bg-[#0a0a0a]/5 text-[#0a0a0a] font-bold'
                              : 'border-slate-100 hover:border-slate-200 text-slate-500'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!selectedTimeSlot}
                    className={`w-full py-4 text-center text-xs font-bold uppercase tracking-widest rounded transition-all duration-200 cursor-pointer ${
                      selectedTimeSlot
                        ? 'bg-[#0a0a0a] text-white hover:bg-slate-800'
                        : 'bg-slate-100 text-slate-400 border border-slate-250 cursor-not-allowed'
                    }`}
                    style={{ borderRadius: '4px' }}
                  >
                    Confirm Venture Sync Call
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center text-center gap-4 py-6">
                  <div className="p-3 bg-emerald-50 rounded-full text-emerald-500 border border-emerald-100">
                    <Calendar size={28} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#0a0a0a]">
                    Alignment Call Scheduled
                  </h3>
                  <div className="bg-[#fcfcfc] border border-slate-100 p-4 rounded-lg w-full max-w-[340px] text-[13px] text-slate-650 flex flex-col gap-1.5 font-sans">
                    <div className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Confirmed Slot</div>
                    <div className="text-[#0a0a0a] font-bold text-[14px]">
                      {selectedDate}
                    </div>
                    <div className="text-slate-500 font-medium">
                      at <span className="text-[#0a0a0a] font-bold">{selectedTimeSlot}</span>
                    </div>
                    <div className="text-xs text-slate-450 italic mt-1 font-normal">
                      Auto-generated meeting link sent to {email || 'your email'}.
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMeetingBooked(false);
                      setSelectedTimeSlot('');
                    }}
                    className="text-xs font-bold text-slate-400 hover:text-black transition-colors uppercase tracking-wider"
                  >
                    Reschedule or change slot
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
