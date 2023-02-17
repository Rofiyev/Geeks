import { createGlobalStyle } from "styled-components";

const CardsStyle = createGlobalStyle`
  #cards-page {
    width: 100%;
    max-height: 170vh;
    background-color: #f5f4f8;
    padding: 150px 100px;

    h5 {
      color: #754ffe !important;
      letter-spacing: 2px;
      font-size: 1rem;
    }
    h1 {
      color: #18113c;
      font-weight: bold;
      font-size: 2.7rem;
    }
    p {
      color: #49456b;
      font-size: 1.2rem;
    }

    .box {
      height: auto;
      background-color: #fff;
      overflow-y: hidden;
      
      &.blue {
        .image {
          background-color: #29baf9 !important;
        }
        
      }
      
      p {
        font-size: 1.4em;
        color: #18113c;
        margin-bottom: 20px;
      }
      
      .image {
        padding: 10px;
        height: 150px;
        background-color: #754ffe;

        img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 50%;
          transform: translateY(-60%);
        }

        h4 {
          transform: translateY(-150%);
          color: white;
        }
        h6 {
          transform: translateY(-250%);
          color: white;
          opacity: 0.8;
          letter-spacing: 0.5px;
          font-size: 15px;
          font-weight: normal;
        }
      }
    }
  }
`;

export default CardsStyle;