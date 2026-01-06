import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-[#262626] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/30 via-cyan-500/30 to-purple-600/30"></div>
      <div className="absolute inset-0 grid-bg opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <Image
                  src="/logo-circle.png"
                  alt="说道科技 Logo"
                  width={40}
                  height={40}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-bold text-white">说道科技</span>
                <span className="text-base font-semibold tracking-widest text-[#A6A6A6]" style={{ fontFamily: 'var(--font-geist-mono)' }}>
                  TALKDAO
                </span>
              </div>
            </div>
            <p className="text-[#A6A6A6] mb-4">
              专注于AI教育的科技公司，用人工智能技术赋能现代教育
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-[#A6A6A6] hover:text-white transition-all duration-300 inline-block hover:translate-x-1">
                  特色功能
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#A6A6A6] hover:text-white transition-all duration-300 inline-block hover:translate-x-1">
                  我们的服务
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#A6A6A6] hover:text-white transition-all duration-300 inline-block hover:translate-x-1">
                  关于我们
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#A6A6A6] hover:text-white transition-all duration-300 inline-block hover:translate-x-1">
                  联系我们
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">联系方式</h3>
            <ul className="space-y-2 text-[#A6A6A6]">
              <li>邮箱: contact@talkdao.tech</li>
              <li>电话: 188 1041 6904</li>
              <li>地址: 北京房山区良乡凯旋大街建设路18号</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#262626] mt-8 pt-8 text-center text-[#666666]">
          <p>&copy; 2023-2027 说道科技. All rights reserved.</p>
          <p className="mt-2">京ICP备2023008693号-1</p>
        </div>
      </div>
    </footer>
  );
}
