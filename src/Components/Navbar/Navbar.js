import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import NavbarStyle from '../../style/NavbarStyle';
import logo from './logo.svg';
import { FiMoreHorizontal } from 'react-icons/fi';
import { CgFileDocument } from 'react-icons/cg';
import { IoLogoBuffer } from 'react-icons/io';
import ButtonStyled from '../Buttons/Buttons';

const socials = [<CgFileDocument />, <IoLogoBuffer />]

export default function NavbarPage({ data }) {
  return (
    <>
      <NavbarStyle />
      <Navbar expand="lg" className='p-0'>
        <Container id='navbarContainer' className='d-flex align-items-center justify-content-between px-2 py-2' fluid>
          <Navbar.Brand href="#">
            <img className='logo' src={logo} alt="Rasm" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex align-items-center"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {<NavDropdown title={Object.keys(data)[0]} id="navbarScrollingDropdown">
                {data.Browse.map((item, i) => {
                  return <NavDropdown.Item id='item' key={i} href="#action3">
                    {item}
                  </NavDropdown.Item>
                })}
              </NavDropdown>}
              {<NavDropdown title={Object.keys(data)[1]} id="navbarScrollingDropdown">
                {data.Landings.map((item, i) => {
                  return <NavDropdown.Item id='item' key={i} href="#action3">
                    {item}
                  </NavDropdown.Item>
                })}
              </NavDropdown>}
              {<NavDropdown title={Object.keys(data)[2]} id="navbarScrollingDropdown">
                {data.Pages.map((item, i) => {
                  return <NavDropdown.Item id='item' key={i} href="#action3">
                    {item}
                  </NavDropdown.Item>
                })}
              </NavDropdown>}
              {<NavDropdown title={Object.keys(data)[3]} id="navbarScrollingDropdown">
                {data.Accounts.map((item, i) => {
                  return <NavDropdown.Item id='item' key={i} href="#action3">
                    {item}
                  </NavDropdown.Item>
                })}
              </NavDropdown>}
              {<NavDropdown className='icon more' title={Object.keys(data)[4] === 'More' ? <FiMoreHorizontal /> : 'More'} id="navbarScrollingDropdown">
                {data.More.map((item, i) => {
                  return <NavDropdown.Item id='item' key={i} href="#action3">
                    <div className="iconSocial d-flex align-items-center">
                      <div className="icon me-3">
                        {socials[i]}
                      </div>
                      <div className="info">
                        <h5>{item.text_1} <span>{item.span}</span></h5>
                        <h6>{item.text_2}</h6>
                      </div>
                    </div>
                  </NavDropdown.Item>
                })}
              </NavDropdown>}
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="🔍 Search Courses"
                  className="ms-2 input py-3"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <ButtonStyled className="me-2" type="white">Sign In</ButtonStyled>
            <ButtonStyled type="primary">Sign Up</ButtonStyled>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
