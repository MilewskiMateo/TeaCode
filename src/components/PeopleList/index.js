import React from "react";
import PersonListItem from "../PersonListITem";
import { PeopleListContainer } from "./PeopleListElements";

const PeopleList = ({ data, searchFraze, toggle }) => {
  return (
    <PeopleListContainer data={data}>
      {data &&
        data
          .filter(
            (p) =>
              p.first_name.toLowerCase().includes(searchFraze.toLowerCase()) ||
              p.last_name.toLowerCase().includes(searchFraze.toLowerCase())
          )
          .sort((a, b) => (a.last_name > b.last_name ? 1 : -1))
          .map((p) => (
            <PersonListItem
              id={p.id}
              name={p.first_name}
              surname={p.last_name}
              src={p.avatar}
              alt="avatar"
              key={p.id}
              toggle={toggle}
              isChecked={p.isChecked}
            />
          ))}
    </PeopleListContainer>
  );
};

export default PeopleList;
