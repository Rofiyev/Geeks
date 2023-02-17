import React from 'react'
import FooterStylePage from '../../style/FooterStyle';
import logo from './logo.svg';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

const socials = [<BsFacebook className='icon' />, <BsTwitter className='icon' />, <BsInstagram className='icon' />,]

export default function Footer({ data }) {
  return (
    <>
      <FooterStylePage />
      <footer className='container'>
        <div className="row">
          <div className="col-md-5 p-5">
            <img src={logo} alt="Logo" />
            <p className='mt-3'>Geek is feature-rich components and beautifully Bootstrap UIKit for developers, built with bootstrap responsive framework.</p>
            <div className="icons">
              {socials.map((item, i) => item)}
            </div>
          </div>
          <div className="col-md-7 d-flex justifay-content-between mt-5">
            <div className="col-3 me-3">
              <h4>Company</h4>
              <div className="d-flex flex-column">
                {data.footer_1.map((item, i) => <a href='#'>{item}</a>)}
              </div>
            </div>
            <div className="col-3 me-2">
              <h4>Support</h4>
              <div className="d-flex flex-column">
                {data.footer_2.map((item, i) => <a href='#'>{item}</a>)}
              </div>
            </div>
            <div className="col-5">
              <h4>Get in touch</h4>
              <div className="d-flex flex-column">
                {data.footer_3.map((item, i) => <p>{item.text} <span>{item.span}</span></p>)}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between pb-3 footer_info">
          {data.footer_4.map((item, i) => <a key={i} className={item.class} >{item.text}</a>)}
        </div>
      </footer>
    </>
  )
}
