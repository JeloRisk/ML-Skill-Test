/** @format */

import { Redirect, Route } from "react-router-dom";
import { IonApp, IonBackButton, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import List from "../components/PersonnelList";
import { arrowBack, personAdd } from "ionicons/icons";

const Exercise2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/exercises' />
          </IonButtons>
          <IonTitle>Personnels</IonTitle>
        </IonToolbar>
      </IonHeader>

      <List></List>
      <IonFab
        vertical='bottom'
        horizontal='end'
        slot='fixed'>
        <IonFabButton routerLink='/form'>
          <IonIcon icon={personAdd} />
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
};

export default Exercise2;
