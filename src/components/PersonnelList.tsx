/** @format */

import React, { useEffect, useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonAvatar, IonBadge, IonFab, IonFabButton, IonIcon, IonText, IonChip } from "@ionic/react";
import { personAdd } from "ionicons/icons";
import { getFromLocalStorage } from "../utils/storage";
import "./List.css";

const List: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  //  get data from localStorage and update state in sorted
  const fetchUsers = () => {
    const storedUsers = getFromLocalStorage();

    const sortedUsers = storedUsers.sort((a: any, b: any) => {
      const dateA = new Date(b.dateTime);
      const dateB = new Date(a.dateTime);
      return dateA.getTime() - dateB.getTime();
    });

    setUsers(sortedUsers);
  };

  // handle storage changes
  useEffect(() => {
    fetchUsers();

    const handleStorageChange = () => {
      fetchUsers();
    };

    window.addEventListener("storage", handleStorageChange);

    window.addEventListener("localStorageUpdate", handleStorageChange);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("localStorageUpdate", handleStorageChange);
    };
  }, []);

  return (
 
      <IonContent >
        {users.length > 0 ? (
          <IonList>
            {users.map((user, index) => (
              <IonItem
                key={index}
                lines='full'>
                <IonAvatar
                  slot='start'
                  className='avatar'>
                  <span>{user.name ? user.name.charAt(0).toUpperCase() : "?"}</span>
                </IonAvatar>
                <IonLabel>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                  <div className='skills'>
                    {user.skills.map((skill, idx) => (
                      <IonBadge
                        key={idx}
                        color='primary'
                        className='skill-badge'>
                        {skill}
                      </IonBadge>
                    ))}
                  </div>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        ) : (
          <IonContent className='ion-justify-content-center ion-align-items-center ion-text-center full-height'>
            <IonText className='ion-padding full-height'>
              <h4>Please add Personnel Information by clicking the + floating button.</h4>
            </IonText>
          </IonContent>
        )}
      </IonContent>
 
  );
};

export default List;
