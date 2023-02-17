import React from 'react';
import SkillCardStyle from '../../style/ComponentsSkillStyle';

export default function SkillCard({ data, image }) {
  console.log(data);
  return (
    data.data.map((item, i) => {
      return (
        <>
          <SkillCardStyle />
          <div className="card p-5 shadow-sm rounded">
            <div className="col">
              <div className="row_1 d-flex">
                <div className="image">
                  <img src={image[i]} alt="Rasm" />
                </div>
                <div className="info ps-2">
                  <h1>{item.heading} <span className={item.spanClass}>{item.span}</span></h1>
                  <p>
                    <span className={item.list_1_active}>{item.list_1}</span>
                    <span>{item.list_2}</span>
                    <span>{item.list_3}</span>
                  </p>
                </div>
              </div>
              <div className="row_2">
                <p>{item.text}</p>
                <a href="#">{item.link}</a>
              </div>
            </div>
          </div>
        </>
      )
    })
  )
}
