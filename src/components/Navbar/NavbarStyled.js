import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  /* position: fixed;
  top: 0; */
  background-color: #fff;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ImageLogo = styled.img`
  width: 8rem;
  object-fit: contain;
  cursor: pointer;
`;

export const InputSpace = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  align-items: center;

  i {
    position: absolute;
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    color: #757575;
    border-radius: 0.3rem;
    padding: 0.5rem;
  }

  input {
    outline: none;
    font-size: 1rem;
    padding: 0.6rem;
    background-color: #f5f5f5;
    border: none;
    width: 100%;
    border-radius: 0.3rem;

    :focus {
      border: 1px solid #0bade3;
    }
  }
`;

export const Button = styled.button`
  background-color: #0bade3;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.4rem 2rem;
  color: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  letter-spacing: 0.1rem;

  :hover {
    background-color: #0a86af;
  }
`;
