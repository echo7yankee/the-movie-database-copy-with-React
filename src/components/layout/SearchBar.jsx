import React from "react";

//style
import style from "./searchBar.module.css";
import { SearchIcon } from "../../static/SVG/iconsSvg";

const SearchBar = () => {
  return (
    <div className={style.searchBarContainer}>
      <form className={style.searchBarForm}>
        <div>
          <span>
            <SearchIcon icon={style.searchBarIcon} />
          </span>
          <input
            type="text"
            placeholder="Search for a movie..."
            className={`${style.searchBarInput} ml-2`}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
