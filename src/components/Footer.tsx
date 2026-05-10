import Image from "next/image";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#team", label: "Team" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Drill Spec Mechanical"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Expert drill maintenance and support services keeping Western
              Australia&apos;s drilling operations running with minimal downtime.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:admin@drillspecmech.com"
                  className="text-white/60 hover:text-orange-500 transition-colors"
                >
                  admin@drillspecmech.com
                </a>
              </li>
              <li className="text-white/60">
                PO BOX 7254, Secret Harbour WA 6173
              </li>
              <li className="text-white/60">
                Goldfields | Metro | Pilbara
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Drillspec Mechanical. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
