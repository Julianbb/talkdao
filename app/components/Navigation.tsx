"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/logo-circle.png"
                  alt="说道科技 Logo"
                  width={80}
                  height={80}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-bold text-white">
                  说道科技
                </span>
                <span className="text-base font-semibold tracking-wider text-[#A6A6A6]" style={{ fontFamily: 'var(--font-geist-mono)' }}>
                  TALKDAO
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[#A6A6A6] hover:text-white transition-colors cursor-pointer nav-link-underline"
            >
              首页
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-[#A6A6A6] hover:text-white transition-colors cursor-pointer nav-link-underline"
            >
              特色
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-[#A6A6A6] hover:text-white transition-colors cursor-pointer nav-link-underline"
            >
              服务
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#A6A6A6] hover:text-white transition-colors cursor-pointer nav-link-underline"
            >
              关于我们
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 btn-primary text-white rounded-lg font-medium cursor-pointer shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
            >
              联系我们
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#A6A6A6] hover:text-white focus:outline-none cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-[#262626]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-3 py-2 text-[#A6A6A6] hover:text-white hover:bg-[#121212] rounded-md cursor-pointer"
            >
              首页
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-3 py-2 text-[#A6A6A6] hover:text-white hover:bg-[#121212] rounded-md cursor-pointer"
            >
              特色
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-3 py-2 text-[#A6A6A6] hover:text-white hover:bg-[#121212] rounded-md cursor-pointer"
            >
              服务
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 text-[#A6A6A6] hover:text-white hover:bg-[#121212] rounded-md cursor-pointer"
            >
              关于我们
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 btn-primary text-white rounded-md font-medium cursor-pointer shadow-lg shadow-blue-500/20"
            >
              联系我们
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
