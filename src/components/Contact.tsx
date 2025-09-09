import { useState } from "react";
import { Send } from "lucide-react";
import SocialLinks from "./Social";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const email = "mailto:lucyjamesabagihackathon@gmail.com"; 
    const subject = encodeURIComponent(`New message from ${name}`);
    const body = encodeURIComponent(message);

  
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    
    <section
      id="contact"
      className="w-full px-4 sm:px-8 lg:px-16 py-16 bg-gray-50 dark:bg-gray-900 scroll-mt-20"
    >
        <SocialLinks/>
      <div className="max-w-4xl mx-auto text-center">
   

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
          Have a question or want to collaborate? Send me a quick email below.
        </p>
      </div>


      <div className="mt-10 bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          

          <div className="text-left">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>


          <div className="text-left">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              required
              rows={4}
              className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

        
        
          <div className="text-center">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all duration-200 w-full sm:w-auto mx-auto"
            >
              <Send className="w-4 h-4" />
              Send Email
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
