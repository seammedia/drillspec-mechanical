const capabilities = [
  {
    title: "Field Service",
    description:
      "Providing on-site maintenance, repairs, and troubleshooting for drilling equipment.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085"
        />
      </svg>
    ),
  },
  {
    title: "24/7 Breakdown Support",
    description:
      "Prompt response and on-site assistance, day or night, to resolve any mechanical breakdowns or emergencies.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Shutdowns",
    description:
      "Comprehensive maintenance and repairs on drilling equipment during planned shutdown periods to maximise efficiency and minimize downtime.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
        />
      </svg>
    ),
  },
  {
    title: "Scheduled Maintenance",
    description:
      "Regularly inspecting and servicing drilling equipment to ensure optimal performance and prevent potential breakdowns.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              Capability Statement
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
              WA&apos;s Leading Drill Maintenance Specialists
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Drillspec Mechanical is a leading drill maintenance specialist
              based in Western Australia. With years of experience and
              expertise, we have established ourselves as the go-to company for
              all drill maintenance in the Goldfields and Pilbara region.
            </p>
            <p className="text-white/70 leading-relaxed mb-6">
              We prioritise providing 24/7 breakdown support to clients. Our
              team of skilled technicians are available to handle all emergency
              repairs and troubleshooting needs, ensuring minimal machinery
              downtime and enhancing client turnover.
            </p>
            <p className="text-white/70 leading-relaxed">
              Furthermore, we specialise in assisting with shutdowns. Our team
              works closely with clients to provide expert technical support
              during shutdowns, ensuring smooth operations and minimising
              disruptions.
            </p>
          </div>

          <div className="space-y-8">
            {/* Mission */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Our Mission</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Drillspec Mechanical aims to be Western Australia&apos;s leading
                drill contractor by consistently delivering superior drilling
                services. We are dedicated to surpassing client expectations and
                setting new industry benchmarks through our commitment to
                excellence.
              </p>
            </div>

            {/* Promise */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Our Promise</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                We commit to providing precise and efficient drilling solutions
                that consistently meet your project requirements. With our
                experienced team, we guarantee timely completion, utmost
                professionalism, and the highest level of customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="text-orange-500 mb-5">{cap.icon}</div>
              <h3 className="text-lg font-bold mb-3">{cap.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
