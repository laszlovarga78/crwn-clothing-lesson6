import React from "react";
import { Route } from 'react-router-dom';

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

/**
 * Azt akarjuk a routinggal megvalósítani, hogy csak az adott ketegória alatti termékek jelenjenek meg.
 * pl: /shop/hats : hozzá kell férünk a shop utáni url paraméterhez, hogy meghatározhassuk melyik kategória
 * termékeit akarjuk fetch-elni
 */
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    
  </div>
);

export default ShopPage;
