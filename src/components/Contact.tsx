import React, { useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null); // Initialize the ref for the form element with correct type

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!form.current) return; // Guard clause to avoid runtime errors
  
    emailjs
      .sendForm(
        'service_8duhc0t', // Replace with your EmailJS service ID
        'template_yg2mp5t', // Replace with your EmailJS template ID
        form.current, // Pass the form reference here
        'IFMfu-Wa1rSBgVR9p' // Replace with your EmailJS public key
      )
      .then(
        () => {
          form.current!.reset(); // Use non-null assertion here
          toast.success('Message sent successfully!', {
            position: 'top-center',
            autoClose: 3000,
          });
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}`, {
            position: 'top-center',
            autoClose: 5000,
          });
        }
      );
  };
  

  return (
    <section id="contact" className="py-20 bg-purple-50">
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600">Let's discuss how we can work together.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <a href="mailto:sanjaim202@gmail.com" className="text-purple-600 hover:text-purple-700">
                    sanjaim202@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <a href="tel:+1234567890" className="text-purple-600 hover:text-purple-700">
                    9361557446
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Chennai , Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your name"
                  name="from_name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}