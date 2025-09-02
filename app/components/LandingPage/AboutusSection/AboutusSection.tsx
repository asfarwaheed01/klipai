import React from "react";
import Image from "next/image";
import { Bitcoin } from "lucide-react";
import iphone from "@/public/assets/images/iPhone-section-2.png";

const AboutusSection = () => {
  return (
    <section className="py-5 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:gap-20 gap-10 items-center">
          {/* Left side - iPhone container with background */}
          <div className="relative md:w-[50%] flex justify-center overflow-hidden lg:justify-start">
            {/* Background container */}
            <div className="relative bg-[#F4F2F0] w-full flex justify-center rounded-sm p-16 !pb-0 sm:p-12 lg:p-16">
              {/* Main iPhone */}
              <div className="relative">
                <Image
                  src={iphone}
                  alt="iPhone showing KlipAi interface"
                  width={280}
                  height={560}
                  className="w-64 h-auto sm:w-72 lg:w-80 drop-shadow-2xl"
                />
              </div>

              {/* Floating Bitcoin card - Top Left (Orange background) */}
              <div className="absolute md:top-[11%] top-6 left-[-2%]  z-10">
                <div className="bg-white rounded-md md:p-3 p-1 shadow-lg border border-gray-200">
                  <div className="flex items-center md:gap-10 gap-4">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#FF8933" }}
                      >
                        <Bitcoin className="w-5 h-5 text-white" />
                      </div>
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
                      <div className="text-sm md:text-[18px] font-semibold text-gray-900">
                        78,393
                      </div>
                      <div className="text-[13px] text-green-500">+4.23%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Bitcoin card - Bottom Right (Light green background) */}
              <div className="absolute bottom-[4%] right-[-1%] z-10">
                <div className="bg-white md:w-[200px] w-[150px] rounded-sm md:p-3 p-1 shadow-xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#D2EAE4" }}
                    >
                      <Bitcoin className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <div className="text-sm md:text-[18px] font-semibold text-gray-900">
                        BTC / USDT
                      </div>
                      <div className="text-xs text-gray-500">Bitcoin</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="md:w-[50%] text-left">
            <h2 className="text-[38px] lg:text-[48px] font-bold text-black leading-tight mb-6">
              What is KlipAi
            </h2>
            <p className="text-[12px] md:max-w-[500px] lg:text-[16px] text-gray-700 leading-relaxed">
              KlipAi is the all-in-one smart wallet layer for Web3.We turn every
              crypto transaction into a clean, AI-powered receipt. You can also
              send tokens using a simple username.No TX hashes. No wallet
              address mistakes.Just clarity, control, and convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutusSection;
