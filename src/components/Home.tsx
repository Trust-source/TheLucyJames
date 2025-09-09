import Lucy from '../assets/0.jpg'
import { SquareArrowOutDownRight } from 'lucide-react';

const Homepage = () => {
  return (
    <section className="relative bg-white text-gray-900 min-h-fit md:min-h-screen flex flex-col p-6 md:p-20 overflow-hidden scroll-mt-[50px] pt-[60px]" id="home">
 
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>


      <div className="flex flex-1 flex-col-reverse md:flex-row items-center justify-center px-6 md:px-10 rounded-2xl relative z-10">
    

        <div className="flex-1 max-w-lg mt-6 md:mt-0 md:ml-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
           The Lucy James Abagi
          </h1>
          <p className="text-gray-900 mb-6 text-lg md:text-[22px]">
            Lucy James Abagi is an experienced leader in public policy, Development programming, Innovation and Serial investing.
          </p>
          <button className="bg-green-700 px-6 py-3 rounded-md text-gray-100 shadow-lg hover:bg-green-800 transition cursor-pointer"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Let’s meet me <SquareArrowOutDownRight className="inline-block ml-2" />
          </button>
        </div>


        <div className="flex-1 flex justify-center md:ml-20 pb-2 md:pb-0">
          <img
            src={Lucy}
            alt="profile"
            className="w-48 h-48 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Homepage
