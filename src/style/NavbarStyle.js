import { createGlobalStyle } from 'styled-components';

const NavbarStyle = createGlobalStyle`
#navbarContainer {
  *{
    box-sizing: border-box;
    outline: none;
  }
  background-color: #18113c;

  .logo {
    height: 30px;
    width: 130px;
    filter: brightness(0) invert(1);
    objict-fit: cover;
  }

  #navbarScrollingDropdown {
    color: #c7dfe8  !important;
    font-weight: 500 !important;
    margin: 0 5px;

  }
  #item {
    font-weight: 500;
    
    &:hover {
      color: blue !important;
    }
  }
  
  .icon {
    font-size: 1.5rem;
  }
  .more {

    .dropdown-toggle::after {
      display: none !important;
    }
  }

  .iconSocial {
    color: blue !important;
    font-size: 1.5rem;
  }
  .info {
    h5 {
      font-size: 1rem;
      color: #000 !important;
      
      span {
        color blue !important;
      }
    }
    h6 {
      font-size: 0.9rem;
      color: #18113c;
    }
    &:hover h6{
      color: blue !important;
    }
  }

  .input {
    background-color: #413c5e;
    boder: none !important;
    width: 270px !important;
    outline: none !important;
    color: #c7dfe8 !important;;

    &::placeholder {
      color: #c7dfe8 !important;
      font-weight: 400;
    }
  }
}
`;

export default NavbarStyle; 