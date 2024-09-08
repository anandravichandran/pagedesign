// import React from 'react'
// import {Spotlight} from '@/src/components/ui/Spotlight'
// import { TextGenerateEffect } from "@/src/components/ui/TextGenerationEffect";

// import { FaLocationArrow } from "react-icons/fa6";
// const Hero = () => {
//   return (
//     <div className="pb-20 pt-36">
//     <div>
//       <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
//       <Spotlight className="top-20 left-full h-[80vh] w-[50vw]" fill="purple"/>
//       <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
//     </div>

//     {/* <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center"> */}
//       {/* Radial gradient for the container to give a faded look */}
//       {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
//     </div> */}
//     <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
//       {/* Radial gradient for the container to give a faded look */}
//       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
//     </div>

//     <div className="flex justify-center relative my-20 z-10">
//         <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]flex flex-col items-center justify-center'>
//             <h2 className="uppercase tracking-widset text-xl text-center text-blue-100 max-w-100">
               
//                 Unleashing innovation with  Privacy Spot the Fake Secure Your Browsing data inspection
//             </h2>

//             <TextGenerateEffect className="text-center text-[40px] md:text-3xl lg:text-5xl"
//             words="Shielding your data from online Threats"
//             />
//             <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
//                 Hi, I&apos;m Your Virtual Bodyguard
//             </p>
//             {/* <a href="#about">
//             <MagicButton
//               title="Explore the feature"
//               icon={<FaLocationArrow />}
//               position="right"
//             />
//           </a> */}
//         </div>
      

//     </div>

//     </div>
//   )
// }

// export default Hero

import React from 'react'
import {Spotlight} from '@/src/components/ui/Spotlight'
import styles from "@/src/app/datainspection/data/style";
import Image from "next/image";
import demo from "@/public/demo.svg"

const LeakageHero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="top-20 left-full h-[80vh] w-[50vw]" fill="purple"/>
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex flex-row justify-between items-center w-full relative z-10">
        {/* Wording on the left side */}
        <div className="flex-1">
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Payment Method.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our team of experts use a methodology to identify the credit cards most
            likely to fit your needs. We examine annual percentage rates, annual
            fees.
          </p>
        </div>

        {/* Image on the right side */}
        <div className={`${styles.flexCenter} flex-1 relative`}>
          <Image
            src={demo}
            alt="billings"
            className="w-[100%] h-[100%] relative z-[5]"
          />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </div>
    </div>
  )
}

export default LeakageHero;