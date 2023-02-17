import React from 'react'
import { Accordion } from 'react-bootstrap';
import ButtonStyled from '../../Components/Buttons/Buttons';
import QuestionsStylePage from '../../style/QuastionsStyle';

export default function Questions({ data }) {
  return (
    <>
      <QuestionsStylePage />
      <div id='quations' className='container text-center mt-5 d-flex flex-column align-items-center'>
        <h6>NEED TO KNOW</h6>
        <h1>Frequently Asked Questions.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis non accumsan in, tempor dictum neque.</p>

        <div className="row my-5">
          <Accordion defaultActiveKey="0">
            {data.accardion_data.map((item, i) => {
              return <Accordion.Item id='item' eventKey={i} >
                <Accordion.Header>{item.head}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>
            })}
          </Accordion>
        </div>
        <ButtonStyled type="light">More questions? Visit the <a href="#">Learner Help Center</a></ButtonStyled>
      </div>
    </>
  )
}
