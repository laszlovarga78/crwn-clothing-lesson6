import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

// az adatokat a firestore-ból vesszük
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

/**
 * Azt akarjuk a routinggal megvalósítani, hogy csak az adott kategória alatti termékek jelenjenek meg.
 * pl: /shop/hats : hozzá kell férünk a shop utáni url paraméterhez, hogy meghatározhassuk melyik kategória
 * termékeit akarjuk fetch-elni
 */

// a firestore-os adatlekérés miatt alakítottuk át class komponensé
class ShopPage extends React.Component {

  unsubscribeFromSnapshot = null;
  /* A snapshot lesz a snapshot reprezentációjá a collection tömbnek, amit a firestortól kapunk vissza. Ezt a componentDidMount-on belül fetcheljük */

  componentDidMount() {
    // ezzel megszerezzük a firestore-ból a collection-t
    const collectionRef = firestore.collection('collections');

    // a collectionRef-ből akarjuk megkapni az adatokat
    collectionRef.onSnapshot(async snapshot => {
      //console.log(snapshot);
      convertCollectionsSnapshotToMap(snapshot);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default ShopPage;
