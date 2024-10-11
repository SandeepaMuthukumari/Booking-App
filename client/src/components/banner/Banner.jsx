import React, { useEffect,  useState, useCallback } from 'react';
import './banner.css';

const Banner = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const items = [
    {
      img: './image1.jpg',
      author: 'GALLE',
      title: 'INSPIRED BY',
      topic: 'DESTINATIONS',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?'
    },
    {
      img: './image2.jpeg',
      author: 'NUWARAELIYA',
      title: 'INSPIRED BY',
      topic: 'DESTINATIONS',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?'
    },
    {
      img: './image3.jpeg',
      author: 'MATARA',
      title: 'INSPIRED BY',
      topic: 'DESTINATIONS',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?'
    },
    {
      img: './image4.jpeg',
      author: 'BANDARAWELA',
      title: 'INSPIRED BY',
      topic: 'DESTINATIONS',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?'
    }
  ];

  // Memoize the nextSlide function using useCallback to prevent it from changing on each render.
  const nextSlide = useCallback(() => {
    setSliderIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const prevSlide = () => {
    setSliderIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);  // Now nextSlide is stable and won't trigger unnecessary re-renders

  return (
    <div className="carousel">
      <div className="list">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${index === sliderIndex ? 'active' : ''}`}
            style={{ zIndex: index === sliderIndex ? 1 : 0 }}
          >
            <img src={item.img} alt={item.title} />
            <div className="content">
              <div className="author">{item.author}</div>
              <div className="title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">{item.description}</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {items.map((item, index) => (
          <div key={index} className={`item ${index === sliderIndex ? 'active' : ''}`}>
            <img src={item.img} alt={item.title} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="description">{item.topic}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" onClick={prevSlide}>{'<'}</button>
        <button id="next" onClick={nextSlide}>{'>'}</button>
      </div>

      <div className="time"></div>
    </div>
  );
};

export default Banner;
