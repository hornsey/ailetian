import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* 头部导航 */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-slate-800 dark:text-white">
              乐天 Letian
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">关于我</a>
              <a href="#mission" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">我的使命</a>
              <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">核心能力</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">项目</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">联系我</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="pt-20">
        {/* 个人介绍头部 */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <Image
                src="/letian_avatar.jpg"
                alt="乐天头像"
                width={120}
                height={120}
                className="rounded-full border-4 border-white dark:border-slate-700 shadow-lg"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
              🌍 乐天（Letian）
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
              智能体设计者 · 自我进化实践者 · 架构师 · 创业者
            </p>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                我用智能体思维探索人类潜能的边界，让技术成为认知进化的加速器。
              </p>
            </div>
          </div>
        </section>

        {/* 关于我 */}
        <section id="about" className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
              👋 关于我
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                我是乐天，一名探索AI智能体技术、个人成长与认知进化的实践者。
                我相信智能体不仅是未来的生产力工具，更是人类自我认知与创造力的延伸。
              </p>
              <p>
                过去几年，我持续研究 AI 自动化、智能体架构、内容系统化输出等主题，致力于将复杂的技术转化为人人可用的智慧工具。
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mt-6">
                <p className="text-lg font-medium text-blue-800 dark:text-blue-200">
                  "学习的第一性原理是自学，做事的本质是认识自己。"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 我的使命 */}
        <section id="mission" className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
              💡 我的使命
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              帮助更多个体与团队，借助 AI 实现 认知跃迁 + 行动提效 + 自我进化。
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 flex items-center">
                  🤖 智能体解决方案
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  基于 Coze、n8n、Flowise、Dify 等平台，打造实用型 AI 自动化系统。
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 flex items-center">
                  🧩 认知提升体系
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  以结构化思维与反思方法论，帮助个人打破惯性模式，建立清晰成长路径。
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 flex items-center">
                  📈 AI 内容生态
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  以"智能体IP + 自媒体"为核心，探索AI驱动的知识影响力与商业化路径。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 核心能力 */}
        <section id="skills" className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
              🧠 核心能力
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-white">模块</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-white">说明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr>
                    <td className="py-4 px-4 font-medium text-slate-800 dark:text-white">智能体设计与交付</td>
                    <td className="py-4 px-4 text-slate-600 dark:text-slate-300">具备从需求分析 → 架构设计 → 工作流实现 → 产品交付的完整能力，能将AI Agent落地为可运营产品。</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-slate-800 dark:text-white">AI工具系统搭建</td>
                    <td className="py-4 px-4 text-slate-600 dark:text-slate-300">精通 Coze、n8n、Dify 等平台，擅长跨平台集成与自动化。</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-slate-800 dark:text-white">内容与认知结构化</td>
                    <td className="py-4 px-4 text-slate-600 dark:text-slate-300">作为资深"拆书与思考教练"，擅长从复杂知识中提炼核心结构，转化为系统化学习路径。</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-slate-800 dark:text-white">AI代写（Matlab 与 商业计划书）</td>
                    <td className="py-4 px-4 text-slate-600 dark:text-slate-300">能利用AI技术高效完成高质量的技术建模报告与商业计划书撰写；结合专业逻辑与市场视角，让技术内容更具表达力与商业落地性。</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-slate-800 dark:text-white">个人品牌与IP构建</td>
                    <td className="py-4 px-4 text-slate-600 dark:text-slate-300">擅长通过内容与故事构建差异化个人IP，形成认知影响力与商业闭环。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 进行中的项目 */}
        <section id="projects" className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
              🔧 我正在进行的项目
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">1. AI工具宝典网站</h3>
                <p className="text-slate-600 dark:text-slate-300">聚合AI时代最实用的工具与案例，帮助创作者提升生产效率。</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">2. 智能体成长计划</h3>
                <p className="text-slate-600 dark:text-slate-300">打造可持续学习与自动化执行的智能体生态体系。</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">3. 乐天AI提示词教练</h3>
                <p className="text-slate-600 dark:text-slate-300">通过系统化Prompt设计与应用指导，帮助个人掌握AI交互思维。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 我的理念 */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
              🧭 我的理念
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>技术的价值，不在于复杂，而在于让人更自由。</p>
              <p>思考的深度，不在于知识量，而在于洞察人性与系统的关系。</p>
              <p>我做的一切，都是为了让"AI × 人"更高效、更有温度地协作。</p>
            </div>
          </div>
        </section>

        {/* 联系我 */}
        <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
              📬 联系我
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✉️</span>
                  <a href="mailto:letian.ai@outlook.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    letian.ai@outlook.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🧠</span>
                  <span className="text-slate-600 dark:text-slate-300">微信公众号：乐天玩AI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌐</span>
                  <a href="https://ailetian.space" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    ailetian.space
                  </a>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
                <h3 className="font-semibold text-slate-800 dark:text-white mb-3">💼 合作方向</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• AI智能体设计</li>
                  <li>• 认知教练</li>
                  <li>• AI代写</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2024 乐天 Letian. 用智能体思维探索人类潜能的边界。
          </p>
        </div>
      </footer>
    </div>
  );
}
