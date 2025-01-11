/** @format */

import React, { useState, useEffect } from "react";

import { IonContent, IonPage } from "@ionic/react";
import CarouselList from "../components/CarouselList";

const Exercise5 = () => {
  return (
    <IonPage>
      <IonContent>
        <CarouselList />
      </IonContent>
    </IonPage>
  );
};

export default Exercise5;
