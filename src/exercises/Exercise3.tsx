/** @format */

import { Redirect, Route } from "react-router-dom";
import { IonApp, IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { home, informationCircle, people } from "ionicons/icons";

import "../pages/Home.css";
import List from "../components/PersonnelList";
import Phonebook from "../components/Phonebook";

const Exercise3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar
          // color='primary'
          className='mmsu'>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/' />
          </IonButtons>
          <IonTitle>Phonebook</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className='ion-paddings padding-top'>
        <Phonebook />
      </IonContent>
    </IonPage>
  );
};

export default Exercise3;
