import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "91 8209708908"; // Replace with your WhatsApp number
  const businessHours = "Mon-Fri: 9AM-6PM";
  const responseTime = "Typically replies within 1 hour";

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
    setMessage("");
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-40 p-4 bg-[#990302] text-[#EBE2E0]
                 rounded-full shadow-lg cursor-pointer"
      >
        <div className="relative">
          {/* WhatsApp Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.94 5.86L2.87 22l4.14-1.07C8.58 21.91 10.28 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.74 0-3.34-.56-4.65-1.5l-3.27.85 1.07-3.14C4.45 14.86 4 13.48 4 12 4 7.58 7.58 4 12 4s8 3.58 8 8-3.58 8-8 8z"
            />
          </svg>

          {/* Ripple Effect */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1.5],
              opacity: [0.5, 0.25, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute inset-0 rounded-full bg-[#990302]"
          />
        </div>
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#0B2C3D]/80 backdrop-blur-sm z-40"
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.75, y: 100 }}
              className="fixed bottom-24 left-8 z-50 w-[calc(100%-2rem)] max-w-md
                       bg-[#0B2C3D] rounded-2xl shadow-xl overflow-hidden
                       border border-white/10"
            >
              {/* Header */}
              <div className="bg-[#990302] p-6">
                <div className="flex items-start justify-between text-[#EBE2E0]">
                  <div>
                    <h3 className="text-lg font-semibold">Chat with Us</h3>
                    <p className="text-sm opacity-90">{businessHours}</p>
                    <p className="text-sm opacity-90 mt-1">{responseTime}</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Chat Form */}
              <form onSubmit={handleSubmit} className="p-6">
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#EBE2E0] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10
                           text-[#EBE2E0] placeholder-[#EBE2E0]/50
                           focus:border-[#990302] focus:ring-1 focus:ring-[#990302]
                           transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-[#990302] text-[#EBE2E0] rounded-xl
                         font-medium hover:bg-[#990302]/90 transition-colors
                         duration-300 flex items-center justify-center gap-2"
                >
                  <span>Start Chat</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </motion.button>
              </form>

              {/* Footer */}
              <div className="px-6 py-4 bg-white/5 text-center text-sm text-[#EBE2E0]/60">
                Powered by WhatsApp Business
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChat;
