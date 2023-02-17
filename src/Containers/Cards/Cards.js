import React from 'react';
import CardsStylePage from '../../style/CardsStylePage';
import person_1 from './image/person_1.jpg';
import person_2 from './image/person_2.jpg';

const images = [person_1, person_2];

export default function Cards({ data }) {
  return (
    <>
      <CardsStylePage />
      <div id='cards-page' className='container-fluid'>
        <div className="title text-center">
          <h5>TESTIMONIALS</h5>
          <h1>What our learners are saying</h1>
          <p>12+ million people are already learning on Geeks</p>
        </div>
        <div className="boxs d-flex gap-5 text-center mt-5 py-5">
          {data.box_data.map((item, i) => {
            return <div className={`box shadow rounded col-md-6 ${item.bgColor}`}>
              <p className='p-5 mt-4'>{item.text}</p>
              <div className="image">
                <img src={images[i]} alt="Rasm" />
                <h4>{item.name}</h4>
                <h6>{item.job}</h6>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}
