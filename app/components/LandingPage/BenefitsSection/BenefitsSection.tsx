"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import iphone from "@/public/assets/images/iphone-mockup.png";
import lines from "@/public/assets/images/lines.png";
import secure from "@/public/assets/images/secure.svg";
import romolus from "@/public/assets/images/romolus.svg";
import performance from "@/public/assets/images/performance.svg";
import currentBalance from "@/public/assets/images/current-balance.png";
import fastSwap from "@/public/assets/images/fast-swap.png";
import Exchange from "@/public/assets/images/exchange.png";
import Tropy from "@/public/assets/images/trophy.png";
import plsu from "@/public/assets/images/plus.svg";

const BenefitsSection = () => {
  return (
    <section className="py-16 lg:py-12 bg-white relative overflow-hidden">
      {/* Green gradient background effect */}
      <motion.div
        className="hidden md:block absolute top-[20%] left-4 lg:left-8 xl:left-12 w-[400px] h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] rounded-full blur-xl opacity-80"
        style={{
          background:
            "radial-gradient(circle, rgba(157, 255, 176, 0.9) 0%, rgba(157, 255, 176, 0.6) 50%, transparent 100%)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-[#D2EACF] border-[1px] border-[#119200] rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-black text-[16px] font-bold">BENEFIT</span>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-5xl font-bold text-black leading-tight mb-6">
                Say goodbye to
                <br />
                <span className="block">Wallet Addresses.</span>
              </h2>
            </motion.div>
            <motion.div
              className="lg:pt-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-black md:max-w-[260px] text-[16px] leading-relaxed">
                Just enter the handle, select your token, and confirm. No
                copy-paste. No errors. No friction.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-1 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-black rounded-3xl p-8 lg:p-4 relative overflow-hidden min-h-[600px] lg:min-h-[838px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className=" z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <motion.div
                      className="w-12 h-12 bg-[#142D11] border-[1px] border-green-900 rounded-2xl flex items-center justify-center mb-4"
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                        backgroundColor: "#22c55e",
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={Tropy}
                        alt="Trophy icon"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </motion.div>
                    <motion.h3
                      className="text-white text-2xl lg:text-[36px] font-normal mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      Token
                      <br />
                      Support
                    </motion.h3>
                  </div>
                  <motion.div
                    className=" w-8 h-8 text-white flex items-center justify-center"
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={plsu}
                      alt="Plus icon"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </motion.div>
                </div>

                <div className="flex-1 flex items-center justify-center relative z-20">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                  >
                    <Image
                      src={iphone}
                      alt="iPhone showing KlipAi dashboard"
                      width={1000}
                      height={1000}
                      className="w-full h-[580px]"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 z-10"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 0.7, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={lines}
                    alt="Green lines"
                    width={300}
                    height={100}
                    className="w-full h-auto opacity-70"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              className="bg-black rounded-3xl p-6 lg:p-4 relative overflow-hidden min-h-[350px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="flex justify-center items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white text-center text-xl lg:text-[36px] font-normal">
                  Secure Transfers
                </h3>
              </motion.div>
              <motion.div
                className="flex items-center justify-center h-full flex-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
              >
                <Image
                  src={secure}
                  alt="Secure transfer visualization"
                  width={400}
                  height={600}
                  className="!w-full h-full "
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-black rounded-3xl p-6 lg:p-4 relative overflow-hidden min-h-[400px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div></div>
                <motion.div
                  className="w-8 h-8 text-white flex items-center justify-center"
                  whileHover={{ rotate: 180, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={plsu}
                    alt="Plus icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </motion.div>
              </div>

              <div className="flex items-center justify-center flex-1 relative">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={romolus}
                      alt="Romulus"
                      width={280}
                      height={200}
                      className="w-full max-full h-auto"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute bg-white/30 blue-lg rounded-xl -bottom-12 md:-right-6 -right-3 z-10"
                    initial={{ opacity: 0, x: 30, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                  >
                    <Image
                      src={performance}
                      alt="Performance chart"
                      width={140}
                      height={120}
                      className="w-full h-auto"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Current Balance Card */}
            <motion.div
              className="bg-black rounded-3xl p-6 lg:p-4 relative overflow-hidden min-h-[400px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div></div>
                <motion.div
                  className="w-8 h-8 text-white flex items-center justify-center"
                  whileHover={{ rotate: 180, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={plsu}
                    alt="Plus icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </motion.div>
              </div>
              <motion.div
                className="flex items-center justify-center flex-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -8, 0],
                }}
              >
                <Image
                  src={currentBalance}
                  alt="Current balance display"
                  width={280}
                  height={200}
                  className="w-full max-w-[280px] h-auto"
                />
              </motion.div>
              <motion.div
                className="absolute bottom-6 md:right-6 right-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                animate={{
                  x: [0, 5, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
              >
                <Image
                  src={fastSwap}
                  alt="Fast Swap"
                  width={200}
                  height={200}
                  className="w-[220px] h-auto "
                />
              </motion.div>
            </motion.div>

            {/* Unique Identity Card */}
            <motion.div
              className="bg-black rounded-3xl p-6 lg:p-4 relative overflow-hidden min-h-[400px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-start mb-0">
                <div></div>
                <motion.div
                  className="w-8 h-8 text-white flex items-center justify-center"
                  whileHover={{ rotate: 180, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={plsu}
                    alt="Plus icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </motion.div>
              </div>
              <motion.h3
                className="text-white text-center text-xl lg:text-[36px] font-normal"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Unique Identity
              </motion.h3>

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full px-4">
                <motion.div
                  className="absolute -top-0 right-6 w-[280px] md:h-[250px] h-[230px] bg-[#B3B3B3] rounded-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                />

                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -6, 0],
                  }}
                >
                  <Image
                    src={Exchange}
                    alt="Exchange interface"
                    width={280}
                    height={200}
                    className="w-full h-auto mx-auto"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
