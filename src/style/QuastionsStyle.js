import { createGlobalStyle } from "styled-components";

const QuestionsStylePage = createGlobalStyle`
  #quations {
    padding: 100px !important;
    max-height: 180vh;

    h6 {
      color: #754ffe;
      letter-spacing: 1.5px;
    }

    h1 {
      color: #18113c;
      font-weight: bold;
    }
    p {
      color: #18113c;
      font-size: 1.3rem;
      width: 70%;
      opacity: 0.8;
    }

    .row {  

      #item {
        border-bottom: 1px solid #ccc !important;
      }

        .accordion-item {
          border: 0 !important;
          border-bottom: 1px solid #ccc;
          max-width: 600px!important;
          display: flex;
          align-items: flex-start !important;
          flex-direction: column !important;

          .accordion-collapse {
            width: 100%;
          }

            .accordion-body {
              min-width: 60% !important;
              max-width: inherit !important;
              height: inherit !important;
              color: #665f7a;
              font-size: 1.2rem !important;
              text-align: left;
              border: none !important;
            }
        }
      }
      .accordion-button {
        color: #18113c;
        font-size: 1.4rem !important;
        font-weight: bold !important;
        box-shadow: 0 0 0 0 !important;

        &::after {
          content: '+';
          position: absolute;
          right: 1%;
          top: 10%;
          color: blue !important;
          width: 0 !important;
          height: 0 !important;
          transform: translateY(-50%) !important;
          font-size: 2rem !important;
        }
        &:not(.collapsed) {
          box-shadow: 0 0 0 0 !important;
          background: transparent;
          color: #18113c;
          font-size: 1.6rem !important;
          font-weight: bold !important;
        }

        &:hover {
          color: blue;
        }
      }
    }
`;

export default QuestionsStylePage;