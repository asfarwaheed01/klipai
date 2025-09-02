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
    <section className="py-16 lg:py-12 bg-white relative overflow-hidden">
      {/* Green gradient background effect */}
      <div
        className="hidden md:block absolute top-[20%] left-0 w-[550px] h-[550px] rounded-full blur-xl opacity-80"
        style={{
          background:
            "radial-gradient(circle, rgba(157, 255, 176, 0.9) 0%, rgba(157, 255, 176, 0.6) 50%, transparent 100%)",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#D2EACF] border-[1px] border-[#119200] rounded-full mb-6">
            <span className="text-black text-[16px] font-bold">BENEFIT</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h2 className="text-2xl lg:text-5xl font-bold text-black leading-tight mb-6">
                Say goodbye to
                <br />
                <span className="block">Wallet Addresses.</span>
              </h2>
            </div>
            <div className="lg:pt-4">
              <p className="text-black md:max-w-[260px] text-[16px] leading-relaxed">
                Just enter the handle, select your token, and confirm. No
                copy-paste. No errors. No friction.
              </p>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 relative">
            <div className="bg-black rounded-3xl p-8 lg:p-4 relative overflow-hidden min-h-[600px] lg:min-h-[838px]">
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
                    <h3 className="text-white text-2xl lg:text-[36px] font-normal mb-2">
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

          {/* Right Column */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-black rounded-3xl p-6 lg:p-4 relative overflow-hidden min-h-[350px]">
              <div className="flex justify-center items-start">
                <h3 className="text-white text-center text-xl lg:text-[36px] font-normal">
                  Secure Transfers
                </h3>
              </div>
              <div className="flex items-center justify-center h-full flex-1">
                <Image
                  src={secure}
                  alt="Secure transfer visualization"
                  width={400}
                  height={600}
                  className="!w-full h-full "
                />
              </div>
            </div>

            <div className="bg-black rounded-3xl p-6 lg:p-4 relative overflow-hidden min-h-[400px]">
              <div className="flex justify-between items-start mb-6">
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

              <div className="flex items-center justify-center flex-1 relative">
                <div className="relative">
                  <Image
                    src={romolus}
                    alt="Romulus"
                    width={280}
                    height={200}
                    className="w-full max-full h-auto"
                  />

                  <div className="absolute bg-white/30 blue-lg rounded-xl -bottom-12 md:-right-6 -right-3 z-10">
                    <Image
                      src={performance}
                      alt="Performance chart"
                      width={140}
                      height={120}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Current Balance Card */}
            <div className="bg-black rounded-3xl p-6 lg:p-4 relative overflow-hidden min-h-[400px]">
              <div className="flex justify-between items-start mb-6">
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
              <div className="flex items-center justify-center flex-1">
                <Image
                  src={currentBalance}
                  alt="Current balance display"
                  width={280}
                  height={200}
                  className="w-full max-w-[280px] h-auto"
                />
              </div>
              <div className="absolute bottom-6 md:right-6 right-4">
                <Image
                  src={fastSwap}
                  alt="Fast Swap"
                  width={200}
                  height={200}
                  className="w-[220px] h-auto "
                />
              </div>
            </div>

            {/* Unique Identity Card */}
            <div className="bg-black rounded-3xl p-6 lg:p-4 relative overflow-hidden min-h-[400px]">
              <div className="flex justify-between items-start mb-0">
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
              <h3 className="text-white text-center text-xl lg:text-[36px] font-normal">
                Unique Identity
              </h3>

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full px-4">
                <div className="absolute -top-0 right-6 w-[280px] md:h-[250px] h-[230px] bg-[#B3B3B3] rounded-sm "></div>

                <div className="relative z-10">
                  <Image
                    src={Exchange}
                    alt="Exchange interface"
                    width={280}
                    height={200}
                    className="w-full h-auto mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
