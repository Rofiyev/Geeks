import React from 'react';
import NavbarPage from '../../Components/Navbar/Navbar';
import HomeStyle from '../../style/HomeStyle';
import cardFon from './card_fon.svg';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { MdPeopleAlt, MdEmail } from 'react-icons/md';
import { BsTwitter, BsFacebook, BsCheck2 } from 'react-icons/bs';
import { navbarData } from '../../Data';
import ButtonStyled from '../../Components/Buttons/Buttons';

const icons = [<AiOutlineClockCircle />, <HiOutlineVideoCamera />, <MdPeopleAlt />];
const socials = [<MdEmail className='red' />, <BsTwitter className='light-blue' />, <BsFacebook className='blue' />];

export default function Home({ dataHome }) {
  return (
    <>
      <NavbarPage data={navbarData} />
      <HomeStyle />
      <div id='home-page' className="container-fluid">
        <div className="container d-flex justify-content-between">
          <div className="info">
            <h1>Become a Vanilla <br /> JavaScript <br /> Developer</h1>
            <p>In this tutorial, we are going to learn about JavaScript (Vanilla JS) - for building incredible, powerful JavaScript applications.</p>
            <div className="icons d-flex flex-column mb-5">
              {dataHome.social_1.map((data, i) => {
                return <div><span className='icon me-2'>{icons[i]}</span><span className='info'>{data}</span></div>
              })}
            </div>
            <ButtonStyled>Watch Preview</ButtonStyled>
          </div>
          <div className="form-wrapper">
            <img src={cardFon} alt="Card" />
            <div className="card-wrap">
              <div className="card">
                <div className="card-body">
                  <h3 className='px-3'>Create Free Account</h3>
                  <div className="social-wrapper d-flex align-items-center justify-content-center my-4">
                    {dataHome.social_2.map((item, i) => {
                      return <span className="shadow-sm rounded me-2 py-3 px-4 d-flex align-items-center">
                        <span className='me-1 socialIcon'>{socials[i]}</span>
                        <span>{item}</span>
                      </span>
                    })}
                  </div>
                  <hr id='line' />
                  <div className="login px-4 mb-3 mt-4">
                    <input type="text" className="form-control mb-3 py-2 px-3" placeholder='Email' />
                    <input type="text" className="form-control py-2 px-3" placeholder='Password' />
                  </div>
                  <div className='text-center mb-3'>
                    <ButtonStyled type="width">Start Corses For Free</ButtonStyled>
                  </div>
                </div>
                <div className="card-footer">
                  <p>By continuing you accept the <a href="#">Terms of Use</a>, <a href="#">Privacy Policy,</a> and <a href="#">Data Policy</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='courses' className='d-flex align-items-center justify-content-between px-5 shadow'>
        {dataHome.courses.map(item => <span><BsCheck2 className='check' />{item}</span>)}
      </div>
    </>
  )
}
