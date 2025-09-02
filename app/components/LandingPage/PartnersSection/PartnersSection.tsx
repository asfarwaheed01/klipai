"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import comp1 from "@/public/assets/images/Comp1.svg";
import comp2 from "@/public/assets/images/Comp3.svg";
import comp3 from "@/public/assets/images/Comp4.svg";
import comp4 from "@/public/assets/images/Comp5.svg";
import comp5 from "@/public/assets/images/Comp6.svg";

const PartnersSection = () => {
  const partners = [
    { id: 1, src: comp1, alt: "Company 1" },
    { id: 2, src: comp2, alt: "Company 2" },
    { id: 3, src: comp3, alt: "Company 3" },
    { id: 4, src: comp4, alt: "Company 4" },
    { id: 5, src: comp5, alt: "Company 5" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[24px] md:w-full w-[320px] mx-auto sm:text-[24px] text-[#C4C4C4] font-medium">
            Partnered with worldwide leading companies
          </h2>
        </div>

        {/* Rotating Partners Grid */}
        <div className="relative overflow-hidden">
          {/* Desktop/Tablet View - Single Row */}
          <div className="block">
            <motion.div
              className="flex gap-12 lg:gap-16 xl:gap-20 items-center justify-center"
              animate={{ x: [0, -100, 0] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {/* First set of logos */}
              {partners.map((partner) => (
                <motion.div
                  key={`first-${partner.id}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={120}
                    height={60}
                    className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </motion.div>
              ))}

              {/* Duplicate set for seamless loop */}
              {partners.map((partner) => (
                <motion.div
                  key={`second-${partner.id}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={120}
                    height={60}
                    className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Rotating Animation Variants for Different Effects */}
        <div className="hidden">
          {/* Alternative rotation effect - can be swapped in */}
          <motion.div
            className="flex gap-16 items-center justify-center"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.02, 1],
            }}
            transition={{
              rotate: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                animate={{ rotate: [0, -360] }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={120}
                  height={60}
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
