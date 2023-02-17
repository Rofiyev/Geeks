import React from 'react'
import ButtonStyled from '../../Components/Buttons/Buttons';
import World_Page_Style from '../../style/WorldPageStyle';
import fon from './fon.svg';

export default function WorldPage() {
  return (
    <>
      <World_Page_Style />
      <div id="world_page" className="container-fluid p-0 text-center">
        <div className="image">
          <img src={fon} alt="Oboi" />
        </div>
        <div className="title">
          <h1 className='text-white'>Join more than 1 million learners <br /> worldwide</h1>
          <p className="m-0 text-white">Effective learning starts with assessment. Learning a new <br /> skill is hard work—Signal makes it easier.</p>
          <div className="mt-5">
            <ButtonStyled className="me-2" type='bluevolit'>Start Learing for Free</ButtonStyled>
            <ButtonStyled type="light-blue">Geeks for Business</ButtonStyled>
          </div>
        </div>
      </div>
    </>
  )
}
