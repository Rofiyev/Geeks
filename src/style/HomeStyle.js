import { createGlobalStyle } from 'styled-components';

const HomeStyle = createGlobalStyle`
  #home-page {
    max-height: 160vh;
    background-color: #18113c;
    color: #fff;
    padding: 170px 70px !important;

    .info {
      width: 45%;
      height: 100%;

      h1 {
        font-size: 3.8rem !important;
        cursor: pointer;
        font-weight: bold;
        letter-spacing: -1.5px;
      }
      p {
        color: #8c889e;
        font-size: 1.4rem;
      }
      
      .icons {
        .icon {
          font-size: 1.2rem;
          color: #e29744;
        }
        .info {
          font-weight: 500;
          color: #8c889e;
        }
      }
    }

    .form-wrapper {
      width: 50%;
      
      img {
        position: relative;
        top: 20%;
        left: 30%;
      }
      .card-wrap {
        height: 100%;
        position: relative;
        top: -41%;
        left: 2%;

        .card {
          width: 90%;

          .card-body {

            .social-wrapper {

              .socialIcon {
              
                .red {
                  color: #FF0000;
                }
                .light-blue {
                  color: #00acee;
                }
                .blue {
                  color: #3b5998;
                }
              }

              span{
                color: #18183c;
                font-weight: 500;
              }
            }

            h3 {
              color: #18113c ;
            }
          }
          #line {
            color: #444;
          }
          
          .card-footer {
            background: transparent;

            p {
              color: #8c889e;
              padding: 0 10px;

              a {
                text-decoration: none;
                font-weight: 500;
                color: #121212;
              }
            }
          }
        }
      }
    }
  }
  #courses {
    width: 100%;
    padding: 20px 100px !important;
    
    span{
      font-weight: bold;
      color: #18113c ;

      .check {
        width: 25px;
        height: 25px;
        border-radius: 50% !important;
        background-color: #fcfc !important;
        color: #8d4004;
        cursor: pointer;
        margin-right: 5px;
      }
    }
`;

export default HomeStyle;