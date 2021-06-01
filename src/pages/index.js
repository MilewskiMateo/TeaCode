import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import PeopleList from "../components/PeopleList";

const Home = () => {
  const [searchFraze, setSearchFraze] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json"
    )
      .then((res) => res.json())
      .then((data) =>
        setData(
          data.map((x) => {
            x.isChecked = false;
            return x;
          })
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const toggle = (id) => {
    const objIndex = data.findIndex((obj) => obj.id === id);
    data[objIndex].isChecked = !data[objIndex].isChecked;
    setData([...data]);
    console.log(data.filter((p) => p.isChecked).map((p) => p.id));
  };

  return (
    <>
      <NavBar />
      <SearchBar handleSerching={setSearchFraze} />
      <PeopleList
        data={data}
        setData={setData}
        toggle={toggle}
        searchFraze={searchFraze}
      />
    </>
  );
};

export default Home;
