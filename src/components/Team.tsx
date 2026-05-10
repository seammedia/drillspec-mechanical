const team = [
  {
    name: "Dylan Gallanagh",
    role: "Director",
    division: "Goldfields Division",
    phone: "0437 598 348",
    email: "Dylan.gallanagh@drillspecmech.com",
    initials: "DG",
  },
  {
    name: "Grant Hinsbey",
    role: "Director",
    division: "Metro Division",
    phone: "0411 671 051",
    email: "grant.hinsbey@drillspecmech.com",
    initials: "GH",
  },
  {
    name: "Jake Mobilia",
    role: "Director",
    division: "Goldfields Division",
    phone: "0431 339 835",
    email: "jake.mobilia@drillspecmech.com",
    initials: "JM",
  },
  {
    name: "Zachary Parsons",
    role: "Director",
    division: "Pilbara Division",
    phone: "0458 462 211",
    email: "Zachary.parsons@drillspecmech.com",
    initials: "ZP",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-4">
            Meet The Directors
          </h2>
          <p className="text-gray-text text-lg">
            Our experienced leadership team brings decades of combined expertise
            in drilling equipment maintenance across Western Australia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-24 h-24 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-navy-800 transition-colors">
                <span className="text-2xl font-bold text-orange-500">
                  {member.initials}
                </span>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-1">
                {member.name}
              </h3>
              <p className="text-orange-500 font-medium text-sm mb-1">
                {member.role}
              </p>
              <p className="text-gray-text text-sm mb-4">{member.division}</p>

              <div className="pt-4 border-t border-gray-100 space-y-2">
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 text-sm text-gray-text hover:text-orange-500 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  {member.phone}
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center gap-2 text-sm text-gray-text hover:text-orange-500 transition-colors truncate"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span className="truncate">{member.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
