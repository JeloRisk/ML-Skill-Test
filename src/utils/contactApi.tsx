/** @format */

const API = "https://jsonplaceholder.typicode.com/users";

/* sample object from API
 {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
 */
export interface Contact {
  id: number;
  name: string;
  phone: string;
}

export const fetchContactData = async (): Promise<Contact[]> => {
  const response = await fetch(API);
  const data = await response.json();

  // filter to only include name and phone
  const contactDetails = data.map((contact: { name: string; phone: string; id: number }) => ({
    id: contact.id,
    name: contact.name,
    phone: contact.phone,
  }));

  return contactDetails;
};
// get contact data from the API
export const getContacts = async (): Promise<Contact[]> => {
  console.log("Fetching contact data from API.");
  const contactData = await fetchContactData();
  return contactData;
};
