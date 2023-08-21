import image1 from '../images/img-12.webp';
import image2 from '../images/img-3.webp';
import image3 from '../images/img-4.webp';
import image4 from '../images/img-8.webp';
import image5 from '../images/img-6.webp';
import image6 from '../images/img-7.webp';
import image7 from '../images/img-11.webp';
import image8 from '../images/img-10.webp';
import image9 from '../images/img-5.webp';

export default function Gallery() {
  const gallery = [
    {
      image: image1
    },
    {
      image: image2
    },
    {
      image: image3
    },
    {
      image: image4
    },
    {
      image: image5
    },
    {
      image: image6
    },
    {
      image: image7
    },
    {
      image: image8
    },
    {
      image: image9
    },
  ]

  function showImage(e) {
    const imageCanvas = document.getElementById('image-canvas');
    imageCanvas.src = e.target.src;
  }
  return (
    <section>
      <div className='flex max-w-6xl mx-auto h-fit py-24 px-4'>
        <div className='w-[50%] flex justify-center'>
          <div className='bg-white shadow-xl border rotate-0 relative border-gray-100 w-96 h-96 p-4'>
            <div className='bg-white shadow-xl border absolute rotate-3 top-0 left-0  border-gray-100 w-96 h-96 p-4'>
              <div className='bg-white shadow-xl border rotate-3 absolute top-0 left-0 border-gray-100 w-96 h-96 p-4'>
                <img id='image-canvas' className='h-full w-full object-cover' src={image1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-end w-[50%]'>
          <div className='grid grid-cols-3 gap-4 place-content-center '>
            {gallery.map((item, index) => (
              <figure onClick={showImage} key={index} className='max-h-24 w-36 border border-gray-100'>
                <img className='h-full w-full object-cover cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out' src={item.image} alt="" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
