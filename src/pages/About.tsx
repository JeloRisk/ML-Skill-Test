/** @format */

import React from "react";
import { IonPage, IonContent, IonText, IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";

const About: React.FC = () => (
  <IonPage>
    <IonContent className='ion-justify-content-center ion-align-items-center ion-text-center full-height'>
      <IonText className='ion-padding full-height'>
        <h4 style={{ color: "green", fontSize: "24px" }}>
          {" "}
          <IonIcon
            icon={informationCircle}
            style={{ marginRight: "10px", fontSize: "30px" }}
          />{" "}
          Welcome to the About Page!
        </h4>
      </IonText>
    </IonContent>
  </IonPage>
);

export default About;
