import React from "react";
import {
  SearchBarContainer,
  SearchBarInput,
  SearchBarIcon,
} from "./SearchBarElements";
import loupe from "../../images/loupe.png";

const SearchBar = ({ handleSerching }) => {
  return (
    <SearchBarContainer>
      <SearchBarIcon src={loupe} alt="loupe" />
      <SearchBarInput
        type="text"
        onChange={(e) => handleSerching(e.target.value)}
        placeholder="wyszukaj fraze"
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
