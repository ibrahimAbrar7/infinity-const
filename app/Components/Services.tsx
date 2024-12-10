import React from "react";

const Services = () => {
  const services = [
    {
        title: "Historical Landmarks Design Restoration",
        description:
          "Preserving the cultural heritage of our beloved city, we meticulously restore historical landmarks to their former glory. We breathe new life into these cherished treasures, from intricate architectural details to grand facades.",
        image: "/service1.avif", // Replace with actual image paths
      },
      {
        title: "Fire Escape",
        description:
          "Ensure safety meets style with our Fire Escape Services. Whether restoring, replacing, or installing, we prioritize functionality and aesthetics. Choose security and style with our Fire Escape Services.",
        image: "/service2.avif", // Replace with actual image paths
      },
      {
        title: "Roofing",
        description:
          "Secure your home with our Roofing Services. From repairs to installations, we provide durable solutions for a watertight and stylish roof. Trust our skilled team for top-notch craftsmanship and lasting peace of mind.",
        image: "/service3.avif", // Replace with actual image paths
      },
      {
        title: "Paving",
        description:
          "Revitalize your surroundings with our Paving Services. From driveways to walkways, we create seamless, stylish pathways that combine aesthetics and functionality. Choose us for expert craftsmanship and efficient Paving Services.",
        image: "/service4.avif", // Replace with actual image paths
      },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
          Our Specialty
        </h2>
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/3 h-64 object-cover"
              />
              <div className="p-6 md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
