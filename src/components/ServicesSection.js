import afbKnippen from '../images/img-13.png';
import afbKleuren from '../images/img-8.webp';
import afbStyling from '../images/img-11.webp';
import React, { forwardRef } from 'react';

const ServicesSection = forwardRef(({ visible }, ref) => {
  const services = [
    {
      title: 'Knippen',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, itaque!',
      image: afbKnippen
    },
    {
      title: 'Kleuren',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, itaque!',
      image: afbKleuren
    },
    {
      title: 'Styling',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, itaque!',
      image: afbStyling
    },
  ]


  return (
    <section ref={ref}>
      <div className="max-w-6xl mx-auto py-12 lg:py-24 px-4">
        <h2 className="text-3xl font-bold mb-8">Onze behandelingen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-8">
          {services.map((service, index) => {
            let additionalClass = "";
            if (index >= 1) {
              additionalClass = `animation-delay-${index}`;
            }

            return (
              <div
                key={service.title}
                className={`${visible
                  ? "slideInLeftSlow service-card p-4 shadow-lg md:opacity-0 max-w-sm mx-auto"
                  : "service-card p-4 shadow-lg md:opacity-0 max-w-sm mx-auto"
                  } ${additionalClass}`}
              >
                <figure>
                  <img className="w-full h-60 object-cover" src={service.image} alt="" />
                </figure>
                <div className="pt-4">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-6 mb-4">{service.description}</p>
                  <a className="inline-block px-4 py-2 bg-secondary text-gray-100" href="#!">Lees meer</a>
                </div>
              </div>

            );
          })}
          {/* {services.map((service, index) => (
            <div key={service.title} className={`${visible ? "slideInLeftSlow service-card p-4 shadow-lg opacity-0" : "service-card p-4 shadow-lg opacity-0"} ${index >= 1 ? "animation-delay-1" : ""}`} >
              <figure>
                <img className="w-full h-60 object-cover" src={service.image} alt="" />
              </figure>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-6 mb-4">{service.description}</p>
                <a className="inline-block px-4 py-2 bg-secondary text-gray-100" href="#!">Lees meer</a>
              </div>
            </div>
          ))} */}

        </div>
      </div>
    </section >
  )
})

export default ServicesSection;