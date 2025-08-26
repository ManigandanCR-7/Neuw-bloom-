import React, { useEffect, useState } from "react";

const MobileIntroUI: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "Welcome to Neuw-Bloom 🌱",
      desc: "Your nature-infused brain companion for clarity, calm, and joy.",
    },
    {
      title: "Daily Guidance 🌸",
      desc: "Personalized mood-boosting activities backed by science & nature.",
    },
    {
      title: "Track & Grow 🌿",
      desc: "See your well-being bloom each day with insights and progress.",
    },
  ];

  return (
    <div
      className="relative w-[375px] h-[667px] mx-auto overflow-hidden rounded-2xl shadow-2xl"
      style={{ fontFamily: "sans-serif" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="your-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Glassy Slider */}
      <div className="absolute bottom-12 w-full px-4">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center text-white transition-all duration-700">
          <h2 className="text-xl font-bold mb-2">{slides[currentSlide].title}</h2>
          <p className="text-sm opacity-90">{slides[currentSlide].desc}</p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-white w-6"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileIntroUI;
