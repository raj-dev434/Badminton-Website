import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        type: 'coaching for kid',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxwaaHvrlYINjNOnKqp3zh6wr4ow6OK15dLTM6hZLckSfCe1SH_vbwZj9fi0P0LoHnr-w/exec'; // User needs to replace this

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Using URLSearchParams converts the data to application/x-www-form-urlencoded
            // This is a "simple" request that works reliably with Google Apps Script in no-cors mode.
            const params = new URLSearchParams();
            params.append('name', formData.name);
            params.append('phone', formData.phone);
            params.append('type', formData.type);

            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: params,
            });

            // With no-cors, we can't read the response body, but if it doesn't throw, we assume success
            setStatus('success');
            alert(`Thank you ${formData.name}! We've received your request for ${formData.type}. We'll contact you soon.`);
            setFormData({ name: '', phone: '', type: 'coaching for kid' });

            // Reset status after a delay
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            alert('There was an error submitting the form. Please try again later.');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="px-6 py-16 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    Join Nellai <span className="text-[#64ffda]">Badminton Academy</span>
                </h2>
                <p className="text-gray-400 text-center mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="glass-card space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                        <input
                            id="contact-name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-transparent transition-all"
                            placeholder="Your full name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-transparent transition-all"
                            placeholder="+91 12345 67890"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Membership Type</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-[#0a192f] border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-transparent transition-all"
                        >
                            <option value="coaching for kid">Coaching for Kid</option>
                            <option value="pro">Pro Coaching</option>
                            <option value="member">Individual Member</option>
                            <option value="Guest player">Guest Player</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`w-full bg-[#64ffda] text-[#0a192f] px-8 py-4 rounded-xl font-bold hover:bg-white hover:shadow-lg hover:shadow-[#64ffda]/40 transition-all duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                        {status === 'loading' ? 'Sending...' : 'Submit Application'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
