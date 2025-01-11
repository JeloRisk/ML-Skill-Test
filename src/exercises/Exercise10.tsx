/** @format */

import { IonBackButton, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState, useEffect } from "react";

const Exercise10: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const fetchImage = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_BASE_URL;
      if (!apiKey) {
        throw new Error("API key is missing");
      }

      const response = await fetch(`https://api.unsplash.com/photos/random?query=nature&client_id=${apiKey}`);

      const data = await response.json();

      setBackgroundImage(data.urls.regular);
    } catch (err) {
      setError("Rate Limit Exceeded.");
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/' />
          </IonButtons>
          <IonTitle>Background Image</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}>
        {error ? <h1>{error}</h1> : <h1> Background from Unsplash</h1>}
      </div>
    </IonPage>
  );
};

export default Exercise10;
