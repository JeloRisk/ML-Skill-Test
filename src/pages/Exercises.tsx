/** @format */

import React from "react";
import { IonApp, IonRouterOutlet, IonList, IonItem, IonLabel, IonPage, IonContent, IonText } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect, Link } from "react-router-dom";

const Exercises: React.FC = () => (
  <IonPage>
    <IonContent>
      {/* Information text */}
      <IonText className='ion-padding ion-text-center'>
        <h4 style={{ fontSize: "1.2rem", color: "#555" }}>The following are exercises. To navigate, simply click on the exercise you wish to view. If you want to exit, please use the back button or restart the app if you're using a mobile phone.</h4>
      </IonText>

      <IonList>
        <IonItem
          button
          routerLink='/exercise1'>
          <IonLabel>Exercise 1</IonLabel>
        </IonItem>
        <IonItem
          button
          routerLink='/exercise2'>
          <IonLabel>Exercise 2</IonLabel>
        </IonItem>
        <IonItem
          button
          routerLink='/exercise3'>
          <IonLabel>Exercise 3</IonLabel>
        </IonItem>
        <IonItem
          button
          routerLink='/exercise4'>
          <IonLabel>Exercise 4</IonLabel>
        </IonItem>
        <IonItem
          button
          routerLink='/exercise5'>
          <IonLabel>Exercise 5</IonLabel>
        </IonItem>
        <IonItem
          button
          routerLink='/exercise6'>
          <IonLabel>Exercise 6</IonLabel>
        </IonItem>
        <IonItem
          button
          routerLink='/exercise10'>
          <IonLabel>Exercise 10</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
);

export default Exercises;
