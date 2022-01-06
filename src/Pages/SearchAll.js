import React, { useState, useEffect } from "react";
import axios from "axios";

//import pages
import Test from "./Test";
import Loader from "../Component/Loader";

function SearchAll() {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://hellodoc-api.herokuapp.com/api/v1/doctors")
      .then((res) => {
        const myData = res.data.data;
        setDoctors(myData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <>{doctors && isLoading ? <Test doctors={doctors} /> : <Loader />}</>;
}

export default SearchAll;
