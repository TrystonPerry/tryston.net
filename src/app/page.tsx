import Link from "next/link";
import FloatingMedia from "@/components/FloatingMedia";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Mysterious background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05),transparent_50%)]"></div>

      {/* Floating Media Hero Section */}
      {/* <FloatingMedia /> */}

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="size-32 md:size-48 rounded-2xl overflow-hidden">
              <img
                src="/me.jpeg"
                alt="Tryston Perry"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Tryston Perry
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Senior Software Engineer.
                <br />
                Shopify Expert.
                <br />
                Community Builder.
              </p>
              <div className="flex flex-wrap gap-4 text-lg text-gray-400 mb-12">
                <span>San Diego, CA</span>
                <span className="text-gray-600">•</span>
                <a
                  href="mailto:trystonperry@proton.me"
                  className="hover:text-blue-400 transition-colors"
                >
                  trystonperry@proton.me
                </a>
              </div>
            </div>
          </div>

          {/* Resume Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Link
              href="/resume"
              className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700 hover:border-blue-500/50"
            >
              <div>
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <svg
                    className="w-8 h-8 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Interactive Resume
                </h3>
                <p className="text-gray-400">
                  View my resume in a beautiful, interactive web format
                </p>
              </div>
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700 hover:border-purple-500/50 block"
            >
              <div>
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                  <svg
                    className="w-8 h-8 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Download PDF
                </h3>
                <p className="text-gray-400">
                  Download my resume as a PDF file
                </p>
              </div>
            </a>
          </div>

          {/* Professional Highlights */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-16 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-8">
              Professional Highlights
            </h2>

            {/* Key Achievements Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Shopify Expert
                </h3>
                <p className="text-gray-400 text-sm">
                  Scaled agency to 25+ clients
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Full-Stack Developer
                </h3>
                <p className="text-gray-400 text-sm">
                  VueJS, TypeScript, AI integration
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Community Leader
                </h3>
                <p className="text-gray-400 text-sm">Founded DEVx Network</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Open Source Creator
                </h3>
                <p className="text-gray-400 text-sm">
                  Built ViperCharts from scratch
                </p>
              </div>
            </div>

            {/* Detailed Achievements */}
            <div className="space-y-6">
              {/* Shopify Expertise */}
              <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-600">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Shopify Agency Growth
                    </h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Scaled Kuhl Shop agency to serve 25+ D2C brands</li>
                      <li>
                        • Built custom Shopify apps for wholesale portal
                        management
                      </li>
                      <li>
                        • Streamlined invoicing and self-service ordering
                        systems
                      </li>
                      <li>
                        • Managed freelancer teams during high-growth periods
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Full-Stack Development */}
              <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-600">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Advanced E-Commerce Solutions
                    </h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>
                        • Engineered full-stack VueJS & TypeScript loyalty
                        programs
                      </li>
                      <li>
                        • Built AI-powered receipt scanning and subscription
                        platforms
                      </li>
                      <li>
                        • Created pixel-perfect landing pages optimizing
                        conversion rates
                      </li>
                      <li>
                        • Maintained multiple Shopify stores with custom
                        integrations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Community Leadership */}
              <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-600">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Engineering Community Building
                    </h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>
                        • Founded and co-organize monthly DEVx Network meetups
                      </li>
                      <li>
                        • Built automated event recording systems using FFmpeg
                        and AI
                      </li>
                      <li>
                        • Created transcript generation workflows with AWS
                        services
                      </li>
                      <li>
                        • Fostered knowledge sharing among local software
                        engineers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Open Source Innovation */}
              <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-600">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      ViperCharts Platform
                    </h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>
                        • Built complete crypto charting framework from scratch
                      </li>
                      <li>
                        • Implemented custom WebWorker architecture for
                        performance
                      </li>
                      <li>
                        • Created data compression reducing bandwidth by 85%
                        (33MB→5MB)
                      </li>
                      <li>
                        • Developed custom rendering engine for real-time chart
                        updates
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Social Links Sidebar */}
      <div className="fixed bottom-0 p-12 left-6/12 translate-x-[-50%] md:left-[unset] md:bottom-[unset] md:translate-x-0 md:top-6/12 md:translate-y-[-50%] md:right-0 z-50 flex md:flex-col gap-4 md:p-4">
        <a
          href="mailto:trystonperry@proton.me"
          className="group relative flex items-center"
        >
          <div className="absolute right-full bg-blue-600/20 backdrop-blur-sm text-blue-400 px-3 py-2 rounded-lg border border-blue-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-full group-hover:translate-x-[-1rem] whitespace-nowrap">
            Email Me
          </div>
          <div className="w-12 h-12 bg-blue-600/20 backdrop-blur-sm rounded-lg border border-blue-500/30 flex items-center justify-center hover:bg-blue-600/30 transition-colors">
            <svg
              className="w-6 h-6 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </a>

        <a
          href="https://github.com/trystonperry"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
        >
          <div className="absolute right-full bg-gray-800/50 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-lg border border-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-full group-hover:translate-x-[-1rem] whitespace-nowrap">
            GitHub
          </div>
          <div className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-600 flex items-center justify-center hover:bg-gray-700/50 transition-colors">
            <svg
              className="w-6 h-6 text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/trystonperry"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
        >
          <div className="absolute right-full bg-blue-700/20 backdrop-blur-sm text-blue-400 px-3 py-2 rounded-lg border border-blue-600/30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-full group-hover:translate-x-[-1rem] whitespace-nowrap">
            LinkedIn
          </div>
          <div className="w-12 h-12 bg-blue-700/20 backdrop-blur-sm rounded-lg border border-blue-600/30 flex items-center justify-center hover:bg-blue-700/30 transition-colors">
            <svg
              className="w-6 h-6 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
