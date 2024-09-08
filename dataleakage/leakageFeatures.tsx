"use client";
import { features } from "@/src/app/dataleakage/data/leakageindex";
import Chip from "./ui/Chip";
import GradientH2 from "./ui/GradientH2";
import SectionText from "./ui/SectionText";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LeakageFeatures() {
  return (
    <section className="py-24 px-3 sm:px-5 md:px-10 xl:px-20 bg-black-100">
      <div className="container mx-auto">
  <div className="max-w-[540px] mx-auto">
    <div className="flex items-center justify-center">
      <Chip className="text-white">Everything you need</Chip>
    </div>
    <GradientH2 className="text-center text-white-100">
      Streamlined for easy management
    </GradientH2>
    <SectionText className="text-white-100">
      Enjoy customizable lists, team work tools, and smart tracking all in
      one place. Set tasks, get reminders, and see your progress simply
      and quickly.
    </SectionText>
  </div>


        <div className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-black-100 e/70 drop-shadow-2xl rounded-lg p-10"
            >
              <motion.figure
                drag
                dragSnapToOrigin
                initial={{ translateY: 0 }}
                whileInView={{ translateY: [0, 25, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                  duration: 2.5,
                }}
              >
                <Image draggable={false} src={item.src} alt={item.title} />
              </motion.figure>
              <div className="text-center">
                <h3 className="text-lg lg:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-xs lg:text-sm mt-3 max-w-60 mx-auto lg:max-w-80">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
