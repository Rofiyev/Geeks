import { createGlobalStyle } from "styled-components";

const World_Page_Style = createGlobalStyle`
  #world_page {
    min-height: 90vh !important;
    background: #18113c;
    position: relative;
    padding-top: 150px !important;
    
    .image {
      position: absolute;
      width: 100% !important;
      height: 100% !important;
      left: 0%;
      top: 0%;
      bottom: 0%;
      right: 0%;
      z-index: 100;

      img {
        width: 70% !important;
        height: 100% !important;
        object-fit: cover;
      }
    }

   .title {
     padding-bottom: 150px !important;

      h1 {
        font-size: 2.5rem !important;
        font-weight: bold !important;
      }
      p {
        font-size: 1.2rem !important;
      }
    }
  }
`;

export default World_Page_Style;