/** @format */

export const saveEventToLocalStorage = (eventData: { title: string; dateTime: string }) => {
  const existingData = localStorage.getItem("events");
  const events = existingData ? JSON.parse(existingData) : [];

  events.push(eventData);

  // sav updated events array to localStorage
  localStorage.setItem("events", JSON.stringify(events));

  window.dispatchEvent(new Event("localStorageUpdate"));
};

export const getEventsFromLocalStorage = () => {
  const existingData = localStorage.getItem("events");
  return existingData ? JSON.parse(existingData) : [];
};
