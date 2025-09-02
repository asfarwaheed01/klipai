"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bitcoin } from "lucide-react";
import iphone from "@/public/assets/images/iPhone-section-2.png";

const AboutusSection = () => {
  return (
    <section className="py-5 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:gap-20 gap-10 items-center">
          {/* Left side - iPhone container with background */}
          <motion.div
            className="relative md:w-[50%] flex justify-center overflow-hidden lg:justify-start"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative bg-[#F4F2F0] w-full flex justify-center rounded-sm p-16 !pb-0 sm:p-12 lg:p-16">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src={iphone}
                  alt="iPhone showing KlipAi interface"
                  width={280}
                  height={560}
                  className="w-64 h-auto sm:w-72 lg:w-80 drop-shadow-2xl"
                />
              </motion.div>

              <motion.div
                className="absolute md:top-[11%] top-6 left-[-2%] z-10"
                initial={{ opacity: 0, x: -50, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.2 },
                }}
                animate={{
                  y: [0, -8, 0],
                }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-md md:p-3 p-1 shadow-lg border border-gray-200">
                  <div className="flex items-center md:gap-10 gap-4">
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#FF8933" }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Bitcoin className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <div className="text-sm hover:scale-110 md:text-[18px] font-semibold text-gray-900">
                          BTC / USDT
                        </div>
                        <div className="text-xs md:text-[15px] text-[#6B7280]">
                          Bitcoin
                        </div>
                      </div>
                    </div>
                    <div className="ml-2">
                      <motion.div
                        className="text-sm md:text-[18px] font-semibold text-gray-900"
                        animate={{
                          color: ["#111827", "#10B981", "#111827"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        78,393
                      </motion.div>
                      <div className="text-[13px] text-green-500">+4.23%</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-[4%] right-[-1%] z-10"
                initial={{ opacity: 0, x: 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 1.2,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: -2,
                  transition: { duration: 0.2 },
                }}
                animate={{
                  x: [0, 5, 0],
                  y: [0, -5, 0],
                }}
                viewport={{ once: true }}
              >
                <div className="bg-white md:w-[200px] w-[150px] rounded-sm md:p-3 p-1 shadow-xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#D2EAE4" }}
                      whileHover={{
                        rotate: -360,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Bitcoin className="w-5 h-5 text-gray-700" />
                    </motion.div>
                    <div>
                      <div className="text-sm md:text-[18px] font-semibold text-gray-900">
                        BTC / USDT
                      </div>
                      <div className="text-xs text-gray-500">Bitcoin</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="md:w-[50%] text-left"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-[38px] lg:text-[48px] font-bold text-black leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              What is KlipAi
            </motion.h2>
            <motion.p
              className="text-[12px] md:max-w-[500px] lg:text-[16px] text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              KlipAi is the all-in-one smart wallet layer for Web3.We turn every
              crypto transaction into a clean, AI-powered receipt. You can also
              send tokens using a simple username.No TX hashes. No wallet
              address mistakes.Just clarity, control, and convenience.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutusSection;
