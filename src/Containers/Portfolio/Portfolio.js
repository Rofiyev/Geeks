import React from 'react';
import PortfolioStyle from '../../style/PortfolioStyle';
import person from './image/person.png';
import brand_1 from './image/cleint_1.svg';
import brand_2 from './image/cleint_2.svg';
import brand_3 from './image/cleint_3.svg';
import brand_4 from './image/cleint_4.svg';
import brand_5 from './image/cleint_5.svg';
import brand_6 from './image/cleint_6.svg';

const bradns = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6];

export default function Portfolio() {
  return (
    <>
      <PortfolioStyle />
      <div id='portfolio-page' className='container-fluid'>
        <div className="container mb-5 pb-5">
          <div className="row d-flex justify-content-between">
            <div className="col-md-6">
              <h6>YOUR INSTRUCTOR</h6>
              <h1>Hi, I`m <span>James Davies</span>, I will be taking you through lessons.</h1>
              <p>Create beautiful website with this Geeks UI template. Get started building a site today.</p>
              <hr />
              <div className="numbres d-flex">
                <div className="col-md-3">
                  <span>45</span>
                  <p>Lessons</p>
                </div>
                <div className="col-md-5">
                  <span>10,500+</span>
                  <p>Students</p>
                </div>
                <div className="col">
                  <span>12+</span>
                  <p>Learning Hours</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 ps-5">
              <img src={person} alt="" />
            </div>
          </div>
        </div>
        <div className="container-fluid py-5 mt-5">
          <div className="row pt-5 mt-5 text-center">
            <h5>TRUSTED BY TOP-TIER PRODUCT COMPANIES</h5>

            <div className="galery d-flex justify-content-between mt-5 p-0">
              {bradns.map((item) => <img key={item} src={item} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
