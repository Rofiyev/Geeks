import { createGlobalStyle } from 'styled-components';

const SkillStyle = createGlobalStyle`
  #skillPage {
    background-color: #f5f4f8;
    max-height: 200vh;
    padding: 150px 0 !important;

    .title {
      h6 {
        color: #0000FF;
        letter-spacing: 2px;
        cursor: pointer;
      }
      h1 {
        color: #18113c;
        font-weight: bold;
        cursor: pointer;
      }
      p { 
        color: #8984a2;  
        font-size: 1.4rem;      
      }
    }

  .card-wrapper {
    flex-wrap: wrap;
  }
  }
`;

export default SkillStyle;