import { createGlobalStyle } from "styled-components";

const FooterStylePage = createGlobalStyle`
  footer {
    max-height: 60vh !important;
    background: white;
    padding-top: 50px;


    .row {
      padding-bottom: 50px;

      p {
        font-size: 1rem;
        font-weight: 400 !important;
        color: #6c5f96;
        font-family: sans-serif;
        letter-spacing: 0.5px;
      }

      .icons {

        .icon {
          margin-right: 10px;
          color: #18113c;
          opacity: 0.5;
          transition: all 0.5s ease-in-out;

          &:hover {
            opacity: 1;
          }
        }
      }

      .col-md-7 {

        h4 {
          color: #18113c;
          font-weight: bold;
          margin-bottom: 20px;
        }

        a {
          margin-bottom: 10px;
          text-decoration: none;
          color: #5536a7;
          font-weight: 400;
          font-family: sans-serif;

          &:hover {
            color: blue;
          }
        }

        p {

          span {
            color: #19113c;
            font-weight: bold !important;
          }
        }
      }

    }
    .footer_info {

      a {
        color: #78619e;
        font-weight: 600 !important;
        text-decoration: none;
        font-family: sans-serif;
        font-size: 15px;
        
        &.not {
          color: #78619e !important;
        }
        &:hover {
          color: blue;
        }
      }
    }
  }
`;

export default FooterStylePage;