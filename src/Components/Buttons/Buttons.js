import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 15px 24px;
  border: none !important;
  border-radius: 5px;
  font-weight: bold;
  transition: .5s ease;

  &:hover {
    opacity: 0.8;
  }

  ${props => {
    switch (props.type) {
      case 'primary':
        return `
        background-color: #754ffe;
        color: #fff;
      `;
      case 'light':
        return `
          background: transparent;
          border: 1px solid #ccc !important;
          color: #333;
          font-weight: 500 !important;
          text-decoration: none !important;
          margin-top: 50px;

          &:hover {
            background-color: #f1f0f4;
            border-color: #8c889e;
          }
        `;
      case 'bluevolit':
        return `
        background-color: #754ffe;
        color: white;
        letter-spacing: 0.5px;
        `;
      case 'light-blue':
        return `
          background-color: #29baf9;
          color: white;
          letter-spacing: 0.5px;
          `;
      case 'width': return `
          background-color: #754ffe;
          width: 90%;
          color: #fff;
          `;
      default:
        return `
         bacground-color: #fff;
         color: #000;
        `;
    }
  }
  }}
`;



export default ButtonStyled;
