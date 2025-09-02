import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import iphone from "@/public/assets/images/iphone.svg";
import ellipse from "@/public/assets/images/greenellipse.svg";
import planet from "@/public/assets/images/Planet.svg";
import star from "@/public/assets/images/star.svg";
import iphonemobile from "@/public/assets/images/iphone_mobile.png";

const HeroSection = () => {
  return (
    <section className="relative md:pt-[7%] pt-[10%] min-h-screen bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-12 md:py-0 text-center">
          <div className="mx-auto mb-8">
            <h1 className="text-[38px] md:w-full w-[296px] mx-auto lg:text-[48px] xl:text-[48px] font-bold leading-tight mb-6">
              AI receipts. Simple crypto.
              <br />
              <span className="block">Smart control.</span>
            </h1>

            <div className="hidden md:block space-y-2 md:text-[16px] mx-auto ">
              <p>Klip Is Your All-In-One Decentralized Wallet</p>
              <p>Designed For Security, Flexibility, And Full Ownership.</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-12 hidden md:block">
            <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-full text-[14px] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
              GET STARTED
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative w-full mx-auto">
            <div className="relative flex justify-center transform ">
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
                  height={800}
                  className="w-full h-full hidden md:block sm:w-full lg:w-full xl:w-full drop-shadow-2xl md:drop-shadow-none"
                />
                {/* Mobile Iphone */}
                <Image
                  src={iphonemobile}
                  alt="iPhone showing Klip wallet interface"
                  width={500}
                  height={1000}
                  className="w-[376px] md:hidden h-[476px] drop-shadow-2xl"
                />
              </div>
              {/* Desktop floating cards */}
              <div className="absolute top-25 left-[21%] z-30 hidden sm:block">
                <div className="bg-[#8C8C8C57] backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/20">
                  <div className="flex flex-row-reverse items-center gap-6">
                    <div className="flex flex-row-reverse items-center gap-1">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <Image
                          src={planet}
                          alt="Planet icon"
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                      </div>
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
                      <span className="text-[18px] !text-white ">
                        $2,951.73
                      </span>
                      <div className="text-[18px] text-black">APL 17</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-30 right-[18%] z-30 hidden sm:block">
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
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <Image
                          src={star}
                          alt="Star icon"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[18px] !text-white">
                          $3,271.20
                        </span>
                      </div>
                      <div className="text-[18px] text-black">RLS 24</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile floating cards */}
              <div className=" absolute top-0 left-[-10px] z-30 sm:hidden">
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

                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <Image
                        src={planet}
                        alt="Planet icon"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-[-10px] z-30 sm:hidden ">
                <div className="bg-[#8C8C8C57] backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
                      <Image
                        src={star}
                        alt="Star icon"
                        width={14}
                        height={14}
                        className="w-3.5 h-3.5"
                      />
                    </div>
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
              </div>
            </div>
          </div>
          <div className="md:hidden block mx-auto mt-16">
            <div className=" space-y-1 text-[12px] mx-auto mb-4 ">
              <p>Klip Is Your All-In-One Decentralized Wallet</p>
              <p>Designed For Security, Flexibility, And Full Ownership.</p>
            </div>
            <div className="flex justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-full text-[14px] font-bold uppercase transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
                GET STARTED
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
