/** @format */

import React, { useState, useCallback, useEffect } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonButtons, IonBackButton, IonToast, IonText, IonLabel, IonChip, IonItem, IonList, IonNote } from "@ionic/react";
import { useIonRouter } from "@ionic/react";
import { saveToLocalStorage } from "../utils/storage";
import "./Form.css";

const Form: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; skills?: string }>({});
  const router = useIonRouter();

  const predefinedSkills = ["JavaScript", "Python", "Java", "C++", "React", "Angular", "Node.js"];

  const validateForm = useCallback(() => {
    const newErrors: { name?: string; email?: string; skills?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (skills.length === 0) {
      newErrors.skills = "At least one skill is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [name, email, skills]);

  const handleFormSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (validateForm()) {
        const currentDateTime = new Date().toLocaleString();

        const userData = { name, email, skills, dateTime: currentDateTime };
        saveToLocalStorage(userData);

        router.push("/exercise2");
      }
    },
    [name, email, skills, validateForm, router]
  );

  const resetForm = useCallback(() => {
    setName("");
    setEmail("");
    setSkills([]);
    setErrors({});
  }, []);

  const toggleSkill = useCallback((skill: string) => {
    setSkills((prevSkills) => (prevSkills.includes(skill) ? prevSkills.filter((s) => s !== skill) : [...prevSkills, skill]));
  }, []);

  useEffect(() => {
    document.getElementById("name")?.focus();
  }, []);

  const renderError = (field: keyof typeof errors) =>
    errors[field] && (
      <IonText
        color='danger'
        className='ion-margin-top'>
        {errors[field]}
      </IonText>
    );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/exercise2' />
          </IonButtons>
          <IonTitle>User Form</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <form onSubmit={handleFormSubmit}>
          {/* Name Input */}

          <IonList className='ion-margin-top'>
            <IonText>
              <h4 className='title-margin-sm '>Basics</h4>
            </IonText>
            <IonItem
              className={`ion-margin-top ${errors.name ? "ion-invalid" : ""}`}
              lines='none'>
              <IonInput
                id='name'
                aria-label='Name'
                placeholder='Enter your full name'
                value={name}
                onIonChange={(e) => setName(e.detail.value!)}
                className='custom'
              />
            </IonItem>
            {errors.name && <div className='ion-padding-start'>{renderError("name")}</div>}
            <IonItem className={` ion-margin-top ${errors.email ? "ion-invalid" : ""}`}>
              <IonInput
                id='email'
                aria-label='Email'
                placeholder='Email'
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
                className='custom'
              />
            </IonItem>
            {errors.email && <div className='ion-padding-start'>{renderError("email")}</div>}'
          </IonList>
          <IonList className=''>
            <IonText>
              <h4 className='title-margin-sm '>Skills</h4>
              <IonNote
                className='custom-margin-sm'
                color={errors.skills ? "danger" : "medium"} // Change color based on error
              >
                Choose at least 1 to add
              </IonNote>
            </IonText>

            <IonItem
              className={`ion-margin-top ${errors.name ? "ion-invalid" : ""}`}
              lines='none'>
              <div>
                {predefinedSkills.map((skill) => (
                  <IonChip
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    outline={!skills.includes(skill)}
                    color={skills.includes(skill) ? "primary" : "medium"}>
                    <IonLabel>{skill}</IonLabel>
                  </IonChip>
                ))}
              </div>
            </IonItem>

            {/* Submit Button */}
            <IonButton
              expand='full'
              type='submit'
              color='primary'
              className='ion-margin-top ion-margin-start ion-margin-end ion-margin-top'>
              Save
            </IonButton>
          </IonList>
        </form>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message='Form submitted successfully!'
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Form;
