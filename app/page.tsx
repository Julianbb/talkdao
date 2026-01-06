import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-black">
        {/* 装饰光球 */}
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>

        {/* 网格背景 */}
        <div className="absolute inset-0 grid-bg opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">AI赋能教育</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#A6A6A6] mb-8 max-w-3xl mx-auto">
              用人工智能技术革新教育方式，让学习更智能、更高效、更个性化
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 btn-primary text-white rounded-lg text-lg font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                开始体验
              </a>
              <a
                href="#services"
                className="px-8 py-4 glass-card text-white rounded-lg text-lg font-medium hover:border-blue-500/50 transition-all"
              >
                了解更多
              </a>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card glass-card-hover p-8 rounded-xl">
              <div className="w-12 h-12 icon-bg-gradient rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">智能化</h3>
              <p className="text-[#A6A6A6]">AI驱动的个性化学习体验</p>
            </div>

            <div className="glass-card glass-card-hover p-8 rounded-xl">
              <div className="w-12 h-12 icon-bg-gradient rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">创新性</h3>
              <p className="text-[#A6A6A6]">前沿技术应用于教育场景</p>
            </div>

            <div className="glass-card glass-card-hover p-8 rounded-xl">
              <div className="w-12 h-12 icon-bg-gradient rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">专业性</h3>
              <p className="text-[#A6A6A6]">深耕教育领域的技术团队</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative overflow-hidden">
        {/* 深色渐变背景 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0E27] to-black"></div>

        {/* 装饰光球 */}
        <div className="bg-orb bg-orb-3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              核心特色
            </h2>
            <p className="text-xl text-[#A6A6A6]">我们用AI技术为教育带来革命性改变</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card glass-card-hover p-6 rounded-xl group">
              <div className="w-16 h-16 icon-bg-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:gradient-text transition-all">智能推荐系统</h3>
              <p className="text-[#A6A6A6]">
                基于AI算法的个性化内容推荐，精准匹配每个学生的学习需求和进度
              </p>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-xl group">
              <div className="w-16 h-16 icon-bg-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:gradient-text transition-all">学习数据分析</h3>
              <p className="text-[#A6A6A6]">
                实时追踪学习进度，智能分析学习行为，提供详细的学习报告和改进建议
              </p>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-xl group">
              <div className="w-16 h-16 icon-bg-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:gradient-text transition-all">AI智能答疑</h3>
              <p className="text-[#A6A6A6]">
                24/7在线AI助教，即时解答学生疑问，提供详细的解题思路和知识点讲解
              </p>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-xl group">
              <div className="w-16 h-16 icon-bg-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:gradient-text transition-all">自适应课程</h3>
              <p className="text-[#A6A6A6]">
                根据学生表现动态调整课程难度和内容，确保最佳学习效果
              </p>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-xl group">
              <div className="w-16 h-16 icon-bg-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:gradient-text transition-all">协作学习平台</h3>
              <p className="text-[#A6A6A6]">
                支持师生互动、同学协作，打造活跃的在线学习社区
              </p>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-xl group">
              <div className="w-16 h-16 icon-bg-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:gradient-text transition-all">安全可靠</h3>
              <p className="text-[#A6A6A6]">
                采用先进的数据加密和隐私保护技术，确保学习数据安全
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden bg-black">
        <div className="absolute inset-0 grid-bg opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              我们的服务
            </h2>
            <p className="text-xl text-[#A6A6A6]">全方位的AI教育解决方案</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card glass-card-hover p-8 rounded-xl border-l-4 border-blue-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 icon-bg-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">K-12在线教育平台</h3>
                  <p className="text-[#A6A6A6] mb-4">
                    覆盖小学到高中全学段的AI辅助教学平台，提供互动课程、智能练习、在线测评等完整教学服务
                  </p>
                  <ul className="space-y-2 text-[#666666]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      智能课程体系
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      个性化学习路径
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      实时学习反馈
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-8 rounded-xl border-l-4 border-purple-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 icon-bg-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">企业培训解决方案</h3>
                  <p className="text-[#A6A6A6] mb-4">
                    为企业提供AI驱动的员工培训系统，支持技能培训、考核认证、知识管理等功能
                  </p>
                  <ul className="space-y-2 text-[#666666]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      定制化课程开发
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      智能考核系统
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      学习数据分析
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-8 rounded-xl border-l-4 border-cyan-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 icon-bg-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">AI编程教育</h3>
                  <p className="text-[#A6A6A6] mb-4">
                    从零基础到高级编程，提供完整的编程学习路径，配备AI代码助手和智能纠错系统
                  </p>
                  <ul className="space-y-2 text-[#666666]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      项目制学习
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      AI代码审查
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      实战项目指导
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-8 rounded-xl border-l-4 border-pink-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 icon-bg-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">智能教务管理</h3>
                  <p className="text-[#A6A6A6] mb-4">
                    为学校和教育机构提供全面的AI教务管理系统，提升管理效率和教学质量
                  </p>
                  <ul className="space-y-2 text-[#666666]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      智能排课系统
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      学生管理平台
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      教学质量分析
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden bg-black">
        <div className="bg-orb bg-orb-2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                关于我们
              </h2>
              <p className="text-lg text-[#A6A6A6] mb-6">
                说道科技成立于2023年，是一家专注于AI教育领域的创新科技公司。我们致力于将人工智能技术与教育深度融合，为学校、教育机构和企业提供智能化的教育解决方案。
              </p>
              <p className="text-lg text-[#A6A6A6] mb-6">
                我们的团队由来自顶尖科技公司和教育机构的专家组成，在AI技术、教育学、心理学等领域拥有深厚的专业背景。我们相信，技术可以让教育更加公平、高效和个性化。
              </p>
              <div className="grid grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">10万+</div>
                  <div className="text-[#666666]">服务学生</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-[#666666]">合作机构</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">98%</div>
                  <div className="text-[#666666]">满意度</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card rounded-xl p-8 border-2 border-purple-500/30">
                <h3 className="text-2xl font-bold mb-6 text-white">我们的使命</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-[#A6A6A6]">让每个人都能享受到优质的教育资源</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-[#A6A6A6]">用AI技术解决教育中的实际问题</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-[#A6A6A6]">推动教育行业的数字化转型</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-[#A6A6A6]">培养适应未来社会的创新人才</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden bg-black">
        <div className="absolute inset-0 grid-bg opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              联系我们
            </h2>
            <p className="text-xl text-[#A6A6A6]">有任何问题或合作意向，欢迎随时联系</p>
          </div>

          <div className="glass-card rounded-xl p-8 md:p-12 border-2 border-blue-500/30 relative overflow-hidden">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#A6A6A6] mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 input-glass rounded-lg outline-none text-white placeholder-[#666666]"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#A6A6A6] mb-2">
                    邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 input-glass rounded-lg outline-none text-white placeholder-[#666666]"
                    placeholder="请输入您的邮箱"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#A6A6A6] mb-2">
                  联系电话
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 input-glass rounded-lg outline-none text-white placeholder-[#666666]"
                  placeholder="请输入您的联系电话"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#A6A6A6] mb-2">
                  公司/机构
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 input-glass rounded-lg outline-none text-white placeholder-[#666666]"
                  placeholder="请输入您的公司或机构名称"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#A6A6A6] mb-2">
                  留言内容
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 input-glass rounded-lg outline-none text-white placeholder-[#666666]"
                  placeholder="请描述您的需求或问题"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 btn-primary text-white rounded-lg font-medium text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
              >
                提交咨询
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-[#262626]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 icon-bg-gradient rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-[#A6A6A6]">contact@talkdao.tech</p>
                </div>
                <div>
                  <div className="w-12 h-12 icon-bg-gradient rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="text-[#A6A6A6]">188 1041 6904</p>
                </div>
                <div>
                  <div className="w-12 h-12 icon-bg-gradient rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-[#A6A6A6] text-sm">北京房山区良乡凯旋大街建设路18号</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
