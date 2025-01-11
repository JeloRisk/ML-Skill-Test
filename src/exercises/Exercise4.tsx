/** @format */

import { Redirect, Route } from "react-router-dom";
import { IonApp, IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, setupIonicReact } from "@ionic/react";

import "../pages/Home.css";
import List from "../components/PersonnelList";
import PokemonStorage from "../components/PokemonStorage";

const Exercise4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar
          // color='primary'
          className='mmsu'>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/' />
          </IonButtons>
          <IonTitle>PokeDex</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className='ion-paddings padding-top'>
        <PokemonStorage />
      </IonContent>
    </IonPage>
  );
};

export default Exercise4;
