import React from "react";
import Image from "next/image";
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
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Green gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 via-green-50/20 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
            <span className="text-green-700 text-sm font-medium">BENEFIT</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
                Say goodbye to
                <br />
                <span className="block">Wallet Addresses.</span>
              </h2>
            </div>
            <div className="lg:pt-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                Just enter the handle, select your token, and confirm. No
                copy-paste.
                <br />
                <span className="block mt-2">No errors. No friction.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Large iPhone Card */}
          <div className="lg:col-span-1 relative">
            <div className="bg-black rounded-3xl p-8 lg:p-12 relative overflow-hidden min-h-[600px] lg:min-h-[838px]">
              {/* Content */}
              <div className=" z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="w-12 h-12 bg-[#142D11] border-[1px] border-green-900 rounded-2xl flex items-center justify-center mb-4">
                      <Image
                        src={Tropy}
                        alt="Trophy icon"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </div>
                    <h3 className="text-white text-2xl lg:text-3xl font-bold mb-2">
                      Token
                      <br />
                      Support
                    </h3>
                  </div>
                  <div className=" w-8 h-8 text-white flex items-center justify-center">
                    <Image
                      src={plsu}
                      alt="Plus icon"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                </div>

                {/* iPhone Image */}
                <div className="flex-1 flex items-center justify-center relative z-20">
                  <div className="relative">
                    <Image
                      src={iphone}
                      alt="iPhone showing KlipAi dashboard"
                      width={1000}
                      height={1000}
                      className="w-full h-[580px]"
                    />
                  </div>
                </div>

                {/* Bottom lines - positioned at the very bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-10">
                  <Image
                    src={lines}
                    alt="Green lines"
                    width={300}
                    height={100}
                    className="w-full h-auto opacity-70"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 2x2 Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {/* Secure Transfers Card */}
            <div className="bg-black rounded-3xl p-6 lg:p-8 relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-white text-xl lg:text-2xl font-bold">
                  Secure Transfers
                </h3>
                <div className="w-8 h-8 text-white flex items-center justify-center">
                  <Image
                    src={plsu}
                    alt="Plus icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center h-32">
                <Image
                  src={secure}
                  alt="Secure transfer visualization"
                  width={200}
                  height={120}
                  className="w-full h-auto max-w-[180px]"
                />
              </div>
            </div>

            {/* Romulus Performance Card */}
            <div className="bg-black rounded-3xl p-6 lg:p-8 relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <div></div>
                <div className="w-8 h-8 text-white flex items-center justify-center">
                  <Image
                    src={plsu}
                    alt="Plus icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <Image
                    src={romolus}
                    alt="Romulus"
                    width={120}
                    height={80}
                    className="w-full max-w-[100px] h-auto"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src={performance}
                    alt="Performance chart"
                    width={150}
                    height={100}
                    className="w-full max-w-[120px] h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Current Balance Card */}
            <div className="bg-black rounded-3xl p-6 lg:p-8 relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <div></div>
                <div className="w-8 h-8 text-white flex items-center justify-center">
                  <Image
                    src={plsu}
                    alt="Plus icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center h-32">
                <Image
                  src={currentBalance}
                  alt="Current balance display"
                  width={200}
                  height={120}
                  className="w-full h-auto max-w-[180px]"
                />
              </div>
            </div>

            {/* Unique Identity Card */}
            <div className="bg-black rounded-3xl p-6 lg:p-8 relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-white text-xl lg:text-2xl font-bold">
                  Unique Identity
                </h3>
                <div className="w-8 h-8 text-white flex items-center justify-center">
                  <Image
                    src={plsu}
                    alt="Plus icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center h-32">
                <Image
                  src={Exchange}
                  alt="Exchange interface"
                  width={200}
                  height={120}
                  className="w-full h-auto max-w-[180px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hidden images for Fast Swap - can be used in hover states or animations */}
        <div className="hidden">
          <Image src={fastSwap} alt="Fast Swap" width={200} height={120} />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
