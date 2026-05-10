const team = [
  {
    name: "Dylan Gallanagh",
    role: "Director, Goldfields Division",
    initials: "DG",
  },
  {
    name: "Grant Hinsbey",
    role: "Director, Metro Division",
    initials: "GH",
  },
  {
    name: "Jake Mobilia",
    role: "Director, Goldfields Division",
    initials: "JM",
  },
  {
    name: "Zachary Parsons",
    role: "Director, Pilbara Division",
    initials: "ZP",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-4">
            Meet The Team
          </h2>
          <p className="text-gray-text text-lg">
            Our experienced leadership team brings decades of combined expertise
            in drilling equipment maintenance across Western Australia.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Avatar */}
              <div className="w-24 h-24 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-navy-800 transition-colors">
                <span className="text-2xl font-bold text-orange-500">
                  {member.initials}
                </span>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-text text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
