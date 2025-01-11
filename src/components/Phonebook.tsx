/** @format */

import { getContacts, Contact } from "../utils/contactApi"; 
import React, { useState, useEffect } from "react";
import { IonContent, IonList, IonItem, IonAvatar, IonLabel, IonText, IonFab, IonFabButton, IonIcon, IonToast } from "@ionic/react"; // Import necessary Ionic components
import { personAdd } from "ionicons/icons";

interface ContainerProps {}

const Phonebook: React.FC<ContainerProps> = () => {
  // contacts, grouped contacts
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [groupedContacts, setGroupedContacts] = useState<{ [key: string]: Contact[] }>({});

  useEffect(() => {
    const initializeData = async () => {
      try {
        const data = await getContacts(); 

        // sort contacts
        const sortedContacts = data.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
        // store grouped contacts by first letter or they are alphabetically grouped
        const grouped = sortedContacts.reduce((groups, contact) => {
          const firstLetter = contact.name.charAt(0).toUpperCase(); // First letter of the name
          if (!groups[firstLetter]) {
            groups[firstLetter] = [];
          }
          groups[firstLetter].push(contact);
          return groups;
        }, {} as { [key: string]: Contact[] });

        setContacts(sortedContacts);
        setGroupedContacts(grouped);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    initializeData();
  }, []);

  const [clickCount, setClickCount] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleDisabledClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount + 1 === 2) {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
    }
  };
  return (
    <IonContent className='ion-padding'>
      {Object.keys(groupedContacts).length > 0 ? (
        <IonList>
          {Object.keys(groupedContacts).map((letter) => (
            <div key={letter}>
              <IonText color='primary'>
                <h2>{letter}</h2>
              </IonText>
              {groupedContacts[letter].map((contact: Contact, index) => (
                <IonItem
                  key={index}
                  lines='none'>
                  <IonAvatar
                    slot='start'
                    className='avatar'>
                    <span>{contact.name ? contact.name.charAt(0).toUpperCase() : "?"}</span>
                  </IonAvatar>
                  <IonLabel>
                    <h2>{contact.name}</h2>
                    <p>{contact.phone}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </div>
          ))}
        </IonList>
      ) : (
        <IonLabel className='ion-text-center'>
          <h4>No contacts available.</h4>
        </IonLabel>
      )}
      <IonFab
        vertical='bottom'
        horizontal='end'
        slot='fixed'>
        <IonFabButton
          // disabled={true}
          onClick={handleDisabledClick}>
          <IonIcon icon={personAdd} />
        </IonFabButton>

        {/* toast shown when clicked twice */}
        <IonToast
          isOpen={showTooltip}
          message='You cannot click this now'
          position='bottom'
          duration={1000}
        />
      </IonFab>
    </IonContent>
  );
};

export default Phonebook;
