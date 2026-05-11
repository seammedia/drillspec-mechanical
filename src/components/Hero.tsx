import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Drillspec Mechanical service vehicle on mine site"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy-900/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm animate-fade-in-up">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-sm text-white/70">
              24/7 Emergency Support Available
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100">
            Expert Drill Maintenance &{" "}
            <span className="text-orange-500">Support Services</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl animate-fade-in-up delay-200">
            Keeping Western Australia&apos;s drilling operations running with
            minimal downtime. 24/7 emergency support, preventive maintenance,
            and field service across Goldfields, Metro, and Pilbara.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/25"
            >
              Get a Quote
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border-2 border-white/20 hover:border-orange-500/50 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:bg-white/5 backdrop-blur-sm"
            >
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-white/10 animate-fade-in-up delay-400">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                24/7
              </div>
              <div className="text-sm text-white/50 mt-1">
                Emergency Response
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                3
              </div>
              <div className="text-sm text-white/50 mt-1">
                WA Regions Covered
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                100%
              </div>
              <div className="text-sm text-white/50 mt-1">
                Safety Compliant
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </section>
  );
}
