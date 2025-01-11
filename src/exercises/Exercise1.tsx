/** @format */

import { Redirect, Route } from "react-router-dom";
import { IonApp, IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { home, informationCircle, people } from "ionicons/icons";
import About from "../pages/About";
import Home from "../pages/Home";

const Exercise1: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'>
          <IonBackButton defaultHref='/' />
        </IonButtons>
        <IonTitle>Exit</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route
              exact
              path='/home'>
              <Home />
            </Route>

            <Route
              path='/about'
              component={About}
              exact
            />
          </IonRouterOutlet>{" "}
          {/*  */}
          {/* navigation bar */}
          <IonTabBar slot='bottom'>
            <IonTabButton
              tab='home'
              href='/home'>
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab='about'
              href='/about'>
              <IonIcon icon={informationCircle} />
              <IonLabel>About</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonContent>
  </IonPage>
);

export default Exercise1;
