import React from "react";
import {
  PersonContainer,
  PersonAvatarWrap,
  PersonNameAndSurName,
  PersonCheckbox,
  Img,
} from "./PersonElements";
import avatar from "../../images/avatar.png";

const PersonListItem = ({ id, name, surname, alt, src, toggle, isChecked }) => {
  return (
    <PersonContainer onClick={() => toggle(id)}>
      <PersonAvatarWrap>
        <Img src={src ? src : avatar} alt={alt} />
      </PersonAvatarWrap>
      <PersonNameAndSurName>{name + " " + surname}</PersonNameAndSurName>
      <label>
        <PersonCheckbox
          name="checkbox"
          type="checkbox"
          checked={isChecked}
          readOnly={true}
        />
      </label>

      {}
    </PersonContainer>
  );
};

export default PersonListItem;
