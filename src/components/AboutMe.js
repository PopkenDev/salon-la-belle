import portrait from '../images/img-1.webp';
import signature from '../images/signature.png';

export default function AboutMe() {
  return (
    <section data-link-index="1">
      <div className="max-w-6xl mx-auto lg:py-24 py-12 px-4 flex flex-col md:flex-row gap-y-8 md:gap-x-8">
        <div className='md:w-[50%] slideInLeftSlow'>
          <h2 className="text-3xl font-bold mb-4">Meer over<br /> Salon la Belle</h2>
          <p className="text-sm text-gray-500 leading-6 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Modi illum delectus mollitia impedit autem. Molestias, ut aspernatur ipsa quidem fuga,
            officiis odio corporis itaque veniam error voluptatum doloribus dolore id.
            Ipsa voluptatibus ipsum totam magni.</p>
          <p className="text-sm text-gray-500 leading-6 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Modi illum delectus mollitia impedit autem. Molestias, ut aspernatur ipsa quidem fuga.
          </p>
          <div className='flex flex-col items-center md:block'>
            <p className='text-sm font-bold'>Olivia Wilson</p>
            <img className='h-36 object-cover -mt-8' src={signature} alt="" />
          </div>
        </div>
        <figure className='slideInRightSlow border-[16px] border-white shadow-xl md:shadow-lg md:w-[50%] h-fit'>
          <img className='h-96 w-full object-cover' src={portrait} alt="Foto van de eigenaresse (Olivia Wilson) van de kapperszaak" />
        </figure>
      </div>
    </section>
  )
}