import { Linkedin, Mail, Twitter, Youtube, Facebook, Instagram } from "lucide-react";
import { SiTiktok, SiThreads } from "react-icons/si"; // using react-icons for TikTok & Threads

const SocialLinks = () => {
  const socials = [
    { name: "LinkedIn", icon: <Linkedin size={22} />, link: "https://www.linkedin.com/in/trust-femi-70b68a317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Twitter", icon: <Twitter size={22} />, link: "https://x.com/lucydavis2012" },
    { name: "TikTok", icon: <SiTiktok size={22} />, link: "https://www.tiktok.com/@yourusername" },
    { name: "Threads", icon: <SiThreads size={22} />, link: "https://www.threads.com/@lucyjamesabagi" },
    { name: "YouTube", icon: <Youtube size={22} />, link: "https://www.youtube.com/@lucy-jamesabagi" },
    { name: "Facebook", icon: <Facebook size={22} />, link: "https://www.facebook.com/lucy.davis.148553?rdid=twrsCKYK8y9EIKO8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AwKbYvHkN#" },
    { name: "Instagram", icon: <Instagram size={22} />, link: "https://www.instagram.com/lucyjamesabagi" },
    { name: "Email", icon: <Mail size={22} />, link: "mailto:lucyjamesabagihackathon@gmail.com" },
  ];

  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-8 lg:px-16 py-16 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center">
   
        <p className="bg-black text-white w-fit px-4 py-1 rounded-md mx-auto font-semibold mb-3">
          Stay Connected
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
          Let’s Connect Online
        </h2>

        {/* Social Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all p-3 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="p-2 bg-black dark:bg-gray-900 text-white rounded-lg flex items-center justify-center shadow-md">
                {social.icon}
              </div>
              <span className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
