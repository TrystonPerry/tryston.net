export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Mysterious background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05),transparent_50%)]"></div>

      <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm shadow-2xl rounded-lg overflow-hidden border border-gray-700 relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm text-white p-8 border-b border-gray-700">
          <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">
            Tryston Perry
          </h1>
          <div className="flex flex-wrap gap-4 text-lg opacity-90">
            <span>San Diego, CA</span>
            <span className="text-gray-400">•</span>
            <a
              href="https://tryston.net"
              className="hover:text-blue-400 transition-colors"
            >
              tryston.net
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="mailto:trystonperry@proton.me"
              className="hover:text-blue-400 transition-colors"
            >
              trystonperry@proton.me
            </a>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Professional Experience */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 border-b-2 border-blue-500/30 pb-2">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {/* Shopify Expert */}
              <div className="border-l-4 border-blue-500 pl-6 bg-gray-700/30 rounded-r-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Shopify Expert
                    </h3>
                    <p className="text-blue-400 font-medium">
                      Kuhl Shop - kuhlshop.com
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">San Diego, CA</p>
                    <p className="text-gray-400">May '23 - Present</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>
                    Scaled my own Shopify design, development and consulting
                    agency to 25+ clients.
                  </li>
                  <li>
                    Collaborated with and guided growing D2C brands in managing
                    their online store.
                  </li>
                  <li>
                    Built a Shopify App in 3 months to streamline brands' online
                    wholesale portals. Helping streamline invoicing,
                    self-service ordering and managing price lists across
                    customers.
                  </li>
                  <li>
                    Delegated subtasks to and managed freelancers to help scale
                    during a high workload.
                  </li>
                </ul>
              </div>

              {/* Senior Software Engineer */}
              <div className="border-l-4 border-green-500 pl-6 bg-gray-700/30 rounded-r-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Senior Software Engineer
                    </h3>
                    <p className="text-green-400 font-medium">
                      Podium Nutrition LLC - 321podium.com
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">Remote</p>
                    <p className="text-gray-400">July '22 - Present</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Built and maintained two E-Commerce Shopify stores.</li>
                  <li>
                    Designed and engineered a Full-Stack VueJS & TS internal
                    customer loyalty program, along with a subscriptions
                    platform for recurring orders, an AI-powered receipt
                    scanner, a referral program, and additional features.
                  </li>
                  <li>
                    Designed and execute pixel perfect landing pages to maximize
                    conversion rate.
                  </li>
                  <li>
                    Dealt with customer support tickers and internal support
                    team.
                  </li>
                </ul>
              </div>

              {/* Community Organizer */}
              <div className="border-l-4 border-purple-500 pl-6 bg-gray-700/30 rounded-r-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Community Organizer
                    </h3>
                    <p className="text-purple-400 font-medium">
                      DEVx Network - devx.network
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">San Diego, CA</p>
                    <p className="text-gray-400">Dec. '23 - June '25</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>
                    Founded and currently co-organize a monthly meetup for local
                    software engineers. This platform encourages knowledge
                    sharing, networking, and mutual growth, fostering a vibrant
                    and supportive engineering community in our area.
                  </li>
                  <li>
                    Built automations to splice event recordings into talks for
                    each of our presenters using FFmpeg, AI transcript
                    generators, and AWS services.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Open Source Projects */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 border-b-2 border-blue-500/30 pb-2">
              Open Source Projects
            </h2>

            <div className="border-l-4 border-orange-500 pl-6 bg-gray-700/30 rounded-r-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Open Source Developer - ViperCharts
                  </h3>
                  <a
                    href="https://github.com/ViperCharts/viper-charts-js"
                    className="text-orange-400 font-medium hover:text-orange-300 transition-colors"
                  >
                    https://github.com/ViperCharts/viper-charts-js
                  </a>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">Aug. '21 - Nov. '22</p>
                </div>
              </div>
              <p className="text-gray-300 mb-3">
                ViperCharts is an open-source platform/framework for charting
                and comparing crypto-currency asset prices across exchanges and
                markets.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>
                  Built entirely from scratch as a solo project intent on
                  unifying all data in crypto.
                </li>
                <li>
                  Wrote functions to convert time and price values to pixel
                  locations based on screen dimensions and visible range.
                </li>
                <li>
                  Built a custom rendering engine to re-calculate pixel
                  instructions whenever the plotted data state changes.
                </li>
                <li>
                  Implemented a custom WebWorker message broker to offload CPU
                  intensive operations like chart updates to alternative CPU
                  cores, massively improving the responsivity of the UI and
                  preventing the hanging of the main thread.
                </li>
                <li>
                  Implemented a custom data granularity algorithm and g-zip
                  compression for historical market data and all client-server
                  requests to reduce bandwidth usage from ~33MB to ~5MB.
                </li>
              </ul>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 border-b-2 border-blue-500/30 pb-2">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "SCSS",
                "React",
                "Vue",
                "Svelte",
                "NextJS",
                "Bun",
                "JavaScript",
                "TypeScript",
                "Drizzle ORM",
                "MySQL",
                "PostgreSQL",
                "OpenAI API",
                "Gemini API",
                "Vertex AI",
                "AWS",
                "Digital Ocean",
                "WebGL",
                "WebWorkers",
                "WebSockets",
                "HTTP 2.0",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Interests/Hobbies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 border-b-2 border-blue-500/30 pb-2">
              Interests/Hobbies
            </h2>
            <p className="text-gray-300 text-lg">
              Indoor / outdoor bouldering, cooking, marketing & sales.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
