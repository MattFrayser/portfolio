import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact({ onClose }) {

    const [state, handleSubmit] = useForm("mvgaodwk");
    if (state.succeeded) {
        return (
            <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                <motion.div
                    className="text-3xl sm:text-4xl text-bold"
                    initial={{ opacity: 1, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ transformOrigin: "bottom" }}
                >
                    <div className="w-full max-w-5xl border-4 border-blue-300 border-b rounded-t-xl bg-gray-900 text-gray-50 shadow-xl transition-all duration-500 ease-in-out transform translate-y-0">
                        <div className="relative p-6 md:p-12">
                            <h2 className="text-3xl md:text-5xl font-extrabold mt-4">Thank You!</h2>
                            <p className="mt-4 text-xl">Your message has been sent successfully.</p>
                            <button onClick={onClose} className="mt-6 px-8 py-3 text-xl border-4 border-gray-50 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:text-gray-900 font-extrabold">Close</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
      <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <motion.div
                    className="text-3xl sm:text-4xl text-bold"
                    initial={{ opacity: 1,scaleY: 0 }}
                    animate={{ opacity: 1,scaleY: 1}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ transformOrigin: "bottom" }}
        >

        <div className="w-full max-w-5xl border-4 border-blue-300 border-b rounded-t-xl bg-gray-900 text-gray-50 shadow-xl transition-all duration-500 ease-in-out transform translate-y-0">
          <div className="relative p-6 md:p-12">
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute right-6 top-6 md:right-12 md:top-12 transition-transform duration-200 hover:scale-110"
              aria-label="Close contact form"

            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-14 md:w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
  
            {/* Header */}
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 inline-block animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h2 className="text-3xl md:text-5xl font-extrabold mt-4">Contact Me</h2>
            </div>
  
            {/* Form */}
            <form 
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-xl md:text-2xl font-extrabold mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  name="name"
                  className="w-full p-4 rounded-md font-bold text-gray-900 shadow-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  placeholder="Enter name"
                />
              </div>
  
              <div>
                <label htmlFor="email" className="block text-xl md:text-2xl font-extrabold mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  name="email"
                  className="w-full p-4 rounded-md font-bold text-gray-900 shadow-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  placeholder="Enter email"
                />
              </div>
  
              <div>
                <label htmlFor="message" className="block text-xl md:text-2xl font-extrabold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  name="message"
                  rows={4}
                  className="w-full p-4 rounded-md font-bold text-gray-900 shadow-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
  
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 text-xl md:text-2xl border-4 border-gray-50 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:text-gray-900 font-extrabold flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        </motion.div>
      </div>
    );
  }