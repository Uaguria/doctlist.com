// import default
import React, { useState } from "react";
import axios from "axios";

//import Pages
import Index from "./Index";
import SearchResult from "./SearchResult";

const Search = () => {
  const [SearchKeyword, updateSearchName] = useState();
  const [DoctorSearchResult, updateDoctorSearchResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchResult = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await axios.get(
      `https://hellodoc-api.herokuapp.com/api/v1/doctors/${SearchKeyword}`
    );
    updateDoctorSearchResult(response.data);
    setIsLoading(false);
  };

  return (
    <>
      {DoctorSearchResult ? (
        <SearchResult
          DoctorSearchResult={DoctorSearchResult}
          updateSearchName={updateSearchName}
          fetchResult={fetchResult}
          isLoading={isLoading}
        />
      ) : (
        <Index
          updateDomainSearchName={updateDomainSearchName}
          fetchResult={fetchResult}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default Search;
