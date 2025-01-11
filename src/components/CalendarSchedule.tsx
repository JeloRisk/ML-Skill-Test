/** @format */

import React, { useEffect, useState } from "react";
import { IonContent, IonList, IonItem, IonLabel, IonText } from "@ionic/react";
import { getEventsFromLocalStorage } from "../utils/calendarStorage";
import { add, personAdd } from "ionicons/icons";

const CalendarSchedule: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);

  // To fetch and sort events from localStorage
  const fetchEvents = () => {
    const storedEvents = getEventsFromLocalStorage();

    const sortedEvents = storedEvents.sort((a: any, b: any) => {
      const dateA = new Date(a.dateTime);
      const dateB = new Date(b.dateTime);
      return dateA.getTime() - dateB.getTime();
    });

    setEvents(sortedEvents);
  };

  // Handle storage changes
  useEffect(() => {
    fetchEvents();

    const handleStorageChange = () => {
      fetchEvents();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("localStorageUpdate", handleStorageChange);

    // Clean event listeners on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("localStorageUpdate", handleStorageChange);
    };
  }, []);

  return (
    <IonContent>
      {events.length === 0 ? (
        <IonContent className='ion-justify-content-center ion-align-items-center ion-text-center full-height'>
          <IonText className='ion-padding full-height'>
            <h4>
              {" "}
              No events found. Please add event details by clicking the
              <strong> + </strong> floating button below.
            </h4>
          </IonText>
        </IonContent>
      ) : (
        <IonList>
          {events.map((event, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h3>{event.title}</h3>
                <p>{new Date(event.dateTime).toLocaleString()}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      )}
    </IonContent>
  );
};

export default CalendarSchedule;
