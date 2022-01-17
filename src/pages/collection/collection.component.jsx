import React from "react";

// ez jeleníti meg a tételt:
import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

// a match.params.collectionId paramétert használjuk majd
const CollectionPage = ({ match }) => {
  console.log(match);
  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

export default CollectionPage;
