export const saveToLocalStorage = (userData: { name: string; email: string; skills: string[]; dateTime: string }) => {
    const existingData = localStorage.getItem("users");
    const users = existingData ? JSON.parse(existingData) : [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
  
    window.dispatchEvent(new Event('localStorageUpdate'));
  };
  
// Get data from localStorage
export const getFromLocalStorage = () => {
  const existingData = localStorage.getItem("users");
  return existingData ? JSON.parse(existingData) : [];
};
