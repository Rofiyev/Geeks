import React from 'react';
import SkillCard from '../../Components/SkillCard/SkillCard';
import SkillStyle from '../../style/SkillPageStyle';
import img_1 from './image/img_1.svg';
import img_2 from './image/img_2.svg';
import img_3 from './image/img_3.svg';
import img_4 from './image/img_4.svg';

const images = [img_1, img_2, img_3, img_4];

export default function SkillPage({ SkillData }) {
  return (
    <>
      <SkillStyle />
      <div id='skillPage' className='container-fluid p-0 m-0'>
        <div className="title d-flex align-items-center justify-content-center flex-column text-center mb-5">
          <h6>COURSE DESCRIPTION</h6>
          <h1>What will you learn?</h1>
          <p>Vanilla JS is a fast, lightweight, cross-platformframework for building  <br /> incredible, powerful JavaScript applications.</p>
        </div>
        <div className="card-wrapper container mt-5 d-flex align-items-start justify-content-center gap-4">
          <SkillCard data={SkillData} image={images} />
        </div>
      </div>
    </>
  )
}
