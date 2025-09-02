"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import iphone from "@/public/assets/images/iphone.svg";
import ellipse from "@/public/assets/images/greenellipse.svg";
import planet from "@/public/assets/images/Planet.svg";
import star from "@/public/assets/images/star.svg";
import iphonemobile from "@/public/assets/images/iphone_mobile.png";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mobileImageLoaded, setMobileImageLoaded] = useState(false);

  return (
    <section className="relative md:pt-16 lg:pt-20 xl:pt-24 pt-20 pb-16 md:pb-20 lg:pb-24 xl:pb-28 bg-white overflow-hidden">
      {/* Animated background blur */}
      <motion.div
        className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-xl opacity-80 z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(157, 255, 176, 0.9) 0%, rgba(157, 255, 176, 0.6) 50%, transparent 100%)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center md:min-h-screen md:py-0 text-center">
          <motion.div
            className="mx-auto mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-[38px] md:w-full w-[296px] mx-auto lg:text-[48px] xl:text-[48px] font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                AI receipts. Simple crypto.
              </motion.span>
              <br />
              <motion.span
                className="block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Smart control.
              </motion.span>
            </motion.h1>

            <motion.div
              className="hidden md:block space-y-2 md:text-[16px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p>Klip Is Your All-In-One Decentralized Wallet</p>
              <p>Designed For Security, Flexibility, And Full Ownership.</p>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="relative z-50 mb-12 hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.button
              className="bg-green-500 hover:bg-green-600 cursor-pointer text-black px-8 py-4 rounded-full text-[14px] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              GET STARTED
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          <div className="relative w-full mx-auto">
            <motion.div
              className="relative flex justify-center transform"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Ellipse background */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={ellipse}
                  alt="Green ellipse background"
                  width={600}
                  height={600}
                  className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] opacity-80"
                  priority
                />
              </motion.div>

              {/* iPhone */}
              <div className="absolute top-[-20%] z-20 flex justify-center">
                {/* Desktop iPhone with loading state */}
                <div className="hidden md:block relative">
                  {!imageLoaded && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300 rounded-[3rem] animate-pulse"
                      style={{ width: 300, height: 600 }}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                      opacity: imageLoaded ? 1 : 0,
                      y: imageLoaded ? 0 : 100,
                    }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <Image
                      src={iphone}
                      alt="iPhone showing Klip wallet interface"
                      width={300}
                      height={800}
                      className="w-full h-full drop-shadow-2xl md:drop-shadow-none"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  </motion.div>
                </div>

                {/* Mobile iPhone with loading state */}
                <div className="md:hidden block relative">
                  {!mobileImageLoaded && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300 rounded-[2rem] animate-pulse"
                      style={{ width: 376, height: 476 }}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                      opacity: mobileImageLoaded ? 1 : 0,
                      y: mobileImageLoaded ? 0 : 100,
                    }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <Image
                      src={iphonemobile}
                      alt="iPhone showing Klip wallet interface"
                      width={500}
                      height={1000}
                      className="w-[376px] h-[476px] drop-shadow-2xl"
                      priority
                      onLoad={() => setMobileImageLoaded(true)}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Desktop floating cards */}
              <motion.div
                className="absolute top-25 left-[21%] z-30 hidden sm:block"
                initial={{ opacity: 0, x: -100, y: -50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="bg-[#8C8C8C57] backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/20">
                  <div className="flex flex-row-reverse items-center gap-6">
                    <div className="flex flex-row-reverse items-center gap-1">
                      <motion.div
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          src={planet}
                          alt="Planet icon"
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                      </motion.div>
                      <div>
                        <div className="flex flex-col items-center gap-0">
                          <span className="text-[18px] font-medium text-white mb-0">
                            Appolo
                          </span>
                          <span className="text-[18px] text-black">APL</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <motion.span
                        className="text-[18px] !text-white"
                        animate={{
                          color: ["#ffffff", "#22c55e", "#ffffff"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        $2,951.73
                      </motion.span>
                      <div className="text-[18px] text-black">APL 17</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-30 right-[18%] z-30 hidden sm:block"
                initial={{ opacity: 0, x: 100, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="bg-[#8C8C8C57] backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/20">
                  <div className="flex items-center gap-6">
                    <div className="flex flex-row-reverse items-center gap-1">
                      <div>
                        <div className="flex flex-col items-center gap-0">
                          <span className="text-[18px] font-medium text-white mb-0">
                            Ramulus
                          </span>
                          <span className="text-[18px] text-black">RLS</span>
                        </div>
                      </div>
                      <motion.div
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                        whileHover={{ rotate: -360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          src={star}
                          alt="Star icon"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                      </motion.div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <motion.span
                          className="text-[18px] !text-white"
                          animate={{
                            color: ["#ffffff", "#3b82f6", "#ffffff"],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                        >
                          $3,271.20
                        </motion.span>
                      </div>
                      <div className="text-[18px] text-black">RLS 24</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mobile floating cards */}
              <motion.div
                className="absolute top-0 left-[-10px] z-30 sm:hidden"
                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="bg-[#8C8C8C57] backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/20">
                  <div className="flex items-center gap-2">
                    <div>
                      <span className="text-[12px] text-white">$2,951.73</span>
                      <div className="text-[12px] text-black">APL 17</div>
                    </div>
                    <div>
                      <div className="flex flex-col items-center gap-0">
                        <span className="text-[12px] font-medium text-white">
                          Appolo
                        </span>
                        <span className="text-[12px] text-black">APL</span>
                      </div>
                    </div>
                    <motion.div
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={planet}
                        alt="Planet icon"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 right-[-10px] z-30 sm:hidden"
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="bg-[#8C8C8C57] backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/20">
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center"
                      whileHover={{ rotate: -180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={star}
                        alt="Star icon"
                        width={14}
                        height={14}
                        className="w-3.5 h-3.5"
                      />
                    </motion.div>
                    <div>
                      <div className="flex flex-col items-center gap-0">
                        <span className="text-[12px] font-medium text-white">
                          Ramulus
                        </span>
                        <span className="text-[12px] text-black">RLS</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[12px] text-white">$3,271.20</span>
                      <div className="text-[12px] text-black">RLS 24</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile content */}
          <motion.div
            className="md:hidden block mx-auto mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <motion.div
              className="space-y-1 text-[12px] mx-auto mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <p>Klip Is Your All-In-One Decentralized Wallet</p>
              <p>Designed For Security, Flexibility, And Full Ownership.</p>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <motion.button
                className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-full text-[14px] font-bold uppercase transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(34, 197, 94, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                GET STARTED
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
