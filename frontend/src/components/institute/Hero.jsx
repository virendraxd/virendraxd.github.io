import React, { useEffect, useRef, useState } from 'react';

function Hero() {
  const slides = [
    {
      title: "Top Faculty",
    },
    {
      title: "Best Results",
    },
    {
      title: "Modern Classrooms",
    }
  ];

  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.scrollTo({
      left: index * slider.clientWidth,
      behavior: "smooth",
    });

    setCurrent(index);
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const interval = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % slides.length;

        slider.scrollTo({
          left: next * slider.clientWidth,
          behavior: "smooth",
        });

        return next;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-slider">
      <ul ref={sliderRef}>
        {slides.map((slide, index) => (
          <li key={index}>
            <div>
              <p>{slide.title}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;