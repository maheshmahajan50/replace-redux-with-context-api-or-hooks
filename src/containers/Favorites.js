import React from "react";
// import { useSelector } from 'react-redux';

import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";

const Favorites = (props) => {
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if ([].length > 0) {
    content = (
      <ul className="products-list">
        {[].map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
