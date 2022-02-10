import { useState } from 'react';

const data = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'Susan Smith',
    position: 'web develiper',
    review:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    name: 'Anna Johnson',
    position: 'web designer',
    review:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    name: 'Peter Jones',
    position: 'intern',
    review:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    name: 'Bill Anderson',
    position: 'The Boss',
    review:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const { img, name, position, review } = data[index];

  const calcIndex = (number: number): number => {
    if (number > data.length - 1) {
      return 0;
    } else if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const randomPerson = () => {
    setIndex(Math.floor(Math.random() * data.length));
  };

  const moveBack = () => {
    setIndex((prevState) => calcIndex(prevState - 1));
  };

  const moveForward = () => {
    setIndex((prevState) => calcIndex(prevState + 1));
  };

  return (
    <main className='w-[90vh] max-w-[620px] mx-auto my-20'>
      <section>
        <div className='mb-16 text-center'>
          <h2 className='text-4xl tracking-widest font-bold mb-3'>
            Our Reviews
          </h2>
          <div className='w-[6rem] h-[0.25rem] bg-[#49a6e9] m-auto'></div>
        </div>
        <div>
          <article className='bg-white rounded shadow-2xl p-6 text-center'>
            <div className='relative w-[150px] h-[150px] mt-0 mx-auto mb-[1.5rem] z-10'>
              <div className='absolute ml-2 -mt-1 h-[150px] w-[150px] rounded-full bg-[#49a6e9] -z-10'></div>
              <img
                src={img}
                alt={name}
                className='rounded-full w-full h-full object-cover'
              />
              <span className='absolute top-0 left-0 bg-[#49a6e9] text-white w-[2.5rem] h-[2.5rem] rounded-full p-3'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 512 512'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'></path>
                </svg>
              </span>
            </div>
            <h4 className='mb-[0.25rem] font-bold tracking-widest'>{name}</h4>
            <p className='mb-[0.5rem] uppercase text-[#49a6e9] text-[.85rem]'>
              {position}
            </p>
            <p className='text-[#617d98] mb-[0.75rem]'>{review}</p>

            <div>
              <button
                className='text-[#8bcbf9] text-[1.25rem] mx-[0.5rem]'
                onClick={moveBack}>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 320 512'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z'></path>
                </svg>
              </button>
              <button
                className='text-[#8bcbf9] text-[1.25rem] mx-[0.5rem]'
                onClick={moveForward}>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 320 512'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path>
                </svg>
              </button>
            </div>

            <button
              className='mt-[0.5rem] bg-[#ebf7ff] py-[0.25rem] px-[0.5rem] rounded text-sm text-[#49a6e9]'
              onClick={randomPerson}>
              Surprise Me
            </button>
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;
