import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';
import four from '../assets/4.jpg';
import five from '../assets/5.jpg';
import six from '../assets/6.jpg';  

const AboutMe = () => {
  const images = [one, two, three, four, five, six];

  return (
    <section
      id="about"
      className="relative bg-gray-50 text-gray-900 py-16 px-6 md:px-20 overflow-hidden scroll-mt-[50px]"
    >

      <div className="absolute top-0 right-0 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 relative z-10">
   

        <div className="flex-1 flex justify-center">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            loop
            autoplay={{
              delay: 1600, 
              disableOnInteraction: false, 
            }}
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-lg"
          >
            {images.map((url, index) => (
              <SwiperSlide key={index}>
                <img
                  src={url}
                  alt={`About Lucy ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

 
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            About Me?
          </h2>
                  <p className="md:text-lg text-gray-700 leading-relaxed mb-6 font-medium">
            I am Lucy James Abagi,{" "}
            <span className="bg-amber-200 text-gray-900 p-0.5 border-amber-100 rounded-md">
              an experienced leader in public policy, program management, and fundraising.
            </span>{" "}
            Over the years, I have successfully led initiatives that drive impact, foster
            innovation, and empower communities.{" "}
            <span className="bg-amber-200 text-gray-900 p-0.5 border-amber-100 rounded-md">
              With a Master’s in Business Administration
            </span>
            , my expertise spans building strong stakeholder relationships, effective team
            management, and leveraging technology for transparent project coordination.{" "}
            Beyond the professional space, I am{" "}
            <span className="bg-amber-200 text-gray-900 p-0.5 border-amber-100 rounded-md">
              family-oriented, a devoted music minstrel,
            </span>{" "}
            and someone who values{" "}
            <span className="bg-amber-200 text-gray-900 p-0.5 border-amber-100 rounded-md">
              fitness and well-being
            </span>{" "}
            as an integral part of a balanced life.
          </p>

          <p className="md:text-lg text-gray-700 leading-relaxed font-medium">
            Beyond my professional work, I am a strong advocate for collaboration,
            knowledge sharing, and{" "}
            <span className="bg-amber-200 text-gray-900 p-0.5 border-amber-100 rounded-md">
              mentoring the next generation of changemakers.
            </span>{" "}
            I believe in the power of people, ideas, and technology to create sustainable
            solutions and bring lasting transformation to communities, while also
            celebrating creativity, music, and wellness in everyday life.
          </p>

        </div>
      </div>

   
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #047857 !important; /* Tailwind green-700 */
          width: 28px !important;
          height: 28px !important;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px !important; /* smaller arrow icon */
          font-weight: bold;
        }
        .swiper-pagination-bullet {
          background: #047857 !important; /* Tailwind green-700 */
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
