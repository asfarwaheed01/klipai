import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import iphone from "@/public/assets/images/iphone.svg";
import ellipse from "@/public/assets/images/greenellipse.svg";

const HeroSection = () => {
  return (
    <section className="relative pt-[5%] min-h-screen bg-white overflow-hidden">
      {/* Light green gradient background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-transparent opacity-60"></div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-12 text-center">
          {/* Main Heading */}
          <div className="mx-auto mb-8">
            <h1 className="text-[34px] lg:text-[48px] xl:text-[48px] font-bold leading-tight mb-6">
              AI receipts. Simple crypto.
              <br />
              <span className="block">Smart control.</span>
            </h1>

            {/* Subheading */}
            <div className="space-y-2 text-lg md:text-[16px] mx-auto">
              <p>Klip Is Your All-In-One Decentralized Wallet</p>
              <p>Designed For Security, Flexibility, And Full Ownership.</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
              GET STARTED
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Phone and Visual Elements Container */}
          <div className="relative w-full mx-auto">
            {/* Green Ellipse Background */}
            <div className="flex justify-center transform ">
              <Image
                src={ellipse}
                alt="Green ellipse background"
                width={600}
                height={600}
                className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] opacity-80"
              />
              {/* iPhone */}
              <div className="absolute top-[-20%] z-20 flex justify-center">
                <Image
                  src={iphone}
                  alt="iPhone showing Klip wallet interface"
                  width={300}
                  height={600}
                  className="w-64 h-auto sm:w-full lg:w-full xl:w-full drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Floating Elements */}
            {/* Apple Stock Card - Top Left */}
            <div className="absolute top-8 left-4 sm:left-8 lg:left-16 z-30 hidden sm:block">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-600">
                      APL
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-600">
                        $231.73
                      </span>
                      <span className="text-xs text-gray-500">Apple</span>
                    </div>
                    <div className="text-xs text-gray-500">APL 17</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gratuitus Card - Bottom Right */}
            <div className="absolute bottom-12 right-4 sm:right-8 lg:right-16 z-30 hidden sm:block">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-gray-600">
                      ★
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-600">
                        Gratuitus
                      </span>
                      <span className="text-xs text-green-600">$32.89</span>
                    </div>
                    <div className="text-xs text-gray-500">RLS 24</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional floating card for mobile - simplified */}
            <div className="absolute top-12 right-4 z-30 sm:hidden">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-gray-600">
                      APL
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-600">
                      $231.73
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 left-4 z-30 sm:hidden">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-gray-600">
                      ★
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-600">
                      $32.89
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional gradient overlay for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-5"></div>
    </section>
  );
};

export default HeroSection;
