import { createGlobalStyle } from "styled-components";

const PortfolioStyle = createGlobalStyle`
  #portfolio-page {
    width: 100%;
    max-height: 220vh;
    background-color: #fff;
    padding: 170px;

    .row {

      h6 {
        color: #754ffe;
        letter-spacing: 2px;
        margin-bottom: 15px;
      }
      h1 {
        color: #18113c;
        font-weight: bold;
        font-size: 2.6rem;

        span {
          color: #754ffe;
        }
      }
      p {
        color: #403d6b;
        font-size: 1.3rem;
        letter-spacing: 0.7px;
        padding-bottom: 1rem;
      }

      .numbres {
        padding-top: 1rem;

        span {
          font-size: 2.2rem;
          font-weight: bold;
          color: #18113c;
        }

        p {
          letter-spacing: 0px !important;
          font-size: 1rem;
          font-weight: 500 !important;
        }
      }
    }

   .row {
    margin-top: 5rem !important;

    h5 {
      color: #754ffe;
      letter-spacing: 2px;
      font-size: 1rem;
    }
    .galery {
      

      img {
        width: 100px;
      }
    }
   }
  }

`;

export default PortfolioStyle;