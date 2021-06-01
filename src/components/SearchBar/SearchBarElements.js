import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  border: 2px solid black;
  padding: 0 20px;
`;
export const SearchBarIcon = styled.img`
  height: 40px;
  width: 40px;
`;

export const SearchBarInput = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  padding: 0px 30px;
  font-size: 20px;
  :focus {
    outline: none;
    ::placeholder {
      color: transparent;
    }
  }
`;
