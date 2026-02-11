import { Mail, Phone, Github, Linkedin, Code2Icon } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // ✅ Initialize EmailJS once using .env public key
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current
      );

      setSubmitStatus('success');
      formRef.current.reset();
      setTimeout(() => setSubmitStatus('idle'), 3000);

    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'vermaditya701@gmail.com', href: 'mailto:vermaditya701@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 97116 02535', href: 'tel:+919711602535' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vermaditya701', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-verma-400196292/', label: 'LinkedIn' },
    { icon: Code2Icon, href: 'https://leetcode.com/u/adityafrisky701/', label: 'LeetCode' },
  ];

  return (
    <section id="contact" className="relative z-10 w-full min-h-screen px-4 py-24 overflow-hidden sm:px-6 lg:px-8">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl -z-10" />

      <div className="relative max-w-5xl mx-auto">

        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl text-zinc-900 dark:text-white">
            Get in <span className="text-violet-600">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/50 dark:border-zinc-800/50"
              >
                <contact.icon size={22} />
                <div>
                  <p className="text-sm text-zinc-500">{contact.label}</p>
                  <p className="font-semibold text-zinc-900 dark:text-white">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="p-5 rounded-2xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/50 dark:border-zinc-800/50">
              <p className="text-sm text-zinc-500 mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/50 dark:border-zinc-800/50"
            >
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <div className="space-y-5">

                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
                />

                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
                />

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
                />

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-50 text-emerald-700">
                    ✓ Message sent successfully!
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-700">
                    ✗ Something went wrong. Try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 font-semibold text-white rounded-xl bg-violet-600 disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
