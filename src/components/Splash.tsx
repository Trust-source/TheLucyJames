import splashImage from "../assets/splash.png"; // replace with the path to your generated image

export default function SplashScreen() {
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300  z-50 ">
      <img
        src={splashImage}
        alt="The Lucy James Abagi"
        className="w-72 md:w-96 animate-pulse-fade rounded-full"
      />
      <style>{`
        @keyframes pulseFade {
          0%, 100% { opacity: 0.6; transform: scale(0.98); }
          50% { opacity: 1; transform: scale(1); }
        }
        .animate-pulse-fade {
          animation: pulseFade 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
