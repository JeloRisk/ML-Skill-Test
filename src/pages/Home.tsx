/** @format */

import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonText } from "@ionic/react";
import { home } from 'ionicons/icons'; 

const Home: React.FC = () => (
  <IonPage>
    <IonContent className="ion-justify-content-center ion-align-items-center ion-text-center full-height">
      <IonText className="ion-padding full-height">
        <h4 style={{ color: 'blue', fontSize: '24px' }}> 
          <IonIcon icon={home} style={{ marginRight: '10px', fontSize: '30px' }} /> 
          Welcome to Home Page
        </h4>
      </IonText>
    </IonContent>
  </IonPage>
);

export default Home;
