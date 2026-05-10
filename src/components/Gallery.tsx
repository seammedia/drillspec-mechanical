import Image from "next/image";

const photos = [
  {
    src: "/images/gallery-3.jpg",
    alt: "Drillspec Mechanical fleet - service vehicles DM01, DM02, DM03",
    span: "sm:col-span-2",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Drillspec service vehicles at drill rig on mining site",
    span: "",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Drillspec vehicle with Epiroc drill rigs on Pilbara mine site",
    span: "",
  },
  {
    src: "/images/gallery-7.jpg",
    alt: "Drillspec service vehicle with four drill rigs at dusk",
    span: "sm:col-span-2",
  },
  {
    src: "/images/gallery-1.jpg",
    alt: "Drillspec technician working on drilling equipment",
    span: "",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Drillspec vehicles on site at sunset in the Pilbara",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-4">
            Photo Gallery
          </h2>
          <p className="text-gray-text text-lg">
            See our team in action across Western Australia&apos;s mining and
            drilling sites.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`relative aspect-[4/3] rounded-2xl overflow-hidden group ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
