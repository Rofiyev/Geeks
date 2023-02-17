import { createGlobalStyle } from "styled-components";

const SkillCardStyle = createGlobalStyle`
  .card {
    border: none !important;
    width: 45%;
    height: auto;

    .image {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: #754ffe;
    }
    .info {
      h1 {
        font-size: 1.8rem;
        color: #18113c;
        font-weight: 700 !important;

        span {
          width: 50px;
          height: 30px;
          background-color: #FFA500;
          color: #fff !important;
          border-radius: 5px;
          font-size: 20px;

          &.title {
            padding: 0 10px;
          }
        }
      }
      p {
        span{
          color #18113c;
          font-size: 0.9rem;
          font-weight: 500 !important;
          margin: 0 7px;
          opacity: 0.7;

          &.active {
            opacity: 1;
          }
        }
      }
    }

  .row_2 {

    p {
      color: #8376a9;
      font-weight: 500 !important;
      line-height: 28px;
      letter-spacing: 0.5px;
    }

    a{
      color: #754ffe;
      font-weight: 500 !important;
    }
  }
  }
`;

export default SkillCardStyle;