/** @format */

import React, { useState, useEffect } from "react";

import { IonBackButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import CalendarSchedule from "../components/CalendarSchedule";
import { add } from "ionicons/icons";

const Exercise5 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/' />
          </IonButtons>
          <IonTitle>Event Schedule</IonTitle>
        </IonToolbar>
      </IonHeader>
      <CalendarSchedule />
      <IonFab
        vertical='bottom'
        horizontal='end'
        slot='fixed'>
        <IonFabButton routerLink='/eventCalendarForm'>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
};

export default Exercise5;
