import styled from "styled-components";

export const PersonContainer = styled.div`
  background: #ebebeb;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 0 20px;

  :hover {
    background-color: #9d9d9d;
    cursor: pointer;
  }
  :active {
    background-color: #fff;
  }
`;

export const PersonAvatarWrap = styled.div`
  width: 50px;
  height: 50px;
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const PersonNameAndSurName = styled.h1`
  color: #000000;
  font-size: 20px;
`;

export const PersonCheckbox = styled.input`
width: 20px;
         height: 20px;
position: relative;
	       cursor: pointer;
        
    }
    :before {
         content: "";
         display: block;
         position: absolute;
         width: 16px;
         height: 16px;
         top: 0;
         left: 0;
         border: 2px solid #555555;
         border-radius: 3px;
         background-color: white;
}
    :checked:after {
         content: "";
         display: block;
         width: 5px;
         height: 10px;
         border: solid black;
         border-width: 0 2px 2px 0;
         -webkit-transform: rotate(45deg);
         -ms-transform: rotate(45deg);
         transform: rotate(45deg);
         position: absolute;
         top: 2px;
         left: 6px;
`;
