import logo from './logo.svg';
import './App.css';
import { data } from './Data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='w-3/4 m-auto'>
      <h2 className='text-white text-center text-lg py-8'>React Slick</h2>
      <div className='mt-20'>
      <Slider {...settings}>
        {
            data.map((D, id) => (
               <div key={id} className='bg-white h-[500px] text-black rounded-xl'>
                 <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                  <img src={D.img} alt="" className='h-44 w-44 rounded-full'/>
                 </div>

                 <div className='flex flex-col justify-center items-center gap-4 p-4'>
                  <p className='text-xl font-semibold'>{D.name}</p>
                  <p className='text-center'>{D.body}</p>
                  <button className='bg-indigo-500 text-white text-lg px-6 rounded-xl'>Read More</button>
                 </div>

               </div>
            ))
        }
        </Slider>
      </div>
    </div>
  );
}

export default App;
