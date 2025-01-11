/** @format */

import React, { useState, useCallback } from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonInput, IonButton, IonItem, IonDatetime, IonToast, IonText, IonBackButton, IonButtons } from "@ionic/react";
import { saveEventToLocalStorage } from "../utils/calendarStorage"; 

import { useIonRouter } from "@ionic/react";

const EventCalendarForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState(""); 
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState<{ title?: string; dateTime?: string }>({});
  const router = useIonRouter();

  const validateForm = useCallback(() => {
    const newErrors: { title?: string; dateTime?: string } = {};

    if (!title.trim()) {
      newErrors.title = "Event title is required.";
    }

    if (!dateTime.trim()) {
      newErrors.dateTime = "Date and time are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [title, dateTime]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (validateForm()) {
        const eventData = { title, dateTime };
        saveEventToLocalStorage(eventData);

        // Reset form fields
        setTitle("");
        setDateTime("");

        setShowToast(true);
        router.push("/exercise6", "root");
      }
    },
    [title, dateTime, validateForm, router]
  );

  const handleDatetimeChange = (e: any) => {
    setDateTime(e.detail.value); // Store the selected datetime value
  };

  const renderError = (field: keyof typeof errors) =>
    errors[field] && (
      <div className='ion-padding-start'>
        <IonText
          color='danger'
          className='ion-margin-top'>
          {errors[field]}
        </IonText>
      </div>
    );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/calendarSchedule' />
          </IonButtons>
          <IonTitle>Create Event</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <form onSubmit={handleSubmit}>
          <IonItem
            className={`ion-margin-top ${errors.title ? "ion-invalid" : ""}`}
            lines='none'>
            <IonInput
              placeholder='Enter event name'
              value={title}
              onIonChange={(e) => setTitle(e.detail.value!)}
              className='custom'
            />
          </IonItem>
          {errors.title && renderError("title")}

          {/* Date & Time Picker */}
          <IonDatetime
            value={dateTime}
            onIonChange={handleDatetimeChange}
            presentation='date-time'
            format='YYYY-MM-DDTHH:mm'
          />
          {errors.dateTime && renderError("dateTime")}

          <IonButton
            expand='block'
            type='submit'
            color='primary'
            className='ion-margin-top ion-margin-start ion-margin-end ion-margin-top'>
            {" "}
            Add Event
          </IonButton>
        </form>

  
      </IonContent>
    </IonPage>
  );
};

export default EventCalendarForm;
